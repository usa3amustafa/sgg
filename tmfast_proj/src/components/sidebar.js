import React from "react";
import sidebarData from "./sidebarData";

const Sidebar = () => {
  return (
    <div className="side-bar">
      {sidebarData.map(s => (
        <div className="side-bar-item" key={s.id}>
          <div className="side-bar-icon">
            <i className={`${s.icon}`}></i>
          </div>
          <p className="side-bar-text">{s.text}</p>
        </div>
      ))}
    </div>
  );
};

export default Sidebar;
