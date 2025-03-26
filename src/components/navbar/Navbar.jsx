import { Close, Search } from '@mui/icons-material';
import MenuIcon from '@mui/icons-material/Menu'
import { Avatar, Box, Button, Divider, FormControl, Input, MenuItem, Stack} from '@mui/material';
import React, { useContext, useState } from 'react';
import './navbar.css'
import {  useAuth } from '../../context/authContext';
import { Link } from 'react-router-dom';
// import Cart from '../cart/Cart';

function Navbar() {
    const {currentUser}=useAuth()
    const [search,setSearch]=useState('')
    const [open,setOpen]=useState(false)
    const handleMenuClose=()=>{

    }
    const MenuCustom=()=>{
        return (
            <Box sx={{position:'absolute',top:'3em',right:'9.7em'}}>
                <Stack className='bg-gray-50' sx={{borderRadius:'5px',position:'absolute',p:2}} >
                    <MenuItem><Link to="/add">Add service</Link></MenuItem>
                    <Divider />
                    <MenuItem><Link to="/hire">Coming soon</Link></MenuItem>
                    <Divider />
                    <MenuItem><Link to="/profile">Profile</Link></MenuItem>
                </Stack>
            </Box>
        )
    }
    const MenuCustom2=()=>{
        return (
            <Box sx={{position:'absolute',top:'3em',right:'9.7em'}}>
                <Stack className='bg-gray-50' sx={{borderRadius:'5px',position:'absolute',p:2}} >
                    <MenuItem>
                        <Link to="/hire">Hire</Link>
                    </MenuItem>
                    <Divider />
                    <MenuItem>
                        <Link to="/contact">Contact U</Link>
                    </MenuItem>
                    <Divider />
                    <MenuItem>
                        <Link to="/about">About Us</Link>
                    </MenuItem>
                    <Divider />
                    <MenuItem>
                        <Link to="/login">
                            <Button variant='outlined'>login</Button>
                        </Link>
                    </MenuItem>
                </Stack>
            </Box>
        )
    }
    return (
        <div className='py-4 sticky w-full bg-white z-50 top-0'>
            <div className='max-w-[80%] flex mx-auto justify-between items-center'>
                <div className='logo max-w-[15%]'>
                    <p className='text-2xl font-extrabold'><Link to="/"><span className='text-green-700'>Ya</span>hustle</Link></p>
                </div>
                {currentUser.isAuthenticated?
                <div className='max-w-[70%] w-[100%] sm:flex hidden justify-end items-center gap-x-8'>
                    <FormControl sx={{display:{md:'flex',sm:'none'}}} className='relative'>
                        <Input
                            name='search'
                            placeholder='Search event'
                            className='border rounded-full border-gray-400 px-5 pl-8 mb-0 text-center '
                            value={search}
                            onChange={(e)=>{setSearch(e.target.value)}}
                        />
                        <Search className='absolute top-2 left-3' fontSize='12px' color='disabled' />
                    </FormControl>
                    {/* <Cart newItem={""} /> */}
                    <div className='flex items-center gap-x-3 relative'>
                        <Avatar>{currentUser.username[0]}</Avatar>
                        <Button variant='outlined' sx={{color:'black',borderColor:'black!important'}}
                            onClick={()=>setOpen(!open)}
                        >
                            {open?<Close /> :<MenuIcon />}
                        </Button>
                        {open && <MenuCustom />}
                    </div>
                </div>
                :
                <div className='max-w-[70%] w-[100%] sm:flex hidden justify-between items-center gap-x-8'>
                    <ul className='list-none flex items-center gap-x-10 links cursor-pointer'>
                        <li><Link to="/about"> About Us</Link></li>
                        <li><Link to="/contact">Contact Us</Link></li>
                        <li><Link to="/hire">Hire</Link></li>
                    </ul>
                    <FormControl sx={{display:{md:'flex',sm:'none'}}} className='relative'>
                        <Input
                            name='search'
                            placeholder='Search service'
                            className='border rounded-full border-gray-400 px-5 pl-8 mb-0 text-center '
                            value={search}
                            onChange={(e)=>{setSearch(e.target.value)}}
                        />
                        <Search className='absolute top-2 left-3' fontSize='12px' color='disabled' />
                    </FormControl>
                    {/* <Cart newItem={""} /> */}
                    {/* <Link to="/login"><Button variant='outlined'>login</Button></Link> */}
                </div>
                }
                <div className='sm:hidden flex items-center gap-x-3 relative'>
                    {currentUser.isAuthenticated?
                        <div className='flex items-center gap-x-3'>
                            {/* <Cart newItem={""} /> */}
                            <Avatar>{currentUser.username[0]}</Avatar>
                            <Button variant='outlined' sx={{color:'black',borderColor:'black!important'}}
                                onClick={()=>setOpen(!open)}
                            >
                                {open?<Close /> :<MenuIcon />}
                            </Button>
                            {open && <MenuCustom />}
                        </div>
                        :
                        <div className='flex items-center gap-x-4'>
                            {/* <Cart newItem={""} /> */}
                            <Button variant='outlined' sx={{color:'black',borderColor:'black!important'}}
                                onClick={()=>setOpen(!open)}
                            >
                                {open?<Close /> :<MenuIcon />}
                            </Button>
                            {open && <MenuCustom2 />}
                        </div>
                    }
                    
                </div>
            </div>
        </div>
    );
}

export default Navbar;