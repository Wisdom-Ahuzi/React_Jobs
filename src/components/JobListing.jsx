import React, { useState } from 'react'
import { FaMapMarker, FaBriefcase, FaLocationArrow, FaMoneyBill } from 'react-icons/fa'
import { CiShare1 } from "react-icons/ci";
import { Heart, Share } from '@phosphor-icons/react';

import { Link } from 'react-router-dom';


const JobListing = ({ job }) => {



    return (
        <div className="bg-white rounded-xl border-solid border-2 relative" >
            <div className="p-4">
                <div className="mb-4">
                    <h3 className="text-l font-bold">{job.title.length > 50 ? (job.title.substring(0, 50) + "...") : (job.title.substring(0, 50))}</h3>
                </div>

                <div className="mb-5 flex items-center">
                    <FaBriefcase className='mr-1' />
                    <span>{job.company.name}</span>
                </div>

                <div className="mb-5 flex items-center">
                    <FaLocationArrow className='mr-1' />
                    <span>{job.location}</span>
                </div>


                <div className="mb-5 flex items-center">
                    <FaMoneyBill className='mr-1' />
                    <span>{job.salary}</span>
                </div>


                <div className="border border-gray-100 mb-5"></div>

                <div className="flex flex-col lg:flex-row justify-between ">
                    <span className="cursor-pointer" >
                        <Heart size={25} />

                    </span>
                    <Link to={`/jobs/${job.id}`}>
                        <Share size={25} />
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default JobListing