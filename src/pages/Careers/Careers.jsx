import React from 'react'
import Nav from "../../components/Nav/index";
import Footer from "../../components/Footers/footer";
import Header from "../../components/Header/index";
import { JOB_LIST } from '../../utils/JobsList';
import JobCard from './JobCard';

const Careers = () => {
  return (
    <div className='w-full flex flex-col justify-start'>
        <Nav />
        <Header />
        <div className='w-full flex flex-col justify-center items-center'>
            <h1 className='text-2xl text-left w-11/12 md:w-10/12 mt-12 border-b-gray border-b-2 pl-0'>Available Jobs</h1>
            <div className='w-11/12 md:w-10/12 mt-12 mb-12'>
                <h2 className='text-lg border-b-gray'>Technical Facilitator</h2>
                <div className='w-full justify-start'>
                    {JOB_LIST.map((job, index) => {
                        return (
                            <JobCard job={job} />
                        )
                    })}
                    <JobCard />
                </div>
            </div>
        </div>
        <Footer />
    </div>
  )
}

export default Careers