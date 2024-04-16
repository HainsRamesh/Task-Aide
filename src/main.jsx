import React from "react";
import reactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import AppContext from "./AppContext";
import "react-toastify/dist/ReactToastify.css";

reactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AppContext>
      <App />
    </AppContext>
  </React.StrictMode>
);
