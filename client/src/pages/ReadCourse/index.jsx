import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

import './style.scss';

import axios from 'axios';
import base_url from './../../settings/base_url';

/* 
   course Templates 
*/
import Sizebox from './../../components/courseTemplates/common/Sizebox';
import Reveal from './../../components/Reveal';
import HeaderWithLine from './../../components/courseTemplates/common/HeaderWithLine';
import NextLesson from './../../components/courseTemplates/complex/NextLesson';
import CourseHeader from './../../components/courseTemplates/course-header';
import { Module, Session } from './../../components/sessions/Sessions';

import lectorImage from './lectorImage.png';
import RandomGlossary from '../../components/courseTemplates/common/RandomGlossary';
import Report_Warning from './../../components/courseTemplates/common/Warnings/Report';
import Centered from './../../components/courseTemplates/common/Centered';
import RandomH2 from './../../components/courseTemplates/common/RandomH2';
import TextWithTitle from './../../components/courseTemplates/common/TextWithTitle';
import RandomParapraph from './../../components/courseTemplates/common/RandomParagraph';
import NotNumberedDots from './../../components/courseTemplates/common/NotNumberedDots';
import TabsGlossary from '../../components/courseTemplates/complex/TabsGlossary';
import DropDownTextWithTabs from '../../components/courseTemplates/complex/DropDownTextWithTabs';
import NumberedDots from './../../components/courseTemplates/common/NumberedDots';
import ImageWithText from './../../components/courseTemplates/common/ImageWithText';
import TextAndLink from './../../components/courseTemplates/complex/TextAndLink';
import FlexRow from './../../components/courseTemplates/common_v2/FlexRow';
import VideoWithTitleAndText from './../../components/courseTemplates/complex/Video/VideoWithTitleAndText';
import VideoLine from './../../components/courseTemplates/common/VideoLine';
import SimpleTable from './../../components/courseTemplates/common/SimpleTable';
import FancyList from './../../components/courseTemplates/common_v2/FancyList';
import FlexBoxes from './../../components/courseTemplates/common_v2/FlexBoxes';
import ImageLine from './../../components/courseTemplates/common/ImageLine';
import DotsOnRoad from './../../components/courseTemplates/common_v2/DotsOnRoad';
import TwoColumnsDivider from './../../components/courseTemplates/common_v2/TwoColumnsDivider';
import Image from './../../components/courseTemplates/common_v2/Image';
import TextWithBackground from './../../components/courseTemplates/common/TextWithBackground';
import FileDownloader from './../../components/courseTemplates/common/FileDownloader';
import Quote from './../../components/courseTemplates/common_v2/Quote';
import IconDots from './../../components/courseTemplates/common_v2/IconDots';
import ImageSequence from './../../components/courseTemplates/common_v2/ImageSequence';
import ThreeColumnsDivider from './../../components/courseTemplates/common_v2/ThreeColumnsDivider';
import InTextFileDownloader from './../../components/courseTemplates/common_v2/InTextFileDownloader';
import ShortBiography from './../../components/courseTemplates/complex/images/ShortBiography';
import Report_Information from '../../components/courseTemplates/common/Warnings/Report_Information';
import Table_1 from '../../components/courseTemplates/common/Tables/Table-1';
import DropDownMSQ from '../../components/courseTemplates/common_v2/DropDownMSQ';
import DropdownList from '../../components/courseTemplates/complex/interactives/DropdownList';
import DropdownList_r5 from '../../components/courseTemplates/complex/interactives/DropdownList_r5';
import DragAndDropTwoSide from '../../components/courseTemplates/complex/DragAndDropTwoSide';
import DropdownGlossaryList from '../../components/courseTemplates/complex/DropdownGlossaryList';
import DataChain from '../../components/courseTemplates/complex/DataChain';

function ReadCourse() {

    const { id } = useParams();
    const [data, setData] = useState(null);
    const [error, setError] = useState(null);
    const [isLoading, setLoading] = useState(true);

    const jwtToken = localStorage.getItem('jwtToken');

    const [courseName, setCourseName] = useState('');
    const [isNavOpen, setIsNavOpen] = useState(true);
    const [activeSessionId, setActiveSessionId] = useState(1);
    const [activeModuleId, setActiveModuleId] = useState(1);

    const [courseProgress, setCourseProgress] = useState(0);
    
    const [courseModules, setCourseModules] = useState([]);

    useEffect(() => {


        fetchData();
        setLoading(false);
    }, []);


    const fetchData = async () => {

        try {
            const res = await axios.get(
                `${base_url}/api/aml/course/getCourseById/${id}`,
                {
                    headers: {
                        Authorization: `Bearer ${jwtToken}`,
                    },
                }
            )
    

            if (res.data.course.modules.length > 0) {   
                setActiveModuleId(res.data.course.modules[0].module_id)
            } 
            if (res.data.course.modules.length > 0 && res.data.course.modules[0].lessons.length > 0) {   
                setActiveSessionId(res.data.course.modules[0].lessons[0].lesson_id)
            } 

            setCourseName(res.data.course.course_name);
            setCourseModules(res.data.course.modules);
            console.log(res);
        } catch (e) {
            setError(e);
            console.log(e);
        }
    }


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

    const handleSessionClick = (module_id, lesson_id) => {
        scrollToTopAnimated();
        setActiveSessionId(lesson_id);
        setActiveModuleId(module_id);
    }

    const checkCurrentChapter = (chapterNum) => {
        scrollToTopAnimated();
        setActiveSessionId(activeSessionId + 1);
    };

    const ComponentMapper = {
        HeaderWithLine,
        ImageWithText,
        ImageLine,
        RandomGlossary,
        RandomH2,
        RandomParapraph,
        TextWithBackground,
        TextWithTitle,
        Report_Warning,
        Report_Information,
        NotNumberedDots,
        NumberedDots,
        Table_1,
        FileDownloader,
        VideoLine,
        Sizebox,
        TabsGlossary,
        DropDownTextWithTabs,
        VideoWithTitleAndText,
        TextAndLink,
        DropdownList,
        DropdownList_r5,
        ShortBiography,
        DragAndDropTwoSide,
        DropdownGlossaryList,
        DataChain,
        SimpleTable,
        FancyList,
        FlexBoxes,
        FlexRow
        // Add other mappings as needed
    };

    const getLesson = () => {

        const activeModule = courseModules.find(module => module.module_id === activeModuleId)

        const activeLesson = activeModule
            ? activeModule.lessons.find(lesson => lesson.lesson_id === activeSessionId)
            : null;

        console.log(activeLesson);

        if (!activeLesson) {
            return null;
        }

        return (<LessonPage name={
            activeModule ? 
                activeLesson 
                    ? activeLesson.topic 
                    : 'null lesson'  
                : 'null module'}>


            {activeLesson.componentEntries.map((component, index) => {
                const Component = ComponentMapper[component.componentName];

                if (!Component) {
                    return <div key={index}>Component not found: {component.componentName}</div>;
                }

                // Parse the JSON strings inside the values object to JavaScript objects
                const props = {};
                Object.keys(component.values.values).forEach(key => {
                    props[key] = JSON.parse(component.values.values[key]);
                });

                return (
                    <Reveal key={component.component_entry_id}>
                        <Component {...props} />
                    </Reveal>
                );
            })}

        </LessonPage>)
    }

    if (isLoading) {
        return <div className="loading">
            ...Loading
        </div>
    }

    return ( 
        <div className="read-course">
            <div className="course-wrapper">
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
                        courseModules={courseModules}
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
    courseModules
}) => {

    const [currentModule, setCurrentModule] = useState(
        courseModules.length > 0 ? courseModules[0].module_id : -1
    );

    const handleModuleOpen = (id) => {
        if (currentModule === id) {
            setCurrentModule(-1);
            return;
        }
        setCurrentModule(id);
    }

    const _handleSessionClick = (lesson_id) => {
        handleSessionClick(currentModule, lesson_id);
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
                {
                    courseModules.map((courseModule, index) => {
                        const module_id = courseModule.module_id;
                        const course_name = courseModule.name;
                        const lessons = courseModule.lessons;
                        const module_quiz = courseModule.quiz;

                        return <Module
                            key={index}
                            moduleId={module_id}
                            name={course_name}
                            handleModuleOpen={handleModuleOpen}
                            isOpen={currentModule == module_id}
                        >

                            {
                                lessons.map((lesson, index) => {
                                    const lesson_id = lesson.lesson_id;
                                    const lesson_name = lesson.topic;

                                    return <Session 
                                        session={{
                                            id: lesson_id,
                                            name: lesson_name,
                                        }}
                                        handleSessionClick={_handleSessionClick}
                                        isActive={lesson_id === activeSessionId}
                                    />
                                })
                            }

                            {/* {
                                module_quiz 
                                    ? (
                                        <Session 
                                            session={{
                                                id: module_quiz.quiz_id,
                                                name: module_quiz.title,
                                            }}
                                            handleSessionClick={_handleSessionClick}
                                            isActive={module_quiz.quiz_id === activeSessionId}
                                        />
                                    )
                                    : null 
                            } */}

                        </Module>
                    })
                }
            </div>

        </div>
    )
}

const LessonPage = ({ children, name, lecturer }) => {

    return (
        <>
            <div className="content-header">
                <h1>{name}</h1>
                {
                    lecturer ? 
                    (
                        <div className='lector'>
                            <img src={lectorImage} alt="lector-name" />
                            <p>{lecturer}</p>
                        </div>
                    ) : null
                }                
            </div>
            {children}
        </>
    ); 
}

export default ReadCourse;