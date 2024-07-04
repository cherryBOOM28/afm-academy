import React from 'react';
import { useNavigate } from 'react-router';
import './style.css';

const Card = ({ name, imageSrc, courseId }) => {
  const navigate = useNavigate();

  function handleNavigate() {
    navigate(`/courses/${courseId}`)
  }
  return (
    <div className="card">
      <img src={imageSrc} alt={name} className="card-img" />
      <div className="card-overlay"></div>
      <div className="card-name">{name}</div>
      <button className="card-button" onClick={handleNavigate}>Подробнее</button>
    </div>
  );
};

export default Card;
