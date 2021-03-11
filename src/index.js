import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

//Virtual DOM
//<App /> is component that is function.
//<    /> is for html (called JSX: JS + HTML linking)
//render only one component.
//Hence, import other files in App.js
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
