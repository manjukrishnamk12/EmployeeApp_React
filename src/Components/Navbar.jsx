import { AppBar, Box, Button, Toolbar, Typography } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" style={{backgroundColor:'rgba(147, 126, 223, 0.3)'}}>
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>Employee_App</Typography>
          <Button color="inherit"><Link to={'/'} style={{color: 'white', textDecoration:'none'}}>Home</Link></Button>
          <Button color="inherit"><Link to={'/detail'} style={{color: 'white', textDecoration:'none'}}>Employee_Form</Link></Button>  
        </Toolbar>
      </AppBar>
    </Box>
  )
}

export default Navbar
