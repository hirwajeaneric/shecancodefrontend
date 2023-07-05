import React from "react";
import master from "./image/download (5).jpg";
import giz from "./image/giz.png";
import microsoft from "./image/download.jpg";
import digital from "./image/download (1).png";
import "./firstsection.css";
const Firstsection = () => {
  return (
    <div className="bigcont">
      {/* <div className="container-firstSection">
        <div className="left">
          <h2 id="Tech">Build your Career in Tech</h2>
          <p className="para">Join SheCanCode, Learn, Get employed.</p>
          <p className="par">
            Irrespective of your prior coding proficiency, whether you possess
            limited experience, are self-taught, or feel uncertain,we warmly
            welcome you to join our esteemed program. We provide comprehensive
            training and guidance, <br></br>empowering individuals to acquire
            valuable coding skills and pave their path towards professional
            growth
          </p>
          <br></br>
          <div className="whole">
            <div className="designer">
              <i class="bx bxl-codepen"></i>
            </div>
            <h4>UI/UX Design</h4>
            <div className="frontend">
              <i class="bx bx-code-block"></i>
            </div>
            <h4>Front-end</h4>
            <div className="backend">
              <i class="bx bxs-data"></i>
            </div>
            <h4>Back-end</h4>
          </div>
          <br />
          <button id="btn" className="button">
            Get started
          </button>
        </div>
        <div className="rigth"></div>
      </div> */}

      <div className="holdPatners">
        <div className="partners">
          <div className="lin">
            <div className="fitIn">
              <div className="co"></div>
            </div>
            <h3>Clients and hiring partners </h3>
            <div className="fitIt">
              <div className="co"></div>
            </div>
          </div>
          <div className="mini">
            <div className="mini-partener">
              <img src={master} alt="not found" className="mastercard" />
            </div>

            <div className="mini-partener">
              <img src={digital} alt="not found" className="DTC" />
            </div>
            <div className="mini-partener">
              <img src={microsoft} alt="not found" className="DTC" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Firstsection;
