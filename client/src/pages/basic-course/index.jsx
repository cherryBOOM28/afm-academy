/* eslint-disable react-hooks/exhaustive-deps */
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
import { Module, Session } from '../../components/sessions/Sessions';
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
import ModalWindow from './../../components/ModalWindow/ModalWindow';


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
    const [modules, setModules] = useState([]);

    const [courseProgress, setCourseProgress] = useState(0);

    const [courseContent, setCourseContent] = useState(null);

    const [openQuizModal, setOpenQuizModal] = useState(false);
    const [quizStatus, setQuizStatus] = useState('');

    const handleQuizFail = (isFatal) => {
        if (isFatal) setQuizStatus('fatal');
        else setQuizStatus('fail');
    
        setOpenQuizModal(true);
    }

    const handleQuizSuccesful = () => {
        setQuizStatus('successful');

        setOpenQuizModal(true);
    }

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
                const response = await axios.get(`${base_url}/api/aml/course/getCourseById/${8}`, {
                    headers: {
                        Authorization: `Bearer ${jwtToken}`,
                    },
                });

                // console.log(response.data)

                if (response.status === 200) {
                    setData(response.data);
                    setCourseProgress(response.data.progress_percentage)
                    setModules(response.data.course.modules)
                    setQuizQuestions(response.data.course.modules[0].quiz.quizList)
                    // console.log(response.data.course.chapters[0].quiz.quizList)

                } else {
                    // Handle other status codes if needed
                    setError(response.statusText);
                    // console.log(response.statusText);
                }


            } catch (error) {
                setError(error);
                console.error(error);
            }

            setLoading(false);
        };

        // console.log(jwtToken);
        fetchData();
    }, [])

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(`${base_url}/api/aml/course/getCourseById/${8}`, {
                    headers: {
                        Authorization: `Bearer ${jwtToken}`,
                    },
                });

                if (response.status === 200) {
                    setCourseProgress(response.data.progress_percentage)
                } else {
                    // Handle other status codes if needed
                    setError(response.statusText);
                    // console.log(response.statusText);
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

    const CheckCurrentChapter = (chapterNum, nexChapter) => {
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
                    // console.log(response.data);
                } else {
                    // Handle other status codes if needed
                    setError(response.statusText);
                    // console.log(response.statusText);
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

        // console.log(jwtToken);
        fetchData();
        scrollToTopAnimated();

        if (nexChapter) setActiveSessionId(nexChapter)
        else setActiveSessionId(activeSessionId + 1);
    };


    const getLesson = (id) => {
        // console.log('getLesson', quizQuestions)
        return <GetLesson 
            id={id} 
            modules={modules} 
            CheckCurrentChapter={CheckCurrentChapter} 
            quizQuestions={quizQuestions} 
            handleOpenFeedbackModal={handleOpenFeedbackModal} 
            handleQuizFail={handleQuizFail}
            handleQuizSuccesful={handleQuizSuccesful}
        />
    }

    return (
        <div className="basic-course">
            {/* {
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
            } */}
            {/* {
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
            } */}
            <div className="course-wrapper">
                {
                    openQuizModal ? (
                        <ModalWindow
                            title={'Результат теста'}
                            setShowModal={(val) => setOpenQuizModal(false)}
                        >
                            {
                                quizStatus === 'fatal' ? (
                                    <div className='modal-fatal'>
                                        <p>
                                            Вы провалили тест трижды. Рекомендуем перепройти модуль.
                                        </p>
                                    </div>
                                ) : null
                            }

                            {
                                quizStatus === 'fail' ? (
                                    <div className='modal-fail'>
                                        <p>
                                            Вы провалили тест. Пройдите заново.
                                        </p>
                                    </div>
                                ) : null
                            }

                            {
                                quizStatus === 'successful' ? (
                                    <div className='modal-successful'>
                                        <p>
                                            Вы успешно прошли тест.
                                        </p>
                                    </div>
                                ) : null
                            }
                        </ModalWindow> 
                    ) : null
                }
                <CourseHeader
                    handleNavOpen={handleNavOpen}
                    courseName={courseName}
                />
                <div className="course-body">
                    <CourseNavigation
                        isNavOpen={isNavOpen}
                        activeSessionId={activeSessionId}
                        handleSessionClick={handleSessionClick}
                        courseProgress={courseProgress}
                        courseName={courseName}
                    />

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

const CourseNavigation = ({
    isNavOpen,
    activeSessionId,
    handleSessionClick,
    courseProgress,
    courseName,
}) => {

    const [currentModule, setCurrentModule] = useState(1);

    const handleModuleOpen = (id) => {
        if (currentModule === id) {
            setCurrentModule(-1);
            return;
        }
        setCurrentModule(id);
    }

    return (
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
                    course_id={8}
                    session={{
                        id: 1,
                        name: 'О курсе',
                        progress: 0,
                    }}
                    handleSessionClick={handleSessionClick}
                    isActive={1 === activeSessionId}
                />
                <Module
                    moduleId={1}
                    isOpen={currentModule === 1}
                    handleModuleOpen={handleModuleOpen}
                    name={'Общая характеристика национальной системы ПОД/ФТ'}
                >
                    <Session
                        course_id={8}
                        session={{
                            id: 58,
                            name: 'Основные понятия и сокращения',
                            progress: 0,
                        }}
                        handleSessionClick={handleSessionClick}
                        isActive={58 === activeSessionId}
                    />
                    <Session
                        course_id={8}
                        session={{
                            id: 59,
                            group: 'introduction',
                            name: 'Система ПОД/ФТ',
                            progress: 0,
                        }}
                        handleSessionClick={handleSessionClick}
                        isActive={59 === activeSessionId}
                    />
                    <Session
                        course_id={8}
                        session={{
                            id: 60,
                            group: 'introduction',
                            name: 'История возникновения первых «схем» отмывания денег',
                            progress: 0,
                        }}
                        handleSessionClick={handleSessionClick}
                        isActive={60 === activeSessionId}
                    />
                    <Session
                        course_id={8}
                        session={{
                            id: 61,
                            group: 'introduction',
                            name: 'Правовой фундамент понятия «легализации денег» в Республике Казахстан',
                            progress: 0,
                        }}
                        handleSessionClick={handleSessionClick}
                        isActive={61 === activeSessionId}
                    />
                    <Session
                        course_id={8}
                        session={{
                            id: 62,
                            group: 'introduction',
                            name: 'Основные стадии отмывания денег',
                            progress: 0,
                        }}
                        handleSessionClick={handleSessionClick}
                        isActive={62 === activeSessionId}
                    />
                    <Session
                        course_id={8}
                        session={{
                            id: 63,
                            group: 'introduction',
                            name: 'Схемы отмывания денег',
                            progress: 0,
                        }}
                        handleSessionClick={handleSessionClick}
                        isActive={63 === activeSessionId}
                    />
                    <Session
                        course_id={8}
                        session={{
                            id: 64,
                            group: 'introduction',
                            name: 'Финансирование терроризма',
                            progress: 7,
                        }}
                        handleSessionClick={handleSessionClick}
                        isActive={64 === activeSessionId}
                    />
                    <Session
                        // checked={modules[0].quiz.quiz_max_points === 100}
                        course_id={8}
                        session={{
                            id: 8,
                            group: 'introduction',
                            name: 'Тестирование 1',
                            progress: 0,
                        }}
                        handleSessionClick={handleSessionClick}
                        isActive={8 === activeSessionId}
                    />
                </Module>
                <Module
                    name={'Международная система ПОД/ФТ'}
                    moduleId={2}
                    isOpen={currentModule === 2}
                    handleModuleOpen={handleModuleOpen}
                >
                    <Session
                        course_id={8}
                        session={{
                            id: 65,
                            group: 'introduction',
                            name: 'Группа разработки финансовых мер борьбы с отмыванием денег (ФАТФ)',
                            progress: 0,
                        }}
                        handleSessionClick={handleSessionClick}
                        isActive={65 === activeSessionId}
                    />
                    <Session
                        course_id={8}
                        session={{
                            id: 66,
                            group: 'introduction',
                            name: 'Региональные группы по типу ФАТФ',
                            progress: 0,
                        }}
                        handleSessionClick={handleSessionClick}
                        isActive={66 === activeSessionId}
                    />
                    <Session
                        course_id={8}
                        session={{
                            id: 67,
                            group: 'introduction',
                            name: 'Рекомендации ФАТФ',
                            progress: 0,
                        }}
                        handleSessionClick={handleSessionClick}
                        isActive={67 === activeSessionId}
                    />
                    <Session
                        course_id={8}
                        session={{
                            id: 68,
                            group: 'introduction',
                            name: 'Непосредственный результат 4 «Превентивные меры»',
                            progress: 0,
                        }}
                        handleSessionClick={handleSessionClick}
                        isActive={68 === activeSessionId}
                    />
                    <Session
                        course_id={8}
                        session={{
                            id: 69,
                            group: 'introduction',
                            name: 'Отчет о Взаимной оценке',
                            progress: 0,
                        }}
                        handleSessionClick={handleSessionClick}
                        isActive={69 === activeSessionId}
                    />
                    <Session
                        course_id={8}
                        session={{
                            id: 70,
                            group: 'introduction',
                            name: 'Национальная оценка рисков',
                            progress: 0,
                        }}
                        handleSessionClick={handleSessionClick}
                        isActive={70 === activeSessionId}
                    />
                    <Session
                        course_id={8}
                        session={{
                            id: 71,
                            group: 'introduction',
                            name: 'Списки ФАТФ',
                            progress: 0,
                        }}
                        handleSessionClick={handleSessionClick}
                        isActive={71 === activeSessionId}
                    />
                    <Session
                        course_id={8}
                        session={{
                            id: 72,
                            group: 'introduction',
                            name: 'ЕАГ',
                            progress: 0,
                        }}
                        handleSessionClick={handleSessionClick}
                        isActive={72 === activeSessionId}
                    />
                    <Session
                        course_id={8}
                        session={{
                            id: 9,
                            group: 'introduction',
                            name: 'Тестирование 2',
                            progress: 0,
                        }}
                        handleSessionClick={handleSessionClick}
                        isActive={9 === activeSessionId}
                    />
                </Module>
                <Module
                    name={'Законодательство о ПОД/ФТ'}
                    moduleId={3}
                    isOpen={currentModule === 3}
                    handleModuleOpen={handleModuleOpen}
                >
                    <Session
                        course_id={8}
                        session={{
                            id: 73,
                            group: 'introduction',
                            name: 'Законодательство',
                            progress: 0,
                        }}
                        handleSessionClick={handleSessionClick}
                        isActive={73 === activeSessionId}
                    />
                    <Session
                        course_id={8}
                        session={{
                            id: 74,
                            group: 'introduction',
                            name: 'Субъекты финансового мониторинга',
                            progress: 0,
                        }}
                        handleSessionClick={handleSessionClick}
                        isActive={74 === activeSessionId}
                    />
                    <Session
                        course_id={8}
                        session={{
                            id: 75,
                            group: 'introduction',
                            name: 'Надлежащая проверка субъектами финансового мониторинга клиентов',
                            progress: 0,
                        }}
                        handleSessionClick={handleSessionClick}
                        isActive={75 === activeSessionId}
                    />
                <Session
                    course_id={8}
                    session={{
                        id: 76,
                        group: 'introduction',
                        name: 'Операции с деньгами и (или) иным имуществом, подлежащие финансовому мониторингу\n',
                        progress: 0,
                    }}
                    handleSessionClick={handleSessionClick}
                    isActive={76 === activeSessionId}
                /><Session
                    course_id={8}
                    session={{
                        id: 77,
                        group: 'introduction',
                        name: 'Сбор сведений и информации об операциях, подлежащих финансовому мониторингу',
                        progress: 0,
                    }}
                    handleSessionClick={handleSessionClick}
                    isActive={77 === activeSessionId}
                /><Session
                    course_id={8}
                    session={{
                        id: 78,
                        group: 'introduction',
                        name: 'Целевые финансовые санкции, относящиеся к предупреждению и предотвращению терроризма и финансирования терроризма',
                        progress: 0,
                    }}
                    handleSessionClick={handleSessionClick}
                    isActive={78 === activeSessionId}
                /><Session
                    course_id={8}
                    session={{
                        id: 79,
                        group: 'introduction',
                        name: 'Отказ от проведения и приостановление ',
                        progress: 0,
                    }}
                    handleSessionClick={handleSessionClick}
                    isActive={79 === activeSessionId}
                />
                </Module>
                <Module
                    name={'Государственный контроль за соблюдением законодательства Республики Казахстан о ПОД/ФТ'}
                    moduleId={4}
                    isOpen={currentModule === 4}
                    handleModuleOpen={handleModuleOpen}
                >
                    <Session
                        course_id={8}
                        session={{
                            id: 80,
                            name: 'Государственный контроль',
                            progress: 0,
                        }}
                        handleSessionClick={handleSessionClick}
                        isActive={80 === activeSessionId}
                    />
                </Module>
                <Module
                    name={'Подразделение финансовой разведки'}
                    moduleId={5}
                    isOpen={currentModule === 5}
                    handleModuleOpen={handleModuleOpen}
                >
                    <Session
                        course_id={8}
                        session={{
                            id: 81,
                            name: 'Агентство Республики Казахстан по финансовому мониторингу',
                            progress: 0,
                        }}
                        handleSessionClick={handleSessionClick}
                        isActive={81 === activeSessionId}
                    />
                    <Session
                        course_id={8}
                        session={{
                            id: 82,
                            name: 'Межведомственные органы и рабочие группы',
                            progress: 0,
                        }}
                        handleSessionClick={handleSessionClick}
                        isActive={82 === activeSessionId}
                    />
                    <Session
                        course_id={8}
                        session={{
                            id: 10,
                            group: 'introduction',
                            name: 'Тестирование 5',
                            progress: 0,
                        }}
                        handleSessionClick={handleSessionClick}
                        isActive={10 === activeSessionId}
                    />
                </Module>
                <Module
                    name={'Требования к внутренним нормативным документам'}
                    moduleId={6}
                    isOpen={currentModule === 6}
                    handleModuleOpen={handleModuleOpen}
                >
                    <Session
                        course_id={8}
                        session={{
                            id: 83,
                            group: 'introduction',
                            name: 'Правила внутреннего контроля',
                            progress: 0,
                        }}
                        handleSessionClick={handleSessionClick}
                        isActive={83 === activeSessionId}
                    />
                </Module>
                <Module
                    name={'Подготовка и обучение'}
                    moduleId={7}
                    isOpen={currentModule === 7}
                    handleModuleOpen={handleModuleOpen}
                >
                    <Session
                        course_id={8}
                        session={{
                            id: 84,
                            name: 'Требования к СФМ по подготовке и обучению в сфере ПОД/ФТ',
                            progress: 0,
                        }}
                        handleSessionClick={handleSessionClick}
                        isActive={84 === activeSessionId}
                    />
                    <Session
                        course_id={8}
                        session={{
                            id: 11,
                            group: 'introduction',
                            name: 'Тестирование 7',
                            progress: 0,
                        }}
                        handleSessionClick={handleSessionClick}
                        isActive={11 === activeSessionId}
                    />
                </Module>
                <Session
                    course_id={8}
                    session={{
                        id: 999,
                        name: 'Заключительная часть',
                        progress: 0,
                    }}
                    handleSessionClick={handleSessionClick}
                    isActive={999 === activeSessionId}
                />
                {
                    courseProgress > 99.9 
                    ? (
                        <Session
                            checked={true}
                            // course_id={course_id}
                            session={{
                                id: -2,
                                name: 'Обратная связь',
                            }}
                            handleSessionClick={handleSessionClick}
                            isActive={-2 === activeSessionId}
                        />
                    ) : null
                }
            </div>

        </div>
    )
}





export default Basic_course;