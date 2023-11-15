import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Grid } from '@mui/material';
import './pages.css'

const List = () => {
  const[data, setData]= useState([]);  
  useEffect(()=>{
      axios.get('https://jsonplaceholder.typicode.com/users')
      .then(res=>setData(res.data))    
      .catch(err=>console.log(err))},[]);        
  return (    
    <Grid>
      <Grid>
        <h1 className='contHead' style={{ color: '#E0D8B3' }}>Employee Data</h1>
      </Grid>
      <Grid container>
        <TableContainer component={Paper} align='center' aria-label="simple table" sx={{   margin:'2% 15%', maxHeight:'400px', maxWidth:'70%' }}>
          <Table className='table'>
            <TableHead style={{backgroundColor:'rgba(114, 108, 108,0.6)'}}> 
              <TableRow>
                <TableCell align="center" className='tableCell'>Employee_ID</TableCell>
                <TableCell align="center" className='tableCell'>Employee_Name</TableCell>
                <TableCell align="center" className='tableCell'>Email_ID</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {data.map((val,i) => (
                <TableRow key={i} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                  <TableCell align="center" className='tableCell'>{val.id}</TableCell>
                  <TableCell align="center" className='tableCell'>{val.name}</TableCell>
                  <TableCell align="center" className='tableCell' style={{fontStyle:'italic'}}>{val.email}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Grid>
    </Grid>
    
  )
}

export default List