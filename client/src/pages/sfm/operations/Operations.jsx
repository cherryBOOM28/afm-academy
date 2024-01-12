import React from 'react';
import cl from './Operations.module.css';
import DefaultHeader from '../../../components/defaultHeader/DefaultHeader';
import Footer from '../../../components/footer/Footer';
import graphIcon from '../../../assets/icons/graph.svg';
import groupIcon from '../../../assets/icons/group.svg';
import timeIcon from '../../../assets/icons/time.svg';
import worldIcon from '../../../assets/icons/earth.svg';
import Header from '../../../components/header/Header';

import { useTranslation } from 'react-i18next';


function Operations() {

    const { t } = useTranslation();

    return (
        <div className={cl.OperationsWrapper}>
            <Header dark={true} />
            <div className={cl.container}>
                <h1 className={cl.headline}>{t('transactions subject to financial monitoring')}</h1>
                <div className={cl.blocksContent}>
                    <div className={cl.block}>
                        <img src={graphIcon} alt="graphIcon" className={cl.blockImg} />
                        <p className={cl.blockHeadline}>{t('descOperastions1')}</p>
                        <p className={cl.blockText}>{t('descOperastions2')}
                        </p>
                    </div>
                    <div className={cl.block}>
                        <img src={timeIcon} alt="timeIcon" className={cl.blockImg} />
                        <p className={cl.blockHeadline}>{t('descOperastions3')}</p>
                        <p className={cl.blockText}>
                        {t('descOperastions4')}                        </p>
                    </div>
                    <div className={cl.block}>
                        <img src={groupIcon} alt="groupIcon" className={cl.blockImg} />
                        <p className={cl.blockHeadline}>{t('descOperastions5')}</p>
                        <p className={cl.blockText}>
                        {t('descOperastions6')}
                        </p>
                    </div>
                    <div className={cl.block}>
                        <img src={worldIcon} alt="worldIcon" className={cl.blockImg} />
                        <p className={cl.blockHeadline}>{t('descOperastions7')}</p>
                        <p className={cl.blockText}>
                        {t('descOperastions8')}
                        </p>
                    </div>
                </div>
                <p className={cl.text}>
                {t('descOperastions9')}                
                </p>
                <div className={cl.rule}>
                    <p className={cl.ruleText}>
                    {t('descOperastions10')}                    
                    </p>
                </div>
                <div className={cl.rule}>
                    <p className={cl.ruleText}>
                    {t('descOperastions11')}                    
                    </p>
                </div>
                <div className={cl.numberBlocks}>
                    <div className={cl.smallBlocks}>
                        <div className={cl.innerBlock}>
                            <p className={cl.numberBlocksText}>{t('descOperastions12')}</p>
                        </div>
                        <div className={cl.innerBlock}>
                            <p className={cl.numberBlocksText}>{t('descOperastions13')}</p>
                        </div>
                        <div className={cl.innerBlock}>
                            <p className={cl.numberBlocksText}>{t('descOperastions14')}</p>
                        </div>
                    </div>
                    <div className={cl.bigBlock}>
                        <p className={cl.numberBlocksText}>{t('descOperastions15')}</p>
                    </div>
                </div>
                <p className={cl.text}>{t('descOperastions16')}</p>
                <p className={cl.text}>{t('descOperastions17')}</p>
                <p className={cl.text__last}>{t('descOperastions18')}</p>

            </div>
            <Footer />
        </div>
    );
}

export default Operations;