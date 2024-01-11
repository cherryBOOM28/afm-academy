import React from 'react';
import cl from './Rules.module.css';
import DefaultHeader from '../../../components/defaultHeader/DefaultHeader';
import Footer from '../../../components/footer/Footer';
import customerImg from '../../../assets/images/customer.svg';
import circleFirst from '../../../assets/images/r1.svg'
import circleSecond from '../../../assets/images/r2.svg'
import circleThird from '../../../assets/images/r3.svg'
import Header from '../../../components/header/Header';
import { useTranslation } from 'react-i18next';

import { t } from 'i18next';



function Rules() {
    const { t } = useTranslation();

    return (
        <div className={cl.rulesWrapper}>
            <Header dark={true}/>
            <div className={cl.container}>
                <h1 className={cl.headline}>{t('internal control rules')}</h1>
                <p className={cl.text}>
                {t('descRules1')}
                </p>
                <div className={cl.rule}>
                    <div className={cl.line}></div>
                    <p className={cl.ruleText}>
                    {t('descRules2')}
                    </p>
                </div>
                <p className={cl.text}>
                {t('descRules3')}
                </p>
                <p className={cl.text}>
                {t('descRules4')}
                </p>
                <div className={cl.ruleBlocks}>
                    <div className={cl.block}>
                        <p className={cl.blockText}>{t('descRules5')}</p>
                    </div>
                    <div className={cl.block}>
                        <p className={cl.blockText}>{t('descRules6')}</p>
                    </div>
                    <div className={cl.block}>
                        <p className={cl.blockText}>{t('descRules7')}</p>
                    </div>
                    <div className={cl.block}>
                        <p className={cl.blockText}>{t('descRules8')}</p>
                    </div>
                    <div className={cl.block}>
                        <p className={cl.blockText}>{t('descRules9')}</p>
                    </div>
                </div>
                <h1 className={cl.subtitle}>{t('descRules10')}</h1>
                <div className={cl.customer}>
                    <div className={cl.customerBlock}>
                        <img src={customerImg} alt="customerImg" style={{ height: '160px' }} />
                        <p className={cl.customerText}>{t('descRules11')}</p>
                    </div>
                    <p className={cl.text}>{t('descRules12')}</p>
                    <div className={cl.customerNumbersContent}>
                        <div className={cl.customerBlock}>
                            <div className={cl.customerNumber}>
                                <img src={circleFirst} alt="circleFirst" className={cl.circleImg} />
                                <p className={cl.numberText}>{t('descRules13')}</p>
                            </div>
                            <div className={cl.customerNumber}>
                                <img src={circleSecond} alt="circleSecond" />
                                <p className={cl.numberText}>{t('descRules14')}</p>
                            </div>
                        </div>
                        <div className={cl.customerNumberThird}>
                            <img src={circleThird} alt="circleThird" />
                            <p className={cl.numberText}>{t('descRules15')}</p>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default Rules;