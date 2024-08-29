import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../App.css';
import icon_home from '../images/home.png';

function Logo() {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/');
  };

  return (
    <>
      <div className="logo">
        <button className="home-button" onClick={handleClick}>
          <img src={icon_home} alt="this is icon" />
        </button>
        <button className="logo-button" onClick={handleClick}>
          Challenges.js
        </button>
      </div>
    </>
  );
}

export default Logo;
