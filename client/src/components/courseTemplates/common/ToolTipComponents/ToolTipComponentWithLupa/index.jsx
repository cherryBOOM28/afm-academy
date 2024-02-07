import React, { useState } from 'react';
import './style.scss'; // Импортируем стили из DraggableOption

const ToolTipComponentWithLupa = ({ imgUrl, Width, Height, another }) => {
    const [selectedOptions, setSelectedOptions] = useState([]);
    const [showResults, setShowResults] = useState();
  const [correctOptions] = useState(['option1', 'option2', 'option3']); // Задаем correctOptions внутри компонента

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
          {/* Добавьте свои элементы здесь */}
          <div className="draggable-option-lupa" draggable="true" onDragStart={(e) => handleDragStart(e)}>
          <div className="tooltip">
        Физическое лицо, включенное в Перечень в целях обеспечения своей жизнедеятельности и членов <span className="highlight" randomText="Супруга (супруг), совместные или одного из супругов несовершеннолетние дети (в том числе усыновленные (удочеренные), находящиеся на иждивении или под опекой (попечительством); родители и родители супруга (супруги), находящиеся на иждивении), не имеющих самостоятельных источников дохода, вправе обратиться к субъекту финансового мониторинга для осуществления следующих операций с деньгами или иным имуществом:">семьи</span>, не имеющих самостоятельных источников дохода, вправе обратиться к субъекту финансового мониторинга для осуществления следующих операций с деньгами или иным имуществом:
      </div>
          </div>
          {/* Можете добавить еще элементов здесь */}
        </div>

        <b className='B'></b>
        <div className='dropZoneParent'>
          <div
            className={`drop-zone ${isCorrectAns ? 'correct-lupa' : isIncorrectSelectionAns ? 'incorrect-lupa' : ''}`}
            onDrop={handleDrop}
            onDragOver={handleDragOver}
            style={{ backgroundImage: `url(${imgUrl})`, width: Width, height: Height }}
          >
            {isCorrectAns && another === 'true' && <span className="check-mark">✔</span>}
            <br />
            <ul>
              {selectedOptions.map((option, index) => (
                <li key={index}>{option.length > 40 ? option.slice(0, 40) + "......" : option}</li>
              ))}
            </ul>
          </div>
          <button className="Btn1" onClick={handleTryAgain}>
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

export default ToolTipComponentWithLupa;
