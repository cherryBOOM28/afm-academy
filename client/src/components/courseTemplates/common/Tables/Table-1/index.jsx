import React, { useState, useEffect } from 'react';

import './style.scss';

function Table_1({ rows, borderColor, color }) {
    const defaultBorderColor = '#CADEFC';
    const defaultColor = '#000000'

    const _borderColor = borderColor || defaultBorderColor;
    const _color = color || defaultColor;

    const cellStyle = {
        borderColor: _borderColor,
        color: _color,
    }

    if (rows === undefined || rows === null) return null;

    return ( 
        <>
            <p
                style={{
                    color: '#3A3939',

                    fontFamily: 'Ubuntu',
                    fontSize: '18px',
                    fontStyle: 'normal',
                    fontWeight: '600',
                    lineHeight: '140%',

                    marginTop: '50px',
                    padding: '0px 70px'
                }}
            >
                Разберем список следующих сокращений:
            </p>
            <div className="columnless-table">
                <div className="table-wrapper">
                    <div className="table">
                        <div className="table-head" style={cellStyle}>
                            <div style={cellStyle}></div>
                            <div style={cellStyle}></div>
                            <div style={cellStyle}></div>
                            <div style={cellStyle}></div>
                        </div>

                            <div className="table-body" style={cellStyle}>
                                {rows.map(( row, index ) => (
                                        <div className="table-row">
                                            <div style={cellStyle}></div>
                                            <div style={cellStyle} className='row-head'>
                                                <p>
                                                    {row.first}
                                                </p>
                                            </div>
                                            <div style={cellStyle} className='row-body'>
                                                <p>
                                                    {row.second}
                                                </p>
                                            </div>
                                            <div style={cellStyle}></div>
                                        </div>
                                ))}
                            </div>

                        <div className="table-footer" style={cellStyle}>
                            <div style={cellStyle}></div>
                            <div style={cellStyle}></div>
                            <div style={cellStyle} className='showAll'>
                                <div>Посмотреть все</div>
                            </div>
                            <div style={cellStyle}></div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Table_1;