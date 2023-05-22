import React from 'react'
import Contact from '../contact/cnt.css'
 let Contacting=()=>{
    return(
        <>
        <div className='clip'>
            <div className='link'>
            <div className='icon'>
            <i class='bx bxl-instagram'></i><br/>
            <i class='bx bxl-twitter' ></i><br/>
            <i class='bx bxl-linkedin' ></i>
            </div>
            </div>
             <div className='box'>
                <div className='inner'>
                < div className='inputs'>
                    <h1 id="get">Get In Touch</h1>
                    <h2 id="question">Got question or inquiry?Please write for or visit us</h2><br/>
                    
                        <input type='text' placeholder='Enter your full names'/> <br/>
                        <input type='email' placeholder='Enter your Email Address'/><br/>
                        <textarea rows={10} cols={40} placeholder='Leave the comments'/><br/>
                        <button id="submit">Submit</button>
                    </div>
                    <div className='icons'>
                    <div className='a'>
                     <h3><i class='bx bx-location-plus'></i>KG st 549 Kacyiru</h3></div>
                    <h3><i class='bx bx-phone'></i>+250-788-473-533</h3>
                    <h3><i class='bx bx-envelope'></i>Igirerwanda@gmail</h3>
                    </div>
                </div>
                </div>  
        </div>
        </>
    )
 }
 export default Contacting;