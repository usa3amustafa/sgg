import { useState } from "react";
import "../styles/Sidebar.css";
import { Outlet, Link } from "react-router-dom";

import React from "react";

export default function Sidebar() {
  return (
    <div>
      <div className="sidebarContainer">
        <div className="selection">
          {/* <a class="active" href="#dashboard">
            Dashboard
          </a> */}
        </div>
        <Link to="/Dashboard" activestyle>
          Dashboard
        </Link>
        <Link to="/Contact">Contacts</Link>
        <Link to="/quotations">Quotations</Link>
        <Link to="/formcentre">Form Centre</Link>
        <Link to="/notification">Notifications</Link>
      </div>
    </div>
  );
}
