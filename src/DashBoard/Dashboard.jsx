import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import { AuthContext } from '../Provider/Authprovider';
import { FaBars, FaTimes } from 'react-icons/fa'; // Import icons for mobile menu toggle

const Dashboard = () => {
    const { user } = useContext(AuthContext); // Get current logged-in user
    const [role, setRole] = useState(null);
    const [isSidebarOpen, setIsSidebarOpen] = useState(false); // State for mobile sidebar toggle

    const { isPending, error, data: users = [] } = useQuery({
        queryKey: ['allusers'],
        queryFn: async () => {
            const response = await axios.get('https://assignment-12-server-five-ebon.vercel.app/allusers');
            return response.data;
        }
    });

    useEffect(() => {
        if (users.length > 0 && user?.email) {
            const currentUser = users.find(u => u.email === user.email);
            setRole(currentUser?.role);
        }
    }, [users, user]);

    if (isPending) return 'Loading...';
    if (error) return `An error occurred: ${error.message}`;

    return (
        <div className="flex flex-col md:flex-row min-h-screen">
            
            {/* Mobile Sidebar Toggle Button */}
            <button 
                className="md:hidden p-4 text-2xl"
                onClick={() => setIsSidebarOpen(!isSidebarOpen)}
            >
                {isSidebarOpen ? <FaTimes /> : <FaBars />}
            </button>

            {/* Sidebar */}
            <div className={`w-64 min-h-screen bg-orange-400 rounded-xl p-4 
                ${isSidebarOpen ? 'block' : 'hidden'} md:block transition-all duration-300`}
            >
                <ul className="menu py-5 space-y-2">
                    {role === 'admin' && (
                        <>
                            <li><NavLink to='/dashboard/manage-profile'>Manage Profile</NavLink></li>
                            <li><NavLink to='/dashboard/my-assigned-tours'>My Assigned Tours</NavLink></li>
                            <li><NavLink to='/dashboard/add-stories'>Add Stories</NavLink></li>
                            <li><NavLink to='/dashboard/manage-stories'>Manage Stories</NavLink></li>
                        </>
                    )}

                    {role === 'tourist' && (
                        <>
                            <li><NavLink to='/dashboard/tourist/manage-profile'>Manage Profile</NavLink></li>
                            <li><NavLink to='/dashboard/tourist/my-bookings'>My Bookings</NavLink></li>
                            <li><NavLink to='/dashboard/tourist/manage-stories'>Manage Stories</NavLink></li>
                            <li><NavLink to='/dashboard/tourist/add-stories'>Add Stories</NavLink></li>
                            <li><NavLink to='/dashboard/tourist/JoinTourGuide'>Join As Tour Guide</NavLink></li>
                        </>
                    )}

                    {role !== 'admin' && role !== 'tourist' && (
                        <>
                            <li><NavLink to='/dashboard/manage-profile'>Manage Profile</NavLink></li>
                            <li><NavLink to='/dashboard/my-assign-tour'>My Assigned Tours</NavLink></li>
                            <li><NavLink to='/dashboard/add-stories'>Add Stories</NavLink></li>
                            <li><NavLink to='/dashboard/manage-stories'>Manage Stories</NavLink></li>
                        </>
                    )}

                    <div>
                        <button className="w-full mt-4 bg-white text-orange-500 font-bold py-2 rounded-lg">
                            <NavLink to='/'>Back to Home</NavLink>
                        </button>
                    </div>
                </ul>
            </div>

            {/* Main Content */}
            <div className="flex-1 p-6">
                <Outlet />
            </div>
        </div>
    );
};

export default Dashboard;
