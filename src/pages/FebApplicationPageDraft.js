import React, { useState } from 'react';
import Nav from "../components/Nav/index";
import Header from "../components/Header/index";
import Footer from '../components/Footers/footer';
import './Courses page/formInputs.css';
import { GoogleSpreadsheet } from 'google-spreadsheet';

const SECONDARY_COMBINATIONS = [
    "Computer Science (MEC)",
    "Software Development (SOD)",
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

const JanApplication = () => {
    const [techStack, setTechStack] = useState([]);
    const [formInputs, setFormInputs] = useState({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        gender: '',
        age: 0,
        residence: '',
        currentLevelOfEducation: '',
        whatDidYouStudy: '',
        gitHubAccount: '',
        whyDoYouWishToJoinThisProgram: '',
        howWillThisProgramHelpYou: '',
        interviewLocation: '',
    });

    const [errors, setErrors] = useState({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        gender: '',
        age: '',
        residence: '',
        currentLevelOfEducation: '',
        whatDidYouStudy: '',
        techstack: '',
        gitHubAccount: '',
        whyDoYouWishToJoinThisProgram: '',
        howWillThisProgramHelpYou: '',
        interviewLocation: '',
        submit: ''
    });
    const [responseMessage, setResponseMessage] = useState("");

    const resetFormInputs = () => {
        setFormInputs({
            firstName: '',
            lastName: '',
            email: '',
            phone: '',
            gender: '',
            age: 0,
            residence: '',
            currentLevelOfEducation: '',
            whatDidYouStudy: '',
            gitHubAccount: '',
            whyDoYouWishToJoinThisProgram: '',
            howWillThisProgramHelpYou: '',
            interviewLocation: '',
        });
    };

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

    const {
        REACT_APP_PRIVATE_KEY,
        REACT_APP_CLIENT_EMAIL,
        REACT_APP_SPREADSHEET_ID,
        REACT_APP_SHEET_ID
    } = process.env;

    const doc = new GoogleSpreadsheet(REACT_APP_SPREADSHEET_ID);

    const appendSpreadsheet = async (row) => {
        try {
            // await doc.auth({
            //     client_email: REACT_APP_CLIENT_EMAIL,
            //     private_key:REACT_APP_PRIVATE_KEY,
            // })

            await doc.useServiceAccountAuth({
                client_email: REACT_APP_CLIENT_EMAIL,
                private_key:REACT_APP_PRIVATE_KEY,
            });

            console.log('Hello 2');
            
            await doc.loadInfo();

            console.log(doc.loadInfo());

            const sheet = doc.sheetsById[REACT_APP_SHEET_ID];        
            const result = await sheet.addRow(row);
            
            return result;
        } catch (e) {
            console.error("Error: ", e);
        }
    };

    const formSubmission = (e) => {
        e.preventDefault();

        formInputs.techStack = techStack.join(', ');
        console.log(formInputs);

        // const URL = 'https://script.google.com/macros/s/AKfycbzdegsAKIapIUTSziSVknMTlTFeg2FzGKWDBZgjKqOENtrgaGoSQLt3ximyGBPMXNQoqg/exec';

        appendSpreadsheet(formInputs);

        // fetch(URL, { method: 'POST', body: formInputs})
        // .then(
        //     response => {
        //         setResponseMessage("Successfully submitted")
        //         resetFormInputs();
        //         setTimeout(() => {
        //             window.location.reload();
        //         }, 1000)
        //     }
        // )
        // .catch(error => {
        //     setErrors({ submit: 'Failed to submit!'});
        //     console.error('Error!', error.message)
        // })
    }

    return (
        <div>
            <Nav />
            <Header />
            <div className='w-full flex flex-wrap flex-shrink-0 justify-start align-top bg-slate-500 py-10 px-4 sm:px-24'>
                <div className='w-full sm:w-1/3 flex flex-col flex-shrink justify-start gap-4 p-5 sm:p-10 bg-blue-900'>
                    <h1 className='text-white font-black text-left p-0 m-0 text-3xl'>February Software Engineering Program</h1>
                    <p className='text-white text-base'>Unlock Your Potential with Our Software Englineering Program.</p>
                    {/* <strong>No prior experience needed</strong> */}
                </div>
                <form onSubmit={formSubmission} className='w-full sm:w-8/12 flex flex-col flex-shrink justify-start align-top bg-white p-4 sm:p-10'>
                    <p className='font-bold'>1. Enter Your Personal Details</p>
                    <div className='flex w-full gap-0 sm:gap-3 flex-col sm:flex-row'>
                        <div className='form-input'>
                            <label className=''>First name*</label>
                            <input type='text' required minLength={4} name='firstName' onChange={handleInput} value={formInputs.firstName || ''} placeholder='First name' />
                            {errors.firstName && <span className='error-message'>{errors.firstName}</span>}
                        </div>
                        <div className='form-input'>
                            <label className=''>Last name*</label>
                            <input type='text' required minLength={4} name='lastName' onChange={handleInput} value={formInputs.lastName || ''} placeholder='Last name' />
                            {errors.lastName && <span className='error-message'>{errors.lastName}</span>}
                        </div>
                    </div>
                    <div className='flex w-full gap-3 flex-col sm:flex-row'>
                        <div className='form-input'>
                            <label className=''>Email address*</label>
                            <input type='email' required minLength={8} name='email' onChange={handleInput} value={formInputs.email || ''} placeholder='Email address' />
                            {errors.email && <span className='error-message'>{errors.email}</span>}
                        </div>
                    </div>
                    <div className='flex w-full gap-3 flex-col sm:flex-row'>
                        <div className='form-input'>
                            <label className=''>Phone number*</label>
                            <input type='phone' required minLength={10} maxLength={10} max={10} name='phone' onChange={handleInput} value={formInputs.phone || ''} placeholder='Phone number' />
                            {errors.phone && <span className='error-message'>{errors.phone}</span>}
                        </div>
                        <div className='form-input'>
                            <label className=''>Age*</label>
                            <input type='number' required min={16} name='age' onChange={handleInput} value={formInputs.age || ''} placeholder='Age' />
                            {errors.age && <span className='error-message'>{errors.age}</span>}
                        </div>
                    </div>
                    <p className='font-bold mt-6'>2. Enter Your Coding Experience</p>
                    <div className='flex w-full gap-3 flex-col sm:flex-row'>
                        <div className='form-input'>
                            <label className='text-left'>Current level of education*</label>
                            <select required name='currentLevelOfEducation' onChange={handleInput}>
                                <option value={""}>Select level of education</option>
                                <option value={"University graduate"}>University graduate</option>
                                <option value={"Attending university"}>Attending university</option>
                                <option value={"A' Level graduate"}>A' Level graduate</option>
                            </select>
                            {errors.currentLevelOfEducation && <span className='error-message'>{errors.currentLevelOfEducation}</span>}
                        </div>
                        <div className='form-input'>
                            <label className='text-left'>What did/do you learn?*</label>
                            <select required name='whatDidYouStudy' onChange={handleInput}>
                                <option value={""}>Choose option</option>
                                {formInputs.currentLevelOfEducation === "University graduate" && 
                                    UNIVERSITY_COMBINATIONS.map((combination, index) => (
                                        <option value={combination} key={index}>{combination}</option>
                                    ))
                                }
                                {formInputs.currentLevelOfEducation === "Attending university" && 
                                    UNIVERSITY_COMBINATIONS.map((combination, index) => (
                                        <option value={combination} key={index}>{combination}</option>
                                    ))
                                }
                                {formInputs.currentLevelOfEducation === "A' Level graduate" && 
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
                                <input type='checkbox' name='techstack' onChange={handleTechStack} value={"HTML"} />
                                &nbsp;HTML
                            </div>
                            <div>
                                <input type='checkbox' name='techstack' onChange={handleTechStack} value={"CSS"} />
                                &nbsp;CSS
                            </div>
                            <div>
                                <input type='checkbox' name='techstack' onChange={handleTechStack} value={"JavaScript"} />
                                &nbsp;JavaScript
                            </div>
                            <div>
                                <input type='checkbox' name='techstack' onChange={handleTechStack} value={"ReactJS"} />
                                &nbsp;ReactJS
                            </div>
                            <div>
                                <input type='checkbox' name='techstack' onChange={handleTechStack} value={"Java"} />
                                &nbsp;Java
                            </div>
                            <div>
                                <input type='checkbox' name='techstack' onChange={handleTechStack} value={"PHP"} />
                                &nbsp;PHP
                            </div>
                            <div>
                                <input type='checkbox' name='techstack' onChange={handleTechStack} value={"React Native"} />
                                &nbsp;React Native
                            </div>
                            <div>
                                <input type='checkbox' name='techstack' onChange={handleTechStack} value={"No prior experience"} />
                                &nbsp;No prior experience
                            </div>
                            {errors.techstack && <span className='error-message'>{errors.techstack}</span>}
                        </div>
                        <div className='form-input'>
                            <label className='text-left'>GitHub Account</label>
                            <input type='text' min={4} name='gitHubAccount' onChange={handleInput} value={formInputs.gitHubAccount || ''} placeholder='GitHub Account' />
                            {errors.gitHubAccount && <span className='error-message'>{errors.gitHubAccount}</span>}
                        </div>
                    </div>
                    <div className='flex w-full gap-3 flex-col sm:flex-row'>
                        <div className='form-input'>
                            <label className='text-left'>Interview location*</label>
                            <select name='interviewLocation' onChange={handleInput}>
                                <option value={""}>Choose option</option>
                                <option value={"On site"}>On site</option>
                                <option value={"On line"}>On line</option>
                            </select>
                            {errors.email && <span className='error-message'>{errors.email}</span>}
                        </div>
                        <div className='form-input'>
                            <label className='text-left'>Current Residence*</label>
                            <small>Provide district and sector</small>
                            <input type='text' min={5} name='residence' onChange={handleInput} value={formInputs.residence || ''} placeholder='Where do you live now?' />
                            {errors.residence && <span className='error-message'>{errors.residence}</span>}
                        </div>
                    </div>
                    <p className='font-bold mt-6'>3. Your Motivation</p>
                    <div className='form-input'>
                        <label className='text-left'>Why do you wish to join this program*</label>
                        <textarea minLength={20} required name='whyDoYouWishToJoinThisProgram' onChange={handleInput} value={formInputs.whyDoYouWishToJoinThisProgram || ''} placeholder='Your text here' rows={4}></textarea>
                        {errors.whyDoYouWishToJoinThisProgram && <span className='error-message'>{errors.whyDoYouWishToJoinThisProgram}</span>}
                    </div>
                    <div className='form-input'>
                        <label className='text-left'>How will this program impact you?*</label>
                        <textarea minLength={20} required name='howWillThisProgramHelpYou' onChange={handleInput} value={formInputs.howWillThisProgramHelpYou || ''} placeholder='Your text here' rows={4}></textarea>
                        {errors.howWillThisProgramHelpYou && <span className='error-message'>{errors.howWillThisProgramHelpYou}</span>}
                    </div>
                    <div className='flex w-full gap-3 flex-col sm:flex-row'>
                        <div className='form-input'>
                            <input type='submit' value={'Submit Application'} className='bg-cyan-400 mt-4 py-2 px-3 text-white rounded hover:bg-black cursor-pointer'/>
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

export default JanApplication