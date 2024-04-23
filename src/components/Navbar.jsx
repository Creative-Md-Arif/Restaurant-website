import React from 'react'
import { Link } from 'react-router-dom'
import { MdDeliveryDining } from "react-icons/md";
import { CiShoppingCart } from "react-icons/ci";




const Navbar = () => {
  return (
    <nav className= 'fixed z-10 bg-[#FFF8EE] py-3 mt-9 shadow-lg  w-full' >
      <div className='container flex items-center justify-between'>
        <div className='logocol'>
         <Link to="/home">
         <img src="/public/logo.png" alt="navlogo" />
         </Link>
        </div>
        <div className='navitem'>
          <ul className='flex items-center gap-6 uppercase font-primary font-bold text-[20px] text-[#2A435D] '>
            <li>
              <Link to="/home">Home</Link>
            </li>
            <li>
              <Link to="/about">ABOUT</Link>
            </li>
            <li>
              <Link to="/items">Items</Link>
            </li>
            <li>
              <Link to="/pages">Pages</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
          </ul>
        </div>

        <div className='cart flex items-center justify-between w-[32%]'>
           <div className='p-4 bg-black text-white rounded-full'>
            <CiShoppingCart className='text-4xl' />
           </div>
             <div className='flex items-center'>
               <div>
               <h5 className='font-primary font-bold text-[20px] text-[#2A435D]'>Delivery Order</h5>
               <p className='font-primary font-normal text-[16px] text-[#2A435D]'>+880 1630 225 015</p>
               </div>
              <div>
              <Link to="#">
              <MdDeliveryDining 
              className='text-4xl pl-1'
              />
              </Link>
              </div>
              </div>
              <div className='login'> 
              <Link to="/login" className="relative inline-flex items-center justify-start px-6 py-3 overflow-hidden font-medium transition-all bg-red-500 rounded-xl group">
              <span className="absolute top-0 right-0 inline-block w-4 h-4 transition-all duration-500 ease-in-out bg-red-700 rounded group-hover:-mr-4 group-hover:-mt-4">
              <span className="absolute top-0 right-0 w-5 h-5 rotate-45 translate-x-1/2 -translate-y-1/2 bg-white"></span>
              </span>
              <span className="absolute bottom-0 left-0 w-full h-full transition-all duration-500 ease-in-out delay-200 -translate-x-full translate-y-full bg-red-600 rounded-2xl group-hover:mb-12 group-hover:translate-x-0"></span>
              <span className="relative w-full text-left text-white transition-colors duration-200 ease-in-out group-hover:text-white">Login</span>
              </Link>
           </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar