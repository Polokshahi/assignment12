import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../../Component/Navbar/Navbar";
import Footer from "../../Component/Footer/Footer";

export const MainLayout = () => {
  return (
    <div className="flex flex-col min-h-screen w-full">
      {/* Navbar (Sticky at the Top) */}
      <div className="fixed top-0 left-0 w-full z-50">
        <Navbar />
      </div>

      {/* Main Content (Grows to Fill Remaining Space) */}
      <div className="flex-grow pt-16 px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16">
        <Outlet />
      </div>

      {/* Footer (Stays at the Bottom) */}
      <Footer />
    </div>
  );
};
