import React from 'react';
import { useTranslation } from 'react-i18next';
import bookIcon from '../../../assets/icons/book.svg';
import laptopIcon from '../../../assets/icons/laptop.svg';
import accIcon from '../../../assets/icons/pacc.svg';
import realtionIcon from '../../../assets/icons/relation.svg';
import VideoPlayer from '../../../components/player/VideoPlayer';
import cl from '../Home.module.css';
import AdvantageBox from '../components/AdvantageBox';

const EducationSection = ({ imagesHidden, styles }) => {
  const { t } = useTranslation();
  
  const textStyle = {
    color: styles.colorMode === 'dark' ? '#fff' : styles.colorMode === 'light' ? '#fff' : styles.colorMode === 'blue' ? '#063462' : '#000'
  };

  return (
    <section
      className={cl.educationWrappwer}
      style={{
        background:
          styles.colorMode === 'dark'
            ? '#000'
            : styles.colorMode === 'light'
            ? '#1A2751'
            : styles.colorMode === 'blue'
            ? '#9dd1ff'
            : '#000'
      }}
    >
      <div className={cl.container}>
        <p className={`${cl.headline} text-content`} style={textStyle}>
          {t('quality')}
        </p>
        <p className={`${cl.subtitle} text-content`} style={textStyle}>
          {t('advantages of academy')}
        </p>
        <div className={cl.education}>
          <div className={cl.advantages}>
            <div className={cl.groupAdvantages}>
              <AdvantageBox
                imgSrc={accIcon}
                text={t('qualified experts')}
                imagesHidden={imagesHidden}
                textStyle={textStyle}
              />
              <AdvantageBox
                imgSrc={bookIcon}
                text={t('convenient learning format')}
                imagesHidden={imagesHidden}
                textStyle={textStyle}
              />
            </div>
            <div className={cl.groupAdvantages}>
              <AdvantageBox
                imgSrc={realtionIcon}
                text={t('close cooperation with AFM')}
                imagesHidden={imagesHidden}
                textStyle={textStyle}
              />
              <AdvantageBox
                imgSrc={laptopIcon}
                text={t('programs')}
                imagesHidden={imagesHidden}
                textStyle={{ ...textStyle, marginBottom: 0 }}
              />
            </div>
          </div>
          {!imagesHidden && <VideoPlayer className={cl.videoPlayer} />}
        </div>
      </div>
    </section>
  );
};

export default EducationSection;
