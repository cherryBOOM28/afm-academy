import React, { useState, useEffect } from 'react';
import './style.scss';

import { AiOutlineClose } from "react-icons/ai";

import lectorImage from './lectorImage.png';
import image1 from './image1.png';

import { useNavigate } from 'react-router-dom';
import ContentHeaderWithImage from '../../components/ContentHeaderWithImage';

function Sandbox() {
    const [courseName, setCourseName] = useState('');
    const [courseSessions, setCourseSessions] = useState([
        { 
            id: 1,
            group: 'introduction',
            name: 'Introduction',
            progress: 100,
            lector: {
                name: 'Lennaert Peek',
                image: lectorImage,
            },
            content: []
        },

    ]);
    const [activeSessionId, setActiveSessionId] = useState(-1);

    useEffect(() => {
        setCourseName('Базовый курс');

    }, [])

    const navigate = useNavigate();

    return ( 
        <div className="sandbox-page">
            <div className="course-wrapper">

                <div className="course-head">
                    <div>
                        {/* <div className="course-title">{courseName}</div> */}
                        <div className="course-subtitle">{courseName}</div>
                    </div>
                    <div className='close-icon' onClick={() => {
                        navigate('/courses/')
                    }}>
                        <AiOutlineClose />
                    </div>
                </div>

                <div className="course-body">

                    <div className="course-nav">

                        <div className="nav-head">
                            <div>
                                <h2>{courseName}</h2>
                                <div className='progress-bar'>
                                    <div>22% complete</div>
                                </div>
                            </div>
                        </div>
                        <div className="nav-body">

                        </div>

                    </div>

                    <div className="course-content">
                        <div className="content">
                            <div className="content-header">
                                <h1>Введение</h1>
                                <div className='lector'>
                                    <img src={lectorImage} alt="lector-name" />
                                    <p>Автор курса</p>
                                </div>
                            </div>

                            <ContentHeaderWithImage 
                                text={'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'} 
                                image={image1} 
                                imageText={'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'}
                                />

                                
                        </div>
                    </div>

                </div>

            </div>
        </div>
    );
}

export default Sandbox;