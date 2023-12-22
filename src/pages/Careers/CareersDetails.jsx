import React, { useEffect, useState } from 'react'
import Nav from "../../components/Nav/index";
import Footer from "../../components/Footers/footer";
import Header from '../../components/Header';
import { Link, useParams } from 'react-router-dom';
import { generateJobs } from '../../utils/JobsList';

const CareersDetails = () => {
  const [job, setJob] = useState({});
  const [roles, setRoles] = useState([]);
  const params = useParams();

  useEffect(() => {
    var jobs = generateJobs();
    setJob(jobs.find(job => job.code === params.code));
    setRoles(jobs.find(role => role.code === params.code).rolesAndResponsibilities.list);
  },[params.code])

  return (
    <div className='w-full flex flex-col justify-start'>
      <Nav />
      <Header />
      <div className='w-full flex flex-col justify-center items-center pt-6 md:pt-12 mb-10'>
        <div className='w-11/12 md:w-10/12 mb-6 md:mb-12'>
          <Link to='/careers' className='text-blue-600'>Back to All Jobs</Link>
          <h1 className='text-4xl text-left p-0 font-bold'>{job.title}</h1>
          <h2>{job.location}</h2>
          <hr />
          <p>{job.organizationSummary}</p>
          <h2 className='text-xl font-bold'>About the Job</h2>
          <p>{job.aboutTheJob}</p>
          <h2 className='text-xl font-bold'>Roles and Responsibility</h2>
          <ul>
            {roles && roles.map((role, index) => (
              <li key={index}>{role}</li>
            ))}
          </ul>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default CareersDetails