import React from "react";

const Topbar = () => {
  return (
    <nav>
      <div className="nav">
        <h2 className="logo">Logo</h2>
        <div className="nav-items">
          <div className="search-box">
            <input
              type="text"
              className="search-input"
              placeholder="Search Proposal..."
            />
            <div className="search-icon">
              <i className="fa-solid fa-magnifying-glass "></i>
            </div>
          </div>
          <div className="bell-icon">
            <i className="fa-solid fa-bell"></i>
          </div>

          <img
            className="profile-img"
            src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt=""
          />

          <div className="profile-name">
            <p className="profile-name-text">John Smith</p>
            <i className="fa-solid fa-sort-down"></i>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Topbar;
