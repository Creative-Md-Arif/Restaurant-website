import React from 'react'
import { Link } from 'react-router-dom'


const PopularDishes = () => {
  return (
    <section className='bg-bg pt-12'>
       <div className='container'>
        <div className='text-center'>
        <h5 className=' text-secondary font-primary text-xl font-blod'>Food Items</h5>
        <h1 className='text-primary font-primary text-3xl font-bold pb-5'>Popular Dishes</h1>
        </div>
        <div className='flex items-center justify-between pb-5'>
          <img src="/public/image_Dishes_1.png" alt="image_Dishes_1" />
          <img src="/public/image_Dishes_2.png" alt="image_Dishes_2" />
          <img src="/public/image_Dishes_3.png" alt="image_Dishes_3" />
          <img src="/public/image_Dishes_4.png" alt="image_Dishes_4" />
          <img src="/public/image_Dishes_5.png" alt="image_Dishes_5" />
        </div> 
        {/* RICH & HEALTHY part START */}
        <div>
          <h5 className='text-center text-secondary font-primary text-xl font-blod pb-3'>RICH & HEALTHY</h5>
          <div className='flex justify-between '>
            <div>
              <img src="/public/image_richHealthy_1.png" alt="image_richHealthy_1" />
            </div>
            <div>
              <h3 className='w-[502px] pb-8 text-primary font-primary text-3xl font-extrabold'>Highest quality artisangrains, proteins & seasonal ingredients</h3>
              <p className='w-[850px] pb-3 text-secondary font-primary text-xl font-normal'>Righteous indignation and dislike men who are so beguiled and demoralized <br />
               by the charms of pleasure of the moment, so blinded by desires, <br />
                that they cannot foresee.
                 </p>
              <div className='flex justify-between'>
                <div className=''>
                  <ul className='flex flex-col gap-6 pt-10  text-secondary font-primary text-xl font-normal'>
                    <li className='flex items-center gap-4 '><span><img src="/public/Star 1.png" alt="Star 1.png" /></span>Simple and easy to distinguish</li>
                    <li className='flex items-center gap-4'><span><img src="/public/Star 1.png" alt="Star 1.png" /></span>Pleasure of the momentblinded desire</li>
                    <li className='flex items-center gap-4'><span><img src="/public/Star 1.png" alt="Star 1.png" /></span>Able to do what we like best</li>
                  </ul>
                 <div className='pt-20'>
                 <Link href="#_" className="relative px-5 py-2 font-medium text-white group">
                   <span className="absolute inset-0 w-full h-full transition-all duration-300 ease-out transform translate-x-0 -skew-x-12 bg-primary group-hover:bg-purple-700 group-hover:skew-x-12"></span>
                   <span className="absolute inset-0 w-full h-full transition-all duration-300 ease-out transform skew-x-12 text-primary group-hover:bg-purple-500 group-hover:-skew-x-12"></span>
                   <span className="absolute bottom-0 left-0 hidden w-10 h-20 transition-all duration-100 ease-out transform -translate-x-8 translate-y-10 text-primary -rotate-12"></span>
                   <span className="absolute bottom-0 right-0 hidden w-10 h-20 transition-all duration-100 ease-out transform translate-x-10 translate-y-8 bg-purple-400 -rotate-12"></span>
                   <span className="relative">Reade More</span>
                   </Link>
                 </div>
                </div>
                <div>
                  <img src="/public/image_richHealthy_2.png" alt="image_richHealthy_2.png" />
                </div>
              </div>   
            </div>
          </div>
        
        </div> 
        {/* RICH & HEALTHY part END */} 
       </div>
    </section>
  )
}

export default PopularDishes