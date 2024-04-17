import React, { useEffect, useState } from "react";
import Typed from "react-typed";
import Aos from "aos";
import "aos/dist/aos.css";
import Index from "../Header/index";
import "./application.css";
import Button from "../Button";
import Footer from "../Footers/footer";
import { Link, useNavigate } from "react-router-dom";
import Course from "../courses/Course";
import { applicationMiddleContents } from "../courses/courseData";
import { applyLink } from "../../utils/form";
import CloseApplication from "../CloseApplication/CloseApplication";

const Application = () => {
  const [buttonText, setButtonText] = useState("Apply Now");
  const [showPopup, setShowPopup] = useState(false);
  const navigate = useNavigate();

  const openPopup = () => {
    setShowPopup(true);
  };

  const closePopup = () => {
    setShowPopup(false);
  };

  const sentences = [
    "Application is open for SheCanCode Bootcamp Cohort 10",
    "Starting in January 2024",
    "We are looking for self-motivated learners in Mobile Application Development",
    // "Unlock your potential with SheCanCode",
  ];

  const sentences1 = [
    "We choose perfect course for you!!",
    "Unlock the best-fit course that suits your goals!",
    "Explore handpicked courses that match your needs!",
  ];

  useEffect(() => {
    Aos.init({ duration: 2000 });
    updateButtonText();
    window.addEventListener("resize", updateButtonText);
    return () => {
      window.removeEventListener("resize", updateButtonText);
    };
  }, []);

  const updateButtonText = () => {
    const isSmallScreen = window.innerWidth <= 768;
    setButtonText(isSmallScreen ? "Apply" : "Apply Now");
  };
  
  const updateInfo = () => {
    alert("Application is not yet open, it will be opening soon");
  };

  return (
    <>
      <Index />
      <CloseApplication isOpen={showPopup} onClose={closePopup}>
        <p>Application is closed. We will notify you once it reopens.</p>
      </CloseApplication>
      <div className="application-container">
        {/* <div>
          <h1 className="application-title">
            <Typed strings={sentences} typeSpeed={50} backSpeed={40} loop />
          </h1>
        </div> */}
        {/* <div className="application-upper">
          <div className="application-upper-content">
            <h1 className="text-2xl text-white">Apply for January intake in <span className="text-blue-950">Mobile Application Development</span></h1> */}
            {/* <Link target="_blank" to="http://surl.li/jlauq"><Button btnTitle={`${buttonText}`} /></Link>   */}
            {/* <Link target="_blank" to={applyLink}> */}
            {/* <button className="btn" onClick={openPopup}>
              Apply
            </button> */}
            {/* <button className="btn" onClick={() => window.location.replace('/mobilejanuaryapplication')}>
              Apply
            </button> */}
            {/* </Link> */}
          {/* </div> */}
        {/* </div> */}

        <div className="appliction-middle">
          {applicationMiddleContents.map((content, index) => (
            <div className="middle-1" key={index}>
              <div data-aos="fade-right" className="middle-1-content">
                <div className="middle-1-left">
                  <h2>{content.title}</h2>
                </div>
                <div className="middle-1-right">
                  <h3>{content.subtitle}</h3>
                  <p>{content.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="application-lower-content">
          <div className="middle-2">
            <h1>
              <Typed
                strings={sentences1}
                typeSpeed={80}
                backSpeed={0}
                startDelay={300}
                smartBackspace
                loop
              />
            </h1>
          </div>
          <p>
            Our training workshop will give you the knowledge of how to get
            started, boost your Employability, Entrepreneurship & Leadership
            skills and productivity by learning to code, hosting your websites,
            & designing apps.
          </p>
        </div>
      </div>
      <Course />
      <Footer />
    </>
  );
};

export default Application;
