import React, { useState } from "react";

const Topbar = () => {
  const [dropdown, setDropdown] = useState(false);

  return (
    <nav>
      <div className="nav">
        {/* <h2 className="logo">LOGO</h2> */}
        <img className="logo" src="./assets/Logo-70x230.jpg"></img>
        <img className="small-logo" src="./assets/Logo-70X70.jpg"></img>
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
          {/* <div className="img-dropdown">
            <img
              className="profile-img"
              src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt=""
              onClick={() => setDropdown(!dropdown)}
            />
            <div className={`dropdown-menu ${dropdown && `show-dropdown`}`}>
              <p className="dropdown-link">Logout</p>
              <p className="dropdown-link">Dropdown link</p>
              <p className="dropdown-link">Dropdown link</p>
            </div>
          </div> */}

          <div className="profile-name">
            <p
              className="profile-name-text"
              onClick={() => setDropdown(!dropdown)}
            >
              John Smith
            </p>
            <i className="fa-solid fa-sort-down"></i>
            <div className={`dropdown-menu ${dropdown && `show-dropdown`}`}>
              <p className="dropdown-link">Logout</p>
              <p className="dropdown-link">Dropdown link</p>
              <p className="dropdown-link">Dropdown link</p>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Topbar;
