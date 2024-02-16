import React, { useState, useEffect } from 'react';
import HtmlContent from 'dangerously-set-html-content';

import { BsFillExclamationOctagonFill } from "react-icons/bs";

import './style.scss'
import Sizebox from '../../Sizebox';

function Report_Warning({ 
    children, text,
    backgroundColor='rgba(202, 222, 252, 0.22)',
    borderColor='#A7CAFF',
    version = '1'
 }) {

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
            <div className="reportWarning">
                <div className="icon-wrapper">
                    <BsFillExclamationOctagonFill className='icon' size={23}/>
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

    if (text) {
        // Replace newline characters with HTML line breaks
        const formattedText = text.replace(/\n/g, '<br />');

        return (
            <div className="reportWarning">
                <div className="icon-wrapper">
                    <BsFillExclamationOctagonFill className='icon' size={23}/>
                </div>
                <div>
                    {/* Using HtmlContent to render HTML */}
                    <p><HtmlContent html={formattedText} /></p>
                </div>
            </div>
        );
    }

    return ( 
        <div className="reportWarning"
            style={{
                borderColor: borderColor,
                backgroundColor: backgroundColor
            }}
        >
            <div className="icon-wrapper">
                <BsFillExclamationOctagonFill className='icon' size={23} style={{color: borderColor}}/>
            </div>
            <div>
                <p>{children}</p>
            </div>
        </div>
    );
}

export default Report_Warning;