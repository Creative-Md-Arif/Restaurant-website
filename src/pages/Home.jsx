/* eslint-disable no-unused-vars */
import React from 'react'
import Banner from '../components/Banner'
import PopularDishes from '../components/PopularDishes'
import BigOffer from '../components/BigOffer'
import Specials from '../components/Specials'

const Home = () => {
  return (
    <div>
        <Banner/>
        <PopularDishes/>
        <BigOffer/>    
        <Specials/>    
    </div>
  )
}

export default Home