"use client"
import { useState } from "react";
import { Input } from "@/components/ui/input";
import Image from "next/image";
import img1 from "@/assets/team.jpg"
import img2 from "@/assets/mission.jpg"
import img3 from "@/assets/success.jpg"
import img4 from "@/assets/vission.jpg"

const articles = [
  {
    category: "Software QA & Testing",
    title: "What To Do When There’s a Bug in Production & How to Handle It",
    content: "Acknowledge the issue, communicate effectively, and deploy fixes.",
    author: "Fardin Amin Arpon",
    date: "Oct 02, 2023",
    image: img1,
  },
  {
    category: "Programming Career",
    title: "Your Dream Developer Job Can Be Within Your Reach",
    content: "Passion and perseverance lead to success in the tech industry.",
    author: "Ahmad Tarique Hasan",
    date: "Aug 29, 2023",
    image: img2,
  },
  {
    category: "Web Development",
    title: "Programming Hero Job Placement Report 2022-2023",
    content: "An analysis of job placements from May 2022 to May 2023.",
    author: "Jhankar Mahbub",
    date: "Jun 10, 2023",
    image: img3
  },
  {
    category: "Web Development",
    title: "Programming Hero Job Placement Report 2022-2023",
    content: "An analysis of job placements from May 2022 to May 2023.",
    author: "Jhankar Mahbub",
    date: "Jun 10, 2023",
    image: img4
  },
];

export default function Blog() {
  const [searchQuery, setSearchQuery] = useState("");

  const filteredArticles = articles.filter(article =>
    article.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    article.content.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="max-w-6xl mx-auto p-6">
      <h2 className="text-3xl font-bold mb-4">Blogs</h2>
      <p className="text-gray-600 mb-6">A resource hub for educational tips, industry news, and platform updates.</p>
      
      <Input
        type="text"
        placeholder="Search articles..."
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        className="w-full mb-6 p-3 border rounded-md bg-gray-900 text-white"
      />
      
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {filteredArticles?.map((article, index) => (
          <div key={index} className="bg-[#40282c] text-white rounded-lg shadow-lg overflow-hidden">
            <Image src={article.image} width={400} height={300} alt={article.title} className="w-full h-40 object-cover" />
            <div className="p-4">
              <span className="bg-purple-600 text-xs px-3 py-1 rounded-full text-white font-semibold">{article.category}</span>
              <h3 className="mt-3 text-lg font-bold">{article.title}</h3>
              <p className="text-gray-300 text-sm mt-2">{article.content}</p>
              <div className="flex justify-between items-center mt-4 text-xs text-gray-300">
                <span>{article.author}</span>
                <span>{article.date}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
