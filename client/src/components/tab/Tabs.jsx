import React, { useState, useRef, useEffect } from 'react';
import cl from './Tabs.module.css';
import Button from '../UI/button/Button';
// import courseImg from '../../assets/images/course.png';
import courseImg from '../../assets/icons/course.svg';
import courseImg2 from '../../assets/icons/image 27.svg';
import courseImg3 from '../../assets/icons/image 28.svg';
import courseImg4 from '../../assets/icons/image 29.svg';

import { Link } from 'react-router-dom';

function Tabs({ text }) {
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
              Базовый
          </div>
          <div
              className={activeTab === 1 ? cl.btnTab + ' ' + cl.activeTab : cl.btnTab}
              onClick={() => handleTabClick(2)}
          >
              <img src={courseImg2} alt="" />
              Профильный
          </div>
          <div
              className={activeTab === 1 ? cl.btnTab + ' ' + cl.activeTab : cl.btnTab}
              onClick={() => handleTabClick(3)}
          >
              <img src={courseImg3} alt="" />
              Продвинутый
          </div>
          <div
              className={activeTab === 1 ? cl.btnTab + ' ' + cl.activeTab : cl.btnTab}
              onClick={() => handleTabClick(4)}
          >
              <img src={courseImg4} alt="" />
              Тематические
          </div>
      </div>
      <div className={cl.tabContent}>
          {
              activeTab === 1 && 

              <div className={cl.courses__info} ref={containerRef} style={{ maxHeight: 'fit-content' }}>
                    <p className={cl.course__headline}>Описание базового курса</p>
                    <p className={cl.course__text} style={{ overflow: 'hidden', textOverflow: 'ellipsis', display: '-webkit-box', WebkitLineClamp: 6, WebkitBoxOrient: 'vertical' }}>
                        Базовый курс представляет из себя теоретический 
                        минимум по основам системы ПОД/ФТ и национальной 
                        антиотмывочной системе Республики Казахстан. Курс 
                        предназначен для тех слушателей, которые еще не 
                        знакомы со сферой ПОД/ФТ и хотели бы изучить 
                        соответствующие требования законодательства. 
                        Курс подойдет для всех видов субъектов финансового 
                        мониторинга, а также для всех желающих познакомиться 
                        с системой ПОД/ФТ.    
                    </p>
                    <Link to="/courses/basic" style={{ textDecoration: 'none' }}>
                        <Button className={cl.more}>Подробнее</Button>
                    </Link>
              </div>
          }
          {
              activeTab === 2 &&

              <div className={cl.courses__info}>
                    <p className={cl.course__headline}>Описание профильного курса</p>
                    <p className={cl.course__text}>
                        Данный курс предлагает более развернутое изучение 
                        системы ПОД/ФТ, заточенное под каждый вид субъекта 
                        финансового мониторинга. Слушатели смогут ознакомиться 
                        с требованиями законодательства конкретно для их вида 
                        субъекта, а также узнать особенности ведения деятельности  
                        в сфере ПОД/ФТ для данного вида СФМ.
                    </p>
                    <Link to="/courses/specialized" style={{ textDecoration: 'none' }}>
                        <Button className={cl.more}>Подробнее</Button>
                    </Link>
              </div>
          }
          {

              activeTab === 3 &&

              <div className={cl.courses__info}>
                    <p className={cl.course__headline}>Описание продвинутого курса</p>
                    <p className={cl.course__text}>
                        Курс могут пройти субъекты, уже имеющие опыт в сфере ПОД/ФТ 
                        и желающие более глубоко изучить ее для применения в своей 
                        деятельности. Продвинутый курс сфокусирован на практических 
                        аспектах соблюдения требований законодательства в сфере ПОД/ФТ, 
                        и включает изучение реальных схем и способов отмывания доходов 
                        и финансирования терроризма.
                    </p>
                    <Link to="/courses/basic" style={{ textDecoration: 'none' }}>
                        <Button className={cl.more}>Подробнее</Button>
                    </Link>
              </div>
          } 
          {
              activeTab === 4 &&

              <div className={cl.courses__info}>
                    <p className={cl.course__headline}>Описание курса по повышению квалификации</p>
                    <p className={cl.course__text}>
                        В рамках повышения квалификации субъектов финансового мониторинга 
                        и сотрудников государственных органов Академией разработаны разовые 
                        тематические тренинги в сфере ПОД/ФТ. Также, свои предложения по 
                        тематикам тренингов вы можете направить через опросник для СФМ.
                    </p>
                    <Link to="/courses/specialized" style={{ textDecoration: 'none' }}>
                        <Button className={cl.more}>Подробнее</Button>
                    </Link>
              </div>
          }
      </div>
    </div>
  );
}

export default Tabs;