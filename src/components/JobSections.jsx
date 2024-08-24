import React, { useState } from 'react'
import JobListings from '../components/JobListings'
import ViewAllJobs from '../components/ViewAllJobs'
import { Heart, CheckSquare, Briefcase } from '@phosphor-icons/react'

const JobSections = ({ title, subTitle, status, type, jobType }) => {


    return (
        <div className="w-100  flex flex-col items-start mt-10 space-y-10 border-b-2 pb-5">
            {/* First Section */}
            <div className="w-full flex flex-row items-start justify-items-center centerspace-y-4">
                {/* Icon inside colored div */}
                <div className="bg-blue-50 p-4 rounded-md mr-2">
                    <Briefcase size={44} color="#5069a5" weight="fill" />
                </div>

                {/* Text below the icon */}
                <div className="text-start">
                    <h2 className="text-2xl font-semibold">{title}</h2>
                    <p className="text-gray-600">{subTitle}</p>
                </div>
            </div>
            <JobListings isHome={true} jobsType={jobType} />
            <ViewAllJobs status={status} type={type} />
        </div>
    )
}

export default JobSections