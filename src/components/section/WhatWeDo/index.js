import "../WhatWeDo/cards.css"
const WhatWeDo =()=>{
    return(
        <div className='holecontent'>
<h3>What We Do</h3>
<div className="row">
    <div className="card1">
        <div className="icon">
        <i class='bx bx-basketball'></i>
        </div>
        <h4>UI/UX Design</h4>
        <p> 
        This Course covers<br></br>
       UI/UX theory and <br></br>
      Figma prototyping.
 
        </p>
    </div>
    <div className="card1">
        <div className="icon">
        <i class='bx bxs-layout'></i>
        </div>
        <h4>Front-end 
Development</h4>
        <p> 
        Develop web skills <br></br>
using JS, HTML, CSS <br></br>
and ReactJs.
.
 
        </p>
    </div>
    <div className="card1">
        <div className="icon">
        <i class='bx bx-code-alt'></i>
        </div>
        <h4>Back-end 
Development</h4>
        <p> 
        Learn MongoDB, <br></br>
ExpressJS, NodeJS for <br></br>
Full-Stack. 

 
        </p>
    </div>
</div>
<button>Learn More</button>

        </div>
    )
}
export default WhatWeDo;