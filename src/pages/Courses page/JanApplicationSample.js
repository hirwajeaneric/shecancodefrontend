import React, { useState } from 'react'
import Image from './Application-page/she can.jpg'
import '../components/Application/application.css'

const JanApplication = () => {
    const scriptURL = 'https://script.google.com/macros/s/AKfycbxP8wxzHpwbsMDkBUzYISMMhygnuz_jXhX_QqI0RwJ2jtsuq3MiwMSIVxratF5FsOaqow/exec';
    
    const [formInputs, setFormInputs] = useState({});
    
    const handleInput = ({ currentTarget: target }) => {
        setFormInputs({ ...formInputs, [target.name]: target.value })
    }

    const formSubmittion = (e) => {
        e.preventDefault();

        console.log(formInputs);

        // fetch(scriptURL, { method: 'POST', body: formInputs})
        //     .then(response => console.log('Success!', response))
        //     .catch(error => console.error('Error!', error.message))
    }

    return (
        <div>
            <div>
                <div className="all">
                    <div className="whole">
                        <div className="apply">

                            <h1>Apply now</h1>
                            <p>You will learn web development and learn <br></br> a  job in the tech industry with 1-on-1 guidance<br></br> from an expert mentor and career coach</p>
                            <div className="overlay"></div>
                            <img src={Image} alt="not found"></img>
                        </div>

                        {/* Interview steps  */}

                        <div className="form">
                            <form onSubmit={formSubmittion}>
                                <div className="Name">
                                    <input type="text" name='firstName' value={formInputs.firstName || ""} onChange={handleInput} placeholder="Please provide your First Name" />
                                    <input type="text" name="lastName" value={formInputs.lastName || ""} onChange={handleInput} placeholder="Please provide your Last Name" id="lastname" /></div>
                                <br></br>

                                <input type="email" name="email" value={formInputs.email || ""} onChange={handleInput} placeholder="Please provide your Email" id="email"/><br></br><br></br>
                                <input type="phone" name="phone" value={formInputs.phone || ""} onChange={handleInput} placeholder="Please provide your Phone Number" id="phoneNumber"/><br></br><br></br>
                                <input type="text" name="residence" value={formInputs.residence || ""} onChange={handleInput} placeholder="Please provide your District of Residency" id="residency" /><br></br><br></br>

                                <select id="gender" name='gender' onChange={handleInput}>
                                    <option value=''>Gender</option>
                                    <option value={'Male'} >Male</option>
                                    <option value={'Female'}>Female</option>
                                </select><br></br><br></br>
                                <select id="age" name="age" onchange={handleInput}>
                                    <option value=''>What is your age range?</option>
                                    <option value={'18-25'}>18-25</option>
                                    <option value={'25-30'}>25-30</option>
                                    <option value={'30-35'}>30-35</option>
                                </select><br></br><br></br>
                                <input type="text" placeholder="Your current level of Education" id="level" /><br></br><br></br>

                                <input type="text" placeholder="What did you study at university/High school." id="major" /><br></br><br></br>

                                <select id="program" name="program" onchange={handleInput}>
                                    <option value={''} >Select Program</option>
                                    <option type="checkbox" value={'Front-End'}>Front-End Stack</option>
                                    <option type="checkbox" value={'Back-End'} >Backend Stack</option>
                                </select> <br></br><br></br>
                                <select id="program" name='program' onchange={handleInput}>
                                    <option value=''>Do you have Github Account?</option>
                                    <option type="checkbox" value="Yes" >Yes</option>
                                    <option type="checkbox" value="No" >No</option>
                                </select> <br></br><br></br>
                                <input name="doYouHaveGithubAcoount" type="text" placeholder="If, yes share with us your account." id="github_acc" />
                                <input type="text" name='' placeholder="Are you fully available at the moment?" /><br></br><br></br>
                                <textarea> Why do you wish to join SheCanCODE program? Please write in max 100 words:</textarea>
                                <textarea> Why is software development your dream career/Job?</textarea>
                                <textarea> Please explain how this program would help you to achieve your career goals</textarea>
                                <input placeholder='Inline with your choice course, let us know your programming languages you may know since we are looking applicant who have beginner/intermediate coding skills.' />
                                How did you hear about SheCanCODE program?

                               
                                <input type="Github Account" placeholder=" If, yes. Let us know which refugee camp you come from?" id="github_acc" />
                                <p> Click this link so you can do English exam,<a href="https://docs.google.com/forms/d/1PSsVVIskg8dkHxW39n6_nFAX9W8ibJ2_9cbzcmyu09U/viewform?edit_requested=true">This your English assessment.</a></p>
                                <input type="checkbox" name="Test" value="Done"/>Done
                                <input type="checkbox" name="Test" value="Not Done" />Not Done

                                <div className="btn">
                                    <button type='submit'>Submit</button></div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default JanApplication
