// LupaZone.js
import React, { useState } from 'react';
import './style.scss';

const LupaZone = ({ imgUrl, Width, Height, another }) => {
  const [selectedOptions, setSelectedOptions] = useState([]);
  const [showResults, setShowResults] = useState(false);
  const [isHovered, setHovered] = useState(false);

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

  const isCorrectAns =
    selectedOptions &&
    selectedOptions.length > 0 &&
    selectedOptions.every((option) => selectedOptions.includes(option));
  const isIncorrectSelectionAns =
    selectedOptions &&
    selectedOptions.length > 0 &&
    selectedOptions.some((option) => !selectedOptions.includes(option));

  return (
    <div>
      <div className="options-container">
        <div className="options">
          <div
            className="draggable-option-lupa"
            draggable="true"
            onDragStart={(e) => handleDragStart(e, "клиент (его представитель) и бенефициарный собственник являются лицом, включенным в Список лиц, причастных к террористической деятельности, а также Перечень организаций и лиц, связанных с финансированием терроризма и экстремизма и в Перечень ФРОМУ организаций и лиц, связанных с финансированием терроризма и экстремизма с финансированием оружия массового уничтожения;")}
          >
            клиент (его представитель) и бенефициарный собственник являются лицом, включенным в Список лиц, причастных к террористической деятельности, а также Перечень организаций и лиц, связанных с финансированием терроризма и экстремизма и в Перечень ФРОМУ организаций и лиц, связанных с финансированием терроризма и экстремизма с финансированием оружия массового уничтожения;
          </div>
          <div
            className="draggable-option-lupa"
            draggable="true"
            onDragStart={(e) => handleDragStart(e, "аффилированные лица клиента ранее привлекались к административной ответственности;")}
          >
            аффилированные лица клиента ранее привлекались к административной ответственности;
          </div>
          <div
            className="draggable-option-lupa"
            draggable="true"
            onDragStart={(e) => handleDragStart(e, "клиент (его представитель) и бенефициарный собственник являются установленным лицом или организацией, в отношении которых применяются международные санкции в соответствии с резолюциями СОВБЕЗ ООН Совет Безопасности ООН;")}
          >
            клиент (его представитель) и бенефициарный собственник являются установленным лицом или организацией, в отношении которых применяются международные санкции в соответствии с резолюциями СОВБЕЗ ООН Совет Безопасности ООН;
          </div>
          <div
            className="draggable-option-lupa"
            draggable="true"
            onDragStart={(e) => handleDragStart(e, "клиент ранее имел гражданство иностранного государства;")}
          >
            клиент ранее имел гражданство иностранного государства;
          </div>
          <div
            className="draggable-option-lupa"
            draggable="true"
            onDragStart={(e) => handleDragStart(e, "клиент является лицом, которому присвоен уровень риска, требующий применения усиленных мер надлежащей проверки и ПВК Правил внутреннего контроля, за исключением заключения страховыми организациями договоров страхования в электронной форме, страховая премия и (или) страховая выплата по которым осуществляются через банковские счета;")}
          >
            клиент является лицом, которому присвоен уровень риска, требующий применения усиленных мер надлежащей проверки и ПВК Правил внутреннего контроля, за исключением заключения страховыми организациями договоров страхования в электронной форме, страховая премия и (или) страховая выплата по которым осуществляются через банковские счета
          </div>
          <div
            className="draggable-option-lupa"
            draggable="true"
            onDragStart={(e) => handleDragStart(e, "клиент является государственным служащим")}
          >
            клиент является государственным служащим
          </div>
        </div>
        <b className='B'></b>
        <div className="separator"></div>
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
              {selectedOptions &&
                selectedOptions.length > 0 &&
                selectedOptions.map((option, index) => (
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

export default LupaZone;
