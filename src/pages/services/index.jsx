import React from 'react'
import Header from "../../components/Header"
import "./services.css"
import Button from '../../components/Button'
import Hiring from "../../components/hiringPartener/hiring"
import img from "../../assets/Desktop - 1.png"
const Services = () => {
  return (
    <div className='all-services'>
           
        <Header/>
    
     <div className='service-container'>
        <div className='service-partOne'>
        <h1>16 Weeks of career coaching</h1>
<p>At Shecancode School, our Career Services team is committed to helping you get started your career in teck. Our proven job search framework includes up to 180 days of 1-on-1 coaching from our experienced Career Coaches after graduation.</p>
   <div className='service-btn'>
   <Button btnTitle={"Apply Now"}/>
   </div>

   </div>
  
   

   <div className='service-clipath'>
   
  
       
   </div>
   <div class="custom-shape-divider-bottom-1689514587">
    <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
        <path d="M741,116.23C291,117.43,0,27.57,0,6V120H1200V6C1200,27.93,1186.4,119.83,741,116.23Z" class="shape-fill"></path>
    </svg>
</div>

</div>
<div className='next'>
  <div className='next-partOne'>
  <h2>Our career Coaches driven to your <span className='success'>Success</span> </h2>
  </div>
  <div className='next-partTwo'>
    <p>Every Flatiron School graduate is paired 1:1 with an experienced Career Coach committed to helping YOU find a job you’re excited about.
<br /> <br />
We’ve tracked our outcomes since 2012, and continue to celebrate consistent hiring rates and high average starting salaries.
<br /> <br />
There are so many interesting problems to solve, and companies need diverse and ambitious graduates like you to get to work on these challenges. <br /> <br /> </p>
  </div>

</div>
<div>
<div class="custom-shape-divider-bottom-1689517765">
    <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
        <path d="M741,116.23C291,117.43,0,27.57,0,6V120H1200V6C1200,27.93,1186.4,119.83,741,116.23Z" class="shape-fill"></path>
    </svg>
</div>
</div>
<div className='fluent-campany'>
<h1>Prepare yourself to work for some of the most influential companies in the world.</h1>
<Hiring/>
</div>
<div className='job'>
  
  <h1>Proven Job Search</h1>
  <div className='job-search'>
  <div className='job-partOne'>
<p> Lorem ipsum dolor sit amet consectetur, adipisicing elit. Culpa fuga obcaecati perferendis. Incidunt dolore, sapiente eos maxime exercitationem ipsam porro cupiditate asperiores nulla voluptatum? Exercitationem maxime est et molestiae qui? </p>
<p> Lorem ipsum dolor sit amet consectetur, adipisicing elit. Culpa fuga obcaecati perferendis. Incidunt dolore, sapiente eos maxime exercitationem ipsam porro cupiditate asperiores nulla voluptatum? Exercitationem maxime est et molestiae qui? </p>
  </div>
  <div className='job-partTwo'>
<img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTuO1xwBKZ2eI-2hHC6jJhtyjdXSI7-UXUl8Q&usqp=CAU" alt="" />
  </div>
  </div>
  <div className='job-search'>
  <div className='job-partThree'>
<img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTuO1xwBKZ2eI-2hHC6jJhtyjdXSI7-UXUl8Q&usqp=CAU" alt="" />
  </div>
  <div className='job-partTwo'>
<p> Lorem ipsum dolor sit amet consectetur, adipisicing elit. Culpa fuga obcaecati perferendis. Incidunt dolore, sapiente eos maxime exercitationem ipsam porro cupiditate asperiores nulla voluptatum? Exercitationem maxime est et molestiae qui? </p>
<p> Lorem ipsum dolor sit amet consectetur, adipisicing elit. Culpa fuga obcaecati perferendis. Incidunt dolore, sapiente eos maxime exercitationem ipsam porro cupiditate asperiores nulla voluptatum? Exercitationem maxime est et molestiae qui? </p>
  </div>

  </div>
  <div className='job-search'>
  <div className='job-partOne'>
<p> Lorem ipsum dolor sit amet consectetur, adipisicing elit. Culpa fuga obcaecati perferendis. Incidunt dolore, sapiente eos maxime exercitationem ipsam porro cupiditate asperiores nulla voluptatum? Exercitationem maxime est et molestiae qui? </p>
<p> Lorem ipsum dolor sit amet consectetur, adipisicing elit. Culpa fuga obcaecati perferendis. Incidunt dolore, sapiente eos maxime exercitationem ipsam porro cupiditate asperiores nulla voluptatum? Exercitationem maxime est et molestiae qui? </p>
  </div>
  <div className='job-partTwo'>
<img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTuO1xwBKZ2eI-2hHC6jJhtyjdXSI7-UXUl8Q&usqp=CAU" alt="" />
  </div>
  </div>
</div>
<div className='job-container'>
  <h1><span>How will be ready for job a</span>  Search?</h1>
  <div className='job-content'>

<p>Led by the Career Coaching team, our in-program, job-readiness-focused Career Workshops will help you prepare for a successful job search and understand how you will work with your Career Coaching experience after graduation.</p>
  <ul>
    <li><span>Phase 1:</span>Embracing Your Professional Tech Identity</li>
    <li><span>Phase 2:</span>Building Your Online Brand/LinkedIn*</li>
    <li><span>Phase 3:</span>Networking: Start Conversations and Cultivate Connections</li>
    <li><span>Phase 4:</span>Building Your Technical Resume*</li>
    <li><span>Phase 5:</span>Kicking Off Your Job Search</li>
  </ul>
  <p>*Alongside the workshops in Phase 2 and Phase 4 you will complete and submit a Linkedin and Resume Career Assignment. Once submitted, a Career Coach will review them and share feedback to help you get a head start on your career journey.</p>
  </div>
</div>
<div className='schedule'>
 <img src={img} alt="" />

</div>
    </div>
  )
}

export default Services
