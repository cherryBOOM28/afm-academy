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
                  <p className={cl.course__text} style={{ overflow: 'hidden', textOverflow: 'ellipsis', display: '-webkit-box', WebkitLineClamp: 6, WebkitBoxOrient: 'vertical' }}>Курсы AML ACADEMY составлены специалистами в области ПОД/ФТ с многолетним опытом работы в данной сфере, в том числе в уполномоченном государственном органе. При создании программы курсов большое значение придавалось специфике каждой сферы деятельности субъектов финансового мониторинга для более четкого понимания ими своих обязанностей, и с учетом различий по требованиям законодательства для каждого вида субъекта. Возможность выбора наиболее удобного формата обучения позволяет пройти обучение из любой точки мира, в наиболее удобное для вас время. Ценовая политика Академии также ориентирована на всех видов потребителей, от физических лиц до больших корпораций.</p>
                  <Link to="/courses/basic" style={{ textDecoration: 'none' }}>
                    <Button className={cl.more}>Подробнее</Button>
                  </Link>
              </div>
          }
          {
              activeTab === 2 &&

              <div className={cl.courses__info}>
                  <p className={cl.course__headline}>Описание профильного курса</p>
                  <p className={cl.course__text}>Наш профильный курс представляет собой глубокое погружение в мир противодействия легализации (отмыванию) доходов и финансированию терроризма (ПОД/ФТ). Мы разработали этот курс, чтобы помочь вам стать истинным экспертом в данной области и освоить не только базовые, но и продвинутые навыки, необходимые для эффективного выполнения обязанностей субъектов финансового мониторинга.</p>
                  <Link to="/courses/specialized" style={{ textDecoration: 'none' }}>
                    <Button className={cl.more}>Подробнее</Button>
                  </Link>
              </div>
          }
          {

              activeTab === 3 &&

              <div className={cl.courses__info}>
                  <p className={cl.course__headline}>Описание углубленного курса</p>
                  <p className={cl.course__text}>
                    Наш углубленный курс предназначен для тех, кто стремится стать истинным экспертом в области противодействия легализации (отмыванию) доходов и финансированию терроризма (ПОД/ФТ). Этот курс представляет собой продвинутый уровень обучения, разработанный специально для тех, кто уже имеет опыт в сфере финансового мониторинга и хочет углубить свои знания и навыки.
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
                  <p className={cl.course__text}>Наш курс по повышению квалификации разработан для профессионалов, уже работающих в сфере противодействия легализации (отмыванию) доходов и финансированию терроризма (ПОД/ФТ). Если вы стремитесь усовершенствовать свои навыки и знания, чтобы быть на передовой в этой динамичной области, то этот курс - ваш идеальный выбор.
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