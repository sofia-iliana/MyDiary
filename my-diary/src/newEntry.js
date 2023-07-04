import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import moment from "moment/moment";

function NewEntry() {
  const navigate = useNavigate();
  const [user, setUser] = useState({ _id: "", username: "", email: "" });
  const [entry, setEntry] = useState("");
  const currentDate = new Date();
  const [date, setDate] = useState(
    currentDate.getDate() +
      "" +
      (currentDate.getMonth() + 1) +
      "" +
      currentDate.getFullYear()
  );

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
        date: date,
      })
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
      <div>
        <h3>Welcome, {user.username}</h3>
        <button
          onClick={() => {
            signOut();
          }}
        >
          Sign out
        </button>
        <Calendar
          locale="en-GB"
          //date={moment("23102015", "DDMMYYYY")}
          //onSelect={(e) => {
          //console.log(e);
          //}}
          onChange={(e) => {
            setDate(e);
          }}
          value={date}
        />
        {console.log(
          date.getDate() + "" + (date.getMonth() + 1) + "" + date.getFullYear()
        )}
      </div>
      <textarea
        placeholder="New Entry"
        value={entry}
        onChange={(e) => {
          setEntry(e.target.value);
        }}
      ></textarea>
      <button
        onClick={() => {
          setEntry("");
        }}
      >
        Clear
      </button>
      <button
        onClick={() => {
          createEntry();
        }}
      >
        Save
      </button>
    </div>
  );
}

export default NewEntry;
