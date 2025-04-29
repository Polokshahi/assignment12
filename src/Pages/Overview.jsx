import React from 'react';
import { RiFlightTakeoffLine, RiHotelLine, RiStarLine, RiCarLine } from 'react-icons/ri';
import { FaGlobeAmericas, FaHeadset } from 'react-icons/fa';

const Overview = () => {

    const features = [
        { title: "First Class Flights", icon: <RiFlightTakeoffLine /> },
        { title: "Handpicked Hotels", icon: <RiHotelLine /> },
        { title: "5-Star Accommodations", icon: <RiStarLine /> },
        { title: "Latest Model Vehicles", icon: <RiCarLine /> },
        { title: "150+ Premium Tours", icon: <FaGlobeAmericas /> },
        { title: "24/7 Customer Support", icon: <FaHeadset /> },
      ];

    return (
        <div className="min-h-screen bg-gray-100">
      {/* Video Section */}
      <section className="px-6 md:px-20 py-12 flex flex-col items-center">
        <h2 className="text-3xl font-bold text-gray-800 mb-6">Watch Our Video</h2>
        <div className="w-full max-w-3xl">
          <iframe 
            className="w-full h-[315px] md:h-[400px] rounded-lg shadow-lg"
            src="https://www.youtube.com/embed/cORGIzX0hww?si=DGdnjRKV2lyf9zu9"
            title="YouTube video player" 
            frameBorder="0" 
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
            referrerPolicy="strict-origin-when-cross-origin" 
            allowFullScreen
          ></iframe>
        </div>
      </section>

      {/* Features Section */}
      <section className="px-6 md:px-20 py-12 bg-white">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-10">Why Choose Us?</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="bg-gray-50 p-6 rounded-lg shadow-md flex flex-col items-center text-center">
              <span className="text-5xl text-green-600">{feature.icon}</span>
              <h3 className="text-xl font-semibold mt-4">{feature.title}</h3>
            </div>
          ))}
        </div>
      </section>

      {/* Call to Action */}
      <section className="px-6 md:px-20 py-12 text-center">
        <h2 className="text-3xl font-bold text-gray-800">Ready to Explore?</h2>
        <p className="text-gray-600 mt-2">Join us for an unforgettable journey.</p>
        <button className="mt-6 bg-green-600 text-white px-6 py-3 rounded-lg shadow-lg hover:bg-green-700 transition">
          Get Started
        </button>
      </section>
    </div>
    );
};

export default Overview;