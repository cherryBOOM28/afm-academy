import React, { useState, useEffect } from 'react';
import lectorIcon from './lectorImage.png';
import image21 from './image21.png';
import image22 from './image22.png';
import schema1 from './schema-1.jpg';

import './testCourseContent.scss'

function Content2(props) {
    const session = props.session;

    return ( 
        <div className='content'>
            <div className="block_1">
                <h1>Роль СФМ</h1>
                <div className='lector'>
                    <img src={lectorIcon} alt="lector-name" />
                    <p>Автор курса</p>
                </div>
            </div>

            <div className="block_2" style={{marginTop: '50px'}}>
                <div style={{flexDirection: 'row'}}>
                    <img src={image21} alt="image21" />
                </div>
                <div className="container" style={{flexDirection: 'column'}}>
                    <h2>Секторы СФМ</h2>
                    <p>Программа «Курса для СФМ по подготовке к тестированию на знание законодательства ПОД/ФТ»</p>
                </div>
                <div className="container" style={{boxSizing: 'border-box', display: 'block'}}>
                    <img src={schema1} alt="schema-1" style={{width: '100%'}}/>
                </div>
                <div style={{flexDirection: 'row'}}>
                    <img src={image22} alt="image22" />
                </div>
            </div>

            <div className="block_4">
                <div className="container">
                    <div className='session-end-delim'>

                    </div>

                    <div className="next-page-button">
                        Вы завершили урок
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Content2;