import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home/index";
const Index = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
    </Routes>
  );
};

export default Index;
