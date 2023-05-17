import React from "react";
import "./program.css"
const Program =()=>{
    return(
          <div className="Container">
              <div className="Container-content">
              <div className="Container-content-one">
              <h1>Who Is This Program For?</h1>
              <div className="span"></div>
              <li> <span> Career Launchers</span>: our main focus is to help you start or launch your dream career.</li>

              <li>  <span>Career Builders</span>: professionals ready to build on existing skills in coding, to formalize
               training, and earn a valued certificate.</li>

              <li>  <span>Career Switchers</span>: mid- or later career professionals looking to switch into software 
              development from another field, such as marketing, sales, operations, or any other.</li>
              </div>
              </div>
              <div className="Container-content-two">
                <h1>Program Highlights</h1>
                <div className="line"></div>
                <div className="content">
                    <div className="Card">
                    <div className="Image1"></div>
                    <p>Earn a Certification to recognize your skillsand success</p>
                    </div>
                    <div className="Card">
                    <div className="Image2"></div>
                    <p>GitHub portfolio to share with potential employers</p>
                    </div>
                    <div className="Card">
                    <div className="Image3"></div>
                    <p>Market-ready coding skills in a high-growth market</p>
                    </div>
                    <div className="Card">
                    <div className="Image4"></div>
                    <p>Professional Technical Resume</p>
                    </div>
                    <div className="Card">
                    <div className="Image5"></div>
                    <p>Daily coding help with Learning Facilitators</p>
                </div>
                </div>
              </div>
           </div>
    )
}
export default Program;