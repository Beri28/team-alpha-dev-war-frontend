import { Chip, Divider, FormControl, InputLabel, MenuItem, Select } from '@mui/material';
import React, { useEffect, useState } from 'react';

function Filter({category}) {
    const [dateFilter,setDateFilter]=useState('today')
    const [eventFilter,setEventFilter]=useState('all')
    useEffect(()=>{
        setEventFilter(category)
    },[])
    return (
        <div className='sm:max-w-[80%] max-w-[90%] mx-auto mt-6'>
            <div className='flex justify-center sm:flex-nowrap flex-wrap items-center gap-x-5 mb-5'>
                <div className=' flex sm:flex-nowrap flex-wrap justify-center items-center sm:gap-x-3 gap-x-2 gap-y-4 mt-3.5'>
                    <Chip label="Writing & Translation" color='primary' value='all' variant={eventFilter==='all'?'filled':'outlined'} onClick={(e)=>setEventFilter('all')} sx={{p:2.5,borderRadius:'25px'}} />
                    <Chip label="Development & IT" color='success' value='sport' variant={eventFilter==='sport'?'filled':'outlined'} onClick={()=>setEventFilter('sport')} sx={{p:2.5,borderRadius:'25px'}} />
                    <Chip label="Design and creative" color='warning' value='theater' variant={eventFilter==='theater'?'filled':'outlined'} onClick={()=>setEventFilter('theater')} sx={{p:2.5,borderRadius:'25px'}} />
                    <Chip label="Sales and Marketing" color='info' value='concert' variant={eventFilter==='concert'?'filled':'outlined'} onClick={()=>setEventFilter('concert')} sx={{p:2.5,borderRadius:'25px'}} />
                </div>
            </div>
            <div className='flex justify-center sm:flex-nowrap flex-wrap items-center gap-x-5 mb-5'>
                <div className="flex justify-center gap-x-10">
                    <select className="border border-gray-300 rounded p-2">
                        <option>Location</option>
                        <option>Yaoundé</option>
                        <option>Douala</option>
                    </select>
                    <select className="border border-gray-300 rounded p-2">
                        <option>Budget</option>
                    <option>Under $500</option>
                        <option>$500 - $1000</option>
                    </select>
                </div>
            </div>
        </div>
    );
}

export default Filter;