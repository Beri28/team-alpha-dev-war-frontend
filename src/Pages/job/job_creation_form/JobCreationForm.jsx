import React, { useState } from 'react';
import Navbar from '../../../Components/navbar/Navbar';
import Footer from '../../../Components/footer/Footer';
import { Box, Button, Chip, Paper } from '@mui/material';
import { Add } from '@mui/icons-material';

const JobCreationForm = () => {
    const [jobTitle, setJobTitle] = useState('');
    const [jobDescription, setJobDescription] = useState('');
    const [skill, setSkill] = useState('');
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
        <>
        <Navbar />
        <div className='max-w-[80%] mx-auto'>
            <form onSubmit={handleSubmit} className=" p-6 my-8 bg-white rounded shadow-md">
                <Box sx={{width:'100%',display:'flex',justifyContent:'space-between',alignItems:'center',mb:2}}>
                    <h2 className="text-2xl font-medium mb-4 text-gray-800">Create Job Posting</h2>
                    <Button variant='outlined' size='small' color='inherit'>Create</Button>
                </Box>
                <Box sx={{width:'100%',display:{sm:'flex',xs:'block'},columnGap:{sm:'1em',xs:'0em'},mb:2}}>
                    <Paper sx={{p:4,width:'100%'}}>
                        <div className="mb-2">
                            <label className="block text-gray-700 font-semibold">Job Title</label>
                            <input
                                type="text"
                                value={jobTitle}
                                onChange={(e) => setJobTitle(e.target.value)}
                                className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring focus:ring-indigo-500 p-2"
                                required
                            />
                        </div>
                        <div className="mb-2">
                            <label className="block text-gray-700 font-semibold">Job Description</label>
                            <textarea
                                value={jobDescription}
                                onChange={(e) => setJobDescription(e.target.value)}
                                className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring focus:ring-indigo-500 p-2"
                                rows="4"
                                required
                            />
                        </div>
                        <div className="mb-2">
                            <label className="block text-gray-700 font-semibold">Job Type</label>
                            <select
                                value={jobType}
                                onChange={(e) => setJobType(e.target.value)}
                                className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring focus:ring-indigo-500 p-2"
                                required
                            >
                                <option value="">Select job type</option>
                                <option value="full-time">Full-time</option>
                                <option value="part-time">Part-time</option>
                                <option value="freelance">Freelance</option>
                            </select>
                        </div>
                        <div className="mb-2">
                            <label className="block text-gray-700 font-semibold">Skills Required</label>
                            <div className='flex justify-between items-center gap-x-2 mb-2'>
                                <input
                                    type="text"
                                    value={skill}
                                    onChange={(e) => setSkill(e.target.value)}
                                    placeholder="Enter skill"
                                    className="mt-1 block border-gray-300 w-full rounded-md shadow-sm focus:ring focus:ring-indigo-500 p-2"
                                />
                                <Button variant='outlined' size='small' color='inherit' sx={{py:'6px'}} onClick={()=>{
                                    if(skill.length<1) return
                                    setSkills([...skills,skill])
                                    setSkill('')}}
                                >
                                    <Add /> 
                                </Button>
                            </div>
                            {skills.map((skill,index)=>(
                                <Chip label={skill} key={index} variant='outlined' color='default' onDelete={()=>setSkills([...skills.filter((oSkill)=>oSkill!==skill)])} />
                            ))

                            }
                        </div>
                    </Paper>
                    <Paper sx={{p:4,width:'100%'}}>
                        <div className="mb-2">
                            <label className="block text-gray-700 font-semibold">Budget</label>
                            <input
                                type="number"
                                value={budget}
                                onChange={(e) => setBudget(e.target.value)}
                                className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring focus:ring-indigo-500 p-2"
                                required
                            />
                        </div>
                        <div className="mb-2">
                            <label className="block text-gray-700 font-semibold">Deadline</label>
                            <input
                                type="date"
                                value={deadline}
                                onChange={(e) => setDeadline(e.target.value)}
                                className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring focus:ring-indigo-500 p-2"
                            />
                        </div>
                        <div className="mb-2">
                            <label className="block text-gray-700 font-semibold">Contact Information</label>
                            <span className='text-xs text-gray-500'>This can be any means of contact you prefer</span>
                            <input
                                type="text"
                                value={contactInfo}
                                onChange={(e) => setContactInfo(e.target.value)}
                                className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring focus:ring-indigo-500 p-2"
                            />
                        </div>
                    </Paper>
                </Box>
            </form>
        </div>
        <Footer />
        </>
    );
};

export default JobCreationForm;
