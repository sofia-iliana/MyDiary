import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";

function newEntry() {
  return (
    <div>
      <div>
        <button>Sign out</button>
        <Calendar locale="en-GB" />
      </div>
      <textarea placeholder="New Entry"></textarea>
      <button>Clear</button>
      <button>Save</button>
    </div>
  );
}

export default newEntry;
