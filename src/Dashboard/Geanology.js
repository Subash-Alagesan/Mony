import React, { useState } from 'react';
import Box from '@mui/material/Box';
import './geanology.css';
import Adduser from './Adduser';
import Dialog from '@mui/material/Dialog';

function Geanology() {


  const [formData, setFormData] = useState({
    email: '',
    name: '',
    mobileNo: '',
    sponsor: ''
  });

  const [open, setOpen] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // You can perform actions with formData here, such as sending it to an API or displaying it.
    console.log(formData);
  };


  return (
    <>
    <Box height={100} />
    
 <div className="card" style={{ textAlign: 'right', padding: '20px' ,height:'35vh',width:'40%',marginLeft:'250px',border:'1px solid black'}}>
      
      <form onSubmit={handleSubmit} className='form-geo'>
      <h2 className='h2-tag'>Geanology Tree</h2>
        <div>
          <label htmlFor="username">Username:</label>
          <input
          className="geo-input"
            type="text"
            id="username"
            name="username"
            value={formData.username}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="name">Name:</label>
          <input
          className="geo-input"
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="mobileNo">Mobile Number:</label>
          <input
          className="geo-input"
            type="text"
            id="mobileNo"
            name="mobileNo"
            value={formData.mobileNo}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="sponsor">Sponsor:</label>
          <input
          className="geo-input"
            type="text"
            id="sponsor"
            name="sponsor"
            value={formData.sponsor}
            onChange={handleChange}
          />
        </div>
        <button className='adduser-btn' onClick={() => setOpen(true)}>Add User</button>
      </form>
    </div>
    
    <Dialog open={open} onClose={() => setOpen(false)} className='dialog-box'>
<Adduser />
    </Dialog>

      
    </>
   
  )
}

export default Geanology;