import React from "react";
import ReactDOM from "react-dom/client";
import "./styles/tailwindcss.css";
import theme from "./styles/theme";

import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    {theme(<App />)}
    {/* <App /> */}
  </React.StrictMode>
);
