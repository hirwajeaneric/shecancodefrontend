import React from "react";
import "./course.css"

const Course = () =>{
return(
<div className="allExplore">
    <div className="Explore"><h2 className="explore">Explore Course</h2></div>
    <div className="theWhole">
    <div className="table" >
        <div className="terminalColor">
        <div className='row1'></div>
        <div className='row2'>
            <div className='row3'><p><i class='bx bx-chevron-left'></i> <span>code</span></p></div>
            <div className='row4'><p><span>output </span> <i class='bx bx-chevron-right'></i></p></div>
        </div>
        <div className='row5'>
        <input className='row6'/>
        <div className='row7'></div>
        </div>
        <div className='row8'>
            <button className='row9' >Run</button>
        </div>
        </div>
    </div>
    <div className="paragraph2Container">
   <div className="paragraph2">
    <p className="beginners" >Beginners Welcome</p>
    <div className="coding"><h2 >Start coding in <br />seconds.</h2></div>
    <p className="goahead">Go ahead , give it a try. our hands-on learning environment means you'll be writing real code from your very first lesson.</p>
    <button className="startNow">Start Now</button><button className="startNo">more challenges</button>
   </div>
   </div> 
    </div>

</div>
);
}
export default Course
