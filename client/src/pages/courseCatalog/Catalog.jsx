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

import base_url from '../../settings/base_url';
import axios from 'axios';
import Header from '../../components/header/Header';

function Catalog() {
    const navigate = useNavigate();

    const [data, setData] = useState(null);
    const [error, setError] = useState(null);
    const [isLoading, setLoading] = useState(true);

    const [coursesByCategory, setCoursesByCategory] = useState(null);

    const jwtToken = localStorage.getItem('jwtToken');

    const [categoryOpen, setCategoryOpen] = useState(false);
    const [filterOpen, setFilterOpen] = useState(false);
    const [categoryFilter, setCategoryFilter] = useState([
        'Все категории'
    ]);
    const [searchValue, setSearchValue] = useState("");

    const handleCheckCategory = (e) => {
        const selectedCategory = e.target.value;
        setCategoryFilter(prevFilters => {
            if (!e.target.checked) {
                return prevFilters.filter(filter => filter !== selectedCategory);
            } else {
                prevFilters = prevFilters.filter(filter => filter !== 'Все категории');
                return [...prevFilters, selectedCategory];
            }
        });
    };

    const handleCheckAllCategories = (e) => {
        if (!e.target.checked) {
            setCategoryFilter([]);
        } else {
            setCategoryFilter(['Все категории']);
        }
    }

    const handleChangeSearchValue = (e) => {
        setSearchValue(e.target.value);
    }

    useEffect(() => {
        if (!data) return;

        if (searchValue === "") {
            const _coursesByCategory = {};
            data.forEach(course => {
                const categoryName = course.courseDTO.courseCategory.category_name;
                if (!_coursesByCategory[categoryName]) {
                    _coursesByCategory[categoryName] = [];
                }
                _coursesByCategory[categoryName].push(course);
            });
            setCoursesByCategory(_coursesByCategory);
        } else {
            const _coursesByCategory = {};
            data
            .filter(course => course.courseDTO.course_name.toLowerCase().indexOf(searchValue.toLowerCase()) != -1 
                    || course.courseDTO.courseCategory.category_name.toLowerCase().indexOf(searchValue.toLowerCase()) != -1)
            .forEach(course => {
                const categoryName = course.courseDTO.courseCategory.category_name;
                if (!_coursesByCategory[categoryName]) {
                    _coursesByCategory[categoryName] = [];
                }
                _coursesByCategory[categoryName].push(course);
            });
            setCoursesByCategory(_coursesByCategory);

        }
    }, [searchValue])

    useEffect(() => {
        const fetchData = async () => {
            try {
                const url = '/api/aml/course/getUserCourses';
                const url1 = '/api/aml/course/getUserCoursesNoPr';
                let response = null; // Use let instead of const for response to allow reassignment
                if (jwtToken != null) {
                    response = await axios.get(`${base_url}${url}`, {
                        headers: {
                            Authorization: `Bearer ${jwtToken}`,
                        },
                    });
                } else {
                    response = await axios.get(`${base_url}${url1}`);
                }
                console.log(response.data)
                setData(response.data)

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
            <Header dark={true} />
            <div>
                <div className="container">
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
                                    <div onClick={() => {
                                        setCategoryOpen(prev => !prev);
                                        setFilterOpen(false);
                                    }}>
                                        <AiFillFolder size={20} className='icon'/>
                                        <span>Категории</span>
                                    </div>
                                    <div 
                                        className="categories" 
                                        style={{
                                            display: categoryOpen ? 'flex' : 'none',
                                        }}
                                        onMouseLeave={() => {
                                            setCategoryOpen(false);
                                        }}
                                    >
                                        <div>
                                            <input 
                                                onChange={handleCheckAllCategories}
                                                checked={categoryFilter.includes('Все категории')}
                                                type="checkbox" 
                                                value={'Все категории'}
                                            />
                                            <label>Все категории</label>
                                        </div>
                                        {
                                            Object.keys(coursesByCategory || {}).map(category => {
                                                const isChecked = categoryFilter.includes(category) 
                                                            && !category.includes('Все категории');
                                            
                                                return (
                                                    <div key={category}>
                                                        <input 
                                                            onChange={handleCheckCategory}
                                                            checked={isChecked}
                                                            type="checkbox" 
                                                            value={category}
                                                        />
                                                        <label>{category}</label>
                                                    </div>
                                                );
                                            })
                                        }
                                    </div>
                                </div>
                                <div>
                                    <div onClick={() => {
                                        setFilterOpen(prev => !prev);
                                        setCategoryOpen(false);
                                    }}>
                                        <BsFilter size={20} className='icon'/>
                                        <span>Фильтр</span>
                                    </div>
                                    <div 
                                        className="filter" 
                                        style={{
                                            display: filterOpen ? 'flex' : 'none',
                                        }}
                                        onMouseLeave={() => {
                                            setFilterOpen(false);
                                        }}
                                    >
                                        <div>Category 1</div>
                                        <div>Category 2</div>
                                        <div>Category 3</div>
                                    </div>
                                </div>
                            </div>
                            <div className="search">
                                <BiSearch size={20} className='icon'/>
                                <input type="text" value={searchValue} onChange={handleChangeSearchValue}/>
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
                        if (
                            !categoryFilter.includes('Все категории') &&
                            !categoryFilter.includes(categoryName)
                        ) return;

                        return (
                            <CoursesBlock 
                                key={categoryName}
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
    // console.log(categoryName, courses);

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
                                if (status === 'process' || status === 'finished') {
                                    navigate(`/courses/${course.courseDTO.course_id}/read`)
                                } else {
                                    navigate(`/courses/${course.courseDTO.course_id}`);
                                }
                            }}
                        >
                            <div className="image">
                                <img src={course_image} alt={course_name} />
                                <div className={`status ${status}`}>
                                    {status === 'available' ? 'Доступно' : status === 'process' ? 'В процессе' : 'Завершен'}
                                </div>
                            </div>
                            <div className="info">
                                <div className="course-name">{course_name}</div>
                                <div className='langAndDuration'>
                                    {'РУС'} | {'1ч 45мин'}
                                </div>
                                <div className="rating">
                                    <div className="stars">
                                        <AiFillStar className='star-icon' size={23}/>
                                        <AiFillStar className='star-icon' size={23}/>
                                        <AiFillStar className='star-icon' size={23}/>
                                        <AiFillStar className='star-icon' size={23}/>
                                        <AiFillStar className='star-icon' size={23}/>
                                    </div>
                                    <span>5.0</span>
                                </div>
                                <div className="type">
                                    <MdOndemandVideo size={23}/>
                                    <span>Электронное обучение</span>
                                </div> 
                            </div>
                        </div>
                    })
                }
            </div>
        </>
    );
};


export default Catalog;