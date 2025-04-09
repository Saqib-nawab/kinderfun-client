// src/main.tsx
import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router } from "react-router-dom";
import App from "./App";
import "./index.css"; // Import your global CSS (including Tailwind CSS)
import "./output.css";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <Router>
      <div className="min-h-screen flex justify-center items-center">
        {" "}
        {/* Ensures everything is centered */}
        <App />
      </div>
    </Router>
  </React.StrictMode>
);
