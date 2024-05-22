// eslint-disable-next-line no-unused-vars
import React, { useState, useEffect } from 'react';

import './style.scss'
import Sizebox from '../Sizebox';
import parseText from '../../../../util/ParseTextFromFormatTextarea';

const NotNumberedDots = ({ 
    list, 
    header, 
    dotsColor, 
    color, 
    gap='27px', 
    fontWeight, 
    isSublist
}) => {

    const defaultDotsColor = '#F9CB36';
    const defaultColor = '#3A3939';
    const defaultFontWeight = '600';

    return (
        <>
            {
                header ? (
                    <>
                        <h3 
                            className='not-numbered-dots-header'
                            style={{
                                fontWeight: fontWeight ? fontWeight : defaultFontWeight,
                                color: color ? color : defaultColor,
                                lineHeight: '140%',
                                fontSize: '24px'
                            }}
                        >{ header }</h3>
                        <Sizebox height={37} />
                    </>
                ) : null
            }
            <div className='not-numbered-dots' style={{ gap: isSublist ? '5px' : gap, marginLeft: isSublist ? '30px' : '0px' }}>
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
                                <div>
                                    {
                                        item.split('\\n').map((child, index) => {
                                            return (
                                                <p
                                                    style={{
                                                        color: color ? color : defaultColor,
                                                        fontWeight: 200
                                                    }}
                                                
                                                > {parseText(child)}</p>
                                            );
                                        })
                                    }
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </>
    );
}

export default NotNumberedDots;