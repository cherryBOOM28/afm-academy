import React, { useState, useEffect } from 'react';

import './style.scss'
import Sizebox from '../Sizebox';

const NotNumberedDots = ({ list, header, dotsColor, color }) => {

    const defaultDotsColor = '#F9CB36';
    const defaultColor = '#3A3939';

    if (!list) return null;

    return (
        <>
            {
                header ? (
                    <>
                        <h3 
                            style={{
                                fontWeight: 600,
                                color: color ? color : defaultColor,
                                lineHeight: '140%',
                                fontSize: '24px'
                            }}
                        >{header}</h3>
                        <Sizebox height={37} />
                    </>
                ) : null
            }
            <div className='not-numbered-dots'>
                {
                    list.map((item, index) => {
                        return (
                            <div key={index}>
                                <span
                                    style={{
                                        backgroundColor: 
                                        dotsColor !== null && dotsColor !== undefined 
                                                ? dotsColor
                                                : defaultDotsColor,
                                        color: color ? color : defaultColor,
                                    }}
                                ></span> 
                                <p
                                    style={{
                                        color: color ? color : defaultColor,
                                    }}
                                >{item}</p>
                            </div>
                        )
                    })
                }
            </div>
        </>
    );
}

export default NotNumberedDots;