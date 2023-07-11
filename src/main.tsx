import React from "react";
import { BrowserRouter as Router } from 'react-router-dom'
import ReactDOM from "react-dom/client";
import "./main.scss";
import App from "./pages/App";

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
      <Router>
        <App />
      </Router>
    </React.StrictMode>
  )

console.log("Here!");