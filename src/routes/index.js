import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../components/Header";
const Index = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
    </Routes>
  );
};

export default Index;
