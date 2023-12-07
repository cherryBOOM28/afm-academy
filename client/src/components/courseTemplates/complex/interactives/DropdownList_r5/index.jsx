import React, { useState, useEffect } from 'react';
import './style.scss';

import icon1 from './icon-1.svg';
import icon2 from './icon-2.svg';
import icon3 from './icon-3.svg';

import social from './social.svg';
import chat from './chat.svg';
import settings from './settings.svg';
import description from './description.svg';
import devices from './devices.svg';

import defaultImage from './default.png';

import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai";
import Sizebox from '../../../common/Sizebox';

function DropdownList_r5({
    title,
    color='#1F3C88',
    strokeColor='#CADEFC',
    items
}) {
    const row2Style = {
        borderRightColor: strokeColor
    }

    const [currentOpen, setCurrentOpen] = useState(0);
    const handleOpen = (id) => {
        console.log(id)

        setCurrentOpen(id);
    }

    return ( 
        <div className="dropdown-list-r5">
            <div className="title"
                style={{color: color}}
            >{title}</div>
            <Sizebox height={63} />
            <div className="dropdown-list-wrapper-r5">
                <div className="dropdown-list-r5">
                    <div className="row-1">
                        <div>
                            <div>
                                <div className="name">Агентсво</div>
                                <img src={icon1} alt="Агентсво" />
                            </div>
                        </div>
                        <div>
                            <div>
                                <div className="name">Государственные органы</div>
                                <img src={icon2} alt="Агентсво" />
                            </div>
                        </div>
                        <div>
                            <div>
                                <div className="name">Частный сектор</div>
                                <img src={icon3} alt="Агентсво" />
                            </div>
                        </div>
                    </div>
                    <div className="row-2" style={{borderTopColor: strokeColor}}>
                        <div style={row2Style}>
                            <Open_close 
                                id={0}
                                handleOpen={handleOpen}
                                open={currentOpen === 0}
                                color={strokeColor}
                            />
                            <div onClick={() => handleOpen(0)}>
                                <img src={social} alt="social" />
                                <div className="text">Кураторство</div>
                            </div>
                        </div>
                        <div style={row2Style}>
                            <Open_close 
                                id={1}
                                handleOpen={handleOpen}
                                open={currentOpen === 1}
                                color={strokeColor}
                            />
                            <div onClick={() => handleOpen(1)}>
                                <img src={chat} alt="social" />
                                <div className="text">Call-центр</div>
                            </div>
                        </div>
                        <div style={row2Style}>
                            <Open_close 
                                id={2}
                                handleOpen={handleOpen}
                                open={currentOpen === 2}
                                color={strokeColor}
                            />
                            <div onClick={() => handleOpen(2)}>
                                <img src={settings} alt="settings" />
                                <div className="text">Совет-Комплаенс</div>
                            </div>
                        </div>
                        <div style={row2Style}>
                            <Open_close 
                                id={3}
                                handleOpen={handleOpen}
                                open={currentOpen === 3}
                                color={strokeColor}
                            />
                            <div onClick={() => handleOpen(3)}>
                                <img src={description} alt="description" />
                                <div className="text">Оценка</div>
                            </div>
                        </div>
                        <div style={row2Style}>
                            <Open_close 
                                id={4}
                                handleOpen={handleOpen}
                                open={currentOpen === 4}
                                color={strokeColor}
                            />
                            <div onClick={() => handleOpen(4)}>
                                <img src={devices} alt="devices" />
                                <div className="text">Единый портал</div>
                            </div>
                        </div>
                        <div style={row2Style}></div>
                    </div>
                </div>
            </div>
            <Sizebox height={32} />
            <div className="info-wrapper">
                <div className="info">
                    <div className="text">{items ? items[currentOpen].text : ''}</div>
                </div>
            </div>
        </div>
    );
}

function Open_close({
    id,
    handleOpen,
    open,
    color
}) {
    return ( 
        <div onClick={() => {
            handleOpen(id);
        }}>
            {
                open 
                    ? <AiOutlineMinus style={{color: color}} size={25} /> 
                    : <AiOutlinePlus style={{color: color}} size={25}/>
            }
        </div>
    );
}

export default DropdownList_r5;