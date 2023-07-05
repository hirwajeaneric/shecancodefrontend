import React from "react";
import master from "./firsthomesection/image/download (5).jpg";

import microsoft from "./firsthomesection/image/download.jpg";
import digital from "./firsthomesection/image/download (1).png";
import "./firsthomesection/firstsection.css";
const Parteners = () => {
  return (
    <div className="bigcont">

      <div className="holdPatners">
        <div className="partners">
          <div className="lin">
            <div className="fitIn">
              <div className="co"></div>
            </div>
            <h3>Partners </h3>
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

export default Parteners;
