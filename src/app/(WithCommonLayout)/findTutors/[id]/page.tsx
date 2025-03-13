"use client"
import React, { useEffect, useState } from 'react'
import { ITutors } from '@/types';
import { useParams } from 'next/navigation';
import TutorsProfile from "@/components/findTutor/tutorsProfile/TutorsProfile";
import ProfileSection from "@/components/findTutor/tutorsInfo/TutorsInfoSection";


const TeacherDetails = () => {
    const [tutor, setTutor] = useState<ITutors | null>(null);
  const params = useParams();
  const {id} = params;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("https://tutor-link-server.vercel.app/api/user");
        const data = await response.json();

        const tutorData = data?.result?.find(
          (tutor: ITutors) => String(tutor?._id) === String(id)
        );
        if (tutorData) {
          setTutor(tutorData); // Set the fetched tutor data
        } else {
          console.log("Tutor not found");
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    if (id) {
      fetchData();
    }
  }, [id]);
  return (
    <div className="container mt-20 bg-[#bd7a855a] w-full mx-auto rounded-md mb-3.5">
      <div className="flex py-10 justify-start items-start">
        <TutorsProfile
          name={tutor?.name}
          photo={tutor?.photo}
          location={tutor?.location}
          email={tutor?.email}
        />
        <ProfileSection tutor={tutor} />
        
      </div>
    </div>
  )
}

export default TeacherDetails
