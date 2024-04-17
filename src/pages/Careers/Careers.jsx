import React, { useEffect, useState } from 'react'
import Nav from "../../components/Nav/index";
import Footer from "../../components/Footers/footer";
import Header from "../../components/Header/index";
import { generateJobs } from '../../utils/JobsList';
import JobCard from './JobCard';

const Careers = () => {
    const [jobs, setJobs] = useState([]);
    
    useEffect(() => {
        setJobs(generateJobs());
    }, []);

    return (
        <div className='w-full flex flex-col justify-start'>
            <Nav />
            <Header />
            <div className='w-full flex flex-col justify-center items-center mb-10'>
                <h1 className='text-2xl text-left w-11/12 md:w-10/12 mt-6 md:mt-12 border-b-gray border-b-2 pl-0'>Available Jobs</h1>
                <div className='w-11/12 md:w-10/12 mt-2 md:mt-2 mb-6 md:mb-12'>
                    <div className='w-full justify-start'>
                        {jobs.map((job, index) => {
                            return (
                                <JobCard key={index} job={job} />
                            )
                        })}
                        <p className='text-gray-500 mb-20'>No available jobs</p>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default Careers