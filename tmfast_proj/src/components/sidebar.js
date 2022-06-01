import { useState } from "react";
import "../styles/sidebar.css";

import React from "react";

export default function sidebar() {
  return (
    <div>
      <div className="sidebarContainer">
        <div className="selection">
          <a class="active" href="#dashboard">
            Dashboard
          </a>
        </div>

        <a href="#dashboard">Contacts</a>
        <a href="#dashboard">Quotations</a>
        <a href="#dashboard">Application</a>
        <a href="#dashboard">Form Centre</a>
        <a href="#dashboard">Notifications</a>
      </div>
    </div>
  );
}