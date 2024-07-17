import React, { useEffect, useState } from 'react';
import { useTranslation } from "react-i18next";
import advancedCourseImg from '../../assets/svg/advanced_course.svg';
import baseCourseImg from '../../assets/svg/base_course.svg';
import profileCourseImg from '../../assets/svg/profile_course.svg';
import tematicCourseImg from '../../assets/svg/tematic_course.svg';
import Card from '../courses-card';
import SectionTitles from '../section-titles';
import './style.css';

const CoursesComponent = () => {
    const [courses, setCourses] = useState([]);
    const { t } = useTranslation();

    useEffect(() => {
        const fetchedCourses = [
            { name: t('core'), imageSrc: baseCourseImg, courseId: 8 },
            { name: t('specialized'), imageSrc: profileCourseImg, courseId: 'catalog#top' },
            { name: t('advanced'), imageSrc: advancedCourseImg, courseId: 'catalog#top' },
            { name: t('thematic'), imageSrc: tematicCourseImg, courseId: 'catalog#top' }
        ];

        setCourses(fetchedCourses);
    }, [t]);

    return (
        <div>
            <SectionTitles title={t('Courses in the field of')}/>
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
