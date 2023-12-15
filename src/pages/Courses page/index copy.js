import React, { useState } from 'react';
import Index from '../../components/Header/index';
import Header from "../../components/Header/index";
import Nav from "../../components/Nav/index";
import Footer from "../../components/Footers/footer";
import "./AllCourses.css";
import holidayPic from "../Courses page/Pictures/softwareEng.jpeg";
import SoftwareEngineeringPic from "../Courses page/Pictures/shecancode.jpeg";
import WebDevPic from "../Courses page/Pictures/holidaysBootcamp.jpg";
import PartTimePic from "../Courses page/Pictures/partTimeImg.jpeg";



const Courses = () => {

  const [pop, setPop] = useState(false);
  const togglePop = () => {
    setPop(!pop)

  }
  return (
    <>
      <div>
        <Nav />
        <Header />
        <div className='allCourses-div'>
          <div className="card-container">
            <img src={holidayPic} alt="" className='card-img' />
            <h1 className='card-title'>High School holidays tech bootcamp</h1>
            <p className='card-description'>Unlock the world of technology for your child this holiday season with our dynamic High School Holidays Tech Bootcamp!
              Youngsters aged 13-18, are welcome to join our boot camp if they have a curious mindset, a passion for technology, a community-oriented attitude, and excitement about the evolving tech landscape!</p>
            <button className='mb-9'>
              <a className='card-btn' onClick={togglePop}>Explore Course</a>
            </button>

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
          </div>

          <div className="card-container">
            <img src={SoftwareEngineeringPic} alt="" className='card-img' />
            <h1 className='card-title'>Software Engineering Program</h1>
            <p className='card-description'>Calling all aspiring tech trailblazers! Embark on a transformative journey with our Software Engineering Program, crafted especially for young girls and women eager to dive into the dynamic world of technology.</p>
            <button className='mb-9'>
              <a href="/softwareengineering" className='card-btn'>Explore Course</a>
            </button>
          </div>

          <div className="card-container">
            <img src={WebDevPic} alt="" className='card-img' />
            <h1 className='card-title'>Mobile Application Development</h1>
            <p className='card-description' >
              Unlock the world of possibilities with our SheCanCode Bootcamp's Mobile Application Development program, designed to empower young girls and women in the exciting realm of technology. In this transformative journey, participants will delve into the art of crafting mobile applications, gaining hands-on experience in coding, design, and problem-solving. Our supportive and inclusive learning environment fosters creativity and collaboration, ensuring that every aspiring tech enthusiast can thrive.
            </p>
            <button className='mb-9'>
              <a href="/mobiledevelopment" className='card-btn'>Explore Course</a>
            </button>
          </div>

          <div className="card-container">
            <img src={PartTimePic} alt="" className='card-img' />
            <h1 className='card-title'>Part Time Software Engineering</h1>
            <p className='card-description'>Seize the opportunity to transform your passion for technology into a rewarding career through our evening software development program. Whether you're a working professional looking to upskill or someone navigating a career change, our doors are open to all determined individuals ready to embark on a journey of learning and growth.</p>
            <button className='mb-9'>
              <a className='card-btn' onClick={togglePop} >Explore Course</a>
            </button>

            {pop &&
              (<div className='open-pop' >
                <div className='overlay' onClick={togglePop}>
                  <p> This program will start soon.Stay tuned for updates-we'll notify you as soon as it begins!!</p>
                  <span className="pop-close" onClick={togglePop}>
                    &times;
                  </span>
                </div>
              </div>
              )
            }
          </div>
        </div>
        <Footer />
      </div>
    </>
  )
}

export default Courses
