import React, { useState, useEffect } from 'react';

import './style.scss'

import image from './../../../../assets/images/Image_23.png';


function ImageWithText({ img, imageText, color }) {
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
                <p>
                    {imageText}
                </p>
            </div>
        </div>
    );
}

export default ImageWithText;