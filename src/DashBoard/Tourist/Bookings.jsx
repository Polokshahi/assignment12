import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import React from 'react';
import Swal from 'sweetalert2';

const Bookings = () => {
    const navigate = useNavigate();
    const queryClient = useQueryClient();

    // Fetch bookings
    const { data: bookingData = [], isPending, error } = useQuery({
        queryKey: ['bookings'],
        queryFn: async () => {
            const response = await axios.get('https://assignment-12-server-five-ebon.vercel.app/bookings');
            return response.data;
        }
    });

    // Cancel Booking Mutation
    const cancelMutation = useMutation({
        mutationFn: async (bookingId) => {
            await axios.delete(`https://assignment-12-server-five-ebon.vercel.app/bookings/${bookingId}`);
        },
        onSuccess: () => {
            Swal.fire("Cancelled!", "Your booking has been cancelled.", "success");
            queryClient.invalidateQueries(['bookings']);
        },
        onError: () => {
            Swal.fire("Error!", "Something went wrong.", "error");
        }
    });

    // Handle Cancel Booking
    const handleCancelBooking = (bookingId) => {
        Swal.fire({
            title: "Are you sure?",
            text: "This booking will be permanently deleted!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#d33",
            cancelButtonColor: "#3085d6",
            confirmButtonText: "Yes, cancel it!"
        }).then((result) => {
            if (result.isConfirmed) {
                cancelMutation.mutate(bookingId);
            }
        });
    };

    if (isPending) return <p className="text-center text-gray-500">Loading bookings...</p>;
    if (error) return <p className="text-red-500 text-center">An error occurred: {error.message}</p>;

    return (
        <div className="p-6">
            <h1 className="text-2xl font-bold text-center mb-6">All Tour Bookings</h1>

            {bookingData.length === 0 ? (
                <p className="text-center text-gray-500">No bookings available.</p>
            ) : (
                <div className="overflow-x-auto">
                    <table className="table-auto w-full border-collapse border border-gray-300 shadow-lg">
                        <thead>
                            <tr className="bg-gray-200 text-left text-gray-700">
                                <th className="border border-gray-300 px-4 py-2">Package Name</th>
                                <th className="border border-gray-300 px-4 py-2">Tour Guide</th>
                                <th className="border border-gray-300 px-4 py-2">Tour Date</th>
                                <th className="border border-gray-300 px-4 py-2">Price ($)</th>
                                <th className="border border-gray-300 px-4 py-2">Status</th>
                                <th className="border border-gray-300 px-4 py-2">Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {bookingData.map((booking) => (
                                <tr key={booking._id} className="text-center hover:bg-gray-100 transition">
                                    <td className="border border-gray-300 px-4 py-2 font-semibold">{booking.packageName}</td>
                                    <td className="border border-gray-300 px-4 py-2">{booking.tourGuide}</td>
                                    <td className="border border-gray-300 px-4 py-2">
                                        {new Date(booking.tourDate).toLocaleDateString('en-US', {
                                            weekday: 'short',
                                            year: 'numeric',
                                            month: 'short',
                                            day: 'numeric'
                                        })}
                                    </td>
                                    <td className="border border-gray-300 px-4 py-2 font-medium">${booking.price}</td>
                                    <td className="border border-gray-300 px-4 py-2">
                                        <span 
                                            className={`px-3 py-1 rounded-full text-white font-semibold 
                                            ${booking.status === 'Accepted' ? 'bg-green-500' : 
                                            booking.status === 'Rejected' ? 'bg-red-500' : 
                                            'bg-yellow-500'}`}
                                        >
                                            {booking.status || 'In Review'}
                                        </span>
                                    </td>
                                    <td className="border border-gray-300 px-4 py-2 flex justify-center gap-2">
                                        {booking.status === "Pending" && (
                                            <>
                                                <Link to={'/dashboard/payment'}>
                                                <button
                                                    onClick={() => navigate(`/payment/${booking._id}`)}
                                                    className="bg-blue-500 hover:bg-blue-600 text-white px-3 py-1 rounded"
                                                >
                                                    Pay
                                                </button>
                                                </Link>
                                                <button
                                                    onClick={() => handleCancelBooking(booking._id)}
                                                    className="bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded"
                                                >
                                                    Cancel
                                                </button>
                                            </>
                                        )}
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            )}
        </div>
    );
};

export default Bookings;
