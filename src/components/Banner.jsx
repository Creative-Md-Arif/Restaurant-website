import React from 'react'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { Link } from 'react-router-dom';
import { FaFacebookF } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";





const Banner = () => {
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    rtl: true
  };
      return (
        <div className='bg-[#FFF8EE] pt-44'>
        <div className="slider-container container">
          <Slider {...settings}>
            {/* slider one satrt */}
            <div>
            <div className='flex items-center justify-evenly'>
              <div>
                <div>
                <h5 className=' text-primary font-primary italic text-[20px] pt-2'>Best In Town</h5>
                <h1 className=' w-[422px] text-secondary font-primary font-semibold italic text-[32px] '>ENJOY OUR CHICKEN <span className=' text-primary font-primary italic text-[32px]'> BURGER </span> FAST FOOD</h1>
                <div className='flex justify-evenly pt-8'>
                <div className='flex items-center gap-5'>              
                <Link to="#" class="relative inline-flex items-center justify-start py-3 pl-4 pr-12 overflow-hidden font-semibold text-indigo-600 transition-all duration-150 ease-in-out rounded hover:pl-10 hover:pr-6 bg-gray-50 group">
                <span class="absolute bottom-0 left-0 w-full h-1 transition-all duration-150 ease-in-out bg-primary group-hover:h-full"></span>
                <span class="absolute right-0 pr-4 duration-200 ease-out group-hover:translate-x-12">
                <svg class="w-5 h-5 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
                </span>
                <span class="absolute left-0 pl-2.5 -translate-x-12 group-hover:translate-x-0 ease-out duration-200">
                <svg class="w-5 h-5 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
                </span>
                <span class="relative w-full text-left transition-colors duration-200 ease-in-out group-hover:text-white">Order Now</span>
                </Link>
                 <h4 className=' font-primary text-secondary text-xl font-normal'>Price <strong>:</strong>$10.50</h4>
                </div>
                </div>
                
                </div>
              </div>
              <div>
                <img src="/public/banner.png" alt="banner.png" />
              </div>
            </div>
            <div className='icon-list'>  
                   <ul className='flex items-center gap-2 pb-5 text-primary text-xl'>
                    <li>
                        <Link  to="#"><FaFacebookF /></Link>
                    </li>
                    <li>
                        <Link to="#"><FaXTwitter /></Link>
                    </li>
                    <li>
                        <Link to="#"><FaInstagram /></Link>
                    </li>
                    <li>
                        <Link to="#"><FaLinkedin /></Link>
                    </li>
                   </ul>
                 </div>
            </div>
            {/* slider tow start */}
            <div>
              <h3>2</h3>
              <div>
            <div className='flex items-center justify-evenly'>
              <div>
                <div>
                <h5 className=' text-primary font-primary italic text-[20px] pt-2'>Best In Town</h5>
                <h1 className=' w-[422px] text-secondary font-primary font-semibold italic text-[32px] '>ENJOY OUR CHICKEN <span className=' text-primary font-primary italic text-[32px]'> BURGER </span> FAST FOOD</h1>
                <div className='flex justify-evenly pt-8'>
                <div className='flex items-center gap-5'>              
                <Link to="#" class="relative inline-flex items-center justify-start py-3 pl-4 pr-12 overflow-hidden font-semibold text-indigo-600 transition-all duration-150 ease-in-out rounded hover:pl-10 hover:pr-6 bg-gray-50 group">
                <span class="absolute bottom-0 left-0 w-full h-1 transition-all duration-150 ease-in-out bg-primary group-hover:h-full"></span>
                <span class="absolute right-0 pr-4 duration-200 ease-out group-hover:translate-x-12">
                <svg class="w-5 h-5 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
                </span>
                <span class="absolute left-0 pl-2.5 -translate-x-12 group-hover:translate-x-0 ease-out duration-200">
                <svg class="w-5 h-5 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
                </span>
                <span class="relative w-full text-left transition-colors duration-200 ease-in-out group-hover:text-white">Order Now</span>
                </Link>
                 <h4 className=' font-primary text-secondary text-xl font-normal'>Price <strong>:</strong>$10.50</h4>
                </div>
                </div>
                
                </div>
              </div>
              <div>
                <img src="/public/banner.png" alt="banner.png" />
              </div>
            </div>
            <div className='icon-list'>  
                   <ul className='flex items-center gap-2 pb-5 text-primary text-xl'>
                    <li>
                        <Link  to="#"><FaFacebookF /></Link>
                    </li>
                    <li>
                        <Link to="#"><FaXTwitter /></Link>
                    </li>
                    <li>
                        <Link to="#"><FaInstagram /></Link>
                    </li>
                    <li>
                        <Link to="#"><FaLinkedin /></Link>
                    </li>
                   </ul>
                 </div>
            </div>
            </div>
            {/* slider three start */}
            <div>
              <h3>3</h3>
              <div>
            <div className='flex items-center justify-evenly'>
              <div>
                <div>
                <h5 className=' text-primary font-primary italic text-[20px] pt-2'>Best In Town</h5>
                <h1 className=' w-[422px] text-secondary font-primary font-semibold italic text-[32px] '>ENJOY OUR CHICKEN <span className=' text-primary font-primary italic text-[32px]'> BURGER </span> FAST FOOD</h1>
                <div className='flex justify-evenly pt-8'>
                <div className='flex items-center gap-5'>              
                <Link to="#" class="relative inline-flex items-center justify-start py-3 pl-4 pr-12 overflow-hidden font-semibold text-indigo-600 transition-all duration-150 ease-in-out rounded hover:pl-10 hover:pr-6 bg-gray-50 group">
                <span class="absolute bottom-0 left-0 w-full h-1 transition-all duration-150 ease-in-out bg-primary group-hover:h-full"></span>
                <span class="absolute right-0 pr-4 duration-200 ease-out group-hover:translate-x-12">
                <svg class="w-5 h-5 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
                </span>
                <span class="absolute left-0 pl-2.5 -translate-x-12 group-hover:translate-x-0 ease-out duration-200">
                <svg class="w-5 h-5 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
                </span>
                <span class="relative w-full text-left transition-colors duration-200 ease-in-out group-hover:text-white">Order Now</span>
                </Link>
                 <h4 className=' font-primary text-secondary text-xl font-normal'>Price <strong>:</strong>$10.50</h4>
                </div>
                </div>
                
                </div>
              </div>
              <div>
                <img src="/public/banner.png" alt="banner.png" />
              </div>
            </div>
            <div className='icon-list'>  
                   <ul className='flex items-center gap-2 pb-5 text-primary text-xl'>
                    <li>
                        <Link  to="#"><FaFacebookF /></Link>
                    </li>
                    <li>
                        <Link to="#"><FaXTwitter /></Link>
                    </li>
                    <li>
                        <Link to="#"><FaInstagram /></Link>
                    </li>
                    <li>
                        <Link to="#"><FaLinkedin /></Link>
                    </li>
                   </ul>
                 </div>
            </div>
            </div>
            {/* slider four Start */}
            <div>
              <h3>4</h3>
              <div>
            <div className='flex items-center justify-evenly'>
              <div>
                <div>
                <h5 className=' text-primary font-primary italic text-[20px] pt-2'>Best In Town</h5>
                <h1 className=' w-[422px] text-secondary font-primary font-semibold italic text-[32px] '>ENJOY OUR CHICKEN <span className=' text-primary font-primary italic text-[32px]'> BURGER </span> FAST FOOD</h1>
                <div className='flex justify-evenly pt-8'>
                <div className='flex items-center gap-5'>              
                <Link to="#" class="relative inline-flex items-center justify-start py-3 pl-4 pr-12 overflow-hidden font-semibold text-indigo-600 transition-all duration-150 ease-in-out rounded hover:pl-10 hover:pr-6 bg-gray-50 group">
                <span class="absolute bottom-0 left-0 w-full h-1 transition-all duration-150 ease-in-out bg-primary group-hover:h-full"></span>
                <span class="absolute right-0 pr-4 duration-200 ease-out group-hover:translate-x-12">
                <svg class="w-5 h-5 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
                </span>
                <span class="absolute left-0 pl-2.5 -translate-x-12 group-hover:translate-x-0 ease-out duration-200">
                <svg class="w-5 h-5 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
                </span>
                <span class="relative w-full text-left transition-colors duration-200 ease-in-out group-hover:text-white">Order Now</span>
                </Link>
                 <h4 className=' font-primary text-secondary text-xl font-normal'>Price <strong>:</strong>$10.50</h4>
                </div>
                </div>
                
                </div>
              </div>
              <div>
                <img src="/public/banner.png" alt="banner.png" />
              </div>
            </div>
            <div className='icon-list'>  
                   <ul className='flex items-center gap-2 pb-5 text-primary text-xl'>
                    <li>
                        <Link  to="#"><FaFacebookF /></Link>
                    </li>
                    <li>
                        <Link to="#"><FaXTwitter /></Link>
                    </li>
                    <li>
                        <Link to="#"><FaInstagram /></Link>
                    </li>
                    <li>
                        <Link to="#"><FaLinkedin /></Link>
                    </li>
                   </ul>
                 </div>
            </div>
            </div>
          </Slider>
        </div>
        </div>
      );
    }

export default Banner