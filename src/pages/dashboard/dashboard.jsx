import React, { useEffect, useState } from 'react'
import "./dashboard.css"
import axios from 'axios'
const Dashboard = () => {

  // const [applicants, setApplicants]=useState([])
  // const fetchApplicants =()=>{
  //   axios.get("http://localhost:4045/api/all").then((res)=>{
  //     setApplicants(res.data.data);
  //     console.log(res)
  //   }).catch((error)=>{
  //     console.log(error);
  //   })
  // };
  // useEffect(()=>{
  //   fetchApplicants();
  // },[]);

  return (
    <div>
      <h1>Dashboard</h1>
      <div>
        <h1>All applicants for cohort 9</h1>
        <table >
          <thead>
            <tr>
              <td>number</td>
              <td>Full name</td>
              <td>Email address</td>
              <td>Telephone number</td>
              <td>Gender</td>
              <td>Location</td>
              <td>education</td>
              <td>occupation</td>
              <td>programming experience</td>
              <td>Programming Language</td>
            </tr>
            {/* {applicants.map((applicant,index)=>(
              <tr key={index}>
                <td>{applicant.firstName}</td>

              </tr>

            ))} */}
          </thead>
        </table>
      </div>
    </div>
  )
}

export default Dashboard
