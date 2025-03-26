import { Chip, Divider, FormControl, InputLabel, MenuItem, Select } from '@mui/material';
import React, { useState } from 'react';

function Filter() {
    const [dateFilter,setDateFilter]=useState('today')
    const [eventFilter,setEventFilter]=useState('all')
    return (
        <div className='sm:max-w-[80%] max-w-[90%] mx-auto mt-6'>
            <div className='flex justify-center sm:flex-nowrap flex-wrap items-center gap-x-5'>
                {/* <FormControl sx={{width:'40%'}}>
                    <InputLabel id="" >Date</InputLabel>
                    <Select
                        label='Date'
                        value={dateFilter}
                        sx={{borderRaduis:'25px'}}
                    >
                        <MenuItem onClick={()=>setDateFilter('allDates')} value="allDates">A</MenuItem>
                        <MenuItem onClick={()=>setDateFilter('today')} value="today">Today</MenuItem>
                        <MenuItem onClick={()=>setDateFilter('thisWeek')} value="thisWeek">This Week</MenuItem>
                        <MenuItem onClick={()=>setDateFilter('nextWeek')} value="nextWeek">Next Week</MenuItem>
                        <MenuItem onClick={()=>setDateFilter('thisMonth')} value="thisMonth">This Month</MenuItem>
                        <MenuItem onClick={()=>setDateFilter('nextmonth')} value="nextmonth">Next Month</MenuItem>
                    </Select>
                </FormControl> */}
                {/* <Divider orientation='vertical' sx={{display:{sm:'flex',xs:'none'}}} flexItem /> */}
                <div className=' flex sm:flex-nowrap flex-wrap justify-center items-center sm:gap-x-3 gap-x-2 gap-y-4 mt-3.5'>
                    <Chip label="Writing & Translation" color='primary' value='all' variant={eventFilter==='all'?'filled':'outlined'} onClick={(e)=>setEventFilter('all')} sx={{p:2.5,borderRadius:'25px'}} />
                    <Chip label="Development & IT" color='success' value='sport' variant={eventFilter==='sport'?'filled':'outlined'} onClick={()=>setEventFilter('sport')} sx={{p:2.5,borderRadius:'25px'}} />
                    <Chip label="Design and creative" color='warning' value='theater' variant={eventFilter==='theater'?'filled':'outlined'} onClick={()=>setEventFilter('theater')} sx={{p:2.5,borderRadius:'25px'}} />
                    <Chip label="Sales and Marketing" color='info' value='concert' variant={eventFilter==='concert'?'filled':'outlined'} onClick={()=>setEventFilter('concert')} sx={{p:2.5,borderRadius:'25px'}} />
                    {/* <Chip label="Seminars" color='secondary' value='seminar' variant={eventFilter==='seminar'?'filled':'outlined'} onClick={()=>setEventFilter('seminar')} sx={{p:2.5,borderRadius:'25px'}} /> */}
                </div>
            </div>
        </div>
    );
}

export default Filter;