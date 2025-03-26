import React from "react";
import Job from "./Job";

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
  return (
    <div className="max-w-6xl mx-auto p-6 bg-gray-100 min-h-screen min-w-screen">
      <h1 className="text-3xl font-bold mb-6 text-center text-gray-800">
        Available Jobs
      </h1>
      <div className="flex flex-wrap gap-6">
        {jobsData.map((job) => (
          <div key={job.id} className="w-full sm:w-1/2 lg:w-1/3 xl:w-1/4">
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
  );
};

export default JobList;
