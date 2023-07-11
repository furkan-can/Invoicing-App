import React from 'react';
import { Routes, Route } from "react-router-dom";
import Home from './home/home';




const App = () => {

    return (
        <>
            <Routes>
                <Route path="/" element={<Home/>} />
                <Route path="/about" element={<div>About</div>} />
                <Route path="/contact" element={<div>Contact</div>} />
            </Routes>
        </>
    );
}

export default App;
