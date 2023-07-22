import React from "react";
import Image from "./aboutImage/bacgrd.jpg";
import ImageOne from "./aboutImage/1.PNG";
import ImageTwo from "./aboutImage/2.PNG";
import ImageThree from "./aboutImage/3.PNG";
import ImageFour from "./aboutImage/4.PNG";
import Image2 from "./aboutImage/about1.PNG";
import Image3 from "./aboutImage/about2.PNG";
import Image4 from "./aboutImage/about4.PNG";
import Image6 from "./aboutImage/others.jpg";
import Image7 from "./aboutImage/other.jpg";
import Image8 from "./aboutImage/nexts.jpg";
import Header from "../../components/Header";
import Nav from "../../components/Nav";
import { leadershipTeam } from "../../constants";
import { useState } from "react";
import "./About.css";
import Button from "../../components/Button";
import Footer from "../../components/Footers/footer";
import mbanda from "../../assets/Mbanda.png";
import jj from "./aboutImage/jj.jpeg";
const About = () => {
  const [open, setOpen] = useState(false);
  return (
    <div className="about-page">
      <Nav />
      <Header />
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

          <div className="right-image">
            <img src={Image3} alt="image3 not found" />
            <img src={Image4} alt="image4 not found" />
          </div>
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
            raised globally.
          </p>
          <Button btnTitle={"Siscover more"} />
        </div>
        <div className="about-left">
          <div className="left-images">
            <img src={Image6} alt="image1" />

            <img src={Image7} alt="image2" />
          </div>

          <img src={Image8} alt="image3" className="key" />
        </div>
      </div>

      <div className="about-founder">
        <h2>Co-Founding Team</h2>
        <p className="para">
          SheCanCode was initiated in 2018 by MBANDA Innocent and Jean Jack
          Iradukunda with the aim to build a program to teach people the skills
          and tools to bring their ideas to life as they felt that traditional
          degrees' courses were failing to provide students with these new tech
          skills.
        </p>

        <div className="founder-one">
          <img src={mbanda} alt="images" />
          <div className="founder-description">
            <h3>Mbanda Innocent Co-founder</h3>
            <p>
              Mbanda is a software engineer with more than 10 years of
              experience. He worked at ..., and now teaches all you need to know
              about web programming and the technical workflow used in a
              startup.
            </p>
          </div>
        </div>

        <div className="founders">
          <div className="founder-one">
            <img src={jj} alt="images" />
            <div className="founder-description">
              <h3>Iradukunda Jean Jack Co-founder and CEO</h3>
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

      <div className="about-leads">
        <h1>SheCanCode Team</h1>
        <p>
          Shecacode Teck talented team in the “train of higher education”.{" "}
          <br /> And a wagon is a vehicle that takes a group of people (like a
          class of students)
        </p>
        <div className="leadership-form">
          {leadershipTeam.map((team) => (
            <div className="lead-one">
              <div className="about-leader">
                <img src={team.image} alt="no image12" />
                <h3>{team.name}</h3>
                <p>{team.position}</p>
              </div>
              <div className="about-path"></div>
            </div>
          ))}
        </div>
        <Footer />
      </div>
    </div>
  );
};
export default About;
