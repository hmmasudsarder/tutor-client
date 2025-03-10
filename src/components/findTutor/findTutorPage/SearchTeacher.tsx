"use client";
import { Input } from "@/components/ui/input";
import { motion } from "framer-motion";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useEffect, useState } from "react";
import { ITutors } from "@/types";
import { getAllUser } from "@/services/users";
import TeachersCard from "@/components/ui/cors/TeachersCard";

const SearchTeacher = () => {
  const [tutorsData, setTutorsData] = useState<ITutors[]>([]);
  console.log(tutorsData, "server data");
  const [filteredTutors, setFilteredTutors] = useState<ITutors[]>([]);
  const [filters, setFilters] = useState({
    subject: "",
    rating: "",
    price: "",
    location: "",
  });
  console.log(filters)

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await getAllUser(); // Await API call

        if (response.status) {
          // Check if response is successful
          setTutorsData(response.result);
          setFilteredTutors(response.result);
        } else {
          console.error("Failed to fetch users:", response.message);
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  const applyFilter = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const fSubject = form.subject.value;
    const fRating = form.rating.value;
    const fPrice = form.price.value;
    const fLocation = form.location.value;

    setFilters({
      subject: fSubject,
      rating: fRating,
      price: fPrice,
      location: fLocation,
    });

    let filtered = tutorsData.filter((tutor) => {
      let subjectMatch = true;
      let ratingMatch = true;
      let locationMatch = true;

      if (fSubject && fSubject !== "All") {
        if (fSubject && fSubject !== "All") {
          subjectMatch = tutor.subject
            ?.toLowerCase()
            .replace(/\s+/g, "")
            .includes(fSubject.toLowerCase().replace(/\s+/g, ""));
        }
      }

      if (fRating) {
        if (fRating === "5") {
          ratingMatch = tutor.rating === 5;
        } else if (fRating === "4") {
          ratingMatch = tutor.rating >= 4;
        } else if (fRating === "3") {
          ratingMatch = tutor.rating >= 3;
        }
      }

      if (fLocation) {
        locationMatch = tutor.location
          .toLowerCase()
          .includes(fLocation.toLowerCase());
      }
      return subjectMatch && ratingMatch && locationMatch;
    });

    if (fPrice) {
      filtered = [...filtered];
      if (fPrice === "hightolow") {
        filtered.sort(
          (a, b) =>
            parseInt(b.salary.replace(" BDT", "")) -
            parseInt(a.salary.replace(" BDT", ""))
        );
      } else if (fPrice === "lowtohigh") {
        filtered.sort(
          (a, b) =>
            parseInt(a.salary.replace(" BDT", "")) -
            parseInt(b.salary.replace(" BDT", ""))
        );
      }
    }

    setFilteredTutors(filtered);
  };

  return (
    <div className="">
      <div className="mb-16 w-full container mx-auto">
        <form
          className="p-4 bg-white shadow-md rounded-lg flex flex-col gap-4 md:flex-row md:items-center"
          onSubmit={applyFilter}
        >
          <Select name="subject">
            <SelectTrigger className="w-full md:w-40 mx-10">
              <SelectValue placeholder="Select Subject" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="All">All</SelectItem>
              <SelectItem value="Mathematics">Mathematics</SelectItem>
              <SelectItem value="Physics">Physics</SelectItem>
              <SelectItem value="English">English</SelectItem>
              <SelectItem value="Biology">Biology</SelectItem>
              <SelectItem value="Chemistry">Chemistry</SelectItem>
              <SelectItem value="Higher Math">Higher Math</SelectItem>
              <SelectItem value="Bangla">Bangla</SelectItem>
              <SelectItem value="General Science">General Science</SelectItem>
              <SelectItem value="Accounting">Accounting</SelectItem>
              <SelectItem value="Economics">Economics</SelectItem>
            </SelectContent>
          </Select>

          <Select name="rating">
            <SelectTrigger className="w-full md:w-40 mx-5">
              <SelectValue placeholder="Rating" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="5">5 Stars</SelectItem>
              <SelectItem value="4">4+ Stars</SelectItem>
              <SelectItem value="3">3+ Stars</SelectItem>
            </SelectContent>
          </Select>

          <Select name="price">
            <SelectTrigger className="w-full md:w-40 mx-5">
              <SelectValue placeholder="Price" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="hightolow">High To Low</SelectItem>
              <SelectItem value="lowtohigh">Low To High</SelectItem>
            </SelectContent>
          </Select>

          <Input
            type="text"
            placeholder="Location"
            className="w-full md:w-40 mx-5"
            name="location"
          />

          <div className="relative flex items-center justify-center">
            <motion.div
              className="absolute opacity-50"
            />

            {/* Main Button */}
            <motion.button
            //   whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="relative px-6 py-3 mx-5 cursor-pointer text-white bg-gradient-to-r from-[#40282C] to-[#5d313a] rounded-full shadow-lg"
            >
              Apply Filter →
            </motion.button>
          </div>
        </form>
      </div>

      <div className=" grid grid-cols-4 gap-7 justify-center">
        {filteredTutors.length > 0 ? (
          filteredTutors.map((tutor) => (
            <TeachersCard key={tutor._id} tutor={tutor} />
          ))
        ) : (
          <p>No tutors found with the applied filters</p>
        )}
      </div>
    </div>
  );
};

export default SearchTeacher;
