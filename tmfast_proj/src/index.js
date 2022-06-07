import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import LoggedIn from "./LoggedIn";
import "./index.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
    {/* <LoggedIn /> */}
  </React.StrictMode>
);
