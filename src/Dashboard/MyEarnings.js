import React from 'react'
import Box from '@mui/material/Box';
import './myearnings.css';
import { Grid, Avatar } from '@mui/material';

function MyEarnings() {
  return (
    <>
    <Box height={100} />

    <Grid container spacing={2}  className='grid-container'>

    
    <Grid item xs={12} sm={12} md={4} lg={4} className='grid-main1'>
      <div style={{ textAlign: 'center' ,alignItems:'center' , marginLeft:'80px'}}>
       
        <Avatar
          alt="Circular Image"
          src="https://example.com/your-image.jpg" 
          sx={{ width: 80, height: 80 }}
        />
      </div>
      <p style={{ textAlign: 'center' ,marginTop:"10px" ,color:'white'}}>
        Today Earnings
      </p>
    </Grid>
      <Grid item xs={12} sm={12} md={4} lg={4}  className='grid-main2'>
       
      <div style={{ textAlign: 'center' ,alignItems:'center' , marginLeft:'80px'}}>
       
       <Avatar
         alt="Circular Image"
         src="https://example.com/your-image.jpg" 
         sx={{ width: 80, height: 80 }}
       />
     </div>
     <p style={{ textAlign: 'center' ,marginTop:"10px" ,color:'white'}}>
       Total Earnings
     </p> 
        
      </Grid>
      <Grid item xs={12} sm={12} md={4} lg={4}  className='grid-main3'>
       
      <div style={{ textAlign: 'center' ,alignItems:'center' , marginLeft:'80px'}}>
       
       <Avatar
         alt="Circular Image"
         src="https://example.com/your-image.jpg" 
         sx={{ width: 80, height: 80 }}
       />
     </div>
     <p style={{ textAlign: 'center' ,marginTop:"10px" ,color:'white'}}>
       Available Earnings
     </p>
        
      </Grid>

      </Grid>
    
    </>
  )
}

export default MyEarnings;