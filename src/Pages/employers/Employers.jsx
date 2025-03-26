import React from 'react';
import { Link } from 'react-router-dom';
const EmployerPage = () => {
  const freelancers = [
    { id: 1, name: 'Jane Doe', skills: 'React, JavaScript, CSS' },
    { id: 2, name: 'John Smith', skills: 'Node.js, Python, SQL' },
    { id: 3, name: 'Alice Johnson', skills: 'UI/UX Design, Figma' },
  ];

  return (
    <div className="bg-gray-100 min-h-screen p-6">
      <header className="text-center mb-8">
        <h1 className="text-4xl font-bold text-gray-800">Welcome, Employer!</h1>
        <p className="text-gray-600">Manage your job postings and find freelancers.</p>
      </header>
      
      <div className="flex justify-center space-x-4 mb-8">
        <button className="bg-blue-500 text-white py-2 px-6 rounded-lg shadow-md hover:bg-blue-600 transition duration-150">
          <Link to='/createjob'>Post a Job</Link>
        </button>
        <button className="bg-green-500 text-white py-2 px-6 rounded-lg shadow-md hover:bg-green-600 transition duration-150">
         <Link to='/viewfreelancers'> View Freelancers</Link>
        </button>
      </div>

      <section className="bg-white rounded-lg shadow-lg p-6">
        <h2 className="text-2xl font-bold mb-4">Available Freelancers</h2>
        <ul className="space-y-4">
          {freelancers.map(freelancer => (
            <li key={freelancer.id} className="border p-4 rounded-lg shadow-sm flex justify-between items-center">
              <div>
                <h3 className="text-lg font-semibold text-gray-800">{freelancer.name}</h3>
                <p className="text-gray-600">{freelancer.skills}</p>
              </div>
              <button className="bg-blue-500 text-white py-1 px-4 rounded hover:bg-blue-600 transition duration-150">
                View Profile
              </button>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
};

export default EmployerPage;