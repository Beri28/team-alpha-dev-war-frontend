import React from 'react';

function Job({ title, description, location, salary }) {
  return (
    <div className="bg-white rounded-lg shadow-md p-4 transition-transform duration-200 hover:shadow-lg hover:scale-105">
      <h2 className="text-gray-800 text-lg font-bold mb-2">{title}</h2>
      <p className="text-gray-600 mb-2">{description}</p>
      <p className="text-gray-500 text-sm"><strong>Location:</strong> {location}</p>
      <p className="text-gray-500 text-sm"><strong>Salary:</strong> {salary}</p>
      <div className="mt-4">
        <button className="bg-blue-500 text-white py-1 px-4 rounded hover:bg-blue-600 transition duration-150">
          Apply Now
        </button>
      </div>
    </div>
  );
}

export default Job;