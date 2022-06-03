import React, { useState } from "react";
import "../styles/Login.css";
import Form from "react-bootstrap/Form";
import { Link } from "react-router-dom";

export default function Login() {
  return (
    <body>
      <div className="content">
        <div className="white">
          <img className="logo" src="assets/placeholder-logo-4.png"></img>
        </div>

        <div className="container">
          <div className="search-bar-2">
            <input type="text" placeholder="username"></input>
            <a href="#">
              <i className="fa fa-user"></i>
            </a>
          </div>
        </div>
        <div className="container-password">
          <div className="search-bar-2">
            <input type="password" placeholder="password"></input>
            <a href="#">
              <i className="fa fa-lock"></i>
            </a>
          </div>
        </div>

        <div className="container-password">
          <div className="button">
            <button>Login</button>
          </div>
        </div>

        <div className="container-password">
          <Link
            to="/forgetpassword"
            style={{ color: "#ffffff", textDecoration: "none" }}
          >
            Forget username/password?
          </Link>
        </div>

        <div className="container-password">
          <Link
            to="/forgetpassword"
            style={{ color: "#ffffff", textDecoration: "none" }}
          >
            Don't have an account?Register now.
          </Link>
        </div>
      </div>
      <footer>
        <p>
          © 2022 Tokio Marine Life Insurance Singapore Ltd. (Company Reg. No.
          19480005D)
        </p>
        <p>All Rights Reserved. Terms of Use | Privacy Statement</p>
      </footer>
    </body>
  );
}
