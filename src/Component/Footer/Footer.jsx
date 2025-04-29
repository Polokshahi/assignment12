import React from "react";
import { FaMapMarkerAlt } from "react-icons/fa"; // Import the pin icon

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300">
      {/* Top Section */}
      <div className="bg-gray-800 py-4 px-6 flex flex-col md:flex-row justify-between items-center text-center md:text-left">
        <p className="text-lg font-semibold flex items-center gap-2 mb-2 md:mb-0">
        <span className="text-3xl">📍</span> <h1 className="font-extrabold text-green-500">Tourist Travel</h1>
        </p>
        <button className="bg-orange-500 hover:bg-orange-600 text-white px-5 py-2 rounded-lg text-sm font-semibold">
          ONLINE CALL
        </button>
      </div>

      {/* Middle Section */}
      <div className="py-6 px-6 grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-6 text-sm text-center md:text-left">
        <div>
          <p className="font-semibold text-white">WEEBLY THEMES</p>
          <p className="hover:text-gray-400 cursor-pointer">Pre-Sale FAQs</p>
          <p className="hover:text-gray-400 cursor-pointer">Submit a Ticket</p>
        </div>
        <div>
          <p className="font-semibold text-white">SERVICES</p>
          <p className="hover:text-gray-400 cursor-pointer">Theme Tweak</p>
        </div>
        <div>
          <p className="font-semibold text-white">SHOWCASE</p>
          <p className="hover:text-gray-400 cursor-pointer">WidgetKit</p>
          <p className="hover:text-gray-400 cursor-pointer">Support</p>
        </div>
        <div>
          <p className="font-semibold text-white">ABOUT US</p>
          <p className="hover:text-gray-400 cursor-pointer">Contact Us</p>
          <p className="hover:text-gray-400 cursor-pointer">Affiliates</p>
          <p className="hover:text-gray-400 cursor-pointer">Resources</p>
        </div>
      </div>

      {/* Divider */}
      <hr className="border-gray-700 mx-6" />

      {/* Bottom Section */}
      <div className="py-4 px-6 flex flex-col md:flex-row justify-between items-center text-sm text-gray-400 text-center md:text-left">
        <ul className="flex flex-wrap justify-center md:justify-start space-x-4 mb-3 md:mb-0">
          <li><a href="#" className="hover:text-gray-400">HOME</a></li>
          <li><a href="#" className="hover:text-gray-400">FEATURES</a></li>
          <li><a href="#" className="hover:text-gray-400">PAGE LAYOUTS</a></li>
          <li><a href="#" className="hover:text-gray-400">PAGES</a></li>
          <li><a href="#" className="hover:text-gray-400">STORE</a></li>
        </ul>
        <p>© Copyright. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
