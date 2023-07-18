import React from 'react';
import Typed from 'react-typed';
import Index from '../Header/index';
import './application.css';
import Button from '../Button';
import Footer from '../Footers/footer';
import Course from '../courses/Course';
import { applicationMiddleContents } from '../courses/courseData';

const Application = () => {
  const sentences = [
    'Application is open for SheCanCode Cohort 9 Bootcamp',
    'Join us and learn valuable coding skills',
    'Become a part of an inclusive and supportive community',
    'Unlock your potential with SheCanCode',
  ];

  const sentences1 = [
    'We choose perfect course for you!!',
    'Unlock the best-fit course that suits your goals!',
    'Explore handpicked courses that match your needs!',
  ];

  return (
    <>
      <Index />
      <div className="application-container">
        <div>
          <h1 className="application-title">
            <Typed strings={sentences} typeSpeed={50} backSpeed={40} loop />
          </h1>
        </div>
        <div className="application-upper">
          <div className="application-upper-content">
            <h1>Learning made Easy</h1>
            <Button btnTitle={'Get started'} />
          </div>
        </div>

        <div className="appliction-middle">
          {applicationMiddleContents.map((content, index) => (
            <div className="middle-1" key={index}>
              <div className="middle-1-content">
                <div className="middle-1-left">
                  <h2>{content.title}</h2>
                </div>
                <div className="middle-1-right">
                  <h3>{content.subtitle}</h3>
                  <p>{content.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="application-lower-content">
          <div className="middle-2">
            <h1>
              <Typed
                strings={sentences1}
                typeSpeed={80}
                backSpeed={0}
                startDelay={300}
                smartBackspace
                loop
              />
            </h1>
          </div>
          <p>
            Our training workshop will give you the knowledge of how to get
            started, boost your Employability, Entrepreneurship & Leadership
            skills and productivity by learning to code, hosting your websites,
            & designing apps.
          </p>
        </div>
      </div>
      <Course />
      <Footer />
    </>
  );
};

export default Application;
