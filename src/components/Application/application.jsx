import React from 'react'
import Index from "../Header/index"
import "./application.css"
import Button from '../Button'
import Footer from '../Footers/footer'
import {Link} from "react-router-dom"
const Application = () => {
  return (
    <div>
      <Index/>
      <div className='application-container'>
        <div><h1>Application is open for SheCanCode Cohort 9 Bootcamp</h1></div>
<div className='application-upper'>
    <div className='application-upper-content'>
<h1>Learning made Easy</h1>
<Button btnTitle={"Get started"}/>
    
</div>
</div>
<div className='appliction-middle'>
<div className='application-middlePart1'>
    <div className='middlepart-left'>
    <h2>Learn</h2>
    </div>
    <div className='middlepart-right'>
        <h3>Rearning Mantality</h3>
    <p>Each session of the training will be intense and you must have a learning and open mindset.</p>
    </div>
    
</div>
<div className='application-middlePart2'>
<div className='middlepart-left'>
    <h2>Time</h2>
    </div>
    <div className='middlepart-right'>
        <h3>Time commitment</h3>
    <p>Each session of the training will be intense and you must have a learning and open mindset.</p>
    </div>
</div>
</div>
<div className='appliction-middle2'>
<div className='application-middlePart1'>
    <div className='middlepart-left'>
    <h2>solve</h2>
    </div>
    <div className='middlepart-right'>
        <h3>Problem solving skills</h3>
    <p>Software development involves breaking down complex problems into smaller, more manageable tasks..</p>
    </div>
    
</div>
<div className='application-middlePart2'>
<div className='middlepart-left'>
    <h2>Think</h2>
    </div>
    <div className='middlepart-right'>
        <h3>Mathemetics and Logic</h3>
    <p> A good grasp of basic mathematics, such as algebra and logic, is beneficial for solving problems and designing algorithms in software development.</p>
    </div>
</div>
</div>

    <div className='application-lower-content'>
<h1>We choose perfect course for you!!</h1>
<p>Our training workshop will give you the know-how to get started, boost your Employability, Entrepreneurship & Leadership skills and productivity by learning to code, hosting your websites, & designing apps.</p>
    
    <div className='application-lower-content-element'>
        <div className='application-lower-content-left'>
<div className='flyer'> <h1>Flyer to be here</h1></div>
        </div>
        <div className='application-lower-content-middle'>

        </div>
        <div className='application-lower-content-right'>
<h2>Shecancode Website development</h2>
<p style={{paddingLeft:"100px"}}>10th.July.2023_10th.October.2023</p>
<div className='application-courses'>
<h4>HTML </h4><div className='vl'></div>
<h4>CSS </h4><div className='vl'></div>
<h4>FIGMA </h4><div className='vl'></div>
<h4>GITHUB</h4><div className='vl'></div>
<h4>JAVASCRIPT </h4><div className='vl'></div>
<h4>REACT JS </h4><div className='vl'></div>
<h4>NODE JS </h4><div className='vl'></div>
<h4>DEPLOYMENT </h4>
</div>
<Link to="/apply"><Button btnTitle={"Apply Now"}/></Link>  

        </div>
    </div>
    <hr  style={{width:"80%", margin:"auto"}}/>
    </div>

      </div>
      <Footer/>
    </div>

  )
}

export default Application
