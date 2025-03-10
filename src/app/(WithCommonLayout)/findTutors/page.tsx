import HeroBanner from '@/components/findTutor/findTutorPage/HeroBanner'
import SearchTeacher from '@/components/findTutor/findTutorPage/SearchTeacher'
import React from 'react'

const teacherPage = () => {
  return (
    <div>
      <HeroBanner/>
      <div className="w-full px-10 mx-auto container mt-10">
      <SearchTeacher />
    </div>
    </div>
  )
}

export default teacherPage
