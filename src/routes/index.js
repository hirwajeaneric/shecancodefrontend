import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home/index";
// import CourseSwitcher from "../pages/Courses page/CourseSwitcher"
import About from "../pages/About/index";
import Application from "../components/Application/application";
// import ApplicationForm from "../components/Application/form/form";
import Dashboard from "../pages/dashboard/dashboard";
import Services from "../pages/services";
import SoftwareEngineering from "../pages/Courses page/SoftwareEng";
import MobileDevelopmentProgram from "../pages/Courses page/MobileDevelopment";
import  PartTimeProgram from "../pages/Courses page/PartTime";
import HighschoolBootcamp from "../pages/Courses page/HighSchool";
import AllCourses from "../pages/Courses page/index";
import JanApplication from "../pages/JanApplication";
import FebApplicationPage from "../pages/FebApplicationPage";
import Careers from "../pages/Careers/Careers";
import CareersDetails from "../pages/Careers/CareersDetails";
import ApplicationForm from "../pages/Careers/ApplicationPage";


const Index = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/courses" element={<AllCourses />} />
      <Route path="/softwareengineering" element={<SoftwareEngineering />} />
      <Route path="/mobiledevelopment" element={<MobileDevelopmentProgram />} />
      <Route path="/partTimeProgram" element={<PartTimeProgram />} />
      <Route path="/highschoolbootcamp" element={<HighschoolBootcamp />} />
      <Route path="/mobilejanuaryapplication" element={<JanApplication />} />
      <Route path="/februaryintake" element={<FebApplicationPage />} />
      <Route path="/careers" element={<Careers />} />
      <Route path="/job/:id" element={<CareersDetails />} />
      <Route path="/job/:id/apply" element={<ApplicationForm />} />
      <Route path="/about" element={<About />} />
      <Route path="/program" element={<Application />} />
      <Route path="/service" element={<Services />} />
      <Route path="/shecancodeadmindash" element={<Dashboard />} />
    </Routes>
  );
};

export default Index;
