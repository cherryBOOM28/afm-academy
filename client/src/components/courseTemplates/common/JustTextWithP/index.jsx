import React from 'react';
import './style.scss';

const JustTextWithP = ({ textData }) => {
  // Проверяем, является ли textData строкой перед использованием split
  if (typeof textData !== 'string') {
    return <div>No data to display</div>; // или другое сообщение, если textData не является строкой
  }

  // Разбиваем текст по кавычкам, сохраняя текст между ними
  const parts = textData.split(/("[^"]*")/);

  return (
    <div>
      {parts.map((part, index) => {
        // Проверяем, является ли текущая часть текста заключенной в кавычки
        const isBold = part.startsWith('"') && part.endsWith('"');
        return (
          <div key={index}>
            {/* Применяем стили в зависимости от того, является ли текст жирным */}
            <p className={`abzac ${isBold ? 'bold' : ''}`}>{part}</p>
            <br />
          </div>
        );
      })}
    </div>
  );
};

export default JustTextWithP;
