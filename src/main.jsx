import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { InputProvider } from "./context/messageContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <InputProvider>
      <App />
    </InputProvider>
  </React.StrictMode>
);
