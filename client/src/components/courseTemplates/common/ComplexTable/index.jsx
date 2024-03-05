import React, { useState } from 'react';
import './style.scss';

const ComplexTable = ({ columns, data, showCollapseButton=true, version=1 }) => {
    const [isCollapsed, setIsCollapsed] = useState(true);
    const [showRows, setShowRows] = useState(5); // Начальное количество отображаемых строк

    const toggleCollapse = () => {
        setIsCollapsed(prevState => !prevState);
        if (isCollapsed) {
            setShowRows(data.length); // Показываем все строки при развертывании
        } else {
            setShowRows(5); // Показываем только 5 строк при сворачивании
        }
    };

    if (version === 1)
        return (
            <div className='divkaParent'>
                <div className='divka'>
                    {showCollapseButton && ( // Проверяем, нужно ли отображать кнопку
                        <button className='ComplexTableBtn' onClick={toggleCollapse}>
                            {isCollapsed ? 'Развернуть Таблицу' : 'Свернуть Таблицу'}
                        </button>
                    )}
                    <table className="ComplexTable">
                        <thead>
                        <tr>
                            {columns.map((column, index) => (
                                <th key={index}>{column}</th>
                            ))}
                        </tr>
                        </thead>
                        <tbody>
                        {data.slice(0, showRows).map((row, rowIndex) => (
                            <tr key={rowIndex}>
                                {columns.map((column, colIndex) => {
                                    const colSpan = row['colSpan'] || 1;
                                    const rowSpan = row['rowSpan'] || 1;
                                    // Проверяем, если текущая ячейка имеет colSpan и она не первая в ряду, пропускаем ее
                                    if (colSpan > 1 && colIndex > 0) {
                                        return null;
                                    }

                                    return (
                                        <td key={colIndex} colSpan={colSpan} rowSpan={rowSpan}
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
            </div>

        );

    if (version === 2) {
        return (
            <div className='divkaParent'>
                <div className='divka'>
                    {showCollapseButton && ( // Проверяем, нужно ли отображать кнопку
                        <button className='ComplexTableBtn' onClick={toggleCollapse}>
                            {isCollapsed ? 'Развернуть Таблицу' : 'Свернуть Таблицу'}
                        </button>
                    )}
                    <table className="ComplexTable">
                        <thead>
                        <tr>
                            {columns.map((column, index) => (
                                <th key={index}>{column}</th>
                            ))}
                        </tr>
                        </thead>
                        <tbody>
                        {data.slice(0, showRows).map((row, rowIndex) => (
                            <tr key={rowIndex}>
                                {columns.map((column, colIndex) => {
                                    const colSpan = row['colSpan'] || 1;
                                    const rowSpan = row['rowSpan'] || 1;
                                    // Проверяем, если текущая ячейка имеет colSpan и она не первая в ряду, пропускаем ее
                                    if (colSpan > 1 && colIndex > 0) {
                                        return null;
                                    }

                                    return (
                                        <td key={colIndex} colSpan={colSpan} rowSpan={rowSpan}
                                            style={{
                                                textAlign: colSpan === 3 ? 'center' : 'left',
                                                fontWeight: colSpan === 3 ? 'bold' : 'normal',
                                            }}>
                                            {row[column].indexOf('\n') !== -1 ? (
                                                row[column].split('\n').map((line, lineIndex) => (
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
            </div>

        );
    }
};

export default ComplexTable;
