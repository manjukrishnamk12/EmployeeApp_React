import { Button, Grid, Paper, TextField } from '@mui/material'
import React from 'react'
// import { Link } from 'react-router-dom'
import './pages.css'

const Form = () => {
  return (    
      <Grid container textAlign={'center'} justifyContent="center" marginTop={'4%'}>
        <Paper style={{maxWidth:'600px', padding:'0% 3.5% 4.5% 3.5%', width:'100%'}}>      
          <Grid><h1 className='formHead'>Employee Form</h1></Grid>
          <TextField id="outlined-basic" label="Name" variant="outlined" fullWidth/><br /><br />
          <TextField id="outlined-basic" label="Designation" variant="outlined" fullWidth/><br /><br />
          <TextField id="outlined-basic" label="Location" variant="outlined" fullWidth/><br /><br />
          <TextField id="outlined-basic" label="Salary" variant="outlined" fullWidth/><br /><br />
            <Button variant="contained" style={{ width: '300px', margin: 'auto' }}>SUBMIT</Button><br /><br />
        </Paper>
      </Grid>
  )
}

export default Form
