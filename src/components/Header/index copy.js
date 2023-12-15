import { useState } from "react";
import { FaTimes } from "react-icons/fa";
import { Link, useLocation } from "react-router-dom";
import Image from "./images/logoscc.png";
import "./nav.css";
import "../../pages/Courses page/AllCourses.css";
import Button from "../Button";
import Bar from "../Nav";
import { applyLink } from "../../utils/form";
import CloseApplication from "../CloseApplication/CloseApplication";


const updateInfo = () => {
  alert("application is not yet open, it will be opening soon");
};
let Index = () => {
  let [humbState, setHumbState] = useState(true);
  const location = useLocation();

  const [showPopup, setShowPopup] = useState(false);

  const openPopup = () => {
    setShowPopup(true);
  };

  const closePopup = () => {
    setShowPopup(false);
  };

  const [pop, setPop] = useState(false);
  const togglePop = () => {
    setPop(!pop)

  }
  return (
    <>
      <CloseApplication isOpen={showPopup} onClose={closePopup}>
        <p>Application is closed. We will notify you once it reopens.</p>
      </CloseApplication>
      <div className="hamGrid">
        <div class="all">
          <img src={Image} alt="scc-logo" />
          <ul class="navbar">
            <li>
              <Link className={location.pathname === "/" ? "active" : ""} to="/">
                Home
              </Link>
            </li>
            <li>
              <Link className={location.pathname === "/courses" ? "active" : ""} to="/courses">
                Courses
              </Link>

              <ul>
                <li><a href="/courses"></a>
                  <ul className='subMenu'>
                    <li><a href='/courses'>All Courses</a></li>
                    <li><a href='/softwareengineering'>Software Engineering</a></li>
                    <li><a href='/mobiledevelopment'>Mobile Application Development</a></li>
                    <li><a onClick={togglePop}>Part Time Software Engineering</a></li>
                    {pop &&
                      (<div className='open-pop' >
                        <div className='overlay' onClick={togglePop}>
                          <p> This program will start soon.Stay tuned for updates-we'll notify you as soon as it begins!!</p>
                          <span className="pop-close" onClick={togglePop}>
                            &times;
                          </span>
                        </div>
                      </div>
                      )}
                    <li><a  onClick={togglePop}>High school holidays tech bootcamp</a></li>
                    {pop &&
                      (<div className='open-pop' >
                        <div className='overlay' onClick={togglePop}>
                          <p> This program will start soon.Stay tuned for updates-we'll notify you as soon as it begins!!</p>
                          <span className="pop-close" onClick={togglePop}>
                            &times;
                          </span>
                        </div>
                      </div>
                      )}
                  </ul>
                </li>
              </ul>

            </li>
            <li>
              <Link className={location.pathname === "/about" ? "active" : ""} to="/about">
                About
                {/* <i class="bx bx-chevron-down"></i> */}
              </Link>
            </li>
            <li>
              <Link className={location.pathname === "/service" ? "active" : ""} to="/service">
                Career Services
              </Link>
            </li>
            <li>
              <Link className={location.pathname === "/program" ? "active" : ""}
                to="/program"
              >
                Program
              </Link>
            </li>
          </ul>

          {/* <div class="menu">
           
            <button className="btn" onClick={openPopup}>
              Apply{" "}
            </button>
            
            {humbState && (
              <div
                class="bx bx-menu"
                id="menu-icon"
                onClick={() => setHumbState(false)}
              ></div>
            )}
          
            {!humbState && (
              <FaTimes class="close" onClick={() => setHumbState(true)} />
            )}
          </div> */}
        </div>
        {!humbState && (
          <div className="hamberger">
            <Link to="/">
              {" "}
              <p> Home</p>
            </Link>
            <Link to="/courses">
              <p>Courses</p>
            </Link>
            <Link to="/about">
              <p>About</p>
            </Link>
            <Link to="/service">
              {" "}
              <p>Services</p>
            </Link>
            <Link to="/program">
              <p>Program</p>
            </Link>

            {/* <Link target="_blank" to={applyLink}> */}
            {/* <button className="btn" onClick={openPopup}>
              <p>Apply</p>
            </button> */}
            {/* </Link> */}
          </div>
        )}
      </div>
    </>
  );
};

export default Index;
