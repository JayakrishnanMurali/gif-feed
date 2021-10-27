import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import FeedState from "./context/FeedState";

ReactDOM.render(
  <React.StrictMode>
    <FeedState>
      <App />
    </FeedState>
  </React.StrictMode>,
  document.getElementById("root")
);
