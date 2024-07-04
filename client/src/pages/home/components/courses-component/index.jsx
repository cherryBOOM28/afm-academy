import React, { useEffect, useState } from 'react';
import advancedCourseImg from '../../assets/svg/advanced_course.svg';
import baseCourseImg from '../../assets/svg/base_course.svg';
import profileCourseImg from '../../assets/svg/profile_course.svg';
import tematicCourseImg from '../../assets/svg/tematic_course.svg';
import Card from '../courses-card';
import SectionTitles from '../section-titles';
import './style.css';

const CoursesComponent = () => {
    const [courses, setCourses] = useState([]);

    useEffect(() => {
        const fetchedCourses = [
            { name: 'Базовый', imageSrc: baseCourseImg, courseId: 8 },
            { name: 'Профильный', imageSrc: profileCourseImg, courseId: 'catalog#top' },
            { name: 'Продвинутый', imageSrc: advancedCourseImg, courseId: 'catalog#top' },
            { name: 'Тематический', imageSrc: tematicCourseImg, courseId: 'catalog#top' }
        ];

        setCourses(fetchedCourses);
    }, []);

    return (
        <div>
            <SectionTitles title={'Курсы в сфере ПОД/ФТ'}/>
            <div className='courses-grid-wrapper'>
                <div className="courses-grid">
                    {courses.slice(-4).map((course, index) => (
                        <Card key={index} name={course.name} imageSrc={course.imageSrc} courseId={course.courseId} />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default CoursesComponent;
