import React, { useState } from 'react';

const JobCreationForm = () => {
    const [jobTitle, setJobTitle] = useState('');
    const [jobDescription, setJobDescription] = useState('');
    const [skills, setSkills] = useState([]);
    const [budget, setBudget] = useState('');
    const [jobType, setJobType] = useState('');
    const [deadline, setDeadline] = useState('');
    const [contactInfo, setContactInfo] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission logic here
        console.log({
            jobTitle,
            jobDescription,
            skills,
            budget,
            jobType,
            deadline,
            contactInfo,
        });
    };

    return (
        <form onSubmit={handleSubmit} className="max-w-lg mx-auto p-6 bg-white rounded shadow-md">
            <h2 className="text-2xl font-bold mb-4">Create Job Posting</h2>

            <div className="mb-4">
                <label className="block text-gray-700">Job Title</label>
                <input
                    type="text"
                    value={jobTitle}
                    onChange={(e) => setJobTitle(e.target.value)}
                    className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring focus:ring-indigo-500"
                    required
                />
            </div>

            <div className="mb-4">
                <label className="block text-gray-700">Job Description</label>
                <textarea
                    value={jobDescription}
                    onChange={(e) => setJobDescription(e.target.value)}
                    className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring focus:ring-indigo-500"
                    rows="4"
                    required
                />
            </div>

            <div className="mb-4">
                <label className="block text-gray-700">Skills Required</label>
                <input
                    type="text"
                    value={skills}
                    onChange={(e) => setSkills(e.target.value.split(','))}
                    placeholder="Enter skills separated by commas"
                    className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring focus:ring-indigo-500"
                />
            </div>

            <div className="mb-4">
                <label className="block text-gray-700">Budget</label>
                <input
                    type="number"
                    value={budget}
                    onChange={(e) => setBudget(e.target.value)}
                    className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring focus:ring-indigo-500"
                    required
                />
            </div>

            <div className="mb-4">
                <label className="block text-gray-700">Job Type</label>
                <select
                    value={jobType}
                    onChange={(e) => setJobType(e.target.value)}
                    className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring focus:ring-indigo-500"
                    required
                >
                    <option value="">Select job type</option>
                    <option value="full-time">Full-time</option>
                    <option value="part-time">Part-time</option>
                    <option value="freelance">Freelance</option>
                </select>
            </div>

            <div className="mb-4">
                <label className="block text-gray-700">Deadline</label>
                <input
                    type="date"
                    value={deadline}
                    onChange={(e) => setDeadline(e.target.value)}
                    className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring focus:ring-indigo-500"
                />
            </div>

            <div className="mb-4">
                <label className="block text-gray-700">Contact Information</label>
                <input
                    type="text"
                    value={contactInfo}
                    onChange={(e) => setContactInfo(e.target.value)}
                    className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring focus:ring-indigo-500"
                />
            </div>

            <button
                type="submit"
                className="w-full bg-indigo-600 text-white py-2 rounded-md hover:bg-indigo-700"
            >
                Submit Job
            </button>
        </form>
    );
};

export default JobCreationForm;