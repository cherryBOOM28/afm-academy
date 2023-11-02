import React, { useState, useEffect } from 'react';

import './style.scss'

const NumberedDots = ({ list, color, header }) => {
    const defaultColor = '#F9CB36';

    return (
        <>  
            {
                header ? <h3>{header}</h3> : null
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
                                            color !== null && color!== undefined 
                                                ? color
                                                : defaultColor,
                                    }}
                                >{i}</span>
                                <div>
                                    <p>{item}</p>
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