import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import parseText from '../../../../util/ParseTextFromFormatTextarea';
import './style.scss';

const ComplexTable = ({ columns, data, showCollapseButton = true, version = 1 }) => {
    const { id } = useParams();
    const courseId = parseInt(id, 10);

    const [isCollapsed, setIsCollapsed] = useState(true);
    const [showRows, setShowRows] = useState(5);

    const toggleCollapse = () => {
        setIsCollapsed(prevState => !prevState);
        if (isCollapsed) {
            setShowRows(data.length);
        } else {
            setShowRows(5);
        }
    };

    const collapseButtonText = isCollapsed
        ? (courseId === 81 ? 'Кестені ашу' : 'Развернуть Таблицу')
        : (courseId === 81 ? 'Кестені жабу' : 'Свернуть Таблицу');

    return (
        <div className='divkaParent'>
            <div className='divka'>
                {showCollapseButton && (
                    <button className='ComplexTableBtn' onClick={toggleCollapse}>
                        {collapseButtonText}
                    </button>
                )}
                <table className="ComplexTable">
                    <thead>
                        <tr>
                            {columns.map((column, index) => (
                                <th key={index}>
                                    {column.split('\\n').map((child, index) => (
                                        <p key={index}>{parseText(child)}</p>
                                    ))}
                                </th>
                            ))}
                        </tr>
                    </thead>
                    <tbody>
                        {data.slice(0, showRows).map((row, rowIndex) => (
                            <tr key={rowIndex}>
                                {columns.map((column, colIndex) => {
                                    const colSpan = row['colSpan'] || 1;
                                    const rowSpan = row['rowSpan'] || 1;

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
                                                        {lineIndex > 0 && <hr />}
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
};

export default ComplexTable;
