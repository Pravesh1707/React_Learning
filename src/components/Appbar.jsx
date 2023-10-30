import { AppBar, Button, IconButton, Toolbar, Typography } from '@mui/material'
// import MenuIcon from "@mui/icons-matrial/MenuIcon";
// import MenuIcon from '@mui/material/MenuIcon';
import React from 'react'

const Appbar = () => {
  return (
    <div>
      <AppBar position='static'>
        <Toolbar>
            <IconButton edge="start" color="inherit" aria-label='menu'>
                {/* <MenuIcon/> */}
            </IconButton>
            <Typography variant='h6' component="div" sx={{flexGrow:1}}>
                Pravesh Kumar
            </Typography>
            <Button color='inherit'>Login</Button>
        </Toolbar>
      </AppBar>
    </div>
  )
}

export default Appbar
