import React from 'react';
import { useTranslation } from 'react-i18next';
import CoursesComponent from '../../components/courses-component';
import EventsComponent from '../../components/event-component';
import './style.css';

const SecondSection = ({ imagesHidden, styles }) => {
    const { t } = useTranslation();

    return (
        <section className='second-section'>
            <EventsComponent />
            <CoursesComponent />
        </section>
    );
};

export default SecondSection;
