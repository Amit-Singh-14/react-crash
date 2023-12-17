import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";

function MyApp() {
  return (
    <div>
      <h1>this is a function</h1>
    </div>
  );
}

const anotherElement = (
  <a href="http://google.com" target="_blank">
    visit google
  </a>
);

const ReactElement = React.createElement(
  "a",
  {
    href: "http://youtube.com",
    target: "_blank",
  },
  "click me to visit"
);

ReactDOM.createRoot(document.getElementById("root")).render(
  // MyApp() as it is a function we can directly run it like this
  // but this not good practice.

  /* anotherElement 
  as we can directly add this const render convert this into reactELemnt object tree
  */
  ReactElement
);
