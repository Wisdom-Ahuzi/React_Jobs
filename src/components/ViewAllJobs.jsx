import { Share } from '@phosphor-icons/react'
import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const ViewAllJobs = ({ status, type }) => {


    return (
        <section className="m-auto px-6 flex rounded-xl flex-row items-center bg-cyan-900 text-white hover:bg-gray-700 cursor-pointer">
            <Link
                to={`/${type}`}
                className="text-center py-4 px-6 "
            >{status}</Link
            >

            <Share />
        </section>
    )
}

export default ViewAllJobs