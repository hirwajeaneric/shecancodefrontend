import React, { useState } from 'react'
import {Link} from "react-router-dom"
import Button from '../../Button'
import "./form.css"
import axios from 'axios'
import Header from "../../../components/Header"
const ApplicationForm = () => {
    const [firstName,setFirstName]=useState("");
    const [lastName, setLastName]=useState("");
    const [email, setEmail]=useState("");
    const [telephone, setTelephone]=useState("");
    const [location, setLocation]=useState("");
    const [gender, setGender]=useState("");
    const [education, setEducation]=useState("");
    const [language, setLanguage]=useState("");
    const [programmingLanguage, setProgrammingLanguage]=useState("");
    const [job, setJob]=useState("");
    const [student, setStudent]=useState(false);
    const handleApplication=(e)=>{
        console.log(firstName, lastName)
        e.preventDefault();
        axios.post("http://localhost:4045/api/apply",{
            firstName,
            lastName,
            email,
            telephone,
            location,
            gender,
           
        }).then((res)=>{
            setFirstName("")
 setLastName("")
setEmail("")
setTelephone("")
 setLocation("")
setGender("")


        }).catch((err)=>{
            console.log(err)
        })


    }
  return (
    <div>
        <Header/>
     
      <div className='form-container'>
<div className='form-partOne'>
    <h1 >Don't Dream Start Coding Today</h1>
<p >Make it happen brig your vision to life, build amazing things with us</p>
<div className='hello'>Let Go</div>
</div>
<div className='form-partTwo'>
   
    <div className='form-field'>

  
    <div className='partTwoLeft'>
 
<input type="text" placeholder='First name' value={firstName} onChange={(e)=>(setFirstName(e.target.value))} />
    <br />
    <br />
 
<input type="text"  placeholder='Last name' value={lastName} onChange={(e)=>(setLastName(e.target.value))}/>
    <br />
    <br />
   
<input type="text" placeholder='phone number' value={telephone} onChange={(e)=>(setTelephone(e.target.value))}/>
    
    <br />
      
    <br />
<select name="" id="option">
    <option value="" >Have you ever used any programming language before?</option>
    <option value="" >Yes</option>
    <option value="">No</option>
</select>

     <br />
<br />
<textarea name="" id="" cols="45" rows="6" placeholder='If yes, mention those programming languages'></textarea>
    </div>
<div className='partTwo-Right'>
<br />
<br />
 
<input type="text"  placeholder='Your highest level of Education' value={education} onChange={(e)=>(setEducation(e.target.value))}/>
<br />
    <br />
<input type="text" placeholder='Email address' value={email} onChange={(e)=>(setEmail(e.target.value))} />
    <br />
    <br />
<input type="text" placeholder='Location' value={location} onChange={ (e)=>(setLocation(e.target.value))}/>
    <br />
    <br />
    <select name="" id="option">
    <option value="">Gender</option>
    <option value="">Female</option>
    <option value="">Male</option>
</select>
    <br />
     <br />
<select name="" id="option">
    <option value="" >Are you currently working?</option>
    <option value="" >Yes</option>
    <option value="">No</option>
</select>
    <br />
    <br />
   
<select name="" id="option">
    <option value="" >Are you currently studying</option>
    <option value="" >Yes</option>
    <option value="">No</option>
</select>

</div>
</div>
 <button onClick={handleApplication} className='submit-btn'> Submit </button>

</div>
      </div>
    </div>
  )
}

export default ApplicationForm
