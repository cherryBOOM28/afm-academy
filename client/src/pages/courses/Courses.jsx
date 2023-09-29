import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import DefaultHeader from '../../components/defaultHeader/DefaultHeader';
import Footer from '../../components/footer/Footer';

import './Courses.scss';

import course1 from './../../assets/images/courses-1.png';
import course2 from './../../assets/images/courses-2.png';
import course3 from './../../assets/images/courses-3.png';
import course4 from './../../assets/images/courses-4.png';

import bookIcon from './../../assets/icons/book.svg'

function CoursesPage() {
    const navigate = useNavigate();

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
                <div className='container'>
                    <h1 style={{
                        fontFamily: 'Roboto',
                        fontSize: '20px',
                        fontWeight: '500',
                        lineHeight: '23px',
                        letterSpacing: '0em',
                        textAlign: 'left'
                        
                    }}>Антиотмывочная система РК</h1>
                    <p style={{
                        fontFamily: "Roboto",
                        fontSize: '16px',
                        fontWeight: '400',
                        lineHeight: '19px',
                        letterSpacing: '0em',
                        textAlign: 'left',
                        color: '#656678'
                        
                    }}>
                        Курсы AML ACADEMY составлены специалистами в области ПОД/ФТ с многолетним опытом работы в данной сфере, в том числе в уполномоченном государственном органе.
                    </p>
                </div>

                <div className="courses-block container">
                    {
                        [
                            {img: course1, title: 'Базовый курс', route: '/courses/basic'},
                            {img: course2, title: 'Профильный курс', route: '/courses/specialized'},
                            {img: course3, title: 'Профессиональный курс', route: '/courses/professional'},
                            {img: course4, title: 'Повышение квалификации', route: '/courses/advanced'},

                        ].map(course => (
                            <div onClick={() => {
                                navigate(course.route);
                            }}>
                                <img src={course.img} alt={course.title} />
                                <h3>{course.title}</h3>
                            </div>   
                        ))
                    }
                </div>
            </main>

            <Footer />
        </div>
    );
}

export default CoursesPage;