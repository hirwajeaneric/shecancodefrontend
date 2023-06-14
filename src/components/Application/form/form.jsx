import React from 'react'
import {Link} from "react-router-dom"
import Button from '../../Button'
import "./form.css"
const ApplicationForm = () => {
  return (
    <div>
      <h1> application Form</h1>
      <div className='form-container'>
<div className='form-partOne'>
    <h1 >Don't Dream Start Coding Today</h1>
<p >Make it happen brig your vision to life, build amazing things with us</p>
<div className='hello'>Let Go</div>
</div>
<div className='form-partTwo'>
    <h2>Let get started </h2>
    <br />
    <div className='form-field'>

  
    <div className='partTwoLeft'>
 
<input type="text" placeholder='First name' />
    <br />
    <br />
 
<input type="text"  placeholder='Last name'/>
    <br />
    <br />
   
<input type="text" placeholder='Your highest level of Education' />
    
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
 
<input type="text"  placeholder='Phone number'/>
<br />
    <br />
<input type="text" placeholder='Email address' />
    <br />
    <br />
<input type="text" placeholder='Location'/>
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
 <Link to="/apply2"> <Button btnTitle={"Submit"}/></Link> 

</div>
      </div>
    </div>
  )
}

export default ApplicationForm
