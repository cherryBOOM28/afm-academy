import React, { useState, useEffect } from 'react';
import './style.scss'


function TextWithTitle({ title, text }) {
    return ( 
        <div className="text-with-title">
            <h4>{title}</h4>
            {
                Array.isArray(text) 
                    ? (
                        <div>
                            {
                                text.map(i => (
                                    <p>{i}</p>
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