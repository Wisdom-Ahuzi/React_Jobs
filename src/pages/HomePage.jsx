import React from 'react'



import Footer from '../components/Footer'
import JobSections from '../components/JobSections'

// <Heart className='inline' color="#5069a5" weight="fill" /> 

const Home = () => {
    return (
        <div className='w-4/5 mx-auto flex flex-col items-start mt-10 space-y-10 '>
            {/* Greeting Section */}
            <div className="text-start">
                <h2 className="text-3xl font-semibold mb-2">Hi Wisdom</h2>
                <span className="text-lg text-gray-500">Here is your job search at a glance.</span>
            </div>


            {/* Newly recommended jobs */}
            <JobSections title="Newly recommended jobs" subTitle="These jobs perfectly match your searches and profile " status="view new jobs" type="new-jobs" />


            {/* Saved Jobs */}

            <JobSections title="Saved jobs" subTitle="Streamline your job search by jobs you want to apply for." status="view saved jobs" type="saved-jobs" />


            {/* Applied Jobs */}

            <JobSections title="Applied jobs" subTitle="These are the jobs you've applied for" status="view applied jobs" type="applied-jobs" />


            <Footer />
        </div>
    );
};

export default Home;
