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
import axios from 'axios';
import base_url from '../../settings/base_url';

import { AiFillStar } from "react-icons/ai";
import { MdOndemandVideo } from "react-icons/md";


function MyCourses() {
    const navigate = useNavigate();

    const [courses, setCourses] = useState([]);
    const [error, setError] = useState(null);
    const [isLoading, setLoading] = useState(true);

    const jwtToken = localStorage.getItem('jwtToken');

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(`${base_url}/api/aml/course/getUserCourses`, {
                    headers: {
                        Authorization: `Bearer ${jwtToken}`,
                    },
                });

                if (response.status === 200) {
                    console.log(response.data)
                    setCourses(response.data);
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
        
        fetchData();
    }, []);

    return ( 
        <div className="my-courses-page">
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

                <div className="courses-block">
                    <div className="container">
                        <div className="courses-wrapper">
                            {
                                isLoading 
                                    ? (<div className="loading">
                                        <div>загружаем</div>
                                        <div>загружаем</div>
                                        <div>загружаем</div>
                                        <div>загружаем</div>
                                        <div>загружаем</div>
                                    </div>)
                                    : (
                                        <div className="courses-list">
                                            {
                                                courses.filter(course => course.status === 'process').map((course, index) => {
                                                    console.log(course);
                                                    const courseDTO = course.courseDTO;
                                                    const { course_image, course_name } = courseDTO;
                                                    const { status } = course;

                                                    return <div className='course-card' key={index} 
                                                        onClick={() => {
                                                            if (status === 'process') {
                                                                navigate(`/courses/${course.id}/read`)
                                                            } else {
                                                                navigate(`/courses/${course.id}`);
                                                            }
                                                        }}
                                                    >
                                                        <img src={course_image} alt={course_name} />
                                                        <div className="info">
                                                            <div className="course-name">{course_name}</div>
                                                            <div className="status" style={{backgroundColor: status === 'available' ? '#CADEFC' : '#cafccf'}}>
                                                                {status === 'available' ? 'Доступно' : 'В процессе'}
                                                            </div>
                                                            <div className="info-row">
                                                                <div className='langAndDuration'>
                                                                    {'РУС'} | {'1ч 45мин'}
                                                                </div>
                                                                <div className="rating">
                                                                    <AiFillStar className='star-icon' size={23}/>
                                                                    <span>5.0</span>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="type">
                                                            <MdOndemandVideo size={23}/>
                                                            <span>Электронное обучение</span>
                                                        </div>
                                                    </div>
                                                })
                                            }
                                        </div>
                                    )
                            }
                        </div>
                    </div>
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