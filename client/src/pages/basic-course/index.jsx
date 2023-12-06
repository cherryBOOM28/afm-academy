import React, { useState, useEffect, Children } from 'react';

import { useNavigate, useParams } from 'react-router-dom';
import { useMotionValueEvent, useScroll } from 'framer-motion';

import { FaStar } from "react-icons/fa";


import './style.scss'
import HeaderWithLine from '../../components/courseTemplates/common/HeaderWithLine';
import { BiSolidObjectsHorizontalRight } from 'react-icons/bi';
import { MdClose } from "react-icons/md";

import Table_1 from '../../components/courseTemplates/common/Tables/Table-1';
import Report_Warning from '../../components/courseTemplates/common/Warnings/Report';
import Sizebox from '../../components/courseTemplates/common/Sizebox';
import NumberedDots from '../../components/courseTemplates/common/NumberedDots';
import ImageLine from '../../components/courseTemplates/common/ImageLine';
import DropDownTextWithTabs from '../../components/courseTemplates/complex/DropDownTextWithTabs';
import TextAndLink from '../../components/courseTemplates/complex/TextAndLink';
import ImageWithText from '../../components/courseTemplates/common/ImageWithText';
import NotNumberedDots from '../../components/courseTemplates/common/NotNumberedDots';
import TextWithTitle from './../../components/courseTemplates/common/TextWithTitle';

import NextLesson from '../../components/courseTemplates/complex/NextLesson';
import { Session } from '../../components/sessions/Sessions';
import RandomGlossary from '../../components/courseTemplates/common/RandomGlossary';
import RandomParapraph from '../../components/courseTemplates/common/RandomParagraph';
import FileDownloader from '../../components/courseTemplates/common/FileDownloader';
import TextWithBackground from '../../components/courseTemplates/common/TextWithBackground';
import ShortBiography from '../../components/courseTemplates/complex/images/ShortBiography';
import Centered from '../../components/courseTemplates/common/Centered';
import TabsGlossary from '../../components/courseTemplates/complex/TabsGlossary';
import CourseHeader from '../../components/courseTemplates/course-header';
import Reveal from '../../components/Reveal';
import DropdownList_r5 from '../../components/courseTemplates/complex/interactives/DropdownList_r5';
import DropdownList from '../../components/courseTemplates/complex/interactives/DropdownList';
import VideoLine from '../../components/courseTemplates/common/VideoLine';
import OneToFour from '../../components/courseTemplates/complex/interactives/OneToFour';
import VideoWithTitleAndText from '../../components/courseTemplates/complex/Video/VideoWithTitleAndText';
import RandomH2 from '../../components/courseTemplates/common/RandomH2';
import axios from 'axios';
import base_url from '../../settings/base_url';
import TestPage from '../../components/courseTemplates/complex/Test';
import GetLesson from '../../components/GetLesson';

function Basic_course(props) {
    const [courseName, setCourseName] = useState('Базовый курс');
    const [isNavOpen, setIsNavOpen] = useState(true);
    const [activeSessionId, setActiveSessionId] = useState(1);

    const jwtToken = localStorage.getItem('jwtToken');

    const { id } = useParams();
    const [data, setData] = useState(null);
    const [error, setError] = useState(null);
    const [isLoading, setLoading] = useState(true);

    
    const [quizQuestions, setQuizQuestions] = useState([])  
    
    const [courseProgress, setCourseProgress] = useState(0);

    const handleSendFeedback = () => {
        // const fetchData = async () => {
        //     try {
        //         const data = {
        //             'comment': feedbackText,
        //             'rate': 5
        //         };
        //         const config = {
        //             headers: {
        //                 Authorization: `Bearer ${jwtToken}`,
        //             },
        //         }

        //         console.log(`${base_url}/api/aml/course/createCourseComments/1`, data, config)
        //         const response = await axios.post(
        //             `${base_url}/api/aml/course/createCourseComments/1`, 
        //             data, config
                    
        //         );
    
        //         if (response.status === 200) {
        //             console.log(response.data)
        //         } else {
        //             console.log(response.statusText)
        //         }
    
        //     } catch (error) {
        //         console.error(error);
        //     }
        // };
        
        // fetchData();
        handleCloseFeedbackModal();
    }
    
    const [feedbackText, setFeedbackText] = useState('');
    const [stars, setStars] = useState(0);
    const [openFeedbackModal, setOpenFeedbackModal] = useState(false);
    const handleOpenFeedbackModal = () => {
        setOpenFeedbackModal(true);
    }
    const handleCloseFeedbackModal = () => {
        setOpenFeedbackModal(false);
        handleOpenModal();
    }

    const [openSertificateModal, setOpenSertificateModal] = useState(false);
    const handleOpenModal = () => {
        setOpenSertificateModal(true);
    }

    const handleCloseModal = () => {
        setOpenSertificateModal(false);
    }

    const navigate = useNavigate();

    const handleNavOpen = () => {
        setIsNavOpen(prev => !prev);
    }

    function getWindowDimensions() {
        const { innerWidth: width, innerHeight: height } = window;
        return {
            width,
            height
        };
    }

    function scrollToTopAnimated() {
        const currentScroll = document.documentElement.scrollTop || document.body.scrollTop;
        const courseContent = document.querySelector('.course-content');
        const courseContentScroll = courseContent.scrollTop;
        
        if (courseContentScroll > 0) {
        //   window.requestAnimationFrame(scrollToTopAnimated);
          courseContent.scrollTo(0, 0);
        }
      }

    const handleWindowResolution = () => {
        const { width, height } = getWindowDimensions();
        if (width <= 1300) {
            setIsNavOpen(false);
        }
    }

    useEffect(() => {
        handleWindowResolution();
        window.addEventListener('resize', handleWindowResolution);

        const fetchData = async () => {
            try {
                const response = await axios.get(`${base_url}/api/aml/course/getCourseById/${1}`, {
                    headers: {
                        Authorization: `Bearer ${jwtToken}`,
                    },
                });

                console.log(response.data)

                if (response.status === 200) {
                    setData(response.data);
                    setCourseProgress(response.data.progress_percentage)
                    setQuizQuestions(response.data.course.chapters[0].quiz.quizList)
                    console.log(response.data.course.chapters[0].quiz.quizList)

                } else {
                    // Handle other status codes if needed
                    setError(response.statusText);
                    console.log(response.statusText);
                }

                
            } catch (error) {
                setError(error);
                console.error(error);
            }

            setLoading(false);
        };
        
        console.log(jwtToken);
        fetchData();
    }, [])

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(`${base_url}/api/aml/course/getCourseById/${1}`, {
                    headers: {
                        Authorization: `Bearer ${jwtToken}`,
                    },
                });

                if (response.status === 200) {
                    setCourseProgress(response.data.progress_percentage)
                } else {
                    // Handle other status codes if needed
                    setError(response.statusText);
                    console.log(response.statusText);
                }

                
            } catch (error) {
                setError(error);
                console.error(error);
            }
        };
        
        fetchData();
    }, [activeSessionId])

    const handleSessionClick = (id) => {
        scrollToTopAnimated();
        setActiveSessionId(id);
    }

    const CheckCurrentChapter = (chapterNum) => {
        const fetchData = async () => {
            try {
                const response = await axios.post(
                    `${base_url}/api/aml/chapter/checked/${chapterNum}`,
                    {},
                    {
                        headers: {
                            Authorization: `Bearer ${jwtToken}`,
                        },
                    }
                );
    
                
                if (response.status === 200) {
                    console.log(response.data);
                } else {
                    // Handle other status codes if needed
                    setError(response.statusText);
                    console.log(response.statusText);
                }
            } catch (error) {
                if (error.response) {
                    setError(error.response.data.message || 'An error occurred');
                    console.error(error.response.data);
                } else {
                    setError(error.message || 'An error occurred');
                    console.error(error.message);
                }
            }
        };
    
        console.log(jwtToken);
        fetchData();
        scrollToTopAnimated();
        setActiveSessionId(activeSessionId + 1);
    };
    

    const getLesson = (id) => {
        console.log('getLesson', quizQuestions)
        return GetLesson({id, CheckCurrentChapter, quizQuestions, handleOpenFeedbackModal})
    }

    return ( 
        <div className="basic-course">
            {
                openFeedbackModal ? (
                    <div className="modal">
                        <div className="wrapper" onClick={(e) => {
                            if (e.target.classList.contains("wrapper")) {
                                handleCloseFeedbackModal()
                            }
                        }}>
                            <div className="body">
                                <div className="title">
                                    <h1>Оцените курс</h1>
                                    <MdClose className='close' size={30}  onClick={() => { handleCloseFeedbackModal() }}/>
                                </div>

                                <div className="stars" style={{
                                    display: 'flex',
                                    width: '100%',
                                    flexDirection: 'row',
                                    justifyContent: 'center',
                                    gap: '10px',
                                    marginBottom: '20px',
                                }}>

                                    {
                                        [0, 0, 0, 0, 0].map((star, index) => {
                                            const active = '#1F3C88';
                                            const nonActive = '#dddddd';
                                            const _color = stars >= index ? active : nonActive;

                                            const handleClick = () => {
                                                setStars(index);
                                            }

                                            return <FaStar size={50} style={{color: _color}} onClick={handleClick}/>
                                        })
                                    }
                                </div>

                                <div className="send-btn" onClick={() => { handleSendFeedback() }}>
                                    Отправить
                                </div>
                            </div>
                        </div>
                    </div> 
                ) : null
            }
            {
                openSertificateModal ? (
                    <div className="modal">
                        <div className="wrapper" onClick={(e) => {
                            // console.log(e.target.classList.contains("wrapper"))
                            if (e.target.classList.contains("wrapper")) {
                                handleCloseModal();
                            }
                        }}>
                            <div className="body">
                                <div className="title">
                                    <h1>Вы прошли курс!</h1>
                                    <MdClose className='close' size={30}  onClick={() => { handleCloseModal() }}/>
                                </div>

                                <p>
                                    Скачать сертификат можно в странице профиля
                                </p>

                                <div className="send-btn" onClick={() => { 
                                    handleCloseModal();
                                    navigate('/profile/sertificates');
                                 }}>
                                    Перейти к сертификатам
                                </div>
                            </div>
                        </div>
                    </div> 
                ) : null
            }
            <div className="course-wrapper">

                <CourseHeader 
                    handleNavOpen={handleNavOpen}
                    courseName={courseName}
                />
                <div className="course-body">

                    <div className={isNavOpen ? "course-nav" : "course-nav hide"}>

                        <div className="nav-head">
                            <div>
                                <h2>{courseName}</h2>
                                <div className='progress-bar'>
                                    <div>Прогресс {parseFloat(courseProgress).toFixed(1)}%</div>
                                    <progress id="courseProgress" max="100" value={`${parseFloat(courseProgress).toFixed(2)}`}>{parseFloat(courseProgress).toFixed(2)}</progress>
                                </div>
                            </div>
                        </div>
                        <div className="nav-body">
                            <Session 
                                session={{
                                    id: 1,
                                    group: 'introduction',
                                    name: 'Основные понятия и сокращения',
                                    progress: 0,
                                }}
                                handleSessionClick={handleSessionClick} 
                                isActive={1 === activeSessionId}
                            />
                            <Session 
                                session={{
                                    id: 2,
                                    group: 'introduction',
                                    name: 'Система ПОД/ФТ',
                                    progress: 0,
                                }}
                                handleSessionClick={handleSessionClick} 
                                isActive={2 === activeSessionId}
                            />
                            <Session 
                                session={{
                                    id: 3,
                                    group: 'introduction',
                                    name: 'История возникновения первых «схем» отмывания денег',
                                    progress: 0,
                                }}
                                handleSessionClick={handleSessionClick} 
                                isActive={3 === activeSessionId}
                            />
                            <Session 
                                session={{
                                    id: 4,
                                    group: 'introduction',
                                    name: 'Правовой фундамент понятия «легализации денег» в Республике Казахстан',
                                    progress: 0,
                                }}
                                handleSessionClick={handleSessionClick} 
                                isActive={4 === activeSessionId}
                            />
                            <Session 
                                session={{
                                    id: 5,
                                    group: 'introduction',
                                    name: 'Основные стадии отмывания денег',
                                    progress: 0,
                                }}
                                handleSessionClick={handleSessionClick} 
                                isActive={5 === activeSessionId}
                            />
                            <Session 
                                session={{
                                    id: 6,
                                    group: 'introduction',
                                    name: 'Схемы отмывания денег',
                                    progress: 0,
                                }}
                                handleSessionClick={handleSessionClick} 
                                isActive={6 === activeSessionId}
                            />
                            <Session 
                                session={{
                                    id: 7,
                                    group: 'introduction',
                                    name: 'Финансирование терроризма',
                                    progress: 7,
                                }}
                                handleSessionClick={handleSessionClick} 
                                isActive={7 === activeSessionId}
                            />
                            <Session 
                                session={{
                                    id: 8,
                                    group: 'introduction',
                                    name: 'ПОД ФТ ТЕСТ',
                                    progress: 0,
                                }}
                                handleSessionClick={handleSessionClick} 
                                isActive={8 === activeSessionId}
                            />
                            <Session 
                                session={{
                                    id: 9,
                                    group: 'introduction',
                                    name: 'Группа разработки финансовых мер борьбы с отмыванием денег (ФАТФ)',
                                    progress: 0,
                                }}
                                handleSessionClick={handleSessionClick} 
                                isActive={9 === activeSessionId}
                            /><Session
                                session={{
                                    id: 10,
                                    group: 'introduction',
                                    name: 'Региональные группы по типу ФАТФ',
                                    progress: 0,
                                }}
                                handleSessionClick={handleSessionClick}
                                isActive={10 === activeSessionId}
                            /><Session
                                session={{
                                    id: 11,
                                    group: 'introduction',
                                    name: 'Рекомендации ФАТФ',
                                    progress: 0,
                                }}
                                handleSessionClick={handleSessionClick}
                                isActive={11 === activeSessionId}
                            /><Session
                                session={{
                                    id: 12,
                                    group: 'introduction',
                                    name: 'Непосредственный результат 4 «Превентивные меры»',
                                    progress: 0,
                                }}
                                handleSessionClick={handleSessionClick}
                                isActive={12 === activeSessionId}
                            /><Session
                                session={{
                                    id: 13,
                                    group: 'introduction',
                                    name: 'Отчет о Взаимной оценке',
                                    progress: 0,
                                }}
                                handleSessionClick={handleSessionClick}
                                isActive={13 === activeSessionId}
                                /><Session
                            session={{
                                id: 14,
                                group: 'introduction',
                                name: 'Национальная оценка рисков',
                                progress: 0,
                            }}
                            handleSessionClick={handleSessionClick}
                            isActive={14 === activeSessionId}
                          /><Session
                                session={{
                                    id: 15,
                                    group: 'introduction',
                                    name: 'Списки ФАТФ',
                                    progress: 0,
                                }}
                                handleSessionClick={handleSessionClick}
                                isActive={15 === activeSessionId}
                            /><Session
                                session={{
                                    id: 16,
                                    group: 'introduction',
                                    name: 'ЕАГ',
                                    progress: 0,
                                }}
                                handleSessionClick={handleSessionClick}
                                isActive={16 === activeSessionId}
                            />
                            // 3 модуль
                            <Session
                                session={{
                                    id: 17,
                                    group: 'introduction',
                                    name: 'Законодательство',
                                    progress: 0,
                                }}
                                handleSessionClick={handleSessionClick}
                                isActive={17 === activeSessionId}
                            /><Session
                                session={{
                                    id: 18,
                                    group: 'introduction',
                                    name: 'Субъекты финансового мониторинга',
                                    progress: 0,
                                }}
                                handleSessionClick={handleSessionClick}
                                isActive={18 === activeSessionId}
                            /><Session
                                session={{
                                    id: 19,
                                    group: 'introduction',
                                    name: 'Надлежащая проверка субъектами финансового мониторинга клиентов',
                                    progress: 19,
                                }}
                                handleSessionClick={handleSessionClick}
                                isActive={17 === activeSessionId}
                            /><Session
                                session={{
                                    id: 17,
                                    group: 'introduction',
                                    name: 'Законодательство',
                                    progress: 0,
                                }}
                                handleSessionClick={handleSessionClick}
                                isActive={17 === activeSessionId}
                            /><Session
                                session={{
                                    id: 17,
                                    group: 'introduction',
                                    name: 'Законодательство',
                                    progress: 0,
                                }}
                                handleSessionClick={handleSessionClick}
                                isActive={17 === activeSessionId}
                            /><Session
                                session={{
                                    id: 17,
                                    group: 'introduction',
                                    name: 'Законодательство',
                                    progress: 0,
                                }}
                                handleSessionClick={handleSessionClick}
                                isActive={17 === activeSessionId}
                            />

                        </div>

                    </div>

                    <div className={isNavOpen ? "course-content open" : "course-content"}>
                        <div className="content">
                            {
                                getLesson(activeSessionId)
                            }
                        </div>
                    </div>

                </div>

                </div>
        </div>
    );
}





export default Basic_course;