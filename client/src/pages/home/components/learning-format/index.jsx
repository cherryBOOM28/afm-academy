import React from 'react';
import LearningFormatCard from '../learning-format-card';
import SectionTitles from '../section-titles';
import './style.css';

const learningFormats = [
    {
        header: 'Дистанционный',
        text: 'Форма передачи и получения знаний на расстоянии. Учащиеся и преподаватель могут находиться где угодно и взаимодействовать через смартфон или ПК. Такой формат используют в корпоративном, школьном и высшем образовании.',
        id: '8'
    },
    {
        header: 'Онлайн',
        text: 'Получение знаний и навыков при помощи компьютера или другого гаджета, подключенного к интернету в режиме “здесь и сейчас”. Этот формат обучения еще называют e-learning или “электронное обучение”. И оно считается логическим продолжением дистанционного.',
        id: '8'
    },
    {
        header: 'Оффлайн',
        text: 'Традиционное образование, которое позволяет ученикам лично общаться с преподавателями и своими одногруппниками. Хотя онлайн-преподавание и обучение считаются будущим образования, они не могут заменить офлайн-образование во всех аспектах.',
        id: '8'
    }
];

const LearningFormat = () => {
    return (
        <div style={{ marginTop: '100px'}}>
            <SectionTitles title={'Формат обучения'} />
            <div className='learning-format' style={{ height: "500px" }}>
                <div className='learning-format-wrapper'>
                    {learningFormats.map(format => (
                        <LearningFormatCard
                            key={format.id}
                            header={format.header}
                            text={format.text}
                            id={format.id}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
}

export default LearningFormat;
