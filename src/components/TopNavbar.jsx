import React from 'react'
import { FaStopwatch } from "react-icons/fa";
import { FaPhoneAlt } from "react-icons/fa";
import { Link } from 'react-router-dom';




const TopNavbar = () => {
  return (
    <nav className='fixed py-2 z-10 bg-[#CC3333] w-full'>
      <div className='container flex items-center justify-between'>
        <div className='flex items-center gap-14'>
        <li className='flex items-center gap-1 font-primary font-normal text-[#FFF8EE] text-xs'><span><FaStopwatch /></span>7.30 AM - 9.30 PM</li>
        <li className='flex items-center gap-1 font-primary font-normal text-[#FFF8EE] text-xs'><span><FaPhoneAlt /></span>+880 1630 225 015</li>
        </div>
        <div>
        <Link to="/registration" 
        className='font-primary font-normal text-[#FFF8EE] text-xs uppercase'
        >Register</Link>
        </div>
    </div>
    </nav>
  )
}

export default TopNavbar