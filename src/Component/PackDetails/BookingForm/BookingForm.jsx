import React, { useState, useContext } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { AuthContext } from "../../../Provider/Authprovider";

const BookingForm = () => {
    const { user } = useContext(AuthContext);
    const [tourDate, setTourDate] = useState(null);
    const [selectedGuide, setSelectedGuide] = useState("");

    // Sample tour guides
    const tourGuides = ["John Doe", "Emily Smith", "Michael Johnson"];

    const handleSubmit = (e) => {
        e.preventDefault();

        const price = e.target.price.value;
        const packageName = e.target.packageName.value;

        const bookingDetails = {
            packageName,
            touristName: user?.displayName || "Guest",
            touristEmail: user?.email || "Not Available",
            touristImage: user?.photoURL || "No Image",
            price,
            tourDate,
            tourGuide: selectedGuide,
            status: "Pending",  
        };

        console.log("Booking Submitted:", bookingDetails);
        alert("Booking Successful!");


        //   data store to mongoDb 

        fetch('http://localhost:5000/booking', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(bookingDetails)
        }).then(res => {
            console.log('server side response', res);
        })

      




    };







    return (
        <div className="max-w-lg mx-auto bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-semibold text-center mb-4">Book Your Tour</h2>
            <form onSubmit={handleSubmit} className="space-y-4">
                {/* Package Name */}
                <div>
                    <label className="block text-gray-600">Package Name</label>
                    <input
                        type="text"
                        name="packageName"
                        className="w-full border rounded p-2 bg-gray-100"
                    />
                </div>

                {/* Tourist Name */}
                <div>
                    <label className="block text-gray-600">Tourist Name</label>
                    <input
                        type="text"
                        value={user?.displayName || "Guest"}
                        readOnly
                        className="w-full border rounded p-2 bg-gray-100"
                    />
                </div>

                {/* Tourist Email */}
                <div>
                    <label className="block text-gray-600">Tourist Email</label>
                    <input
                        type="email"
                        value={user?.email || "Not Available"}
                        readOnly
                        className="w-full border rounded p-2 bg-gray-100"
                    />
                </div>

                {/* Tourist Image */}
                <div>
                    <label className="block text-gray-600">Tourist Image</label>
                    <input
                        type="text"
                        value={user?.photoURL || "No Image"}
                        readOnly
                        className="w-full border rounded p-2 bg-gray-100"
                    />
                </div>

                {/* Price */}
                <div>
                    <label className="block text-gray-600">Price</label>
                    <input
                        type="number"
                        name="price"
                        className="w-full border rounded p-2 bg-gray-100"
                    />
                </div>

                {/* Tour Date */}
                <div>
                    <label className="block text-gray-600">Tour Date</label>
                    <DatePicker
                        selected={tourDate}
                        onChange={(date) => setTourDate(date)}
                        className="w-full border rounded p-2"
                        dateFormat="dd/MM/yyyy"
                        minDate={new Date()}
                        required
                    />
                </div>

                {/* Tour Guide Selection */}
                <div>
                    <label className="block text-gray-600">Tour Guide</label>
                    <select
                        value={selectedGuide}
                        onChange={(e) => setSelectedGuide(e.target.value)}
                        className="w-full border rounded p-2"
                        required
                    >
                        <option value="" disabled>Select a guide</option>
                        {tourGuides.map((guide, index) => (
                            <option key={index} value={guide}>{guide}</option>
                        ))}
                    </select>
                </div>

                {/* Submit Button */}
                <button
                    type="submit"
                    className="w-full bg-green-600 text-white py-2 rounded hover:bg-green-700 transition"
                >
                    Book Now
                </button>
            </form>
        </div>
    );
};

export default BookingForm;