import React, { useState, useEffect } from 'react';
import './style.scss'


function TextWithTitle({ title, text, color,fontWeight }) {
    const defaultColor = '#000000';
    const _color = color ? color : defaultColor;
    const defaultFontWeight = '500';
    const _fontWeight = fontWeight ? fontWeight : defaultFontWeight;
    const formatTitle = (text) => {
        let res = '';

        try {
            res = text.replace(/"(.*?)"/g, '<span style="font-weight: 500;">$1</span>');
        } catch (e) {
            res = text;
        }

        return res;
    }
    const formatText = (text) => {
        let res = '';
        try {
            res = text.replace(/"(.*?)"/g, '<span style="font-weight: 500;">$1</span>');
        } catch (e) {
            res = text;
        }

        return res;
    };

    if (typeof text === 'string' && text.indexOf('\n') !== -1) {
        text = text.split('\n');
    }

    return ( 
        <div className="text-with-title">
            {title ? (<h4 style={{
                            color: _color,
                            fontWeight: _fontWeight,
            }} dangerouslySetInnerHTML={{ __html: formatTitle(title) }}></h4>) : null}
            {
                Array.isArray(text) 
                    ? (
                        <div>
                            {
                                text.map(i => (
                                    <p
                                        style={{
                                            color: _color,
                                        }}
                                        key={i}
                                        dangerouslySetInnerHTML={{ __html: formatText(i)}}
                                    ></p>
                                ))
                            }
                        </div>
                    )
                    : <p>{text}</p>
            }
        </div>
    );
}

export default TextWithTitle;