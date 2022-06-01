import { useState } from "react";
import "../styles/Navbar.css";

export default function Navbar() {
  const [isNavExpanded, setIsNavExpanded] = useState(false);

  return (
    <nav className="navigation">
      <img className="logo" src="assets/placeholder-logo-4.png"></img>
      <button
        className="hamburger"
        onClick={() => {
          setIsNavExpanded(!isNavExpanded);
        }}
      >
        {/* icon from Heroicons.com */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          viewBox="0 0 20 20"
          fill="white"
        >
          <path
            fillRule="evenodd"
            d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM9 15a1 1 0 011-1h6a1 1 0 110 2h-6a1 1 0 01-1-1z"
            clipRule="evenodd"
          />
        </svg>
      </button>
      <div
        className={
          isNavExpanded ? "navigation-menu expanded" : "navigation-menu"
        }
      >
        <ul>
          {/* SearchBar */}
          <li>
            <div className="wrap">
              <div className="search">
                <input
                  type="text"
                  className="searchTerm"
                  placeholder="Search Proposal..."
                ></input>
                <button type="submit" className="searchButton">
                  <i className="fa fa-search"></i>
                </button>
              </div>
            </div>
          </li>
          <li>
            <button className="notificationButton">
              <i class="fa fa-bell"></i>
            </button>
          </li>
          {/* <li>
            <a href="/contact">Contact</a>
          </li> */}
          <li>
            <img src="assets/avatar.png" className="avatar"></img>
          </li>
          {/* Dropdown */}
          <li>
            <div className="dropdown">
              <button className="dropbtn">
                John Smith
                <i class="fa fa-caret-down"></i>
              </button>
              <div className="dropdown-content">
                <a href="#">Logout</a>
                <a href="#">Link 2</a>
                <a href="#">Link 3</a>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </nav>
  );
}
