/* eslint-disable react/jsx-key */
// eslint-disable-next-line no-unused-vars
import React from 'react'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";


const data = [
  { Img:`/public/image_bigOffer_2.png`,},
  { Img:`/public/image_bigOffer_2.png`,},
  { Img:`/public/image_bigOffer_2.png`,},
  { Img:`/public/image_bigOffer_2.png`,},
  { Img:`/public/image_bigOffer_2.png`,},
];




const BigOffer = () => {

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    className: "center",
    centerPadding: "60px",
    centerMode: true,
    autoplay: true,
  };
  return (
    
    <div className='py-5 bg-bg'>
     <div className='container'>
     <div className=' text-center'>
      <h1 className='text-primary text-5xl font-primary font-extrabold pb-2 italic'>Bigg Offer</h1>
      <p className=' text-secondary text-xl font-primary font-bold pb-3'>For in this week, take your food, buy your best one.</p>
      </div>
   
     <Slider {...settings}>  
      {
        data.map((item) => (
         <div  key={item}  className='flex gap-5'>
           <div >
           <img src={item.Img} alt="" className='w-[97%]' />
          </div>
         </div>
          
        ))
      }
      </Slider>     
     </div>
    </div>
  )
}

export default BigOffer