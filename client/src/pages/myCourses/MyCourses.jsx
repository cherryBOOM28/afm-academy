import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import DefaultHeader from '../../components/defaultHeader/DefaultHeader';
import Footer from '../../components/footer/Footer';

import './myCourses.scss';

import course1 from './../../assets/images/courses-1.png';
import course2 from './../../assets/images/courses-2.png';
import course3 from './../../assets/images/courses-3.png';
import course4 from './../../assets/images/courses-4.png';

import bookIcon from './../../assets/icons/book.svg'

function MyCourses() {
    const navigate = useNavigate();
    const [courses, setCourses] = useState([]);

    useEffect(() => {
        setCourses([
            {
                img: course1, 
                cateory: 'Антиотмывочная система РК',
                title: 'Базовый курс',
                route: '/courses/basic',
                status: 'В процессе',
                lang: 'РУС',
                duration: '1ч 45мин',
                rate: '5.0',
                type: 'Электронное обучение',
            },
            {
                img: course2, 
                title: 'Профильный курс', 
                cateory: 'Антиотмывочная система РК',
                route: '/courses/specialized',
                status: 'Не начато',
                lang: 'РУС',
                duration: '1ч 45мин',
                rate: '5.0',
                type: 'Электронное обучение',
            },
            {
                img: course3, 
                title: 'Профессиональный курс', 
                cateory: 'Антиотмывочная система РК',
                route: '/courses/professional',
                status: 'В процессе',
                lang: 'РУС',
                duration: '1ч 45мин',
                rate: '5.0',
                type: 'Электронное обучение',
            },
            {
                img: course4, 
                title: 'Повышение квалификации', 
                cateory: 'Антиотмывочная система РК',
                route: '/courses/advanced',
                status: 'Завершен',
                lang: 'РУС',
                duration: '1ч 45мин',
                rate: '5.0',
                type: 'Электронное обучение',
            },
            {
                img: course4, 
                title: 'Повышение квалификации', 
                cateory: 'Антиотмывочная система РК',
                route: '/courses/advanced',
                status: 'Завершен',
                lang: 'РУС',
                duration: '1ч 45мин',
                rate: '5.0',
                type: 'Электронное обучение',
            },
            {
                img: course4, 
                title: 'Повышение квалификации', 
                cateory: 'Антиотмывочная система РК',
                route: '/courses/advanced',
                status: 'Завершен',
                lang: 'РУС',
                duration: '1ч 45мин',
                rate: '5.0',
                type: 'Электронное обучение',
            },
            {
                img: course4, 
                title: 'Повышение квалификации', 
                cateory: 'Антиотмывочная система РК',
                route: '/courses/advanced',
                status: 'Завершен',
                lang: 'РУС',
                duration: '1ч 45мин',
                rate: '5.0',
                type: 'Электронное обучение',
            },
        ]);
    }, []);

    return ( 
        <div className="courses-page">
            <div>
                <div className="container">
                    <DefaultHeader />
                </div>
            </div>

            <main className='page-content '>
                <div style={{
                    background: '#F2F2F2',    
                    padding: '25px 0px',
                    marginTop: '60px'             
                }}>
                    <div className='container' style={{
                        display: 'flex',
                        flexDirection: 'row',
                        alignItems: 'center',
                        // justifyContent: 'center',
                        gap: '15px',
                    }}>
                        <img src={bookIcon} alt="book icon" style={{
                            height: '50px',
                            width: '50px'
                        }} />
                        <h3 style={{
                            fontFamily: 'Roboto',
                            fontSize: '26px',
                            fontWeight: '700',
                            lineHeight: '50px',
                            letterSpacing: '0em',
                            textAlign: 'left',
                            paddingTop: '8px'
                        }}>Мои курсы</h3>
                    </div>
                </div>


                <div className='container'>
                    <h1 style={{
                        fontFamily: 'Roboto',
                        fontSize: '20px',
                        fontWeight: '500',
                        lineHeight: '23px',
                        letterSpacing: '0em',
                        textAlign: 'left'
                        
                    }}>Обучение</h1>
                    <p style={{
                        fontFamily: "Roboto",
                        fontSize: '16px',
                        fontWeight: '400',
                        lineHeight: '19px',
                        letterSpacing: '0em',
                        textAlign: 'left',
                        color: '#656678'
                        
                    }}>
                        Широкий спектр профессиональных курсов в Астане по самым разным направлениям
                    </p>
                </div>

                <div className="courses-block container">
                    {
                        courses.map(course => (
                            <Course course={course} /> 
                        ))
                    }
                </div>
            </main>

            <Footer />
        </div>
    );
}

const Course = ({course}) => {
    const navigate = useNavigate();
    const status = course.status;
    const statusColor = status === 'Завершен' 
                    ? 'red' 
                    : status === 'Не начато'
                        ? 'green'
                        : 'blue';

    return (
        <div onClick={() => {
            navigate(course.route);
        }}>
            <img src={course.img} alt={course.title} />
            <h3>{course.title}</h3>
            <p style={{
                padding: '5px 10px',
                width: 'max-content',
                borderRadius: '5px',
                background: statusColor,
                color: 'white',

                }}>{status}</p>
            <div className='characteristics'>
                <p>{course.lang} | {course.duration}</p>
                <div>{course.rate}</div>
            </div>
            <div>
                {course.type}
            </div>
        </div>   
    )        
}

export default MyCourses;