// LupaZone.js
import React, { useState } from 'react';
import './LupaZone.scss'
import Lupa from './index.jsx';
import parseText from '../../../../util/ParseTextFromFormatTextarea.js';

const LupaZone = ({ options, correctOptions, imgUrl, Width, Height, another, img, version=1 }) => {
  const [selectedOptions, setSelectedOptions] = useState([]);
  const [showResults, setShowResults] = useState(false);

  const handleDragStart = (e, option) => {
    e.dataTransfer.setData('text/plain', option);
  };

  const handleDrop = (e) => {
    e.preventDefault();
    const option = e.dataTransfer.getData('text/plain');

    // Проверяем, чтобы выбранные ответы были не более двух
    if (selectedOptions.length < 3) {
      setSelectedOptions([...selectedOptions, option]);
    }
  };

  const handleDragOver = (e) => {
    e.preventDefault();
  };

  const handleTryAgain = () => {
    setSelectedOptions([]);
    setShowResults(false);
  };

  const isCorrectAns = correctOptions.every((option) => selectedOptions.includes(option));
  const isIncorrectSelectionAns = selectedOptions.some((option) => !correctOptions.includes(option));

  return (
    <div>
      <div className="options-container">
        <div className="options">
          {options.map((option, index) => (
            <Lupa version={version} key={index} option={option} onDragStart={handleDragStart} />
          ))}
        </div>
        <b className='B'></b>
        
        <div className='dropZoneParent'>
          <div
            className={`drop-zone ${isCorrectAns ? 'correct-lupa' : isIncorrectSelectionAns ? 'incorrect-lupa' : ''}`}
            onDrop={handleDrop}
            onDragOver={handleDragOver}
            style={{ backgroundImage: `url(${imgUrl || img})`, width: Width, height: Height }}
          >
            {isCorrectAns && another === 'true' && <span className="check-mark">✔</span>}
            <br />
            <ul>
              {selectedOptions.map((option, index) => (
                <li key={index}>{parseText(option)}</li>
              ))}
            </ul>
          </div>
          <button className="BtnRetry" onClick={handleTryAgain}>
           Попробовать еще раз
           </button>
        </div>
        
      </div>
      <div className="selected-options"></div>
      {showResults && (
        <div className="results-message">
          {isCorrectAns ? 'Правильно!' : 'Попробуйте еще раз, выбрав правильные ответы.'}
        </div>
      )}
      
    </div>
  );
};

export default LupaZone;