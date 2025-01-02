import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import '../App.css'
import { deleteContact, fetchContacts } from '../api';

const Dashboard = () => {
    const[contacts,setContacts]=useState([]);
    const navigate=useNavigate();

    const loadContacts = async () => {
        const data = await fetchContacts();
        setContacts(data);
      };

    useEffect(()=>{
        loadContacts();
    },[]);

    const handledelete=async(id)=>{
        await deleteContact(id);
        loadContacts();
    };

  return (
    <div className='dashboard'>
        {contacts.length===0 ? (
            <div className='no-contacts'>
            <p>No contacts available. Create one now!</p>
            
            </div>
        ):(
            contacts.map((contact)=>(
                <div key={contact._id} className='contact'>
                <h2>{contact.Name}</h2>
                <p>Email:{contact.Email}</p>
                <p>Phone:{contact.Phone}</p>
                <p>Address:{contact.Address}</p>
                <button onClick={()=>navigate(`/edit/${contact._id}`)}>Edit</button>
                <button onClick={()=>handledelete(contact._id)}>Delete</button>
                </div>
            ))
        )}
    </div>
  )
}

export default Dashboard