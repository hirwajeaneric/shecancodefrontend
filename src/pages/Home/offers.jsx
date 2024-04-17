import React, {useEffect} from 'react'
import image1 from "../../assets/learn.png"
import employ from "../../assets/employ.png"
import community from "../../assets/community.png"
import {AiOutlineRight} from "react-icons/ai"
import Footer from "../../components/Footers/footer"
import "./Home.css"
import { program } from '../../constants'
import Index from '../../components/partners'
import Aos from "aos"
import "aos/dist/aos.css";

 
const Offers = () => {
  useEffect(()=>{
    Aos.init({duration:3000});
  },[])
  return (
    <div>
      <div className='application-section'>
     {/* <marquee> <p className='application-section-paragraph'>Enroll now for our January cohort in Mobile Application Development Program!&nbsp;&nbsp;&nbsp;&nbsp;<span><a href='/mobiledevelopment'>Apply Here!</a></span> &nbsp;&nbsp;&nbsp;&nbsp;or for our February cohort in Software Engineering program!&nbsp;&nbsp;&nbsp;&nbsp;<span><a href="/softwareengineering">Apply Here!</a></span></p></marquee> */}

      </div>
      <div data-aos="fade-up" className='offer-container' id='about'>
      <div  className='offer-partOne'>
{/* <div className='offer-cards'> */}
  <div className='offer-cardOne'>
<h2>Why People <span className='cardOneText'> Choose Us</span></h2>
<h1>Why People Choose Our Services</h1>
<p>We do start from beginners to expert and we link graduates to employs</p>
  </div>
  <div className='offer-cardTwo'>
    <h1>1 <br /> Train</h1>
    <div className='cardTwo-img'>
    <img src={image1} alt="no found" />
    </div>
   
    <p> Whether you have little coding knowledge/experience, are <span className='hide'> self-taught, or are somewhere in between, this program is designed for you. </span> </p>

  </div>

</div>
      {/* </div> */}
      <div className='offer-partTwo'>
      <div className='offer-partTwoCardOne'>
      <h1>2 <br /> Employ</h1>
    <div className='cardTwo-img'>
    <img src={employ} alt="no found" />
    </div>
   
    <p> We strive to provide a seamless link between graduates looking for meaningful job and the <span className='hide'> best businesses looking for top-notch talent through our attentive efforts.</span>  </p>

</div>
<div className='offer-partTwoCardTwo'>
<h1>3 <br /> Community</h1>
    <div className='cardTwo-img'>
    <img src={community} alt="no found" />
    </div>
   
    <p> we are  committed to providing graduates with a comprehensive community experience. <span className='hide'> We prioritize networking opportunities, career assistance, and creating an empowering environment for graduates to successfully navigate the professional world.</span> </p>

</div>
      </div>

      </div>
      <Index/>
      <div data-aos="fade-up" className='program-section' id='program'>
       
        <div  className='no-content'> </div>
        <h2>What Do <span className='cardOneText'> We Provide?</span></h2>
        <h1>Our Program Provide The Best and Full Knowledge Reguired To Become a Software Engineer</h1>
<div data-aos="fade-up" className='program-container'>
 {program.map((e)=>(
  <div className='program-cardOne'>
  <h3>{e.h1}</h3>
  <div >
    <img src={e.image} alt="not found" />
  </div>
  <p>{e.p}</p>
  <button className='btn-more'>View details <AiOutlineRight className='ai'/></button>

</div>
 ))}
    
  

</div> 
<div className='footer-home'>
<Footer/>
</div>
 
      </div>
    
    </div>
  )
}

export default Offers
