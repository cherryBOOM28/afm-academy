import React, { useState } from 'react';
import cl from './AntiLaundering.module.css';
import DefaultHeader from '../../../components/defaultHeader/DefaultHeader';
import Footer from '../../../components/footer/Footer';
import schemeImgRu from '../../../assets/images/schemeRu.svg';
import schemeImgKz from '../../../assets/images/schemeKz.png';
import schemeImgEng from '../../../assets/images/schemeEng.png';
import arrowImg from '../../../assets/images/arrow.svg';
import Header from '../../../components/header/Header';

import { useTranslation } from 'react-i18next';


function AntiLaundering() {
    const { t } = useTranslation();
    const { i18n } = useTranslation();
    const currentLanguage = i18n.language;

    const [activeTab, setActiveTab] = useState(1);

    const handleTabClick = (tabIndex) => {
      setActiveTab(tabIndex);
    };

    return (
        <div className={cl.antiLaunderingWrapper}>

            <Header dark={true} />
            <div className={cl.container}>
                <h1 className={cl.headline}>{t('anti-washing system of the RK')}</h1>
                {(
                        i18n.language === 'ru' 
                            ? <img src={schemeImgRu} alt="schemeImg" className={cl.scheme} />
                            : i18n.language === 'kz' 
                                ? <img src={schemeImgKz} alt="schemeImg" className={cl.scheme} />
                                : <img src={schemeImgEng} alt="schemeImg" className={cl.scheme} />

                    )}
                <p className={cl.text}>
                    {t('AntiLaunderingText1')} </p>
                <p className={cl.text}>
                    {t('AntiLaunderingText2')}    
                </p>
                <div className={cl.stagesContent}>
                    <img src={arrowImg} alt="arrowImg" className={cl.arrowImg} />
                    <div className={cl.stagesArrow}>
                        <div 
                            onClick={() => handleTabClick(1)} 
                            className={`${cl.stage} ${activeTab === 1 ? `${cl.active}` : ''}`}
                        >
                            <p className={cl.stageText}>{t('firstStage')}
                            </p>
                            <div className={cl.circle}></div>
                        </div>
                        <div
                            onClick={() => handleTabClick(2)} 
                            className={`${cl.stageSecond} ${activeTab === 2 ? `${cl.active}` : ''}`}
                        >
                            <div className={cl.circle}></div>
                            <p className={cl.stageText}>{t('secondStage')}
                            </p>
                        </div>
                        <div 
                            onClick={() => handleTabClick(3)} 
                            className={`${cl.stageThird} ${activeTab === 3 ? `${cl.active}` : ''}`}
                        >
                            <p className={cl.stageText}>{t('thirdStage')}</p>
                            <div className={cl.circle}></div>
                        </div>
                    </div>
                    <div className={cl.arrowTabs}>
                        {activeTab === 1 && 
                             <p className={cl.arrowTabsText}>
                                <span className={cl.title}>{t('firstStage')}</span>
                                <br></br>
                                {t('descFirstStage')}
                            </p>
                            
                        }
                        {activeTab === 2 && 
                             <p className={cl.arrowTabsText}>
                                <span className={cl.title}>{t('secondStage')}</span>
                                <br></br>
                                {t('descSecondStage1')}
                                <br></br><br></br>
                                {t('descSecondStage2')}
                                <br></br><br></br>
                                {t('descSecondStage3')}
                                <br></br><br></br>
                                {t('descSecondStage4')}
                                <br></br><br></br>
                                {t('descSecondStage5')}
                                <br></br><br></br>
                                {t('descSecondStage6')}
                                <br></br><br></br>
                                {t('descSecondStage7')}
                                <br></br><br></br>
                                {t('descSecondStage8')}
                                <br></br>· {t('descSecondStage9')}
                                <br></br>· {t('descSecondStage10')}
                                <br></br>· {t('descSecondStage11')}
                                <br></br>· {t('descSecondStage12')}
                                <br></br>· {t('descSecondStage13')}
                                <br></br><br></br>
                                {t('descSecondStage14')}
                                <br></br><br></br>
                                {t('descSecondStage15')}
                            </p>
                            
                        }
                        {activeTab === 3 && 
                             <p className={cl.arrowTabsText}>
                                <span className={cl.title}>{t('thirdStage')}</span>
                                <br></br>
                                {t('descThirdStage1')}
                                <br></br><br></br>
                                {t('descThirdStage2')}
                                <br></br><br></br>
                                {t('descThirdStage3')}
                                <br></br><br></br>
                                {t('descThirdStage4')}
                                <br></br><br></br>
                                {t('descThirdStage5')}
                                <br></br><br></br>
                                {t('descThirdStage6')}
                                <br></br><br></br>
                                {t('descThirdStage7')}
                                <br></br><br></br>
                                {t('descThirdStage8')}
                            </p>
                            
                        }
                        
                    </div>
                    
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default AntiLaundering;