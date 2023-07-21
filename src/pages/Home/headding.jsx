import React, {useEffect} from 'react'
import Aos from "aos"
import "aos/dist/aos.css";
const Heading = () => {
  useEffect(()=>{
    Aos.init({duration:3000});
  },[])
  return (
    <div>
      <div  className='heading-section' id='home'>
    <div data-aos="fade-right" className='heading-content'>
<h2 className='heading-tittle'>  Train the Next Generation in Software Development </h2>
   <button className='heading-btn'>Get started</button>
    </div>
    <div className='heading-program'>
      <ul>
        <li>UI/UX Design</li>
        <li>Frontend</li>
        <li>Backend</li>
        <li>Project Manage</li>
      </ul>

    </div>
      </div>
      
    </div>
  )
}

export default Heading
