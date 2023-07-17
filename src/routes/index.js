import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home/index";
import About from "../pages/About/index";
import Application from "../components/Application/application";
import ApplicationForm from "../components/Application/form/form";
import Dashboard from "../pages/dashboard/dashboard";
import Services from "../pages/services";

const Index = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/program" element={<Application />} />
      <Route path="/service" element={<Services />} />
      <Route path="/apply" element={<ApplicationForm />} />
      <Route path="/shecancodeadmindash" element={<Dashboard />} />
    </Routes>
  );
};

export default Index;
