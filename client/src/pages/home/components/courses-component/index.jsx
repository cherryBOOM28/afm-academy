import React, { useEffect, useState } from 'react';
import cardImg from '../../assets/jpg/test.jpg';
import Card from '../courses-card';
import '../courses-card/style.css';

const CoursesComponent = () => {
    const [courses, setCourses] = useState([]);

    useEffect(() => {
        const fetchedCourses = [
            { name: 'Базовый', imageSrc: cardImg },
            { name: 'Профильный', imageSrc: cardImg },
            { name: 'Продвинутый', imageSrc: cardImg },
            { name: 'Тематический', imageSrc: cardImg },
            { name: 'Дополнительный', imageSrc: cardImg }
        ];

        setCourses(fetchedCourses);
    }, []);

    return (
        <div className="courses-grid">
            {courses.slice(-4).map((course, index) => (
                <Card key={index} name={course.name} imageSrc={course.imageSrc} />
            ))}
        </div>
    );
};

export default CoursesComponent;
