import React, { useState, useEffect } from 'react';
import './style.scss';

// components 
import Sizebox from '../courseTemplates/common/Sizebox';
import Reveal from '../Reveal';
import HeaderWithLine from '../courseTemplates/common/HeaderWithLine';
import Table_1 from '../courseTemplates/common/Tables/Table-1';
import Report_Warning from '../courseTemplates/common/Warnings/Report';
import NumberedDots from '../courseTemplates/common/NumberedDots';
import ImageLine from '../courseTemplates/common/ImageLine';
import DropDownTextWithTabs from '../courseTemplates/complex/DropDownTextWithTabs';
import TextAndLink from '../courseTemplates/complex/TextAndLink';
import NextLesson from '../courseTemplates/complex/NextLesson';
import ImageWithText from '../courseTemplates/common/ImageWithText';
import DropdownList from '../courseTemplates/complex/interactives/DropdownList';
import RandomParapraph from '../courseTemplates/common/RandomParagraph';
import DropdownList_r5 from '../courseTemplates/complex/interactives/DropdownList_r5';
import RandomH2 from '../courseTemplates/common/RandomH2';
import VideoLine from '../courseTemplates/common/VideoLine';
import NotNumberedDots from '../courseTemplates/common/NotNumberedDots';
import RandomGlossary from '../courseTemplates/common/RandomGlossary';
import OneToFour from '../courseTemplates/complex/interactives/OneToFour';
import TextWithTitle from '../courseTemplates/common/TextWithTitle';
import FileDownloader from '../courseTemplates/common/FileDownloader';
import TextWithBackground from '../courseTemplates/common/TextWithBackground';
import ShortBiography from '../courseTemplates/complex/images/ShortBiography';
import Centered from '../courseTemplates/common/Centered';
import VideoWithTitleAndText from '../courseTemplates/complex/Video/VideoWithTitleAndText';
import TabsGlossary from '../courseTemplates/complex/TabsGlossary';
import TestPage from '../courseTemplates/complex/Test';

// default images
// if the images is not given
import lectorImage from './lectorImage.png';
import image1 from './../../assets/images/Lesson_2_img_1.png';
import image2 from './../../assets/images/Lesson_3_img_1.png';
import image3 from './../../assets/images/Capone.png';
import image4 from './../../assets/images/Lesson_3_img_2.png';
import image51 from './../../assets/images/Lesson_5_img_1.png'
import image52 from './../../assets/images/Lesson_5_img_2.png'
import image53 from './../../assets/images/Lesson_5_img_3.png'
import image54 from './../../assets/images/Lesson_5_img_4.png'
import image55 from './../../assets/images/Lesson_5_img_5.png'
import image56 from './../../assets/images/Lesson_5_img_6.png'
import image57 from './../../assets/images/Lesson_5_img_7.png'
import image58 from './../../assets/images/Lesson_5_img_8.png'
import image59 from './../../assets/images/FATF.jpg'
import image60 from './../../assets/images/oonn.png'
import image61 from './../../assets/images/fatff.png'
import image62 from './../../assets/images/eagg.png'
import image63 from './../../assets/images/errror.gif'
import defaultImg from './../../assets/images/default.png'
import TextPlusDots_1 from '../courseTemplates/complex/TextPlusDots/TextPlusDots_1';
import Header from "../header/Header";
import DropdownGlossaryList from '../courseTemplates/complex/DropdownGlossaryList';
import DragAndDropTwoSide from '../courseTemplates/complex/DragAndDropTwoSide';

const LessonPage = ({ children, name, lecturer }) => {

    return (
        <>
            <div className="content-header">
                <h1>{name}</h1>
                <div className='lector'>
                    <img src={lectorImage} alt="lector-name" />
                    <p>{lecturer}</p>
                </div>
            </div>
            {children}
        </>
    );
}

const TODO = ({text}) => (
    <div
        style={{
            background: 'rgb(202, 222, 252)',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            height: '200px',
            width: '100%',
            border: '50%',
        }}
    >
        <p style={{color: '#FFF'}}>TODO: {text}</p>
    </div>
)

function GetLesson({id, CheckCurrentChapter, quizQuestions, handleOpenFeedbackModal}) {

    switch (id) {
        case 1: 
            return (<LessonPage name={'Основные понятия и сокращения'} lecturer={'AML Academy'}>
                <Sizebox height={28} />

                <Reveal>
                    <HeaderWithLine headerColor={'#1F3C88'} lineColor={'#CADEFC'}>
                        <>
                        Прежде чем мы углубимся в обучение и структуру данного курса, 
                        пожалуйста, <span className='bold'>изучите основные сокращения</span>, используемые в 
                        национальной системе ПОД/ФТ
                        </>
                    </HeaderWithLine>
                </Reveal>

                <Reveal>
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
                </Reveal>

                <Reveal>
                    <Report_Warning>
                        Вам приведена лишь часть сокращений, которые обязательно потребуются для полного понимания курса
                    </Report_Warning>
                </Reveal>

                <Sizebox height={100}/>

                <Reveal>
                    <HeaderWithLine headerColor={'#1F3C88'} lineColor={'#CADEFC'}>
                        <>
                            Перейдем к <span className='bold'>следующему</span> блоку обучения
                        </>
                    </HeaderWithLine>
                </Reveal>

                <Sizebox height={100}/>

                <Reveal>
                    <NumberedDots 
                        dotsColor={'#CADEFC'}
                        header={'Основные понятия и их значения, используемые в данном курсе'} 
                        list={[
                            'общие понятия',
                            'понятия, связанные с операциями в сфере ПОД/ФТ',
                            'понятия, используемые при надлежащей проверке клиентов',
                            'понятия, связанные с субъектами финансового мониторинга',
                            'понятия, используемые при реализации риск-ориентированного подхода',
                        ]}
                    />
                </Reveal>

                <Sizebox height={100}/>

                <Reveal>
                    <ImageLine img={null} height={130} color={'#CADEFC'}/>
                </Reveal>

                <Sizebox height={36}/>

                <Reveal>
                    <DropDownTextWithTabs 
                        tabs={[
                            'Общие понятия',
                            'Понятия в сфере ПОД/ФТ',
                            'Проверка клиентов',
                            'СФМ',
                            'Риск-ориентированный подход',
                        ]}
                        tabsData={[
                            {header: 'Агентство Республики Казахстан по финансовому мониторингу(АФМ)', data: 'Государственный орган. осуществляющий финансовый мониторинг и принимающий иные меры по ПОД/ФТ/ФРОМУ.', tabName: 'Общие понятия'},
                            {header: 'Сбор, обработка и анализ (Финансовый мониторинг)', data: 'Совокупность мер по сбору, обработке, анализу, и использованию сведений и информации об операциях с деньгами и (или) иным имуществом, осуществляемых уполномоченным органом и субъектом финансового мониторинга в соответствии с Законом о ПОД/ФТ.', tabName: 'Общие понятия'},
                            {header: 'Легализация (отмывание) доходов, полученных преступным путем', data: 'Вовлечение в законный оборот денег и (или) иного имузества, полученных преступным путем, посредством совершения сделок в виде конверсии или перевода имущества, представляющего доходы от уголовных правонарушений, либо владение и использование такого имущества, сокрытие или утаивание его подлинного характера, источника, места нахождения, способа распоряжения, перемещения, прав на имущество или его принадлежности, если известно, что такое имущество представляет доходы от уголовных правонарушений, а равно посредничество в ОД.', tabName: 'Общие понятия'},
                            {header: 'Финансирование терроризма (ФТ)', data: 'Представление или сбор денег и (или) иного имущество, права на имущество или выгод имущественного характера, а также дарение, мена, пожертвования, благотворительная помощь, оказание информационных и иного рода услуг либо оказание финансовых услуг физическому лицу либо группе лиц, либо юридическому лицу, совершенные лицом, заведомо осознавшим террористический характер их деятельности либо то, что предоставленное имущество, оказанные инвормационные, финансовые и иного рода услуги будут использованы для осуществления террористической деятельности либо обеспечения террористической группы, террористической организации, незаконного военизированного формирования.', tabName: 'Общие понятия'},
                            {header: 'Доходы, полученные преступным путем (преступные доходы)', data: 'Деньги и (или) иное имущество, полученные в результате совершения уголовного правонарушения.', tabName: 'Общие понятия'},
                            {header: 'Государственная политика в сфере противодействия легализации (отмыванию) доходов, полученных преступным путем, и финансированию терроризма(Политика в сфере ПОД/ФТ)', data: 'Правовые, административные и организационные меры, направленные на снижение рисков легализации (отмывания) доходов, полученных преступным путем, и финансирование терроризма, и иные меры в соответствии Законом о ПОД/ФТ.', tabName: 'Общие понятия'},
                            {header: 'Операции с деньгами и (или) иным имуществом', data: 'Действия физических, юридических лиц и иностранных структур без образования юридического лица с деньгами и (или) иным имуществом независимо от формы и способа их осуществления, направленные на установление, изменение или прекращение связанных с ними гражданскоих прав и обязанностей.', tabName: 'Понятия в сфере ПОД/ФТ'},
                            {header: 'Операции, подлижащие финансовому мониторингу', data: 'Операции клиента субъекта финансового мониторинга с деньгами и (или) иным имуществом, в отношении которых в соответствии с настоящим Законом установлен финансовый мониторинг.', tabName: 'Понятия в сфере ПОД/ФТ'},
                            {header: 'Пороговая операция с деньгами и (или) иным имуществом (ПО)', data: '', tabName: 'Понятия в сфере ПОД/ФТ'},
                            {header: 'Подозрительная операция с деньгами и (или) иным имуществом (СПО)', data: '', tabName: 'Понятия в сфере ПОД/ФТ'},
                            {header: 'Замораживание операций с деньгами и (или) иным имуществом', data: '', tabName: 'Понятия в сфере ПОД/ФТ'},
                            {header: 'Целевые фининсовые санкции (ЦФС)', data: '', tabName: 'Понятия в сфере ПОД/ФТ'},
                            {header: 'Выделенный канал связи (WEB SFM)', data: '', tabName: 'Понятия в сфере ПОД/ФТ'},
                            {header: 'Форма ФМ-1 (ФМ-1)', data: '', tabName: 'Понятия в сфере ПОД/ФТ'},
                            {header: 'Надлежащая проверка субъектами финансового мониторинга клиентов (НПК)', data: '', tabName: 'Проверка клиентов'},
                            {header: 'Бенефициарный собственник', data: '', tabName: 'Проверка клиентов'},
                            {header: 'Субъект финансового мониторинга (СФМ)', data: '', tabName: 'СФМ'},
                            {header: 'Независимый специалист по юридическим вопросам', data: '', tabName: 'СФМ'},
                            {header: 'Риски ОД/ФТ/Фрому', data: 'Возможность преднамеренного или непреднамеренного вовлечения Субъектов в процессы легализации ОД/ФТ/ФРОМУ или иную преступную деятельность.', tabName: 'Риск-ориентированный подход'},
                            {header: 'Управлениея рисками ОД/ФТ/Фрому', data: '', tabName: 'Риск-ориентированный подход'},
                            {header: 'Национальная оценка рисков', data: '', tabName: 'Риск-ориентированный подход'},
                        ]}
                        headerTextColor={'#170F49'}
                        activeHeaderTextColor={'#1F3C88'}
                        textColor={'#6F6C90'}
                        tabsTextColor={'#3A3939'}
                        tabsBackgroundColor={'#BAD6FF'}
                    />
                </Reveal>

                <Sizebox height={100}/>

                <Reveal>
                    <HeaderWithLine headerColor={'#1F3C88'} lineColor={'#CADEFC'}>
                        <>
                        Нажмите на <span className="bold">ссылку</span> ниже, чтобы перейти к
                        Закону «О противодействии легализации (отмыванию) доходов, 
                        полученных преступным путем, и финансированию терроризма»
                        </>
                    </HeaderWithLine>
                </Reveal>

                <Sizebox height={83}/>

                <Reveal>
                    <TextAndLink
                        text={'Закон «О противодействии легализации (отмыванию) доходов, полученных преступным путем, и финансированию терроризма»'}
                        link={'google.com'}
                    />
                </Reveal>

                <Sizebox height={100}/>

                <Reveal>
                    <HeaderWithLine headerColor={'#1F3C88'} lineColor={'#CADEFC'}>
                        <>
                        Теперь, когда вы 
                        <span className="bold">понимаете, ключевые понятия и сокращения</span>, 
                        можем перейти к изучению системы ПОД/ФТ

                        </>
                    </HeaderWithLine>
                </Reveal>

                <Sizebox height={100}/>

                <Reveal>
                    <HeaderWithLine headerColor={'#3A3939'} lineColor={'#CADEFC'}>
                        <>
                        Перейдем к следующему блоку обучения
                        </>
                    </HeaderWithLine>
                </Reveal>

                <Sizebox height={50}/>

                <Reveal>
                    <NextLesson handleOnClick={() => {
                        CheckCurrentChapter(1);
                    }}/> 
                </Reveal>

            </LessonPage>)
        case 2: 
            return (<LessonPage name={'Система ПОД/ФТ'} lecturer={'AML Academy'}>
                <Sizebox height={28} />
                    
                <Reveal>
                    <HeaderWithLine headerColor={'#1F3C88'} lineColor={'#CADEFC'}>
                        <>
                            Система ПОД/ФТ достаточно сложный механизм,  который имеет множество подходов, инструментов, методов и участников
                        </>
                    </HeaderWithLine>
                </Reveal>

                <Sizebox height={50} />
                
                <Reveal>
                    <NumberedDots 
                        dotsColor={'#CADEFC'}
                        header={'Для полного его понимания, мы изучим следующие направления:'} 
                        list={[
                            'Общее понимание мер и их виды;',
                            'Рассмотрим примеры таких мер;',
                            'Разберем участников системы ПОД/ФТ;',
                            'Определим национальные и международные документы, которые служат основой системы ПОД/ФТ.'
                        ]}
                    />
                </Reveal>

                <Sizebox height={100} />
                
                <Reveal>
                    <ImageWithText 
                        img={image1}
                        color={'#FFFFFF'}
                    >
                    <>
                        <h2 style={{color: '#FFFFFF', marginTop: 0, marginBottom: 0}}>
                            Что из себя представляет система ПОД/ФТ?
                        </h2>
                        <Sizebox height={17} />
                        <h3>
                            Это комплекс мероприятий, направленных на борьбу с ОД/ФТ, в виде превентивных и пресекающих мер.
                        </h3>
                    </>
                    </ImageWithText>
                </Reveal>

                <Sizebox height={100} />

                <Reveal>
                    <HeaderWithLine headerColor={'#1F3C88'} lineColor={'#CADEFC'}>
                        <>
                        Теперь давайте <span className="bold">углубимся</span> в данные превентивные и пресекающие меры, 
                        их основные <span className="bold">подходы и примеры</span>
                        </>
                    </HeaderWithLine>
                </Reveal>

                <Sizebox height={100} />

                <Reveal>
                    <DropdownList list={[
                        { 
                            name: 'Превентивные меры', 
                            description: '(меры, направленные на недопущение рисков и угроз ОД/ФТ, которые не предполагают санкционных методов работ)', 
                            items: [
                                'Нормативно-правовая база (Закон о ПОД/ФТ, подзаконные акты и тд.)',
                                'Рискориентированный подход (система управления рисками СФМ, АФМ, ПО, ГО и др.)',
                                'Реализация СФМ требований ПВК (НПК, оценка рисков, обучение и повышение квалификации и др.)',
                                'Система мониторинга и принятие мер по ним (ПО/СПО, в том числе об отказах, прекращении и приостановлении операций клиента)',
                                'Профилактические меры контроля со стороны надзорных органов (камеральный контроль, уведомления, письма, встречи и др.)',
                                'Иные меры, которые применяются в целях недопущения ОД/ФТ'
                            ]
                        },
                        { 
                            name: 'Пресекающие меры', 
                            description: '(меры, направленные на недопущение рисков и угроз ОД/ФТ, которые не предполагают санкционных методов работ)', 
                            items: [
                                'Направление ПФР материалов в ПО/СГО (разработанные на основании сообщений СФМ)',
                                'Оперативно-розыскная деятельность',
                                'Уголовное преследование',
                                'Конфискация имущества',
                                'Санкционные меры контроля и надзора (штрафы, приостановление и лишение лицензии и др.)',
                                'Иные меры, которые применяются в случае, когда преступникам уже удалось реализовать схемы ОД/ФТ'
                            ]
                        }
                    ]} />
                </Reveal>

                <Sizebox height={100} />

                <Reveal>
                    <HeaderWithLine headerColor={'#1F3C88'} lineColor={'#CADEFC'}>
                        <>
                        Примеры превентивных мер используемые АФМ
                        </>
                    </HeaderWithLine>
                </Reveal>

                <Sizebox height={50} />

                <Reveal>
                    <RandomParapraph>
                        <>
                        Теперь, когда Вы знаете, что из себя <span className='bold'>представляют</span> превентивные 
                        и пресекающие меры, давайте рассмотрим <span className='bold'>примеры</span> превентивных 
                        мер используемые <span className='bold'>АФМ</span>, которые <span className='bold'>эффективно</span> используются в 
                        рамках <span className='bold'>взаимодействия</span> с участниками национальной 
                        антиотмывочной системы
                        </>
                    </RandomParapraph>
                </Reveal>

                <Sizebox height={100} />
                
                <Reveal>
                    {/* <TODO text='Interactive Dropdown lists'/> */}
                    <DropdownList_r5 
                        title={'Основные инструменты применяемые АФМ'}
                        items={[
                            {img: image54, text: 'Кураторство  - за каждым видом СФМ закреплен куратор (сотрудник АФМ РК), осуществляющий оперативное взаимодействие и координацию (ссылка).'},
                            {img: defaultImg, text: 'Кураторство  - за каждым видом СФМ закреплен куратор (сотрудник АФМ РК), осуществляющий оперативное взаимодействие и координацию (ссылка).'},
                            {img: defaultImg, text: 'Кураторство  - за каждым видом СФМ закреплен куратор (сотрудник АФМ РК), осуществляющий оперативное взаимодействие и координацию (ссылка).'},
                            {img: defaultImg, text: 'Кураторство  - за каждым видом СФМ закреплен куратор (сотрудник АФМ РК), осуществляющий оперативное взаимодействие и координацию (ссылка).'},
                            {img: defaultImg, text: 'Кураторство  - за каждым видом СФМ закреплен куратор (сотрудник АФМ РК), осуществляющий оперативное взаимодействие и координацию (ссылка).'},
                        ]}
                    />
                </Reveal>

                <Sizebox height={100} />

                <Reveal>
                    <HeaderWithLine headerColor={'#1F3C88'} lineColor={'#CADEFC'}>
                        <>
                        Пожалуйста, посмотрите <span className="bold">видео ниже</span>, чтобы узнать 
                        об <span className="bold">участниках антиотмывочной системы</span>, 
                        которые непосредственно <span className="bold">реализуют</span> данный комплекс мероприятий
                        </>
                    </HeaderWithLine>
                </Reveal>

                <Sizebox height={80} />

                <VideoLine url={'https://videos.sproutvideo.com/embed/7990d0b51d1ae4c1f0/6e43cdd74851d083?playerColor=1f71a1'}/>

                <Sizebox height={80} />

                <Reveal>
                    {/* <h2>Пояснение к видео</h2> */}
                    <RandomH2>Пояснение к видео</RandomH2>
                </Reveal>

                <Sizebox height={22} />

                <Reveal>
                    <NumberedDots 
                        header={'Национальная антиотмывочная система состоит из основных приоритетных направлений:'}
                        list={[
                            'Первая линия защиты, которая подразумевает реализацию финансового мониторинга со стороны частного сектора (СФМ);',
                            'Реализация государственного контроля и надзора со стороны органов регуляторов;',
                            'Взаимодействие с профессиональными объединениями частного сектора;',
                            'Проведение Национальной оценки рисков осуществляемая участниками МВС;',
                            'Взаимодействие в ходе финансового мониторинга с правоохранительными и специальными государственными органами;',
                            'Международное взаимодействие с организациями и органами (в т.ч. с подразделениями финансовых разведок);',
                            'Реализация АФМ единой государственной политики, а также координация участников системы ПОД/ФТ',
                        ]}
                        dotsColor={'#CADEFC'}
                    />
                </Reveal>

                <Sizebox height={73} />

                <Reveal>
                    <NotNumberedDots 
                        header={'Давайте более подробнее разберем участников системы ПОД/ФТ'} 
                        list={[
                            'Банки второго уровня (один из основных источников информации);',
                            'Финансовые учреждения (страховые и перестраховочные организации, участники рынка ценных бумаг, МФО и др.);',
                            'Не финансовые учреждения (нотариусы, аудиторские организации, представители игорного бизнеса и др.);',
                            'участники МВС (государственные органы, правоохранительные органы, специальные государственные органы);',
                            'Международные организации (УНП ООН, ОБСЕ, ЕАГ и др.);',
                            'Уполномоченный орган в лице Агентства Республики Казахстан по финансовому мониторингу;',
                            'Общественные организации (Ассоциация финансистов Казахстана, Профессиональные объединения бухгалтеров, Республиканская нотариальная плата и др.);',
                            'Государственные органы регуляторы (Национальный банк Республики Казахстан, Агентство по регулированию и развитию финансового рынка, Министерство юстиции Республики Казахстан и др.).',
                        ]}
                        dotsColor={'#CADEFC'}

                    />
                </Reveal>

                <Sizebox height={100} />

                <Reveal>
                    <HeaderWithLine headerColor={'#1F3C88'} lineColor={'#CADEFC'}>
                        <>
                        Теперь, когда мы знаем, каким образов в <span className="bold">целом</span> реализуется 
                        система ПОД/ФТ в Республике Казахстан, 
                        давайте более подробнее изучим <span className="bold">основы</span>, 
                        послужившие ее <span className="bold">функционированию и развитию</span>
                        </>
                    </HeaderWithLine>
                </Reveal>

                <Sizebox height={50} />

                <Reveal>
                    <RandomGlossary 
                        title={'Нормативно-правовая база'}
                        text={'Одним из главных элементов национальной системы ПОД/ФТ является наличие фундаментальной нормативно-правовой базы.'}
                    />
                </Reveal>

                <Sizebox height={80} />

                <Reveal>
                    <TextWithTitle 
                        title={'Основы ПОД/ФТ'} 
                        text={'Правовые основы ПОД/ФТ в Республике Казахстан связаны с принятыми и введенными в действие законами, направленными на закрепление правовых основ ПОД/ФТ, включая правовое регулирование возникающих при этом взаимоотношений субъектов и уполномоченного органа финансового мониторинга, а также других государственных органов. Правовые основы национальной антиотмывочной системы включают в себя международные акты и национальные акты в сфере ПОД/ФТ.'}
                        color={'#3A3939'}
                    />
                </Reveal>

                <Sizebox height={100} />

                <Reveal>
                    <HeaderWithLine headerColor={'#1F3C88'} lineColor={'#CADEFC'}>
                        <>
                        Более подробней, в следующей схеме Вы можете ознакомиться с актами как национального, так и международного уровня.
                        </>
                    </HeaderWithLine>
                </Reveal>
                
                <Sizebox height={80} />

                <Reveal>
                    {/* <TODO text='Interactive 1 to 4'/> */}
                    <OneToFour 
                        header={'Основа национальной системы ПОД/ФТ'}
                        list={[
                            '', '', '', ''
                        ]}
                    />
                </Reveal>

                <Sizebox height={100} />
                
                <Reveal>
                    <RandomParapraph>
                        Ниже представлен перечень национальных актов для более подробного изучения.
                    </RandomParapraph>
                </Reveal>

                <Sizebox height={50} />

                <Reveal>
                    <FileDownloader file={'fff'} />
                </Reveal>

                <Sizebox height={100} />

                <Reveal>
                    <HeaderWithLine headerColor={'#3A3939'} lineColor={'#CADEFC'}>
                        <>
                        Перейдем к следующему блоку обучения
                        </>
                    </HeaderWithLine>
                </Reveal>

                <Sizebox height={50} />

                <Reveal>
                    <NextLesson handleOnClick={() => {
                        CheckCurrentChapter(2);
                    }}/> 
                </Reveal>
            </LessonPage>)
        case 3: 
            return (<LessonPage name={'История возникновения первых «схем» отмывания денег'} lecturer={'AML Academy'}>
                <Sizebox height={28} />
                
                <Reveal>
                    <HeaderWithLine headerColor={'#1F3C88'} lineColor={'#CADEFC'}>
                        <>
                            На этом занятии мы подробно изучим <span className="bold">историю</span> возникновения первых схем отмывания денег.
                        </>
                    </HeaderWithLine>
                </Reveal>

                <Sizebox height={50} />

                <Reveal>
                    <ImageWithText 
                        img={image2}
                        color={'#FFFFFF'}
                    >
                        <>
                        <h3>
                            Отмывание денег - это вовлечение в законный оборот деньги (или) иного имущества, полученных преступным путем.
                        </h3>
                        </>
                    </ImageWithText>
                </Reveal>

                <Reveal>
                    <TextWithBackground
                        text={[
                            'Начальным этапом отмывания денег считается 20 года прошлого века «эпоха сухового закона в США»',
                            'Одного из авторов схем отмывания денег считают Аль Капоне.'
                        ]} 
                        color={'#3A3939'}
                        backgroundColor={'#CADEFC'}
                    />
                </Reveal>

                <Sizebox height={50} />

                <Reveal>
                    <ShortBiography 
                        img={image3}
                        name={'Аль Капоне'}
                        birthdate={'17 января 1899г.'}
                        deathdate={'25 января 1947г.'}
                        biography={'Считается одним из отцов-основателей организованной преступности США эпохи Сухого закона и Великой депрессии, автором системы отмывания денег и такого понятия, как «рэкет».'}
                    />
                </Reveal>

                <Sizebox height={100} />

                <Reveal>
                    <ImageLine height={2} color={'#CADEFC'} />
                </Reveal>

                <Sizebox height={50} />

                <Reveal>
                    <Centered>
                        <RandomParapraph>
                            Схема заключалась в <span className="bold">помещении денежных средств</span> с большим наличным оборотом, в прачечные (стиральные машины с автоматами) принимавшие монеты в виде оплаты. 
                        </RandomParapraph>
                    </Centered>
                </Reveal>
                
                <Sizebox height={50} />

                <Reveal>
                    {/* <TODO text='Video'/> */}
                    <VideoWithTitleAndText 
                        url={'https://videos.sproutvideo.com/embed/7990d0b51d1ae4c1f0/6e43cdd74851d083?playerColor=1f71a1'}
                        title={'Помещение денежных средств'} 
                        text={`Тем самым придавалось видимость активной деятельности компании. 
                        При этом, предикатным преступлением выступал доход, полученный от 
                        незаконного оборота алкогольной продукции. Оборот, производство, 
                        продажа и перевозка которого на тот момент была запрещена в рамках «сухого закона». 
                        \nНа тот период времени, отсутствовала практика противодействия 
                        легализации доходов, однако предусматривало налогообложение всех 
                        доходов, в том числе полученных преступным путем.`}/>
                </Reveal>
                
                <Sizebox height={106} />

                <Reveal>
                    <Report_Warning >
                        В результате уголовного дела, Аль Капоне был признан виновным за неуплату налогов.
                    </Report_Warning>
                </Reveal>

                <Sizebox height={50} />

                <Reveal>
                    <TextWithTitle 
                        title={'Отмывание денег'}
                        text={[
                            'Данные нормы послужили основой для формирования политики противодействия легализации доходов, с дальнейшим развитием на международном уровне.',
                            'Мировое сообщество приняло тот факт, что легализация преступных доходов является серьезным преступлением мирового масштаба, в целях совершения которого могут быть вовлечены финансовые институты, осуществляющих легальную деятельность.',
                            'Однако, в 1970 году понятие «отмывание денег» впервые введено в законодательство, в рамках принятия трех законов:'
                        ]}
                    />
                </Reveal>

                <Sizebox height={37} />

                <Reveal>
                    <NotNumberedDots 
                        list={[
                            '«О контроле за организованной преступностью»;',
                            '«О всеобщем декларировании»;',
                            '«О банковской тайне».'
                        ]}
                        dotsColor={'#CADEFC'}
                    />
                </Reveal>

                <Sizebox height={100} />

                <Reveal>
                    <HeaderWithLine>
                        <>
                        Данные нормы послужили <span className="bold">основой</span> для формирования политики противодействия легализации доходов, 
                        <span className="bold">с дальнейшим развитием на международном уровне</span>
                        </>
                    </HeaderWithLine>
                </Reveal>

                <Sizebox height={80} />

                <Reveal>
                    <ImageWithText 
                        img={image4}
                        imageText={'Отмывание денег является преступлением мирового масштаба'}
                        color={'#FFFFFF'}
                    />
                </Reveal>

                <Reveal>
                    <TextWithBackground 
                        text={[
                            'Мировое сообщество приняло тот факт, что легализация преступных доходов является серьезным преступлением мирового масштаба, в целях совершения которого могут быть вовлечены финансовые институты, осуществляющих легальную деятельность.',
                        ]} 
                        color={'#3A3939'}
                        backgroundColor={'#CADEFC'}
                    />
                </Reveal>

                <Sizebox height={80} />

                <Reveal>
                    <HeaderWithLine>
                        <>
                        Изучив историю возникновения отмывания денег на мировом уровне, давайте перейдем к криминализации ОД в Республике Казахстан.
                        </>
                    </HeaderWithLine>
                </Reveal>

                <Sizebox height={100} />

                <Reveal>
                    <HeaderWithLine headerColor={'#3A3939'} lineColor={'#CADEFC'}>
                        <>
                        Перейдем к следующему блоку обучения
                        </>
                    </HeaderWithLine>
                </Reveal>

                <Sizebox height={50} />

                <Reveal>
                    <NextLesson handleOnClick={() => {
                        CheckCurrentChapter(3);
                    }}/> 
                </Reveal>

            </LessonPage>)
        case 4: 
            return (<LessonPage name={'Правовой фундамент понятия «легализации денег» в Республике Казахстан'} lecturer={'AML Academy'}>
                <Sizebox height={28} />
                <Reveal>
                    <HeaderWithLine headerColor={'#1F3C88'} lineColor={'#CADEFC'}>
                        <>
                            Республикой Казахстан в целях борьбы с отмыванием денег и соответсвтия международным стандартам имплементированы в правовую систему нормы в сфере ПОД/ФТ
                        </>
                    </HeaderWithLine>
                </Reveal>

                <Sizebox height={80} />

                <Reveal>
                    <TODO text={'Interactive idk'} />
                </Reveal>

                <Sizebox height={80} />

                <Reveal>
                    <TextWithTitle
                        title={'Правовой фундамент'}
                        text={[
                            'Правовой фундамент финансового мониторинга в Казахстане был заложен появлением в Уголовном кодексе Республики Казахстан в 1997 году статьи 193 «Легализация денежных средств или иного имущества, приобретенного незаконным путем».',
                            'В действующей редакции Уголовного кодекса Республики Казахстан данной статье соответствует статья 218 «Легализация (отмывание) денег и (или) иного имущества, полученных преступным путем».'
                        ]}
                    />
                </Reveal>

                <Sizebox height={80} />

                <Reveal>
                    <TabsGlossary 
                        tabs={[
                            'УК КазССР - ст. 165',
                            'УК РК - ст. 193',
                            'УК РК - ст. 218',
                        ]}
                        tabsGlossary={{
                            'УК КазССР - ст. 165': 'Использование денежных средств и иногоимушестваприобретенных или добытых преступным путем, для занятия предпринимательской или иной незапрещенной законом деятельности',
                            'УК РК - ст. 193': '1Использование денежных средств и иногоимушестваприобретенных или добытых преступным путем, для занятия предпринимательской или иной незапрещенной законом деятельности',
                            'УК РК - ст. 218': '2Использование денежных средств и иногоимушестваприобретенных или добытых преступным путем, для занятия предпринимательской или иной незапрещенной законом деятельности',
                        }}
                        color={'#3A3939'}
                        tabsBackgroundColor={'#BAD6FF'}
                    />
                </Reveal>

                <Sizebox height={100} />

                <Reveal>
                    <TextWithTitle 
                        title={'Уголовный кодекс'}
                        text={'Уголовным кодексом предусматриваются различные виды наказаний за ОД:'}
                    />
                </Reveal>

                <Sizebox height={30} />

                <Reveal>
                    <NumberedDots
                        dotsColor={'#CADEFC'}
                        list={[
                            'штраф в размере до 5 000 МРП либо исправительными работами, либо ограничением свободы на срок до 6 лет, либо лишением свободы на тот же срок, с конфискацией имущества',
                            'штрафом в размере от 3 000 до 7 000 МРП либо исправительными работами в том же размере, либо лишением свободы на срок от 3 до 7 лет, с конфискацией имущества, в случаях, если ОД совершенно: группой лиц по предварительному сговору; неоднократно; лицом с использованием своего служебного положения.',
                            'лишением свободы на срок от 5 до 10 лет с конфискацией имущества, с пожизненным лишением права занимать определенные должности или заниматься определенной деятельностью.',
                        ]}
                    />
                </Reveal>

                <Sizebox height={100} />

                <Reveal>
                    <HeaderWithLine headerColor={'#1F3C88'}>
                        <>
                        Изучив криминализацию ОД в Республике Казахстан
                         и уголовную ответственность, 
                        более детальнее рассмотри <span className="bold">схемы ОД</span>
                        </>
                    </HeaderWithLine>
                </Reveal>

                <Sizebox height={100} />

                <Reveal>
                    <HeaderWithLine headerColor={'#3A3939'} lineColor={'#CADEFC'}>
                        <>
                        Перейдем к следующему блоку обучения
                        </>
                    </HeaderWithLine>
                </Reveal>

                <Sizebox height={50} />

                <Reveal>
                    <NextLesson handleOnClick={() => {
                        CheckCurrentChapter(4);
                    }}/> 
                </Reveal>

            </LessonPage>)
        case 5: 
            return (<LessonPage name={'Основные стадии отмывания денег'} lecturer={'AML Academy'}>
                <Sizebox height={28} />
                <Reveal>
                    <HeaderWithLine headerColor={'#1F3C88'} lineColor={'#CADEFC'}>
                        <>
                            Республикой Казахстан в целях борьбы с отмыванием денег и соответсвтия международным стандартам имплементированы в правовую систему нормы в сфере ПОД/ФТ
                        </>
                    </HeaderWithLine>
                </Reveal>

                <Sizebox height={50} />

                <Reveal>
                    <ImageWithText 
                        img={image51}
                        imageText={'Отмывание денег является преступлением мирового масштаба'}
                        color={'#FFFFFF'}
                    />
                </Reveal>

                <Sizebox height={80} />

                <Reveal>
                    <TextWithTitle
                        title={'Уголовный кодекс'}
                        text={'Выделяют следующие основные негативные последствия использования на страновом уровне преступных доходов '}
                    />
                </Reveal>

                <Sizebox height={32} />

                <Reveal>
                    <NumberedDots
                        dotsColor={'#CADEFC'}
                        list={[
                            'повышение цен / искажение экономических показателей',
                            'ослабление верховенства права и повышение уровня совершения предикатных преступлений (в т.ч. коррупции)',
                            'недобросовестная конкуренция / неравенство',
                            'санкции со стороны мирового сообщества',
                        ]}
                    />
                </Reveal>

                <Sizebox height={80} />

                <Reveal>
                    <TextWithBackground 
                        header={'Подходы и методы'}
                        text={'Подходы и методы имеют принцип постоянного «совершенствования», которые реализуются как самостоятельно, так и привлекаются профессиональные отмыватели.'}
                    />
                </Reveal>

                <Sizebox height={80} />

                <Reveal>
                    <TabsGlossary 
                        tabs={[
                            'Самостоятельное',
                            'Профессиональное',
                        ]}
                        tabsGlossary={{
                            'Самостоятельное': 'когда лицо либо преступная организация самостоятельно пытается скрыть незаконное происхождение доходов от незаконного оборота путем отмывания денег',
                            'Профессиональное': '1когда лицо либо преступная организация самостоятельно пытается скрыть незаконное происхождение доходов от незаконного оборота путем отмывания денег',
                        }}
                        color={'#3A3939'}
                        tabsBackgroundColor={'#BAD6FF'}
                    />
                </Reveal>

                <Sizebox height={100} />

                <Reveal>
                    <Report_Warning>
                        Данные этапы и формы отмывания денег, могут быть реализованы как совместно, так и в отдельном виде.
                    </Report_Warning>
                </Reveal>

                <Sizebox height={100} />
                
                <Reveal>
                    <TextWithTitle 
                        title={'Выбор схемы'}
                        text={[
                            'При выборе схемы отмывания денег в каждом конкретном случае преступники исходят, прежде всего, из необходимости обеспечить тайну преступного происхождения денежных  средств или иного имущества и сохранить контроль над ними  на всех этапах этого процесса.',
                            'Существует несколько общепризнанных моделей легализации доходов, полученных преступным путем. ',
                            'Наиболее распространенные стадии:'
                        ]}
                    />
                </Reveal>

                <Sizebox height={37} />

                <Reveal>
                    <NotNumberedDots 
                        list={[
                            'двухфазная модель;',
                            'трехфазная модель;',
                            'четырехфазная модель'
                        ]}
                        dotsColor={'#CADEFC'}
                    />
                </Reveal>

                <Sizebox height={100} />

                <Reveal>
                    <HeaderWithLine 
                        header={'Республикой Казахстан в целях борьбы с отмыванием денег и соответствия международным стандартам имлпементированы в правовую систему нормы в сфере ПОД/ФТ.'}
                        lineColor={'#CADEFC'}
                        headerColor={'#1F3C88'}
                    /> 
                </Reveal>

                <Sizebox height={100} />
                
                <Reveal>
                    <TODO text={'Interactive phases'} />
                </Reveal>

                <Sizebox height={100} />

                <Reveal>
                    <RandomParapraph>
                        Далее более подробно рассмотрим наиболее распространенную трехфазовую модель, состоящая, соответственно, из трех фаз или, как наиболее принято говорить - трех стадий.
                    </RandomParapraph> 
                </Reveal>

                <Sizebox height={50} />

                <Reveal>
                    <ImageWithText 
                        img={image52}
                        imageText={'Размещение'}
                        color={'#FFFFFF'}
                    />
                </Reveal>

                <Sizebox height={50} />

                <Reveal>
                    <TextWithTitle
                        title={'Размещение'}
                        text={[
                            'Первая стадия «отмывания» доходов, полученных из нелегальных источников, предполагает введение «грязных» денег в легальную финансовую систему через какое-либо учреждение, территориально удаленное от места извлечения преступных доходов.',
                            'Некоторые специалисты полагают, что методы, используемые на стадии размещения, находятся в зависимости от используемых финансовых институтов.',
                            'Таким образом, в зависимости от используемых финансовых институтов (механизмов) приемы и способы на стадии размещения можно объединить в следующие категории:'
                        ]}
                    />
                </Reveal>

                <Sizebox height={37} />
                                    
                <Reveal>
                    <NotNumberedDots 
                        list={[
                            'размещение через традиционные финансовые учреждения;',
                            'размещение через нетрадиционные финансовые учреждения;',
                            'размещение через учреждения нефинансового сектора;',
                            'размещение за пределами страны'
                        ]}
                        dotsColor={'#CADEFC'}
                    />
                </Reveal>

                <Sizebox height={80} />

                <Reveal>
                    <ImageWithText 
                        img={image53}
                        imageText={'Размещение через традиционные финансовые учреждения'}
                        color={'#FFFFFF'}
                    />
                </Reveal>

                <Sizebox height={50} />

                <Reveal>
                    <TextWithTitle
                        title={'Размещение'}
                        text={[
                            'Традиционные финансовые учреждения занимаются обычным финансовым бизнесом на основании лицензии или разрешения. К ним относятся банки второго уровня, которые и управляются государственными регулирующими органами.',
                            'Приемы и способы:',
                        ]}
                    />
                </Reveal>

                <Sizebox height={37} />
                                    
                <Reveal>
                    <NotNumberedDots 
                        list={[
                            'денежно-валютные операции, включающие обмен банкнот на купюры более крупного достоинства и обмен валюты одного государства на валюту других государств;',
                            ' открытие в банках счетов, в том числе, обслуживаемых с использованием пластиковых карт, с целью последующего размещения (депонирования) на них денежных средств, полученных преступным путем;',
                            'структурирование (дробление) операций с денежными средствами с целью ухода из подконтрольной государству сферы сделок и операций, подлежащих обязательному контролю;',
                            'открытие в банках расчетных счетов с использованием учредительных документов, бланков, печатей фиктивных либо прекративших свое существование организаций, зачисление на эти счета незаконно полученных денежных средств или заключение от имени таких организаций кредитных договоров с банками с дальнейшим перечислением денежных средств во исполнение подложного контракта или по иным основаниям;',
                            ' нелегальная доставка через таможенную границу наличных денежных средств, с последующим размещением на счетах физических и юридических лиц на счетах в иностранных банках и кредитных учреждениях;',
                            'погашение денежными средствами, полученными в процессе преступной деятельности, кредитов на легальных основаниях в банке.'
                        ]}
                        dotsColor={'#CADEFC'}
                    />
                </Reveal>

                <Sizebox height={80} />

                <Reveal>
                    <ImageWithText 
                        img={image54}
                        imageText={'Размещение через нетрадиционные финансовые учреждения'}
                        color={'#FFFFFF'}
                    />
                </Reveal>

                <Sizebox height={50} />

                <Reveal>
                    <TextWithTitle
                        title={'Размещение через нетрадиционные финансовые учреждения'}
                        text={[
                            'В данную группу относятся небанковские финансовые организации, оказывающие банковские услуги населению, к которым относят: брокеры ценных бумаг и драгоценных металлов, казино, организации в сфере оказания почтовых и телеграфных услуг, организации, оказывающие услуги по переводу электронных денег (электронные платежные системы) и др.',
                            'Выявлены следующие способы:',
                        ]}
                    />
                </Reveal>

                <Sizebox height={37} />

                <Reveal>
                    <NumberedDots 
                        dotsColor={'#CADEFC'}
                        list={[
                            'Использование почтовых переводов',
                            'Использование систем электронных платежей (в том числе, использование так называемых обменников электронных валют)',
                            'Использование альтернативных систем денежных переводов по типу «Хавала»',
                            'Использование подпольных банков, то есть нелегальных организаций, оказывающих услуги физическим и юридическим лицам по кредитованию, осуществлению переводов денежных средств, конвертации и обналичиванию денежных средств и др.'
                        ]}
                    />
                </Reveal>

                <Sizebox height={50} />

                <Reveal>
                    <Report_Warning>Согласно международному опыту нетрадиционные финансовые организации все чаще используются для легализации.</Report_Warning>
                </Reveal>

                <Sizebox height={50} />

                <Reveal>
                    <TextWithTitle 
                        title={'Причины использования'}
                        text={[
                            'Причин этому несколько, в том числе, принятие государством активных мер для повышения эффективности банковского законодательства в части противодействия легализации преступных доходов. В то же время, различные банковские инструменты не всегда востребованы обществом, а зачастую и не выгодны для потенциальных потребителей.',
                            'Следствием данного фактора является большой оборот наличных денежных средств, что, как ни странно, для развития некоторых нетрадиционных финансовых организаций играет достаточно позитивную роль.',
                            'Так, например, ввиду развитой доступности терминалов пополнения электронных кошельков и возможности осуществлять подобную процедуру без комиссии, очень востребованными сегодня в мире являются электронные платежные системы.'
                        ]}
                    />
                </Reveal>

                <Sizebox height={50} />
                
                <Reveal>
                    <Report_Warning>Тем не менее, законодателем предпринимаются усилия для недопущения использования сферы электронных платежей в целях легализации полученных доходов.</Report_Warning>
                </Reveal>

                <Sizebox height={50} />

                <Reveal>
                    <ImageWithText 
                        img={image55}
                        imageText={'Размещение через учреждения нефинансового сектора'}
                        color={'#FFFFFF'}
                    />
                </Reveal>

                <Sizebox height={50} />

                <Reveal>
                    <TextWithTitle
                        title={'Размещение через учреждения нефинансового сектора'}
                        text={[
                            'Вовлечены следующие виды организаций:',
                        ]}
                    />
                </Reveal>

                <Sizebox height={37} />
                                    
                <Reveal>
                    <NotNumberedDots 
                        list={[
                            'учреждения в сфере развлечений, организации в сфере общественного питания (рестораны, бары, кафе), спортивно-оздоровительные центры, гостиничные комплексы, сауны, массажные салоны, организации, специализирующиеся на проведении различных концертов и выступлений артистов эстрады;',
                            'учреждения из сферы автомобильного бизнеса, среди которых магазины автозапчастей, прокат автомобилей, комиссионная торговля автомобилями, ремонт автомобилей, транспортные перевозки и т.д.;',
                            'предприятия из сферы розничной торговли: антикварные магазины, комиссионки, фотомагазины, обувные магазины, секонд-хенды, оружейные магазины и др.;',
                            'предприятия сферы услуг (за исключением сферы развлечений): фотоателье, типографии, агентства недвижимости, агентства по организации перевозок граждан;',
                            'мастерские по ремонту и пошиву одежды и обуви; организации по ремонту и внутренней отделке квартир и частных домовладений;',
                            'иные предприятия: строительные фирмы, предприятия по приему металлолома и т.д.'
                        ]}
                        dotsColor={'#CADEFC'}
                    />
                </Reveal>

                <Sizebox height={80} />

                <Reveal>
                    <TextWithBackground 
                        header={'При размещении'}
                        text={[
                            'При размещении через учреждения нефинансового сектора «грязные» деньги нередко смешиваются с легальными доходами, полученными в результате обычной экономической деятельности, и декларируются как «чистые» деньги.'
                        ]}
                    />
                </Reveal>

                <Sizebox height={50} />

                <Reveal>
                    <Report_Warning>
                        Данный метод легализации незаконных средств характерен также и на стадии запутывания следов.
                    </Report_Warning>
                </Reveal>

                <Sizebox height={50} />

                <Reveal>
                    <TextWithTitle 
                        title={'Фиктивное предприятие'}
                        text={[
                            'Кроме того, посредством создания фиктивного предприятия, организовывается мнимая коммерческая деятельность, в ходе которой в качестве доходов отражаются преступно добытые средства.'
                        ]}
                    />
                </Reveal>

                <Sizebox height={50} />

                <Reveal>
                    <ImageWithText 
                        img={image56}
                        imageText={'Размещение за пределами страны'}
                        color={'#FFFFFF'}
                    />
                </Reveal>

                <Sizebox height={50} />

                <Reveal>
                    <TextWithTitle
                        title={'Размещение за пределами страны'}
                        text={[
                            'Данный подход предполагает физический перевод денежных средств посредством скрытого вывоза наличных денег курьерами (контрабанды). ',
                            'Для перевозки денежной наличности используются разнообразные хранилища, специально созданные в:',
                        ]}
                    />
                </Reveal>

                <Sizebox height={37} />
                                    
                <Reveal>
                    <NotNumberedDots 
                        list={[
                            'чемоданах',
                            'транспортных средствах',
                            'предметах, которые допускают размещение большой суммы денежной наличности без внешних признаков изменения их первоначального вида.',
                        ]}
                        dotsColor={'#CADEFC'}
                    />
                </Reveal>

                <Sizebox height={80} />

                <Reveal>
                    <HeaderWithLine headerColor={'#1F3C88'}>
                        Некоторые из указанных способов <span className="bold">активно</span> 
                        применяются на <span className="bold">стадии размещения</span>, однако, 
                        как показывает практика, этап размещения 
                        наличности является <span className="bold">самым слабым звеном</span> в 
                        процессе легализации доходов
                    </HeaderWithLine>
                </Reveal>

                <Sizebox height={50} />

                <Reveal>
                    <Report_Warning>
                        Незаконно полученные средства легче всего могут быть выявлены именно на этом этапе.
                    </Report_Warning>
                </Reveal>

                <Sizebox height={80} />

                <Reveal>
                    <TODO text={'Interactive game, drag to group'}/>

                </Reveal>

                <Sizebox height={80} />
                
                <Reveal>
                    <Report_Warning>
                        В результате маскируется связь между денежными средствами и преступным источником их происхождения.
                    </Report_Warning>
                </Reveal>

                <Sizebox height={80} />

                <Reveal>
                    <ImageWithText 
                        img={image57}
                        imageText={'Расслоение'}
                        color={'#FFFFFF'}
                    />
                </Reveal>

                <Sizebox height={50} />

                <Reveal>
                    <TextWithTitle 
                        title={'Расслоение'}
                        text={[
                            'Выявлены следующие способы:'
                        ]}
                    />
                </Reveal>

                <Sizebox height={30} />

                <Reveal>
                    <NumberedDots
                        list={[
                            'Перевод денежных средств от одного физического лица другому.',
                            'Перевод уже размещенных в финансовых институтах денежных средств, маскируемый мнимыми сделками из одной фирмы в другую и дальше, что позволяет достаточно эффективно скрывать истинный источник происхождения преступных средств и облегчает выведение преступных доходов за пределы географического региона их извлечения.',
                            'Перевод денежных средств в различные финансовые инструменты, такие как: дорожные чеки; банковские чеки и векселя; акции и облигации; и последующий вывоз их за пределы страны.',
                            'Приобретение и отчуждение имущественных ценностей. Деньги трансформируются в приобретаемое имущество, а оно затем используется преступниками, либо вывозится за пределы страны.',
                            'Электронные денежные переводы, в том числе, с использование электронных денежных средств.'
                        ]}
                        dotsColor={'#CADEFC'}
                    />
                </Reveal>

                <Sizebox height={30} />
                
                <Reveal>
                    <Report_Warning>
                        Кроме того, посредством создания фиктивного предприятия, организовывается мнимая коммерческая деятельность, в ходе которой в качестве доходов отражаются преступно добытые средства.
                    </Report_Warning>
                </Reveal>

                <Sizebox height={50} />

                <Reveal>
                    <HeaderWithLine headerColor={'#1F3C88'}>
                        На этой стадии так называемый <span className="bold">«отрыв»</span> денежных средств 
                        от страны происхождения обеспечивается за счет 
                        осуществления <span className="bold">трансграничных</span> финансовых операций, 
                        для чего широко используются оффшорные банки, 
                        проводящие такие операции, и оффшорные компании, 
                        предоставляющие основания для их проведения.
                    </HeaderWithLine>
                </Reveal>

                <Sizebox height={50} />

                <Reveal>
                    <ImageWithText 
                        img={image58}
                        imageText={'Расслоение'}
                        color={'#FFFFFF'}
                    />
                </Reveal>

                <Sizebox height={50} />

                <Reveal>
                    <TextWithTitle 
                        title={'Интеграция'}
                        text={[
                            'Третья стадия процесса легализации, непосредственно направленная на придание видимой законности преступно нажитому состоянию путем приобретения объектов недвижимости, ценных бумаг, произведений искусства, предметов роскоши и этот перечень не ограничен.',
                            'На этой стадии незаконный капитал после широкомасштабной операции по укрыванию его природы возвращается обратно в экономический цикл, создавая впечатление о его легальном происхождении в результате законной деловой активности.',
                            'Тем самым, преступники получают возможность свободно использовать «отмытые» деньги. '
                        ]}
                    />
                </Reveal>

                <Sizebox height={50} />

                <Reveal>
                    <TextWithBackground 
                        header={'Прокручивание денег'}
                        text={'Таким образом, происходит окончательное прокручивание денег, которые обретают «легальный» источник происхождения и инвестируются в легальную экономику.'}
                    />
                </Reveal>

                <Sizebox height={50} />

                <Reveal>
                    <Report_Warning>
                        Фактически по завершении операций на этой стадии заканчивается процесс легализации.
                    </Report_Warning>
                </Reveal>

                <Sizebox height={50} />

                <Reveal>
                    <HeaderWithLine headerColor={'#1F3C88'}>
                        Вы изучили основные этапы легализации денег, при этом продемонстрированные подходы и способы являются лишь наиболее распространенными
                    </HeaderWithLine>
                </Reveal>

                <Sizebox height={100} />

                <Reveal>
                    <HeaderWithLine headerColor={'#3A3939'} lineColor={'#CADEFC'}>
                        <>
                        Перейдем к следующему блоку обучения
                        </>
                    </HeaderWithLine>
                </Reveal>

                <Sizebox height={50} />

                <Reveal>
                    <NextLesson handleOnClick={() => {
                        CheckCurrentChapter(5);
                    }}/> 
                </Reveal>

                {/* ------------ */}

            </LessonPage>)
        case 6: 
            return (<LessonPage name={'Основные стадии отмывания денег'} lecturer={'AML Academy'}>
                <Sizebox height={28} />
                
                <Reveal>
                    <HeaderWithLine headerColor={'#1F3C88'} lineColor={'#CADEFC'}>
                        <>
                        Важно знать, что <span className="bold">схемы и способы</span> ОД <span className="bold">постоянно совершенствуются</span>, <span className="bold">меняются подходы и инструменты</span>, в том числе с применением новых технологий.
                        </>
                    </HeaderWithLine> 
                </Reveal>

                <Sizebox height={50} />

                <Reveal>
                    <NumberedDots 
                        dotsColor={'#CADEFC'}
                        header={'В рамках данного курса, мы разберем несколько схем ОД, поэтапно раскрывая следующие направления:'}
                        list={[
                            'практическое применение трех основных этапов;',
                            'роль СФМ в рамках данных схем;',
                            'схемы ОД на примере объектов недвижимости, интернет-мошенничества и др.',
                            'примеры признаков подозрительной операции.'
                        ]}
                    />
                </Reveal>

                <Sizebox height={100} />

                <Reveal>
                    <HeaderWithLine
                        header={'Рассмотрим пример легализации денежных средств с учетом трех этапной модели'}
                        headerColor={'#1F3C88'}
                    />
                </Reveal>
                <Sizebox height={40} />
                <Reveal>
                    <VideoLine />
                </Reveal>
                <Sizebox height={40} />
                <Reveal>
                    <TextWithTitle 
                        title={'Данный пример раскрывает основные этапы: размещение, расслоение и интеграцию.'}
                        text={[
                            'В рамках этапа «размещение», используется способ - открытие в банках счетов, в том числе, обслуживаемых с использованием пластиковых карт, с целью последующего размещения (депонирования) на них денежных средств, полученных преступным путем.',
                            'На следующем этапе «расслоение», проводятся денежные операции среди подставных организаций (ИП), в целях запутывания следов происхождения и связки с конечным бенефициарным собственником.',
                            'На заключительном этапе «интеграция», осуществляется перечисление денежных средств бенефициарному собственнику, в рамках фиктивных договор и услуг.'
                        ]}
                    />
                </Reveal>


                <Sizebox height={100} />

                <Reveal>
                    <Report_Warning>
                        Таким образом, осуществляется один из примеров ОД, в результате преступный доход обретает «легальный» источник происхождения и в дальнейшем может быть инвестирован в легальную экономику.
                    </Report_Warning>
                </Reveal>

                <Sizebox height={100} />

                <Reveal>
                    <HeaderWithLine
                        header={'Рассмотрим роль СФМ при выявлении схем ОД'}
                        headerColor={'#1F3C88'}
                    />
                </Reveal>
                <Sizebox height={40} />
                <Reveal>
                    <VideoLine />
                </Reveal>
                <Sizebox height={40} />
                <Reveal>
                    <>
                        <TextWithTitle 
                            title={'Данный пример раскрывает важность участия СФМ в выявлении схем ОД'}
                            text={[
                                'В видео-уроке продемонстрировано участие нескольких СФМ: БВУ, бухгалтера и нотариус. Однако, участниками финансовых операций, направленных на ОД может быть, как один СФМ, так и несколько (в зависимости от сложности схем и применяемых способов ОД).',
                                'В целях осуществления финансового мониторинга, где подразумевается применение надлежащей проверки клиента, риск-ориентированного похода и системы мониторинга операций, СФМ выявляются операции подлежащих финансовому мониторинга (пороговые и подозрительные операции).',
                                'Важно отметить, что национальная антиотмывочная система предусматривает применение действенных и своевременных следующих мер со стороны СФМ в отношении таких клиентов и их операций:',
                            ]}
                        />
                        <Sizebox height={40} />
                        <NumberedDots 
                            dotsColor={'#CADEFC'}
                            list={[
                                'направление ПО/СПО;',
                                'отказ в проведении операции и в установлении деловых отношении (при выявлении таких операций до их совершения);',
                                'прекращение деловых отношений;',
                                'приостановление операции;',
                                'иные меры.',
                            ]}
                        />
                    </>
                </Reveal>

                <Sizebox height={100} />

                <Reveal>
                    <Report_Warning>
                        Более подробнее о требованиях и мерах СФМ вы ознакомитесь в следующих модулях.
                    </Report_Warning>
                </Reveal>

                <Sizebox height={100} />

                <Reveal>
                    <Centered>
                        <RandomParapraph>
                            <>
                            СФМ являются <span className="bold">важным элементом</span> национальной антиотмывочной системы, осуществляя роль «<span className="bold">первой линии защиты</span>» при реализации схем ОД/ФТ.
                            </>
                        </RandomParapraph>
                    </Centered>
                </Reveal>

                <Sizebox height={80} />

                <Reveal>
                    <HeaderWithLine
                        headerColor={'#1F3C88'}
                    >
                        <>
                        Посмотрите видео ниже,
                        чтобы узнать больше о <span className="bold">роли СФМ</span>
                        в выявлении схем и <span className="bold">рисков</span> ОД/ФТ.
                        </>
                    </HeaderWithLine>
                </Reveal>

                <Sizebox height={100} />

                <Reveal>
                    <HeaderWithLine
                        header={'Взаимодействие СФМ с АФМ в рамках выявления схем ОД/ФТ'}
                        headerColor={'#1F3C88'}
                    />
                </Reveal>
                <Sizebox height={40} />
                <Reveal>
                    <VideoLine />
                </Reveal>
                <Sizebox height={40} />
                <Reveal>
                    <TextWithTitle 
                        text={['В ходе выявления схем ОД/ФТ осуществляется тесное взаимодействие между СФМ и АФМ. Основным источником информации служат сообщения, направляемые СФМ (ПО/СПО), которые выявляются в ходе исполнения требований, предусмотренные законодательством о ПОД/ФТ.']}
                    />
                </Reveal>

                <Sizebox height={100} />

                <Reveal>
                    <Report_Warning>
                            <>
                            <span className="bold">Не исполнение</span> СФМ требований законодательства 
                            о ПОД/ФТ, предусматривает <span className="bold">ответственность</span> ст.214 КоАП.
                            </>
                    </Report_Warning>
                </Reveal>

                <Sizebox height={100} />

                <Reveal>
                    <>
                    <TextWithTitle 
                        text={`В представленной схеме продемонстрирован лишь 
                        один из распространенных примеров ОД, 
                        однако выделяют и другие способы, 
                        и схемы в ходе легализации доходов:`}
                    />
                    <Sizebox height={20}/>
                    <NumberedDots 
                        dotsColor={'#CADEFC'}
                        list={[
                            'Сделки с занижением цены;',
                            'Сделки с завышением цены;',
                            'Легализация преступных доходов через игорный бизнес;',
                            'Покупка или продажа объектов недвижимости;',
                            'Использование банковских счетов иностранной или совместной фирмы;',
                            'Операции, совершаемые с криптовалютой;',
                            'Фиктивные сделки предоставления услуг, реализации товара;',
                            'Иные схемы и способы.',
                        ]}
                    />
                    </>
                </Reveal>

                <Sizebox height={100} />

                <Reveal>
                    <Centered>
                        <RandomParapraph>
                            <>
                            В Личном кабинете СФМ размещены <span className="bold">типологии</span> ОД/ФТ, 
                            утвержденные уполномоченным органом по финансовому мониторингу (АФМ).
                            Данные схемы разрабатываются исходя из международного опыта, 
                            приговоров уголовных дел, в результате оперативного и 
                            тактического анализа и т.д.
                            </>
                        </RandomParapraph>
                    </Centered>
                </Reveal>

                <Sizebox height={100} />

                <Reveal>
                    <>
                    <RandomH2>
                        <>
                        Предикатные преступления в сфере отмывания денег
                        </>
                    </RandomH2>
                    <Sizebox height={20} />
                    <RandomParapraph>
                        <>
                        <span className="bold">Предикатными</span> по отношению к отмыванию денег 
                        считаются преступления, <span className="bold">в результате</span> совершения 
                        которых возникает <span className="bold">доход или имущество</span>, впоследствии 
                        <span className="bold">подлежащие отмыванию (легализации)</span>, такие как:
                        </>
                    </RandomParapraph>
                    <Sizebox height={40} />
                    <NotNumberedDots 
                        dotsColor={'#CADEFC'}
                        list={[
                            'выписка фиктивных счетов-фактур;',
                            'присвоение или растрата вверенного чужого имущества;',
                            'организация незаконного игорного бизнеса;',
                            'грабеж;',
                            'вымогательство;',
                            'создание организованной преступной группировки;',
                            'подлог;',
                            'фальшивомонетничество;',
                            'подделка документов;',
                            'незаконный оборот наркотиков и оружия;',
                            'мошенничество;',
                            'взятка;',
                            'коррупция;',
                            'нарушение авторских прав и целый ряд других преступлений.',
                        ]}
                    />
                    </>
                </Reveal>

                <Sizebox height={100}/>

                <Reveal>
                    <Centered>
                        <RandomParapraph>
                            <>
                            В <span className="bold">НОР</span> (от 2021 года) определены в качестве <span className="bold">угроз высокой степени: 
                            налоговые преступления, нелегальная экономическая деятельность, 
                            коррупция</span> и <span className="bold">хищение бюджетных средств, мошенничество</span> 
                            и <span className="bold">незаконный оборот наркотиков.</span>
                            </>
                        </RandomParapraph>
                    </Centered>
                </Reveal>
                <Sizebox height={80} />

                <Reveal>
                    <HeaderWithLine headerColor={'#1F3C88'} lineColor={'#CADEFC'}>
                        <>
                        Посмотрите видео ниже, 
                        чтобы узнать больше о выявлении схем ОД 
                        и предикатных преступлений.
                        </>
                    </HeaderWithLine>
                </Reveal>
                <Sizebox height={100} />
                <Reveal>
                    <VideoWithTitleAndText 
                        url={null}
                        title={'Схема ОД в сделках с объектами недвижимого имущества'}
                        text={<>Преступниками при ОД часто используются схемы с использованием заключения <span className="bold">договоров купли-продажи</span> недвижимого имущества <span className="bold">с завышением стоимости объекта.</span></>}
                    />
                </Reveal>

                <Sizebox height={40} />
                <Reveal>
                    <TextWithTitle 
                        text={[
                            <>К примеру, в представленной схеме, возможно, использования <span className="bold">услуг нотариусов и риелторов</span> при приобретении недвижимости по завышенной стоимости.</>,
                            <>У продавца имеются <span className="bold">доходы</span>, полученные преступным путем, <span className="bold">для легализации данных средств</span>, преступнику необходимо придать <span className="bold">законность</span> и <span className="bold">основание</span> таким доходам.</>,
                            <>Тем самым, заключается договор купли-продажи на недвижимое имущество, где покупатель <span className="bold">приобретает</span> объект недвижимости (который по рыночной стоимости значительно ниже), <span className="bold">предварительно обговорив условия</span> заключения.</>,
                            <>Фактически, покупать передает <span className="bold">значительно меньшую сумму</span>, при этом в договоре отражается сумма, <span className="bold">с учетом размера дохода, который необходимо легализовать.</span></>,
                        ]}
                    />
                </Reveal>

                <Sizebox height={100} />
                <Reveal>
                    <Report_Warning>
                    Для выявления СФМ таких схем, важно применение усиленных мер НПК.
                    </Report_Warning>
                </Reveal>
                <Sizebox height={100} />

                <Reveal>
                    <HeaderWithLine headerColor={'#1F3C88'} lineColor={'#CADEFC'}>
                        <>
                        <span className="bold">Для закрепления</span> информации по схеме ОД в сделках с недвижимым имуществом
                        (приведенной в видео-уроке),
                        пожалуйста, расставьте карточки с <span className="bold">признаками подозрительной операции</span> 
                        (по соответствующим полям), определенных в данной схеме.
                        </>
                    </HeaderWithLine>
                </Reveal>

                <Sizebox height={100} />

                <DragAndDropTwoSide 
                    questions={[
                        {answer: 'answer1', side: 'left'},
                        {answer: 'answer2', side: 'right'},
                        {answer: 'answer3', side: 'left'},
                    ]}
                    leftAnswer={'True'}
                    rightAnswer={'False'}
                />

                <Sizebox height={100} />
                <Reveal>
                    <HeaderWithLine headerColor={'#1F3C88'} lineColor={'#CADEFC'}>
                        <>
                        Перейдем к следующему блоку обучения
                        </>
                    </HeaderWithLine>
                </Reveal>
                <Sizebox height={50} />
                <Reveal>
                    <NextLesson handleOnClick={() => {
                        CheckCurrentChapter(id);
                    }}/> 
                </Reveal>

                {/* ------------ */}

            </LessonPage>)
        case 7: 
            return (<LessonPage name={'Основные стадии отмывания денег'} lecturer={'AML Academy'}>
                {/* <Sizebox height={28} /> */}
                
                <Reveal>
                    <ImageWithText 
                        color={'#FFFFFF'}
                        imageText={'История, терроризм, финансирование терроризма'}
                    />   
                </Reveal>

                <Sizebox height={100} />

                <HeaderWithLine 
                    headerColor={'#1F3C88'}
                >
                    <>
                    Понимание того, что задача борьбы с 
                    терроризмом включает в себя 
                    <span className='bold'> не только 
                    выявление и пресечение отдельных 
                    террористических актов</span>
                    , но и <span className="bold">противодействие 
                    непосредственно самой террористической деятельности</span>, 
                    где важную роль играет ее финансовая основа, 
                    привело к необходимости развития новых форм 
                    международного сотрудничества.
                    </>
                </HeaderWithLine>

                <Sizebox height={80} />

                {/* <Centered>
                    <RandomParapraph >
                        <>
                            <span className="bold"></span>
                        </>
                    </RandomParapraph>
                </Centered> */}

                <TextWithTitle
                    title={'1994 год - принята Декларация о мерах ликвидации международного терроризма.'}
                    text={[
                        'В соответствии с данным документам, всем странам было рекомендовано принять эффективные и решительные меры, по ликвидации терроризма, в частности, воздерживаться от организации террористической деятельности, подстрекательстве, содействия ее осуществления, финансирования, поощрения или проявления терпимости к ней и принимать надлежащие практические меры к обеспечению того, чтобы их территории не использовались для создания террористических баз или учебных лагерей или для подготовки или организации террористических актов, направленных против других государств или граждан. '
                    ]}
                />

                <Sizebox height={80} />

                <TextWithTitle
                    title={'1999 год - в г. Нью-Йорк принята Международная конвенция о борьбе с финансированием терроризма.'}
                    text={[
                        'В рамках данного документа впервые были предприняты попытки раскрыть понятие преступления финансирования терроризма.',
                        'Согласно данному документу, любое лицо совершает преступление, если оно любым способом и методом, прямо или косвенно, незаконно или умышленно, представляет средства или осуществляет их сбор с намерением, чтобы они использовались, или при осознании того, что они будут использованы полностью или частично для совершения какого-либо деяния, представляющего собой «террористическую деятельность».'
                    ]}
                />

                <Sizebox height={80} />

                <Report_Warning>
                Более того, даже сама попытка финансирования терроризма рассматривается как преступление.
                </Report_Warning> 

                <Sizebox height={80} />

                

                <Sizebox height={80} />


                <Reveal>
                    <HeaderWithLine headerColor={'#1F3C88'} lineColor={'#CADEFC'}>
                        <>
                        Перейдем к следующему блоку обучения
                        </>
                    </HeaderWithLine>
                </Reveal>

                <Sizebox height={50} />
                    
                <VideoWithTitleAndText 
                    url={null}
                    title={'Пример сбора денежных средств путем краудфандинга'}
                    text={[
                        'Идею краудфандинга подхватили разные террористические организации, которые под видом НКО собирают денежные средства на «помощь бедствующим» по всему миру, где идут военные конфликты, а также на социальные необходимые проекты. Но на самом деле, денежные средства идут на вооружение, на пропаганду, вербовку и т.д. ',
                        'Согласно данным правоохранительного органа выявлены факты перечисление денежных средств гражданами Республики Казахстан в пользу НКО.'
                    ]}
                />

                <Sizebox height={50} />

                <Reveal>
                    <NextLesson handleOnClick={() => {
                        CheckCurrentChapter(id);
                    }}/> 
                </Reveal>

            </LessonPage>)
        case 8:
            return (<TestPage name={'ТЕСТ ПОД ФТ'} questions={quizQuestions || []} quizId={4} handleOpenModal={handleOpenFeedbackModal}>

            </TestPage>)
        case 9:
            return (<LessonPage name={'Группа разработки финансовых мер борьбы с отмыванием денег (ФАТФ)'} lecturer={'AML Academy'}>
                <Reveal>
                    <Sizebox height={30}/>
                    <ImageWithText
                        img={image59}
                        color={'#FFFFFF'}
                    >
                        <>
                            <h2 style={{color: '#FFFFFF', marginTop: 0, marginBottom: 0}}>
                                В 1989 году по решению стран «Большой семерки» была создана Группа разработки финансовых мер борьбы с отмыванием денег (ФАТФ) (Financial Action Task Force on Money Laundering – FATF)
                            </h2>
                            <Sizebox height={17} />
                            <h3>
                                – межправительственная организация, которая занимается <span class="bold">выработкой мировых стандартов в сфере ПОД/ФТ</span> , а также осуществляет оценки соответствия национальных систем ПОД/ФТ этим стандартам.
                            </h3>
                        </>
                    </ImageWithText>
                    <Sizebox height={50}/>

                    <Report_Warning>
                        Большая Семерка (G7) неформальный международный клуб, объединяющий Великобританию, Германию, Италию, Канаду, Францию, Японию и США.

                    </Report_Warning>
                    <Sizebox height={50}/>

                    <RandomParapraph>
                        <>
                            ФАТФ является основным международным институтом, занимающимся <span className="bold">разработкой</span> и <span className="bold">внедрением</span> международных стандартов в сфере ПОД/ФТ. В настоящее время <span className="bold">членами ФАТФ</span> являются 37 стран и 2 международные организации,<span className="bold"> наблюдателями</span> – 25 организаций и 1 государство (Индонезия).
                        </>
                    </RandomParapraph>
                    <Sizebox height={15}/><RandomParapraph>
                        <>
                            Основным <span class="bold">инструментом</span> ФАТФ <span class="bold">в реализации</span> своего <span class="bold">мандата</span> являются <span class="bold">40 рекомендаций</span> в сфере ПОД/ФТ/ФРОМУ, которые подвергаются <span class="bold">ревизии</span> в среднем <span class="bold">один раз</span> в пять лет.

                        </>
                    </RandomParapraph>
                    <Sizebox height={50}/>

                    <HeaderWithLine headerColor={'#1F3C88'} lineColor={'#CADEFC'}>
                        ФАТФ уделяет значительное внимание сотрудничеству с такими международными организациями, как МВФ, Всемирный банк, Управление ООН по наркотикам и преступности.
                    </HeaderWithLine>
                    <Sizebox height={50}/>
                    // Здесь не видна варнинг айкон
                    <Report_Warning>
                        Данные структуры реализуют свои программы, нацеленные на противодействие отмыванию денег и финансированию терроризма. Одним из основных инструментов реализации рекомендаций ФАТФ на национальном уровне являются Подразделения финансовой разведки (ПФР), отвечающие за сбор и анализ финансовой информации в пределах каждой конкретной страны с целью выявления потоков финансовых средств, добытых незаконным путём.
                        Документы ФАТФ, в особенности 40 Рекомендаций, представляют собой всеобъемлющий свод организационно-правовых мер по созданию в каждой стране эффективного режима ПОД/ФТ.
                        Рекомендации ФАТФ не дублируют и не подменяют соответствующие положения иных международных актов, а при необходимости, дополняя их, сводят в единую систему организационных принципов и правовых норм, играя при этом важную роль в процессе кодификации норм и правил в сфере ПОД/ФТ.

                    </Report_Warning>
                    <Sizebox height={50}/>
                    //по сути здесь типа не варнинг а ! !!!
                    <Report_Warning>
                        В соответствии с Резолюцией СБ ООН № 1617 (2005), 40 Рекомендаций ФАТФ являются обязательными международными стандартами для выполнения государствами – членами ООН+.
                        международная организация, созданная для поддержания и укрепления международного мира и безопасности, а также развития сотрудничества между государствами
                        ООН была образована 24 октября 1945 года. С 2011 года членами ООН являются 193 страны, в том числе и Казахстан со 2 марта 1992 года, наряду с такими странами как Азербайджан, Армения, Киргизия, Таджикистан, Туркмения и Узбекистан.

                    </Report_Warning>
                    <Sizebox height={50} />
                    <ImageWithText
                        img={image60}
                        color={'black'}
                    >
                        <>
                            <h3>
                                ООН была образована 24 октября 1945 года. С 2011 года членами ООН являются 193 страны, в том числе и Казахстан со 2 марта 1992 года, наряду с такими странами как Азербайджан, Армения, Киргизия, Таджикистан, Туркмения и Узбекистан.
                            </h3>
                        </>
                    </ImageWithText>

                        <NextLesson handleOnClick={() => {
                            CheckCurrentChapter(id);
                        }}/>
                </Reveal>

            </LessonPage>)
        case 10:
            return (<LessonPage name={'Региональные группы по типу ФАТФ'} lecturer={'AML Academy'}>
                <Reveal>
                    <Sizebox height={30}/>
                    <HeaderWithLine headerColor={'#1F3C88'} lineColor={'#CADEFC'}>
                        <>
                            Для глобального распространения Рекомендаций ФАТФ <span class="bold">созданы</span> девять <span class="bold">региональных групп</span> по типу ФАТФ (РГТФ).
                        </>
                    </HeaderWithLine>
                    <Sizebox height={40}/>

                    <Report_Warning>
                        <span class="bold">Основная задача</span> РГТФ – построение систем ПОД/ФТ/ФРОМУ в соответствующих регионах.

                    </Report_Warning>
                    <Sizebox height={50}/>

                    <TextWithTitle title={"РГТФ проводят оценки систем ПОД/ФТ государств-членов и вырабатывают рекомендации по их совершенствованию."}
                    text={["Региональные группы также занимаются исследованием типологий – наиболее распространенных схем ОД/ФТ/ФРОМУ. По итогам типологических исследований лучшие практики распространяются среди частного сектора, надзорных и регулирующих органов, правоохранительных структур и научно-экспертного сообщества.","Некоторые РГТФ координируют с донорами оказание технического содействия своим государствам-членам."]}/>

                    <Sizebox height={40} />
                    <NumberedDots
                        dotsColor={'#CADEFC'}
                        list={[
                            'Азиатско-Тихоокеанская группа по борьбе с отмыванием денег (АТГ);',
                            'Группа по борьбе с отмыванием денег в Восточной и Южной Африке (ЕСААМЛГ);',
                            'Группа по борьбе с отмыванием денег в Центральной Африке (ГАБАК);',
                            'Группа разработки финансовых мер борьбы с отмыванием денег в Южной Америке (ГАФИЛАТ);',
                            'Группа разработки финансовых мер борьбы с отмыванием денег на Ближнем Востоке и в Северной Африке (МЕНАФАТФ);',
                            'Евразийская группа (ЕАГ);',
                            'Карибская группа разработки финансовых мер борьбы с отмыванием денег (КФАТФ);',
                            'Комитет экспертов Совета Европы по оценке мер борьбы с отмыванием денег и финансированием терроризма (МАНИВЭЛ);',
                            'Межправительственная группа по борьбе с отмыванием денег в Западной Африке (ГИАБА);',
                            'Сходные с РГТФ функции имеет Группа надзорных органов международных финансовых центров (ГНМФЦ, бывш. Офшорная группа банковского надзора);',
                        ]}
                    />
                    <Sizebox height={50} />

                    <NextLesson handleOnClick={() => {
                        CheckCurrentChapter(id);
                    }}/>
                </Reveal>

            </LessonPage>)
        case 11:
            return (<LessonPage name={'Рекомендации ФАТФ'} lecturer={'AML Academy'}>
                <Reveal>
                    <ImageWithText
                        img={image61}
                        color={'#fff'}
                    >
                        <>
                            <h3>
                                ООН была образована 24 октября 1945 года. С 2011 года членами ООН являются 193 страны, в том числе и Казахстан со 2 марта 1992 года, наряду с такими странами как Азербайджан, Армения, Киргизия, Таджикистан, Туркмения и Узбекистан.
                            </h3>
                        </>
                    </ImageWithText>
                    <Sizebox height={30}/>
                    <TextWithTitle title={"Рекомендации ФАТФ устанавливают комплексную и последовательную структуру мер, которые странам следует применять для ПОД/ФТ/ФРОМУ."}
                                   text={["Страны имеют различные правовые, административные и оперативные структуры и различные финансовые системы, в связи с чем они не могут принимать идентичные меры по противодействию этим угрозам. Поэтому странам следует адаптировать к своим конкретным условиям Рекомендации ФАТФ. \n" +
                                   "Рекомендации устанавливают необходимые меры, которые странам следует иметь для того, чтобы:"]}/>

                    <Sizebox height={40} />
                    <NotNumberedDots
                        dotsColor={'#CADEFC'}
                        list={[
                            'определять риски, разрабатывать политику и осуществлять координацию внутри страны;',
                            'преследовать ОД/ФТ/ФРОМУ;',
                            'применять превентивные меры для финансового сектора и других установленных секторов;',
                            'устанавливать полномочия и ответственность компетентных органов (например, следственных, правоохранительных и надзорных органов) и иные институциональные меры;',
                            'укреплять прозрачность и доступность информации о бенефициарной собственности юридических лиц и образований;',
                            'обеспечивать международное сотрудничество;',
                        ]}
                    />
                    <Sizebox height={50} />
                    //дурыстау керек
                    <FileDownloader/>

                    <Sizebox height={100} />
                    <TODO text={'Warning Рекомендации ФАТФ были имплементированы в нормативных правовых актах Республики Казахстан'}/>
                    <Sizebox height={100} />
                    
                    <DropdownGlossaryList 
                        headerTextColor={'#170F49'}
                        activeHeaderTextColor={'#1F3C88'}
                        textColor={'#6F6C90'}
                        tabsTextColor={'#3A3939'}
                        tabsBackgroundColor={'#BAD6FF'}
                        list={[
                            {
                                title: 'Разработаны в 1990 году',
                                description: 'как инициатива по защите финансовых систем от лиц, отмывающих денежные средства, вырученные от продажи наркотиков'
                            },
                            {
                                title: 'Пересмотрены в 1996 году',
                                description: 'в первый раз с учетом развивающихся тенденций и способов ОД и расширения сферы их применения за пределы отмывания выручки от продажи наркотиков'
                            },
                            {
                                title: 'В 2001 году расширен мандат',
                                description: 'включены проблемы финансирования террористических актов и террористических организаций'
                            },
                            {
                                title: 'Пересмотрены в 2003 году',
                                description: 'во второй раз и признаны более чем 180 странами и являются международным стандартом по ПОД/ФТ'
                            },
                        ]} 
                    />
                    <Sizebox height={100} />


                    <TextWithTitle title={"Рекомендации ФАТФ подразделяются на основные группы"}
                    />
                    <Sizebox height={40} />
                    <NotNumberedDots
                        dotsColor={'#CADEFC'}
                        list={[
                            'Политика ПОД/ФТ и координация;',
                            'Отмывание денег и конфискация;',
                            'Финансирование терроризма и распространения ОМУ;',
                            'Превентивные меры;',
                            'Прозрачность и бенефициарная собственность юридических лиц и образований;',
                            'Полномочия и ответственность компетентных органов и иные институциональные меры;',
                            'Международное сотрудничество;',
                        ]}
                    />
                    <Sizebox height={50} />
                    <HeaderWithLine headerColor={'#1F3C88'} lineColor={'#CADEFC'}>
                        <>
                            <span class="bold">Для оценки</span> соответствия стран Рекомендациям <span class="bold">ФАТФ предусмотрел Методологию</span> оценки технического соответствия Рекомендациям ФАТФ и эффективности системы ПОД/ФТ.

                        </>
                    </HeaderWithLine>
                    <Sizebox height={50} />
                    <Report_Warning>
                        По каждой Рекомендации эксперты должны вынести заключение о степени соответствия (или несоответствия) страны стандарту.
                    </Report_Warning>
                    <Sizebox height={50} />
                    <HeaderWithLine headerColor={'#1F3C88'} lineColor={'#CADEFC'}>
                        <>
                            Существует <span class="bold">четыре</span> возможных <span class="bold">уровня соответствия:</span>
                        </>
                    </HeaderWithLine>
                    <Sizebox height={200} />
                    <HeaderWithLine headerColor={'#1F3C88'} lineColor={'#CADEFC'}>
                        <>
                            <span class="bold">Рекомендации ФАТФ</span> оцениваются в виде <span class="bold">непосредственных результатов</span> – свод Рекомендаций, объединенные в «группировки» по тематике оцениваемого участка, для более глубоко анализа и оценки.
                            Таким образом, 40 Рекомендаций ФАТФ объединены в 11 НРов.
                            При этом, Рекомендации, входящие в состав одного НР может быть и в составе других.
                        </>
                    </HeaderWithLine>
                    <Sizebox height={40} />

                    <NextLesson handleOnClick={() => {
                        CheckCurrentChapter(id);
                    }}/>
                </Reveal>

            </LessonPage>)
        case 12:
            return (<LessonPage name={'Непосредственный результат 4 «Превентивные меры»'} lecturer={'AML Academy'}>
                <Reveal>
                    <Sizebox height={30}/>
                    <TextWithBackground
                        header={'Для соответствия НР4 субъектам необходимо должным образом применять превентивные меры в сфере ПОД/ФТ, в соответствии с их рисками и сообщать об СПО.\n'}
                    />
                    <TextWithTitle text={["Субъектам также необходимо:"]}/>

                    <Sizebox height={40} />
                    <NumberedDots
                        dotsColor={'#CADEFC'}
                        list={[
                            'понимать характер и уровень своих рисков ОД/ФТ;',
                            'разработать и применять политику в сфере ПОД/ФТ (включая групповую политику), меры внутреннего контроля и программы для адекватного снижения этих рисков;',
                            'применение соответствующих мер НПК для идентификации и проверки своих клиентов (включая БС);',
                            'осуществлять текущий мониторинг;',
                            'должным образом выявлять ПО и сообщать о них;',
                            'выполнять иные требования по ПОД/ФТ;',
                        ]}
                    />
                    <Sizebox height={40} />

                    <NextLesson handleOnClick={() => {
                        CheckCurrentChapter(id);
                    }}/>
                </Reveal>

            </LessonPage>)
        case 13:
            return (<LessonPage name={'Отчет о Взаимной оценке'} lecturer={'AML Academy'}>
                <Reveal>
                    <Sizebox height={30}/>
                    <ImageLine
                        img={image62}
                        color={'black'}
                    >
                    </ImageLine>
                    <Sizebox height={30}/>
                    <TextWithTitle title={"Взаимные оценки проводятся РГТФ в рамках которых национальные системы ПОД/ФТ государств-участников проверяются на соответствие международным стандартам"}
                                   text={["Под взаимностью подразумевается, что представители всех государств-членов РГТФ оценивают другие государства-члены по очереди в соответствии с графиком оценок.\n" +
                                   "Взаимные оценки проводят МВФ, Всемирный банк и ФАТФ."]}/>

                    {/*<Sizebox height={20} />*/}
                    <Report_Warning>
                        График взаимных оценок ЕАГ размещается на официальном интернет ресурсе ЕАГ https://eurasiangroup.org/ru/general-information
                    </Report_Warning>
                    <Sizebox height={40} />
                    <TextWithTitle title={"По итогам взаимной оценки к Казахстану применена процедура «стандартный мониторинг» – механизм мониторинга, применяемый для всех государств-членов ЕАГ, не имеющих существенных недостатков в техническом соответствии рекомендациям ФАТФ и системы ПОД/ФТ."}
                                   text={["Выработанные экспертами ЕАГ рекомендации по итогам взаимной оценки легли в основу мер по совершенствованию национальной системы ПОД/ФТ.\n" +
                                   "В целях выработки мер по реализации государственной политики в сфере ПОД/ФТ, повышения их эффективности, а также координации мер, направленных на снижение рисков легализации (отмывания) доходов и финансирования терроризма, создан Межведомственный совет по вопросам предупреждения легализации (отмывания) доходов, полученных преступным путем, и финансирования терроризма."
                                       ,"В национальное законодательство о ПОД/ФТ внесены концептуальные поправки:\n"]}/>

                    <Sizebox height={40} />
                    <NotNumberedDots
                        dotsColor={'#CADEFC'}
                        list={[
                            'определен государственный орган-регулятор для четырех видов субъектов финансового мониторинга (риелторы, юристы, лизинга, бухгалтерские организации и профессиональные бухгалтеры);',
                            'усилена ответственность всех субъектов финансового мониторинга за несоблюдение требований Закона о ПОД/ФТ;',
                            'определен государственный орган, ответственный за учет и использование конфискованного имущества, и образование фонда такого имущества;',
                            'усилено международное сотрудничество в части обмена информацией в сфере ПОД/ФТ между органами финансового контроля и правоохранительными органами с иностранными компетентными органами;',
                            'операции публичных должностных лиц стали подлежать финансовому мониторингу;',
                        ]}
                    />
                    <Sizebox height={40} />

                    <NextLesson handleOnClick={() => {
                        CheckCurrentChapter(id);
                    }}/>
                </Reveal>

            </LessonPage>)
        case 14:
            return (<LessonPage name={'Национальная оценка рисков'} lecturer={'AML Academy'}>
                <Reveal>
                    <Sizebox height={30}/>
                    <HeaderWithLine headerColor={'#1F3C88'} lineColor={'#CADEFC'}>
                        <>
                            <span class="bold">АФМ</span> является координатором процесса проведения Национальной оценки рисков и подготовки Республики Казахстан к взаимной оценке.
                        </>
                    </HeaderWithLine>
                    <Sizebox height={30}/>
                    <RandomParapraph>
                        <>
                            В целях выработки мер по реализации государственной политики в сфере ПОД/ФТ/ФРОМУ, повышения их эффективности, а также координации мер, направленных на снижение рисков ОД/ФТ, образован <span class="bold" style={{ color: 'red' }}>МВС+</span> (Межведомственный совет) по вопросам предупреждения ПОД/ФТ/ФРОМУ.
                            В целях выработки мер по реализации государственной политики в сфере ПОД/ФТ/ФРОМУ, повышения их эффективности, а также координации мер, направленных на снижение рисков ОД/ФТ, образован <span class="bold" style={{ color: 'red' }}>МВС+</span> (Межведомственный совет) по вопросам предупреждения ПОД/ФТ/ФРОМУ.
                        </>
                    </RandomParapraph>
                    <Sizebox height={30}/>

                    <RandomParapraph>
                        <>
                            Работа в рамках проведения оценки координируется МВС в сфере ПОД/ФТ, а также специально созданной <span class="bold" style={{color: 'red'}}>рабочей группой+</span> (в состав рабочей группы входят представители всех государственных, правоохранительных и специальных государственных органов) по оценке рисков и взаимной оценке.
                        </>
                    </RandomParapraph>
                    <Sizebox height={30}/>

                    <RandomParapraph>
                        <>
                            МВС рассматривает и одобряет отчет об оценке рисков, а <span class="bold">Правительство</span> Республики Казахстан <span class="bold">утверждает меры</span>, направленные на снижение рисков ОД/ФТ.
                        </>
                    </RandomParapraph>
                    <Sizebox height={30}/>
                    <RandomParapraph>
                        <>
                            <span class="bold">АФМ направляет</span> соответствующим государственным органам отчет по оценке рисков, а также <span class="bold">размещает на своем интернет-ресурсе</span> информацию из отчета.
                        </>
                    </RandomParapraph>
                    <Sizebox height={30}/>

                    <RandomParapraph>
                        <>
                            СФМ должны учитывать опубликованную информацию из отчета оценки рисков ОД/ФТ при реализации программ, включенных правил внутреннего контроля.
                        </>
                    </RandomParapraph>
                    <Sizebox height={30}/>
                    <Report_Warning>
                        Первая национальная оценка рисков ОД/ФТ была проведена в стране в 2018 г. и носила закрытый характер. С 2018 года сфера ПОД/ФТ в Республике Казахстан претерпела существенные изменения. В 2021 г. Республика Казахстан провела две национальные оценки рисков ОД и ФТ/ФРОМУ, отчеты по которым носят закрытый характер, но имеют публичные версии. По итогам страной были пересмотрены результаты предыдущей оценки и проведены некоторые реформы, направленные на минимизацию выявленных рисков в сфере ПОД/ФТ и повышение эффективности работы финансовой разведки, надзорных и правоохранительных органов.
                    </Report_Warning>
                    <Sizebox height={40} />
                    <TextWithTitle title={"Таким образом, основными предикатными преступлениями, предшествующими легализации денег и имущества, являются:"}
                    />

                    <Sizebox height={40} />
                    <NumberedDots
                        dotsColor={'#CADEFC'}
                        list={[
                            'выписка фиктивных счетов-фактур;',
                            'присвоение или растрата вверенного чужого имущества;',
                            'организация незаконного игорного бизнеса;',
                            'незаконный оборот нефти и нефтепродуктов;',
                            'уклонение от уплаты налогов;',
                            'мошенничество;',
                            'нарушение порядка маркировки подакцизных товаров;',
                            'изготовление, хранение или сбыт поддельных денег;',
                            'причинение имущественного ущерба путем обмана;',
                        ]}
                    />
                    <Sizebox height={40} />
                    <TextWithTitle title={"Для оценки рисков ПОД/ФТ наряду с угрозами установлены следующие уязвимости национальной антиотмывочной системы:"}
                    />

                    <Sizebox height={40} />
                    <NotNumberedDots
                        dotsColor={'#CADEFC'}
                        list={[
                            'оборот наличных денег;',
                            'использование номинальных юридических лиц (фирм-однодневок) для применения схем ОД;',
                            'переводы за границу денежных средств, полученных преступным путем;',
                            'несовершенство системы управления рисками государственных органов и финансового сектора;',
                            'недостаточная разъяснительная работа с субъектами финансового мониторинга (по законодательству в сфере ПОД/ФТ, имеющимся рискам и угрозам отмывания преступных доходов);',
                        ]}
                    />
                    <Sizebox height={40} />
                    <Report_Warning>
                        Учитывая системность проведения национальной оценки, участники антиотмывочной системы подвергаются проведению соответствующих работ раз в три года.

                    </Report_Warning>
                    <Sizebox height={40} />
                    <TextWithTitle title={"В целях установления уязвимостей национальной антиотмывочной системы в сфере ОД и их категорирования определены соответствующие критерии риска:"}
                    />

                    <Sizebox height={40} />
                    <NotNumberedDots
                        dotsColor={'#CADEFC'}
                        list={[
                            'общая ситуация в финансовом и нефинансовом секторах и объем совершаемых операций;',
                            'информация об исполнении СФМ законодательства в сфере ПОД/ФТ;',
                            'наличие информационных систем и IT-инструментов для применения мер надлежащей проверки;',
                            'виды оказываемых услуг, продуктов, операций с учетом специфики деятельности СФМ;',
                        ]}
                    />
                    <Sizebox height={40} />
                    <TextWithTitle title={"По итогам НОР определены группы рисков ОД в разрезе услуг:"}
                                   text={["1) Группа с высоким риском:"]}/>

                    <Sizebox height={40} />
                    <NotNumberedDots
                        dotsColor={'#CADEFC'}
                        list={[
                            'услуги БВУ и организаций, осуществляющих отдельные виды банковских операций;',
                            'услуги организаторов игорного бизнеса и лотерей;',
                            'услуги микрофинансовых организаций;',
                        ]}
                    />
                    <Sizebox height={40} />
                    <TextWithTitle
                        text={["2) Группа со средним риском:"]}/>

                    <Sizebox height={40} />
                    <NotNumberedDots
                        dotsColor={'#CADEFC'}
                        list={[
                            'виртуальные валюты;',
                            'платежные организации;',
                            'организации, осуществляющие обменные операции;',
                            'профессиональные участники рынка ценных бумаг, центрального депозитария;',
                            'страховые (перестраховочные) организации и брокеры, общество взаимного страхования;',
                            'индивидуальные предприниматели и юридические лица, осуществляющих лизинговую деятельность без лицензии;',
                            'индивидуальные предприниматели и юридические лица, осуществляющих деятельность с драгоценными металлами и драгоценными камнями, ювелирными изделиями из них;',
                        ]}
                    />
                    <Sizebox height={40} />
                    <TextWithBackground
                        header={'НОР ФТ'}
                        text={'Целью НОР ФТ является определение наиболее рискованных методов и инструментов, применяемых террористами либо террористическими группами в Республике Казахстан с целью привлечения, перемещения или использования средств на преступные цели. В задачи НОР ФТ равным образом входит исследование существующих угроз, уязвимых мест в НС ПФТ и возникающих при этом рисков ФТ, понимание происходящих в данной системе процессов, а также определение потенциальных инициатив для ее развития.'}
                    />
                    <NextLesson handleOnClick={() => {
                        CheckCurrentChapter(id);
                    }}/>
                </Reveal>

            </LessonPage>)
        case 15:
            return (<LessonPage name={'Списки ФАТФ'} lecturer={'AML Academy'}>
                <Reveal>
                    <Sizebox height={30}/>
                    <ImageLine
                        img={image63}
                        color={'black'}
                    >
                    </ImageLine>
                    <Sizebox height={30}/>
                    <TextWithTitle title={"Взаимные оценки проводятся РГТФ в рамках которых национальные системы ПОД/ФТ государств-участников проверяются на соответствие международным стандартам"}
                                   text={["Под взаимностью подразумевается, что представители всех государств-членов РГТФ оценивают другие государства-члены по очереди в соответствии с графиком оценок.\n" +
                                   "Взаимные оценки проводят МВФ, Всемирный банк и ФАТФ."]}/>

                    {/*<Sizebox height={20} />*/}
                    <Report_Warning>
                        График взаимных оценок ЕАГ размещается на официальном интернет ресурсе ЕАГ https://eurasiangroup.org/ru/general-information
                    </Report_Warning>
                    <Sizebox height={40} />
                    <TextWithTitle title={"По итогам взаимной оценки к Казахстану применена процедура «стандартный мониторинг» – механизм мониторинга, применяемый для всех государств-членов ЕАГ, не имеющих существенных недостатков в техническом соответствии рекомендациям ФАТФ и системы ПОД/ФТ."}
                                   text={["Выработанные экспертами ЕАГ рекомендации по итогам взаимной оценки легли в основу мер по совершенствованию национальной системы ПОД/ФТ.\n" +
                                   "В целях выработки мер по реализации государственной политики в сфере ПОД/ФТ, повышения их эффективности, а также координации мер, направленных на снижение рисков легализации (отмывания) доходов и финансирования терроризма, создан Межведомственный совет по вопросам предупреждения легализации (отмывания) доходов, полученных преступным путем, и финансирования терроризма."
                                       ,"В национальное законодательство о ПОД/ФТ внесены концептуальные поправки:\n"]}/>

                    <Sizebox height={40} />
                    <NotNumberedDots
                        dotsColor={'#CADEFC'}
                        list={[
                            'определен государственный орган-регулятор для четырех видов субъектов финансового мониторинга (риелторы, юристы, лизинга, бухгалтерские организации и профессиональные бухгалтеры);',
                            'усилена ответственность всех субъектов финансового мониторинга за несоблюдение требований Закона о ПОД/ФТ;',
                            'определен государственный орган, ответственный за учет и использование конфискованного имущества, и образование фонда такого имущества;',
                            'усилено международное сотрудничество в части обмена информацией в сфере ПОД/ФТ между органами финансового контроля и правоохранительными органами с иностранными компетентными органами;',
                            'операции публичных должностных лиц стали подлежать финансовому мониторингу;',
                        ]}
                    />
                    <Sizebox height={40} />

                    <NextLesson handleOnClick={() => {
                        CheckCurrentChapter(id);
                    }}/>
                </Reveal>

            </LessonPage>)
        case 16:
            return (<LessonPage name={'ЕАГ'} lecturer={'AML Academy'}>
                <Reveal>
                    <Sizebox height={30}/>
                    <ImageLine
                        img={image62}
                        color={'black'}
                    >
                    </ImageLine>
                    <Sizebox height={30}/>
                    <TextWithTitle title={"Взаимные оценки проводятся РГТФ в рамках которых национальные системы ПОД/ФТ государств-участников проверяются на соответствие международным стандартам"}
                                   text={["Под взаимностью подразумевается, что представители всех государств-членов РГТФ оценивают другие государства-члены по очереди в соответствии с графиком оценок.\n" +
                                   "Взаимные оценки проводят МВФ, Всемирный банк и ФАТФ."]}/>

                    {/*<Sizebox height={20} />*/}
                    <Report_Warning>
                        График взаимных оценок ЕАГ размещается на официальном интернет ресурсе ЕАГ https://eurasiangroup.org/ru/general-information
                    </Report_Warning>
                    <Sizebox height={40} />
                    <TextWithTitle title={"По итогам взаимной оценки к Казахстану применена процедура «стандартный мониторинг» – механизм мониторинга, применяемый для всех государств-членов ЕАГ, не имеющих существенных недостатков в техническом соответствии рекомендациям ФАТФ и системы ПОД/ФТ."}
                                   text={["Выработанные экспертами ЕАГ рекомендации по итогам взаимной оценки легли в основу мер по совершенствованию национальной системы ПОД/ФТ.\n" +
                                   "В целях выработки мер по реализации государственной политики в сфере ПОД/ФТ, повышения их эффективности, а также координации мер, направленных на снижение рисков легализации (отмывания) доходов и финансирования терроризма, создан Межведомственный совет по вопросам предупреждения легализации (отмывания) доходов, полученных преступным путем, и финансирования терроризма."
                                       ,"В национальное законодательство о ПОД/ФТ внесены концептуальные поправки:\n"]}/>

                    <Sizebox height={40} />
                    <NotNumberedDots
                        dotsColor={'#CADEFC'}
                        list={[
                            'определен государственный орган-регулятор для четырех видов субъектов финансового мониторинга (риелторы, юристы, лизинга, бухгалтерские организации и профессиональные бухгалтеры);',
                            'усилена ответственность всех субъектов финансового мониторинга за несоблюдение требований Закона о ПОД/ФТ;',
                            'определен государственный орган, ответственный за учет и использование конфискованного имущества, и образование фонда такого имущества;',
                            'усилено международное сотрудничество в части обмена информацией в сфере ПОД/ФТ между органами финансового контроля и правоохранительными органами с иностранными компетентными органами;',
                            'операции публичных должностных лиц стали подлежать финансовому мониторингу;',
                        ]}
                    />
                    <Sizebox height={40} />

                    <NextLesson handleOnClick={() => {
                        CheckCurrentChapter(id);
                    }}/>
                </Reveal>

            </LessonPage>)

    }
}

export default GetLesson;