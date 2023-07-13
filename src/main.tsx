import React from "react";
import { BrowserRouter } from "react-router-dom";
import ReactDOM from "react-dom/client";
import "./main.scss";
import App from "./pages/App";

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <BrowserRouter>

            <App />
        </BrowserRouter>
    </React.StrictMode>
)
