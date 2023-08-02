import React, { useState, useRef, useEffect } from 'react';
import cl from './Tabs.module.css';
import Button from '../UI/button/Button';
import courseImg from '../../assets/images/course.png';

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
              <img src={courseImg} alt="" />
              Профильный
          </div>
          <div
              className={activeTab === 1 ? cl.btnTab + ' ' + cl.activeTab : cl.btnTab}
              onClick={() => handleTabClick(3)}
          >
              <img src={courseImg} alt="" />
              Углубленный
          </div>
          <div
              className={activeTab === 1 ? cl.btnTab + ' ' + cl.activeTab : cl.btnTab}
              onClick={() => handleTabClick(4)}
          >
              <img src={courseImg} alt="" />
              повышение <br/> квалификации
          </div>
      </div>
      <div className={cl.tabContent}>
          {
              activeTab === 1 && 

              <div className={cl.courses__info} ref={containerRef} style={{ maxHeight: 'fit-content' }}>
                  <p className={cl.course__headline}>Описание курсов</p>
                  <p className={cl.course__text} style={{ overflow: 'hidden', textOverflow: 'ellipsis', display: '-webkit-box', WebkitLineClamp: 6, WebkitBoxOrient: 'vertical' }}>1 Курсы AML ACADEMY составлены специалистами в области ПОД/ФТ с многолетним опытом работы в данной сфере, в том числе в уполномоченном государственном органе. При создании программы курсов большое значение придавалось специфике каждой сферы деятельности субъектов финансового мониторинга для более четкого понимания ими своих обязанностей, и с учетом различий по требованиям законодательства для каждого вида субъекта. Возможность выбора наиболее удобного формата обучения позволяет пройти обучение из любой точки мира, в наиболее удобное для вас время. Ценовая политика Академии также ориентирована на всех видов потребителей, от физических лиц до больших корпораций.</p>
                  <Button className={cl.more}>Подробнее</Button>
              </div>
          }
          {
              activeTab === 2 &&

              <div className={cl.courses__info}>
                  <p className={cl.course__headline}>Описание курсов</p>
                  <p className={cl.course__text}>2 Курсы AML ACADEMY составлены специалистами в области ПОД/ФТ с многолетним опытом работы в данной сфере, в том числе в уполномоченном государственном органе. При создании программы курсов большое значение придавалось специфике каждой сферы деятельности субъектов финансового мониторинга для более четкого понимания ими своих обязанностей, и с учетом различий по требованиям законодательства для каждого вида субъекта. Возможность выбора наиболее удобного формата обучения позволяет пройти обучение из любой точки мира, в наиболее удобное для вас время. Ценовая политика Академии также ориентирована на всех видов потребителей, от физических лиц до больших корпораций.</p>
                  <Button className={cl.more}>Подробнее</Button>
              </div>
          }
          {

              activeTab === 3 &&

              <div className={cl.courses__info}>
                  <p className={cl.course__headline}>Описание курсов</p>
                  <p className={cl.course__text}>3 Курсы AML ACADEMY составлены специалистами в области ПОД/ФТ с многолетним опытом работы в данной сфере, в том числе в уполномоченном государственном органе. При создании программы курсов большое значение придавалось специфике каждой сферы деятельности субъектов финансового мониторинга для более четкого понимания ими своих обязанностей, и с учетом различий по требованиям законодательства для каждого вида субъекта. Возможность выбора наиболее удобного формата обучения позволяет пройти обучение из любой точки мира, в наиболее удобное для вас время. Ценовая политика Академии также ориентирована на всех видов потребителей, от физических лиц до больших корпораций.</p>
                  <Button className={cl.more}>Подробнее</Button>
              </div>
          } 
          {
              activeTab === 4 &&

              <div className={cl.courses__info}>
                  <p className={cl.course__headline}>Описание курсов</p>
                  <p className={cl.course__text}>4 Курсы AML ACADEMY составлены специалистами в области ПОД/ФТ с многолетним опытом работы в данной сфере, в том числе в уполномоченном государственном органе. При создании программы курсов большое значение придавалось специфике каждой сферы деятельности субъектов финансового мониторинга для более четкого понимания ими своих обязанностей, и с учетом различий по требованиям законодательства для каждого вида субъекта. Возможность выбора наиболее удобного формата обучения позволяет пройти обучение из любой точки мира, в наиболее удобное для вас время. Ценовая политика Академии также ориентирована на всех видов потребителей, от физических лиц до больших корпораций.</p>
                  <Button className={cl.more}>Подробнее</Button>
              </div>
          }
      </div>
    </div>
  );
}

export default Tabs;