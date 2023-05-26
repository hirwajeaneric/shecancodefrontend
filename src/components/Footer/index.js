import React from "react";
import "./Footer.css";
import Image1 from "./Images/SecondWave.svg";
import Image2 from "./Images/ThirdWave.svg";

const Footer = () => {
  return (
    <div className="body-foot">
      <div className="waves">
        <div className="wave wave1"></div>
      </div>
      <div className="images">
        <div className="image1">
          <img src={Image1} alt="not found"/>
        </div>
        <div className="image2">
          <img src={Image2} alt="....."/>
        </div>
      </div>
      <div className="footer-content">
        <div id="company">
          <h3 className="color">Company</h3>
          <ul>
            <li>
              <a href="/home">Igire Rwanda Organization</a>
            </li>
            <li>
              <a href="/home">TekCODE</a>
            </li>
            <li>
              <a href="/home">Partners</a>
            </li>
          </ul>
        </div>
        <div id="resources">
          <h3 className="color">Resources</h3>
          <ul>
            <li>
              <a href="/home">SheCanCODE directory</a>
            </li>
            <li>
              <a href="/home">Help Center</a>
            </li>
            <li>
              <a href="/home">Privacy & Terms</a>
            </li>
          </ul>
        </div>
        <div id="program">
          <h3 className="color">Program</h3>
          <ul>
            <li>
              <a href="/home">UI/UX Design</a>
            </li>
            <li>
              <a href="/home">HTML & CSS</a>
            </li>
            <li>
              <a href="/home">React JS</a>
            </li>
            <li>
              <a href="/home">Node JS</a>
            </li>
          </ul>
        </div>
        <div id="follow">
          <h3 className="color">Follow us:</h3>
          <div className="follow">
            <div className="square">
              <a href="/home">
                <i class="bx bxl-linkedin-square"></i>
              </a>
            </div>
            <div className="square">
              <a href="/home">
                <i class="bx bxl-instagram"></i>
              </a>
            </div>
            <div className="square">
              <a href="/home">
                <i class="bx bxl-twitter"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
      <hr id="horizontal" />
      <div id="copyright">
        <i class="bx bx-copyright"></i> 2023 IGIRE RWANDA ORGANIZATION. All
        rights reserved
      </div>
    </div>
  );
};
export default Footer;
