import React from 'react';
import './style.scss';

function SimpleTable({ columns, data }) {
    // Function to handle newlines in table cell text
    const renderTextWithLineBreaks = (text) => {
        return text.split('\n').map((line, index, array) => (
            <React.Fragment key={index}>
                {line}
                {index !== array.length - 1 && <br />}
            </React.Fragment>
        ));
    };

    return (
        <div className="simpleTable">
            <div className="wrapper">
                <table>
                    <thead>
                        <tr>
                            {columns.map((column, index) => <th key={index}>{column}</th>)}
                        </tr>
                    </thead>
                    <tbody>
                        {data.map((row, rowIndex) => (
                            <tr key={rowIndex}>
                                {row.map((column, columnIndex) => (
                                    <td key={columnIndex}>{renderTextWithLineBreaks(column)}</td>
                                ))}
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default SimpleTable;
