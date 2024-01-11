import React from 'react';
import cl from './Eag.module.css';
import DefaultHeader from '../../../components/defaultHeader/DefaultHeader';
import Footer from '../../../components/footer/Footer';
import eagImg from '../../../assets/images/eag.svg';
import eagGroup from '../../../assets/images/eagGroup.svg';
import Header from '../../../components/header/Header';

import { useTranslation } from 'react-i18next';


function Eag() {

    const { t } = useTranslation();

    return (
        <div className={cl.eagWrapper}>
  
            <Header dark={true} />
            <div className={cl.container}>
                <h1 className={cl.headline}>{t('eag')}</h1>
                <div className={cl.eagImgContent}>
                    <img src={eagImg} alt="eagImg" />
                    <p className={cl.eagImgTextFirst}>
                        {t('descEag1')}
                    </p>
                </div>
                <div className={cl.block}>
                        <p className={cl.text}>
                        {t('descEag2')}
                        </p>
                </div>
            </div>
            <div className={cl.groupWrapper}>
                <div className={cl.container}>
                <div className={cl.eagImgContent}>
                    <img src={eagGroup} alt="eagGroup" />
                    <div className={cl.eagImgText}>
                        <span>{t('descEag3')}</span>
                        <br></br>
                        <ul className={cl.eagDisc}>
                            <li>
                            {t('descEag4')}
                            </li>
                            <li>
                            {t('descEag5')}
                            </li>
                            <li>
                            {t('descEag6')}
                            </li>
                        </ul>
                    </div>
                </div>
                <div className={cl.eagLastText}>
                    <ul className={cl.eagDisc}>
                        <li>
                        {t('descEag7')}
                        </li>
                        <li>
                        {t('descEag4')}
                        </li>
                    </ul>
                </div>
                <div style={{marginBottom: '100px',}}>
                        <a href="https://eurasiangroup.org/ru" style={{color: 'black'}}>{t('linkEag')}</a>
                </div>
                </div>
                
            </div>
            <Footer />
        </div>
    );
}

export default Eag;