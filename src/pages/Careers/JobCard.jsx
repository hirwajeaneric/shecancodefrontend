import React from 'react'
import { Link } from 'react-router-dom'

const JobCard = ({job}) => {
    return (
        <Link to={`/job/${job.code}`} className='flex justify-between shadow-md items-center p-6 hover:bg-slate-100 mt-7'>
            <div className=''>
                <h3 className='text-lg text-blue-500 pt-0'>{job.title}</h3>
                <span className='text-sm text-gray-400'>{job.postedSince}</span>
            </div>
            <p>{job.location}</p>
        </Link>
    )
}

export default JobCard