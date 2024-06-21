import React from 'react';
import { useTranslation } from 'react-i18next';
import EventsComponent from '../../components/event-component';
import './style.css';

const SecondSection = ({ imagesHidden, styles }) => {
    const { t } = useTranslation();

    return (
        <section className='second-section'>
            <EventsComponent/>
        </section>
    );
};

export default SecondSection;
