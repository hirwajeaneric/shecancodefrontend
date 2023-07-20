import React from 'react';
import './course.css';
import { courseContent } from './courseData';

const Course = () => {
  return (
    <div className="container-course">
      <div className="box-container">
        {courseContent.map((course, index) => (
          <div className="box" key={index}>
            <img src={course.image} alt={course.title} />
            <h3>{course.title}</h3>
            <p>{course.description}</p>
            <a href="#home" className="btn">
              read more
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Course;
