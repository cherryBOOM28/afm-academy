import React, { useEffect }, { useEffect } from 'react';
import cl from './Subjects.module.css';
import DefaultHeader from '../../../components/defaultHeader/DefaultHeader';
import Footer from '../../../components/footer/Footer';
import Header from '../../../components/header/Header';

import data_ru from '../../../components/data/subjectsData ru.json';
import data_kz from '../../../components/data/subjectsData ru.json';
import data_eng from '../../../components/data/subjectsData eng.json';

import { useTranslation } from 'react-i18next';

function Subjects() {
    const { i18n } = useTranslation();
    const currentLanguage = i18n.language;

    useEffect(() => {
        console.log(currentLanguage)
    }, [])

    return (
        <div className={cl.subjectsWrapper}>
            <Header dark={true}  />
            <div className={cl.container}>
                <h1 className={cl.headline}>{t('types of subjects of financial monitoring')}</h1>
                <p className={cl.subjectsText}>{t('descSub1')}</p>
                <div className={cl.cardContent}>
                    {(
                        i18n.language === 'ru' 
                            ? data_ru
                            : i18n.language === 'kz' 
                                ? data_kz
                                : data_eng

                    ).subjects.map((item) => (
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
