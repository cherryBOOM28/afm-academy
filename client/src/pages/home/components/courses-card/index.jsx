import React from 'react';
import './style.css';

const Card = ({ name, imageSrc }) => {
  return (
    <div className="card">
      <img src={imageSrc} alt={name} className="card-img" />
      <div className="card-overlay"></div>
      <div className="card-name">{name}</div>
      <button className="card-button">Подробнее</button>
    </div>
  );
};

export default Card;
