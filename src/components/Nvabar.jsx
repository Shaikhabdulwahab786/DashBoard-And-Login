import React from 'react';
import { styled, alpha, } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import InputBase from '@mui/material/InputBase';
import Badge from '@mui/material/Badge';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import AccountCircle from '@mui/icons-material/AccountCircle';
import Slider from './Slider';
import MailIcon from '@mui/icons-material/Mail';
import NotificationsIcon from '@mui/icons-material/Notifications';
import MoreIcon from '@mui/icons-material/MoreVert';




const Search = styled('div')(({ theme }) => ({
    position: 'relative',
    borderRadius: '20px',
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    '&:hover': {
        backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
        marginLeft: theme.spacing(0),
        width: 'auto',
    },
}));


const SearchIconWrapper = styled('div')(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
}));
const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: 'inherit',
    '& .MuiInputBase-input': {
        padding: theme.spacing(1, 1, 1, 0),
        // vertical padding + font size from searchIcon
        paddingLeft: `calc(1em + ${theme.spacing(4)})`,
        transition: theme.transitions.create('width'),
        width: '100%',
        // outline: none,

        [theme.breakpoints.up('lg')]: {
            width: '40ch',
        },
    },
}));
 



const Nvabar = () => {
     

    return (
        <Box >

            <AppBar position="fixed" variant={2}  sx={{zIndex: (theme) => theme.zIndex.drawer + 1 , backgroundColor:'white' ,color:'black' }} >
         
                <Toolbar >
                    <Box>
                        <Typography padding={2} variant='subhead1' component={'h2'} >
                            RoyalUI
                        </Typography>
                        
                    </Box>

                    <IconButton
                        size="large"
                        edge="start"
                        color="inherit"
                        aria-label="menu"
                        sx={{ ml:  12 }}
                    > <MenuIcon />
                    </IconButton>

                    <Search >
                        <SearchIconWrapper>
                            <SearchIcon />
                        </SearchIconWrapper>
                        <StyledInputBase
                            placeholder='Search...'
                            inputProps={{ 'aria-label': "search" }}
                            style={{ outline: 'none' }}
                        /> </Search>

                    <Box sx={{ marginLeft: 'auto', display: 'flex', gap: '20px', alignItems: 'center' }}>
                        <IconButton
                            size="large"
                            edge="start"
                            color="inherit"
                            aria-label="menu"
                            sx={{ mr: 1 }}
                        >
                            <Badge badgeContent={""} color='primary' variant='dot' >
                                <MailIcon />
                            </Badge>
                        </IconButton>
                        <IconButton
                            size="large"
                            edge="start"
                            color="inherit"
                            aria-label="menu"
                            sx={{ mr: 1 }} >
                            <Badge badgeContent={""} color='primary' variant='dot' >
                                <NotificationsIcon />
                            </Badge>
                        </IconButton>
                        <img src="https://w7.pngwing.com/pngs/81/570/png-transparent-profile-logo-computer-icons-user-user-blue-heroes-logo-thumbnail.png" alt="user" style={{ width: 25, height: 25, borderRadius: '50%', cursor: 'pointer' }} />

                    </Box>
                    
                </Toolbar>
               
            </AppBar>
            
        </Box>
    )
}

export default Nvabar