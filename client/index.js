import React from "react";
import ReactDOM from "react-dom";
import App from "./src/App.jsx";

const container = document.getElementById("root");
const root = ReactDOM.createRoot(container);
root.render(
  <Provider>
    <App />
  </Provider>
);
