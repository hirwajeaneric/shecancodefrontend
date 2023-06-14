import Image1 from "./alumniImg/alumn6.jpeg";
import Image2 from "./alumniImg/alumn1.PNG";
import Image3 from "./alumniImg/alumn2.PNG";
import Image4 from "./alumniImg/alumn4.PNG";
import Image5 from "./alumniImg/alumn8.jpeg";
import Image6 from "./alumniImg/alumn3.PNG";
import Image7 from "./alumniImg/alumn5.PNG";
import Image8 from "./alumniImg/alumn7.jpeg";
import "./alumni.css";
const Alumni = () => {
  // return(
  //   <div>
  //     <h1>i am alumn1</h1>
  //   </div>
  // );
  return (
    <div className="alumni-page">
      <h1 className="text-2xl ">What Our Alumni Say</h1>
      <div className="image-cards">
        <div className="apps-box">
          <div className="apps">
            <img src={Image1} alt="picture1" />
            <h3>Kelly Mons</h3>
            <p>
              I went to SheCanCde and it was a great time am now employed thanks
              to IGIRErwanda for the support they gave us
            </p>
          </div>
          <div className="apps">
            <img src={Image2} alt="picture2" />
            <h3>Kelly Mons</h3>
            <p>
              I went to SheCanCde and it was a great time am now employed thanks
              to IGIRErwanda for the support they gave us
            </p>
          </div>
          <div className="apps">
            <img src={Image3} alt="picture3" />
            <h3>Kelly Mons</h3>
            <p>
              I went to SheCanCde and it was a great time am now employed thanks
              to IGIRErwanda for the support they gave us
            </p>
          </div>
          <div className="apps">
            <img src={Image4} alt="picture4" />
            <h3>Kelly Mons</h3>
            <p>
              I went to SheCanCde and it was a great time am now employed thanks
              to IGIRErwanda for the support they gave us
            </p>
          </div>
          <div className="apps">
            <img src={Image5} alt="picture5" />
            <h3>Kelly Mons</h3>
            <p>
              I went to SheCanCde and it was a great time am now employed thanks
              to IGIRErwanda for the support they gave us
            </p>
          </div>
          <div className="apps">
            <img src={Image6} alt="picture6" />
            <h3>Kelly Mons</h3>
            <p>
              I went to SheCanCde and it was a great time am now employed thanks
              to IGIRErwanda for the support they gave us
            </p>
          </div>
          <div className="apps">
            <img src={Image7} alt="picture7" />
            <h3>Kelly Mons</h3>
            <p>
              I went to SheCanCde and it was a great time am now employed thanks
              to IGIRErwanda for the support they gave us
            </p>
          </div>
          <div className="apps">
            <img src={Image8} alt="picture8" />
            <h3>Kelly Mons</h3>
            <p>
              I went to SheCanCde and it was a great time am now employed thanks
              to IGIRErwanda for the support they gave us
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Alumni;
