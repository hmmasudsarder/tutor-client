"use client";
import { Button } from "@/components/ui/button";
import { useUser } from "@/context/UserContext";
import { sendTutorRequest } from "@/services/sendTutorRequest";
import { ITutors } from "@/types";
// import { ITutors } from "@/types";
import { MessageCircle } from "lucide-react";
import React, { useState } from "react";
import toast from "react-hot-toast";

const ProfileSection = ({ tutor }: { tutor: ITutors | null }) => {
  const user = useUser();
  const [requestStatus, setRequestStatus] = useState<string | null>(null);
  if (!tutor) {
    return <p>Loading tutor data...</p>;
  }
  console.log(tutor, "one tutor");

  const handleRequest = async () => {
    try {
      if (user?.email) {
        setRequestStatus("pending");
        const response = await sendTutorRequest(tutor?._id, user.email);

        if (response.status) {
          toast.success("Request sent successfully!");
          setRequestStatus("sent");
        } else {
          toast.error("All ready request!");
          setRequestStatus(null);
        }
      } else {
        alert("User email not available.");
      }
    } catch (error) {
      console.error(error);
      alert("Failed to send request. Please try again.");
      setRequestStatus(null);
    }
  };

  return (
    <div className="max-w-4xl mx-auto p-4 bg-white shadow-lg rounded-lg">
      <div className="text-end flex justify-end items-center gap-3">
        <Button onClick={handleRequest} disabled={requestStatus === "pending"}>
          {requestStatus === "pending" ? "Request Pending..." : "Send Request"}
        </Button>
        <Button>
          <MessageCircle />
        </Button>
        <Button> More </Button>
      </div>

      <div className="mt-6">
        <h2 className="text-xl font-semibold">About</h2>

        <p>
          I am going on a trip with my best friend this time, Célia. She is a
          Parisian recently and I am in Bordeaux in the south west of France.
        </p>
      </div>

      <div className="mt-6">
        <h2 className="text-xl font-semibold">Overview</h2>
        <div className="mt-2">
          <p></p>
        </div>
      </div>

      <div className="mt-6">
        <h2 className="text-lg mb-2 font-semibold">
          Expected Minimum Salary : <span>{tutor?.salary}</span> Tk/Month
        </h2>
        <h2 className="text-lg mb-2 font-semibold">
          Current Status for Tuition : {tutor.tuition}
        </h2>
        <h2 className="text-lg mb-2 font-semibold">
          Days Per Week : 4 Day/Week, 5 Day/Week
        </h2>
        <h2 className="text-lg mb-2 font-semibold">
          Tuitoring Experience : {tutor.experience}{" "}
        </h2>
        <h2 className="text-lg mb-2 font-semibold">
          Extra Facilities : {tutor.phone}
        </h2>
        <h2 className="text-lg mb-2 font-semibold">
          Preferred Medium of Instruction : {tutor.subject}
        </h2>
        <h2 className="text-lg mb-2 font-semibold">Rating : {tutor.rating}</h2>
      </div>
    </div>
  );
};

export default ProfileSection;
