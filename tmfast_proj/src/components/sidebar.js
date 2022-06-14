import React from "react";
import sidebarData from "./sidebarData";
import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <div className="side-bar">
      <Link
        to="/Dashboard"
        style={{ color: "#0096a9", textDecoration: "none" }}
      >
        <span className="side-bar-item side-bar-active">
          <div className="side-bar-icon">
            <i className="fa-solid fa-chart-line"></i>
          </div>
          <p className="side-bar-text">dashboard</p>
        </span>
      </Link>
      <Link to="/ContactForm">
        <span className="side-bar-item">
          <div className="side-bar-icon">
            <i className="fa-solid fa-address-book"></i>
          </div>
          <p className="side-bar-text">contacts</p>
        </span>
      </Link>

      <div className="side-bar-item">
        <div className="side-bar-icon">
          <i className="fa-solid fa-file-invoice"></i>
        </div>
        <p className="side-bar-text">Quotations</p>
      </div>
      <div className="side-bar-item">
        <div className="side-bar-icon">
          <i className="fa-solid fa-file"></i>
        </div>
        <p className="side-bar-text">Applications</p>
      </div>
      <div className="side-bar-item">
        <div className="side-bar-icon">
          <i class="fa-solid fa-folder-open"></i>
        </div>
        <p className="side-bar-text">Form Centre</p>
      </div>
      <div className="side-bar-item">
        <div className="side-bar-icon">
          <i className="fa-solid fa-bell"></i>
        </div>
        <p className="side-bar-text">Notifications</p>
      </div>
    </div>
  );
};

export default Sidebar;
