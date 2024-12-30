import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import '../App.css'

const Create = () => {
    const[name,setName]=useState('');
    const[email,setEmail]=useState('');
    const[phone,setPhone]=useState('');
    const[address,setAddress]=useState('');
    const navigate=useNavigate();
    const handleSubmit=async(e)=>{
        e.preventDefault();
        await Create({Name:name,Email:email,Phone:phone,Address:address});
        navigate('/');
    }
  return (
    <form onSubmit={handleSubmit}>
        <h2>Create Contact</h2>

        <input type="text" placeholder='Name' value={name} 
        onChange={(e)=>setName(e.target.value)} required/>

        <input type="email" placeholder='Email' value={email} 
        onChange={(e)=>setEmail(e.target.value)} required/>

        <input type="text" placeholder='Phone' value={phone} 
        onChange={(e)=>setPhone(e.target.value)} required/>

        <textarea placeholder='Address' value={address} 
        onChange={(e)=>setAddress(e.target.value)} required/>

        <button type='submit'>Create</button>
    </form>

  )
}

export default Create