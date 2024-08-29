import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../App.css'; //

function Back() {
  const navigate = useNavigate();

  const handleBackClick = () => {
    navigate(-1);
  };

  return (
    <button className="back-button" onClick={handleBackClick}>
      ⬅ Back
    </button>
  );
}

export default Back;
