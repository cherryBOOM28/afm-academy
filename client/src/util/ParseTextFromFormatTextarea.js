import React from 'react';

const parseText = (text) => {
    const regex = /(\|a\|(.*?)\|a\|)|(\|•\|(.*?)\|•\|)|(\|b\|(.*?)\|b\|)|(\|i\|(.*?)\|i\|)|(\|u\|(.*?)\|u\|)|(\|h\|(.*?)\|h\|)|(\|r\|(.*?)\|r\|)|(\|\*\|(.*?)\|\*\|)|(\|1\|(.*?)\|1\|)/g;

    let parts = [];
    let match;
    let lastIndex = 0;

    while ((match = regex.exec(text)) !== null) {
        if (match.index > lastIndex) {
            parts.push(text.substring(lastIndex, match.index));
        }

        if (match[1]) { // Link text
            const url = match[2]; // Remove any leading or trailing whitespace
            parts.push(
                <a href={url} key={parts.length} target="_blank" rel="noopener noreferrer">
                    {url}
                </a>
            );
        } else if (match[3]) { // Strikethrough text (new case)
            parts.push(<ul className="strikethrough" key={parts.length}><li>{match[4].includes('|') ? parseText(match[4]) : match[4]}</li></ul>);
        } else if (match[5]) { // Bold text
            parts.push(<span key={parts.length} className="bold">{match[6].includes('|') ? parseText(match[6]) : match[6]}</span>);
        } else if (match[7]) { // Italic text
            parts.push(<span key={parts.length} className="italic">{match[8].includes('|') ? parseText(match[8]) : match[8]}</span>);
        } else if (match[9]) { // Underline text
            parts.push(<span key={parts.length} className="underline">{match[10].includes('|') ? parseText(match[10]) : match[10]}</span>);
        } else if (match[11]) { // Highlight text
            parts.push(
                <span
                    key={parts.length}
                    className="highlight"
                    randomtext={
                        "(" + match[12].substring(match[12].indexOf('[') + 1, match[12].indexOf(']')) + ")"
                    }>
                    {match[12].includes('|') ? parseText(match[12]) : match[12].substring(0, match[12].indexOf('['))}
                </span>
            );
        } else if (match[13]) { // Red text
            parts.push(<span key={parts.length} className="red">{match[14].includes('|') ? parseText(match[14]) : match[14]}</span>);
        } else if (match[15]) { // Unordered list
            parts.push(<ul key={parts.length}><li>{match[16].includes('|') ? parseText(match[16]) : match[16]}</li></ul>);
        } else if (match[17]) { // Ordered list
            parts.push(<ol key={parts.length}><li>{match[18].includes('|') ? parseText(match[18]) : match[18]}</li></ol>);
        }

        lastIndex = match.index + match[0].length;
    }

    if (lastIndex < text.length) {
        parts.push(text.substring(lastIndex));
    }

    return parts;
};

export default parseText;
