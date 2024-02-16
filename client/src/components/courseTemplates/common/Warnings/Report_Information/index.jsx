import React, { useState, useEffect } from 'react';

import { IoInformationCircle } from "react-icons/io5";

import './style.scss'

function Report_Information({ children, version=1 }) {

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
        return (
            <div className="reportInformation">
                <div className="icon-wrapper">
                    <IoInformationCircle className='icon' size={23}/>
                </div>
                <div>
                    {children.split('\\n').map((child, index) => {
                        // const last = index === children.split('\\n').length - 1;

                        return (
                            <React.Fragment key={index}>
                                <p>
                                    {parseText(child)}
                                </p>
                                {/* {!last && <Sizebox height={20} />} */}
                            </React.Fragment>
                        );
                    })}
                </div>
            </div>
        )
    }

    return ( 
        <div className="reportInformation">
            <div className="icon-wrapper">
                <IoInformationCircle className='icon' size={23}/>
            </div>
            <div>
                <p>{children}</p>
            </div>
        </div>
    );
}

export default Report_Information;