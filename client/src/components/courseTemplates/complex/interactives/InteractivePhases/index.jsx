import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import './style.scss'
import Centered from '../../../common/Centered';
import RandomH2 from '../../../common/RandomH2';

import { MdOutlineNextPlan } from "react-icons/md";
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai';
import Sizebox from '../../../common/Sizebox';
import { IoClose } from 'react-icons/io5';

function InteractivePhases() {
    const [activeItem, setActiveItem] = useState(0);

    const calculateTranslateX = () => {
        return `translateX(${-70 * activeItem + 14}vw)`;
    };

    return ( 
        <div className="interactive-phases">
            <div className="wrapper">
                <motion.div 
                    className="body"
                    style={{
                        transform: calculateTranslateX(),
                    }}
                >

                    {
                        [
                            <Phases 
                                title={'Двухфазная модель отмывания денег'}
                                phases={[
                                    {title: ' ', name: 'Предикат', shortDescription: 'Доход полученный преступным путем', longDescription: ''},
                                    {title: 'I этап', name: 'Легализация', shortDescription: 'Обмен валюты или иного имущества', longDescription: 'Первый этап (легализация) - представляет собой отмывание денег, полученных непосредственно в результате совершения преступления путем обмена этих денежных средств на купюры иного достоинства, другой валюты, имущества.'},
                                    {title: 'II этап', name: 'Интеграция', shortDescription: 'Вводится легальный фин. оборот', longDescription: 'Второй этап (интеграция) заключается в совершении операций, в результате которых предварительно «отмытым» деньгам придается статус полученных законными путями, и они вводятся в легальный финансовый оборот.'}
                                ]}
                            />, 
                            <Phases 
                                title={'Трехфазная модель отмывания денег'}
                                phases={[
                                    {title: ' ', name: 'Предикат', shortDescription: 'Доход полученный преступным путем', longDescription: ''},
                                    {title: 'I этап', name: 'Легализация', shortDescription: 'Обмен валюты или иного имущества', longDescription: 'Первый этап (легализация) - представляет собой отмывание денег, полученных непосредственно в результате совершения преступления путем обмена этих денежных средств на купюры иного достоинства, другой валюты, имущества.'},
                                    {title: 'II этап', name: 'Интеграция', shortDescription: 'Вводится легальный фин. оборот', longDescription: 'Второй этап (интеграция) заключается в совершении операций, в результате которых предварительно «отмытым» деньгам придается статус полученных законными путями, и они вводятся в легальный финансовый оборот.'},
                                    {title: 'II этап', name: 'Интеграция', shortDescription: 'Вводится легальный фин. оборот', longDescription: 'Второй этап (интеграция) заключается в совершении операций, в результате которых предварительно «отмытым» деньгам придается статус полученных законными путями, и они вводятся в легальный финансовый оборот.'}
                                ]}
                            />, 
                            <Phases 
                                title={'Двухфазная модель отмывания денег'}
                                phases={[
                                    {title: ' ', name: 'Предикат', shortDescription: 'Доход полученный преступным путем', longDescription: ''},
                                    {title: 'I этап', name: 'Легализация', shortDescription: 'Обмен валюты или иного имущества', longDescription: 'Первый этап (легализация) - представляет собой отмывание денег, полученных непосредственно в результате совершения преступления путем обмена этих денежных средств на купюры иного достоинства, другой валюты, имущества.'},
                                    {title: 'II этап', name: 'Интеграция', shortDescription: 'Вводится легальный фин. оборот', longDescription: 'Второй этап (интеграция) заключается в совершении операций, в результате которых предварительно «отмытым» деньгам придается статус полученных законными путями, и они вводятся в легальный финансовый оборот.'}
                                ]}
                            />
                        ].map((item, index) => {

                            return (
                                <div 
                                    key={index}
                                    className={`item ${activeItem === index ? 'active' : ''}`}
                                    onClick={() => setActiveItem(index)}
                                >
                                    { item }
                                </div>
                            )
                        })
                    }

                </motion.div>
            </div>
        </div>
    );
}

const Phases = ({
    title,
    phases=[
        {title: ' ', name: 'Предикат', shortDescription: 'Доход полученный преступным путем', longDescription: ''},
        {title: 'I этап', name: 'Легализация', shortDescription: 'Обмен валюты или иного имущества', longDescription: 'Первый этап (легализация) - представляет собой отмывание денег, полученных непосредственно в результате совершения преступления путем обмена этих денежных средств на купюры иного достоинства, другой валюты, имущества.'},
        {title: 'II этап', name: 'Интеграция', shortDescription: 'Вводится легальный фин. оборот', longDescription: 'Второй этап (интеграция) заключается в совершении операций, в результате которых предварительно «отмытым» деньгам придается статус полученных законными путями, и они вводятся в легальный финансовый оборот.'}
    ]
}) => {

    return (
        <>
            <div className="title">
                {title}
            </div>
            <Sizebox height={43}/>
            <div className="phases">
                {
                    phases.map((phase, index) => {

                        return (
                            <>
                                <Phase phase={phase}/>
                                {/* {
                                    index !== phases.length - 1 
                                    ? (
                                        <div className={`next ${
                                            index % 2 === 1 ? 'flipped' : ''
                                        }`}>
                                            <MdOutlineNextPlan />
                                        </div>
                                    ) : null
                                } */}
                            </>
                        )
                    })
                }
            </div>
        </>
        
    )
}

const Phase = ({
    phase
}) => {
    const [open, setOpen] = useState(false);

    return (
        <div className="phase">
            <div className='title'>{phase.title}</div>
            <div className="name">{phase.name}</div>
            <div className="open-icon" onClick={() => setOpen(true)}>
                <AiOutlinePlus size={25} />
            </div>
            <div className="short-description">{phase.shortDescription}</div>

            <div 
                className={`long-description ${open ? 'open' : ''}`}
            >
                <div className="close" onClick={() => setOpen(false)}>
                    <IoClose size={23} />
                </div>
                <div className="inner-text">
                    {phase.longDescription.length > 0 ? phase.longDescription : phase.shortDescription}
                </div>
            </div>
        </div>
    )
}

export default InteractivePhases;