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

import { AiFillFolder } from "react-icons/ai";
import { BsFilter } from "react-icons/bs";
import { BiSearch } from "react-icons/bi";
import { AiFillStar } from "react-icons/ai";
import { MdOndemandVideo } from "react-icons/md";

import bookIcon from './../../assets/icons/book.svg'
import base_url from '../../settings/base_url';
import axios from 'axios';

function Catalog() {
    const navigate = useNavigate();

    const [error, setError] = useState(null);
    const [isLoading, setLoading] = useState(true);

    const [coursesByCategory, setCoursesByCategory] = useState(null);

    const jwtToken = localStorage.getItem('jwtToken');

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(`${base_url}/api/aml/course/getUserCourses`, {
                    headers: {
                        Authorization: `Bearer ${jwtToken}`,
                    },
                });

                console.log(response.data)

                const _coursesByCategory = {};

                if (response.status === 200) {
                    response.data.forEach(course => {
                        const categoryName = course.courseDTO.courseCategory.category_name;
                        if (!_coursesByCategory[categoryName]) {
                            _coursesByCategory[categoryName] = [];
                        }
                        _coursesByCategory[categoryName].push(course);
                    });
    
                    console.log(_coursesByCategory)
                    setCoursesByCategory(_coursesByCategory);
                    // setData(response.data);
                } else {
                    // Handle other status codes if needed
                    setError(response.statusText);
                    console.log(response.statusText);
                }

                // Iterate through the courses and categorize them
                

                
            } catch (error) {
                setError(error);
                console.error(error);
            }

            setLoading(false);
        };
        
        fetchData();
      }, []);

    return ( 
        <div className="catalog-page">
            <div>
                <div className="container">
                    <DefaultHeader />
                </div>
            </div>

            <main className='page-content'>
                <div className="catalog-header">
                    <div className='container'>
                        <div className='header-title'>
                            <h3>Каталог курсов</h3>
                        </div>
                        <div className='header-actions'>
                            <div className="filters">
                                <div>
                                    <AiFillFolder size={20} className='icon'/>
                                    <span>Категории</span>
                                </div>
                                <div>
                                    <BsFilter size={20} className='icon'/>
                                    <span>Фильтр</span>
                                </div>
                            </div>
                            <div className="search">
                                <BiSearch size={20} className='icon'/>
                                <input type="text" />
                            </div>
                        </div>
                    </div>

                </div>


                {
                    isLoading ? (
                        <div className="container">
                            <div className="loading" style={{
                                margin: '20px 0px'
                            }}>
                                <div>загружаем</div>
                                <div>загружаем</div>
                                <div>загружаем</div>
                                <div>загружаем</div>
                                <div>загружаем</div>
                            </div>
                        </div>
                    ) : 
                    coursesByCategory !== null ? Object.keys(coursesByCategory).map(categoryName => {
                        
                        return (
                            <CoursesBlock 
                                categoryName={categoryName} 
                                categoryDesc={categoryName} 
                                courses={coursesByCategory[categoryName]} /> 
                        )
                    }) : null
                }
                
            </main>

            <Footer />
        </div>
    );
}

const CoursesBlock = ({ categoryName, categoryDesc, courses }) => {
    console.log(categoryName, courses);

    const navigate = useNavigate();

    const filteredCourses = courses.filter((course) => course.courseDTO.courseCategory.category_name === categoryName);

    // if (filteredCourses.length === 0) {
    //     return null;
    // }

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
                    filteredCourses.map((course, index) => {
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
        </>
    );
};


export default Catalog;