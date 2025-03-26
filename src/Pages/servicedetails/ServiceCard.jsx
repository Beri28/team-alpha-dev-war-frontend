import React from 'react';

const ServiceCard = ({ service }) => {
  return (
    <div className="bg-white rounded-lg p-6 shadow-lg transition-transform transform hover:scale-105">
      <h2 className="text-2xl font-bold text-blue-600">{service.title}</h2>
      <p className="text-gray-700 mt-2 mb-4">{service.description}</p>

      <div className="mb-4">
        <h3 className="font-semibold text-lg text-gray-800">Skills:</h3>
        <ul className="list-disc list-inside pl-5">
          {service.skills.map(skill => (
            <li key={skill} className="text-gray-600">{skill}</li>
          ))}
        </ul>
      </div>

      <div className="mb-4">
        <h3 className="font-semibold text-lg text-gray-800">Expectations:</h3>
        <ul className="list-disc list-inside pl-5">
          {service.expectations.map(expectation => (
            <li key={expectation} className="text-gray-600">{expectation}</li>
          ))}
        </ul>
      </div>

      <div className="mb-4">
        <h3 className="font-semibold text-lg text-gray-800">Responsibilities:</h3>
        <ul className="list-disc list-inside pl-5">
          {service.responsibilities.map(responsibility => (
            <li key={responsibility} className="text-gray-600">{responsibility}</li>
          ))}
        </ul>
      </div>

      <div className="border-t border-gray-300 my-4 pt-4">
        <p className="font-semibold text-gray-700"><strong>Experience Level:</strong> {service.experienceLevel}</p>
        <p className="font-semibold text-gray-700"><strong>Salary Range:</strong> {service.salaryRange}</p>
        <p className="font-semibold text-gray-700"><strong>Price:</strong> {service.price}</p>
      </div>

      <div className="mb-4">
        <h3 className="font-semibold text-lg text-gray-800">Certifications:</h3>
        <ul className="list-disc list-inside pl-5">
          {service.certifications.map(certification => (
            <li key={certification} className="text-gray-600">{certification}</li>
          ))}
        </ul>
      </div>

      <div className="mb-4">
        <h3 className="font-semibold text-lg text-gray-800">Tools:</h3>
        <ul className="list-disc list-inside pl-5">
          {service.tools.map(tool => (
            <li key={tool} className="text-gray-600">{tool}</li>
          ))}
        </ul>
      </div>

      {/* Apply Button */}
      <div className="flex justify-center mt-4">
        <button className="bg-orange-500 text-white font-bold py-2 px-8 rounded hover:bg-orange-600 transition duration-300 w-full">
          Apply
        </button>
      </div>
    </div>
  );
};

export default ServiceCard;