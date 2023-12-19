import React from 'react'
import Box from '@mui/material/Box';
import './myearnings.css';
import mony from  '../Form/images/mony-logo.jpg';

function MyEarnings() {
  return (
    <>
    <Box height={100} />

    <div className="grid-container">
    <div class="grid-item">
    <img src={mony} alt="mony-logo.jpg" className="circular-image" />
    <p class="name">Today Earnings</p>
    <p class="date">Dec 19 2023</p>
</div>
      <div className="grid-item">
      <img src={mony} alt="mony-logo.jpg" className="circular-image" />
        <p className="name">Total Earnings</p>
        <p class="date">Dec 19 2023</p>
        
      </div>
    </div>
     
    
    </>
  )
}

export default MyEarnings;