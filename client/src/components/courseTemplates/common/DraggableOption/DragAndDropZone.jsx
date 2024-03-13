// DragAndDropZone.js
import React, { useState } from 'react';
import DraggableOption from './index';
import './DragAndDropZone.scss';

const DragAndDropZone = ({options, correctOptions, title, img=null}) => {
  
  const [selectedOptions, setSelectedOptions] = useState([]);
  const [showResults, setShowResults] = useState(false);

  const handleDragStart = (e, option) => {
    e.dataTransfer.setData('text/plain', option);
  };

  const handleDrop = (e) => {
    e.preventDefault();
    const option = e.dataTransfer.getData('text/plain');

    // Проверяем, чтобы выбранные ответы были не более двух
    if (selectedOptions.length < correctOptions.length) {
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

  const isCorrect = correctOptions.every((option) => selectedOptions.includes(option));
  const isIncorrectSelection = selectedOptions.some((option) => !correctOptions.includes(option));
  const isTitleLong = title.length > 30;
  return (
    <div>
      <div className="options-container">
        <div className="options">
          
          <div className='optionsWrapper'>
            {options.map((option, index) => (
                <DraggableOption key={index} option={option} onDragStart={handleDragStart} />
            ))}
          </div>
        </div>
        <div className="separator"></div>
        <div className='DraggableOptionZone'>
        <div className='DragZoneWrapper'>
          <b className={`DragTitle ${isTitleLong ? 'small' : ''}`}>{title}</b>
          <div
              className={`drop-area ${isCorrect ? 'theCorrect' : isIncorrectSelection ? 'theIncorrect' : ''}`}
              onDrop={handleDrop}
              onDragOver={handleDragOver}
              style={{ backgroundImage: `url(${img})` }}
          >
            <p>Перетащите ответы внутрь квадрата:</p>
            <br/>
            <ul>
              {selectedOptions.map((option, index) => (
                  <li key={index}>{option}</li>
              ))}
            </ul>

          </div>
          <button className="Btn" onClick={handleTryAgain}>Попробовать еще раз</button>

        </div>
        </div>
      </div>
      <div className="selected-options">
        
        
      </div>
      {showResults && (
        <div className="results-message">
          {isCorrect ? 'Правильно!' : 'Попробуйте еще раз, выбрав правильные ответы.'}
        </div>
      )}
     
    </div>
  );
};

export default DragAndDropZone;
