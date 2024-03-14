import React, { useState, useEffect } from 'react';

import icon from './static/stage.svg'
import line from './static/line.png'
import './style.scss'

function Component52({
    title,
    img,
    version=1
}) {

    if (version === 2) {
        return (
            <div className="component52 v2">
                <div className="text">
                    {
                        title
                    }
                </div>

                <div className="scheme v2">
                    <img src={img} alt={title} />
                </div>
            </div>
        )
    }

    return ( 
        <div className="component52">
            <div className="text">
                “Запутывание следов - направлено на маскировку проверяемого следа происхождения “грязных” денег в преддверии возможного расследования”
            </div>

            <div className="scheme">
                <div className="row1">
                    <div>Оборот</div>
                </div>
                <div className="row2">
                    <div>
                        <div>
                            <div>Законные</div>
                            <img src={line} alt="line" />
                        </div>
                    </div>
                    <div>
                        <img src={icon} alt="paper" />
                    </div>
                    <div>
                        <div>
                            <img src={line} alt="line" />
                            <div>Незаконные</div>
                        </div>
                    </div>
                </div>
                <div className="row3">
                    <div>Смешивается</div>
                </div>
            </div>
        </div>
    );
}

export default Component52;