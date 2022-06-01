import React, { useState } from "react";
import "../styles/Login.css";
import Form from "react-bootstrap/Form";

export default function Login() {
    return (
      <div className="Login">
      <Form>
        <Form.Group size="lg" controlId="username">
          <Form.Control
            type="email"
            placeholder="Username"
          />
        </Form.Group>
        <Form.Group size="lg" controlId="password">
          <Form.Control
            type="password"
            placeholder="Password"
          />
        </Form.Group>
        <button type="submit">Submit</button>
        
      </Form>
    </div>
    );
  }