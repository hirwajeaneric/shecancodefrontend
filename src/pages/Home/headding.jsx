import React, { useEffect, useState } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import { Link } from "react-router-dom";

const Heading = () => {
  const [buttonText, setButtonText] = useState("Get started");

  useEffect(() => {
    Aos.init({ duration: 3000 });
    updateButtonText();
    window.addEventListener("resize", updateButtonText);
    return () => {
      window.removeEventListener("resize", updateButtonText);
    };
  }, []);

  const updateButtonText = () => {
    const isSmallScreen = window.innerWidth <= 768;
    setButtonText(isSmallScreen ? "Apply" : "Get started");
  };
const updateApplyButton=()=>{
  alert("Application is not yet open, it will be opening soon")
}
  return (
    <div>
      <div className='heading-section' id='home'>
        <div data-aos='fade-right' className='heading-content'>
          <h2 className='heading-tittle'>
            Train the Next Generation in Software Development
          </h2>
        <Link target="blank"  ></Link>  <button className='heading-btn' onClick={updateApplyButton} > {buttonText}</button>
        </div>
        <div className='heading-program'>
          <ul>
            <li>UI/UX Design</li>
            <li>Frontend</li>
            <li>Backend</li>
            <li>Project Manage</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Heading;
