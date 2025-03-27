import React, { useState } from 'react';
import IM1 from '../../../Assets/alice.jpeg'
import IM2 from '../../../Assets/mike.webp'
import IM3 from '../../../Assets/pela.avif'
import IM4 from '../../../Assets/jai.jpeg'
import IM5 from '../../../Assets/james.jpeg'
import IM6 from '../../../Assets/janty.jpg'
import IM7 from '../../../Assets/nel.jpg'
import IM8 from '../../../Assets/leo.jpg'
const jobSeekersData = [
    {
        id: 1,
        name: 'Alice Johnson',
        skills: ['JavaScript', 'React', 'Node.js'],
        rating: 4.5,
        image: IM1,
    },
    {
        id: 2,
        name: 'Bob Smith',
        skills: ['Python', 'Django', 'Flask'],
        rating: 4.0,
        image: IM2,
    },
    {
        id: 3,
        name: 'Carol Williams',
        skills: ['Java', 'Spring', 'Hibernate'],
        rating: 4.8,
        image: IM3,
    },
    {
        id: 4,
        name: 'David Brown',
        skills: ['C#', 'ASP.NET', 'SQL Server'],
        rating: 4.6,
        image: IM4,
    },
    {
        id: 5,
        name: 'Emma Davis',
        skills: ['PHP', 'Laravel', 'MySQL'],
        rating: 4.2,
        image: IM5,
    },
    {
        id: 6,
        name: 'Frank Miller',
        skills: ['Go', 'Golang', 'Microservices'],
        rating: 4.7,
        image: IM6,
    },
    {
        id: 7,
        name: 'Grace Wilson',
        skills: ['Swift', 'iOS Development', 'Objective-C'],
        rating: 4.9,
        image: IM7,
    },
    {
        id: 8,
        name: 'Henry Lee',
        skills: ['Ruby', 'Ruby on Rails', 'PostgreSQL'],
        rating: 4.3,
        image: IM8,
    },
    {
        id: 9,
        name: 'Ivy Martinez',
        skills: ['TypeScript', 'Angular', 'Vue.js'],
        rating: 4.4,
        image: IM3,
    },
    {
        id: 10,
        name: 'Jack Thompson',
        skills: ['Kotlin', 'Android Development', 'Java'],
        rating: 4.5,
        image: IM1,
    },
];

const JobSeeker = () => {
    const [searchTerm, setSearchTerm] = useState('');

    // Filter job seekers based on search term
    const filteredJobSeekers = jobSeekersData.filter(seeker =>
        seeker.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        seeker.skills.some(skill => skill.toLowerCase().includes(searchTerm.toLowerCase()))
    );

    return (
        <div className="max-w-6xl mx-auto p-6">
            <h1 className="text-3xl font-bold mb-6">Job Seekers</h1>

            <div className="mb-6">
                <input
                    type="text"
                    placeholder="Search by name or skills..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="block w-full border border-gray-300 rounded-md p-2 focus:ring focus:ring-indigo-500"
                />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredJobSeekers.map(seeker => (
                    <div key={seeker.id} className="bg-white rounded-lg shadow-md p-4">
                        <img src={seeker.image} alt={seeker.name} className="w-24 h-24 rounded-full mx-auto mb-4" />
                        <h2 className="text-xl font-semibold">{seeker.name}</h2>
                        <p className="text-gray-600">Skills: {seeker.skills.join(', ')}</p>
                        <p className="text-gray-600">Rating: {seeker.rating} ★</p>
                        <button className="mt-4 bg-indigo-600 text-white py-2 px-4 rounded-md hover:bg-indigo-700">
                            View Profile
                        </button>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default JobSeeker;