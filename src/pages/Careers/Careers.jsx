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
        console.log(generateJobs());
    }, []);

    return (
        <div className='w-full flex flex-col justify-start'>
            <Nav />
            <Header />
            <div className='w-full flex flex-col justify-center items-center mb-10'>
                <h1 className='text-2xl text-left w-11/12 md:w-10/12 mt-12 border-b-gray border-b-2 pl-0'>Available Jobs</h1>
                <div className='w-11/12 md:w-10/12 mt-12 mb-12'>
                    <h2 className='text-lg border-b-gray'>Technical Facilitator</h2>
                    <div className='w-full justify-start'>
                        {jobs.map((job, index) => {
                            return (
                                <JobCard key={index} job={job} />
                            )
                        })}
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default Careers