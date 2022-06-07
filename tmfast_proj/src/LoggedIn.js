import React from "react";
import Topbar from "./components/Topbar";
import Sidebar from "./components/Sidebar";
import Dashboard from "./components/dashboard/Dashboard";
import "./index.css";

const App = () => {
  return (
    <>
      <Topbar />

      <main>
        <div className="main">
          <Sidebar />
          <div className="dashboard">
            <Dashboard />
          </div>
        </div>
      </main>
    </>
  );
};

export default App;
