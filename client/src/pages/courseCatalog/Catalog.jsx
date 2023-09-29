import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import DefaultHeader from '../../components/defaultHeader/DefaultHeader';
import Footer from '../../components/footer/Footer';

import './catalog.scss';

import course1 from './../../assets/images/courses-1.png';
import course2 from './../../assets/images/courses-2.png';
import course3 from './../../assets/images/courses-3.png';
import course4 from './../../assets/images/courses-4.png';
import course5 from './../../assets/images/courses-5.png';
import course6 from './../../assets/images/courses-6.png';
import course7 from './../../assets/images/courses-7.png';
import course8 from './../../assets/images/courses-8.png';

import bookIcon from './../../assets/icons/book.svg'

function Catalog() {
    const navigate = useNavigate();
    const [courses, setCourses] = useState([]);

    useEffect(() => {
        setCourses([
            {
                img: course1, 
                category: 'Антиотмывочная система РК',
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
                category: 'Антиотмывочная система РК',
                route: '/courses/specialized',
                status: 'В процессе',
                lang: 'РУС',
                duration: '1ч 45мин',
                rate: '4.9',
                type: 'Электронное обучение',
            },
            {
                img: course3, 
                title: 'Профессиональный курс', 
                category: 'Антиотмывочная система РК',
                route: '/courses/professional',
                status: 'В процессе',
                lang: 'РУС',
                duration: '1ч 45мин',
                rate: '4.7',
                type: 'Электронное обучение',
            },
            {
                img: course4, 
                title: 'Повышение квалификации', 
                category: 'Антиотмывочная система РК',
                route: '/courses/advanced',
                status: 'Завершен',
                lang: 'РУС',
                duration: '1ч 45мин',
                rate: '4.2',
                type: 'Электронное обучение',
            },

            {
                img: course1, 
                category: 'Антиотмывочная система РК',
                title: 'Базовый курс',
                route: '/courses/basic',
                status: 'В процессе',
                lang: 'РУС',
                duration: '1ч 45мин',
                rate: '4.3',
                type: 'Электронное обучение',
            },
            {
                img: course4, 
                title: 'Повышение квалификации', 
                category: 'Антиотмывочная система РК',
                route: '/courses/advanced',
                status: 'Завершен',
                lang: 'РУС',
                duration: '1ч 45мин',
                rate: '4.2',
                type: 'Электронное обучение',
            },
            {
                img: course4, 
                title: 'Повышение квалификации', 
                category: 'Антиотмывочная система РК',
                route: '/courses/advanced',
                status: 'Завершен',
                lang: 'РУС',
                duration: '1ч 45мин',
                rate: '4.2',
                type: 'Электронное обучение',
            },
            {
                img: course2, 
                title: 'Профильный курс', 
                category: 'Антиотмывочная система РК',
                route: '/courses/specialized',
                status: 'В процессе',
                lang: 'РУС',
                duration: '1ч 45мин',
                rate: '4.3',
                type: 'Электронное обучение',
            },
            {
                img: course3, 
                title: 'Профессиональный курс', 
                category: 'Антиотмывочная система РК',
                route: '/courses/professional',
                status: 'В процессе',
                lang: 'РУС',
                duration: '1ч 45мин',
                rate: '5.0',
                type: 'Электронное обучение',
            },
            {
                img: course2, 
                title: 'Профильный курс', 
                category: 'Антиотмывочная система РК',
                route: '/courses/specialized',
                status: 'В процессе',
                lang: 'РУС',
                duration: '1ч 45мин',
                rate: '4.3',
                type: 'Электронное обучение',
            },
            {
                img: course5, 
                title: 'Повышение квалификации', 
                category: 'Обучение',
                route: '/courses/advanced',
                status: 'Завершен',
                lang: 'РУС',
                duration: '1ч 45мин',
                rate: '4.5',
                type: 'Электронное обучение',
            },
            {
                img: course6, 
                title: 'Повышение квалификации', 
                category: 'Обучение',
                route: '/courses/advanced',
                status: 'Завершен',
                lang: 'РУС',
                duration: '4ч 45мин',
                rate: '5.0',
                type: 'Электронное обучение',
            },
            {
                img: course7, 
                title: 'Повышение квалификации', 
                category: 'Обучение',
                route: '/courses/advanced',
                status: 'Завершен',
                lang: 'РУС',
                duration: '5ч 45мин',
                rate: '3.2',
                type: 'Электронное обучение',
            },
            {
                img: course8, 
                title: 'Повышение квалификации', 
                category: 'Обучение',
                route: '/courses/advanced',
                status: 'Завершен',
                lang: 'РУС',
                duration: '2ч 45мин',
                rate: '4.2',
                type: 'Электронное обучение',
            },
            {
                img: course7, 
                title: 'Python beginner', 
                category: 'IT Technologies',
                route: '/courses/advanced',
                status: 'Не начато',
                lang: 'ENG',
                duration: '9ч 45мин',
                rate: '4.6',
                type: 'Электронное обучение',
            },
            {
                img: course8, 
                title: 'Javascript разработчик (средний)', 
                category: 'IT Technologies',
                route: '/courses/advanced',
                status: 'Не начато',
                lang: 'РУС',
                duration: '4ч 45мин',
                rate: '3.6',
                type: 'Электронное обучение',
            },

        ])
    }, [])

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
                        }}>Каталог курсов</h3>
                    </div>
                </div>


                <CoursesBlock 
                    categoryName={'Антиотмывочная система РК'} 
                    categoryDesc={'Курсы AML ACADEMY составлены специалистами в области ПОД/ФТ с многолетним опытом работы в данной сфере, в том числе в уполномоченном государственном органе.'} 
                    courses={courses} />

                <CoursesBlock 
                    categoryName={'Обучение'} 
                    categoryDesc={'Широкий спектр профессиональных курсов в Астане по самым разным направлениям'} 
                    courses={courses} />

                <CoursesBlock 
                    categoryName={'IT Technologies'} 
                    categoryDesc={'lorem ipsum dolor sit amet, consectetur adipiscing'} 
                    courses={courses} />
                
            </main>

            <Footer />
        </div>
    );
}

const CoursesBlock = ({categoryName, categoryDesc, courses}) => {
    console.log(categoryName, courses)
    // console.log(typeof categoryName, typeof courses[0]['category'] || '');

    const navigate = useNavigate();
    courses = courses.filter(({ category }) => category === categoryName);

    if (courses.length === 0) return;

    return (
        <>

        <div className='container'>
            <h1 style={{
                fontFamily: 'Roboto',
                fontSize: '20px',
                fontWeight: '500',
                lineHeight: '23px',
                letterSpacing: '0em',
                textAlign: 'left'
                
            }}>{categoryName}</h1>
            <p style={{
                fontFamily: "Roboto",
                fontSize: '16px',
                fontWeight: '400',
                lineHeight: '19px',
                letterSpacing: '0em',
                textAlign: 'left',
                color: '#656678'
                
            }}>
                {categoryDesc}
            </p>
        </div>

        <div className="courses-block container">
            {
                courses.map(course => {
                    return (
                        <div onClick={() => {
                            navigate(course.route);
                        }}>
                            <img src={course.img} alt={course.title} />
                            <h3>{course.title}</h3>
                            <div className='characteristics'>
                                <p>{course.lang} | {course.duration}</p>
                                <div>{course.rate}</div>
                            </div>
                            <div>
                                {course.type}
                            </div>
                        </div>   
                    )
                })
            }
        </div>
        
        </>
    )
}

export default Catalog;