import { useState } from "react";
import { FaTimes } from "react-icons/fa";
import { Link } from "react-router-dom";
import Image from "./images/logoscc.png";
import "./nav.css";
import Button from "../Button";
import Bar from "../Nav";

let Index = () => {
  let [humbState, setHumbState] = useState(true);
  return (
    <>
      <div className="hamGrid">
        <div class="all">
          <img src={Image} alt="scc-logo" />
          <ul class="navbar">
            <li>
              <Link class="active" to="/">
                Home
              </Link>
            </li>
            <li>
              <Link to="/about">
                About
                {/* <i class="bx bx-chevron-down"></i> */}
              </Link>
            </li>
            <li>
              <Link to="#">Services</Link>
            </li>
            <li>
              <Link to="/program">Program</Link>
            </li>
          </ul>
          <div class="menu">
            <Link to="/apply">
              <Button btnTitle={"Apply"} />
            </Link>
            {humbState && (
              <div
                class="bx bx-menu"
                id="menu-icon"
                onClick={() => setHumbState(false)}
              ></div>
            )}
            {/* <div class="bx bx-menu bx-closing-icon" id="menu-icon"></div> */}
            {!humbState && (
              <FaTimes class="close" onClick={() => setHumbState(true)} />
            )}
          </div>
        </div>
        {!humbState && (
          <div className="hamberger">
            <p>Home</p>
            <p>About</p>
            <p>Contact</p>
            <p>Program</p>
            <p>Login</p>
            <Link to="/application">
              {" "}
              <p>Apply</p>
            </Link>
          </div>
        )}
      </div>
    </>
  );
};

export default Index;
