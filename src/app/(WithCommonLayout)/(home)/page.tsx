import Footer from '@/components/Footer/Footer'
import HeroBanner from '@/components/Home/HeroBanner'
import Navbar from '@/components/Home/Navbar'
import States from '@/components/Home/States/States'
import React from 'react'

const page = () => {
  return (
    <div>
      <Navbar/>
      <HeroBanner/>
      <States/>
      <Footer/>
    </div>
  )
}

export default page
