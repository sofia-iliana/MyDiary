import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import login from "./login";
import signup from "./signup";
import newEntry from "./newEntry";
import usersDiary from "./usersDiary";

function App() {
  return (
    <div className="App">
      <Router>
        <div>
          <Routes>
            <Route path="/" element={<login />} />
            <Route path="/signup" element={<signup />} />
            <Route path="/newEntry" element={<newEntry />} />
            <Route path="/diary" element={<usersDiary />} />
          </Routes>
        </div>
      </Router>
    </div>
  );
}

export default App;
