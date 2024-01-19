import React from 'react';
import cl from './Fatf.module.css';

import './fatf.scss'
import fatfImg from '../../../assets/images/fatf.svg';
import DefaultHeader from '../../../components/defaultHeader/DefaultHeader';
import Footer from '../../../components/footer/Footer';
import Header from '../../../components/header/Header';
import { useTranslation } from 'react-i18next';



function Fatf() {
    const { t } = useTranslation();

    return (
        <div className={'fatfWrapper'}>

            <Header dark={true}/>
            <div className={'container'}>
                <h1 className={'headline-fatf'}>{t('fatf')}</h1>
                <div className={'fatfContent'}>
                    <img src={fatfImg} alt="fatfImg" />
                    <div className={'fatfContentInner'}>
                        <div className={'fatfBlock'}>
                            <p className={'fatfBlockText'}>
                                {t('descFatf1')}
                            </p>
                        </div>
                        <div className={'fatfBlock'}>
                            <p className={'fatfBlockText'}>
                            {t('descFatf2')}                            
                            </p>
                        </div>
                    </div>
                </div>
                <div className={'fatfText'}>
                        <p className={'text'}>
                        {t('descFatf3')}
                        </p>
                        <ul className={'list'}>
                            <li>{t('descFatf4')}</li>
                            <li>{t('descFatf5')}</li>
                            <li>{t('descFatf6')}</li>
                            <li>{t('descFatf7')}</li>
                            <li>{t('descFatf8')}</li>
                        </ul>
                    </div>
                    <div className={'block'}>
                        <p className={'text'}>
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