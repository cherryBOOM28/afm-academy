import React, { useState, useEffect } from 'react';

import './style.scss'

const NotNumberedDots = ({ list }) => {
    return (
        <>
            <div className='not-numbered-dots'>
                {
                    list.map((item, index) => {
                        return (
                            <div key={index}>
                                <span></span> 
                                <p>{item}</p>
                            </div>
                        )
                    })
                }
            </div>
        </>
    );
}

export default NotNumberedDots;