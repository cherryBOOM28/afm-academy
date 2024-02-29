import React, { useState, useEffect } from 'react';

import './style.scss';
import Sizebox from '../Sizebox';

function HeaderWithLine({ children, header, headerColor, lineColor, version=1 }) {
    const defaulHeaderColor = '#3A3939';
    const defaulLineColor = '#CADEFC';

    const _headerColor = headerColor || defaulHeaderColor;
    const _lineColor = lineColor || defaulLineColor;

    const parseText = (text) => {
        // Regex to find **bold** and ||italic|| text
        const regex = /(\|b\|(.*?)\|b\|)|(\|i\|(.*?)\|i\|)|(\|u\|(.*?)\|u\|)/g;
        
        // Splitting text and capturing groups for bold and italic
        let parts = [];
        let match;
        let lastIndex = 0;

        while ((match = regex.exec(text)) !== null) {
            // Push preceding text if it exists
            if (match.index > lastIndex) {
                parts.push(text.substring(lastIndex, match.index));
            }

            if (match[1]) { // Bold text
                parts.push(<span key={parts.length} className="bold">{match[2].indexOf("\|") !== -1 ? parseText(match[2]) : match[2]}</span>);
            } else if (match[3]) { // Italic text
                parts.push(<span key={parts.length} className="italic">{match[4].indexOf("\|") !== -1 ? parseText(match[4]) : match[[4]]}</span>);
            } else if (match[5]) {
                parts.push(<span key={parts.length} className="underline">{match[6].indexOf("\|") !== -1 ? parseText(match[6]) : match[6]}</span>);
            }
            
            lastIndex = match.index + match[0].length;
        }

        // Push any remaining text after the last match
        if (lastIndex < text.length) {
            parts.push(text.substring(lastIndex));
        }

        return parts;
    };

    if (version === 2) {
        if (typeof header !== 'object' && header.indexOf('\\n') !== -1) {
            return (
                <div className="title-with-line">
                    <div className="line"
                        style={{
                            borderTop: `2px solid ${_lineColor}`,
                        }}
                    ></div>
                    <div>
                        {header.split('\\n').map((child, index) => {
                            const last = index === header.split('\\n').length - 1;
        
                            return (
                                <React.Fragment key={index}>
                                    <h1 className='header-text'
                                        style={{ color: _headerColor }}
                                    >
                                        {parseText(child)}
                                    </h1>
                                    {!last && <Sizebox height={20} />}
                                </React.Fragment>
                            );
                        })}
                    </div>
                </div>
            );
        }

        if (typeof header === 'string') {
            return (
                <div className="title-with-line">
                    <div className="line"
                        style={{
                            borderTop: `2px solid ${_lineColor}`,
                        }}
                    ></div>
                    <div>
                        {header.split('\\n').map((child, index) => {
                            const last = index === header.split('\\n').length - 1;
        
                            return (
                                <React.Fragment key={index}>
                                    <h1 className='header-text'
                                        style={{ color: _headerColor }}
                                    >
                                        {parseText(child)}
                                    </h1>
                                    {!last && <Sizebox height={20} />}
                                </React.Fragment>
                            );
                        })}
                    </div>
                </div>
            );
        }
    }
    
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