import React, { useState, useEffect } from 'react';
import './style.scss'

function ContentHeaderWithImage({ image, text, imageText }) {
    return ( 
        <div className="contentHeaderWithImgage">
            <div className="line"></div>

            <h3>{text}</h3>

            <img src={image} alt={imageText} />
            <div className="image-text">
                <div>
                    <div></div>    
                </div> 
                <p>
                    {imageText}
                </p>
            </div>
        </div>
    );
}

export default ContentHeaderWithImage;