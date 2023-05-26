import { useState } from 'react';
import { FaTimes } from 'react-icons/fa';
import Image from "./images/logoscc.png";
import "./nav.css";

let Index = () => {
  let [humbState, setHumbState] = useState(true);
  return (
    <div className='hamGrid'>
      <div class="all">
        <img src={Image} alt="scc-logo" />
        <ul class="navbar">
          <li>
            <a href="#" class="active">
              Home
            </a>
          </li>
          <li>
            <a href="#">
              About 
              {/* <i class="bx bx-chevron-down"></i> */}
            </a>
          </li>
          <li>
            <a href="#">Contact</a>
          </li>
          <li>
            <a href="#">Program</a>
          </li>
          <li>
            <a href="#">Login</a>
          </li>
        </ul>
        <div class="menu">
          <button class="btn">Apply</button>
          {humbState && <div class="bx bx-menu" id="menu-icon" onClick={
            () => setHumbState(false)
          }></div>}
          {/* <div class="bx bx-menu bx-closing-icon" id="menu-icon"></div> */}
          {!humbState && <FaTimes class="close" onClick={
            () => setHumbState(true)
          }/>}
        </div>
      </div>
      {!humbState && <div className='hamberger'>
      <p>Home</p>
      <p>About</p>
      <p>Contact</p>
      <p>Program</p>
      <p>Login</p>
      <p>Apply</p>
      </div>}
      </div>
  );
};
export default Index;


