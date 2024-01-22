import React, { useEffect, useState } from 'react';
import cl from './AboutUs.module.css';
import DefaultHeader from '../../../components/defaultHeader/DefaultHeader';
import Header from '../../../components/header/Header';
import aboutUsImg from '../../../assets/images/aboutus.png';
import aboutFounderImg from '../../../assets/images/afm.png';
import Footer from '../../../components/footer/Footer';
import { useTranslation } from 'react-i18next';
import { useStyle } from '../../../components/VisualModal/StyleContext';
import VisualModal from '../../../components/VisualModal/VisualModal';


function AboutUs() {
    const { styles, open, setOpen } = useStyle();
    const [imagesHidden, setImagesHidden] = useState(false);
    const [letterInterval, setLetterInterval] = useState('standard')
    const { t } = useTranslation();
    const { i18n } = useTranslation();
    const currentLanguage = i18n.language;
    
    const [openVisualModal, setOpenVisualModal] = useState(open);
    const [activeTab, setActiveTab] = useState(1);

    useEffect(() => {
        
        const textContentElement = document.querySelectorAll(".text-content");
        const size = styles.fontSize;
        setImagesHidden(!styles.showImage)

        if (textContentElement) {
            textContentElement.forEach((item) => {
            switch (size) {
                case "small":
                item.style.fontSize = "15px";
                break;
                case "standard":
                item.style.fontSize = "20px";
                break;
                case "large":
                item.style.fontSize = "24px";
                break;
                default:
                break;
            }
            });
        }
        
        handleColorModeChange();
    }, [])

    const handleColorModeChange = (mode) => {
        // Remove previous color mode classes
        const containerElement = document.querySelector(".text-content");
        if (containerElement) {
          containerElement.classList.remove("light-mode", "dark-mode", "inverted-mode");
        }
    
        const {colorMode} = styles;
    
        if (containerElement) {
          containerElement.classList.add(colorMode + "-mode");
        }
    
    };

    const handleTabClick = (tabIndex) => {
      setActiveTab(tabIndex);
    };
    const handleOpenVisualModal = () => {
        console.log("OPEN")
        setOpenVisualModal(prev => !prev)
        setOpen(prev => !prev)
    }

    const handleRemoveImages = () => {
        console.log("Images hidden"); 

        setImagesHidden(true);
    };

    const handleShowImages = () => {
        setImagesHidden(false);
    };
    
   const handleIntervalChange = (interval) => {
    console.log("Interval changed");
    setLetterInterval(interval);
  };

  const getShowImage = () => {
    return imagesHidden;
  }

    const getLetterSpacing = (interval) => {
        interval = styles.letterInterval;

        switch (interval) {
            case 'medium':
                return '2px'; 
            case 'large':
                return '4px'; 
            default:
                return '1px'; 
        }
    };
    useEffect(() => {
        const textContentElement = document.querySelectorAll(".text-content");
        const family = styles.fontFamily;

        if (textContentElement) {
            textContentElement.forEach((item) => {
                if (family) {
                    item.style.fontFamily = family;
                }
            });
        }
    }, [styles.fontFamily]);

    return (
        <div className={`${cl.AboutUsWrapper} text-content`}>
                            <VisualModal 
                    open={openVisualModal} 
                    onRemoveImages={handleRemoveImages} 
                    onShowImages={handleShowImages} 
                    onFontFamily={() => {}}
                    onIntervalChange={() => {}}
                    styles={styles}
                    
                />
                <Header dark={true} handleOpenVisualModal={handleOpenVisualModal} />            

            {/* <div className={cl.container}>
                <DefaultHeader />
            </div> */}
            <div className={`${cl.aboutUsContent} text-content`}>
            <div className="interval" style={{ letterSpacing: getLetterSpacing(letterInterval) }}>
                <div className={`${cl.academyWrapper} text-content`}>
                    <div className={`${cl.container} text-content`}>
                        <div className={`${cl.academy} text-content`}>
                            <div className={`${cl.academy__text} text-content`}>
                                <p className={`${cl.headline} text-content`}>{t('about academy')}</p>
                                <p className={`${cl.academy__p} text-content`}>
                                    {t('descAbout')}
                                    </p>
                            </div>
                            {!imagesHidden && (<img src={aboutUsImg} alt="aboutUsImg" style={{ height: '' }} />)}
                        </div>
                    </div>
                </div>
                <div className={cl.container}>
                    <div className={cl.aboutTheFounder}>
                    {!imagesHidden && (<img src={aboutFounderImg} alt="aboutTheFoubder" style={{height: '210px'}} />)}
                        <div className={cl.aboutTheFounder__text}>
                            <p className={`${cl.headline} text-content`}>{t('about shareholder')}</p>
                            <p className={`${cl.aboutTheFounder__p} text-content`}>{t('descShareholder')}</p>
                        </div>
                    </div>
                    <div className={cl.purposeOfAcademy}>
                        <p className={`${cl.headline} text-content`}>{t('purpose and objectives of the AML ACADEMY')}</p>
                        <p className={`${cl.purposeOfAcademy__text} text-content`}>{t('descPurpose')}
                        </p>
                        <p className={`${cl.subtitle} text-content`}>{t('main Task')}</p>
                        <div className={cl.mainTasks}>
                            <div className={cl.MainTask}>
                                <p className={cl.number}>1</p>
                                <p className={`${cl.tasks__text} text-content`}>{t('firstTask')}
                                </p>
                            </div>
                            <div className={cl.tasks}>
                                <div className={cl.MainTask}>
                                    <p className={cl.number}>2</p>
                                    <p className={`${cl.tasks__text__small} text-content`}>{t('secondTask')}
                                    </p>
                                </div>
                                <div className={cl.MainTask}>
                                    <p className={cl.number}>3</p>
                                    <p className={`${cl.tasks__text__middle} text-content`}>{t('therdTask')}
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
        </div>
    );
}

export default AboutUs;