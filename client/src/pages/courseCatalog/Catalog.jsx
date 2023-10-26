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
                const response = await axios.get(`${base_url}/api/aml/course/getCourses`, {
                    headers: {
                        Authorization: `Bearer ${jwtToken}`,
                    },
                });


                const _coursesByCategory = {};

                if (response.status === 200) {
                    response.data.forEach(course => {
                        const categoryName = course.courseCategory.category_name;
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

    const filteredCourses = courses.filter((course) => course.courseCategory.category_name === categoryName);

    if (filteredCourses.length === 0) {
        return null;
    }

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
                    filteredCourses.map(({ id, course_image, course_name, lang, duration, rate, type }) => (
                        <div key={id} onClick={() => navigate(`/courses/${id}`)}>
                            <img src={`${course_image}`} alt={course_name} />
                            <div>
                                <h3>{course_name}</h3>
                                <div className='available'>Доступно</div>
                                <div className='characteristics'>
                                    <p>{lang !== null && lang !== undefined ? lang : 'РУС'} | {duration !== null && duration !== undefined ? duration : '1ч'}</p>
                                    <div className='rate'>
                                        <AiFillStar className='icon' size={20} />
                                        <span>{rate !== null && rate !== undefined ? rate : '5.0'}</span>
                                    </div>
                                </div>
                                <div className='type'>
                                    <div>
                                        {type !== undefined && type !== null ? type : 'Электронное обучение'}
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))
                }
            </div>
        </>
    );
};


export default Catalog;