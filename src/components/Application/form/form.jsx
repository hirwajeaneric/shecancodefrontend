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
    <h1 style={{textTransform:"lowercase", paddingLeft:"10px", paddingRight:"100px", fontSize:"50px",paddingTop:"110px"}}>Don't Dream Start Coding Today</h1>
<p >make it happen brig your vision to life, build amazing things with us</p>

</div>
<div className='form-partTwo'>
    <h3>Let get started by filling our information bellow</h3>
    <br />
    <label >Full name</label> <br />
<input type="text" />
    <br />
    <label >email address</label> <br />
<input type="text" />
    <br />
    <label >Phone number</label> <br />
<input type="text" />
    <br />
    <label >location</label> <br />
<input type="text" />
    <br />
    <label >What is your highest education?</label> <br />
<input type="text" />
    <br />
    <label >Gender</label> <br />
    <select name="" id="option">
    <option value="">Female</option>
    <option value="">Male</option>
</select>
    <br />
    <label >Are you currently studying?</label> <br />
<select name="" id="option">
    <option value="" >yes</option>
    <option value="">no</option>
</select>
    <br />
    <label >Are you currently working?</label> <br />
<select name="" id="option">
    <option value="" >yes</option>
    <option value="">no</option>
</select>
    <br />
    
    <label >Do you used any programming language before?</label> <br />
<select name="" id="option">
    <option value="" >yes</option>
    <option value="">no</option>
</select>
    <br />
    <label >if yes, mention it</label> <br />
<textarea name="" id="" cols="30" rows="10"></textarea>
 <Link to="/apply2"> <Button btnTitle={"continue"}/></Link> 

</div>
      </div>
    </div>
  )
}

export default ApplicationForm
