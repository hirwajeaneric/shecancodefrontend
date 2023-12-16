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
      <div className="w-full flex flex-col justify-center items-center">
        {/* Banner  */}
        <div className='mobileApp-parts-container flex w-full justify-between items-center'>
          <div className='mobileApp-part1 flex flex-col w-11/12 md:w-10/12 m-auto justify-around'>
            <h1 className='para1'>Mobile Application Development Program</h1>
            <p> Embark on a transformative journey with our 16-week <br></br> program,designed to equip you with essential skills in mobile<br></br> application development.</p>
            <button onClick={() => navigate('/mobilejanuaryapplication')} className='mob-btn mb-12 w-4/5 md:w-1/5'>Get Started</button>
          </div>
        </div>

        
      </div>
      <Footer />
    </div>
  )
}

export default WebDev
