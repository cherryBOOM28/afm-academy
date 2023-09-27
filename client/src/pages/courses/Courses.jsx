import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import DefaultHeader from '../../components/defaultHeader/DefaultHeader';
import Footer from '../../components/footer/Footer';

import './Courses.scss';

import course1 from './../../assets/images/courses-1.png';
import course2 from './../../assets/images/courses-2.png';
import course3 from './../../assets/images/courses-3.png';
import course4 from './../../assets/images/courses-4.png';

function CoursesPage() {
    const navigate = useNavigate();

    return ( 
        <div className="courses-page">
            <div>
                <div className="container">
                    <DefaultHeader />
                </div>
            </div>

            <main className='page-content container'>
                <h1>Антиотмывочная система РК</h1>
                <p>
                    Курсы AML ACADEMY составлены специалистами в области ПОД/ФТ с многолетним опытом работы в данной сфере, в том числе в уполномоченном государственном органе. При создании программы курсов большое значение придавалось специфике каждой сферы деятельности субъектов финансового мониторинга для более четкого понимания ими своих обязанностей, и с учетом различий по требованиям законодательства для разных видов субъектов. Возможность выбора наиболее удобного формата обучения позволяет пройти обучение из любой точки мира, в наиболее удобное для вас время.
                </p>

                <div className="courses-block">
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