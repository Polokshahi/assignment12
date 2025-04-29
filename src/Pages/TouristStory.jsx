import React, { useEffect, useState, useContext } from "react";
import { FacebookShareButton, FacebookIcon } from "react-share";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../Provider/Authprovider";

const TouristStory = () => {
  const [stories, setStories] = useState([]);
  const { user } = useContext(AuthContext); // Get user from AuthContext
  const navigate = useNavigate(); // For navigation

  useEffect(() => {
    fetch("/Story.json")
      .then((res) => res.json())
      .then((data) => setStories(data));
  }, []);

  return (
    <div className="mx-auto p-6">
      <h2 className="text-3xl font-bold text-center mb-6">Tourist Stories</h2>
      
      {/* All Stories Button */}
      <div className="flex justify-center mb-6">
        <button
          onClick={() => navigate("/all-stories")}
          className="bg-green-600 text-white px-5 py-2 rounded-lg hover:bg-green-700 transition"
        >
          All Stories
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {stories.map((story) => (
          <div
            key={story.id}
            className="bg-white shadow-lg rounded-lg p-5 flex flex-col items-center text-center border"
          >
            <img
              src={story.image}
              alt={story.name}
              className="w-32 h-32 rounded-full object-cover mb-4"
            />
            <h3 className="text-xl font-semibold">{story.name}</h3>
            <p className="text-gray-500">{story.location}</p>
            <p className="text-gray-700 mt-3">{story.story}</p>
            <p className="text-sm text-gray-400 mt-2">{story.date}</p>

            {/* Facebook Share Button */}
            <div className="mt-4">
              {user ? (
                <FacebookShareButton
                  url={window.location.href}
                  quote={`Check out this amazing travel story from ${story.name} in ${story.location}!`}
                  hashtag="#TravelDiaries"
                >
                  <FacebookIcon size={32} round={true} />
                </FacebookShareButton>
              ) : (
                <button
                  onClick={() => navigate("/login")}
                  className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition"
                >
                  Login to Share
                </button>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TouristStory;
