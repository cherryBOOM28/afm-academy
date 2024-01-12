import React, { useState, useRef, useEffect } from 'react';
import cl from './Tabs.module.css';
import Button from '../UI/button/Button';
// import courseImg from '../../assets/images/course.png';
import courseImg from '../../assets/icons/course.svg';
import courseImg2 from '../../assets/icons/image 27.svg';
import courseImg3 from '../../assets/icons/image 28.svg';
import courseImg4 from '../../assets/icons/image 29.svg';

import { Link } from 'react-router-dom';

import { useTranslation } from 'react-i18next';

function Tabs({ text }) {

  const { t } = useTranslation();

  const [activeTab, setActiveTab] = useState(1);
    
  const handleTabClick = (index) => {
    setActiveTab(index);
  };

  const containerRef = useRef();

  useEffect(() => {
    const container = containerRef.current;
    const content = container.querySelector('.content');
    const maxLines = 3;

    if (container.scrollHeight > container.clientHeight) {
        while (container.scrollHeight > container.clientHeight && content.clientHeight > maxLines * content.offsetHeight) {
            content.textContent = content.textContent.replace(/\W*\s(\S)*$/, '...');
        }
    }
  }, [text]);

  return (
    <div className={cl.coursesContent}>
      <div className={cl.tabHeader}>
          <div 
              className={activeTab === 1 ? cl.btnTab + ' ' + cl.activeTab : cl.btnTab}
              onClick={() => handleTabClick(1)}
          >
              <img src={courseImg} alt="" />
              {t('core')}
          </div>
          <div
              className={activeTab === 1 ? cl.btnTab + ' ' + cl.activeTab : cl.btnTab}
              onClick={() => handleTabClick(2)}
          >
              <img src={courseImg2} alt="" />
              {t('specialized')}
          </div>
          <div
              className={activeTab === 1 ? cl.btnTab + ' ' + cl.activeTab : cl.btnTab}
              onClick={() => handleTabClick(3)}
          >
              <img src={courseImg3} alt="" />
              {t('advanced')}
          </div>
          <div
              className={activeTab === 1 ? cl.btnTab + ' ' + cl.activeTab : cl.btnTab}
              onClick={() => handleTabClick(4)}
          >
              <img src={courseImg4} alt="" />
              {t('thematic')}
          </div>
      </div>
      <div className={cl.tabContent}>
          {
              activeTab === 1 && 

              <div className={cl.courses__info} ref={containerRef} style={{ maxHeight: 'fit-content' }}>
                    <p className={cl.course__headline}>{t('description of the basic course')}</p>
                    <p className={cl.course__text} style={{ overflow: 'hidden', textOverflow: 'ellipsis', display: '-webkit-box', WebkitLineClamp: 6, WebkitBoxOrient: 'vertical' }}> {t('descBasic')}   
                    </p>
                    <Link to="/courses/basic" style={{ textDecoration: 'none' }}>
                        <Button className={cl.more}>{t('read more')}</Button>
                    </Link>
              </div>
          }
          {
              activeTab === 2 &&

              <div className={cl.courses__info}>
                    <p className={cl.course__headline}>{t('description of the specialized course')}</p>
                    <p className={cl.course__text}>
                    {t('descSpec')}
                    </p>
                    <Link to="/courses/specialized" style={{ textDecoration: 'none' }}>
                        <Button className={cl.more}>{t('read more')}</Button>
                    </Link>
              </div>
          }
          {

              activeTab === 3 &&

              <div className={cl.courses__info}>
                    <p className={cl.course__headline}>{t('description of the advanced course')}</p>
                    <p className={cl.course__text}>
                        {t('descAdv')}
                    </p>
                    <Link to="/courses/basic" style={{ textDecoration: 'none' }}>
                        <Button className={cl.more}>{t('read more')}</Button>
                    </Link>
              </div>
          } 
          {
              activeTab === 4 &&

              <div className={cl.courses__info}>
                    <p className={cl.course__headline}>{t('description of the thematic course')}</p>
                    <p className={cl.course__text}>
                        {t('descThe')}
                    </p>
                    <Link to="/courses/specialized" style={{ textDecoration: 'none' }}>
                        <Button className={cl.more}>{t('read more')}</Button>
                    </Link>
              </div>
          }
      </div>
    </div>
  );
}

export default Tabs;