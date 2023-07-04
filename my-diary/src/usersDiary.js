import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";

function UsersDiary() {
  const navigate = useNavigate();
  const [user, setUser] = useState({ _id: "", username: "", email: "" });
  const currentDate = new Date();
  const [date, setDate] = useState("");

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

  function signOut() {
    localStorage.removeItem("token");
    navigate("/");
  }

  return (
    <div>
      <div>
        <button
          onClick={() => {
            signOut();
          }}
        >
          Sign out
        </button>
        <Calendar locale="en-GB" />
      </div>
      <textarea></textarea>
      <button>Edit</button>
      <button>Delete</button>
    </div>
  );
}

export default UsersDiary;
