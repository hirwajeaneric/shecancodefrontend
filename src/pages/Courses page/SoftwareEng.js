import React, { useEffect, useState } from 'react';
import Header from "../../components/Header/index";
import Nav from "../../components/Nav/index";
import Footer from "../../components/Footers/footer";
import "./mobileApp.css"
import Aos from "aos";
import "aos/dist/aos.css";
import AccordionContainer from './AccordionContainer';

const SoftwareEng = () => {
  const [accordions, setAccordions] = useState([ 
    { 
      key: 1, 
      title: 'What is the content of the software engineering program?', 
      data: `Our software Engineering program constitutes of mainly 2 parts (Front-end and Back-end) where students with the support of our team of facilitators get to choose a suitable stack that they want.`, 
      isOpen: false
    }, 
    // { 
    //   key: 2, 
    //   title: 'Why Mobile Application Development Matters', 
    //   data: `Mobile applications are the heartbeat of innovation in today's digital landscape. From enhancing user experiences to shaping industries, mobile app development is a dynamic field with boundless possibilities. Embrace the future by acquiring the skills needed to create cutting-edge mobile solutions that address the demands of our fast-paced world.`, 
    //   isOpen: false
    // }, 
    { 
      key: 2, 
      title: 'Who Should join?', 
      data: `We are looking for self-motivated learners eager to uplevel their programming skills and diving deeper into specific tech stacks. We welcome university graduates, secondary school Advanced Level graduates and other young women who are willing to join the software development career path.`, 
      isOpen: false
    }, 
  ]);

  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  return (
    <div className='w-full flex flex-col justify-start'>
      <Nav />
      <Header />
      <div className="w-full flex flex-col justify-center items-center">
        {/* Banner  */}
        <div className='softwareeng-parts-container flex w-full justify-between items-center'>
          <div className='mobileApp-part1 flex flex-col w-11/12 md:w-10/12 m-auto justify-around'>
            <h1 className='para1'>Software Engineering Program</h1>
            <p className='w-full sm:w-2/3 md:w-1/2'>Embark on a transformative journey with our 16-week program, designed to equip you with essential skills in <strong className='text-cyan-400'>Software Development</strong> in one of the most popular tech stacks with JavaScript.</p>
            <button onClick={() => window.location.replace('/februaryintake')} className='mob-btn mb-12 w-full md:w-1/5'>Apply now</button>
          </div>
        </div>

        {/* Call to action  */}
        <div className='flex flex-col w-11/12 md:w-10/12 m-auto justify-around bg-white pt-10 md:pt-24 pb-5 md:pb-12'>
          <h1 className='text-xl md:text-3xl text-left p-0 mb-9'>Elevate Your Career in Software Engineering with SheCanCode</h1>
          <p className='text-base'>Join us on the fast track to success! At SheCanCode, we empower aspiring individuals <br></br>to become leaders in Software Engineering. Our programs are designed to work with world-class engineering teams, <br></br>helping you master both professional and technical skills essential for a thriving career.</p>
        </div>

        {/* Drop downs  */}
        <div className='flex flex-col w-11/12 md:w-10/12 m-auto justify-around bg-white mt-7 pb-6 md:pb-12'>
          <h1 className='text-xl md:text-3xl text-left p-0 mb-7'>Dual Specialization</h1>
          <p className='text-base'>We help you choose and join an appropriate tech stack according to your prior experience and preferences and raise you to become a professional in it with our beginer friendly approach of teaching.</p>
          <div className='flex flex-wrap mt-6 justify-center gap-4'>
            <div className='bg-blue-950 text-white justify-between flex flex-col w-full md:w-5/12 p-8'>
              <h1 className='text-3xl pt-0 mb-4 text-left'>Front-end</h1>
              <p>Welcome to our Frontend Development hub! Here, we craft seamless user experiences by bringing web interfaces to life. Using the powerful combination of JavaScript, HTML, and CSS, we train you to transform ideas into interactive and visually appealing websites by the help of <strong>React JS</strong> Library.</p>
              <a href='/februaryintake' className='py-2 px-3 mt-4 text-left rounded border-cyan-50 border-2 w-full md:w-1/2 hover:w-full'>Apply now</a>
            </div>
            <div className='bg-blue-950 text-white justify-between flex flex-col w-full md:w-5/12 p-8'>
              <h1 className='text-3xl pt-0 mb-4 text-left'>Back-end</h1>
              <p>Backend development is the behind-the-scenes magic that powers websites, making them functional and dynamic. In this process, we leverage a powerful trio of technologies: JavaScript for scripting, Express JS for building robust web applications, and Node JS for executing server-side code efficiently. MongoDB, a flexible and scalable database, helps store and manage data seamlessly.</p>
              <a href='/februaryintake' className='py-2 px-3 mt-4 text-left rounded border-cyan-50 border-2 w-full md:w-1/2 hover:w-full'>Apply now</a>
            </div>
          </div>
        </div>

        {/* Accordion  */}
        <div className='flex flex-col w-11/12 md:w-10/12 m-auto justify-around mt-7 bg-white pb-6 md:pb-12'>
          <h1 className='text-xl md:text-3xl text-left p-0 mb-7'>FAQs</h1>
          <AccordionContainer accordions={accordions} setAccordions={setAccordions} />
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default SoftwareEng
