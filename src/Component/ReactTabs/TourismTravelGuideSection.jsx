import React, { useEffect, useState } from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import { Link } from "react-router-dom";

const TourismTravelGuideSection = () => {
    const [randomData, setRandomData] = useState([]);
    const [guide, setGuide] = useState([]);

    const fetchData2 = () => {
        fetch('/public/Guides.json')
            .then(res => res.json())
            .then(data => {
                setGuide(data);

                const randomData = data.sort(() => 0.5 - Math.random()).slice(0, 6);
                setGuide(randomData);
            });
    }

    useEffect(() => {

        fetchData2();


        // Set an interval to update data every minute (60 seconds)
        const intervalId = setInterval(fetchData, 60000);

        // Clean up the interval on component unmount
        return () => clearInterval(intervalId);




    }, [])

    console.log(guide);









    const fetchData = () => {
        fetch('https://assignment-12-server-five-ebon.vercel.app/tourpackages')
            .then(res => res.json())
            .then(data => {
                // Get 3 random items from the fetched data
                const randomItems = data.sort(() => 0.5 - Math.random()).slice(0, 3);
                setRandomData(randomItems);
            });
    };

    useEffect(() => {
        // Fetch data initially
        fetchData();

        // Set an interval to update data every minute (60 seconds)
        const intervalId = setInterval(fetchData, 60000);

        // Clean up the interval on component unmount
        return () => clearInterval(intervalId);
    }, []);











    console.log(randomData);


    return (
        <div className="min-h-screen bg-gray-100 flex items-center justify-center py-12">
            <div className="w-full max-w-7xl bg-white p-8 rounded-lg shadow-lg">
                <Tabs>
                    {/* Tab List */}
                    <TabList className="flex gap-6 border-b-4 border-gray-300 justify-center">
                        <Tab className="px-8 py-3 text-xl font-semibold cursor-pointer focus:outline-none transition-all duration-300 hover:text-green-600"
                            selectedClassName="text-green-600 border-b-4 border-green-600">
                            Our Packages
                        </Tab>
                        <Tab className="px-8 py-3 text-xl font-semibold cursor-pointer focus:outline-none transition-all duration-300 hover:text-green-600"
                            selectedClassName="text-green-600 border-b-4 border-green-600">
                            Meet Our Tour Guides
                        </Tab>
                    </TabList>

                    {/* Our Packages Tab */}
                    <TabPanel>
                        <div className="grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-6 mt-6">
                            {randomData.map((packageItem, index) => (
                                <div key={index} className="card w-full bg-base-100 shadow-xl">
                                    <figure>
                                        <img
                                            src={packageItem.photo}
                                            alt={packageItem.tripTitle}
                                            className="h-52 w-full object-cover"
                                        />
                                    </figure>
                                    <div className="card-body">
                                        <h2 className="card-title text-lg font-bold">
                                            {packageItem.tripTitle}
                                        </h2>
                                        <p className="text-gray-500">{packageItem.tourType}</p>
                                        <p className="text-green-600 font-semibold text-lg">
                                            ${packageItem.price}
                                        </p>
                                        <div className="card-actions justify-end">
                                           <Link to={`/packageDetails/${packageItem._id}`}> <button className="btn btn-primary">View Details</button></Link>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </TabPanel>








                    {/* Meet Our Tour Guides Tab */}
                    <TabPanel>
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">

                            {guide.map((guide) => (
                                <div key={guide.id} className="bg-gray-50 p-8 rounded-lg shadow-md text-center hover:shadow-xl transition">
                                    <img src={guide.profileImage} alt={guide.name} className="w-24 h-24 rounded-full mx-auto" />
                                    <h3 className="text-2xl font-bold mt-4">{guide.name}</h3>
                                    <p className="text-gray-600 mt-2 text-lg">{guide.specialty}</p>
                                    <p className="text-gray-500 mt-2">{guide.description}</p>
                                    <button className="mt-6 bg-green-600 text-white px-6 py-3 text-lg rounded-lg shadow-md hover:bg-green-700 transition">
                                        <Link to={`/guideDetails/${guide.id}`}>Details</Link>
                                    </button>
                                </div>
                            ))}




                        </div>
                    </TabPanel>
                </Tabs>
            </div>
        </div>
    );
};

export default TourismTravelGuideSection;
