import React from 'react'
import { Typography, Box } from '@mui/material'
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';


const Card = () => {
    return (
        <Box sx={{ display: 'flex', flexDirection: 'column', padding: 1 , }}>

            <Typography variant='subtitle1' component='h1' sx={{ color: 'grey', fontSize: '10px' , marginBottom:2 }} >
                SALES
            </Typography>

            <Box sx={{ display: 'flex', justifyContent: 'space-between', alignContent:'center'}} >
                <Box>
                    <Typography variant='subtiltl2' component="h1" sx={{ fontSize: '20px', marginBottom:2  }} >
                        39495
                    </Typography>
                </Box>
                <Box>
                    <CalendarTodayIcon sx={{ width:30, height:30 ,color:"gray" ,margin:-0.5 }} />
                </Box>
            </Box>

            <Box sx={{display:'flex' , gap:"3px"}} >
                <Typography sx={{fontSize:10}} >$12%</Typography>
                <Typography sx={{fontSize:10}} >22 days</Typography>
            </Box>



        </Box>
    )
}

export default Card