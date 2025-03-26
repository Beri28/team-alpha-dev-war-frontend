import { Star } from '@mui/icons-material';
import { Avatar, Box, Card, CardContent, Typography } from '@mui/material';
import React from 'react';

function UserTestimonial({review}) {
    const getStars=(rating)=>{
        let stars=[]
        for(let i=0;i<rating;i++){
            stars.push(1)
        }
        return stars
    }
    return (
        <Card>
            <CardContent>
                <Box sx={{display:'flex',alignItems:'center',columnGap:'.75em'}}>
                    <Avatar sx={{bgcolor:'orange'}} >{review.userName[0]}</Avatar>
                    <Box>
                        <Typography variant='body2' sx={{fontWeight:'bold'}}>{review.userName}</Typography>
                        <Typography variant='body2' sx={{color:'gray',fontSize:'12px'}}>{review.date}</Typography>
                    </Box>
                </Box>
                <Box sx={{py:2}}>
                    <Typography>{getStars(review.rating).map((star,index)=>(<Star key={index} />))}</Typography>
                    <Typography>{review.body}</Typography>
                </Box>
            </CardContent>
        </Card>
    );
}

export default UserTestimonial;