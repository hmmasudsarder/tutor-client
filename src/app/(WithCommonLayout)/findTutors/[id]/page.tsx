"use client"
import React, { useEffect, useState } from 'react'
import { ITutors } from '@/types';
import { useParams } from 'next/navigation';

const Page = () => {
    const [tutor, setTutor] = useState<ITutors | null>(null);
  // console.log(tutor, "fast get");
  const params = useParams();
  const id = params.tutorsId;
  // console.log(id);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("http://localhost:5100/api/user");
        console.log(response);
        const data = await response.json();
        console.log(data, "main data");

        const tutorData = data.result.find(
          (tutor: ITutors) => String(tutor?._id) === String(id)
        );
        console.log(tutorData);
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
    <div className="container mt-20 bg-amber-50 w-full mx-auto">
      <div className="flex py-10 justify-start items-start">
        {/* <TutorsProfile
          name={tutor?.name}
          photo={tutor?.photo}
          location={tutor?.location}
          email={tutor?.email}
        />
        <ProfileSection tutor={tutor} /> */}
        {id}
      </div>
    </div>
  )
}

export default Page
