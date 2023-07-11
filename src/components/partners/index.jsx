import React from 'react'
import "./partners.css"
import master from "../firsthomesection/image/download (1).png"
import un from "../firsthomesection/image/download.png"
import img from "../firsthomesection/image/download (5).jpg"
const Index = () => {
  return (
    <div>
         <section class="lens__on__life" id="gallery">
      <div class="lens__on__life__container">
        <h2>Our Partners and Hiring Company</h2>
        <div class="slider">
          <div class="slide-track">
            <div class="slide">
              <img src={img} alt="not avoilable" />
            </div>
            <div class="slide">
              <img src={un} alt="not there" />
            </div>
            <div class="slide">
              <img src={img} alt="image not found" />
            </div>
            <div class="slide">
              <img src={master} alt="not found" />
            </div>
            <div class="slide">
              <img src={img} alt="none" />
            </div>
            <div class="slide">
              <img src={un} alt="not" />
            </div>
            <div class="slide">
              <img src={master} alt="no found" />
            </div>
            <div class="slide">
              <img src={img} alt="unvailable" />
            </div>
            <div class="slide">
              <img src={un} alt="not displayed" />
            </div>
            <div class="slide">
              <img src={master} alt="no image" />
            </div>
          </div>
        </div>
      </div>
    </section>

    </div>
  )
}

export default Index
