import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import React from 'react';

const Trips = () => {
    const { isPending, error, data: bookingData } = useQuery({
        queryKey: ['/bookings'],
        queryFn: async () => {
            const response = await axios.get('http://localhost:5000/bookings');
            return response.data;
        }
    });

    if (isPending) return <h1 className="text-center text-2xl font-semibold mt-10">Loading...</h1>;
    if (error) return <h1 className="text-center text-red-500 mt-10">{error.message}</h1>;

    return (
        <div className="p-6 max-w-6xl mx-auto">
            <h2 className="text-3xl font-semibold text-center mb-6">Your Trips</h2>
            
            {bookingData.length === 0 ? (
                <p className="text-center text-gray-500 text-lg">No trips booked yet.</p>
            ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {bookingData.map((trip) => (
                        <div key={trip._id} className="bg-white p-5 rounded-lg shadow-md border">
                            <img 
                                src={trip?.touristImage || 'https://via.placeholder.com/150'} 
                                alt={trip.touristName || 'Tourist'} 
                                className="w-full h-40 object-cover rounded-md mb-4"
                            />
                            <h3 className="text-xl font-semibold mb-2">{trip.packageName}</h3>
                            <p className="text-gray-700"><span className="font-semibold">Tourist:</span> {trip.touristName}</p>
                            <p className="text-gray-700"><span className="font-semibold">Email:</span> {trip.touristEmail}</p>
                            <p className="text-gray-700"><span className="font-semibold">Tour Guide:</span> {trip.tourGuide}</p>
                            <p className="text-gray-700"><span className="font-semibold">Price:</span> ${trip.price}</p>
                            <p className={`font-semibold mt-2 ${
                                trip.status === "Pending" ? "text-green-500" : "text-green-500"
                            }`}>
                                Status: {trip.status || 'Pending'}
                            </p>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default Trips;
