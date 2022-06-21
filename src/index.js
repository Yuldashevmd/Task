import React from "react";
import ReactDOM from "react-dom/client";
import UserContext from "./Components/Context";
import "./index.css";
import Root from "./Root";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <UserContext>
      <Root />
    </UserContext>{" "}
  </React.StrictMode>
);
