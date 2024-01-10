import React, { useState, useEffect } from 'react';

import arrowIcon from './../../../../assets/icons/arrow-icon.png'

import './style.scss'

function ImageSequence({
    images,
    imageDescriptions
}) {
    return ( 
        <div className="image-sequence">
            <div className="wrapper">
                {
                    images.map((image, index) => {

                        return (
                            <>
                                <div className="item">
                                    <img src={image} />
                                    {
                                        imageDescriptions 
                                            ? imageDescriptions[index]
                                                ? <p>{imageDescriptions[index]}</p>
                                                : <p></p>
                                            : null
                                    }
                                </div>
                                {
                                    index !== images.length - 1 
                                        ? <img className={'arrow'} src={arrowIcon} />
                                        : null
                                }
                            </>
                        )
                    })
                }
            </div>
        </div>
    );
}

export default ImageSequence;