import React from "react";
import "./form.css";
import Button from "../../Button";
const ApplicationFormTwo = () => {
  return (
    <div>
      <h1> application Form</h1>
      <div className="form-container">
        <div className="form-partOne">
          <h1
            style={{
              textTransform: "lowercase",
              paddingLeft: "10px",
              paddingRight: "100px",
              fontSize: "50px",
              paddingTop: "110px",
            }}
          >
            Don't Dream Start Coding Today
          </h1>
          <p>
            make it happen brig your vision to life, build amazing things with
            us
          </p>
        </div>
        <div className="form-partTwo">
          <h3>continue filling our information bellow</h3>
          <br />
          <br />
    <label >Do you have Github Account?</label> <br />
<select name="" id="option">
    <option value="" >yes</option>
    <option value="">no</option>
</select>
<label>if yes, please share your github acount</label> <br />
          <textarea name="" id="" cols="30" rows="10"></textarea>
    <br />
    <label >if yes, please share your github acount</label> <br />
    <textarea name="" id="" cols="30" rows="10"></textarea>
    <br />
    <label >which program do you want to join?</label> <br />
<select name="" id="option">
    <option value="" >frontend</option>
    <option value="">backend</option>
</select>
          
          <br />
          <label>which program do you want to join?</label> <br />
          <select name="" id="option">
            <option value="">frontend</option>
            <option value="">backend</option>
          </select>
          <br />
          <label htmlFor="">
            {" "}
            Why do you want to attend SheCanCode Rwanda Bootcamp?
          </label>
          <textarea name="" id="" cols="30" rows="10"></textarea>
          <br />
          <label htmlFor="">
            Why is software development your dream career goal?
          </label>
          <textarea name="" id="" cols="30" rows="10"></textarea>
          <br />
          <label>how did you hear about shecancode Rwanda?</label> <br />
          <select name="" id="option">
            <option value="">social media</option>
            <option value="">friend</option>
            <option value="">Shecancode Alumni</option>
            <option value="">Google/shecancode website</option>
          </select>
         <Button btnTitle={"Submit"}/>
        </div>
      </div>
    </div>
  );
};

export default ApplicationFormTwo;
