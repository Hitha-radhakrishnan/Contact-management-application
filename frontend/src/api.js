import axios from 'axios';

const API = axios.create({ 
  baseURL: process.env.REACT_APP_BASE_URL
 });


export const fetchContacts = async () => {
  const response = await API.get('/contact');
  return response.data;
};
export const createContact = async (contactData) => {
  try {
      const response = await API.post('/contact', contactData);
      console.log('Response from server:', response.data);
      return response;
  } catch (error) {
      console.error('Axios error:', error.response?.data || error.message);
      throw error;
  }
};


export const updateContact = async (id, contactData) => {
  return await API.put(`/contact/${id}`, contactData);
};

export const deleteContact = async (id) => {
  return await API.delete(`/contact/${id}`);
};
