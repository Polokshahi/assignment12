import React from 'react';

const Banner = () => {
  return (
    <section className="flex flex-col md:flex-row items-center gap-10 px-6 md:px-20 py-10 bg-transparent">
      {/* Image Section */}
      <div className="md:w-1/2">
        <img 
          src="/banner.jpg" 
          alt="Tourist at the Beach" 
          className="w-full h-[550px] object-cover rounded-lg shadow-lg"
        />
      </div>

      {/* Text Content */}
      <div className="md:w-1/2 bg-white bg-opacity-60 p-8 rounded-lg shadow-md">
        <h2 className="text-3xl md:text-4xl font-bold mt-2">
          Welcome to <span className="text-green-600">Tourist</span>
        </h2>
        <p className="text-gray-700 mt-4">
          Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu diam amet diam et eos. Clita erat ipsum et lorem et sit.
        </p>
        <p className="text-gray-700 mt-2">
          Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu diam amet diam et eos. Clita erat ipsum et lorem et sit, sed stet lorem sit clita duo justo magna dolore erat amet.
        </p>

        {/* Features List */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
          <div className="flex items-center gap-2">
            <span className="text-green-600">✔</span> First Class Flights
          </div>
          <div className="flex items-center gap-2">
            <span className="text-green-600">✔</span> Handpicked Hotels
          </div>
          <div className="flex items-center gap-2">
            <span className="text-green-600">✔</span> 5 Star Accommodations
          </div>
          <div className="flex items-center gap-2">
            <span className="text-green-600">✔</span> Latest Model Vehicles
          </div>
          <div className="flex items-center gap-2">
            <span className="text-green-600">✔</span> 150 Premium City Tours
          </div>
          <div className="flex items-center gap-2">
            <span className="text-green-600">✔</span> 24/7 Service
          </div>
        </div>

        {/* Button */}
        <button className="mt-6 bg-green-600 text-white px-6 py-2 rounded-lg shadow-lg hover:bg-green-700 transition">
          Read More
        </button>
      </div>
    </section>
  );
};

export default Banner;
