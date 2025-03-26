import { Box, Button, FormControl, Input, TextField, Typography } from '@mui/material';
import React, { useState } from 'react';
import img from '../../../../Assets/flyer6.jpeg'

function NewsLetter(props) {
    const [subscriberEmail,setSubscriberEmail]=useState('')
    return (
        <Box className='bg-gray-50 pb-8 relative'>
            <img src={img} className='absolute top-0 left-[10%] w-[100px] rotate-45 sm:flex hidden' alt='image' />
            <img src={img} className='absolute top-0 left-[13%] w-[100px] rotate-45 sm:flex hidden' alt='image' />
            <Box className='sm:max-w-[80%] max-w-[90%] mx-auto'>
                <p className='text-3xl font-bold pt-8 pb-2 text-center font-[cursive]'>Stay Updated</p>
                <p className='text-md text-center mb-2'>Be the first to know about upcoming events and exclusive discount</p>
                <Box sx={{display:'flex',alignItems:'center',justifyContent:'center',columnGap:'.5em'}}>
                    <Input
                        name='email'
                        placeholder='Enter email'
                        className='border border-gray-400 px-5 mb-0 text-center rounded-sm'
                        value={subscriberEmail}
                        onChange={(e)=>{setSubscriberEmail(e.target.value)}}
                        type='email'
                    />
                    <Button variant='outlined' className='rounded-full'>Subscribe</Button>
                </Box>
            </Box>
        </Box>
    );
}

export default NewsLetter;