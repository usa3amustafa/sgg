import "./App.css";
import { BrowserRouter, Link, Route, Routes, Navigate } from "react-router-dom";

import Login from "./components/Login";
import LoggedIn from "./LoggedIn";
import ContactForm from "./components/Form";

import Dashboard from "./components/dashboard/Dashboard";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          {/* Login page will be default when its loaded, kindly do user access control (auth) */}
          <Route path="/" element={<Login />} />
          <Route path="/Dashboard" element={<Dashboard />} />
          <Route path="/ContactForm" element={<ContactForm />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
