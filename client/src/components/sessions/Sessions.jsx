import React, { useState, useEffect } from 'react';

import closeIcon from './../../pages/testCoursePage/closeIcon.svg';
import finishedIcon from './../../pages/testCoursePage/finishedIcon.svg';
import unfinishedIcon from './../../pages/testCoursePage/unfinishedIcon.svg';

import arrowDownIcon from './../../pages/testCoursePage/arrowDownIcon.svg';

import './sessions.scss';

export const Session = ({title, session, handleSessionClick, isActive}) => {
    const sessionFinished = session.progress === 100;

    return (
        <div 
            className={`session ${isActive ? 'active' : ''}`} 
            key={session.name}
            onClick={() => handleSessionClick(session.id)}>

            <img src={closeIcon} alt="icon" />
            <h6>{session.name}</h6>
            <div className="sessionProgress">
                {
                    sessionFinished 
                        ? <img src={finishedIcon} alt="" />
                        : <img src={unfinishedIcon} alt="" />
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
                <img src={arrowDownIcon} alt="arrow down icon" className='group-sessions'/>
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