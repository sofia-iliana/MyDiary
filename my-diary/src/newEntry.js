import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";

function NewEntry() {
  const navigate = useNavigate();
  const [user, setUser] = useState({ _id: "", username: "", email: "" });
  const [entry, setEntry] = useState("");
  const currentDate = new Date();
  const [date, setDate] = useState("");
  const [id, setId] = useState({});

  useEffect(() => {
    if (localStorage.getItem("token")) {
      //access the users diary
      axios
        .post("http://localhost:1212/user/verify", {
          token: localStorage.getItem("token"),
        })
        .then(({ data }) => {
          if (data._id) {
            //access users entries
            setUser(data);
            axios
              .get("http://localhost:1212/diary/" + data._id)
              .then(({ data }) => {
                console.log(data);
              });
          } else {
            navigate("/"); //go to login
          }
          console.log(data);
        });
    } else {
      navigate("/"); // go to login
    }
  }, []);

  function createEntry() {
    axios
      .post("http://localhost:1212/diary/new", {
        entry: entry,
        userId: user._id,
        date:
          currentDate.getDate() +
          "" +
          (currentDate.getMonth() + 1) +
          "" +
          currentDate.getFullYear(),
      })
      .then(({ data }) => {
        alert(data.msg);
      });
  }

  function goToEntry() {
    axios
      .get("http://localhost:1212/diary/byDate/" + user._id + "/" + date)
      .then(({ data }) => {
        setId(data);
      });
  }

  function deleteEntry() {
    axios
      .delete("http://localhost:1212/diary/delete/" + id._id)
      .then(({ data }) => {
        alert(data.msg);
      });
  }

  function updateEntry() {
    axios
      .put("http://localhost:1212/diary/edit/" + id._id, { entry: entry })
      .then(({ data }) => {
        alert(data.msg);
      });
  }

  function signOut() {
    localStorage.removeItem("token");
    navigate("/");
  }

  return (
    <div>
      <div className="heading">
        <button
          className="signout"
          onClick={() => {
            signOut();
          }}
        >
          Sign out
        </button>
        <h3>Welcome, {user.username}</h3>
      </div>
      <div className="diary">
        <Calendar
          locale="en-GB"
          onChange={(e) => {
            setDate(
              e.getDate() + "" + (e.getMonth() + 1) + "" + e.getFullYear()
            );
            goToEntry();
            setEntry(id.entry);
            console.log(id._id);
          }}
          value={date}
        />

        <textarea
          placeholder="New Entry"
          value={entry}
          onChange={(e) => {
            setEntry(e.target.value);
          }}
        ></textarea>
        <div>
          <button
            className="btn"
            onClick={() => {
              setEntry("");
            }}
          >
            Clear
          </button>
          <button
            className="btn"
            onClick={() => {
              createEntry();
            }}
          >
            Save
          </button>
          <button
            className="btn"
            onClick={() => {
              updateEntry();
            }}
          >
            Edit
          </button>
          <button
            className="btn"
            onClick={() => {
              deleteEntry();
            }}
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
}

export default NewEntry;
