import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import Image from "./images/logoscc.png";
import { AiOutlineMenu } from "react-icons/ai";

const Header = () => {

  const [openMenu, setOpenMenu] = useState(false);

  const handleMenuClick = () => {
    setOpenMenu((prev) => !prev);
  }
  
  return (
    <nav className='w-full flex justify-between items-center shadow-lg'>
      <div className='w-11/12 md:w-10/12 flex justify-between items-center m-auto'>
        {/* Desktop Navigation  */}
        <Link to={'/'}><img src={Image} alt="scc-logo" className='w-20 py-2' /></Link>
        <div className='justify-between gap-8 sm:flex hidden'>
          <NavLink className="text-black active:text-blue-800 hover:text-cyan-500" to="/">Home</NavLink>
          <NavLink className="text-black active:text-blue-800 hover:text-cyan-500" to="/courses">Courses</NavLink>
          <NavLink className="text-black active:text-blue-800 hover:text-cyan-500" to="/about">About</NavLink>
          <NavLink className="text-black active:text-blue-800 hover:text-cyan-500" to="/service">Career Services</NavLink>
          <NavLink className="text-black active:text-blue-800 hover:text-cyan-500" to="/program">Program</NavLink>
        </div>

        {/* Mobile Navigation  */}
        <AiOutlineMenu onClick={() => setOpenMenu(!openMenu)} className='cursor-pointer text-3xl sm:hidden'/>
      </div>
      
      {openMenu && 
        <div className='flex flex-col z-50 absolute w-1/2 right-0 h-screen top-20 justify-start items-start py-12 px-7 bg-blue-950 gap-8 sm:hidden flex'>
          <NavLink className="active:text-blue-800 hover:text-cyan-500 text-white" to="/">Home</NavLink>
          <NavLink className="active:text-blue-800 hover:text-cyan-500 text-white" to="/courses">Courses</NavLink>
          <NavLink className="active:text-blue-800 hover:text-cyan-500 text-white" to="/about">About</NavLink>
          <NavLink className="active:text-blue-800 hover:text-cyan-500 text-white" to="/service">Career Services</NavLink>
          <NavLink className="active:text-blue-800 hover:text-cyan-500 text-white" to="/program">Program</NavLink>
        </div>
      }
    </nav>
  )
}

export default Header