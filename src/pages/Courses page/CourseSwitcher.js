import React, { useState } from 'react';


function CourseSwitcher() {
  const [course, setCourse] = useState('');
  function handleCourseChange(event) {
    setCourse(event.target.value);
  }
  return (
    <div>
      <select onChange={handleCourseChange}>
        <option value="red">Software Engineering</option>
        <option value="blue">Web Development</option>
        <option value="green">Part-time Software Engineering</option>
        <option value="yellow">High School holidays tech bootcamp</option>
      </select>
      {/* <div style={{ backgroundColor: bgColor, width: '100px', height: '100px' }}></div> */}
    </div>
  );
}
export default CourseSwitcher;









