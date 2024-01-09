import './style.scss';
import React from 'react'

import image from './../../../../assets/images/Image_22.png';

function ImageLine({
    img,
    color,
    height,
    notCrop
}) {
    
    if (img !== null && img !== undefined) {
        return (
            <div className={`image-line ${notCrop ? 'not-crop' : ''}`}>
                <img src={img} alt="image" style={{ height: `${height}px` }}/>
            </div>
        )
    }

    if (color !== null && color!== undefined) {
        return (
            <div className={`image-line ${notCrop ? 'not-crop' : ''}`} 
                style={{backgroundColor: color, height: `${height}px`, width: '100%'}}>
            </div>
        )
    }

    if (
        (color === null || color === undefined) 
            && (image === null || image === undefined)
        ) {
            return null;
    }   

}

export default ImageLine;