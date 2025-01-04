import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import '../App.css'
import { deleteContact, fetchContacts } from '../api';

const Dashboard = () => {
    const[contacts,setContacts]=useState([]);
    const [searchQuery, setSearchQuery] = useState('');
    const navigate=useNavigate();

    const loadContacts = async () => {
        const data = await fetchContacts();
        setContacts(data);
      };

    useEffect(()=>{
        loadContacts();
    },[]);

    const handleDelete=async(id)=>{
        await deleteContact(id);
        loadContacts();
    };
    const filteredContacts = contacts.filter((contact) =>
    contact.Name.toLowerCase().includes(searchQuery.toLowerCase())
    );

    return (
        <div className="dashboard">
          {/* Search bar */}
          <div className="search-bar">
            <input
              type="text"
              placeholder="Search by name..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
    
          {filteredContacts.length === 0 ? (
            <div className="no-contacts">
              <center><h2>No contacts available. <br/>Create one now!</h2></center>
            </div>
          ) : (
            filteredContacts.map((contact) => (
              <div key={contact._id} className="contact">
                <h2>{contact.Name}</h2>
                <p>Email: {contact.Email}</p>
                <p>Phone: {contact.Phone}</p>
                <p>Address: {contact.Address}</p>
                <button onClick={() => navigate(`/edit/${contact._id}`)}>Edit</button>
                <button onClick={() => handleDelete(contact._id)}>Delete</button>
              </div>
            ))
          )}
        </div>
      );
    };
    
    export default Dashboard;
    
    
    