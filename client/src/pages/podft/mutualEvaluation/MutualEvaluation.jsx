import React from 'react';
import cl from './MutualEvaluation.module.css';
import DefaultHeader from '../../../components/defaultHeader/DefaultHeader';
import Footer from '../../../components/footer/Footer';
import mutualEvaluationImg from '../../../assets/images/marks.svg';
import Header from '../../../components/header/Header';

import { useTranslation } from 'react-i18next';



function MutualEvaluation() {

    const { t } = useTranslation();

    return (
        <div className={cl.mutualEvaluationWrapper}>
            <Header dark={true} />
            <div className={cl.container}>
                <h1 className={cl.headline}>{t('mutual assessment')}</h1>
                <div className={cl.mutualEvaluationContent}>
                <img src={mutualEvaluationImg} alt="mutualEvaluationImg" style={{ height: '190px' }} />
                    <p className={cl.mutualEvaluationText}>
                        {t('descMut1')}
                    </p>
                   
                </div>
                <div className={cl.mutualEvaluationBlock}>
                    <p className={cl.text}>
                    {t('descMut2')}
                    <br></br>
                    <br></br>
                    {t('descMut3')}
                    <br></br>
                    <br></br>
                    {t('descMut4')}
                    <br></br>
                    <br></br>
                    {t('descMut5')}
                    </p>
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default MutualEvaluation;