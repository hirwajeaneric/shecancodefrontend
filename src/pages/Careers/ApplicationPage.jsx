import React, { useEffect, useState } from 'react';
import Nav from "../../components/Nav/index";
import Header from "../../components/Header/index";
import Footer from '../../components/Footers/footer';
import '../Courses page/formInputs.css';
import { generateJobs } from '../../utils/JobsList';
import { useParams } from 'react-router-dom';

const SECONDARY_COMBINATIONS = [
    "Computer Science (MEC)",
    "Software Development (SOD)",
    "Mathematics Physics and Computer Science (MPC)",
    "Others"
];

const UNIVERSITY_COMBINATIONS = [
    "Computer Science",
    "Software Engineering",
    "Information Management",
    "Networking",
    "Networks and Communication Systems",
    "Big Data Analysis"
];

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
        "Current level of education": '',
        "What did you study": '',
        "Tech stack": '',
        "GitHub account": '',
        "Do you have a computer": '',
        "Interview location": '',
        "Why do you wish to join this program": '',
        "How will this program impact you": '',
    });

    const [errors, setErrors] = useState({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        age: '',
        residence: '',
        currentLevelOfEducation: '',
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
            "Current level of education": '',
            "What did you study": '',
            "Tech stack": '',
            "GitHub account": '',
            "Do you have a computer":'',
            "Interview location": '',
            "Why do you wish to join this program": '',
            "How will this program impact you": '',
        });
    }

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

        const formEle = document.querySelector("form");
        const formDatab = new FormData(formEle);

        formInputs.techStack = techStack.join(', ');
        console.log(formInputs);

        const URL = 'https://script.google.com/macros/s/AKfycbyRYJ3eab-cthia01m-arjx7Fd-NJMzA95e4wPScmH4lg8Ka-JBb9mAXn7rdabyOK6W1A/exec';

        setProcessing("Processing...");

        fetch(URL, { method: 'POST', body: formDatab})
        .then(
            response => {
                console.log(response);
                setProcessing("");
                setResponseMessage("Successfully submitted");
                resetFormInputs();
                setTimeout(() => {
                    window.location.reload();
                }, 3000)
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
                        <input type='text' min={5} name='Residence' onChange={handleInput} value={formInputs["Residence"] || ''} placeholder='Where do you live now?' />
                        {errors.residence && <span className='error-message'>{errors.residence}</span>}
                    </div>
                    <p className='font-bold mt-6'>2. Enter Your Coding Experience</p>
                    <div className='flex w-full gap-3 flex-col sm:flex-row'>
                        <div className='form-input'>
                            <label className='text-left'>Current level of education*</label>
                            <select required name='Current level of education' onChange={handleInput}>
                                <option value={""}>Select level of education</option>
                                <option value={"University graduate"}>University graduate</option>
                                <option value={"Attending university"}>Attending university</option>
                                <option value={"A' Level graduate"}>A' Level graduate</option>
                            </select>
                            {errors.currentLevelOfEducation && <span className='error-message'>{errors.currentLevelOfEducation}</span>}
                        </div>
                        <div className='form-input'>
                            <label className='text-left'>What did/do you learn?*</label>
                            <select required name='What did you study' onChange={handleInput}>
                                <option value={""}>Choose option</option>
                                {formInputs["Current level of education"] === "University graduate" && 
                                    UNIVERSITY_COMBINATIONS.map((combination, index) => (
                                        <option value={combination} key={index}>{combination}</option>
                                    ))
                                }
                                {formInputs["Current level of education"] === "Attending university" && 
                                    UNIVERSITY_COMBINATIONS.map((combination, index) => (
                                        <option value={combination} key={index}>{combination}</option>
                                    ))
                                }
                                {formInputs["Current level of education"] === "A' Level graduate" && 
                                    SECONDARY_COMBINATIONS.map((combination, index) => (
                                        <option value={combination} key={index}>{combination}</option>
                                    ))
                                }
                            </select>
                            {errors.currentLevelOfEducation && <span className='error-message'>{errors.currentLevelOfEducation}</span>}
                        </div>
                    </div>
                    <div className='flex w-full gap-3 flex-col sm:flex-row'>
                        <div className='form-input'>
                            <label className='text-left'>Prior experience in programming*</label>
                            <small>Choose all that apply</small>
                            <div>
                                <input type='checkbox' name='Tech stack' onChange={handleTechStack} value={"HTML"} />
                                &nbsp;HTML
                            </div>
                            <div>
                                <input type='checkbox' name='Tech stack' onChange={handleTechStack} value={"CSS"} />
                                &nbsp;CSS
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
                                <input type='checkbox' name='Tech stack' onChange={handleTechStack} value={"PHP"} />
                                &nbsp;PHP
                            </div>
                            <div>
                                <input type='checkbox' name='Tech stack' onChange={handleTechStack} value={"React Native"} />
                                &nbsp;React Native
                            </div>
                            <div>
                                <input type='checkbox' name='Tech stack' onChange={handleTechStack} value={"No prior experience"} />
                                &nbsp;No prior experience
                            </div>
                            {errors.techstack && <span className='error-message'>{errors.techstack}</span>}
                        </div>
                        <div className='form-input'>
                            <label className='text-left'>GitHub Account</label>
                            <input type='text' min={4} name='GitHub account' onChange={handleInput} value={formInputs["GitHub account"] || ''} placeholder='GitHub Account' />
                            {errors.gitHubAccount && <span className='error-message'>{errors.gitHubAccount}</span>}
                        </div>
                    </div>
                    <div className='flex w-full gap-3 flex-col sm:flex-row'>
                        <div className='form-input'>
                            <label className='text-left'>Do you have a computer?*</label>
                            <select name='Do you have a computer' onChange={handleInput}>
                                <option value={""}>Choose option</option>
                                <option value={"Yes"}>Yes</option>
                                <option value={"No"}>No</option>
                            </select>
                            {errors.doYouHaveAComputer && <span className='error-message'>{errors.doYouHaveAComputer}</span>}
                        </div>
                        <div className='form-input'>
                            <label className='text-left'>Interview location*</label>
                            <select name='Interview location' onChange={handleInput}>
                                <option value={""}>Choose option</option>
                                <option value={"On site"}>On site</option>
                                <option value={"On line"}>On line</option>
                            </select>
                            {errors.interviewLocation && <span className='error-message'>{errors.interviewLocation}</span>}
                        </div>
                    </div>
                    <p className='font-bold mt-6'>3. Your Motivation</p>
                    <div className='form-input'>
                        <label className='text-left'>Why do you wish to join this program*</label>
                        <textarea minLength={20} required name='Why do you wish to join this program' onChange={handleInput} value={formInputs["Why do you wish to join this program"] || ''} placeholder='Your text here' rows={4}></textarea>
                        {errors.whyDoYouWishToJoinThisProgram && <span className='error-message'>{errors.whyDoYouWishToJoinThisProgram}</span>}
                    </div>
                    <div className='form-input'>
                        <label className='text-left'>How will this program impact you?*</label>
                        <textarea minLength={20} required name='How will this program impact you' onChange={handleInput} value={formInputs["How will this program impact you"] || ''} placeholder='Your text here' rows={4}></textarea>
                        {errors.howWillThisProgramHelpYou && <span className='error-message'>{errors.howWillThisProgramHelpYou}</span>}
                    </div>



                    <div className='flex w-full gap-3 flex-col sm:flex-row'>
                        <div className='form-input'>
                            {processing ? 
                                <input type='submit' value={'Processing...'} className='bg-gray-400 mt-4 py-2 px-3 text-white rounded hover:bg-black cursor-pointer'/> 
                                : 
                                <input type='submit' value={'Submit Application'} className='bg-cyan-400 mt-4 py-2 px-3 text-white rounded hover:bg-black cursor-pointer'/>
                            }
                            {errors.submit && <span className='error-message'>{errors.submit}</span>}
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