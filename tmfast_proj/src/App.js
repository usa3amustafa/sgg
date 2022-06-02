import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter, Link, Route, Routes, Navigate } from "react-router-dom";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import Login from "./components/Login";
import Contact from "./components/Contact";
import Dashboard from "./components/Dashboard";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <div className="header">
          <Navbar />
        </div>

        <div className="container">
          <Sidebar />
          <div className="content"></div>
        </div>
        {/* Need to style the app */}

        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/Contact" element={<Contact />} />
          <Route path="/Dashboard" element={<Dashboard />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
