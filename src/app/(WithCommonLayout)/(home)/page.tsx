import HeroBanner from '@/components/Home/HeroBanner'
import States from '@/components/Home/States/States'
import Tutor from '@/components/Home/Tutor/Tutor'
import React from 'react'

const page = () => {
  return (
    <div>
      <HeroBanner/>
      <Tutor/>
      <States/>
    </div>
  )
}

export default page
