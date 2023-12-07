import React, { useState, useEffect } from 'react';

import closeIcon from './../../pages/testCoursePage/closeIcon.svg';
import finishedIcon from './../../pages/testCoursePage/finishedIcon.svg';
import { AiFillCheckCircle } from "react-icons/ai";
import { ImRadioUnchecked } from "react-icons/im";
import unfinishedIcon from './../../pages/testCoursePage/unfinishedIcon.svg';
import lectureIcon from './lectureIcon.svg';
import { AiFillFile } from "react-icons/ai";

import { RiArrowDownSLine, RiArrowUpSLine, RiArrowRightSLine } from "react-icons/ri";
import arrowDownIcon from './../../pages/testCoursePage/arrowDownIcon.svg';

import './sessions.scss';
import axios from 'axios';
import base_url from '../../settings/base_url';
import { useAnimation, motion } from 'framer-motion';

export const Session = ({title, session, handleSessionClick, isActive}) => {
    const sessionFinished = session.progress === 100;
    const [sessionChecked, setSessionChecked] = useState(false);

    const jwtToken = localStorage.getItem('jwtToken');

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(`${base_url}/api/aml/chapter/getChecked`, {
                    headers: {
                        Authorization: `Bearer ${jwtToken}`,
                    },
                });

                if (response.status === 200) {
                    const _temp = response.data.filter(_session => _session.id === session.id);
                    if (_temp.length !== 0) {
                        setSessionChecked(_temp[0].checked)
                    }
                    
                } else {
                    // Handle other status codes if needed
                    console.log(response.statusText);
                }
            } catch (error) {
                console.error(error);
            }
        };
        
        fetchData();
    }, [])

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
                    sessionChecked 
                        ? <AiFillCheckCircle />
                        : <ImRadioUnchecked />
                }
            </div>
        </div>
    )
}

export const Module = ({children, name, isOpen, moduleId, handleModuleOpen}) => {
    // const [isOpen, setOpen] = useState(false);

    const handleOpen = (event) => {
        // if (!event.target.classList.contains("group-sessions")) return;
        // setOpen(prev => !prev)
        handleModuleOpen(moduleId)
    }

    const mainControls = useAnimation();

    useEffect(() => handleAnimation(), [isOpen])

    const handleAnimation = () => {
        if (isOpen) {
            mainControls.start('open')
        } else {
            mainControls.start('close')
        }
    }

    return (
        <div className="session-group" >
            <div 
                className="group-sessions" 
                onClick={handleOpen}
                style={{
                    boxShadow: isOpen ? "0px 4px 8px rgba(0, 0, 0, 0.1)" : "none",
                }}
            >
                <div className="icon">
                    {isOpen ? (
                        <RiArrowDownSLine size={30} onClick={(e) => {
                            e.stopPropagation()
                            handleOpen(e)
                        }} />
                    ) : (
                        <RiArrowRightSLine size={30} onClick={(e) => {
                            e.stopPropagation()
                            handleOpen(e)
                        }} />
                    )}
                </div>
                <h5 className="group-sessions">{name}</h5>
            </div>
            <motion.div 
                className={`${isOpen ? 'open' : 'close'}`}
                variants={{
                    close: { height: 0 },
                    open: { height: 'max-content' }
                }}
                transition={{ duration: 1, ease: 'linear' }}
                initial='close'
                animate={mainControls}
            >
                {children}
            </motion.div>
        </div>
    )
}