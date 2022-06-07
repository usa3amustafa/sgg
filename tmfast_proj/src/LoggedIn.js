import React from "react";
import Topbar from "./components/Topbar";
import Sidebar from "./components/Sidebar";
import Dashboard from "./components/dashboard/Dashboard";
import "./index.css";
import ContactForm from "./components/Form";

const App = () => {
  return (
    <>
      <Topbar />

      <main>
        <div className="main">
          <Sidebar />

          {/* Right Content  */}
          <div className="dashboard">
            {/* <Dashboard />
            <ContactForm /> */}
          </div>
        </div>
      </main>
    </>
  );
};

export default App;

// To be deleted - Ignore.
