import React, { useState, useEffect } from 'react';
import lectorIcon from './lectorImage.png';
import image1 from './image1.png';
import image2 from './image2.png';
import image3 from './image3.png';
import image4 from './image4.png';
import line from './Line.png';
import pdf from './pdf-file.png';
import download from './download.png';


import './testCourseContent.scss'

function Content(props) {
    const session = props.session;

    return ( 
        <div className='content'>
            <div className="block_1">
                <h1>Введение</h1>
                <div className='lector'>
                    <img src={lectorIcon} alt="lector-name" />
                    <p>Автор курса</p>
                </div>
            </div>

            <div className="block_2">
                <h3>Прежде чем мы углубимся в цели обучения и структуру курса, ознакомьтесь с информацией ниже.</h3>
                
                <img src={image1} alt="image1" />
v
                <div className="container">
                    <p>Программа «Курса для СФМ по подготовке к тестированию на знание законодательства ПОД/ФТ»</p>

                    {
                        [
                            {
                                name: 'Вводная часть',
                                list: [
                                    'Глоссарий',
                                    'Роль СФМ',
                                    'Роль Уполномоченного органа (АФМ РК)',
                                    'Роль ГО регулятора',
                                ]
                            },
                            {
                                name: 'Санкции и порядок предоставления информации СФМ в уполномоченный орган',
                                list: [
                                    'Критерии оценки рисков и санкции, предусмотренные в отношении СФМ',
                                    'Содержание направляемых сообщений в АФМ',
                                    'Сроки, предусмотренные в рамках направления сообщений',
                                    'Подозрительные и пороговые операции',
                                    'Предоставления сведений на запросы уполномоченного органа, порядок, сроки',
                                ]
                            },
                            {
                                name: 'Международная деятельность в сфере ПОД/ФТ',
                                list: [
                                    'Критерии оценки рисков и санкции, предусмотренные в отношении СФМ',
                                    'Содержание направляемых сообщений в АФМ',
                                    'Сроки, предусмотренные в рамках направления сообщений',
                                    'Подозрительные и пороговые операции',
                                    'Предоставления сведений на запросы уполномоченного органа, порядок, сроки',
                                ]
                            },
                            {
                                name: 'Законодательство о ПОД/ФТ',
                                list: [
                                    'Надлежащая проверка клиента',
                                    'Законодательство РК, в части противодействия финансирования терроризма',
                                    'Сроки, предусмотренные в рамках направления сообщений',
                                    'Оценка рисков легализации ОД/ФТ',
                                ]
                            },
                            {
                                name: 'Требования к ПВК',
                                list: [
                                    'Требования к Правилам внутреннего контроля',
                                    {
                                        name: 'Программы',
                                        sublist: [
                                            'организации внутреннего контроля',
                                            'управления рисками',
                                            'идентификации клиента его представителя и бенефициарного собственника',
                                            'мониторинга и изучения операций клиентов',
                                            'подготовки и обучения СФМ в сфере ПОД/ФТ/ФРОМУ'
                                        ]
                                    },
                                ]
                            },
                        ].map(obj => {
                        

                            return (
                                <div className="sessionGroupBlock">
                                    <h2>
                                        {obj.name}
                                    </h2>
                                    <div className="session-list">
                                        {obj.list.map((item, index) => {

                                            if (typeof item !== 'string') {
                                                
                                                return (
                                                    <>
                                                    
                                                    <div>
                                                        <div>{index+1}</div>
                                                        <p>{item.name}:</p>
                                                        
                                                    </div>
                                                    <div className='sublist'>
                                                        {item.sublist.map(item => {
                                                            return <p>{item}</p>
                                                        })}
                                                    </div>

                                                    </>
                                                )

                                            }
                                            
                                            return (
                                                <div>
                                                    <div>{index+1}</div>
                                                    <p>{item}</p>
                                                </div>
                                            )
                                        })}
                                    </div>

                                </div>
                            )
                        })
                    }
                    {/* <div className="sessionGroupBlock">
                        
                        
                        <div className="session-list">
                            <div>
                                <div>1</div>
                                <p>Глоссарий</p>
                            </div>
                            <div>
                                <div>2</div>
                                <p>Глоссарий</p>
                            </div>
                            <div>
                                <div>3</div>
                                <p>Глоссарий</p>
                            </div>
                            <div>
                                <div>4</div>
                                <p>Глоссарий</p>
                            </div>
                            <div>
                                <div>3</div>
                                <p>Глоссарий</p>
                            </div>
                        </div>
                    </div> */}
                </div>
            </div>

            <div className="block_3">
                <h3>Прежде чем приступить к первому занятию, приведем краткий обзор структуры курса.</h3>
                
                <img src={image4} alt="image1" />

                <div className="container">
                    <div className='structure'>
                        <div>
                            <div className="title">Вводная часть</div>
                            <div className="desc">На первом занятии мы размышляем над информацией, использованной для разработки этого курса. Мы также фокусируемся на целях обучения, целевой аудитории, глоссарии и структуре курса.</div>
                        </div>

                        <div className='delimeter'>
                            <img src={line} alt="delimiter" />
                        </div>

                        <div>
                            <div className="title">Санкции и порядок предоставления информации СФМ в уполномоченный орган</div>
                            <div className="desc">На первом занятии мы размышляем над информацией, использованной для разработки этого курса. Мы также фокусируемся на целях обучения, целевой аудитории, глоссарии и структуре курса.</div>
                            <div className='image'>
                                <img src={image2} alt="image2" />
                            </div>
                        </div>

                        <div className="delimeter">
                            <img src={line} alt="delimiter" />
                        </div>

                        <div>
                            <div className="title">Международная деятельность в сфере ПОД/ФТ</div>
                            <div className="desc">На первом занятии мы размышляем над информацией, использованной для разработки этого курса. Мы также фокусируемся на целях обучения, целевой аудитории, глоссарии и структуре курса.</div>
                        </div>

                        <div className="delimeter">
                            <img src={line} alt="delimiter" />
                        </div>

                        <div>
                            <div className="title">Законодательство о ПОД/ФТ</div>
                            <div className="desc">На первом занятии мы размышляем над информацией, использованной для разработки этого курса. Мы также фокусируемся на целях обучения, целевой аудитории, глоссарии и структуре курса.</div>
                        </div>

                        <div className="delimeter">
                            <img src={line} alt="delimiter" />
                        </div>

                        <div>
                            <div className="title">Санкции и порядок предоставления информации СФМ в уполномоченный орган</div>
                            <div className="desc">На первом занятии мы размышляем над информацией, использованной для разработки этого курса. Мы также фокусируемся на целях обучения, целевой аудитории, глоссарии и структуре курса.</div>
                            <div className='image'>
                                <img src={image3} alt="image2" />
                            </div>
                        </div>

                    </div>
                </div>
            </div>

            <div className="block_4">
                <div className="container">
                    <div className='course-file'>
                        <img src={pdf} alt="pdf-icon" />
                        <div>
                            <h6>Course.pdf</h6>
                            <p>568.9KB</p>
                        </div>
                        <img src={download} alt="download-icon" height={31}/>
                    </div>
                    
                    <div className='session-end-delim'>

                    </div>

                    <div className="next-page-button">
                        Давайте начнем!
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Content;