import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home/index";
import About from "../pages/About";
const Index = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
    </Routes>
  );
};

export default Index;
