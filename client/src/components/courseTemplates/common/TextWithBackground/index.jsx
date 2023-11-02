import React from 'react';

import './style.scss';

function TextWithBackground({ text, color, backgroundColor }) {
    const defaultColor = '#3A3939'
    const defaultBackgroundColor = '#CADEFC'

    const _color = color || defaultColor;
    const _backgroundColor = backgroundColor || defaultBackgroundColor;

    const pStyle = {color: _color}

    return ( 
        <div className="textWithBackground"
            style={{
                backgroundColor: _backgroundColor
            }}
        >
            {
                Array.isArray(text)?
                    text.map((t, i) => <p style={pStyle} key={i}>{t}</p>) 
                    : <p style={pStyle}>{text}</p>
            }
        </div>
    );
}

export default TextWithBackground;