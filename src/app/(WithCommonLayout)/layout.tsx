import Footer from "@/components/Footer/Footer";
import Navbar from "@/components/Home/Navbar";
import React from "react";

const CommonLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <Navbar />
      <main className="min-h-screen "> {children}</main>
      <Footer />
    </>
  );
};

export default CommonLayout;
