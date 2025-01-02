import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { createContact } from '../api';
import '../App.css'

const Create = () => {
  const [contact, setContact] = useState({ Name: '', Email: '', Phone: '', Address: '' });
    const navigate=useNavigate();

    const handleSubmit=async(e)=>{
        e.preventDefault();
        try{
          const response = await createContact(contact);
        console.log('Contact created successfully:',response.data);
        navigate('/');
        }
        catch(error){
          console.error('Error creating contact:', error.response?.data || error.message);
        }
    };
  return (
    <form onSubmit={handleSubmit}>
        <h2>Create Contact</h2>

        <input type="text" placeholder='Name' value={contact.Name} 
        onChange={(e)=>setContact({...contact,Name:e.target.value})} required/>

        <input type="email" placeholder='Email' value={contact.Email} 
        onChange={(e)=>setContact({...contact,Email:e.target.value})} required/>

        <input type="text" placeholder='Phone' value={contact.Phone} 
        onChange={(e)=>setContact({...contact,Phone:e.target.value})} required/>

        <textarea placeholder='Address' value={contact.Address} 
        onChange={(e)=>setContact({...contact,Address:e.target.value})} required/>

        <button type='submit'>Submit</button>
    </form>

  )
}

export default Create