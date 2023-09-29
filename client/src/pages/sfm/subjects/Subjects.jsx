import React from 'react';
import cl from './Subjects.module.css';
import DefaultHeader from '../../../components/defaultHeader/DefaultHeader';
import Footer from '../../../components/footer/Footer';

const data = require('../../../components/data/subjectsData.json');

function Subjects() {
    return (
        <div className={cl.subjectsWrapper}>
            <div className={cl.container}>
            <DefaultHeader />
                <h1 className={cl.headline}>Виды субъектов финансового мониторинга</h1>
                <p className={cl.subjectsText}>Согласно п.1 ст.3 Закона «О противодействии легализации (отмыванию) доходов, добытых преступным путем, и финансированию терроризма» к субъектам финансового мониторинга относятся:</p>
                <div className={cl.cardContent}>
                    {data.subjects.map((item) => (
                        <div className={cl.card} key={item.id}>
                            <p className={cl.number}>{item.number}</p>
                            <p className={cl.text}>{item.text}</p>
                        </div>
                    ))}
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default Subjects;