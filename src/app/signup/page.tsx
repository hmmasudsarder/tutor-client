import SignUp from "@/components/Signup/SignUp";
import { Suspense } from "react";


export default function signUpPage() {
  return (
    <>
      <Suspense fallback={<div>Loading...</div>}>
        <SignUp />
      </Suspense>

    </>
  );
}