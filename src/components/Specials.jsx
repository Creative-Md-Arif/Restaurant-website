/* eslint-disable react/jsx-key */
// eslint-disable-next-line no-unused-vars
import React from 'react'
import { Link } from 'react-router-dom'
import SpecialsSlider from './SpecialsSlider'




const Specials = () => {
  return (
    <section className=' bg-bg pt-[50px] pb-[70px]'>
        <div className='container'>
            <div className='text-center'>
                <h5 className=' font-primary font-bold text-primary text-xl pb-2' >SPECIALS</h5>
                <h3 className=' font-primary font-bold text-secondary text-3xl pb-2'>
                Check out our menu</h3>
                <p className=' font-primary font-bold text-secondary text-xs pb-3 '>Demoralized by the charms of pleasure of the moment so blinded except to some advantage.</p>
            </div>
            <div>
              <ul  className='flex justify-between font-primary font-normal text-primary text-xl'>
                <li className='w-[20%] h-10 text-center leading-10 border-r-2 border-secondary border-opacity-20 hover:bg-primary hover:text-white transition-all duration-500 ease-in-out'>
                    <Link>BREAKFAST</Link>
                </li>
                <li className='w-[20%] h-10 text-center leading-10 border-r-2 border-secondary  border-opacity-20 hover:bg-primary hover:text-white transition-all duration-500 ease-in-out'>
                    <Link>LUNCH</Link>
                </li>
                <li className='w-[20%] h-10 text-center leading-10 border-r-2 border-secondary border-opacity-20  hover:bg-primary hover:text-white transition-all duration-500 ease-in-out'>
                    <Link>DINNER</Link>
                </li >
                <li className='w-[20%] h-10 text-center leading-10 border-r-2 border-opacity-20 border-secondary  hover:bg-primary hover:text-white hover:border-primary transition-all duration-500 ease-in-out'>
                    <Link>STARTERS</Link>
                </li >
                <li className='w-[20%] h-10 text-center leading-10  hover:bg-primary hover:text-white 
                 transition-all duration-500 ease-in-out'>
                    <Link>BEVERAGES</Link>
                </li>
              </ul>
            </div>
            <div>
            <SpecialsSlider/>
            </div>
        </div>
    </section>
  )
}

export default Specials