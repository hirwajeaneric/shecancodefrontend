import { useState } from 'react';
import { FaTimes } from 'react-icons/fa';
import { Link, useLocation } from 'react-router-dom';
import Image from './images/logoscc.png';
import './nav.css';
import Button from '../Button';
import Bar from '../Nav';

let Index = () => {
  let [humbState, setHumbState] = useState(true);
  const location = useLocation();
  return (
    <>
      <div className="hamGrid">
        <div class="all">
          <img src={Image} alt="scc-logo" />
          <ul class="navbar">
            <li>
              <Link
                className={location.pathname === '/' ? 'active' : ''}
                to="/"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                className={location.pathname === '/about' ? 'active' : ''}
                to="/about"
              >
                About
                {/* <i class="bx bx-chevron-down"></i> */}
              </Link>
            </li>
            <li>
              <Link
                className={location.pathname === '/service' ? 'active' : ''}
                to="/service"
              >
                Services
              </Link>
            </li>
            <li>
              <Link
                className={location.pathname === '/program' ? 'active' : ''}
                to="/program"
              >
                Program
              </Link>
            </li>
          </ul>
          <div class="menu">
            <Link to="/apply">
              <Button btnTitle={'Apply'} />
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
            <a href="/">
              {' '}
              <p> Home</p>
            </a>
            <a href="/about">
              <p>About</p>
            </a>
            <a href="/service">
              {' '}
              <p>Services</p>
            </a>
            <a href="program">
              <p>Program</p>
            </a>

            <Link to="/application">
              {' '}
              <p>Apply</p>
            </Link>
          </div>
        )}
      </div>
    </>
  );
};

export default Index;
