import React, { useState, useEffect, useRef } from 'react';
import logo from '../assets/images/image.png';
import { NavLink } from 'react-router-dom';
import { FaUserAlt, FaHeart, FaChevronDown, FaSearch, FaMapMarkerAlt } from 'react-icons/fa';

const Navbar = () => {
    // State for dropdowns
    const [showJobsDropdown, setShowJobsDropdown] = useState(false);
    const [showProfileDropdown, setShowProfileDropdown] = useState(false);

    // Create refs for detecting clicks outside the dropdowns
    const jobsRef = useRef(null);
    const profileRef = useRef(null);

    // Toggle dropdowns
    const toggleJobsDropdown = () => {
        setShowJobsDropdown(!showJobsDropdown);
        setShowProfileDropdown(false); // Close the other dropdown if it's open
    };

    const toggleProfileDropdown = () => {
        setShowProfileDropdown(!showProfileDropdown);
        setShowJobsDropdown(false); // Close the other dropdown if it's open
    };

    // Effect to close dropdowns if clicked outside
    useEffect(() => {
        const handleClickOutside = (event) => {
            // Close dropdowns if the click is outside the referenced dropdowns
            if (jobsRef.current && !jobsRef.current.contains(event.target)) {
                setShowJobsDropdown(false);
            }
            if (profileRef.current && !profileRef.current.contains(event.target)) {
                setShowProfileDropdown(false);
            }
        };

        // Attach event listener on document
        document.addEventListener('mousedown', handleClickOutside);

        // Clean up event listener on component unmount
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    return (
        <nav className="w-full bg-gray-20 shadow-lg">
            {/* Top Section */}
            <div className="flex justify-between items-center py-4 px-8 h-20">
                {/* Left - Logo */}
                <NavLink className="flex flex-shrink-0 items-center mr-4" to="/">
                    <img src={logo} alt="Logo" className="w-auto h-20" />
                </NavLink>

                {/* Right - Links */}
                <div className="flex items-center space-x-6">
                    {/* For Recruiters */}
                    <NavLink className="flex items-center space-x-2" to="/add-job">
                        <FaUserAlt className="text-black-600" />
                        <span className="text-gray-800">For Recruiters</span>
                        <div className="border-l h-10 border-black mx-4"></div>
                    </NavLink>

                    {/* My Jobs */}
                    <div className="relative" ref={jobsRef}>
                        <div onClick={toggleJobsDropdown} className="flex items-center space-x-2 cursor-pointer">
                            <FaHeart className="text-gray-600" />
                            <span className="text-gray-800">My Jobs</span>
                            <FaChevronDown className="text-gray-600" />
                        </div>

                        {/* Dropdown Menu */}
                        {showJobsDropdown && (
                            <div className="absolute py-2 right-0 mt-3 w-56 bg-white border border-gray-200 shadow-lg rounded-md">
                                <ul>
                                    <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                                        <NavLink to="/jobs">All Jobs</NavLink>
                                    </li>
                                    <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                                        <NavLink to="/">Saved Jobs</NavLink>
                                    </li>
                                    <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                                        <NavLink to="/">Applied Jobs</NavLink>
                                    </li>
                                </ul>
                            </div>
                        )}
                    </div>

                    {/* Wisdom */}
                    <div className="relative" ref={profileRef}>
                        <div onClick={toggleProfileDropdown} className="flex items-center space-x-2 cursor-pointer">
                            <FaUserAlt className="text-gray-600" />
                            <span className="text-gray-800">Wisdom</span>
                            <FaChevronDown className="text-gray-600" />
                        </div>

                        {/* Dropdown Menu */}
                        {showProfileDropdown && (
                            <div className="absolute py-2 right-0 mt-3 w-56 bg-white border border-gray-200 shadow-lg rounded-md">
                                <ul>
                                    <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                                        <NavLink to="/myprofile">My Profile</NavLink>
                                    </li>
                                    <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                                        <NavLink to="/">Sign Out</NavLink>
                                    </li>
                                </ul>
                            </div>
                        )}
                    </div>
                </div>
            </div>

            {/* Bottom Section */}
            <div className="bg-gray-50 py-4">
                <div className="max-w-4xl mx-auto flex justify-center items-center space-x-4">
                    {/* First Search Box */}
                    <div className="relative">
                        <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                        <input
                            type="text"
                            placeholder="Job title"
                            className="pl-10 pr-4 py-2 w-80 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>

                    {/* Second Search Box */}
                    <div className="relative">
                        <FaMapMarkerAlt className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                        <input
                            type="text"
                            placeholder="City or postcode"
                            className="pl-10 pr-4 py-2 w-80 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>

                    {/* Search Button */}
                    <button className="px-12 py-2 bg-blue-600 w-auto text-white rounded-full hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500">
                        Search
                    </button>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
