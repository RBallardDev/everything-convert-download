import React, { useState, useEffect } from 'react';
import axios from 'axios';

const ApiTest = () => {
  const [message, setMessage] = useState('');

  useEffect(() => {
    axios.get('http://127.0.0.1:5000/test')
      .then(response => {
        setMessage(response.data.message); // Access the 'message' field from the JSON response
      })
      .catch(error => {
        console.error('There was an error making the request:', error);
      });
  }, []);

  return (
    <div>
      <h1>Flask API Message</h1>
      <p>{message}</p>
    </div>
  );
};

export default ApiTest;
