import React from "react";
import Image from "./aboutImage/sample.webp";
import ImageOne from "./aboutImage/1.PNG";
import ImageTwo from "./aboutImage/2.PNG";
import ImageThree from "./aboutImage/3.PNG";
import ImageFour from "./aboutImage/4.PNG";
import Image2 from "./aboutImage/about1.PNG";
import Image3 from "./aboutImage/about2.PNG";
import Image4 from "./aboutImage/about4.PNG";
import Image6 from "./aboutImage/about3.PNG";
import Image7 from "./aboutImage/about5.PNG";
import Image8 from "./aboutImage/about7.jpeg";
import { useState } from "react";
import "./About.css";
const About = () => {
  const [open, setOpen] = useState(false);
  return (
    <div className="about-page">
      <div className="about-one-section">
        <img src={Image} alt="background" />
        <p>Who We Are</p>
      </div>
      <div className="about-two-section">
        <div className="about-rotate">
          <div>
            <img src={ImageOne} alt="image1" className="imageOne" />
            <img src={ImageTwo} alt="image2" className="imageTwo" />
          </div>
          <div className="both">
            <img src={ImageThree} alt="image3" className="imageThree" />
            <img src={ImageFour} alt="image4" className="imageFour" />
          </div>
        </div>
        <div className="about-par">
          <h1>We Develop your future</h1>
          <p>
            Learn web development and land a job in the tech industry with
            1-on-1 guidance from an expert mentor and career coach. This program
            goes beyond teaching coding skills to career services you need to
            help you land a high-paying job in the tech industry. You spend time
            during the course with the career service team to help you reach
            your job search and job preparation guidance.Attending this program,
            you can expect to work hard, pre-work(homeworks), assignments,
            real-life projects and project presentations, code review with
            technical facilitators, daily coding seminars, mentors, inspiration
            from experts, interview preparation and 1 on 1 with the career team.
          </p>
        </div>
      </div>
      <div className="about-thrird-section">
        <div className="about-right">
          <img src={Image2} alt="not found" />
          <br />
          <img src={Image3} alt="image3 not found" />
          <img src={Image4} alt="image4 not found" />
        </div>
        <div className="about-paragraph">
          <h2>
            Unlock your potential.
            <br /> Learn tech skills today.
          </h2>
          <p>
            We are strongly convinced that tech is for everyone and we support
            you to achieve your goals whatever your project. SheCanCode now
            boasts a community of 21,000 graduates from all walks of life,
            including a lot of entrepreneurs who created 212 tech startups and
            raised $820M+ globally.
          </p>
        </div>
        <div className="about-left">
          <img src={Image6} alt="image1" />

          <img src={Image7} alt="image2" />
          <br />
          <img src={Image8} alt="image3" className="key" />
        </div>
      </div>

      <div className="about-founder">
        <h2>Co-Founding Team</h2>
        <p className="para">
          SheCanCode was created in 2013 by MBANDA and Jean Jack with the aim to
          build a program to teach people the skills and tools to bring their
          ideas to life as they felt that traditional degrees' courses were
          failing to provide students with these new tech skills.
        </p>
        {open && (
          <div className="founder-one">
            <img src={Image3} alt="images" />
            <div className="founder-description">
              <h3>Mbanda Co-founder</h3>
              <p>
                Mbanda is a software engineer with more than 10 years of
                experience. He worked at ..., and now teaches all you need to
                know about web programming and the technical workflow used in a
                startup.
              </p>
            </div>
          </div>
        )}
        <div className="about-icon">
          <span>
            <i className="bx bx-chevron-left"></i>
            <i
              className="bx bx-chevron-right"
              onClick={() => {
                setOpen(!open);
              }}
            ></i>
          </span>
        </div>
        <div className="founders">
          <div className="founder-one">
            <img src={Image2} alt="images" />
            <div className="founder-description">
              <h3>Mbanda Co-founder</h3>
              <p>
                Mbanda is a software engineer with more than 10 years of
                experience. He worked at ..., and now teaches all you need to
                know about web programming and the technical workflow used in a
                startup.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="why-about">
        <h3>Why SheCanCode?</h3>
        <p>
          As we say in French : L'éducation supérieure a 'un wagon de retard'.
          <br /> <br />
          An idiom that could be literally translated into: 'Higher education
          has missed the train'.
          <br /> <br /> It points to this idea of a 'missing block' or 'missing
          wagon' in the “train of higher education”. And a wagon is a vehicle
          that takes a group of people (like a class of students) on a journey
          to a destination. This is exactly what our bootcamps are about!
        </p>
      </div>
      <div className="about-leads">
        <h1>SheCanCode Team</h1>
        <div className="leadership-form">
          <div className="lead-one">
            <div className="about-leader">
              <img src={Image4} alt="no image12"/>
              <h3>Noella</h3>
              <p>Manager</p>
            </div>
            <div className="about-path"></div>
          </div>
          <div className="lead-one">
            <div className="about-leader">
              <img src={Image4} alt="no image6"/>
              <h3>Noella</h3>
              <p>Manager</p>
            </div>
            <div className="about-path"></div>
          </div>
          <div className="lead-one">
            <div className="about-leader">
              <img src={Image4} alt="no image5"/>
              <h3>Noella</h3>
              <p>Manager</p>
            </div>
            <div className="about-path"></div>
          </div>
          <div className="lead-one">
            <div className="about-leader">
              <img src={Image4} alt="no image4"/>
              <h3>Noella</h3>
              <p>Manager</p>
            </div>
            <div className="about-path"></div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default About;
