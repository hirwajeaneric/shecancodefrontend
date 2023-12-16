import React, { useEffect, useState } from 'react';
import Header from "../../components/Header/index";
import Nav from "../../components/Nav/index";
import Footer from "../../components/Footers/footer";
import "./mobileApp.css"
import Aos from "aos";
import "aos/dist/aos.css";
import { useNavigate } from 'react-router-dom';

const WebDev = () => {
  const [show, setShow] = useState(false);
  const [hide, setHide] = useState(false);
  const [visible, setVisible] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  return (
    <div className='w-full flex flex-col justify-start'>
      <Nav />
      <Header />

      <div className="w-full flex flex-col mt-8 justify-center items-center">
      <div className='mobileApp-parts-container'>
        <div className='mobileApp-part1'>
          <h1 className='para1'>Mobile Application Development Program</h1>
          <p> Embark on a transformative journey with our 16-week <br></br> program,designed to equip you with essential skills in mobile<br></br> application development.</p>
          <button onClick={() => navigate('/mobilejanuaryapplication')} className='mob-btn'>Get Started</button>
        </div>
      </div>

      <div className='mobileApp-part2' >
        <h1 >Elevate Your Career in Mobile Application Development with SheCanCode</h1>
        <p >Join us on the fast track to success! At SheCanCode, we empower aspiring individuals <br></br>to become leaders in mobile application development. Our programs are designed to work with world-class engineering teams, <br></br>helping you master both professional and technical skills essential for a thriving career.</p>
      </div>

      <div className='mobileApp-part3-container'>
        <div className='mobileApp-part3-sections'>
          <ul>
            <li>
              <p>What is Mobile Application Development?</p>
              <button onClick={() => setShow(!show)}>{show ? "-" : "+"}</button>
            </li>
            {show ? (
              <div className="hidden-content">
                <p>
                  {" "}
                  Mobile application development is the art of creating software
                  applications that run on mobile devices. In today's digital age, mobile apps play a crucial role in various aspects
                  of our lives, from communication to entertainment, education, and business. Learning mobile app development equips you
                  with the skills to shape the future and make a meaningful impact.
                </p>
              </div>
            ) : null}

            <li>
              <p>Why Mobile Application Development Matters:</p>
              <button onClick={() => setHide(!hide)}>{hide ? "-" : "+"}</button>
            </li>
            {hide ? (
              <div className="hidden-content">
                <p>
                  {" "}
                  Mobile applications are the heartbeat of innovation in today's digital landscape.
                  From enhancing user experiences to shaping industries, mobile app development is a dynamic field with boundless possibilities.
                  Embrace the future by acquiring the skills needed to create cutting-edge mobile solutions that address the demands of our fast-paced world.
                </p>
              </div>
            ) : null}

            <li>
              <p>Who Should join</p>
              <button onClick={() => setVisible(!visible)}>{visible ? "-" : "+"}</button>
            </li>
            {visible ? (
              <div className="hidden-content">
                <p>
                  {" "}
                  This program is specifically designed for young girls and women who are passionate, determined, and creative individuals seeking empowerment in the tech industry.
                  If you have a strong desire to excel in technology, innovate, and make a meaningful impact, this program is tailored to support and nurture your skills and ambitions.
                  <br/><br/>
                  <strong>N.B:</strong> The applicant should have their own Personal Computer.
                </p>
              </div>
            ) : null}
          </ul>
        </div>
      </div>
      <div className='program-highlights-part'>
        <div data-aos="fade-right" className='program-highlights-part-one'>
          <h1>Program highlights:{" "}

          </h1>
        </div>
        <div data-aos="fade-left" className='program-highlights-part-two'>
          <p>
          Ready to delve into the world of mobile applications? Join our comprehensive training program where you'll master the art of creating stunning mobile apps using React Native!
          In this course, you'll not only learn React Native but also gain a solid foundation in programming essentials with HTML, CSS, and JavaScript. No prior experience needed, just enthusiasm and a desire to build amazing apps!.</p>
          <div>
            <button className='program-btn mb-9' onClick={() => navigate('/mobilejanuaryapplication')}>Apply Now!</button>
          </div>
        </div>
      </div>
      </div>
      <Footer />
    </div>
    

  )
}

export default WebDev
