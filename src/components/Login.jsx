import React from 'react'
import { Typography, Box, TextField, Checkbox, Grid, Avatar, FormControlLabel, Link, Paper, Button, IconButton } from '@mui/material'
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';

const Login = () => {
    return (
        <Grid container component={"main"} sx={{ height:"100vh" ,justifyContent:'center' ,alignItems:'center' }} columnSpacing={2}>

            <Grid container  sx={{width:'1300px' ,height:'600px'   }} >

           


            < Grid item xs={false} sm={4} md={7} sx={{ backgroundImage: 'url(https://images.unsplash.com/photo-1598198414976-ddb788ec80c1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8bWFuJTIwYmxhY2slMjBhbmQlMjB3aGl0ZXxlbnwwfHwwfHw%3D&w=1000&q=80)', backgroundRepeat: "no-repeat", backgroundSize: 'cover', backgroundPosition: 'center', backgroundColor: 'lightgray' }} />


                <Grid item xs container component={Paper} elevation={6} direction="column " sx={{ padding:'30px'  }}  >
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent:'space-between', padding:15 }} >

                        <div className="title"><h2>SIGN IN</h2></div>
                        <div className="icons" style={{ display: 'flex', gap: '1rem' ,color:'gray' }} >
                            <InstagramIcon />
                            <FacebookIcon />
                            <TwitterIcon />
                        </div>
                    </div>
                    <Grid item  container sx={{gap:'10px'}}  >
                        <div className="user" style={{padding:'10px' }} >
                            <span>UserName</span>
                            <TextField
                                margin='normal'
                                required
                                fullWidth
                                id='text'
                                label="Username"
                                name='UserName'
                                autoFocus
                                sx={{marginBottom:'20px'}}

                            />
                            <span>Password</span>
                            <TextField
                                margin='normal'
                                required
                                fullWidth
                                id='Password'
                                label="Password"
                                name='Password'
                                autoFocus
                                autoComplete='current-password'

                            />
                        </div>
                        <Button
                          fullWidth
                          type='sumbmit'
                          variant='contained'
                          sx={{mt:1,mb:2 ,padding:'15px' ,backgroundColor:'#FFDE2E',":hover":{backgroundColor:'#D1B000'} }}
                        >SIGN IN</Button>
                        <Grid container  sx={{justifyContent:"space-between" ,alignItems:'center'}} >
                            <Grid item sx={{fontWeight:600 ,color:'#FFDE2E'}}>
                              <Checkbox style={{color:'#D1B000'}} />
                              Remember Me
                            </Grid>
                            <Grid item >
                             <Link  href='#' variant='body2' sx={{textDecoration:'none' ,color:'black' , fontWeight:300 }} >
                              Forget Password
                             </Link>
                            </Grid>

                        </Grid>
                        <Grid container sx={{ justifyContent:'center' ,padding:'1rem',fontWeight:300}} > 
                            <span>Not a member ? </span>
                         <Link 
                          href='#'variant='body2'
                         
                         sx={{textDecoration:'none' ,cursor:'pointer' ,color:'#FFDE2E',fontWeight:600}}>
                         Sign UP
                         </Link>
                        </Grid>

                    </Grid>
                </Grid>
                </Grid>

        </Grid>
    )
}

export default Login