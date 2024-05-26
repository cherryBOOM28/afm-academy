import React from 'react';
import MessagesPage from './MessagePage/MessagesPage.tsx';

function Practika() {
  return (
    <div className="practika">
      <h3>Практика</h3>
      <div style={{ width: "700px", height: "auto" }}>
        <MessagesPage />
      </div>
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
