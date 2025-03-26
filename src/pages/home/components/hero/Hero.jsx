// import React, { useState } from 'react';
// // import HeroImage from '../../../../assets/image2.jpg'
// import './hero.css'
// import {Button, Chip,FormControl, Input, Typography, } from '@mui/material';
// import { Search } from '@mui/icons-material';

// function Hero(props) {
//     const [search,setSearch]=useState('')
//     return (
//         <div className='w-[100%] h-[85vh] hero'>
//             <div className='bg-[#000000a6] w-full h-full flex items-center text-white'>
//                 <div className='sm:max-w-[80%] max-w-[90%] mx-auto'>
//                     <p className='sm:text-6xl text-4xl font-medium my-4'>
//                         Find Skilled freelancers. Get work done seamlessly
//                     </p>
//                     <p className='font-light sm:text-xl text-lg'>
//                         Join Cameroon's trusted freelancing platform. Secure payments, reliable jobs, and seamless conncections-all in one place
//                     </p>
//                     <div className='w-full flex justify-center items-center sm:gap-x-5 gap-x-2 mt-3.5'>
//                         <Chip label="Hire a Freelancer" color='success' variant='filled' sx={{p:2.5,borderRadius:'25px'}} />
//                         <Chip label="Find Work" color='warning' variant='filled' sx={{p:2.5,borderRadius:'25px'}} />
//                         {/* <Chip label="Concerts" color='info' variant='filled' sx={{p:2.5,borderRadius:'25px'}} />
//                         <Chip label="Seminars" color='secondary' variant='filled' sx={{p:2.5,borderRadius:'25px'}} /> */}
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// }

// export default Hero;
import React from 'react';
import './hero.css'

const HeroSection = () => {
  return (
    <section
      className="relative w-full h-screen bg-cover bg-center hero"
    //   style={{
    //     backgroundImage: "url('https://images.unsplash.com/photo-1515109061117-2f1a3fd09b58?crop=entropy&cs=tinysrgb&fit=max&ixid=MXwyMDg5NzN8MHx8c2VhcmNofDg2fHxwcm9mZXNzaW9uYWx8ZW58MHx8fHwxNjYzOTgxMTQw&ixlib=rb-1.2.1&q=80&w=1080')",
    //   }}
    >
      <div className="absolute inset-0 bg-black opacity-40"></div>
      <div className="relative z-10 flex flex-col justify-center items-center text-center text-white px-6 sm:px-12 lg:px-20 h-full">
        <h1 className="text-5xl sm:text-6xl font-extrabold mb-4 tracking-tight">
          Find Top Freelancers or Get Hired in Seconds
        </h1>
        <p className="text-xl sm:text-2xl mb-8 max-w-3xl">
          The best place to hire talented freelancers for every project. Whether you need a developer, designer, writer, or marketer, we have you covered.
        </p>
        <div className="flex justify-center space-x-4">
          <a
            href="#get-started"
            className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-8 rounded-lg shadow-lg transition duration-300 transform hover:scale-105"
          >
            Get Started
          </a>
          <a
            href="#browse"
            className="bg-transparent border-2 border-white text-white font-semibold py-3 px-8 rounded-lg shadow-lg transition duration-300 transform hover:scale-105"
          >
            Browse Freelancers
          </a>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
