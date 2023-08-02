import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import cl from './Structure.module.css';
import jsonData from './structureData.json';
import Header from '../../../components/header/Header';
import lineL from '../../../assets/icons/lineL.svg';
import lineR from '../../../assets/icons/lineR.svg';
import Footer from '../../../components/footer/Footer';
import Dropdown from '../../../components/dropdown/Dropdown';


function Structure() {
  const [cardsData, setCardsData] = useState([]);

  useEffect(() => {
    // Access JSON data from imported file
    setCardsData(jsonData.cards);
  }, []);

   if (!cardsData || cardsData.length === 0) {
    return <p>No cards data available.</p>;
  }

  // Check if the first card exists and has the 'id' property
  const firstCard = cardsData[0];
  if (!firstCard || !firstCard.id) {
    return <p>First card data is missing 'id' property.</p>;
  }

  return (
    <div className={cl.charterWrapper}>
        <Header />
        <div className={cl.container}>
            <h1 className={cl.headline}>Руководство Академии</h1>
            <div className={cl.charterContent}>
                <div className={cl.charterGrid}>
                    {/* Display the first card */}
                    <Link
                    className={`${cl.card__link} ${cl.firstCardContainer}`}
                    to={{
                        pathname: `/structure/${firstCard.id}`,
                        state: { cardData: firstCard },
                    }}
                    >
                    <div className={cl.card}>
                        <p className={cl.card__title}>{firstCard.title}</p>
                        <img src={firstCard.photo} alt={firstCard.caption} className={cl.card__img} />
                        <p className={cl.card__text}>{firstCard.name}</p>
                    </div>
                    </Link>
                    <img src={lineL} alt="line" />
                    <img src={lineR} alt="line" />        
                    <div className={cl.bottomCardsGrid}>
                        {cardsData.slice(1).map((card, index) => (
                            // Check if the card exists and has the 'id' property
                            card && card.id ? (
                                <Link
                                    key={index}
                                    className={cl.card__link}
                                    to={{
                                    pathname: `/structure/${card.id}`,
                                    state: { cardData: card },
                                    }}
                                >
                                    <div className={cl.card}>
                                        <p className={cl.card__title}>{card.title}</p>
                                        <img src={card.photo} alt={card.caption} className={cl.card__img} />
                                        <p className={cl.card__text}>{card.name}</p>
                                    </div>
                                </Link>
                            ) : null
                        ))}
                    </div>
                </div>
            </div>
            <h1 className={cl.headline}>Подразделения</h1>
            <div className={cl.accordion}>
                <Dropdown
                    title="Центр обучения и повышения квалификации по финансовому мониторингу"
                    content={<div>
                        Направление деятельности - повышение кадрового потенциала с последующей сертификацией на системной основе всех участников нпоациональной системы ПОД/ФТ:
                        <div className={cl.accordionContent}>
                            <ol>
                                <li>
                                    Субъектов финансового мониторинга, как первой линии фронта ПОД/ФТ (СФМ) – сотрудников высшего менеджмента, комплаенс служб, фронт офисов БВУ, финансовых учреждений и нефинансовых организаций (УНФПП);
                                </li>
                                <li>
                                    Государственных органов, осуществляющих контроль и надзор за соблюдением СФМ требований законодательства о ПОД/ФТ, с учетом стандартов ФАТФ и международного опыта;
                                </li>
                                <li>
                                    Правоохранительных/Специальных госорганов – по линии ПОД/ФТ.
                                </li>
                            </ol>
                        </div>
                    </div>}
                />
                <Dropdown
                    title="Научный центр IT технологий"
                    content={<div>
                       Основные направления деятельности:
                        <div className={cl.accordionContent}>
                            <ul style={{listStyleType: 'disc'}}>
                                <li>разработка программных продуктов;</li>
                                <li> внедрение RPA технологий (цифровой сотрудник);</li>
                                <li>разработка инструментов кибергигиены;</li>
                                <li>оцифровка бизнес-процессов;</li>
                                <li>техническая поддержка информационных ресурсов.</li>
                            </ul>
                        </div>
                    </div>}
                />
                <Dropdown
                    title="Научно-исследовательский институт"
                    content={<div>
                            Основными задачами научно-исследовательской деятельности будут являться:  
                        <div className={cl.accordionContent}>
                            <ul className={cl.marked}>
                                <li>изучение передовых практик и методов работ участников международной системы ПОД/ФТ;</li>
                                <li>приоритетное развитие фундаментальных знаний посредством организации и проведения научно-исследовательских работ и аналитических исследований в целях повышения рейтинга соответствия Республики Казахстан международным стандартам в сфере ПОД/ФТ;</li>
                                <li>прогнозирование, профилактика и предупреждение рисков, угроз и уязвимостей в сфере ПОД/ФТ;</li>
                                <li> формирование научной базы и единого научного пространства для национальных антиотмывочных систем;</li>
                                <li> разработка и актуализация научно-методических и учебно-методических материалов для формирования образовательных программ и реализации мероприятий в рамках дополнительного профессионального образования, а также учебных курсов, семинаров, круглых столов, конференций и др.</li>
                            </ul> 
                        </div>                      
                    </div>}
                />
                </div>
                
        </div>
        <Footer />
    </div>
  );
}


export default Structure;
