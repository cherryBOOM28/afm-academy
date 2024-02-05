import React from 'react';
import './style.scss';

const ComplexTable = ({columns,data}) => {


  return (
    <div className='divka'>
    <table className="ComplexTable">
      <thead>
        <tr>
          {columns.map((column, index) => (
            <th key={index}>{column}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {data.map((row, rowIndex) => (
          <tr key={rowIndex}>
            {columns.map((column, colIndex) => {
              const colSpan = row['colSpan'] || 1;
              // Проверяем, если текущая ячейка имеет colSpan и она не первая в ряду, пропускаем ее
              if (colSpan > 1 && colIndex > 0) {
                return null;
              }

              return (
                <td key={colIndex} colSpan={colSpan}
                  style={{
                  textAlign: colSpan === 3 ? 'center' : 'left',
                  fontWeight: colSpan === 3 ? 'bold' : 'normal',
                }}>
                  {Array.isArray(row[column]) ? (
                    row[column].map((line, lineIndex) => (
                      <React.Fragment key={lineIndex}>
                        {lineIndex > 0 && <hr />} {/* Добавляем <hr> после первой строки */}
                        {line}
                      </React.Fragment>
                    ))
                  ) : (
                    row[column]
                  )}
                </td>
              );
            })}
          </tr>
        ))}
      </tbody>
      </table>
    </div>
  );
};

export default ComplexTable;
