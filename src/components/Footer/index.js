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
          <img src={Image1} />
        </div>
        <div className="image2">
          <img src={Image2} />
        </div>
      </div>
      <div className="footer-content">
        <div id="company">
          <h3 className="color">Company</h3>
          <ul>
            <li>
              <a href="">Igire Rwanda Organization</a>
            </li>
            <li>
              <a href="">TekCODE</a>
            </li>
            <li>
              <a href="">Partners</a>
            </li>
          </ul>
        </div>
        <div id="resources">
          <h3 className="color">Resources</h3>
          <ul>
            <li>
              <a href="">SheCanCODE directory</a>
            </li>
            <li>
              <a href="">Help Center</a>
            </li>
            <li>
              <a href="">Privacy & Terms</a>
            </li>
          </ul>
        </div>
        <div id="program">
          <h3 className="color">Program</h3>
          <ul>
            <li>
              <a href="">UI/UX Design</a>
            </li>
            <li>
              <a href="">HTML & CSS</a>
            </li>
            <li>
              <a href="">React JS</a>
            </li>
            <li>
              <a href="">Node JS</a>
            </li>
          </ul>
        </div>
        <div id="follow">
          <h3 className="color">Follow us:</h3>
          <div className="follow">
            <div className="square">
              <a href="">
                <i class="bx bxl-linkedin-square"></i>
              </a>
            </div>
            <div className="square">
              <a href="">
                <i class="bx bxl-instagram"></i>
              </a>
            </div>
            <div className="square">
              <a href="">
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
