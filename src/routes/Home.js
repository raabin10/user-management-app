// src/routes/Home.js
import React from 'react';
import Users from '../components/Users';

const Home = () => {
  return (
    <div>
      <h1 style={{ textAlign: 'center', padding: '20px' }}>Home</h1>
      <Users /> 
    </div>
  );
}; 

export default Home;