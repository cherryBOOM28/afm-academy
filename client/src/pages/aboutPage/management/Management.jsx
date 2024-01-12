import React from 'react';
import cl from './Management.module.css';
import DefaultHeader from '../../../components/defaultHeader/DefaultHeader';
import firstDirector from '../../../assets/images/1.svg';
import secondDirector from '../../../assets/images/2.svg';
import thirdDirector from '../../../assets/images/3.svg';
import forthDirector from '../../../assets/images/4.svg';
import fifthDirector from '../../../assets/images/5.svg';
import Footer from '../../../components/footer/Footer';
import Header from '../../../components/header/Header';

import { useTranslation } from 'react-i18next';


function Management() {
    const { t } = useTranslation();

    return (
        <div className={cl.managementWrapper}>
            <Header dark={true} />
            <div className={cl.container}>
                <h1 className={cl.headline}>{t('board of directors')}</h1>
                <div className={cl.boardOfDirectors}>
                    <div className={cl.director}>
                        <img src={firstDirector} alt="" />
                        <p className={cl.name}>{t('firstDirector')}</p>
                        <p className={cl.post}>{t('descFirstDir')}</p>
                    </div>
                    {/* <div className={cl.director}>
                        <img src={secondDirector} alt="" />
                        <p className={cl.name}>Садырбеков Габит Амангельдиевич</p>
                        <p className={cl.post}>Первый заместитель Председателя Агентства Республики Казахстан по финансовому мониторингу, член Совета директоров</p>
                    </div> */}
                    <div className={cl.director}>
                        <img src={thirdDirector} alt="" />
                        <p className={cl.name}>{t('secondDirector')}</p>
                        <p className={cl.post}>{t('descSecondDir')}</p>
                    </div>
                    <div className={cl.director}>
                        <img src={forthDirector} alt="" />
                        <p className={cl.name}>{t('therdDirector')}</p>
                        <p className={cl.post}>{t('descTherdDir')}</p>
                    </div>
                    <div className={cl.director}>
                        <img src={fifthDirector} alt="" />
                        <p className={cl.name}>{t('fourthDirector')}</p>
                        <p className={cl.post}>{t('descFourthDir')}</p>
                    </div>
                </div>                
            </div>
            <Footer />
        </div>
    );
}

export default Management;