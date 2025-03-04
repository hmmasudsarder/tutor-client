"use client";
import { getAllUser } from '@/services/users';
import { ITutors } from '@/types';
import Image from 'next/image'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'

const Tutor = () => {
    const [tutorsData, setTutorsData] = useState<ITutors[]>([]);
  console.log(tutorsData);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await getAllUser(); // Await API call
        if (response.status) {
          setTutorsData(response.result);
        } else {
          console.error("Failed to fetch users:", response.message);
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);
  return (
    <div className="mt-16 container mx-auto w-full px-4">
      <h1 className="text-center lg:text-4xl text-2xl font-medium text-gray-700">
        Our Tutors
      </h1>
      <p className="text-center lg:text-2xl text-xl text-gray-700 mt-3 mb-10">
        Here are few of the Verified Teachers
      </p>
      <div className="flex justify-end mb-7">
        <button className="px-2 py-2 bg-[#40282C] text-sm rounded-md">View More</button>
      </div>
      <div className="grid xl:grid-cols-4  lg:grid-cols-3 md:grid-cols-2 grid-cols-1 justify-center gap-5 ">
        {tutorsData.map((tutor) => (
          <div
            key={tutor._id}
            className=" lg:w-[300px] w-[350px] rounded-lg overflow-hidden shadow-lg bg-[#ffffffb6] mx-4"
          >
            <div className="w-full h-48 relative">
              <Image
                src={tutor?.photo} // Update this path to your image
                alt="img"
                layout="fill"
                objectFit="cover"
              />
            </div>
            <div className="px-4 py-4 text-center">
              <div className="font-bold text-lg mb-2 text-black">{tutor?.name}</div>
              <p className="text-gray-700 text-base">{tutor.bio}</p>
              {/* <div className="w-full border border-gray-700 mt-2"></div> */}
            </div>
            <div className="px-6 flex justify-between pt-2 pb-2">
              <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                {tutor?.location}
              </span>
              <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                271 Views
              </span>
            </div>
            <div className="px-6 mt-3 mb-2 w-full pb-4">
              <Link href={`/findTutors/${tutor?._id}`}>
                <button className="bg-[#40282C] w-full hover:bg-[#5d313a] text-white font-bold py-2 px-4 rounded">
                  View Details
                </button>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Tutor
