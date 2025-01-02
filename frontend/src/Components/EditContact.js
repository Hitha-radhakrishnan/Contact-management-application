import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { fetchContacts,updateContact } from '../api';

const EditContact = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [contact, setContact] = useState({
    Name: '',
    Email: '',
    Phone: '',
    Address: '',
  });

  useEffect(() => {
    const getContact = async () => {
      const data = await fetchContacts();
      setContact(data);
    };
    getContact();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    await updateContact(id, contact);
    navigate('/');
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Edit Contact</h2>
      <input
        type="text"
        placeholder="Name"
        value={contact.Name}
        onChange={(e) => setContact({ ...contact, Name: e.target.value })}
        required
      />
      <input
        type="email"
        placeholder="Email"
        value={contact.Email}
        onChange={(e) => setContact({ ...contact, Email: e.target.value })}
        required
      />
      <input
        type="text"
        placeholder="Phone"
        value={contact.Phone}
        onChange={(e) => setContact({ ...contact, Phone: e.target.value })}
        required
      />
      <textarea
        placeholder="Address"
        value={contact.Address}
        onChange={(e) => setContact({ ...contact, Address: e.target.value })}
        required
      />
      <button type="submit">Update</button>
    </form>
  );
};

export default EditContact;
