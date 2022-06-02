import React, { useState } from "react";
import "../styles/Login.css";
import Form from "react-bootstrap/Form";

export default function Login() {
    return (
      <div className="content">
        <div className="white">
        </div>
        <div className="teal">
          <div className="Login">
            <form>
              <div className="input">
                <input type="text" src="assets/user.png" id="username" name="username" placeholder="Username"/>
                <input type="text" src="assets/lock.png" id="password" name="password" placeholder="Password"/>
              </div>
              <div className="button">
                <input type="submit" value="LOGIN" />
              </div>
              <div className="small">
                <small><a href="#">Forgot username/password?</a></small>
                <small>Don't have an account?<a href="#">Register now.</a></small>
              </div>
            </form> 
          </div>
        </div>
    </div>
   
    );
  }