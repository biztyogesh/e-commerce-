import React from 'react'
import Hero from '../Hero/Hero'
import Popular from '../Components/Popular/Popular'
import Offers from '../Components/Offers/Offers'
import NewCollections from '../Components/NewCollections/NewCollections'
import NewsLetter from '../Components/NewsLetter/NewsLetter'
import { Outlet } from 'react-router-dom'
import Navbar from '../Components/Navbar/Navbar'
import Footer from '../Components/Footer/Footer'

function Shop() {
  return (
    <div>
        <Navbar />
      <Outlet/>
        <Footer />
    
    </div>
  )
}

export default Shop
