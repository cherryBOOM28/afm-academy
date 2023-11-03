import React, { useState, useEffect } from 'react';

import './style.scss'
import Sizebox from '../Sizebox';

const NumberedDots = ({ list, dotsColor, color, header }) => {
    const defaultDotsColor = '#F9CB36';
    const defaultColor = '#3A3939';

    return (
        <>  
            {
                header ? 
                <>
                    <h3 
                        style={{
                            fontWeight: 600,
                            color: color ? color : defaultColor,
                        }}
                    >{header}</h3> 
                    <Sizebox height={30} />
                </>
                : null
            }
            <div className='numbered-dots'>
                {
                    list !== undefined ? list.map((item, index) => {
                        let i = index + 1;

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
                                >{i}</span>
                                <div>
                                    <p
                                        style={{
                                            color: color ? color : defaultColor,
                                        }}      
                                    >{item}</p>
                                </div>
                            </div>
                        )
                    }) : null
                }
            </div>
        </>
    );
}

export default NumberedDots;