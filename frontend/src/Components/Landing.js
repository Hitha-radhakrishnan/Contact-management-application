import React from 'react'
import { useNavigate } from 'react-router-dom'
import image1 from '../assets/img1.jpg'
import image2 from '../assets/img2.jpg'

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
        {/* <div className="images">
                <img src={image1} alt="Image 1" className="image" />
                <img src={image2} alt="Image 2" className="image" />
            </div> */}
        </div>
  );
};

export default Landing