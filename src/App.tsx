import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import './assets/styles/global.css'
import About from "./pages/About";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import Pricing from "./pages/Pricing";
import Spaces from "./pages/Spaces";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/spaces" element={<Spaces />} />
      </Routes>
    </Router>
  );
}

export default App;
