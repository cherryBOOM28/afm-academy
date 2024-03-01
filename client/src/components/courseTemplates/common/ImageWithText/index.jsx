import React, { useState, useEffect } from 'react';

import './style.scss'

import image from './../../../../assets/images/Image_23.png';


function ImageWithText({ img, imageText, color, children, version=1 }) {
    if (version === 2) {
        const splitText = imageText.split('\n').map((text, index) => {
            // Check if the text is just whitespace (or empty) and handle it accordingly
            const isWhitespaceOnly = !text.trim();
            return (
                <span key={index} style={{ display: 'block', whiteSpace: isWhitespaceOnly ? 'pre' : 'normal' }}>
                    {isWhitespaceOnly ? '\u00A0' : text}
                </span>
            );
        });
        

        return (
            <div className="imageWithText">
            <img src={img !== null && img !== undefined ? img : image} alt={imageText} />
            <div className="image-text" style={{color: color !== undefined && color !== null ? color : '#000000'}}>
                <div>
                    <div
                        style={{
                            borderTop: `4px solid ${color !== undefined && color !== null ? color : '#000000'}`
                        }}
                    ></div>    
                </div> 
                <p
                    style={{color: color !== undefined && color !== null ? color : '#000000'}}
                >
                    {splitText}
                </p>
            </div>
            <div className="dim"></div>
        </div>
        );
    }

    if (children) {
        return ( 
            <div className="imageWithText">
                <img src={img !== null && img !== undefined ? img : image} alt={imageText} />
                <div className="image-text" style={{color: color !== undefined && color !== null ? color : '#000000'}}>
                    <div>
                        <div
                            style={{
                                borderTop: `4px solid ${color !== undefined && color !== null ? color : '#000000'}`
                            }}
                        ></div>    
                    </div> 
                    {children}
                </div>
                <div className="dim"></div>
            </div>
        );
    }

    return ( 
        <div className="imageWithText">
            <img src={img !== null && img !== undefined ? img : image} alt={imageText} />
            <div className="image-text" style={{color: color !== undefined && color !== null ? color : '#000000'}}>
                <div>
                    <div
                        style={{
                            borderTop: `4px solid ${color !== undefined && color !== null ? color : '#000000'}`
                        }}
                    ></div>    
                </div> 
                <p
                    style={{color: color !== undefined && color !== null ? color : '#000000'}}
                >
                    {imageText}
                </p>
            </div>
            <div className="dim"></div>
        </div>
    );
}

export default ImageWithText;