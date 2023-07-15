import React from 'react'
import {BsFacebook} from "react-icons/bs"

import {FaTwitter,FaLinkedinIn} from "react-icons/fa"
import "./footer.css"
const Footer = () => {
  return (
    <div>
      <div className='footerContainer' id='contact'>
 <div className='footer-content'>
    <div>
        <h3>Subscribe to our weekly newsletter </h3>
        <input type="text" name="" id="input" placeholder='email' /> <button className='btnfnl'>Submit</button>
    </div>
    <div  className='footer-item'>
        <h3>Our Services </h3>
        <a href="">Train</a>   <br />
          <a href=""> Apprenticeship</a>  <br />
          <a href=""> Impact</a>   
          
    </div>
    <div className='part-respo'>

   
    <div className='footer-item'>
        <h3>Be social</h3>
        
          <a href="https://www.facebook.com/igirerwandaorganization?mibextid=ZbWKwL" target="_blank"> <BsFacebook className='footerIcon'/> faceBook</a>   <br />
          <a href="https://twitter.com/ShecancodeRW" target="_blank"> <FaTwitter className='footerIcon'/> Twitter</a>  <br />
          <a href="https://www.linkedin.com/company/shecancodeschool/" target="_blank">  <FaLinkedinIn className='footerIcon'/> LinkedIn</a>   <br />
          
        
    </div>
    <div className='footer-item'>
        <h3>Quick Links</h3>
        <a href="#home">Home</a>   <br />
          <a href="#about"> About us</a>  <br />
          <a href="#program"> Program</a>   <br />
          
    </div>
    </div>
 </div>
 <hr className='hr'/>
 <p>© 2023 SheCanCode, All right Reserved.  | Privacy policy</p>
      </div>

    </div>
  )
}

export default Footer
