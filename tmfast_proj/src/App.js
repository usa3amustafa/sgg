import "./App.css";
import { BrowserRouter, Link, Route, Routes, Navigate } from "react-router-dom";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import Login from "./components/Login";
import Contact from "./components/Contact";
import LoggedIn from "./LoggedIn";

import Topbar from "./components/Topbar";
// import Sidebar from "./components/Sidebar";
import Dashboard from "./components/dashboard/Dashboard";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          {/* Block the Login file temporary, kindly do the user access control */}
          <Route path="/" element={<Login />} />
          <Route path="/LoggedIn" element={<LoggedIn />} />
          <Route path="/Contact" element={<Contact />} />
          <Route path="/Dashboard" element={<Dashboard />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
