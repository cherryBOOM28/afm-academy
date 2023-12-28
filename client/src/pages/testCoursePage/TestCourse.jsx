// import React, { useState, useEffect } from 'react';
// import closeIcon from './closeIcon.svg'
// import lectorImage from './lectorImage.png';
// import arrowDownIcon from './arrowDownIcon.svg';
// import { useNavigate } from 'react-router-dom';

// import './testCourse.scss'

// import { Session, SessionGroup } from '../../components/sessions/Sessions';
// import Content from '../testContent/TestCourseContent';
// import Content2 from '../testContent/TestCourseContent2';
// import QuizPage from '../testContent/quizPage';

// function TestCourse(props) {
//     const [courseName, setCourseName] = useState('');
//     const [courseSessions, setCourseSessions] = useState([
//         { 
//             id: 1,
//             group: 'introduction',
//             name: 'Introduction',
//             progress: 100,
//             lector: {
//                 name: 'Lennaert Peek',
//                 image: lectorImage,
//             },
//             content: []
//         },

//     ]);
//     const [activeSessionId, setActiveSessionId] = useState(-1);

//     const navigate = useNavigate();

//     // onLoad useEffect
//     useEffect(() => {
//         setCourseName('Базовый курс');

//         setCourseSessions([
//             { 
//                 id: 1,
//                 group: 'introduction',
//                 name: 'Введение',
//                 progress: 0,
//                 lector: {
//                     name: 'Lennaert Peek',
//                     image: lectorImage,
//                 },
//                 content: []
//             },
//             { 
//                 id: 2,
//                 group: 'background',
//                 name: 'Входной тест',
//                 progress: 100,
//                 lector: {
//                     name: 'Lennaert Peek',
//                     image: lectorImage,
//                 },
//                 content: []
//             },
//             { 
//                 id: 3,
//                 group: 'background',
//                 name: 'Роль СФМ',
//                 progress: 100,
//                 lector: {
//                     name: 'Lennaert Peek',
//                     image: lectorImage,
//                 },
//                 content: []
//             },
//             { 
//                 id: 4,
//                 group: 'background',
//                 name: 'Выходной тест',
//                 progress: 100,
//                 lector: {
//                     name: 'Lennaert Peek',
//                     image: lectorImage,
//                 },
//                 content: []
//             },
//             // { 
//             //     id: 4,
//             //     group: 'background',
//             //     name: 'Роль Уполномоченного органа (АФМ РК)',
//             //     progress: 100,
//             //     lector: {
//             //         name: 'Lennaert Peek',
//             //         image: lectorImage,
//             //     },
//             //     content: []
//             // },
//             // { 
//             //     id: 5,
//             //     group: 'background',
//             //     name: 'Роль ГО регулятора',
//             //     progress: 100,
//             //     lector: {
//             //         name: 'Lennaert Peek',
//             //         image: lectorImage,
//             //     },
//             //     content: []
//             // },
//         ]);

//         setActiveSessionId(1);
//     }, [])

//     const handleSessionClick = (id) => {
//         console.log(id)
//         setActiveSessionId(id);
//     }

//     return ( 
//         <div className="course-page">

//             <div className="course-wrapper">

//                 <div className="course-head">
//                     <div>
//                         {/* <div className="course-title">{courseName}</div> */}
//                         <div className="course-subtitle">{courseName}</div>
//                     </div>
//                     <div className='close-icon' onClick={() => {
//                         navigate('/courses/')
//                     }}>
//                         <img src={closeIcon} alt="close" />
//                     </div>
//                 </div>

//                 <div className="course-body">

//                     <div className="course-nav">

//                         <div className="nav-head">
//                             <div>
//                                 <h2>{courseName}</h2>
//                                 <div className='progress-bar'>
//                                     <div>22% complete</div>
//                                 </div>
//                             </div>
//                         </div>
//                         <div className="nav-body">
//                             {courseSessions.filter(session => session.group === 'introduction').map(session => {
//                                 return (
//                                     <Session session={session} handleSessionClick={handleSessionClick} isActive={session.id === activeSessionId}/>
//                                 )
//                             })}

//                             <SessionGroup title="Вводная часть" sessions={courseSessions} groupName={'background'} handleSessionClick={handleSessionClick} activeSession={activeSessionId}/>
//                             {/* <SessionGroup sessions={courseSessions} groupName={'scenario'} handleSessionClick={handleSessionClick} activeSession={activeSessionId}/> */}
//                         </div>

//                     </div>

//                     <div className="course-content">
//                         <GetContent activeSessionId={activeSessionId}/>
//                     </div>

//                 </div>

//             </div>

//         </div>
//     );
// }

// const GetContent = ({activeSessionId}) => {

//     if (activeSessionId === 1) return <Content />
//     if (activeSessionId === 2 || activeSessionId === 4) return <QuizPage />
//     else return <Content2 />

// }





// export default TestCourse;