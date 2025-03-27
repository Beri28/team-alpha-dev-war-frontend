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

import React from "react";
import { Button } from "@mui/material";
import img from '../../../../assets/imgs/images8.png'
import './hero.css'
import { Link } from "react-router-dom";

const HeroSection = () => {

  return (
    // <div className="flex items-center relative p-16 bg-white h-96 bg-cover bg-center"
    //      style={{ backgroundImage: "linear-gradient(to right, rgba(255, 255, 255, 0.9), transparent), url('path/to/your/background-image.jpg')" }}>
    //   <div className="relative z-10 mr-8">
    //     <h1 className="text-4xl font-bold mb-4">Transforming Your Ideas into Reality</h1>
    //     <p className="text-lg mb-4">We bring your vision to life with expert freelance services.</p>
    //     <Button variant="contained" color="primary" size="large">
    //       Get Started
    //     </Button>
    //   </div>
    //   <div className="absolute rounded-full bg-gray-300 w-72 h-72 z-0 top-1/3 left-2/3 transform -translate-x-1/2 -translate-y-1/2"></div>
    //   <div className="absolute rounded-full bg-gray-400 w-72 h-72 z-0 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"></div>
    //   <div className="absolute rounded-full bg-red-500 w-72 h-72 z-0 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"></div>
    //   <div className="absolute rounded-full bg-red-600 w-80 h-80 z-0 top-1/2 left-1/2 transform -translate-x-1/3 -translate-y-1/4 opacity-80"></div>
    //   <div className="absolute rounded-full bg-red-700 w-64 h-64 z-0 top-1/2 left-1/2 transform translate-x-1/4 translate-y-1/4 opacity-60"></div>
    //   <img 
    //     src={img}
    //     alt="Working Professional" 
    //     className="relative z-10 w-full max-w-xs rounded-lg" 
    //   />
    // </div>
    // <div className="bg-cover bg-center  hero h-[80vh]">
    //   <div className="max-w-[80%] mx-auto relative py-16 bg-gray-100 opacity-90 h-full overflow-hidden">
    <div className=" h-[80vh]">
      <div className="sm:max-w-[80%] max-w-[90%] mx-auto relative py-16 bg-white h-full overflow-hidden sm:shadow-lg">
        <div className="relative sm:z-10 z-30 sm:w-1/2 flex flex-col justify-center h-full  px-4">
          <h1 className="text-4xl font-bold text-black mb-4 text-start">Join the largest freelance marketplace in Cameroon</h1>
          <p className="text-lg text-gray-700 mb-4 text-center">Join Cameroon's trusted freelancing platform. Secure payments, reliable jobs, and seamless conncections-all in one place.</p>
          <div className="flex items-center justify-center gap-x-3">
            <Link to='/login'>
              <Button variant="contained" color="primary" size="medium" style={{ backgroundColor: '#4A5568' }}>
                Join Us Now
              </Button>
            </Link>
            <Button variant="outlined" color="inherit" size="medium" style={{ color: '#4A5568',borderColor:'4A5568' }}>
              Find Work
            </Button>
          </div>
        </div>
        <div className="absolute rounded-full bg-gray-300 w-73 h-73 z-12 top-[35%] left-[88%] transform -translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute rounded-full bg-gray-200 w-80 h-80 z-12 top-[37%] left-[60%] transform -translate-x-1/3 -translate-y-1/4 opacity-80"></div>
        <div className="absolute rounded-full bg-gray-100 w-64 h-64 z-12 top-[35%] left-[74%] transform translate-x-1/4 translate-y-1/4 opacity-60"></div>
        <div className="absolute z-11 rounded-full bg-gray-500 w-5xl h-[1024px] top-[-20em] left-[23.5%] transform translate-x-1/4 translate-y-1/4 opacity-60"></div>
        <img 
          src={img} 
          alt="Working Professional" 
          className="absolute z-20 w-full max-w-xl rounded-lg left-[55%] top-[15%]" 
        />
      </div>
    </div>
  );
};

export default HeroSection;