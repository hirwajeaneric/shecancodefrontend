import React, { useEffect } from 'react';
import Header from "../../components/Header/index";
import Nav from "../../components/Nav/index";
import Footer from "../../components/Footers/footer";
import "./mobileApp.css"
import Aos from "aos";
import "aos/dist/aos.css";
import { useNavigate } from 'react-router-dom';
import AccordionContainer from './AccordionContainer';

const MobileDevelopment = () => {
  const navigate = useNavigate();

  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  return (
    <div className='w-full flex flex-col justify-start'>
      <Nav />
      <Header />
      <div className="w-full flex flex-col justify-center items-center">
        {/* Banner  */}
        <div className='mobileApp-parts-container flex w-full justify-between items-center'>
          <div className='mobileApp-part1 flex flex-col w-11/12 md:w-10/12 m-auto justify-around'>
            <h1 className='para1'>Mobile Application Development Program</h1>
            <p className='w-full sm:w-2/3 md:w-1/2'>Embark on a transformative journey with our 16-week program,designed to equip you with essential skills in mobile application development.</p>
            <button onClick={() => navigate('/mobilejanuaryapplication')} className='mob-btn mb-12 w-full md:w-1/5'>Apply now</button>
          </div>
        </div>

        {/* Call to action  */}
        <div className='flex flex-col w-11/12 md:w-10/12 m-auto justify-around bg-white pt-10 md:pt-24 pb-5 md:pb-12'>
          <h1 className='text-xl md:text-3xl text-left p-0 mb-9'>Elevate Your Career in Mobile Application Development with SheCanCode</h1>
          <p className='text-base'>Join us on the fast track to success! With partnership with the <strong>US Embassy</strong>, At SheCanCode, we empower aspiring individuals <br></br>to become leaders in mobile application development. Our programs are designed to work with world-class engineering teams, <br></br>helping you master both professional and technical skills essential for a thriving career.</p>
        </div>

        {/* Drop downs  */}
        <div className='flex flex-col w-11/12 md:w-10/12 m-auto justify-around bg-white pb-6 md:pb-12'>
          <h1 className='text-xl md:text-3xl text-left p-0 mb-7'>FAQs</h1>
          <AccordionContainer />
        </div>

        <div className='flex w-11/12 md:w-10/12 gap-8 mt-5 md:mt-0 m-auto justify-around flex-wrap bg-white pb-10 md:pb-24 pt-5 md:pt-12'>
          <h1 className='text-xl md:text-3xl text-left p-0 mb-0 md:mb-9 w-full md:w-1/5'>Program highlights</h1>
          <p className='text-base w-full md:w-3/5'>Ready to delve into the world of mobile applications? Join our comprehensive training program where you'll master the art of creating stunning mobile apps using React Native!
          In this course, you'll not only learn React Native but also gain a solid foundation in programming essentials with HTML, CSS, and JavaScript. No prior experience needed, just enthusiasm and a desire to build amazing apps!.
          <br /><br />
          <button onClick={() => navigate('/mobilejanuaryapplication')} className='mob-btn mb-12 w-full md:w-2/5'>Apply Now</button>
          </p>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default MobileDevelopment
