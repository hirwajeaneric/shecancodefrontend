import React from 'react'
import image1 from "../../assets/undraw_education_f8ru.png"
import {AiOutlineRight} from "react-icons/ai"
import "./Home.css"
import { program } from '../../constants'
const Offers = () => {
  return (
    <div>
      <div className='offer-container' id='about'>
      <div className='offer-partOne'>
<div className='offer-cards'>
  <div className='offer-cardOne'>
<h2>Why Peaple <span className='cardOneText'> Choose Us</span></h2>
<h1>Why Peaple Choose Our Services</h1>
<p>We do start from beginners to expert and we link graduates to employs</p>
  </div>
  <div className='offer-cardTwo'>
    <h1>IT <br /> Solution</h1>
    <div className='cardTwo-img'>
    <img src={image1} alt="no found" />
    </div>
   
    <p> All types of consulting service It is a long established fact that a reader will be distracted. </p>

  </div>

</div>
      </div>
      <div className='offer-partTwo'>
      <div className='offer-partTwoCardOne'>
      <h1>IT <br /> Solution</h1>
    <div className='cardTwo-img'>
    <img src={image1} alt="no found" />
    </div>
   
    <p> All types of consulting service It is a long established fact that a reader will be distracted. </p>

</div>
<div className='offer-partTwoCardTwo'>
<h1>IT <br /> Solution</h1>
    <div className='cardTwo-img'>
    <img src={image1} alt="no found" />
    </div>
   
    <p> All types of consulting service It is a long established fact that a reader will be distracted. </p>

</div>
      </div>

      </div>
      
      <div className='program-section' id='program'>
        <h2>What Do <span className='cardOneText'> We Provide?</span></h2>
        <h1>Our Program Provide The Best and Full Knowledge Reguired To Become a Software Engineer</h1>
<div className='program-container'>
 {program.map((e)=>(
  <div className='program-cardOne'>
  <h3>{e.h1}</h3>
  <div >
    <img src={e.image} alt="not found" />
  </div>
  <p>{e.p}</p>
  <button className='btn-more'>View details <AiOutlineRight className='ai'/></button>

</div>
 ))}
    
  

</div>
      </div>
    </div>
  )
}

export default Offers
