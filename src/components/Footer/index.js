import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="body-foot">
      <div className="footer-content">
        <div className="waves">
          <div className="wave" id="wave1"></div>
          <div className="wave" id="wave2"></div>
          <div className="wave" id="wave3"></div>
        </div>
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
              <i class="bx bxl-linkedin-square"></i>
            </div>
            <div className="square">
              <i class="bx bxl-instagram"></i>
            </div>
            <div className="square">
              <i class="bx bxl-twitter"></i>
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
