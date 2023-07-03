import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";

function usersDiary() {
  return (
    <div>
      <div>
        <Calendar locale="en-GB" />
      </div>
      <textarea></textarea>
      <button>Edit</button>
      <button>Delete</button>
    </div>
  );
}

export default usersDiary;
