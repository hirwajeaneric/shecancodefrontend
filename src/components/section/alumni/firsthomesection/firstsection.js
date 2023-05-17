import React from 'react'
import './firstsection.css'
const Firstsection = () => {
    return ( 
        <div>
            <div className='container'>
           <div className='left'>
            <h2>Build your Career in Tech</h2>
            <p className='para'>Join SheCanCode,Learn,Get employed.</p><br></br>
            <p className='par'>Irrespective of your prior coding proficiency, whether you possess limited experience, are self-taught, or feel uncertain,<br></br> we warmly welcome you to join our esteemed program. We provide comprehensive training and guidance, <br></br>empowering individuals to acquire valuable coding skills and pave their path towards professional growth</p><br></br>

            <div className='whole'><div className='designer'><i class='bx bxl-codepen'></i></div><h4>UI/UX Design</h4><div className='frontend'><i class='bx bx-code-block'></i></div><h4>Front-end</h4><div className='backend'><i class='bx bxs-data' ></i></div><h4>Back-end</h4></div><br></br>
            <button>Get started</button>
            </div>
            <div className='rigth'>

                </div> 
        </div><br></br>
        <div className='partners'>
            
                <div className='lin'><div className='under'></div><h3>Clients and hiring partners</h3><div className='undr'></div></div>
                <div className='mini'><div className='mastercard'></div><div className='giz'></div><div className='microsoft'></div><div className='DTC'></div></div>
           
        </div>
        </div>
     );
}
 
export default Firstsection;