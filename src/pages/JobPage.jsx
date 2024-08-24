
import React from 'react'
import { useParams, useLoaderData, Link, useNavigate } from 'react-router-dom'
import { FaBriefcase, FaMapMarkerAlt, FaClock, FaDollarSign, FaHeart } from 'react-icons/fa';
import { toast } from 'react-toastify';
import HomeCards from '../components/HomeCards';

const JobPage = ({ deleteJob }) => {

    // const navigate = useNavigate()

    // const { id } = useParams();
    const job = useLoaderData();


    return (
        <div className="w-full  py-16 bg-gray-100 ">
            <div className="mx-auto max-w-6xl mb-10 " style={{ paddingLeft: "10%", paddingRight: "10%" }}>
                {/* First Section */}
                <div className="mb-12">
                    {/* First Part */}
                    <div className="mb-8">
                        {/* Three Vertically Positioned Divs */}
                        <div className="mb-4 flex items-center">
                            <FaBriefcase className="text-gray-600 mr-4" size={32} />
                            <h2 className="text-2xl font-semibold text-gray-800">{job.title}</h2>
                        </div>

                        {/* Five Different Elements with Icons */}
                        <div className="flex space-x-6  mb-2">
                            <div className="flex items-center">
                                <FaMapMarkerAlt className="text-gray-600 mr-2" />
                                <span className="text-gray-600">{job.company.name}</span>
                            </div>
                            <div className="flex items-center">
                                <FaClock className="text-gray-600 mr-2" />
                                <span className="text-gray-600">{job.location}</span>
                            </div>
                            <div className="flex items-center">
                                <FaDollarSign className="text-gray-600 mr-2" />
                                <span className="text-gray-600">{job.salary}</span>
                            </div>
                            <div className="flex items-center">
                                <FaBriefcase className="text-gray-600 mr-2" />
                                <span className="text-gray-600">{job.type}</span>
                            </div>
                            <div className="flex items-center">
                                <FaClock className="text-gray-600 mr-2" />
                                <span className="text-gray-600">Posted 3 days ago</span>
                            </div>
                        </div>

                        <div className="flex space-x-6  mb-8">
                            <div className="flex items-center">
                                <FaMapMarkerAlt className="text-gray-600 mr-2" />
                                <span className="text-gray-600">{job.company.contactEmail}</span>
                            </div>
                            <div className="flex items-center">
                                <FaClock className="text-gray-600 mr-2" />
                                <span className="text-gray-600">{job.company.contactPhone}</span>
                            </div>

                        </div>

                        {/* Two Buttons */}
                        <div className="flex space-x-4">
                            <button className="px-12 w-2/5 py-3  bg-blue-600 text-white rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500">
                                Apply
                            </button>
                            <button className="px-6 py-3 w-1/6 bg-blue-300 text-gray-800 rounded-md hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-300 flex items-center justify-center">
                                <FaHeart className="mr-2 text-red-500" />
                                Save
                            </button>
                        </div>
                    </div>

                    <div>
                        <p className="text-gray-700 leading-relaxed mb-8">
                            {job.description}
                        </p>
                    </div>
                </div>

                {/* Second Section */}
                <div className="text-center">
                    <button className="px-20 py-3 w-2/4 bg-blue-500 text-white rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500">
                        Apply
                    </button>
                </div>
            </div>


            <div className="mx-auto max-w-6xl  w-full items-center " >
                <h2 className=' text-start text-2xl font-semibold text-gray-800  mb-9'>These jobs were popular with other job seekers</h2>

                <HomeCards />
            </div>
        </div>
    )

}


const jobLoader = async ({ params }) => {
    const res = await fetch(`/api/jobs/${params.id}`);
    const data = await res.json()
    return data;
}

export { JobPage as default, jobLoader }

// const handleDeleteJob = (jobId) => {
//     const confirm = window.confirm("Are you sure you want to delete this listing?")

//     if (!confirm) return;

//     deleteJob(jobId)

//     toast.success("Job deleted successfully")

//     navigate("/jobs")
// }


{/* <aside>
    <div className="bg-white p-6 rounded-lg shadow-md">
        <h3 className="text-xl font-bold mb-6">Company Info</h3>

        <h2 className="text-2xl">{job.company.name}</h2>

        <p className="my-2">
            {job.company.description}                                </p>

        <hr className="my-4" />

        <h3 className="text-xl">Contact Email:</h3>

        <p className="my-2 bg-indigo-100 p-2 font-bold">
            {job.company.contactEmail}
        </p>

        <h3 className="text-xl">Contact Phone:</h3>

        <p className="my-2 bg-indigo-100 p-2 font-bold">{job.company.contactPhone}</p>
    </div>

    <div className="bg-white p-6 rounded-lg shadow-md mt-6">
        <h3 className="text-xl font-bold mb-6">Manage Job</h3>
        <Link
            to={`/edit-job/${job.id}`}
            className="bg-indigo-500 hover:bg-indigo-600 text-white text-center font-bold py-2 px-4 rounded-full w-full focus:outline-none focus:shadow-outline mt-4 block"
        >Edit Job</Link
        >
        <button
            className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded-full w-full focus:outline-none focus:shadow-outline mt-4 block"
            onClick={() => handleDeleteJob(job.id)}
        >
            Delete Job
        </button>
    </div>
</aside> */}


// Feting Data Using UseEffect anf Use Params

// import React, { useEffect, useState } from 'react'
// import { useParams } from 'react-router-dom';
// import Spinner from '../components/Spinner';



// const JobPage = () => {

//     const { id } = useParams();

//     const [job, setJob] = useState(null);
//     const [loading, setLoading] = useState(true)

//     useEffect(() => {
//         const fetchJob = async () => {
//             try {
//                 const res = await fetch(`/api/jobs/${id}`)
//                 const data = await res.json();
//                 setJob(data)

//             } catch (error) {
//                 console.log("Error fetching data", error);

//             } finally {
//                 setLoading(false)
//             }
//         }

//         fetchJob();
//     }, [])

//     return (
//         loading ? Spinner : <h1>{job.title}</h1>
//     )
// }


// export default JobPage





