import React from "react";
import img1 from "@/assets/team.jpg"
import img2 from "@/assets/mission.jpg"
import img3 from "@/assets/success.jpg"
import img4 from "@/assets/vission.jpg"
import Image from "next/image";

const about = () => {
  return (
    <section className="bg-gray-100 py-12 px-6 md:px-16">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-4xl font-bold text-gray-900 mb-8">Platform Overview</h2>

        {/* Mission Statement */}
        <div className="bg-white p-6 rounded-2xl shadow-md flex flex-col md:flex-row items-center mb-6">
          <div className="md:w-1/2 mb-4 md:mb-0">
            <Image 
              src={img2} 
              width={500} 
              height={300} 
              alt="Mission Image" 
              className="rounded-lg shadow-lg"
            />
          </div>
          <div className="md:w-1/2 text-left px-4">
            <h3 className="text-2xl font-semibold text-blue-600 mb-2">Mission Statement</h3>
            <p className="text-gray-700">
              Our platform connects students with qualified tutors, providing personalized learning experiences to help them achieve academic success.
              Our platform connects students with qualified tutors, providing personalized learning experiences to help them achieve academic success.
            </p>
          </div>
        </div>

        {/* Team */}
        <div className="bg-white p-6 rounded-2xl shadow-md flex flex-col md:flex-row items-center mb-6">
          <div className="md:w-1/2 text-left px-4">
            <h3 className="text-2xl font-semibold text-blue-600 mb-2">Meet Our Team</h3>
            <p className="text-gray-700">
              Founded by passionate educators and technologists, our team is dedicated to enhancing education through innovation.
              Founded by passionate educators and technologists, our team is dedicated to enhancing education through innovation.
            </p>
          </div>
          <div className="md:w-1/2 mt-4 md:mt-0">
            <Image 
              src={img1}
              width={500} 
              height={300} 
              alt="Team Image" 
              className="rounded-lg shadow-lg"
            />
          </div>
        </div>

        {/* Success Stories */}
        <div className="bg-white p-6 rounded-2xl shadow-md flex flex-col md:flex-row items-center mb-6">
          <div className="md:w-1/2 mb-4 md:mb-0">
            <Image 
              src={img3}
              width={500} 
              height={300} 
              alt="Success Image" 
              className="rounded-lg shadow-lg"
            />
          </div>
          <div className="md:w-1/2 text-left px-4">
            <h3 className="text-2xl font-semibold text-blue-600 mb-2">Success Stories</h3>
            <p className="text-gray-700">
              Students using our platform have improved their grades and understanding of complex subjects with expert tutoring.
              Students using our platform have improved their grades and understanding of complex subjects with expert tutoring.
            </p>
          </div>
        </div>

        {/* Vision */}
        <div className="bg-white p-6 rounded-2xl shadow-md flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 text-left px-4">
            <h3 className="text-2xl font-semibold text-blue-600 mb-2">Our Vision</h3>
            <p className="text-gray-700">
              We aim to expand globally, covering more subjects and making quality education accessible to students worldwide.
              We aim to expand globally, covering more subjects and making quality education accessible to students worldwide.
            </p>
          </div>
          <div className="md:w-1/2 mt-4 md:mt-0">
            <Image 
              src={img4} 
              width={500} 
              height={300} 
              alt="Vision Image" 
              className="rounded-lg shadow-lg"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default about;
