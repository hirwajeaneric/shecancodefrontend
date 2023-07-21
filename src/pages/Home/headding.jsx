import React, { useEffect, useState } from "react";
import Aos from "aos";
import "aos/dist/aos.css";

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

  return (
    <div>
      <div className='heading-section' id='home'>
        <div data-aos='fade-right' className='heading-content'>
          <h2 className='heading-tittle'>
            Train the Next Generation in Software Development
          </h2>
          <button className='heading-btn'>{buttonText}</button>
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
