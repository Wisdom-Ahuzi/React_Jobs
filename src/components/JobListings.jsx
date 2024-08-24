import React from 'react'
import { useState, useEffect } from 'react'
import JobListing from './JobListing'
import { HashLoader } from 'react-spinners';
import Spinner from './Spinner';
import ViewAllJobs from './ViewAllJobs';

const JobListings = ({ isHome = false, jobsType = "jobs" }) => {


    const [jobs, setJobs] = useState([]);
    const [loading, setLoading] = useState(true)



    useEffect(() => {
        const fetchJobs = async () => {

            // if (isHome) {
            //     apiUrl = '/api/jobs?_limit= 4'
            // } else {

            // }
            const apiUrl = isHome ? `/api/${jobsType}?_limit= 4` : `/api/${jobsType}`
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
        <section className=" px-0 py-1 ">
            <div className="container-xl lg:container m-auto">

                {loading ? <Spinner loading={loading} /> : (

                    <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                        {
                            jobs.map((job) => (
                                <JobListing key={job.id} job={job} />
                            ))
                        }
                    </div>
                )}


            </div>
        </section>
    )
}

export default JobListings