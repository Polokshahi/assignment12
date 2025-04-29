import React from "react";
import { useLoaderData, useParams } from "react-router-dom";

const GuideDetails = () => {
  const { id } = useParams();
  const guideData = useLoaderData();
  
  // Filtering the guide data by ID
  const singleGuideData = guideData.filter((data) => data.id == id);

  return (
    <div className="max-w-6xl mx-auto p-8">

        <div>
            <h1 className="font-extrabold text-[64px] text-center underline mb-5">Tour Guide</h1>
        </div>


      {singleGuideData.length === 0 ? (
        <p className="text-center text-xl text-red-500">Guide not found!</p>
      ) : (
        singleGuideData.map((data) => (
          <div key={data.id} className="bg-white rounded-lg shadow-xl p-6 space-y-6">
            {/* Profile Image and Basic Info */}
            <div className="flex flex-col lg:flex-row  items-center space-x-8">
              <img
                src={data.profileImage}
                alt={data.name}
                className="w-48 h-48 object-cover rounded-full mb-4 lg:mb-0"
              />
              <div className="flex flex-col space-y-4">
                <h1 className="text-4xl font-bold text-gray-800">{data.name}</h1>
                <p className="text-xl text-gray-600">{data.specialty}</p>
                <p className="text-lg text-gray-500">{data.description}</p>
                <p className="text-gray-600">Years of Experience: {data.yearsOfExperience}</p>
                <p className="text-gray-600">Location: {data.location}</p>
              </div>
            </div>

            {/* Contact Info */}
            <div className="space-y-4">
              <p className="text-lg text-gray-600">Contact Information:</p>
              <div className="flex space-x-4">
                <a
                  href={`mailto:${data.contact.email}`}
                  className="btn btn-primary bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700"
                >
                  Contact Email
                </a>
                <a
                  href={`tel:${data.contact.phone}`}
                  className="btn btn-secondary bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700"
                >
                  Call {data.contact.phone}
                </a>
              </div>
            </div>
          </div>
        ))
      )}
    </div>
  );
};

export default GuideDetails;
