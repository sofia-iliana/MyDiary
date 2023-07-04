import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./Login";
import Signup from "./signup";
import NewEntry from "./newEntry";
import UsersDiary from "./usersDiary";
import "./style.css";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Login />}></Route>
          <Route path="/signup" element={<Signup />}></Route>
          <Route path="/newEntry" element={<NewEntry />}></Route>
          <Route path="/usersDiary" element={<UsersDiary />}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
