import React from"react"
import Image from './she can.jpg'
import './application.css'


 const Application=()=>{
    return(
        <div>
            
<div className="all">
<div className="whole">
  <div className="apply">

                <h1>Apply now</h1>
                <p>You will learn web development and learn <br></br> a  job in the tech industry with 1-on-1 guidance<br></br> from an expert mentor and career coach</p>
                    <div className="overlay"></div>
                    <img src={Image}></img>
                    </div>
                


<div className="form">
<form>
    <div className="Name">
    <input type="First Name"  placeholder="First Name"></input>
    <input type="last Name" placeholder="Last Name" id="lastname"></input></div>
    <br></br>
    
    <input type="Email" placeholder="Email" id="email"></input><br></br><br></br>
    <div className="Code">
        <select id="code">
        <option>Select Country Code</option>
            <option>+250</option>
            <option>+254</option>
            <option>+257</option>
            <option>+256</option>
            <option>+255</option>
            <option>+243</option>
        </select> 
 <input type="Phone Number" placeholder="Phone Number" id="phone"></input></div> <br></br>
    <select id="gender">
        <option>Gender</option>
        <option>Male</option>
        <option>Female</option>
    </select><br></br><br></br>
    <input type="Education Level"  placeholder="Education Level" id="level"></input><br></br><br></br>
    <select id="area">
        <option>Area of specialization</option>
        <option>HTML</option>
        <option>CSS</option>
        <option>Javascript</option>
        <option>Node js</option>
        <option>PHP</option>
        <option>API</option>
        <option>Database</option>
    </select><br></br><br></br>
 <select id="program">
    <option>Select Program</option>
    <option>Front-End</option>
    <option>Full-Stack</option>
 </select> <br></br><br></br>
 <div className="contai">
   
    <h3>Have a Computer</h3>
    <input type="radio" name="yes" value=""></input>
    <label>Yes</label>
    <input type="radio" name="yes" value=""></input>
    <label>No</label><br></br>
    </div>
    <div className="btn">
    <button>Submit</button></div>
</form>
</div>
</div>
</div>
</div>
    )
 }
 export default Application;