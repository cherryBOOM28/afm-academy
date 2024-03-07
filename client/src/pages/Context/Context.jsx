import React, { createContext, useState, useContext } from 'react';

// Создайте контекст
const CategoryFormatContext = createContext();

// Создайте кастомный хук для использования контекста
export const useCategoryFormat = () => useContext(CategoryFormatContext);

// Создайте провайдер контекста
export const CategoryFormatProvider = ({ children }) => {
  const [categoryFormat, setCategoryFormat] = useState('Дистанционно'); // Начальное значение формата - 'Дистанционно'

  const handleChangeCategoryFormat = (format) => {
    setCategoryFormat(format);
  };

  return (
    <CategoryFormatContext.Provider value={{ categoryFormat, handleChangeCategoryFormat }}>
      {children}
    </CategoryFormatContext.Provider>
  );
};
