import { Link } from 'react-router-dom'
import React from 'react'
import { useState, useEffect } from 'react';
import { FaBuilding, FaMapMarkerAlt, FaDollarSign, FaHeart, FaBookmark } from 'react-icons/fa';

import Card from './Card'
import { Briefcase, Heart } from '@phosphor-icons/react';

const HomeCards = ({ }) => {

    const [jobs, setJobs] = useState([]);
    const [loading, setLoading] = useState(true)



    useEffect(() => {
        const fetchJobs = async () => {

            // if (isHome) {
            //     apiUrl = '/api/jobs?_limit= 4'
            // } else {

            // }
            const apiUrl = `/api/jobs?_limit= 4`
            try {
                const res = await fetch(apiUrl);
                const data = await res.json();
                setJobs(data)
            } catch (error) {
                console.log("Error Fetching data", error);

            } finally {
                setLoading(false)
            }

        }
        fetchJobs();
    }, [])


    return (
        jobs.map((job) => (
            <div key={job.id} className="bg-white shadow-lg rounded-lg p-6 flex mb-7">

                <div className="flex-1 ">
                    {/* Job Title */}

                    <h2 className="text-2xl font-bold text-gray-800 mb-4">{job.title}</h2>

                    {/* Company Name, Location, Salary */}
                    <div className="flex justify-start items-center mb-4">
                        <div className="flex items-center space-x-2 pr-5">
                            <FaBuilding className="text-gray-600" />
                            <span className="text-gray-700">{job.company.name}</span>
                        </div>
                        <div className="flex items-center space-x-2  pr-5">
                            <FaMapMarkerAlt className="text-gray-600" />
                            <span className="text-gray-700">{job.location}</span>
                        </div>
                        <div className="flex items-center space-x-2  pr-5">
                            <FaDollarSign className="text-gray-600" />
                            <span className="text-gray-700">{job.salary}</span>
                        </div>
                    </div>

                    {/* Date */}
                    <p className="text-gray-500">{job.type}</p>
                </div>
                <div className="flex flex-col items-center space-y-4">
                    <Briefcase size={44} />
                    <Heart size={17} />
                </div>
            </div>
        ))


    );
};




export default HomeCards