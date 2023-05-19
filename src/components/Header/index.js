import { useState } from 'react';
import Image from "./images/logoscc.png";
import "./nav.css";

let Index = () => {
  const [open, setOpen] = useState(true);
    return(
        <div>
          <div class="all">
            <img src={Image} alt='scc-logo'/>
            
            {open && 
          <ul class="navbar">
            <li><a href="#">Home</a></li>
            <li><a href="#">About </a></li>
            <li><a href="#">Contact</a></li>
            <li><a href="#">Program</a></li>
            <li><a href="#">Login</a></li>
          </ul>
          }
          <div class="mymenu">
            <button class="mybtn">Apply</button>
             <div class= {`bx ${open ? 'bx-x' : 'bx-menu'}`} id="mymenu-icon" onClick={()=>{setOpen(!open)}}>
             </div>
          </div>
          </div>
          </div>
    );
}
export default Index;


