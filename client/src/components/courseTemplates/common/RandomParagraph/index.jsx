import React from 'react';
import Sizebox from '../Sizebox';
import './style.scss';

function RandomParapraph({ children, color, fontSize }) {
    const defaultColor = '#3A3939';
    const defaultFontSize = '18px';

    // Function to parse children and wrap **text** with <span>
    const parseText = (text) => {
        // Regex to find **bold** and ||italic|| text
        const regex = /(\*\*(.*?)\*\*)|(\|\|(.*?)\|\|)|(\|\*(.*?)\*\|)/g;
        
        // Splitting text and capturing groups for bold and italic
        let parts = [];
        let match;
        let lastIndex = 0;

        while ((match = regex.exec(text)) !== null) {
            // Push preceding text if it exists
            if (match.index > lastIndex) {
                parts.push(text.substring(lastIndex, match.index));
            }

            // Check which group (bold or italic) was matched
            if (match[1]) { // Bold text
                parts.push(<span key={parts.length} className="bold">{match[2]}</span>);
            } else if (match[3]) { // Italic text
                parts.push(<span key={parts.length} className="italic">{match[4]}</span>);
            } else if (match[5]) { // bold italic text
                parts.push(<span key={parts.length} className="bold italic">{match[6]}</span>);
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