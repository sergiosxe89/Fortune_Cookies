import React from 'react';
import './RandomButton.css';

function RandomButton({ onClick }) {
  return (
    <button className="fortune-cookie-button" onClick={onClick}>
      Abrir Galleta de la Fortuna
    </button>
  );
}

export default RandomButton;