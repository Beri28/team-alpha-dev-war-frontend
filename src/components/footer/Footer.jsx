import { Copyright, Facebook, Instagram, Twitter } from '@mui/icons-material';
import React from 'react';
import { Link } from 'react-router-dom';

function Footer(props) {
    return (
        <div className='py-4 bg-[#29292b]'>
            <div className='max-w-[80%] mx-auto flex justify-between gap-3 text-white py-5'>
                <div>
                <p className='text-2xl font-extrabold'><Link to="/"><span className='text-green-700'>Ya</span>hustle</Link></p>
                </div>
                <div>
                    <ul className='list-none flex flex-col gap-y-5  cursor-pointer'>
                        <li><Link to="/about"> About Us</Link></li>
                        <li><Link to="/contact">Contact Us</Link></li>
                        <li><Link to="/create_event">Hire</Link></li>
                    </ul>
                </div>
                <div>
                    <ul className='list-none flex flex-col gap-y-5  cursor-pointer'>
                        <li><Facebook /> Wokanda</li>
                        <li><Instagram /> @wokanda </li>
                        <li><Twitter /> @wokanda </li>
                    </ul>
                </div>
            </div>
            <hr className='border-white' />
            <p className='text-white text-center pt-2'><Copyright /> Wokanda 2025. All rights reserved</p>
        </div>
    );
}

export default Footer;