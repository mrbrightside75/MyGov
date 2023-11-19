import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./Login";
import Dashboard from "./Dashboard";
import MyGovernment from "./MyGovernment";
import MyRep from "./MyRep";
import MyBallot from "./MyBallot";

function App() {
  return (
    <div className="App">
      <Router basename="/MyGov">
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/mygovernment" element={<MyGovernment />} />
          <Route path="/myrep" element={<MyRep />} />
          <Route path="/myballot" element={<MyBallot />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
