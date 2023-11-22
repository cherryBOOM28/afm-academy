import React, { useState, useEffect } from 'react';
import './style.scss'


function TextWithTitle({ title, text, color }) {
    const defaultColor = '#000000';
    const _color = color ? color : defaultColor; 

    return ( 
        <div className="text-with-title">
            {title ? (<h4 style={{
                            color: _color,
                        }}>{title}</h4>) : null}            
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
                                    >{i}</p>
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