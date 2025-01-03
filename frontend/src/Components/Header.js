import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import '../App.css';

const Header = () => {
  const navigate = useNavigate();

  const handleHomeClick = () => {
    navigate('/'); // Navigate to the home page
    window.location.reload(); // Refresh the page to reload the content
  };

  return (
    <div>
      <header>
        <nav>
          <h1>CONTAX</h1>
          <button className="home-button" onClick={handleHomeClick}>HOME</button>
          <Link to="/dashboard">ALL CONTACTS</Link>
        </nav>
      </header>
    </div>
  );
};

export default Header;
