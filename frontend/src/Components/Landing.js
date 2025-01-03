import React from 'react'
import { useNavigate } from 'react-router-dom'


const Landing = () => {
    const navigate=useNavigate();
  return (
    <div className='landing'>
        <div className='text'>
       <h1>Welcome to Contax</h1>
       <p>Your one-stop solution for managing contacts effortlessly.</p>
        <button className='create-btn' onClick={()=>navigate('/create')}>
            CREATE
            </button>
            </div>
        </div>
  );
};

export default Landing