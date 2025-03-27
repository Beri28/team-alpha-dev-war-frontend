import React, { useContext, useEffect, useState } from "react";
import Job from "./Job";
import Footer from "../../../Components/footer/Footer";
import Navbar from "../../../Components/navbar/Navbar";
import { Get } from "../../../functions/apiCalls";
// import { DataContext } from "../../../context/dataContext";

const jobsData = [
  {
    id: 1,
    title: "Frontend Developer",
    description:
      "We're looking for a talented frontend developer with experience in React, JavaScript, and CSS.",
    location: "Remote",
    salary: "Negotiable",
  },
  {
    id: 2,
    title: "Backend Developer",
    description:
      "Join us as a backend developer with expertise in Node.js and Express.",
    location: "Remote",
    salary: "Negotiable",
  },
  {
    id: 3,
    title: "UI/UX Designer",
    description:
      "We're seeking a creative UI/UX designer to enhance user experiences.",
    location: "On-site",
    salary: "$60,000 - $80,000",
  },
  {
    id: 4,
    title: "Data Scientist",
    description:
      "Looking for a data scientist with experience in machine learning and Python.",
    location: "Remote",
    salary: "Negotiable",
  },
];

const JobList = () => {
  // const [jobs,setJobs]=useState([jobsData])
  // async function getJobs(){
  //     const resp=await Get('/job/jobs')
  //     if(resp) setJobs([...resp.data,jobs])
  // }
  // getJobs()
  // useEffect(()=>{},[jobs])
  return (
    <>
    <Navbar />
      <div className="max-w-[80%] mx-auto py-6 mb-5">
        <h1 className="text-3xl font-bold mb-6 text-center text-gray-800">
          Available Jobs
        </h1>
        <div className="grid sm:grid-cols-3 gap-6">
          {jobsData.map((job) => (
            <div key={job.id} className="w-full">
              <Job
                title={job.title}
                description={job.description}
                location={job.location}
                salary={job.salary}
              />
            </div>
          ))}
        </div>
      </div>
    <Footer />
    </>
  );
};

export default JobList;
