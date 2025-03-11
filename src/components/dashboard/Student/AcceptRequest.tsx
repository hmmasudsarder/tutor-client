/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import { useEffect, useState } from "react";
import { useUser } from "@/context/UserContext";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { ITutors } from "@/types";
import { getStudentRequst } from "@/services/users";
import toast from "react-hot-toast";
import { getAcceptRequsts } from "@/services/AcceptRequest";

const AcceptRequest = () => {
  const user = useUser();
  const [requests, setRequests] = useState<ITutors[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    const userEmail = user?.email;
    if (!userEmail) {
      setError("");
      return;
    }

    const fetchRequests = async () => {
      try {
        setLoading(true);

        const studentData = await getAcceptRequsts(userEmail);
        console.log("Student Data Response:", studentData);

        if (
          !studentData.status ||
          !studentData.data ||
          studentData.data.length === 0
        ) {
          setError("No requests found.");
          setLoading(false);
          return;
        }

        const tutorId = studentData.data[0]?.tutorId;
        console.log("Extracted Tutor ID:", tutorId);

        if (!tutorId) {
          setError("Tutor ID not found.");
          setLoading(false);
          return;
        }

        const tutorRequests = await getStudentRequst(tutorId);
        console.log("Tutor Request Response:", tutorRequests);

        if (tutorRequests.status) {
          setRequests(tutorRequests.result ? [tutorRequests.result] : []);
        } else {
          setError("No tutor requests found.");
        }
      } catch (error: any) {
        toast.error("Failed to fetch requests.");
        console.error("Fetch Error:", error);
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchRequests();
  }, [user?.email]);

  return (
    <div>
      <h1 className="text-3xl text-center text-orange-400 mb-10">
        My Requests
      </h1>

      {/* Loading indicator */}
      {loading && <p className="text-center text-blue-500">Loading...</p>}

      {/* Error message */}
      {error && <p className="text-center text-red-500">{error}</p>}

      {/* Table */}
      <div className="px-10 overflow-x-auto">
        <Table className="min-w-full">
          <TableHeader>
            <TableRow>
              <TableHead className="w-[100px]">Name</TableHead>
              <TableHead>Salary</TableHead>
              <TableHead className="w-[70px]">Id</TableHead>
              <TableHead className="text-right w-[80px]">Email</TableHead>
              <TableHead className="text-right">Class</TableHead>
              <TableHead className="text-right">Subject</TableHead>
              <TableHead className="text-right w-[10px]">Payment</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {/* If there are requests, map through and display them */}
            {requests.length > 0 ? (
              requests.map((request) => (
                <TableRow key={request._id}>
                  <TableCell className="font-medium">{request.name}</TableCell>
                  <TableCell>{request.salary}</TableCell>
                  <TableCell>{request._id}</TableCell>
                  <TableCell className="text-right">{request.email}</TableCell>
                  <TableCell className="text-right">{request.class}</TableCell>
                  <TableCell className="text-right">
                    {request.subject}
                  </TableCell>
                  <TableCell className="text-right">
                    <Button>Payment</Button>
                  </TableCell>
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell colSpan={7} className="text-center">
                  No requests found.
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>
    </div>
  );
};

export default AcceptRequest;
