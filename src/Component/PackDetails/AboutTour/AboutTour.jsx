import React from 'react';
import { RiFocus2Line } from 'react-icons/ri';
import { GiStarSattelites } from 'react-icons/gi'


const AboutTour = () => {
    return (
        <div
        className='container mx-auto my-16'
        >
        <div className="space-y-2">
            <p className='text-[#63AB45] font-mansalva text-2xl font-bold'>About The Tour</p>
            <h2 className='text-4xl font-bold pb-4'>Let’s know About Our
            Journey For Tourist Travel</h2>
          <div className='flex gap-4 pb-4'>
          <div className='flex items-center gap-2 text-xl font-bold opacity-80 text-[#63AB45]'>
                <RiFocus2Line></RiFocus2Line> Mission & Vision
            </div>
            <div className='flex items-center gap-2 text-xl font-bold opacity-80 text-[#63AB45]'>
                <GiStarSattelites></GiStarSattelites> Focus On Customer
            </div>
          </div>
            <p className='font-semibold opacity-80 pb-4'>
            At Tourist Travel, we specialize in creating unforgettable
             travel experiences tailored to your desires. Our 
             comprehensive services include worldwide tour destinations,
              customizable tour packages, visa application assistance, hotel reservations, 
              transportation rentals, and day-long activities. With a commitment to excellence, we ensure every journey is seamless, enriching, and memorable. Join us as we explore the wonders of the world together.
        </p>
        <button className='btn bg-[#63AB45]  text-white '>About More</button>
        </div>
        <div className="">
    
        </div>
    
    
    
    
        </div>
    );
};

export default AboutTour;