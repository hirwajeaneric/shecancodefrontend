import React, { useEffect, useState } from 'react'
import Nav from "../../components/Nav/index";
import Footer from "../../components/Footers/footer";
import Header from '../../components/Header';
import { Link, useParams } from 'react-router-dom';
import { generateJobs } from '../../utils/JobsList';

const CareersDetails = () => {
  const [job, setJob] = useState({});
  const [rolesAndResponsibilities, setRolesAndResponsibilities] = useState({});
  const [otherResponsibilities, setOtherResponsibilities] = useState({});
  const [experiences, setExperiences] = useState({});
  const [otherQualities, setOtherQualities] = useState([]);
  const params = useParams();

  useEffect(() => {
    var jobs = generateJobs();
    var foundJob = jobs.find(job => job.code === params.code);

    setJob(foundJob);
    setRolesAndResponsibilities(foundJob.rolesAndResponsibilities);
    setOtherResponsibilities(foundJob.otherResponsibilities);
    setExperiences(foundJob.experience);
    setOtherQualities(foundJob.otherQualities);
  },[params.code])

  return (
    <div className='w-full flex flex-col justify-start'>
      <Nav />
      <Header />
      <div className='w-full flex flex-col justify-center items-center pt-6 md:pt-12 mb-10'>
        <div className='w-11/12 md:w-10/12 mb-6 md:mb-12 leading-relaxed'>
          <Link to='/careers' className='text-blue-600'>Back to All Jobs</Link>
          <p className='text-gray-400 my-4'>Posted on {new Date(job.postTime).toDateString()}</p>
          <h1 className='text-4xl text-left p-0 font-bold my-3'>{job.title}</h1>
          <h2 className='mb-4'>{job.location}</h2>
          <hr />
          <p className='my-7'>{job.organizationSummary}</p>
          
          <h2 className='text-xl font-bold mb-3'>About the Job</h2>
          <p className='mb-7'>{job.aboutTheJob}</p>
          


          {/* Roles and Responsibilities  */}
          <h2 className='text-xl font-bold mb-3'>Roles and Responsibility</h2>
          {rolesAndResponsibilities.introduction && <p className='mt-3'>{rolesAndResponsibilities.introduction}</p>}
          {rolesAndResponsibilities.list && 
            <ul className='list-disc mb-4 mt-3 pl-9 pb-6 pt-2'>
              {rolesAndResponsibilities.list.map((role, index) => (
                <li key={index}>{role}</li>
              ))}
            </ul>
          }
          


          {/* Other Responsibilities  */}
          {otherResponsibilities && 
            <h2 className='text-xl font-bold mb-3'>Other Responsibilities</h2>
          }
          {otherResponsibilities.introduction && <p className='mt-3'>{otherResponsibilities.introduction}</p>}
          {otherResponsibilities.list && 
            <ul className='list-disc mb-4 mt-3 pl-9 pb-6 pt-2'>
              {otherResponsibilities.list.map((responsibility, index) => (
                <li key={index}>{responsibility}</li>
              ))}
            </ul>
          }
          
          {/* Experience  */}
          <h2 className='text-xl font-bold'>Experience</h2>
          {experiences.introduction && <p className='mt-3'>{experiences.introduction}</p>}
          {experiences.list && 
            <ul className='list-disc mb-4 mt-3 pl-9 pb-6 pt-2'>
              {experiences.list.map((experience, index) => (
                <li key={index}>{experience}</li>
              ))}
            </ul>
          }



          
          {/* Other qualities  */}
          {otherQualities && <h2 className='text-xl font-bold'>Other Qualities</h2>}
          {otherQualities && 
            <ul className='list-disc mb-4 mt-3 pl-9 pb-6 pt-2'>
              {otherQualities.map((quality, index) => (
                <li key={index}>{quality}</li>
              ))}
            </ul>
          }

          <hr />
          <p className='text-gray-400 my-4'>Posted since {job.postedSince}</p>
          <p className='text-gray-400 my-4 '>Application ends on {job.deadline}</p>

          <div className='flex w-full justify-center items-center'>
            <a href={`/job/${params.code}/apply`} className='mob-btn'>Apply now</a>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default CareersDetails