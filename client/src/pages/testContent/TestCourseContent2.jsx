import React, { useState, useEffect } from 'react';
import lectorIcon from './lectorImage.png';
import image21 from './image21.jpg';
import image22 from './image22.jpg';
import image24 from './image24.jpg';
import schema1 from './schema-1.jpg';

import playButton from './../../assets/icons/play-button.png';

import './testCourseContent.scss'

function Content2(props) {
    const session = props.session;

    return ( 
        <div className='content'>
            <div className="block_1">
                <h1>Роль СФМ</h1>
                <div className='lector'>
                    <img src={lectorIcon} alt="lector-name" />
                    <p>Автор курса</p>
                </div>
            </div>

            <div className="block_2" style={{marginTop: '50px'}}>
                <div style={{flexDirection: 'row'}}>
                    <img src={image21} alt="image21" style={{
                        maxWidth: '1000px',
                        minWidth: '50%',
                    }}/>
                </div>
                <div className="container" style={{
                    flexDirection: 'column',
                    width: '100%'
                    
                }}>
                    <h2>Участники системы ПОД/ФТ</h2>
                    <p>Настоящий Закон определяет правовые основы противодействия легализации (отмыванию) доходов, полученных преступным путем, и финансированию терроризма, правовые отношения субъектов финансового мониторинга, уполномоченного органа и других государственных органов Республики Казахстан в сфере противодействия легализации (отмыванию) доходов, полученных преступным путем, и финансированию терроризма, а также механизмы реализации целевых финансовых санкций, относящихся к предупреждению и предотвращению терроризма и финансирования терроризма, и предупреждению, воспрепятствованию и прекращению распространения оружия массового уничтожения и его финансирования.</p>
                </div>

                <div className='container' style={{
                    display: 'flex',
                    flexDirection: 'row',
                    alignItems: 'center',
                    minWidth: '750px',
                    maxWidth: '75%',
                    margin: '0 auto',
                    gap: '20px',

                    marginBottom: '50px'
                }}>
                    
                    <img src={playButton} alt="play" 
                        style={{
                            width: '50px',
                            padding: '0px',
                            margin: '0px',
                            cursor: 'pointer'
                        }}
                    />

                    <progress id="file" max="100" value="70" style={{
                        width: '100%'
                    }}>70%</progress>
                    <div style={{
                        width: '100px'
                    }}>0:35 / 1:00</div>
                </div>

                <div className="container" style={{boxSizing: 'border-box', display: 'block'}}>
                    <img src={schema1} alt="schema-1" style={{width: '100%'}}/>
                </div>
                <div style={{flexDirection: 'row', width: '100%'}}>
                    <img src={image22} alt="image22" style={{
                        maxWidth: '1000px',
                        minWidth: '50%'
                    }}/>
                </div>
                <div className="container" style={{
                    flexDirection: 'column',
                    width: '100%'
                    
                }}>
                    <h2>Система ПОД/ФТ в Республике Казахстан</h2>
                    <p>Система противодействия отмыванию преступных доходов и финансирования терроризма предусматривает комплекс мероприятий, направленных на воспрепятствование приданию правомерного вида владению, пользованию или распоряжению денежными средствами или иным имуществом, полученными в результате совершения преступления, и пресечение финансовых потоков, предназначенных для террористической деятельности.</p>
                    <p>В рамках борьбы с ОД/ФТ предусматриваются превентивные и пресекающие меры.</p>
                    <p>Превентивные меры, призванные не допустить проникновения криминальных финансовых активов в финансовую систему либо использования активов легального происхождения в криминальных целях.</p>
                </div>

                <div className='container' style={{
                    display: 'flex',
                    flexDirection: 'row',
                    alignItems: 'center',
                    minWidth: '750px',
                    maxWidth: '75%',
                    margin: '0 auto',
                    gap: '20px',

                    marginBottom: '50px'
                }}>
                    
                    <img src={playButton} alt="play" 
                        style={{
                            width: '50px',
                            padding: '0px',
                            margin: '0px',
                            cursor: 'pointer'
                        }}
                    />

                    <progress id="file" max="100" value="70" style={{
                        width: '100%'
                    }}>70%</progress>
                    <div style={{
                        width: '100px'
                    }}>0:35 / 1:00</div>
                </div>


                <div style={{flexDirection: 'row', width: '100%'}}>
                    <img src={image24} alt="image24" style={{
                        maxWidth: '1000px',
                        minWidth: '50%'
                    }}/>
                </div>
                <div className="container" style={{
                    flexDirection: 'column',
                    width: '100%'
                    
                }}>
                    <h2>Отмывание денег</h2>
                    <p>В 20-30 годах XX века такие известные преступники, как Аль Капоне и Багси Морган, открывали прачечные, игорные заведения в целях «отмыва» (придание законности денежных средств) незаконно полученных средств.</p>
                    <p>Схема заключалась в помещении денежных средств с большим наличным оборотом, в прачечные (стиральные машины с автоматами) принимавшие монеты в виде оплаты. Тем самым придавалось видимость активной деятельности компании.</p>
                    <p>При этом, предикатным преступлением выступал доход, полученный от незаконного оборота алкогольной продукции. Оборот, производство, продажа и перевозка которого на тот момент была запрещена в рамках «сухого закона».</p>
                </div>

                <div className='container' style={{
                    display: 'flex',
                    flexDirection: 'row',
                    alignItems: 'center',
                    minWidth: '750px',
                    maxWidth: '75%',
                    margin: '0 auto',
                    gap: '20px',

                    marginBottom: '50px'
                }}>
                    
                    <img src={playButton} alt="play" 
                        style={{
                            width: '50px',
                            padding: '0px',
                            margin: '0px',
                            cursor: 'pointer'
                        }}
                    />

                    <progress id="file" max="100" value="70" style={{
                        width: '100%'
                    }}>70%</progress>
                    <div style={{
                        width: '100px'
                    }}>0:35 / 1:00</div>
                </div>
            </div>

            

            <div className="block_4">
                <div className="container">
                    <div className='session-end-delim'>

                    </div>

                    <div className="next-page-button">
                        Вы завершили модуль
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Content2;
