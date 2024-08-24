import React from 'react'
import JobListings from '../components/JobListings'
const JobsPage = () => {
    return (
        <section className='px-4 py-6'>
            <h2 className="text-3xl font-bold text-gray-800 text-center mt-6 mb-4">Your Job Offers</h2>
            <p className="text-lg text-gray-600 text-center mb-12">
                Joinrs only shows you job offers where your university career in Computer Science is required by companies.
            </p>
            <JobListings isHome={false} jobsType="jobs" />
        </section>
    )
}

export default JobsPage


