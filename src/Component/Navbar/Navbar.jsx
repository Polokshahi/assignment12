import React, { useContext, useState } from "react";
import { NavLink } from "react-router-dom";
import { AuthContext } from "../../Provider/Authprovider";
import Swal from "sweetalert2";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const handleSignOut = () => {
    logOut();
    Swal.fire({
      icon: "success",
      title: "Logout Successful",
      showConfirmButton: false,
      timer: 1500,
    });
  };

  return (
    <div className="navbar bg-[#f8fafb] shadow-md">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
            <li><NavLink to="/">Home</NavLink></li>
            <li><NavLink to="/packagedetails">Package Details</NavLink></li>
            <li><NavLink to="/community">Community</NavLink></li>
            <li><NavLink to="/about">About Us</NavLink></li>
            <li><NavLink to="/trips">Trips</NavLink></li>
            {!user && <li><NavLink to="/login">Login</NavLink></li>}
            {!user && <li><NavLink to="/register">Register</NavLink></li>}
          </ul>
        </div>
        <span className="text-3xl">📍</span> 
        <h1 className="font-extrabold text-green-500">Tourist Travel</h1>
      </div>

      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li><NavLink to="/">Home</NavLink></li>
          <li><NavLink to="/packagedetails">Package Details</NavLink></li>
          <li><NavLink to="/community">Community</NavLink></li>
          <li><NavLink to="/about">About Us</NavLink></li>
          <li><NavLink to="/trips">Trips</NavLink></li>
        </ul>
      </div>

      <div className="navbar-end">
        {user ? (
          <div className="relative">
            {/* Profile Picture with Tooltip */}
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost btn-circle avatar tooltip tooltip-left"
              data-tip={user?.displayName || "User"}
              onClick={() => setIsDropdownOpen(!isDropdownOpen)}
            >
              <div className="ring-primary ring-offset-base-100 w-12 rounded-full ring ring-offset-2">
                <img
                  alt="User Avatar"
                  src={user?.photoURL || "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRKKOdmJz8Z2pDtYgFgR2u9spABvNNPKYYtGw&s"}
                />
              </div>
            </div>

            {/* Dropdown Menu */}
            {isDropdownOpen && (
              <ul className="absolute right-0 mt-3 w-48 bg-white shadow-lg rounded-lg z-50">
                <li>
                  <NavLink to="/dashboard" className="block px-4 py-2 text-gray-800 hover:bg-gray-200">
                    Dashboard
                  </NavLink>
                </li>
                <li>
                  <button
                    onClick={handleSignOut}
                    className="w-full text-left px-4 py-2 text-red-500 hover:bg-gray-200"
                  >
                    Logout
                  </button>
                </li>
              </ul>
            )}
          </div>
        ) : (
          <>
            <NavLink to="/login" className="btn btn-outline btn-success mx-2">Login</NavLink>
            <NavLink to="/register" className="btn btn-success">Register</NavLink>
          </>
        )}
      </div>
    </div>
  );
};

export default Navbar;
