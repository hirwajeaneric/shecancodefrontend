import React, { useEffect, useState } from 'react'
import Nav from "../../components/Nav/index";
import Footer from "../../components/Footers/footer";
import Header from '../../components/Header';
import { Link, useParams } from 'react-router-dom';
import { generateJobs } from '../../utils/JobsList';

const CareersDetails = () => {
  const [job, setJob] = useState({});
  const [rolesAndResponsibilities, setRolesAndResponsibilities] = useState({ introduction: '', list: [] });
  const [otherResponsibilities, setOtherResponsibilities] = useState({ introduction: '', list: [] });
  const [experiences, setExperiences] = useState({ introduction: '', list: [] });
  const [benefits, setBenefits] = useState({ introduction: '', list: [] });
  const [preferredSkills, setPreferredSkills] = useState({ introduction: '', list: [] });
  const [otherQualities, setOtherQualities] = useState([]);
  const params = useParams();

  useEffect(() => {
    var jobs = generateJobs();
    var foundJob = jobs.find(job => job.code === params.code);

    setJob(foundJob);
    setRolesAndResponsibilities(foundJob.rolesAndResponsibilities);
    setOtherResponsibilities(foundJob.otherResponsibilities);
    setExperiences(foundJob.experience);
    setBenefits(foundJob.benefits);
    setPreferredSkills(foundJob.preferredSkills);
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
          <p className='mb-4 text-blue-950'>{job.summaryOfResponsibilities}</p>
          <h2 className='mb-4 font-bold'>{job.location}</h2>
          <hr />
          <p className='my-7'>{job.organizationSummary}</p>


          {job.aboutTheJob && 
            <>
              <h2 className='text-xl font-bold mb-3'>About the Job</h2>
              <p className='mb-7'>{job.aboutTheJob}</p>
            </>
          }
          

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
          {otherResponsibilities.list.length !== 0 && 
            <h2 className='text-xl font-bold mb-3'>Other Responsibilities</h2>
          }
          {otherResponsibilities.introduction && <p className='mt-3'>{otherResponsibilities.introduction}</p>}
          {otherResponsibilities.list.length !== 0 && 
            <ul className='list-disc mb-4 mt-3 pl-9 pb-6 pt-2'>
              {otherResponsibilities.list.map((responsibility, index) => (
                <li key={index}>{responsibility}</li>
              ))}
            </ul>
          }
          

          {/* Experience  */}
          {experiences.list && <h2 className='text-xl font-bold'>Experience</h2>}
          {experiences.introduction && <p className='mt-3'>{experiences.introduction}</p>}
          {experiences.list && 
            <ul className='list-disc mb-4 mt-3 pl-9 pb-6 pt-2'>
              {experiences.list.map((experience, index) => (
                <li key={index}>{experience}</li>
              ))}
            </ul>
          }


          {/* Preferred Skills  */}
          {preferredSkills.list && <h2 className='text-xl font-bold'>Preferred Skills and Qualities</h2>}
          {preferredSkills.introduction && <p className='mt-3'>{preferredSkills.introduction}</p>}
          {preferredSkills.list && 
            <ul className='list-disc mb-4 mt-3 pl-9 pb-6 pt-2'>
              {preferredSkills.list.map((skill, index) => (
                <li key={index}>{skill}</li>
              ))}
            </ul>
          }

          
          {/* Other qualities  */}
          {otherQualities.list && <h2 className='text-xl font-bold'>Other Qualities</h2>}
          {otherQualities.list && 
            <ul className='list-disc mb-4 mt-3 pl-9 pb-6 pt-2'>
              {otherQualities.map((quality, index) => (
                <li key={index}>{quality}</li>
              ))}
            </ul>
          }

          {/* Benefits  */}
          {benefits.list && <h2 className='text-xl font-bold'>Benefits</h2>}
          {benefits.list && 
            <ul className='list-disc mb-4 mt-3 pl-9 pb-6 pt-2'>
              {benefits.list.map((benefit, index) => (
                <li key={index}>{benefit}</li>
              ))}
            </ul>
          }

          <p style={{ marginBottom: '40px'}}>If you're ready to take the next step in your marketing career and make a difference with Igire Rwanda Organization, apply now by sending your resume and cover letter to <strong>education@igirerwanda.org</strong> Join us in our mission to create positive change through innovative marketing strategies!</p>

          <hr />
          <p className='text-gray-400 my-4'>Posted since {job.postedSince}</p>
          <p className='text-gray-400 my-4 '>Application ends on {job.deadline}</p>

          {/* <div className='flex w-full justify-center items-center'>
            <a href={`/job/${params.code}/apply`} className='mob-btn'>Apply now</a>
          </div> */}
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default CareersDetails