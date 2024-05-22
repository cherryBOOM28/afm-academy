import React from 'react';
import egovIMG from './../assets/svg/egov.svg';
import './Style.scss';

function Practika() {
  return (
    <div className="practika">
      <h3>Практика</h3>
      <img src={egovIMG} alt="e.license screenshot" />
      <h4>Подать уведомление</h4>
      <nav>
        <a href="#">Транскрипт</a>
        <a href="#">Заметки</a>
        <a href="#">Загрузки</a>
      </nav>
      <p>Переходят сдать уведомление: Егов - войти - электронное лицензирование - финансы - уведомительный порядок...</p>
    </div>
  );
}

export default Practika;
