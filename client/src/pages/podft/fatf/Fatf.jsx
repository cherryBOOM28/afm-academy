import React from 'react';
import cl from './Fatf.module.css';
import fatfImg from '../../../assets/images/fatf.svg';
import DefaultHeader from '../../../components/defaultHeader/DefaultHeader';
import Footer from '../../../components/footer/Footer';
import Header from '../../../components/header/Header';
import { useTranslation } from 'react-i18next';



function Fatf() {
    const { t } = useTranslation();

    return (
        <div className={cl.fatfWrapper}>

            <Header dark={true}/>
            <div className={cl.container}>
                <h1 className={cl.headline}>{t('fatf')}</h1>
                <div className={cl.fatfContent}>
                    <img src={fatfImg} alt="fatfImg" style={{ height: "220px" }} />
                    <div className={cl.fatfContentInner}>
                        <div className={cl.fatfBlock}>
                            <p className={cl.fatfBlockText}>
                                {t('descFatf1')}
                            </p>
                        </div>
                        <div className={cl.fatfBlock}>
                            <p className={cl.fatfBlockText}>
                            {t('descFatf2')}                            
                            </p>
                        </div>
                    </div>
                </div>
                <div className={cl.fatfText}>
                        <p className={cl.text}>
                        {t('descFatf3')}
                        </p>
                        <ul className={cl.list}>
                            <li>{t('descFatf4')}</li>
                            <li>{t('descFatf5')}</li>
                            <li>{t('descFatf6')}</li>
                            <li>{t('descFatf7')}</li>
                            <li>{t('descFatf8')}</li>
                        </ul>
                    </div>
                    <div className={cl.block}>
                        <p className={cl.text}>
                        {t('descFatf9')}                        
                        </p>
                    </div>
                    <div style={{marginBottom: '100px',}}>
                        <a href="https://www.fatf-gafi.org/en/home.html" style={{color: 'black'}}>{t('linkFatf')}</a>
                    </div>
            </div>
            <Footer />
        </div>
    );
}

export default Fatf;