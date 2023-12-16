import React, {useEffect}  from 'react';
import Header from "../../components/Header/index";
import Nav from "../../components/Nav/index";
import Footer from "../../components/Footers/footer";
import "./AllCourses.css";
import Aos from "aos";
import "aos/dist/aos.css";
import { useNavigate } from 'react-router-dom';

// import holidayPic from "../Courses page/Pictures/holidaysBootcamp.jpg";
// import SoftwareEngineeringPic from "../Courses page/Pictures/softPic.jpg";
// import WebDevPic from "../Courses page/Pictures/webdevelopment.jpg";
// import PartTimePic from "../Courses page/Pictures/soft.jpg";


const FullStack = () => {
  const navigate = useNavigate();

  useEffect(()=>{
    Aos.init({duration:3000});
  },[])

  return (
    <div>
      <Nav />
      <Header />

      <div className='mobileApp-parts-container'>
        <div className='mobileApp-part1'>
          <h1 className='para1'>Sofware Engineering Program</h1>
          <p> Embark on a transformative journey with 16-week <br></br> program, designed to equip you with essential skills in software engineering.</p>
          <button onClick={() => navigate('/mobilejanuaryapplication')} className='mob-btn'>Get Started</button>
        </div>
      </div>

      <div className='mobileApp-part2' >
        <h1 >Dual Specialization</h1>
        <p >Our curriculum is uniquely structured, allowing you to tailor your journey by selecting one of two specialized tracks: Frontend Development or Backend Development.</p>
      </div>

      <div className='specialization-section'>
        <div className='frontend-specialization'>
          <h4>Frontend Development</h4>
          <p>Welcome to our Frontend Development hub! Here, we craft seamless user experiences by bringing web interfaces to life. Using the powerful combination of JavaScript, HTML, and CSS, we transform ideas into interactive and visually appealing websites. Our expertise extends to harnessing the capabilities of ReactJS, ensuring dynamic and efficient web solutions.<span className='hide'> Dive into the world of responsive design and cutting-edge web skills with us – where simplicity meets innovation, and user interfaces come to vibrant life. Elevate your digital presence with our frontend development prowess!</span></p>
          <button onClick={() => navigate('/februaryintake')} className='speci-card-btn  mb-5'>Apply Now!</button>
        </div>
        <div className='backend-specialization'>
          <h4>Backend Development</h4>
          <p>Backend development is the behind-the-scenes magic that powers websites, making them functional and dynamic. In this process, we leverage a powerful trio of technologies: JavaScript for scripting, Express JS for building robust web applications, and Node JS for executing server-side code efficiently. MongoDB, a flexible and scalable database, helps store and manage data seamlessly.<span className='hide'>Together, these tools enable us to create interactive and responsive web applications, ensuring a smooth and efficient user experience.</span> </p>
          <button onClick={() => navigate('/februaryintake')} className='speci-card-btn mb-5'>Apply Now!</button>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default FullStack
