import React, { useState, useEffect } from 'react';

import closeIcon from './../../pages/testCoursePage/closeIcon.svg';
import finishedIcon from './../../pages/testCoursePage/finishedIcon.svg';
import { AiFillCheckCircle } from "react-icons/ai";
import { ImRadioUnchecked } from "react-icons/im";
import unfinishedIcon from './../../pages/testCoursePage/unfinishedIcon.svg';
import lectureIcon from './lectureIcon.svg';
import { AiFillFile } from "react-icons/ai";

import { RiArrowDownSLine } from "react-icons/ri";
import arrowDownIcon from './../../pages/testCoursePage/arrowDownIcon.svg';

import './sessions.scss';

export const Session = ({title, session, handleSessionClick, isActive}) => {
    const sessionFinished = session.progress === 100;

    return (
        <div 
            className={`session ${isActive ? 'active' : ''}`} 
            key={session.name}
            onClick={() => handleSessionClick(session.id)}>

            {/* <img src={AiFillFile} style={{color: 'white', background: 'white'}} alt="icon" /> */}
            <AiFillFile style={{color: 'white', fontSize: '28px'}} />
            <h6>{session.name}</h6>
            <div className="sessionProgress">
                {
                    sessionFinished 
                        ? <AiFillCheckCircle />
                        : <ImRadioUnchecked />
                }
            </div>
        </div>
    )
}

export const SessionGroup = ({title, sessions, groupName, handleSessionClick, activeSession}) => {
    sessions = sessions.filter(session => session.group === groupName);
    const [isOpen, setOpen] = useState(false);


    const handleOpen = (event) => {
        if (!event.target.classList.contains("group-sessions")) return;
        setOpen(prev => !prev)
    }

    return (
        <div className="session-group" onClick={handleOpen}>
            <div className='group-sessions'>
                {/* <img src={arrowDownIcon} alt="arrow down icon" className='group-sessions'/> */}
                < RiArrowDownSLine style={{ fontSize: '20px' }} />
                <h5 className='group-sessions'>{title.toUpperCase()}</h5>
            </div>
            <div className={`${isOpen ? 'open' : 'close'}`}>
                {sessions.map(session => {
                    const sessionFinished = session.progress === 100;
                    const sessionId = `${session.group}-${session.name}`;

                    return (
                        <Session session={session} handleSessionClick={handleSessionClick} isActive={activeSession === session.id}/>
                    )
                })}
                
            </div>
        </div>
    )
}