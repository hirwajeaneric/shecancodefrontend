import React, { useEffect, useState } from 'react';
import Nav from "../../components/Nav/index";
import Header from "../../components/Header/index";
import Footer from '../../components/Footers/footer';
import '../Courses page/formInputs.css';
import { generateJobs } from '../../utils/JobsList';
import { useParams } from 'react-router-dom';
import { storage } from "../../configs/firebase";
import { ref, uploadBytes } from "firebase/storage";
import { v4 } from "uuid";
import axios from 'axios';

const ApplcationPage = () => {

    const [job, setJob] = useState({});
    const [techStack, setTechStack] = useState([]);
    const [processing, setProcessing] = useState("");
    const [formInputs, setFormInputs] = useState({
        "First name": '',
        "Last name": '',
        "Email": '',
        "Phone": '',
        "Age": 0,
        "Residence": '',
        "Tech stack": '',
        "GitHub account": '',
        "Years of experience": ''
    });

    const [errors, setErrors] = useState({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        age: '',
        residence: '',
        yearsOfExperience: '',
        whatDidYouStudy: '',
        techstack: '',
        gitHubAccount: '',
        doYouHaveAComputer: '',
        whyDoYouWishToJoinThisProgram: '',
        howWillThisProgramHelpYou: '',
        interviewLocation: '',
        submit: ''
    });
    const [responseMessage, setResponseMessage] = useState("");

    const resetFormInputs = () => {
        setFormInputs({
            "First name": '',
            "Last name": '',
            "Email": '',
            "Phone": '',
            "Age": 0,
            "Residence": '',
            "Tech stack": '',
            "GitHub account": '',
            "Years of experience": '',
        });
    }

    const [cv, setCv] = useState("");

    const handleFile = (e) => {
        setCv(e.target.files[0]);
    };

    const uploadCv =async () => {
        if (cv === null) return;
        const fileRef = ref(storage, `cvs/${v4()+" - "+cv.name}`);

        await uploadBytes(fileRef, cv)
        .then(() => {
            console.log("File uploaded!!!");
        })
        .catch(() => {
            alert("Error uploading file!")
        })
    };

    const params = useParams();

    useEffect(() => {
      var jobs = generateJobs();
      var foundJob = jobs.find(job => job.code === params.code);
      setJob(foundJob);
    },[params.code])

    const handleInput = ({ currentTarget: target }) => {
        setFormInputs({ ...formInputs, [target.name]: target.value })
    }

    const handleTechStack = ({ currentTarget: target }) => {
        const isChecked = target.checked;
        const value = target.value;
    
        if (isChecked) {
            setTechStack(prevStack => [...prevStack, value]); // Add the value to the techStack array
        } else {
            setTechStack(prevStack => prevStack.filter(item => item !== value)); // Remove the value from techStack if unchecked
        }
    }

    const formSubmission = (e) => {
        e.preventDefault();
        
        const URL = 'https://she-can-code-job-application-default-rtdb.firebaseio.com/applicants.json';

        setProcessing("Processing...");

        uploadCv();

        formInputs["Tech stack"] = techStack.join(',');        

        axios.post(URL, formInputs)
        .then(
            response => {
                if (response.status === 201 || response.status === 200) {
                    setProcessing("");
                    setResponseMessage("Successfully submitted");
                    resetFormInputs();
                    setTimeout(() => {
                        window.location.reload();
                    }, 3000)
                }
            }
        )
        .catch(error => {
            setErrors({ submit: 'Failed to submit!'});
            setProcessing("");
            console.error('Error!', error.message);
        })
    }

    return (
        <div>
            <Nav />
            <Header />
            <div className='w-full flex flex-wrap flex-shrink-0 justify-start align-top bg-slate-500 py-10 px-4 sm:px-24'>
                <div className='w-full sm:w-1/3 flex flex-col flex-shrink justify-start gap-4 p-5 sm:p-10 bg-blue-900'>
                    <h1 className='text-white font-black text-left p-0 m-0 text-3xl'>{job.title}</h1>
                    <p className='text-white text-base'>{job.location}</p>
                </div>
                <form onSubmit={formSubmission} className='form w-full sm:w-8/12 flex flex-col flex-shrink justify-start align-top bg-white p-4 sm:p-10'>
                    <p className='font-bold'>1. Enter Your Personal Details</p>
                    <div className='flex w-full gap-0 sm:gap-3 flex-col sm:flex-row'>
                        <div className='form-input'>
                            <label className=''>First name*</label>
                            <input type='text' required minLength={4} name='First name' onChange={handleInput} value={formInputs["First name"] || ''} placeholder='First name' />
                            {errors.firstName && <span className='error-message'>{errors.firstName}</span>}
                        </div>
                        <div className='form-input'>
                            <label className=''>Last name*</label>
                            <input type='text' required minLength={4} name='Last name' onChange={handleInput} value={formInputs["Last name"] || ''} placeholder='Last name' />
                            {errors.lastName && <span className='error-message'>{errors.lastName}</span>}
                        </div>
                    </div>
                    <div className='flex w-full gap-3 flex-col sm:flex-row'>
                        <div className='form-input'>
                            <label className=''>Email address*</label>
                            <input type='email' required minLength={8} name='Email' onChange={handleInput} value={formInputs.Email || ''} placeholder='Email address' />
                            {errors.email && <span className='error-message'>{errors.email}</span>}
                        </div>
                    </div>
                    <div className='flex w-full gap-3 flex-col sm:flex-row'>
                        <div className='form-input'>
                            <label className=''>Phone number*</label>
                            <input type='phone' required minLength={10} maxLength={10} max={10} name='Phone' onChange={handleInput} value={formInputs.Phone || ''} placeholder='Phone number' />
                            {errors.phone && <span className='error-message'>{errors.phone}</span>}
                        </div>
                        <div className='form-input'>
                            <label className=''>Age*</label>
                            <input type='number' required min={16} name='Age' onChange={handleInput} value={formInputs.Age || ''} placeholder='Age' />
                            {errors.age && <span className='error-message'>{errors.age}</span>}
                        </div>
                    </div>
                    <div className='form-input'>
                        <label className='text-left'>Current Residence*</label>
                        <small>Provide district and sector. Example: Gasabo, Kacyiru</small>
                        <input type='text' min={5} name='Residence' onChange={handleInput} value={formInputs["Residence"] || ''} placeholder='Your current residence    ' />
                        {errors.residence && <span className='error-message'>{errors.residence}</span>}
                    </div>
                    <p className='font-bold mt-6'>2. Work Experience</p>
                    <div className='flex w-full gap-3 flex-col sm:flex-row'>
                        <div className='form-input'>
                            <label className='text-left'>Tech stack*</label>
                            <small>Choose all that apply</small>
                            <div>
                                <input type='checkbox' name='Tech stack' onChange={handleTechStack} value={"HTML and CSS"} />
                                &nbsp;HTML and CSS
                            </div>
                            <div>
                                <input type='checkbox' name='Tech stack' onChange={handleTechStack} value={"PHP"} />
                                &nbsp;PHP
                            </div>
                            <div>
                                <input type='checkbox' name='Tech stack' onChange={handleTechStack} value={"JavaScript"} />
                                &nbsp;JavaScript
                            </div>
                            <div>
                                <input type='checkbox' name='Tech stack' onChange={handleTechStack} value={"ReactJS"} />
                                &nbsp;ReactJS
                            </div>
                            <div>
                                <input type='checkbox' name='Tech stack' onChange={handleTechStack} value={"Java"} />
                                &nbsp;Java
                            </div>
                            <div>
                                <input type='checkbox' name='Tech stack' onChange={handleTechStack} value={"Laravel"} />
                                &nbsp;Laravel
                            </div>
                            <div>
                                <input type='checkbox' name='Tech stack' onChange={handleTechStack} value={"React Native"} />
                                &nbsp;React Native
                            </div>
                            <div>
                                <input type='checkbox' name='Tech stack' onChange={handleTechStack} value={"None of the above"} />
                                &nbsp;None of the above
                            </div>
                            {errors.techstack && <span className='error-message'>{errors.techstack}</span>}
                        </div>
                        <div className='form-input'>
                            <label className='text-left'>How many years of experience do you have?*</label>
                            <select required name='Years of experience' onChange={handleInput}>
                                <option value={""}>Choose experience period</option>
                                <option value={"0 to 1 year"}>0 to 1 year</option>
                                <option value={"1 to 2 years"}>1 to 2 years</option>
                                <option value={"2 to 3 years"}>2 to 3 years</option>
                                <option value={"Above 3 years"}>Above 3 years</option>
                            </select>
                            {errors.yearsOfExperience && <span className='error-message'>{errors.yearsOfExperience}</span>}
                        </div>
                    </div>
                    <div className='flex w-full gap-3 flex-col sm:flex-row'>
                        <div className='form-input'>
                            <label className='text-left'>GitHub Account</label>
                            <input type='text' min={4} name='GitHub account' onChange={handleInput} value={formInputs["GitHub account"] || ''} placeholder='GitHub Account' />
                            {errors.gitHubAccount && <span className='error-message'>{errors.gitHubAccount}</span>}
                        </div>
                        <div className='form-input'>
                            <label className='text-left'>Resume</label>
                            <input type='file' min={4} onChange={handleFile} />
                        </div>
                    </div>

                    <div className='flex w-full gap-3 flex-col sm:flex-row'>
                        <div className='form-input'>
                            {processing ? 
                                <input type='button' onClick={() => {}} disabled value={'Processing...'} className='bg-gray-400 mt-4 py-2 px-3 text-white rounded hover:bg-black cursor-pointer'/> 
                                : 
                                <input type='submit' value={'Submit Application'} className='bg-cyan-400 mt-4 py-2 px-3 text-white rounded hover:bg-black cursor-pointer'/>
                            }
                        </div>
                    </div>
                    {responseMessage &&
                        <div className='bg-green-200 p-4 mt-6'>
                            <span className='text-green-700'>{responseMessage}</span>
                        </div>
                    }
                    {errors.submit && 
                        <div className='bg-red-200 p-4 mt-6'>
                            <span className='text-red-700'>{errors.submit}</span>
                        </div>
                    }
                </form>
            </div>
            <Footer />
        </div>
    )
}

export default ApplcationPage