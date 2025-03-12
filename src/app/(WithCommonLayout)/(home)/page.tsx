import HeroBanner from '@/components/Home/HeroBanner'
import Review from '@/components/Home/Review/Review'
import States from '@/components/Home/States/States'
import Tutor from '@/components/Home/Tutor/Tutor'
import React from 'react'

const page = () => {
  return (
    <div>
      <HeroBanner/>
      <Tutor/>
      <States/>
      <Review/>
    </div>
  )
}

export default page
