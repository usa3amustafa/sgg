import React, { useState } from "react";
import "../styles/Login.css";
import Form from "react-bootstrap/Form";

export default function Login() {
  return (
    <body>
      <div className="content">
        <div className="white">
          <img className="logo" src="assets/placeholder-logo-4.png"></img>
        </div>

        {/* <div className="loginContainer">
          <form>
            <div class="input">
              <input type="text" placeholder="username"></input>
              <i class="fa fa-user"></i>
            </div>
          </form>
        </div> */}

        <div className="container">
          <div className="input-icons">
            <input
              className="input-field"
              type="text"
              placeholder="username"
            ></input>
            <i class="fa fa-user icon"></i>
          </div>
        </div>

        {/* <div className="Login">
          <form>
            <div className="input">
              <input
                type="text"
                src="assets/user.png"
                id="username"
                name="username"
                placeholder="Username"
              />
              <i className="fa fa-user"></i>

              <input
                type="text"
                src="assets/lock.png"
                id="password"
                name="password"
                placeholder="Password"
              />
            </div>

            <div className="button">
              <input type="submit" value="LOGIN" />
            </div>

            <div className="small">
              <small>
                <a href="#">Forgot username/password?</a>
              </small>
              <small>
                Don't have an account?<a href="#">Register now.</a>
              </small>
            </div>
          </form>
        </div> */}
      </div>
    </body>
  );
}
