import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home/index";
import About from "../pages/About/index";
import Application from "../components/Application/application";
import ApplicationForm from "../components/Application/form/form";
import Dashboard from "../pages/dashboard/dashboard";
// import Test1 from "../components/Test1";
const Index = () => {
  return (
    <Routes>
      {/* <Route path="/" element={<Test1 />} /> */}
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/program" element={<Application />} />
      <Route path="/apply" element={<ApplicationForm />} />
      <Route path="/shecancodeadmindash" element={<Dashboard />} />
    </Routes>
  );
};

export default Index;
