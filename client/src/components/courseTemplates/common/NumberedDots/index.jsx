import React, { useState, useEffect } from 'react';

import './style.scss'

const NumberedDots = ({ list }) => {
    return (
        <>
            <div className='numbered-dots'>
                {
                    list.map((item, index) => {
                        let i = index + 1;

                        return (
                            <div key={index}>
                                <span>{i}</span>
                                <p>{item}</p>
                            </div>
                        )
                    })
                }
            </div>
        </>
    );
}

export default NumberedDots;