import React, { useState, useEffect } from 'react';

import './style.scss'
import Sizebox from '../Sizebox';

const NotNumberedDots = ({ list, header, dotsColor, color, gap='27px', fontWeight }) => {

    const defaultDotsColor = '#F9CB36';
    const defaultColor = '#3A3939';
    const defaultFontWeight = '600';
    const _fontWeight = fontWeight ? fontWeight : defaultFontWeight;
    const formatText = (text) => {
        return text.replace(/"(.*?)"/g, '<span style="font-weight: 900;">$1</span>');
    }

    if (!list) return null;

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
                            dangerouslySetInnerHTML={{ __html: formatText(header)}}
                        ></h3>
                        <Sizebox height={37} />
                    </>
                ) : null
            }
            <div className='not-numbered-dots' style={{ gap: gap }}>
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
                                        fontWeight: 200
                                    }}
                                    dangerouslySetInnerHTML={{ __html: formatText(item)}}
                                ></p>
                            </div>
                        )
                    })
                }
            </div>
        </>
    );
}

export default NotNumberedDots;