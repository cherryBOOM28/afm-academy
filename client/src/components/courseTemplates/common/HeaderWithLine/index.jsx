import React, { useState, useEffect } from 'react';

import './style.scss';

function HeaderWithLine({ children, header, headerColor, lineColor }) {
    const defaulHeaderColor = '#3A3939';
    const defaulLineColor = '#CADEFC';

    const _headerColor = headerColor || defaulHeaderColor;
    const _lineColor = lineColor || defaulLineColor;
    
    if (children !== undefined && children !== null) {
        return (
            <div className="title-with-line">
                <div className="line"
                    style={{
                        borderTop: `2px solid ${_lineColor}`,
                    }}
                ></div>
                <div>
                    <h1 className='header-text'
                        style={{ color: _headerColor }}
                    >{children}</h1>
                </div>
            </div>
        )
    }

    return ( 
        <div className="title-with-line">
            <div className="line"
                style={{
                    borderTop: `2px solid ${_lineColor}`,
                }}
            ></div>
            <div>
                <h1 className='header-text'
                    style={{ color: _headerColor }}
                >{header}</h1>
            </div>
        </div>
    );
}



export default HeaderWithLine;