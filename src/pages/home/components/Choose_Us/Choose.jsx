// import { GppGood, PsychologyAlt, QuestionAnswerOutlined, QuestionMark } from '@mui/icons-material';
// import { Paper } from '@mui/material';
// import React from 'react';
// import img from '../../../../Assets/image3.jpg'

// function Choose(props) {
//     return (
//         <div className='bg-gray-50 my-[2em] pb-12'>
//             <div className='max-w-[80%] mx-auto'>
//                 <p className='text-3xl font-bold py-8 text-center font-[cursive]'>Why Book With Us <PsychologyAlt fontSize='large' /> </p>
//                 <div className='w-full flex justify-between'>
//                     <div className='w-[45%] sm:flex hidden'>
//                         <img src={img} className='w-full h-full object-cover' alt='image' />
//                     </div>
//                     <div className='sm:w-1/2 flex flex-col gap-y-4'>
//                         <div className='w-full flex justify-start'>
//                             <p className=' shadow-lg'>
//                                 <Paper sx={{p:4}}>
//                                     <span className='font-bold'><GppGood color='success' /> Easy & Secure Booking  </span>
//                                     - A hassle-free ticketing experience
//                                     <span className='text-2xl shadow-md rounded-full p-5 font-extrabold font-[cursive] ml-3'>1</span>
//                                 </Paper>
//                             </p>
//                         </div>
//                         <div className='w-full flex justify-end'>
//                             <p className='shadow-lg'>
//                                 <Paper sx={{p:4}}>
//                                     <span className='font-bold'><GppGood color='success' /> Exclusive Deals </span>
//                                     - Get special discounts and early bird offers
//                                     <span className='text-2xl shadow-md rounded-full p-5 font-extrabold font-[cursive] ml-3'>2</span>
//                                 </Paper>
//                             </p>
//                         </div>
//                         <div className='w-full flex justify-start'>
//                             <p className='shadow-lg'>
//                                 <Paper sx={{p:4}}>
//                                     <span className='font-bold'><GppGood color='success' /> Verified Tickets </span>
//                                     - 100% authentic and reliable
//                                     <span className='text-2xl shadow-md rounded-full p-5 font-extrabold font-[cursive] ml-3'>3</span>
//                                 </Paper>
//                             </p>
//                         </div>
//                         <div className='w-full flex justify-end'>
//                             <p className='shadow-lg'>
//                                 <Paper sx={{p:4}}>
//                                     <span className='font-bold'><GppGood color='success' /> 24/7 Customer Support </span>
//                                     - We're here whenever you need us
//                                     <span className='text-2xl shadow-md rounded-full p-5 font-extrabold font-[cursive] ml-3'>4</span>
//                                 </Paper>
//                             </p>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// }

// export default Choose;

import React from 'react';
import { Card, CardContent, Typography, Grid } from '@mui/material';
import { Security, Speed, ThumbUp } from '@mui/icons-material';

const WhyChooseUsSection = () => {
  const benefits = [
    {
      icon: <Security fontSize="large" className="text-blue-500" />,
      title: 'Secure Payments',
      description: 'We ensure all transactions are safe and secure, protecting both freelancers and clients.',
    },
    {
      icon: <Speed fontSize="large" className="text-green-500" />,
      title: 'Fast Payments',
      description: 'Get paid quickly after completing projects, with minimal delays in the payment process.',
    },
    {
      icon: <ThumbUp fontSize="large" className="text-yellow-500" />,
      title: 'Trusted by Freelancers',
      description: 'Our platform is trusted by thousands of freelancers in Cameroon and around the world.',
    },
  ];

  return (
    <section className="py-16 bg-white max-w-[80%] mx-auto">
      <div className="text-center mb-12">
        <Typography variant="h3" className="text-3xl md:text-4xl font-bold text-primary">
          Why Choose Us?
        </Typography>
        <Typography variant="body1" className="mt-4 text-lg text-gray-700">
          Discover the key benefits of working with us as a freelancer in Cameroon.
        </Typography>
      </div>

      <Grid container spacing={6} justifyContent="center">
        {benefits.map((benefit, index) => (
          <Grid item xs={12} sm={4} key={index}>
            <Card className="shadow-lg rounded-lg">
              <CardContent className="flex flex-col items-center p-8">
                <div className="mb-6">{benefit.icon}</div>
                <Typography variant="h6" className="font-semibold text-xl mb-4 text-primary">
                  {benefit.title}
                </Typography>
                <Typography variant="body2" className="text-gray-600 text-center">
                  {benefit.description}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </section>
  );
};

export default WhyChooseUsSection;
