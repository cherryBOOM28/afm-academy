import React from 'react';
import logo from './../../assets/images/logo.svg';
import './GamePage.scss';

function GamePage() {
  return (
    <div className="navbar1">
    <div className="left-section">
      <img src={logo} alt="Logo" className="logo" />
    </div>
    <div className="right-section">
      <span className="text">Выйти</span>
    </div>
  </div>
  );
}

export default GamePage;
