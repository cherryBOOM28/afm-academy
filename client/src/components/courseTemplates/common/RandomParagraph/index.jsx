import React from 'react';
import Sizebox from '../Sizebox';
import './style.scss';

function RandomParapraph({ children, color, fontSize }) {
    const defaultColor = '#3A3939';
    const defaultFontSize = '18px';

    // Function to parse children and wrap **text** with <span>
    const parseText = (text) => {
        // Regex to find **bold** and ||italic|| text
        const regex = /(\|b\|(.*?)\|b\|)|(\|i\|(.*?)\|i\|)|(\|u\|(.*?)\|u\|)|(\|h\|(.*?)\|h\|)/g;
        
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
            } else if (match[7]) {
                parts.push(
                <span 
                    key={parts.length} 
                    className="highlight" 
                    randomtext={
                        "(" + match[8].substring(match[8].indexOf('[')+1, match[8].indexOf(']')) + ")"
                    }
                >
                    {
                        match[8].indexOf("\|") !== -1 
                            ? parseText(match[8]) 
                            : match[8].substring(0, match[8].indexOf('['))
                    }
                </span>);
            }
            
            lastIndex = match.index + match[0].length;
        }

        // Push any remaining text after the last match
        if (lastIndex < text.length) {
            parts.push(text.substring(lastIndex));
        }

        return parts;
    };

    if (typeof children !== 'object' && children.indexOf('\\n') !== -1) {
        return (
            <div className="randomParagraph">
                {children.split('\\n').map((child, index) => {
                    const last = index === children.split('\\n').length - 1;

                    return (
                        <React.Fragment key={index}>
                            <p
                                style={{
                                    color: color || defaultColor,
                                    fontSize: fontSize || defaultFontSize,
                                }}
                            >
                                {parseText(child)}
                            </p>
                            {!last && <Sizebox height={20} />}
                        </React.Fragment>
                    );
                })}
            </div>
        );
    }

    if (typeof children === 'string') {
        return (
            <div className="randomParagraph">
                {children.split('\\n').map((child, index) => {
                    const last = index === children.split('\\n').length - 1;

                    return (
                        <React.Fragment key={index}>
                            <p
                                style={{
                                    color: color || defaultColor,
                                    fontSize: fontSize || defaultFontSize,
                                }}
                            >
                                {parseText(child)}
                            </p>
                            {!last && <Sizebox height={20} />}
                        </React.Fragment>
                    );
                })}
            </div>
        );
    }

    return (
        <div className="randomParagraph">
            <p
                style={{
                    color: color || defaultColor,
                    fontSize: fontSize || defaultFontSize,
                }}
            >
                {children}
            </p>
        </div>
    );
}

export default RandomParapraph;