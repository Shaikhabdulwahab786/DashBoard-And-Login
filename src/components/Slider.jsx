import React,{useState} from 'react'
import { Typography, Box } from '@mui/material'
import Drawer from '@mui/material/Drawer';
import { List, ListItem, ListItemText ,Link } from '@mui/material';

const Slider = () => {
  const list = ["DashBoard", "formElement", "Charts", 'icons', "Table", "UserPage", "Documentaions"]
   const [open, setopen] = useState(false)
  return (
    <Box sx={{display:'flex'}} >
      <Drawer
         elevation={0}
        variant='permanent'
        anchor='left'
          sx={{
            width: 240,
            flexShrink: 0,
            '& .MuiDrawer-paper': {
              width: 240,
              boxSizing: 'border-box',
              backgroundColor:'lightgrey'
            },
          }}
          onClose={open}
        
      >
        <Box sx={{  overflow:'auto' , width: '160px', display: 'flex', alignItems: 'center', justifyContent:'center', flexDirection: 'column' , marginTop:'80px' }} >

          <List>
            {list.map((text) => (
              <ListItem  >
                <Link href='#' sx={{color:'grey' ,textDecoration:'none' ,":hover":{
                  color:"black"
                  ,
                } }} >
                <ListItemText primary={text} />
                </Link>
              </ListItem>
            ))}
          </List>
        </Box>
      </Drawer>
    </Box>
  )
}

export default Slider