import React, { useState, useEffect } from 'react';

import { AiOutlineClose } from "react-icons/ai";
import { useNavigate } from 'react-router-dom';

import lectorImage from './lectorImage.png';

import './style.scss'
import HeaderWithLine from '../../components/courseTemplates/common/HeaderWithLine';
import { BiSolidObjectsHorizontalRight } from 'react-icons/bi';
import Table_1 from '../../components/courseTemplates/common/Tables/Table-1';
import Report_Warning from '../../components/courseTemplates/common/Warnings/Report';
import Sizebox from '../../components/courseTemplates/common/Sizebox';
import NumberedDots from '../../components/courseTemplates/common/NumberedDots';
import ImageLine from '../../components/courseTemplates/common/ImageLine';

function Basic_course(props) {
    const [courseName, setCourseName] = useState('Базовый курс');

    const navigate = useNavigate();

    return ( 
        <div className="basic-course">
            <div className="course-wrapper">

                <div className="course-head">
                    <div>
                        <div className="course-subtitle">{courseName}</div>
                    </div>
                    <div className='close-icon' onClick={() => {
                        navigate('/courses/')
                    }}>
                        <AiOutlineClose />
                    </div>
                </div>

                <div className="course-body">

                    <div className="course-nav">

                        <div className="nav-head">
                            <div>
                                <h2>{courseName}</h2>
                                <div className='progress-bar'>
                                    <div>22% complete</div>
                                </div>
                            </div>
                        </div>
                        <div className="nav-body">

                        </div>

                    </div>

                    <div className="course-content">
                        <div className="content">
                            <div className="content-header">
                                <h1>Введение</h1>
                                <div className='lector'>
                                    <img src={lectorImage} alt="lector-name" />
                                    <p>Автор курса</p>
                                </div>
                            </div>

                            <HeaderWithLine headerColor={'#1F3C88'} lineColor={'#CADEFC'}>
                                <>
                                Прежде чем мы углубимся в обучение и структуру данного курса, 
                                пожалуйста, <span className='bold'>изучите основные сокращения</span>, используемые в 
                                национальной системе ПОД/ФТ
                                </>
                            </HeaderWithLine>

                            <Table_1 
                                rows={[
                                    {first: 'АФМ', second: 'Агентство Республики Казахстан по финансовому мониторингу'},
                                    {first: 'АРРФР', second: 'Агентство Республики Казахстан по регулированию и развитию финансового рынка'},
                                    {first: 'АЗРК', second: 'Агентство по защите и развитию конкуренции Республики Казахстан'},
                                    {first: 'БИН', second: 'Бизнес-идентификационный номер'},
                                    {first: 'ГП РК', second: 'Генеральная прокуратура Республики Казахстан'},
                                    {first: 'ЗРК', second: 'Евразийская группа по противодействию легализации преступных доходов и финансированию терроризма'},
                                    {first: 'ЕАГ', second: 'Бизнес-идентификационный номер'},
                                    {first: 'ИИН', second: 'Индивидуальный идентификационный номер'},
                                    {first: 'КВГА', second: 'Комитет внутреннего государственного аудита'},
                                    {first: 'КИТ МКС РК', second: 'Комитет индустрии туризма Министерства культуры и спорта Республики Казахстан'},
                                    {first: 'КоАП РК', second: 'Кодекс об административных правонарушениях Республики Казахстан'},
                                ]}
                            />

                            <Report_Warning>
                                Вам приведена лишь часть сокращений, которые обязательно потребуются для полного понимания курса
                            </Report_Warning>

                            <Sizebox height={50}/>

                            <HeaderWithLine headerColor={'#1F3C88'} lineColor={'#CADEFC'}>
                                <>
                                    Перейдем к <span className='bold'>следующему</span> блоку обучения
                                </>
                            </HeaderWithLine>

                            <Sizebox height={100}/>

                            <NumberedDots header={'Основные понятия и их значения, используемые в данном курсе'} list={[
                                'общие понятия',
                                'понятия, связанные с операциями в сфере ПОД/ФТ',
                                'понятия, используемые при надлежащей проверке клиентов',
                                'понятия, связанные с субъектами финансового мониторинга',
                                'понятия, используемые при реализации риск-ориентированного подхода',
                            ]}/>

                            <Sizebox height={100}/>

                            <ImageLine img={null} height={130} color={'#CADEFC'}/>

                            <Sizebox height={100}/>


                        </div>
                    </div>

                </div>

                </div>
        </div>
    );
}

export default Basic_course;