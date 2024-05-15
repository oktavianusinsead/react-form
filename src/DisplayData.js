// src/DisplayData.js
import React from 'react';
import { useLocation, useHistory } from 'react-router-dom';
import './DisplayData.css';

const DisplayData = () => {
  const location = useLocation();
  const history = useHistory();
  const { formData } = location.state;

  const handleBack = () => {
    history.push('/');
  };

  return (
    <div className="container">
      <h1>Submitted Data</h1>
      <div className="data-group">
        <label>Name:</label>
        <span>{formData.name}</span>
      </div>
      <div className="data-group">
        <label>Email:</label>
        <span>{formData.email}</span>
      </div>
      <div className="data-group">
        <label>Phone:</label>
        <span>{formData.phone}</span>
      </div>
      <div className="data-group">
        <label>Password:</label>
        <span>{formData.password}</span>
      </div>
      <div className="data-group">
        <label>Confirm Password:</label>
        <span>{formData.confirmPassword}</span>
      </div>
      <div className="data-group">
        <label>Age:</label>
        <span>{formData.age}</span>
      </div>
      <button onClick={handleBack}>Back to Form</button>
    </div>
  );
};

export default DisplayData;
