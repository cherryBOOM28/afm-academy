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
import TextPlusDots_1 from '../courseTemplates/complex/TextPlusDots/TextPlusDots_1';
import Header from "../header/Header";
import DropdownGlossaryList from '../courseTemplates/complex/DropdownGlossaryList';
import DragAndDropTwoSide from '../courseTemplates/complex/DragAndDropTwoSide';
import Report_Information from '../courseTemplates/common/Warnings/Report_Information';
import StageDropDown from '../courseTemplates/complex/StageDropDown';
import InteractivePhases from '../courseTemplates/complex/interactives/InteractivePhases';
import Component52 from '../courseTemplates/complex/Component52';
import DataChain from '../courseTemplates/complex/DataChain';
import SimpleTable from '../courseTemplates/common/SimpleTable';
import FancyList from '../courseTemplates/common_v2/FancyList';
import FlexBoxes from '../courseTemplates/common_v2/FlexBoxes';
import FlexRow from '../courseTemplates/common_v2/FlexRow';
import DotsOnRoad from '../courseTemplates/common_v2/DotsOnRoad';
import GroupList from '../courseTemplates/complex/interactives/GroupLists';
import ImageWithPoints from '../courseTemplates/complex/interactives/ImageWithPoints';
import CustomCarousel from '../courseTemplates/complex/CustomCarousel';
import ImageAndColumns from '../courseTemplates/common_v2/ImageAndColumns';


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
import image64 from './../../assets/images/ewew.png'
import image65 from './../../assets/images/terer.jpg'
import image66 from './../../assets/images/earth.jpg'
import image67 from './../../assets/images/lawyer.png'
import image68 from './../../assets/images/moneydola.png'
import image69 from './../../assets/images/blackimage.png'
import image70 from './../../assets/images/afmlogo.png'
import image71 from './../../assets/images/71image.png'
import image72 from './../../assets/images/pfr.png'
import image73 from './../../assets/images/mvrg.png'
import image74 from './../../assets/images/mvs.png'
import image75 from './../../assets/images/troika2.png'
import image76 from './../../assets/images/dola.png'
import image77 from './../../assets/images/terrari.png'
import image78 from './../../assets/images/websfm.png'
import image79 from './../../assets/images/erorrr.png'
import ArrowRightIcon from '../courseTemplates/common_v2/FlexRow/Arrow-right.svg';
import HackerIcon from '../courseTemplates/common_v2/FlexRow/Hacker.svg'; 
import PaymentIcon from '../courseTemplates/common_v2/FlexRow/Payment.svg'; 
import defaultImg from './../../assets/images/default.png'
import image3m1 from './../../assets/images/module-3-img-1.png'
import carousel_11 from './../../assets/images/Carousel_11.png'
import carousel_12 from './../../assets/images/Carousel_12.png'
import carousel_13 from './../../assets/images/Carousel_13.png'
import carousel_14 from './../../assets/images/Carousel_14.png'
import carousel_15 from './../../assets/images/Carousel_15.png'
import carousel_16 from './../../assets/images/Carousel_16.png'
import carousel_17 from './../../assets/images/Carousel_17.png'
import carousel_18 from './../../assets/images/Carousel_18.png'
import carousel_19 from './../../assets/images/Carousel_19.png'
import carousel_110 from './../../assets/images/Carousel_110.png'
import carousel_111 from './../../assets/images/Carousel_111.png'
import imageAndColumns_1 from './../../assets/images/columnsImage_1.png'


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
                    <ImageWithText
                        img={image66}
                        color={'#FFFFFF'}
                    >
                        <>
                            <h2 style={{color: '#FFFFFF', marginTop: 0, marginBottom: 0}}>
                                Прежде чем мы углубимся в обучение и структуру данного курса,
                            </h2>
                            <Sizebox height={17} />
                            <h3>
                                пожалуйста, изучите основные сокращения, , используемые в национальной системе ПОД/ФТ.
                            </h3>
                        </>
                    </ImageWithText>
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

                <Sizebox height={40}/>

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
                    {/*<ImageLine img={null} height={130} color={'#CADEFC'}/>*/}
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
                            {header: 'Пороговая операция с деньгами и (или) иным имуществом (ПО)', data: 'Пороговая операция с деньгами и иным имуществом (ПО) обычно относится к финансовым транзакциям, которые вызывают подозрения на возможное отмывание денег или финансирование терроризма. Это могут быть операции, превышающие определенную сумму денег или имущества, и требующие особого контроля, отчетности или подтверждения легальности происхождения средств.', tabName: 'Понятия в сфере ПОД/ФТ'},
                            {header: 'Подозрительная операция с деньгами и (или) иным имуществом (СПО)', data: 'операция клиента (включая попытку совершения такой операции, операцию, находящуюся в процессе совершения или уже совершенную операцию), в отношении которой возникают подозрения о том, что деньги и (или) иное имущество, используемые для ее совершения, являются доходом от преступной деятельности, либо сама операция направлена на легализацию (отмывание) доходов, полученных преступным путем, или финансирование терроризма либо иную преступную деятельность\n', tabName: 'Понятия в сфере ПОД/ФТ'},
                            {header: 'Замораживание операций с деньгами и (или) иным имуществом', data: 'меры, принимаемые субъектами финансового мониторинга и государственными органами по приостановлению передачи, преобразования, отчуждения или перемещения денег и (или) иного имущества', tabName: 'Понятия в сфере ПОД/ФТ'},
                            {header: 'Целевые фининсовые санкции (ЦФС)', data: 'меры по замораживанию операций с деньгами и (или) иным имуществом, принимаемые субъектами финансового мониторинга и государственными органами в соответствии с настоящим Законом и резолюциями Совета Безопасности Организации Объединенных Наций, относящимися к предупреждению и предотвращению терроризма и финансирования терроризма, предупреждению, воспрепятствованию и прекращению распространения оружия массового уничтожения и его финансирования', tabName: 'Понятия в сфере ПОД/ФТ'},
                            {header: 'Выделенный канал связи (WEB SFM)', data: 'сеть уполномоченного органа в сфере финансового мониторинга, используемая для электронного взаимодействия с Субъектом', tabName: 'Понятия в сфере ПОД/ФТ'},
                            {header: 'Форма ФМ-1 (ФМ-1)', data: 'форма сведений и информации об операции, подлежащей финансовому мониторингу, предусмотренными Правилами представления субъектами финансового мониторинга сведений, утверждаемых уполномоченным органом по финансовому мониторингу в сфере противодействия легализации (отмыванию) доходов, полученных преступным путем, финансированию терроризма и финансированию распространения оружия массового уничтожения (далее - ПОД/ФТФРОМУ), в соответствии с пунктом 2 статьи 10 Закона о ПОД/ФТ.\n', tabName: 'Понятия в сфере ПОД/ФТ'},
                            {header: 'Надлежащая проверка субъектами финансового мониторинга клиентов (НПК)', data: 'меры, принимаемые субъектами финансового мониторинга в отношении своих клиентов (их представителей) и бенефициарных собственников\n', tabName: 'Проверка клиентов'},
                            {header: 'Клиент субъекта финансового мониторинга', data: 'физическое, юридическое лицо или иностранная структура без образования юридического лица, получающие услуги субъекта финансового мониторинга', tabName: 'Проверка клиентов'},
                            {header: 'Финансовая группа', data: 'группа юридических лиц, являющихся субъектами финансового мониторинга и взаимодействующих между собой в соответствии с Законом о ПОД/ФТ\n', tabName: 'Проверка клиентов'},
                            {header: 'Деловые отношения', data: 'отношения с клиентами, возникающие в процессе осуществления субъектом финансового мониторинга профессиональной деятельности\n', tabName: 'Проверка клиентов'},
                            {header: 'Безупречная деловая репутация', data: 'наличие фактов, подтверждающих профессионализм, добросовестность, отсутствие неснятой или непогашенной судимости, в том числе отсутствие вступившего в законную силу решения суда о применении уголовного наказания в виде лишения права занимать должность руководящего работника финансовой организации, банковского и (или) страхового холдинга и являться крупным участником (крупным акционером) финансовой организации пожизненно\n', tabName: 'Проверка клиентов'},
                            {header: 'Бенефициарный собственник', data: 'физическое лицо:\n' +
                                    '- которому прямо или косвенно принадлежат более двадцати пяти процентов долей участия в уставном капитале либо размещенных (за вычетом привилегированных и выкупленных обществом) акций клиента- юридического лица или иностранной структуры без образования юридического лица;\n' +
                                    '-осуществляющее контроль над клиентом иным образом;\n' +
                                    '-в интересах которого клиентом совершаются операции с деньгами и (или) иным имуществом;\n', tabName: 'Проверка клиентов'},
                            {header: 'Субъект финансового мониторинга (СФМ)', data: 'Участники системы ПОД/ФТ, определенные ст.3 Закона о ПОД/ФТ', tabName: 'СФМ'},
                            {header: 'Независимый специалист по юридическим вопросам', data: 'физическое лицо, оказывающее юридические услуги как самостоятельно, так и в качестве партнера или работника на основании трудового договора с субъектом предпринимательства, оказывающего юридическую помощь.\n', tabName: 'СФМ'},
                            {header: 'Риски ОД/ФТ/Фрому', data: 'Возможность преднамеренного или непреднамеренного вовлечения Субъектов в процессы легализации ОД/ФТ/ФРОМУ или иную преступную деятельность.', tabName: 'Риск-ориентированный подход'},
                            {header: 'Управлениея рисками ОД/ФТ/Фрому', data: 'Совокупность принимаемых Субъектами мер по мониторингу, выявлению рисков легализации ОД/ФТ/ФРОМУ, а также их минимизации (в отношении услуг, клиентов)\n', tabName: 'Риск-ориентированный подход'},
                            {header: 'Национальная оценка рисков', data: 'Отчет, проводимый в целях определения угроз и возможностей ОД/ФТ, а также выявления недостатков реализации мер по ПОД/ФТ.', tabName: 'Риск-ориентированный подход'},
                        ]}
                        headerTextColor={'#170F49'}
                        activeHeaderTextColor={'#1F3C88'}
                        textColor={'#6F6C90'}
                        tabsTextColor={'#3A3939'}
                        tabsBackgroundColor={'#BAD6FF'}
                    />
                </Reveal>
                <Sizebox height={50}/>
                <Reveal>
                    <VideoWithTitleAndText
                        url={'https://videos.sproutvideo.com/embed/7990d0b51d1ae4c1f0/6e43cdd74851d083?playerColor=1f71a1'}
                        title={'Более подробнее об основных понятиях вы можете ознакомиться в представленном ниже видео'}
                        text={`В сфере ПОД/ФТ большое количество различных понятий и значений, однако в данном видео вы можете ознакомиться с понятиями и их функциональностью, которые часто встречаются при осуществлении СФМ финансового мониторинга.
`}/>
                </Reveal>
                <Sizebox height={50}/>
                <Reveal>
                    <HeaderWithLine headerColor={'#1F3C88'} lineColor={'#CADEFC'}>
                        <>
                            Нажмите на <span className="bold">ссылку</span> ниже, чтобы перейти к
                            Закону «О противодействии легализации (отмыванию) доходов,
                            полученных преступным путем, и финансированию терроризма»
                        </>
                    </HeaderWithLine>
                </Reveal>
                <Sizebox height={50}/>

                <Reveal>
                    <TextAndLink
                        text={'Закон «О противодействии легализации (отмыванию) доходов, полученных преступным путем, и финансированию терроризма»'}
                        link={'https://adilet.zan.kz/rus/docs/Z090000191_'}
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
                            { text: 'Кураторство  - за каждым видом СФМ закреплен куратор (сотрудник АФМ РК), осуществляющий оперативное взаимодействие и координацию (ссылка).'},
                            { text: 'Call-центр  - центр обработки обращений и консультаций для СФМ (колл-центр АФМ РК «14-58»);\n'},
                            { text: 'Совет-комплаенс  - дискуссионная площадка для обсуждения вопросов качества информационного обмена между участниками национальной антиотмывочной системы'},
                            { text: 'Оценка  - подразумевает систему риск-ориентированного подхода определения уровня риска среди участников найиональной антиотмывочной системы (СФМ, БВУ, ГО).\n'},
                            { text: 'Единый портал  - выделенный канал связи по информационному обмену (Перечни, списки, ФМ-1, обратная связь, оценка и др.)'},
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
                            <>
                                <h4>Национальные акты</h4>
                                <ul>
                                    <li>Законы</li>
                                    <li>Кодексы</li>
                                    <li>Подзаконные акты</li>
                                    <li>Рекомендации</li>
                                    <li>Инструкции</li>
                                    <li>Отчеты</li>
                                    <li>Стратегические анализы</li>
                                    <li>др.</li>
                                </ul>
                            </>, 
                            <>
                                <h4>Международные акты</h4>
                                <ul>
                                    <li>Конвенции</li>
                                    <li>Резолюция</li>
                                    <li>Договора</li>
                                    <li>Стандарты</li>
                                    <li>Инструкции</li>
                                    <li>Отчеты</li>
                                    <li>Стратегические анализы</li>
                                    <li>др.</li>
                                </ul>
                            </>, 
                            <>
                                <ul>
                                    <li>Закон о ПОД/ФТ</li>
                                    <li>КоАП</li>
                                    <li>Приказ АФМ</li>
                                    <li>НОР, СОР</li>
                                    <li>др.</li>
                                </ul>
                            </>, 
                            <>
                            <ul>
                                <li>Конвенция ООН о борьбе противозаконного оборота наркотических средств и психотропных веществ (1938 г.)</li>
                                <li>Конвенция ООН против транснациональной организованной преступности (2000 г.)</li>
                                <li>Конвенция ООН против коррупции (2003 г.)</li>
                                <li>Конвенция Совета Европы об отмывании, выявлении, изъятии и конфискации доходов от преступной деятельности (1990 г.)</li>
                                <li>Конвенция ООН о борьбе с финансированием терроризма (1999 г.)</li>
                                <li>Резолюции СБ ООН 1267, 1269, 1373, 1390, 1452, 1455, 1526, 1566 и т.д.</li>
                                <li>Шанхайская конвенция о борьбе с терроризмом, сепаратизмом и экстремизмом (2001 г.)</li>
                                <li>Договор о сотрудничестве государств-участников СНГ о борьбе с терроризмом (1999 г.)</li>
                                <li>Конвенция Совета Европы об отмывании, выявлении, изъятии, конфискации доходов от преступной деятельности и о финансировнии терроризма (2005 г.)</li>
                                <li>Международные стандарты в сфере ПОД/ФТ/ФРОМУ (2012 г.) и Методологии оценки технического соответсвтия Рекомендациям ФАТФ и эффективности систем ПОД/ФТ (2013 г.)</li>
                                <li>Инструкции принципы и методологии международных организаций, комитетов, ассоциаций участвующих в деятельности ПОД/ФТ</li>
ы                            </ul>
                        </>
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
                    <RandomParapraph>
                        Схема заключалась в <span className="bold">помещении денежных средств</span> с большим наличным оборотом, в прачечные (стиральные машины с автоматами) принимавшие монеты в виде оплаты. 
                    </RandomParapraph>
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
                    <StageDropDown />
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
                            'УК РК - ст. 193': 'совершение финансовых операций и других сделок с денежными средствами или иным имуществом, приобретенным заведомо незаконным путем, а равно использование указанных средств и иного имущества для осуществления предпринимательской или иной экономической деятельности',
                            'УК РК - ст. 218': 'вовлечение в законный оборот денег и (или) иного имущества, полученных преступным путем, посредством совершения сделок в виде конверсии или перевода имущества, представляющего доходы от уголовных правонарушений, в т.ч. любые доходы от имущества, полученного преступным путем, либо владение и использование, сокрытие или утаивание, места нахожденияЮ способа распоряжения, перемещения, прав, посредничество в ОД',
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
                            'Профессиональное': 'когда специалисты в области финансов, действующие как структурированная группа, специализируются на предоставлении консультаций или услуг по отмывыанию денег',
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
                    <InteractivePhases />
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
                    <Component52 />
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
            return (<LessonPage name={'Схемы отмывания денег'} lecturer={'AML Academy'}>
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

                <Sizebox height={50} />

                <Reveal>
                    <Report_Warning>
                        Более подробнее о требованиях и мерах СФМ вы ознакомитесь в следующих модулях.
                    </Report_Warning>
                </Reveal>

                <Sizebox height={50} />

                <Reveal>
                    <Centered>
                        <RandomParapraph>
                            <>
                            СФМ являются <span className="bold">важным элементом</span> 
                            национальной антиотмывочной системы, осуществляя роль 
                            «<span className="bold">первой линии защиты</span>» 
                            при реализации схем ОД/ФТ.
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

                <Reveal>
                    <DragAndDropTwoSide 
                        questions={[
                            {answer: 'Значительное увеличение стоимости объекта, которое не объясняется текущей ситуацией на рынке недвижимости', side: 'В схеме выявлен признак'},
                            {answer: 'Совершение операций (сделки) лицом, включенным в перечень организаций и лиц, связанных с финансированием терроризма и экстремизма', side: 'В схеме не выявлен признак'},
                            {answer: 'Явное несоответствие договорной и рыночной стоимости предмета сделки', side: 'В схеме выявлен признак'},
                            {answer: 'Предоставление финансового займа нерезиденту на срок свыше семисот двадцати дней без выплаты вознаграждения', side: 'В схеме не выявлен признак'},
                        ]}
                        leftAnswer={'В схеме выявлен признак'}
                        rightAnswer={'В схеме не выявлен признак'}
                    />
                </Reveal>

                <Sizebox height={100} />
                <Reveal>
                    <HeaderWithLine headerColor={'#1F3C88'} lineColor={'#CADEFC'}>
                        <>
                        Далее разберем иные схемы ОД, 
                        а также совершение предикатных преступлений 
                        (в рамках которого предполагается получение незаконного дохода), 
                        для изучения 
                        посмотрите видео ниже.
                        </>
                    </HeaderWithLine>
                </Reveal>

                <Sizebox height={100} />
                <Reveal>
                    <VideoWithTitleAndText 
                        url={null}
                        title={'Мошенничество'}
                        text={<>Данное предикатное преступление является одним из наиболее распространенных в Республике Казахстан. Схемы и способы их реализации имеют множество разновидностей. 
                            В данном видео-уроке мы рассмотрели лишь один пример из выявленных в ходе тесного взаимодействия между участниками системы ПОД/ФТ.</>}
                    />
                </Reveal>
                <Sizebox height={50} />
                <Reveal>
                    <TextWithTitle 
                        title={'Описание схемы:'}
                        text={[
                            'Гражданином «А» реализована квартира через площадку объявлений по продаже недвижимости. Однако, на следующий день поступает звонок от неизвестных лиц с использованием подменного номера, представляясь сотрудниками банка.',
                            <><span className="italic">
                                В процессе разговора мошенники сообщают о полученных преступных денежных средствах от продажи недвижимости, дополняя участием правоохранительных органов и об изъятии данного дохода.    
                            </span></>,
                            'В результате реализации мошеннических схем, гражданина «А» убеждают в размещении денежных средств на специальном банковском счете для их сохранности, представляя реквизиты на физического лица.',
                            'Поверив мошенникам, гражданин «А» отправляет на 5 разных счетов полученные средства от продажи недвижимости на общую сумму 45 млн. тенге. После чего, номера телефонов мошенников «не доступен».',
                            'Получив средства на банковский счет, мошенниками обналичиваются (в течении 20 минут после пополнения) в нескольких городах одновременно. ',
                        ]}
                    />
                </Reveal>

                <Sizebox height={50} />
                <Reveal>
                    <Report_Warning>
                    Преступниками в рамках легализации денежных средств приобретаются несколько автомашин и криптовалюты.
                    </Report_Warning>
                </Reveal>
                <Sizebox height={100} />

                <Reveal>
                    <Centered>
                        <RandomParapraph>
                            В рамках финансового мониторинга совместно с СФМ (БВУ) удалось идентифицировать преступную группу, за счет принятых мер надлежащей проверки клиента.
                        </RandomParapraph>
                    </Centered>
                </Reveal>

                <Sizebox height={50} />
                <Reveal>
                    <Report_Warning>
                    В результате, задержаны соучастники и организаторы преступной группы, в отношении которых возбуждено уголовные дела по мошенничеству и легализации доходов. 
                    </Report_Warning>
                </Reveal>
                <Sizebox height={100} />

                <Reveal>
                    <HeaderWithLine headerColor={'#1F3C88'} lineColor={'#CADEFC'}>
                        <>
                        <span className="bold">Для закрепления</span> информации по выявлению схемы ОД от интернет-мошенничества,
пожалуйста, расставьте карточки с <span className="bold">признаками подозрительной операции</span> 
                        (по соответствующим полям), определенных в данной схеме.
                        </>
                    </HeaderWithLine>
                </Reveal>

                <Sizebox height={100} />

                <DragAndDropTwoSide 
                    questions={[
                        {answer: 'Поступление на счет клиента крупной суммы денег и последующее обналичивание полученных средств, при этом получатель имел незначительные обороты по операциям', side: 'В схеме выявлен признак'},
                        {answer: 'Совершение клиентом систематических операций на крупную сумму с неликвидными ценными бумагами', side: 'В схеме не выявлен признак'},
                        {answer: 'Явное несоответствие договорной и рыночной стоимости предмета сделки', side: 'В схеме не выявлен признак'},
                        {answer: 'Зачисление на счет клиента и списание со счета примерно в одном и том же объеме денег', side: 'В схеме выявлен признак'},
                    ]}
                    leftAnswer={'В схеме выявлен признак'}
                    rightAnswer={'В схеме не выявлен признак'}
                />

                <Sizebox height={100} />
                <Reveal>
                    <HeaderWithLine headerColor={'#1F3C88'} lineColor={'#CADEFC'}>
                        <>
                        Рассмотрим следующую схему, связанная с незаконной предпринимательской деятельностью
                        </>
                    </HeaderWithLine>
                </Reveal>

                <Sizebox height={100} />
                <Reveal>
                    <VideoWithTitleAndText 
                        url={null}
                        title={'Схема незаконной предпринимательской деятельности'}
                        text={<>В рамках ст. 214 УК РК предусмотрена ответственность 
                        за осуществление предпринимательской деятельности 
                        <span className="bold">без регистрации</span>, 
                        а равно <span className="bold">без обязательной</span> 
                        для такой деятельности <span className="bold">лицензии</span> 
                        либо с нарушением 
                        законодательства Республики Казахстан о разрешениях 
                        и уведомлениях, а равно занятие запрещенными видами 
                        предпринимательской деятельности, если эти деяния 
                        причинили крупный ущерб гражданину, организации или 
                        государству либо сопряжены с извлечением дохода в 
                        крупном размере или производством, хранением, перевозкой 
                        либо сбытом подакцизных товаров в значительных размерах.</>}
                    />
                </Reveal>
                <Sizebox height={50} />
                <Reveal>
                    <TextWithTitle 
                        title={'Описание подхода:'}
                        text={[
                            <>В ходе финансового мониторинга проводимый <span className="bold">на основании сообщения СФМ</span>, установлена компания, в отношении которой переводились суммы <span className="bold">за реализацию дизельного топлива.</span></>,
                        ]}
                    />
                </Reveal>
                <Sizebox height={80} />
            
                <Reveal>
                    <>
                    <RandomH2>Критерии подозрительных операций выявленные СФМ</RandomH2>
                    <Sizebox height={20} />
                    <RandomParapraph>
                        Проведенным анализом деятельности юридического лица, СФМ выявлены подозрительные факты, а именно:
                    </RandomParapraph>
                    <Sizebox height={20} />
                    <NumberedDots
                        dotsColor={'#CADEFC'}
                        list={[
                            'оборот не отражен в налоговой отчетности;',
                            'не является производителем нефтепродуктов;',
                            'не имеет лицензию на розничную/оптовую реализацию нефтепродуктов;',
                            'не осуществлял экспорт/импорт нефтепродуктов.'
                        ]}
                    />
                    <Sizebox height={20} />
                    <RandomParapraph>
                        В результате финансового мониторинга, СФМ представлена информация о подозрительной деятельности его клиента.
                    </RandomParapraph>
                    </>
                </Reveal>

                <Sizebox height={50} />
                <Reveal>
                    <Report_Warning>
                    Этому поспособствовала правильно выстроенная система управления рисками, на основе которой были применены усиленные меры надлежащей проверки, с последующим направлением СПО в АФМ.
                    </Report_Warning>
                </Reveal>
                <Sizebox height={100} />

                <Reveal>
                    <HeaderWithLine headerColor={'#1F3C88'} lineColor={'#CADEFC'}>
                        Для отмывания преступных доходов используются различные приемы и способы, многие из которых основаны на самых современных технологиях.
                    </HeaderWithLine>
                </Reveal>

                <Sizebox height={50} />
                <Reveal>
                    <>
                    <RandomH2>Приемы и способы ОД/ФТ</RandomH2>
                    <Sizebox height={20} />
                    <RandomParapraph>
                        Большой выбор приемов и способов обеспечивает преступникам высокую скорость перемещения практически любых сумм денежных средств на значительные расстояния. Обобщение этих приемов и способов позволяет выделить определенные группы:
                    </RandomParapraph>
                    <Sizebox height={20} />
                    <NumberedDots
                        dotsColor={'#CADEFC'}
                        list={[
                            'банковские операции с денежными средствами;',
                            'операции с цифровыми финансовыми активами (криптовалюта, токен);',
                            'операции в электронных платежных системах;',
                            'валютно-обменные операции;',
                            'сделки с векселями и иными ценными бумагами;',
                            'получение денежных средств по фиктивным выигрышам в играх, в том числе виртуальных, основанных на риске;',
                            'осуществление безналичных денежных переводов без открытия счета (например: Золотая Корона, ANELIK, BLIZKO, СONTACT, FASTER,  Migom, MoneyGram, UNIStream, (Лидер) Western Union, «Быстрая почта» и другие);',
                            'сделки с недвижимым и движимым имуществом (дорогостоящие автомобили, меха, драгоценные металлы, драгоценные камни и изделия из них);',
                            'умышленное занижение в документах реальной стоимости приобретаемого и завышение стоимости отчуждаемого имущества или имущественных прав лицом, отмывающим незаконный доход;',
                            'приобретение и отчуждение имущественных прав с использованием номинального (фиктивного) собственника, в том числе, перечисление наличных средств на счета подставных лиц с дроблением денежных сумм;',
                            'смешивание на счетах юридических лиц потоков легально и нелегально полученных денежных средств;',
                            'контрабанда наличных денег в национальной и иностранной валютах через границы Казахстана;',
                            'заключение фиктивных арендных договоров, контрактов на поставку несуществующих товаров и оказание услуг информационно-справочного характера и другие;',
                            'иные инструменты.',
                        ]}
                    />
                    <Sizebox height={20} />
                    <RandomParapraph>
                        В результате финансового мониторинга, СФМ представлена информация о подозрительной деятельности его клиента.
                    </RandomParapraph>
                    </>
                </Reveal>
                
                <Sizebox height={100} />
                <Reveal>
                    <HeaderWithLine headerColor={'#1F3C88'} lineColor={'#CADEFC'}>
                        Вы изучили практические схемы легализации денег, предикатных преступлений, а также роль СФМ в национальной антиотмывочной системе.
                    </HeaderWithLine>
                </Reveal>

                <Sizebox height={100} />
                <Reveal>
                    <HeaderWithLine headerColor={'#1F3C88'} lineColor={'#CADEFC'}>
                        Нажмите на <span className="bold">ссылку</span> ниже, чтобы перейти к <span className="bold">Личному кабинету СФМ</span>, для более детального изучения платформы <span className="italic">(полный доступ предоставляется только после прохождения регистрации)</span>. 
                    </HeaderWithLine>
                </Reveal>
                <Sizebox height={40} />
                <Reveal>
                    <TextAndLink 
                        text={'Личный кабинет СФМ'}
                        link={'https://websfm.kz/'}
                    />
                </Reveal>


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
                <Reveal>
                    <ImageWithText
                        img={image65}
                        color={'#FFFFFF'}
                        imageText={'История, терроризм, финансирование терроризма'}
                    />   
                </Reveal>

                <Sizebox height={50} />

                <Reveal>
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
                </Reveal>

                <Sizebox height={80} />

                {/* <Centered>
                    <RandomParapraph >
                        <>
                            <span className="bold"></span>
                        </>
                    </RandomParapraph>
                </Centered> */}

                <Reveal>
                    <TextWithTitle
                        title={'1994 год - принята Декларация о мерах ликвидации международного терроризма.'}
                        text={[
                            'В соответствии с данным документам, всем странам было рекомендовано принять эффективные и решительные меры, по ликвидации терроризма, в частности, воздерживаться от организации террористической деятельности, подстрекательстве, содействия ее осуществления, финансирования, поощрения или проявления терпимости к ней и принимать надлежащие практические меры к обеспечению того, чтобы их территории не использовались для создания террористических баз или учебных лагерей или для подготовки или организации террористических актов, направленных против других государств или граждан. '
                        ]}
                    />
                </Reveal>

                <Sizebox height={80} />

                <Reveal>
                    <TextWithTitle
                        title={'1999 год - в г. Нью-Йорк принята Международная конвенция о борьбе с финансированием терроризма.'}
                        text={[
                            'В рамках данного документа впервые были предприняты попытки раскрыть понятие преступления финансирования терроризма.',
                            'Согласно данному документу, любое лицо совершает преступление, если оно любым способом и методом, прямо или косвенно, незаконно или умышленно, представляет средства или осуществляет их сбор с намерением, чтобы они использовались, или при осознании того, что они будут использованы полностью или частично для совершения какого-либо деяния, представляющего собой «террористическую деятельность».'
                        ]}
                    />
                </Reveal>

                <Sizebox height={40} />

                <Reveal>
                    <Report_Warning>
                    Более того, даже сама попытка финансирования терроризма рассматривается как преступление.
                    </Report_Warning>
                </Reveal> 

                <Sizebox height={80} />

                <Reveal>
                    <TextWithTitle
                        title={'2012 год - пересмотры 40+9 рекомендации ФАТФ.'}
                        text={[
                            'В результате пересмотра 40+9 рекомендации ФАТФ, финансирование терроризма также нашло свое отражение в данном документе, которое также было расшито в 2015 году и 2016 году, в части дополнения требований по криминализации деяний и уточнения состава преступления.'
                        ]}
                    />
                </Reveal>

                <Sizebox height={80} />

                <Reveal>
                    <>
                    <RandomParapraph>
                        <>
                        ФАТФ выделил следующие 
                        <span className="bold">источники доходов </span> 
                        субъектов террористической деятельности:
                        </>
                    </RandomParapraph>
                    <Sizebox height={20} />
                    <NumberedDots 
                        dotsColor={'#CADEFC'}
                        list={[
                            'Частные пожертвования;',
                            'Незаконное использование некоммерческих организаций;',
                            'Доход от преступной деятельности;',
                            'Вымогательство от местного населения, диаспор, предпринимателей;',
                            'Похищения в целях получения выкупа;',
                            'Законная предпринимательская деятельность;',
                            'Государственная поддержка терроризма.',
                        ]}
                    />
                    </>
                </Reveal>

                <Sizebox height={40} />

                <Reveal>
                    <Report_Warning>
                    Финансирование терроризма тесно связано с отмыванием денег для сокрытия истинного источника происхождения средств вне зависимости от того, является ли происхождение данных средств законными или нет.
                    </Report_Warning>
                </Reveal> 

                <Sizebox height={100} />

                <Reveal>
                    <ImageWithText 
                        img={image58}
                        imageText={'Уголовная ответственность, ответственность, суд'}
                        color={'#FFFFFF'}
                    />
                </Reveal>
                <Sizebox height={80} />

                <Reveal >
                    <RandomH2>
                        Ответственность за ФТ
                    </RandomH2>
                    <Sizebox height={20} />
                    <RandomParapraph>
                        Наряду с преступлением отмывания преступных доходов, в статье 258 Уголовного кодекса Республики Казахстан содержит определение понятия «финансирование террористической или экстремистской деятельности и иное пособничество терроризму либо экстремизму» - предоставление или сбор денег и (или) иного имущества, права на имущество или выгод имущественного характера, а также дарение, мена, пожертвования, благотворительная помощь, оказание информационных и иного рода услуг либо оказание финансовых услуг физическому лицу либо группе лиц, либо юридическому лицу, совершенные лицом, заведомо осознававшим террористический или экстремистский характер их деятельности либо то, что предоставленное имущество, оказанные информационные, финансовые и иного рода услуги будут использованы для осуществления террористической или экстремистской деятельности либо обеспечения террористической или экстремистской группы, террористической или экстремистской организации, незаконного военизированного формирования.
                    </RandomParapraph>
                </Reveal>

                <Sizebox height={80} />

                <Reveal>
                    <NumberedDots 
                        header={<><span className="bold">Уголовным кодексом</span> предусматриваются следующие виды наказаний за ФТ:</>}
                        dotsColor={'#CADEFC'}
                        list={[
                            'наказываются лишением свободы на срок от пяти до девяти лет с конфискацией имущества',
                            'наказываются лишением свободы на срок от семи до двенадцати лет с конфискацией имущества, в случаях, если деяния, совершенные неоднократно или лицом с использованием своего служебного положения либо лицом, выполняющим управленческие функции в коммерческой или иной организации, либо лидером общественного объединения, либо группой лиц по предварительному сговору, либо в крупном размере.'
                        ]}
                    />
                </Reveal>

                <Sizebox height={80} />

                <Reveal>
                    <RandomParapraph>
                        Современный терроризм – сложное, многоаспектное и крайне негативное социально-политическое явление, превратившееся в масштабную угрозу для безопасности всего мирового сообщества. 
                    </RandomParapraph>
                </Reveal>

                <Sizebox height={40} />

                <Reveal>
                    <Report_Warning>
                        Степень опасности угроз террористических актов обусловливается уровнем совершенствования форм, методов, сил и средств террористической деятельности. 
                    </Report_Warning>
                </Reveal>

                <Sizebox height={80} />

                <Reveal>
                    <NotNumberedDots 
                        header={<>Основные тенденции развития современного терроризма:</>}
                        dotsColor={'#CADEFC'}
                        list={[
                            'Расширение географии терроризма в мире и его интернационализация;',
                            'Влияние различных внутренних и внешних социальных, политических, экономических и иных факторов, способствующих возникновению и распространению терроризма;',
                            'Усиление взаимосвязи терроризма и организованной преступности;',
                            'Рост финансового и материально-технического обеспечения террористических структур;',
                            'Разработка и совершенствование новых форм и методов терроризма, направленных на расширение масштабов последствий террористических акций;',
                            'Использование субъектами терроризма международных некоммерческих организаций.',
                        ]}
                    />
                </Reveal>

                <Sizebox height={80} />

                <Reveal>
                    <RandomParapraph>
                        Несмотря на то, что мировое сообщество значительно продвинулись в борьбе с терроризмом, на сегодняшний день в стране, так и в мире по-прежнему сохраняются риски оказания финансовой поддержки террористической деятельности. 
                    </RandomParapraph>
                </Reveal>

                <Sizebox height={40} />

                <Reveal>
                    <Report_Warning>
                        За каждым террористическим актом стоит логистическая цепочка, которая может включать множество различных элементов, начиная от вербовки, сбора денежных средств и заканчивая предоставлением материалов.
                    </Report_Warning>
                </Reveal>

                <Sizebox height={100} />
                <Reveal>
                    <HeaderWithLine headerColor={'#1F3C88'} lineColor={'#CADEFC'}>
                        <>
                        Далее более подробнее рассмотрим пример ФТ
                        </>
                    </HeaderWithLine>
                </Reveal>

                <Sizebox height={100} />

                <Reveal>
                    <ImageWithText 
                        img={image58}
                        imageText={'Социальная сеть, некоммерческие организации, сбор средств'}
                        color={'#FFFFFF'}
                    />
                </Reveal>
                <Sizebox height={40} />
                <Reveal>
                    <>
                    <HeaderWithLine headerColor={'#1F3C88'} lineColor={'#CADEFC'}>
                        <>
                        Схемы ФТ
                        </>
                    </HeaderWithLine>
                    <Sizebox height={40} />
                    <VideoWithTitleAndText 
                        url={null}
                        title={'Пример сбора денежных средств путем краудфандинга'}
                        text={[
                            'Идею краудфандинга подхватили разные террористические организации, которые под видом НКО собирают денежные средства на «помощь бедствующим» по всему миру, где идут военные конфликты, а также на социальные необходимые проекты. Но на самом деле, денежные средства идут на вооружение, на пропаганду, вербовку и т.д.',
                            'Согласно данным правоохранительного органа выявлены факты перечисление денежных средств гражданами Республики Казахстан в пользу НКО.'
                        ]}
                    />
                    </>
                </Reveal>
                
                <Sizebox height={80} />

                <Reveal>
                    <TextWithTitle 
                        title={'Описание схемы:'}
                        text={[
                            'В рамках благотворительного фонда в социальных сетях открывается соответствующая группа и в нем создаются тематические проекты, направленные на оказание гуманитарной помощи в Сирию и Африку (выкопать колодцы, построить мечети, построить центры для сирот, построить исламские школы и оказать гуманитарную помощь).',
                            <><span className="italic">В обеих странах присутствует террористическая группировка, а также место боевых столкновении.</span></>,
                            'Основателем фонда является гражданин Российской Федерации, находящийся в международном розыске, радикальный проповедник, имеющий широкую популярность в Интернете.',
                            'Модератором на территории Казахстана являлась гражданка Республики Казахстан, которая использовала для рекламы различные мессенджеры и социальные сети в так называемых благотворительных целях. Схема сбора денежных средств выглядит следующим образом.',
                            'Фонд максимально интересуется пожертвованиями в денежном виде, в то время как к прямой гуманитарной помощи относится безразлично, что в принципе идет в разрез с идеей функционирования благотворительного фонда. В настоящее время основатель фонда объявлен в международный розыск за причастность к терроризму и финансированию МТО.'
                        ]}
                    />
                </Reveal>

                <Sizebox height={100} />
                <Reveal>
                    <HeaderWithLine headerColor={'#1F3C88'} lineColor={'#CADEFC'}>
                        <>
                        Краудфандинг представляет собой значительную угрозу, поскольку не всегда понятно конечные целевое использование аккумулированных средств.
                        </>
                    </HeaderWithLine>
                </Reveal>

                <Sizebox height={40} />

                <Reveal>
                    <Report_Warning>
                        Данный пример является подтверждением одного из видов источника финансирования терроризма, более того предусмотрено масса примеров в типологиях утвержденные уполномоченным органом.
                    </Report_Warning>
                </Reveal>

                <Sizebox height={100} />

                <Reveal>
                    <HeaderWithLine headerColor={'#1F3C88'} lineColor={'#CADEFC'}>
                        <>
                        Вы завершили 9 урок данного Модуля. <br/>
                        Теперь мы перейдем к короткому тесту, 
                        чтобы проверить ваши знания по освоенному материалу.
                        </>
                    </HeaderWithLine>
                </Reveal>

                {/* <Sizebox height={50} />

                <Reveal>
                    <VideoWithTitleAndText
                        url={'https://videos.sproutvideo.com/embed/7990d0b51d1ae4c1f0/6e43cdd74851d083?playerColor=1f71a1'}
                        title={'Более подробнее об основных понятиях вы можете ознакомиться в представленном ниже видео'}
                        text={`В сфере ПОД/ФТ большое количество различных понятий и значений, однако в данном видео вы можете ознакомиться с понятиями и их функциональностью, которые часто встречаются при осуществлении СФМ финансового мониторинга.
`}/>
                </Reveal> */}

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
                <Sizebox height={30}/>
                <Reveal>
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
                </Reveal>
                <Sizebox height={50}/>

                <Reveal>
                    <Report_Warning>
                        Большая Семерка (G7) неформальный международный клуб, объединяющий Великобританию, Германию, Италию, Канаду, Францию, Японию и США.

                    </Report_Warning>
                </Reveal>
                <Sizebox height={50}/>

                <Reveal>
                    <RandomParapraph>
                        <>
                        ФАТФ является основным международным институтом, занимающимся <span className="bold">разработкой</span> и <span className="bold">внедрением</span> международных стандартов в сфере ПОД/ФТ. В настоящее время <span className="bold">членами ФАТФ</span> являются 37 стран и 2 международные организации,<span className="bold"> наблюдателями</span> – 25 организаций и 1 государство (Индонезия).
                        </>
                    </RandomParapraph>    
                </Reveal>                    
                <Sizebox height={15}/>

                <Reveal>
                    <RandomParapraph>
                        <>
                            Основным <span class="bold">инструментом</span> ФАТФ <span class="bold">в реализации</span> своего <span class="bold">мандата</span> являются <span class="bold">40 рекомендаций</span> в сфере ПОД/ФТ/ФРОМУ, которые подвергаются <span class="bold">ревизии</span> в среднем <span class="bold">один раз</span> в пять лет.

                        </>
                    </RandomParapraph>
                </Reveal>
                <Sizebox height={100}/>

                <Reveal>
                    <>
                    <HeaderWithLine headerColor={'#1F3C88'} lineColor={'#CADEFC'}>
                        ФАТФ уделяет значительное внимание сотрудничеству с такими международными организациями, как МВФ, Всемирный банк, Управление ООН по наркотикам и преступности.
                    </HeaderWithLine>
                    </>
                </Reveal>

                <Sizebox height={100}/>
                <Reveal>
                    <HeaderWithLine headerColor={'#1F3C88'} lineColor={'#CADEFC'}>
                        Основным <span className="bold">инструментом принятия решений</span> 
                        ФАТФ является <span className="bold">Пленарное заседание</span>, 
                        которое собирается три раза в год, а также рабочие группы ФАТФ по:
                    </HeaderWithLine>
                    <Sizebox height={40}/>
                    <TODO text={'SWOT'}/>
                </Reveal>
                    
                <Sizebox height={100} />
                <Reveal>
                    <HeaderWithLine headerColor={'#1F3C88'} lineColor={'#CADEFC'}>
                        ФАТФ уделяет значительное внимание 
                        сотрудничеству с такими международными 
                        организациями, как МВФ, Всемирный банк, 
                        Управление ООН по наркотикам и преступности.
                    </HeaderWithLine>
                </Reveal>

                <Sizebox height={50}/>
                <Reveal>
                    <Report_Warning>
                        <>
                        <p>Данные структуры реализуют свои программы, нацеленные на противодействие отмыванию денег и финансированию терроризма. Одним из основных инструментов реализации рекомендаций ФАТФ на национальном уровне являются <span className="bold">Подразделения финансовой разведки (ПФР)</span>, отвечающие за сбор и анализ финансовой информации в пределах каждой конкретной страны с целью выявления потоков финансовых средств, добытых незаконным путём.</p>
                        <p>Документы ФАТФ, в особенности 40 Рекомендаций, представляют собой всеобъемлющий свод организационно-правовых мер по созданию в каждой стране эффективного режима ПОД/ФТ.</p>
                        <p>Рекомендации ФАТФ не дублируют и не подменяют соответствующие положения иных международных актов, а при необходимости, дополняя их, сводят в единую систему организационных принципов и правовых норм, играя при этом важную роль в процессе кодификации норм и правил в сфере ПОД/ФТ.</p>
                        </>
                    </Report_Warning>
                </Reveal>

                <Sizebox height={50}/>
                <Reveal>
                    <Report_Information>
                        <>
                        <p>
                            В соответствии с Резолюцией СБ ООН № 1617 (2005), 
                            40 <span className="bold">Рекомендаций ФАТФ</span> являются 
                            обязательными международными стандартами <span className="bold">для выполнения 
                            государствами – членами <span className="red">ООН+</span>.</span>
                        </p>
                        <p className='italic'>
                            международная организация, 
                            созданная для поддержания и укрепления международного мира и 
                            безопасности, а также развития сотрудничества между государствами
                        </p>
                        </>
                    </Report_Information>
                </Reveal>
                <Sizebox height={50} />

                <Reveal>
                    <ImageWithText
                        img={image60}
                        color={'white'}
                    >
                        <>
                            <h3>
                                ООН была образована 24 октября 1945 года. С 2011 года членами ООН являются 193 страны, в том числе и <span className="bold">Казахстан со 2 марта 1992 года</span>, наряду с такими странами как Азербайджан, Армения, Киргизия, Таджикистан, Туркмения и Узбекистан.
                            </h3>
                        </>
                    </ImageWithText>
                </Reveal>    

                <Sizebox height={100} />
                <Reveal>
                    <HeaderWithLine headerColor={'#1F3C88'} lineColor={'#CADEFC'}>
                        <>
                        Перейдем к следующему блоку обучения
                        </>
                    </HeaderWithLine>
                </Reveal>
                <Sizebox height={50} />
                <NextLesson handleOnClick={() => {
                    CheckCurrentChapter(id);
                }}/>
            </LessonPage>)
        case 10:
            return (<LessonPage name={'Региональные группы по типу ФАТФ'} lecturer={'AML Academy'}>
                <Sizebox height={30}/>
                <Reveal>
                    <HeaderWithLine headerColor={'#1F3C88'} lineColor={'#CADEFC'}>
                        <>
                            Для глобального распространения Рекомендаций ФАТФ <span class="bold">созданы</span> девять <span class="bold">региональных групп</span> по типу ФАТФ (РГТФ).
                        </>
                    </HeaderWithLine>
                </Reveal>
                <Sizebox height={40}/>

                <Reveal>
                    <Report_Warning>
                        <span class="bold">Основная задача</span> РГТФ – построение систем ПОД/ФТ/ФРОМУ в соответствующих регионах.
                    </Report_Warning>
                </Reveal>
                <Sizebox height={50}/>

                <Reveal>
                    <TextWithTitle title={"РГТФ проводят оценки систем ПОД/ФТ государств-членов и вырабатывают рекомендации по их совершенствованию."}
                        text={[
                            <>Региональные группы также занимаются <span className="bold">исследованием типологий0</span> – наиболее распространенных схем ОД/ФТ/ФРОМУ. По итогам типологических исследований лучшие практики распространяются среди частного сектора, надзорных и регулирующих органов, правоохранительных структур и научно-экспертного сообщества</>,
                            "Некоторые РГТФ координируют с донорами оказание технического содействия своим государствам-членам.",
                            "В состав РГТФ входят:"
                        ]}
                    />
                </Reveal>

                <Sizebox height={40} />
                <Reveal>
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
                </Reveal>

                <Sizebox height={100} />
                <Reveal>
                    <HeaderWithLine headerColor={'#1F3C88'} lineColor={'#CADEFC'}>
                        <>
                        Перейдем к следующему блоку обучения
                        </>
                    </HeaderWithLine>
                </Reveal>
                <Sizebox height={50} />
                <NextLesson handleOnClick={() => {
                    CheckCurrentChapter(id);
                }}/>

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
                </Reveal>
                <Sizebox height={30}/>
                <Reveal>
                    <TextWithTitle 
                        title={"Рекомендации ФАТФ устанавливают комплексную и последовательную структуру мер, которые странам следует применять для ПОД/ФТ/ФРОМУ."}
                        text={[
                            <>Страны имеют различные правовые, административные и оперативные структуры и различные финансовые системы, в связи с чем они не могут принимать идентичные меры по противодействию этим угрозам. Поэтому <span className="bold">странам следует адаптировать</span> к своим конкретным условиям <span className="bold">Рекомендации ФАТФ.</span></>,
                            <><span className="bold">Рекомендации устанавливают</span> необходимые <span className="bold">меры</span>, которые странам следует иметь для того, чтобы:</>
                        ]}
                    />
                </Reveal>
                <Sizebox height={40} />
                <Reveal>
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
                </Reveal>

                <Sizebox height={50} />

                <Reveal>

                    <FileDownloader 
                        file={null}
                        fileName={'Рекомендации ФАТФ (для скачивания)'}
                    />

                </Reveal>

                <Sizebox height={100} />


                <Reveal>
                    <Report_Warning>
                        <>
                        Рекомендации ФАТФ были <span className="bold">имплементированы</span> в нормативных правовых актах Республики Казахстан
                        </>
                    </Report_Warning>
                </Reveal>
                <Sizebox height={100} />
                
                <Reveal>
                    <>
                    <Centered>
                        <RandomH2>Рекомендации ФАТФ</RandomH2>
                    </Centered>
                    <Sizebox height={20} />
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
                    </>
                </Reveal>
                
                <Sizebox height={100} />

                <Reveal>
                    <>
                    <TextWithTitle 
                        title={"Рекомендации ФАТФ подразделяются на основные группы"}
                    />
                    <Sizebox height={20} />
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
                    </>
                </Reveal>
                
                <Sizebox height={100} />
                <Reveal>
                    <HeaderWithLine headerColor={'#1F3C88'} lineColor={'#CADEFC'}>
                        <>
                            <span class="bold">Для оценки</span> соответствия стран Рекомендациям <span class="bold">ФАТФ предусмотрел Методологию</span> оценки технического соответствия Рекомендациям ФАТФ и эффективности системы ПОД/ФТ.

                        </>
                    </HeaderWithLine>
                </Reveal>
                <Sizebox height={100} />

                <Reveal>
                    <DataChain 
                        data={[
                            { title: 'Техническое соответствие', description: 'Предусматривает выполнение конкретных требований Рекомендаций ФАТФ, включая систему законов и обязательных для исполнения мер; а также наличие, полномочия и процедуры компетентных органов.' },
                            { title: 'Эффективность ', description: 'Результативность принятых законов и других нормативных правовых актов, которые демонстрируют эффективность этих принятых нормативных документов.' },
                        ]}
                    />
                </Reveal>

                <Sizebox height={100} />
                <Reveal>
                    <Report_Warning>
                        По каждой Рекомендации эксперты должны вынести заключение о степени соответствия (или несоответствия) страны стандарту.
                    </Report_Warning>
                </Reveal>
                <Sizebox height={50} />

                <Reveal>
                    <>
                    <Centered>
                        <RandomH2>Существует четыре возможных уровня соответствия:</RandomH2>
                    </Centered>
                    <Sizebox height={20} />
                    <DropdownGlossaryList 
                        headerTextColor={'#170F49'}
                        activeHeaderTextColor={'#1F3C88'}
                        textColor={'#6F6C90'}
                        tabsTextColor={'#3A3939'}
                        tabsBackgroundColor={'#BAD6FF'}
                        list={[
                            {
                                title: 'СООТВЕТСТВИЕ',
                                description: <>в случае <span className="bold">отсутствия недостатков</span></>
                            },
                            {
                                title: 'ЗНАЧИТЕЛЬНОЕ СООТВЕТСТВИЕ',
                                description: <>при наличии <span className="bold">незначительных недостатков</span></>
                            },
                            {
                                title: 'ЧАСТИЧНОЕ СООТВЕТСТВИЕ',
                                description: <>при наличии <span className="bold">умеренных недостатков</span></>
                            },
                            {
                                title: 'НЕ СООТВЕТСТВИЕ',
                                description: <>при наличии <span className="bold">серьезных недостатков</span></>
                            },
                            {
                                title: 'НЕ ПРИМЕНИМО',
                                description: <>требование <span className="bold">не применимо</span> из-за структурных, правовых или институциональных особенностей страны</>
                            },
                        ]} 
                    />
                    </>
                </Reveal>
                
                <Sizebox height={100} />

                <Reveal>
                    <HeaderWithLine headerColor={'#1F3C88'} lineColor={'#CADEFC'}>
                        <>
                            <p><span class="bold">Рекомендации ФАТФ</span> оцениваются в виде <span class="bold">непосредственных результатов</span> – свод Рекомендаций, объединенные в «группировки» по тематике оцениваемого участка, для более глубоко анализа и оценки.</p>
                            <p>Таким образом, 40 Рекомендаций ФАТФ объединены в 11 НРов.</p>
                            <p>При этом, Рекомендации, входящие в состав одного НР может быть и в составе других.</p>
                        </>
                    </HeaderWithLine>
                </Reveal>
                <Sizebox height={80} />

                <Reveal>
                    <SimpleTable 
                        data={[
                            ['НР1\n Р.1, Р.2, Р.33, Р.34', 'Оценка рисков, координация и определение политики'],
                            ['НР2\n Р.36–40', 'Международное сотрудничество'],
                            ['НР3\n Р.26–28, 34, 35', 'Надзор'],
                            ['НР4\n Р.9–23', 'Превентивные меры'],
                            ['НР5\n Р.24, 25', 'Прозрачность и бенефициарная собственность'],
                            ['НР6, НР7, НР8\n Р. 1, 3, 4, 29–32', 'Финансовая разведка, расследования ОД, судебные преследования и конфискация'],
                            ['НР9, НР10, НР11\n Р. 1, 4, 5–8, 30, 31, 39', 'ФТ и ФРОМУ'],
                        ]}
                        columns={[
                            'НР и Рекомендации входящие в состав',
                            'Оцениваемая область',
                        ]}
                    />
                </Reveal>

                <Sizebox height={100} />

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
                        CheckCurrentChapter(id);
                    }}/>
                </Reveal>

            </LessonPage>)
        case 12:
            return (<LessonPage name={'Непосредственный результат 4 «Превентивные меры»'} lecturer={'AML Academy'}>
                    <Sizebox height={60}/>

                    <Reveal>
                        <TextWithTitle
                            title={'Для соответствия НР4 субъектам необходимо должным образом применять превентивные меры в сфере ПОД/ФТ, в соответствии с их рисками и сообщать об СПО.\n'}
                        />
                    </Reveal>
                    <Sizebox height={20} />
                    <Reveal>
                        <TextWithTitle 
                            text={["Субъектам также необходимо:"]}
                        />
                    </Reveal>
                    <Sizebox height={40} />
                    <Reveal>
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
                            CheckCurrentChapter(id);
                        }}/>
                    </Reveal>

            </LessonPage>)
        case 13:
            return (<LessonPage name={'Отчет о Взаимной оценке'} lecturer={'AML Academy'}>
                <Sizebox height={30}/>
                
                <Reveal>
                    <ImageLine
                        img={image62}
                    >
                    </ImageLine>
                </Reveal>
                <Sizebox height={60}/>

                <Reveal>
                    <TextWithTitle 
                        title={"Взаимные оценки проводятся РГТФ в рамках которых национальные системы ПОД/ФТ государств-участников проверяются на соответствие международным стандартам"}
                        text={[
                            <><span className="bold">Под взаимностью</span> подразумевается, что представители всех государств-членов РГТФ оценивают другие государства-члены по очереди в соответствии с графиком оценок.</>,
                            "Взаимные оценки проводят МВФ, Всемирный банк и ФАТФ."
                        ]}
                    />
                </Reveal>

                <Sizebox height={80}/>
                <Reveal>
                    <Report_Warning>
                        <>
                        График взаимных оценок ЕАГ размещается на официальном интернет ресурсе ЕАГ 
                        <a href="https://eurasiangroup.org/ru/general-information">https://eurasiangroup.org/ru/general-information</a>
                        </>
                    </Report_Warning>
                </Reveal>
                <Sizebox height={80} />

                <Reveal>
                    <RandomParapraph>
                        В рамках взаимной оценки <span className="bold">эксперты-оценщики</span> 
                        проводят работу по документарному <span className="bold">анализу 
                        технического соответствия</span> (ТС), используя 
                        необходимые данные и сведения (справочную информацию 
                        об институциональной базе, рисках и контексте, а также 
                        информацию о мерах, принятых для выполнения критериев 
                        по каждой Рекомендации); предоставленные оцениваемой 
                        страной и полученные из других надёжных источников 
                        (например, отчёты других международных организаций). 
                        Для предоставления соответствующей и актуальной 
                        информации группе экспертов-оценщиков оцениваемая 
                        страна должна использовать стандартную форму 
                        анкеты-вопросника по вопросам технического соответствия.
                    </RandomParapraph>
                </Reveal>
                <Sizebox height={15} />
                <Reveal>
                    <RandomParapraph>
                        Вся эта процедура повторяется периодичностью <span className="bold">раз в три года</span>.
                    </RandomParapraph>
                </Reveal>
                <Sizebox height={15} />
                <Reveal>
                    <RandomParapraph>
                        В соответствии с требованиями Методологии ФАТФ при 
                        проведении анализа эксперты-оценщики должны учитывать 
                        только те законы, нормативные акты или другие меры 
                        ПОД/ФТ, которые <span className="bold">действуют на момент проведения выездной 
                        миссии, или которые вступят в силу до окончания выездной 
                        миссии</span>. Если имеются соответствующие законопроекты или 
                        иные чёткие предложения по изменению системы ПОД/ФТ, 
                        они должны быть указаны в отчёте о взаимной оценке 
                        (в том числе в целях проведения анализа и выработки 
                        рекомендаций для оцениваемой страны), но <span className="bold">не должны 
                        учитываться при определении рейтингов</span>, если только 
                        они не вступят в силу до окончания выездной миссии.
                    </RandomParapraph>
                </Reveal>
                <Sizebox height={15} />
                <Reveal>
                    <RandomParapraph>
                        Страны также должны предоставить информацию, 
                        касающуюся эффективности. Они должны предоставить 
                        подробные сведения о том, какие меры приняты для 
                        решения каждого ключевого вопроса по каждому из 11 
                        НР. Для стран важно предоставить полное и точное 
                        описание (включая примеры информации, данных и 
                        других факторов), которое поможет продемонстрировать 
                        эффективность режима ПОД/ФТ. 
                    </RandomParapraph>
                </Reveal>
                <Sizebox height={15} />
                <Reveal>
                    <RandomParapraph>
                        Стоит отметить, при координации Комитета по финансовому 
                        мониторингу Министерства финансов Республики Казахстан 
                        система ПОД/ФТ успешно прошла <span className="bold">первую взаимную оценку 
                        ЕАГ</span> (2011 год).
                    </RandomParapraph>
                </Reveal>
                <Sizebox height={15} />
                <Reveal>
                    <RandomParapraph>
                        Реализация основополагающих норм резолюций Совбеза ООН и стандартов ФАТФ в части деятельности подразделения финансовой разведки, полномочий и обязанностей правоохранительных органов, международного сотрудничества и оказания взаимной правовой помощи и экстрадиции, а также вопросов обеспечения мер конфискации позволила Казахстану получить рейтинги «значительно соответствует» и «частично соответствует» по 24 из 40 рекомендаций ФАТФ.
                    </RandomParapraph>
                </Reveal>
                <Sizebox height={15} />

                <Sizebox height={80} />
                <Reveal>
                    <TextWithTitle 
                        title={"По итогам взаимной оценки к Казахстану применена процедура «стандартный мониторинг» – механизм мониторинга, применяемый для всех государств-членов ЕАГ, не имеющих существенных недостатков в техническом соответствии рекомендациям ФАТФ и системы ПОД/ФТ."}
                        text={[
                            "Выработанные экспертами ЕАГ рекомендации по итогам взаимной оценки легли в основу мер по совершенствованию национальной системы ПОД/ФТ.",
                            "В целях выработки мер по реализации государственной политики в сфере ПОД/ФТ, повышения их эффективности, а также координации мер, направленных на снижение рисков легализации (отмывания) доходов и финансирования терроризма, создан Межведомственный совет по вопросам предупреждения легализации (отмывания) доходов, полученных преступным путем, и финансирования терроризма.",
                            "В национальное законодательство о ПОД/ФТ внесены концептуальные поправки:"
                        ]}
                    />
                </Reveal>

                <Sizebox height={40} />
                <Reveal>
                    <NotNumberedDots
                        dotsColor={'#CADEFC'}
                        list={[
                            <><span className="bold">определен государственный орган-регулятор для четырех видов субъектов финансового мониторинга</span> (риелторы, юристы, лизинга, бухгалтерские организации и профессиональные бухгалтеры);</>,
                            'усилена ответственность всех субъектов финансового мониторинга за несоблюдение требований Закона о ПОД/ФТ;',
                            'определен государственный орган, ответственный за учет и использование конфискованного имущества, и образование фонда такого имущества;',
                            'усилено международное сотрудничество в части обмена информацией в сфере ПОД/ФТ между органами финансового контроля и правоохранительными органами с иностранными компетентными органами;',
                            <span className="bold">операции публичных должностных лиц стали подлежать финансовому мониторингу;</span>,
                        ]}
                    />
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

                <NextLesson handleOnClick={() => {
                    CheckCurrentChapter(id);
                }}/>
            </LessonPage>)
        case 14:
            return (<LessonPage name={'Национальная оценка рисков'} lecturer={'AML Academy'}>
                <Sizebox height={30}/>
                <Reveal>
                    <HeaderWithLine headerColor={'#1F3C88'} lineColor={'#CADEFC'}>
                    <>
                        <span class="bold">АФМ</span> является координатором процесса проведения Национальной оценки рисков и подготовки Республики Казахстан к взаимной оценке.
                    </>
                    </HeaderWithLine>
                </Reveal>
                <Sizebox height={30}/>

                <Reveal>
                    <RandomParapraph>
                    <>
                        В целях выработки мер по реализации государственной 
                        политики в сфере ПОД/ФТ/ФРОМУ, повышения их эффективности, 
                        а также координации мер, направленных на снижение рисков 
                        ОД/ФТ, образован <span class="bold red">МВС+</span> 
                        <span className="italic">(Межведомственный совет)</span> по вопросам предупреждения 
                        ПОД/ФТ/ФРОМУ.
                        {/* В целях выработки мер по реализации государственной политики в сфере ПОД/ФТ/ФРОМУ, повышения их эффективности, а также координации мер, направленных на снижение рисков ОД/ФТ, образован <span class="bold red">МВС+</span> (Межведомственный совет) по вопросам предупреждения ПОД/ФТ/ФРОМУ. */}
                    </>
                    </RandomParapraph>
                </Reveal>
                <Sizebox height={30}/>

                <Reveal>
                    <RandomParapraph>
                    <>
                        Работа в рамках проведения оценки координируется 
                        МВС в сфере ПОД/ФТ, а также специально созданной 
                        <span class="bold red"> рабочей группой+ </span> 
                        <span className="italic">(в состав рабочей группы входят представители всех 
                        государственных, правоохранительных и специальных 
                        государственных органов)</span> по оценке рисков и взаимной оценке.
                    </>
                    </RandomParapraph>
                </Reveal>
                <Sizebox height={30}/>

                <Reveal>
                    <RandomParapraph>
                    <>
                        МВС рассматривает и одобряет отчет об оценке рисков, 
                        а <span class="bold">Правительство</span> 
                        Республики Казахстан <span class="bold">утверждает меры</span>, 
                        направленные на снижение рисков ОД/ФТ.
                    </>
                    </RandomParapraph>
                </Reveal>
                <Sizebox height={30}/>
                <Reveal>
                    <RandomParapraph>
                    <>
                        <span class="bold">АФМ направляет</span> 
                        соответствующим государственным органам отчет по 
                        оценке рисков, а также <span class="bold">размещает 
                        на своем интернет-ресурсе</span> информацию из отчета.
                    </>
                    </RandomParapraph>
                </Reveal>
                <Sizebox height={30}/>

                <Reveal>
                    <RandomParapraph>
                    <>
                        СФМ должны учитывать опубликованную информацию из отчета 
                        оценки рисков ОД/ФТ при реализации программ, включенных 
                        правил внутреннего контроля.
                    </>
                    </RandomParapraph>
                </Reveal>
                <Sizebox height={30}/>

                <Reveal>
                    <Report_Warning>
                        <span className="italic">
                            Первая национальная оценка рисков ОД/ФТ 
                            была проведена в стране в 2018 г. и носила 
                            закрытый характер. С 2018 года сфера ПОД/ФТ в 
                            Республике Казахстан претерпела существенные 
                            изменения. В 2021 г. Республика Казахстан 
                            провела две национальные оценки рисков ОД 
                            и ФТ/ФРОМУ, отчеты по которым носят закрытый 
                            характер, но имеют публичные версии. По итогам 
                            страной были пересмотрены результаты предыдущей 
                            оценки и проведены некоторые реформы, направленные 
                            на минимизацию выявленных рисков в сфере ПОД/ФТ и 
                            повышение эффективности работы финансовой разведки, 
                            надзорных и правоохранительных органов.
                        </span>
                    </Report_Warning>
                </Reveal>
                <Sizebox height={40} />

                <Sizebox height={40} />
                <Reveal>
                    <NumberedDots
                        header={'Таким образом, основными предикатными преступлениями, предшествующими легализации денег и имущества, являются:'}
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
                </Reveal>

                <Sizebox height={80} />
          
                <Reveal>
                    <NotNumberedDots
                        header={'Для оценки рисков ПОД/ФТ наряду с угрозами установлены следующие уязвимости национальной антиотмывочной системы:'}
                        dotsColor={'#CADEFC'}
                        list={[
                            'оборот наличных денег;',
                            'использование номинальных юридических лиц (фирм-однодневок) для применения схем ОД;',
                            'переводы за границу денежных средств, полученных преступным путем;',
                            'несовершенство системы управления рисками государственных органов и финансового сектора;',
                            'недостаточная разъяснительная работа с субъектами финансового мониторинга (по законодательству в сфере ПОД/ФТ, имеющимся рискам и угрозам отмывания преступных доходов);',
                        ]}
                    />
                </Reveal>
                <Sizebox height={40} />
                <Reveal>
                    <Report_Warning>
                        Учитывая системность проведения национальной оценки, участники антиотмывочной системы подвергаются проведению соответствующих работ раз в три года.

                    </Report_Warning>
                </Reveal>
                <Sizebox height={40} />
                <Reveal>
                    <TextWithTitle title={"В целях установления уязвимостей национальной антиотмывочной системы в сфере ОД и их категорирования определены соответствующие критерии риска:"}
                    />
                </Reveal>

                <Sizebox height={40} />
                <Reveal>
                    <NotNumberedDots
                        dotsColor={'#CADEFC'}
                        list={[
                            'общая ситуация в финансовом и нефинансовом секторах и объем совершаемых операций;',
                            'информация об исполнении СФМ законодательства в сфере ПОД/ФТ;',
                            'наличие информационных систем и IT-инструментов для применения мер надлежащей проверки;',
                            'виды оказываемых услуг, продуктов, операций с учетом специфики деятельности СФМ;',
                        ]}
                    />
                </Reveal>
                <Sizebox height={40} />
                <Reveal>
                    <TextWithTitle title={"По итогам НОР определены группы рисков ОД в разрезе услуг:"}
                                    text={["1) Группа с высоким риском:"]}/>
                </Reveal>

                <Sizebox height={40} />
                <Reveal>
                    <NotNumberedDots
                        dotsColor={'#CADEFC'}
                        list={[
                            'услуги БВУ и организаций, осуществляющих отдельные виды банковских операций;',
                            'услуги организаторов игорного бизнеса и лотерей;',
                            'услуги микрофинансовых организаций;',
                        ]}
                    />
                </Reveal>
                <Sizebox height={40} />
                <Reveal>
                    <TextWithTitle
                        text={["2) Группа со средним риском:"]}/>
                </Reveal>

                <Sizebox height={40} />
                <Reveal>
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
                </Reveal>
                <Sizebox height={40} />
                <Reveal>
                    <TextWithBackground
                        header={'НОР ФТ'}
                        text={'Целью НОР ФТ является определение наиболее рискованных методов и инструментов, применяемых террористами либо террористическими группами в Республике Казахстан с целью привлечения, перемещения или использования средств на преступные цели. В задачи НОР ФТ равным образом входит исследование существующих угроз, уязвимых мест в НС ПФТ и возникающих при этом рисков ФТ, понимание происходящих в данной системе процессов, а также определение потенциальных инициатив для ее развития.'}
                    />
                </Reveal>
                <NextLesson handleOnClick={() => {
                    CheckCurrentChapter(id);
                }}/>
            </LessonPage>)
        case 15:
            return (<LessonPage name={'Списки ФАТФ'} lecturer={'AML Academy'}>
                <Sizebox height={30}/>
                <Reveal>
                    <ImageLine
                        img={image63}
                        color={'black'}
                    >
                    </ImageLine>
                </Reveal>
                <Sizebox height={30}/>

                <Reveal>
                    <TextWithTitle 
                        title={"Взаимные оценки проводятся РГТФ в рамках которых национальные системы ПОД/ФТ государств-участников проверяются на соответствие международным стандартам"}
                        text={[
                            "Под взаимностью подразумевается, что представители всех государств-членов РГТФ оценивают другие государства-члены по очереди в соответствии с графиком оценок.",
                            "Взаимные оценки проводят МВФ, Всемирный банк и ФАТФ."
                        ]}
                    />
                </Reveal>

                <Sizebox height={20} />
                <Reveal>
                    <Report_Warning>
                        График взаимных оценок ЕАГ размещается на официальном интернет ресурсе ЕАГ https://eurasiangroup.org/ru/general-information
                    </Report_Warning>
                </Reveal>

                <Sizebox height={40} />
                <Reveal>
                    <TextWithTitle 
                        title={"По итогам взаимной оценки к Казахстану применена процедура «стандартный мониторинг» – механизм мониторинга, применяемый для всех государств-членов ЕАГ, не имеющих существенных недостатков в техническом соответствии рекомендациям ФАТФ и системы ПОД/ФТ."}
                        text={[
                            "Выработанные экспертами ЕАГ рекомендации по итогам взаимной оценки легли в основу мер по совершенствованию национальной системы ПОД/ФТ.", 
                            "В целях выработки мер по реализации государственной политики в сфере ПОД/ФТ, повышения их эффективности, а также координации мер, направленных на снижение рисков легализации (отмывания) доходов и финансирования терроризма, создан Межведомственный совет по вопросам предупреждения легализации (отмывания) доходов, полученных преступным путем, и финансирования терроризма.",
                            "В национальное законодательство о ПОД/ФТ внесены концептуальные поправки:"
                        ]}
                    />
                </Reveal>
                <Sizebox height={40} />
                <Reveal>
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
                </Reveal>
                <Sizebox height={40} />

                <Reveal>
                    <NextLesson handleOnClick={() => {
                        CheckCurrentChapter(id);
                    }}/>
                </Reveal>
            </LessonPage>)
        case 16:
            return (<LessonPage name={'ЕАГ'} lecturer={'AML Academy'}>
                <Sizebox height={30}/>
                <Reveal>
                    <ImageWithText
                        img={image58}
                        imageText={'Расслоение'}
                        color={'#FFFFFF'}
                    />
                </Reveal>
                <Sizebox height={30}/>
                <Reveal>
                    <TextWithTitle 
                        title={"Взаимные оценки проводятся РГТФ в рамках которых национальные системы ПОД/ФТ государств-участников проверяются на соответствие международным стандартам"}
                        text={[
                            "Под взаимностью подразумевается, что представители всех государств-членов РГТФ оценивают другие государства-члены по очереди в соответствии с графиком оценок.",
                            "Взаимные оценки проводят МВФ, Всемирный банк и ФАТФ."
                        ]}
                    />
                </Reveal>

                <Sizebox height={20} />
                <Reveal>
                    <Report_Warning>
                        График взаимных оценок ЕАГ размещается на официальном интернет ресурсе ЕАГ https://eurasiangroup.org/ru/general-information
                    </Report_Warning>
                </Reveal>
                <Sizebox height={40} />

                <Reveal>
                    <TextWithTitle 
                        title={"По итогам взаимной оценки к Казахстану применена процедура «стандартный мониторинг» – механизм мониторинга, применяемый для всех государств-членов ЕАГ, не имеющих существенных недостатков в техническом соответствии рекомендациям ФАТФ и системы ПОД/ФТ."}
                        text={[
                            "Выработанные экспертами ЕАГ рекомендации по итогам взаимной оценки легли в основу мер по совершенствованию национальной системы ПОД/ФТ.",
                            "В целях выработки мер по реализации государственной политики в сфере ПОД/ФТ, повышения их эффективности, а также координации мер, направленных на снижение рисков легализации (отмывания) доходов и финансирования терроризма, создан Межведомственный совет по вопросам предупреждения легализации (отмывания) доходов, полученных преступным путем, и финансирования терроризма.",
                            "В национальное законодательство о ПОД/ФТ внесены концептуальные поправки:"
                        ]}
                    />
                </Reveal>

                <Sizebox height={40} />
                <Reveal>
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
                </Reveal>
                <Sizebox height={40} />

                <Reveal>
                    <NextLesson handleOnClick={() => {
                        CheckCurrentChapter(id);
                    }}/>
                </Reveal>
            </LessonPage>)
        case 17:
            return (<LessonPage name={'Законодательство'} lecturer={'AML Academy'}>
                <Reveal>
                    <ImageLine
                        img={image67}
                        color={'black'}
                    >
                    </ImageLine>
                </Reveal>

                <Sizebox height={30}/>
                <Reveal>
                    <HeaderWithLine 
                        header={'Главным событием в формировании национальной системы ПОД/ФТ Казахстана является принятие в 2009 году Закона Республик и Казахстан «О противодействии легализации (отмыванию) доходов, полученных незаконным путем, и финансированию терроризма».'}
                    />
                </Reveal>
                <Sizebox height={40} />

                <Reveal>
                    <NotNumberedDots
                        header={"Закон определяет:"}
                        dotsColor={'#CADEFC'}
                        list={[
                            <><span className="bold">правовые основы противодействия</span> легализации (отмыванию) доходов, полученных преступным путем, и финансированию терроризма;</>,
                            <><span className="bold">правовые отношения субъектов финансового мониторинга</span>, уполномоченного органа и других государственных органов Республики Казахстан в сфере ПОД/ФТ.</>,
                        ]}
                    />
                </Reveal>
                <Sizebox height={40}/>
                <Reveal>
                    <ImageLine
                        img={'https://c4.wallpaperflare.com/wallpaper/126/50/379/dark-blood-money-wallpaper-preview.jpg'}
                        color={'black'}
                    >
                    </ImageLine>
                </Reveal>
                <Sizebox height={100}/>
                <Reveal>
                    <HeaderWithLine headerColor={'#1F3C88'} lineColor={'#CADEFC'}>
                        <>
                            ОД/ФТ признаны мировым обществом глобальными проблемами, носящими транснациональный характер, способный подорвать существование государственного строя.                        </>
                    </HeaderWithLine>
                </Reveal>
                <Sizebox height={80} />
                <Reveal>
                    <VideoLine url={'https://videos.sproutvideo.com/embed/7990d0b51d1ae4c1f0/6e43cdd74851d083?playerColor=1f71a1'} />
                </Reveal>
                <Sizebox height={150} />

                <Reveal>
                    <NotNumberedDots
                        header={'Государственная политика Казахстана в сфере развития национальной системы ПОД/ФТ основывается на применении основных принципов:'}
                        dotsColor={'#CADEFC'}
                        list={[
                            'обеспечение единой государственной политики в сфере ПОД/ФТ;',
                            'эффективное координирование участников системы ПОД/ФТ;',
                            'последовательное и неуклонное развитие и повышение эффективности национальной «антиотмывочной» системы ПОД/ФТ;',
                            'использование положений международных договоров, стандартов и рекомендаций международных организаций в сфере ПОД/ФТ с учетом соответствия национальным интересам и правовой системе Казахстана;',
                        ]}
                    />
                </Reveal>
                
                <Sizebox height={40} />
                <Reveal>
                    <Report_Warning>
                        Подразделение финансовой разведки занимает уникальное положение в системе ПОД/ФТ, находясь на стыке деятельности финансовых институтов, а также правоохранительных и уполномоченных органов, тем самым создав и внедрив эффективную национальную «антиотмывочную» систему.
                    </Report_Warning>
                </Reveal>

                <Sizebox height={100}/>
                <Reveal>
                    <HeaderWithLine headerColor={'#1F3C88'} lineColor={'#CADEFC'}>
                        <>
                            Основные этапы функционирования системы ПОД/ФТ Республики Казахстан представлены на рисунке 1.
                        </>
                    </HeaderWithLine>
                </Reveal>
                <Sizebox height={40} />

                <Reveal>
                    <RandomH2 
                        text={'Участники системы ПОД/ФТ'}
                    />
                </Reveal>
                <Sizebox height={40} />
                <Reveal>
                    <ImageWithPoints 
                        imageUrl={image3m1}
                        points={[
                            { id: 0, x: 720, y: 380, name: 'ГО регуляторы (государтсвенные органы-регуляторы)' },
                            { id: 1, x: 720, y: 640, name: 'БВУ'  },
                            { id: 2, x: 720, y: 800, name: 'ФУ (финансовые учреждения)'  },
                            { id: 3, x: 720, y: 960, name: 'УНФПП (установленные нефинансовые предприятия и профессии)'  },
                            { id: 4, x: 720, y: 1220, name: 'Общественные организации'  },
                            { id: 5, x: 1604, y: 500, name: 'Общественные организации'  },
                            { id: 6, x: 1604, y: 928, name: 'Общественные организации'  },
                        ]}
                        list={[
                            ['Агентство по регулированию и развитию финансового рынка РК', 'Национальный Банк РК', 'Агентство РК по финансовому мониторингу', 'Министерство финансов РК', 'Министерство юстиции РК', 'Министерство туризма и спорта РК', 'Агентство по защите и развитию конкуренции РК', 'Министерство здравоохранения РК', 'Министерство цифрового развития, инноваций и аэрокосмической промышленности РК', 'Комитет по регулированию финансовых услуг МФЦА'],
                            [''],
                            ['БВУ-Банки второго уровня', 'Обменные пункты', 'Организации, осуществляющие отдельные виды банковских операций', 'Фондовые биржи', 'Страховые организации и страховые брокеры, общества взаимного страхования', 'Профессиональные участники рынка ценных бумаг, центральный депозитарий', 'Операторы почты, оказывающие услуги по переводу денег', 'Организации, осуществляющие отдельные виды банковских операций', 'Платежные организации'],
                            ['Нотариусы, осуществляющие нотариальные действия с деньгами и (или) иным имуществом', 'Адвокаты и юридические консультанты (в установленных Законом о ПОД/ФТ случаях)', 'Независимые специалисты по юридическим вопросам (в установленных Законом о ПОД/ФТ случаях)', 'Товарные биржи', 'Бухгалтерские организации', 'Профессиональные бухгалтеры, осуществляющие предпринимательскую деятельность в сфере бухгалтерского учета', 'Аудиторские организации', 'Организации игорного бизнеса и лотерей', 'ИП и ЮЛ, осуществляющие лизинговую деятельность в качестве лизингодателя без лицензии', 'ИП и ЮЛ, осуществляющие операции с драгоценными металлами и драгоценными камнями, ювелирными изделиями из них', 'ИП и ЮЛ, оказывающие посреднические услуги при осуществлении сделок купли-продажи недвижимого имущества', 'Лица, осуществляющие деятельность по выпуску цифровых активов, организации торгов ими, а также предоставлению услуг по обмену цифровых активов на деньги, ценности и иное имущество'],
                            ['Объединения юридических лиц', 'Региональные палаты', 'Некоммерческие организации', 'Ассоциации', 'Иные организации'],
                            ['Органы внутренних дел', 'Органы национальной безопасности', 'Уполномоченный орган по противодействию коррупции', 'Специальные государственные органы'],
                            ['Организация Объединенных Наций', 'Евразийская группа по противодействию легализации преступных доходов и финансированию терроризма', 'Комитет экспертов по оценке мер по борьбе с отмыванием денег и финансированием терроризма', 'Иные организации']
                        ]}
                    />
                </Reveal>

                {/* <Sizebox height={40} />
                <GroupList /> */}
                <Sizebox height={80} />

                <Reveal>
                    <TextWithTitle text={[
                        'Некоторые авторы книг в сфере ПОД/ФТ выделяют три уровня финансового мониторинга: внутренний мониторинг, надзор и внешний мониторинг.',
                        <>Таким образом, под финансовым мониторингом понимается совокупность отношений, которые возникают между <span className="bold">субъектами финансового мониторинга, подразделением финансовой разведки и органами надзора и контроля</span> с целью предотвращения использования финансовой системы государства для отмывания криминальных денег и финансирования терроризма.</>
                    ]} />
                </Reveal>
                
                <Sizebox height={100} />

                <Reveal>
                    <HeaderWithLine 
                        header={<>Теперь, когда Вы понимаете, 
                            что в рамках противодействия отмывания доходов, финансирования терроризма и оружия массового уничтожения необходимо 
                            <span className="bold"> взаимодействие всех участников антиотмывочной системы</span>, 
                             мы можем перейти к изучению 
                            <span className="bold"> роли субъектов финансового мониторинга</span> </>}
                    />
                </Reveal>

                <Sizebox height={80} />

                <Reveal>
                    <NextLesson handleOnClick={() => {
                        CheckCurrentChapter(id);
                    }}/>
                </Reveal>

            </LessonPage>)
        case 18:
            return (<LessonPage name={'Субъекты финансового мониторинга'} lecturer={'AML Academy'}>
                <Sizebox height={30}/>
                
                <Reveal>
                    <HeaderWithLine headerColor={'#1F3C88'} lineColor={'#CADEFC'}>
                        <>
                            Как известно, <span class="bold">основным поставщиком информации</span> по операциям, подлежащим финансовому мониторингу в АФМ являются <span class="bold">субъекты финансового мониторинга.</span>
                        </>  
                    </HeaderWithLine>
                </Reveal>

                <Sizebox height={40} />

                <Reveal>
                    <TextWithTitle 
                        text={<>Благодаря налаженной процедуре внутреннего контроля субъекты своевременно и оперативно направляют соответствующую <span className="bold">информацию по финансовым операциям своих клиентов</span>, что в последующем служит, в том числе и основанием для привлечения к ответственности за совершенные преступные деяния и воспрепятствованию выводу средств за пределы Республики Казахстан. </>}
                    />
                </Reveal>
                <Sizebox height={40} />

                <Reveal>
                    <ImageWithText
                        img={image69}
                        imageText={'Важно отметить, что государственные органы Республики Казахстан не являются субъектами финансового мониторинга.'}
                        color={'#FFFFFF'}
                    />
                </Reveal>
                <Sizebox height={40} />

                <Reveal>
                    <Report_Warning>
                        Таким образом, национальным законодательством о ПОД/ФТ определены субъекты финансового мониторинга.
                    </Report_Warning>
                </Reveal>
                <Sizebox height={40}/>
                <Reveal>
                    <TabsGlossary
                        tabs={[
                            'Финансовый сектор',
                            'Нефинансовый сектор',
                            'Субъекты осуществляющие деятельность на площадке МФЦА.',
                        ]}
                        tabsGlossary={{
                            'Финансовый сектор': <NotNumberedDots dotsColor={'black'} list={[
                                'банки, филиалы банков – нерезидентов Республики Казахстан, организации, осуществляющие отдельные виды банковских операций, за исключением оператора или операционного центра межбанковской системы переводов денег, а также юридических лиц, исключительной деятельностью которых является инкассация банкнот, монет и ценностей;',
                                'биржи (фондовые);',
                                'страховые (перестраховочные) организации, страховые брокеры, общества взаимного страхования, филиалы страховых (перестраховочных) организаций – нерезидентов Республики Казахстан, филиалы страховых брокеров – нерезидентов Республики Казахстан;',
                                'единый накопительный пенсионный фонд и добровольные накопительные пенсионные фонды;',
                                'профессиональные участники рынка ценных бумаг, центральный депозитарий;',
                                'операторы почты, оказывающие услуги по переводу денег;',
                                'организации, осуществляющие микрофинансовую деятельность;',
                                'платежные организации.',
                            ]}/>,
                            'Нефинансовый сектор': <NotNumberedDots dotsColor={'black'} list={[
                                'биржи (товарные);',
                                'нотариусы, осуществляющие нотариальные действия с деньгами и (или) иным имуществом;',
                                <>
                                    <RandomParapraph>адвокаты, юридические консультанты и другие независимые специалисты по юридическим вопросам – в случаях, когда они от имени или по поручению клиента участвуют в операциях с деньгами и (или) иным имуществом в отношении следующей деятельности:</RandomParapraph>
                                    <Sizebox height={20} />
                                    <NotNumberedDots dotsColor={'black'} list={[
                                        'купли-продажи недвижимости;',
                                        'управления деньгами, ценными бумагами или иным имуществом клиента;',
                                        'управления банковскими счетами или счетами ценных бумаг;',
                                        'аккумулирования средств для создания, обеспечения, функционирования или управления компанией;',
                                        'создания, купли-продажи, функционирования юридического лица или управления им;',
                                    ]}/>
                                </>,
                                'бухгалтерские организации и профессиональные бухгалтеры, осуществляющие предпринимательскую деятельность в сфере бухгалтерского учета, аудиторские организации;',
                                'организаторы игорного бизнеса и лотерей;',
                                'индивидуальные предприниматели и юридические лица, осуществляющие лизинговую деятельность в качестве лизингодателя без лицензии;',
                                'индивидуальные предприниматели и юридические лица, осуществляющие операции с драгоценными металлами и драгоценными камнями, ювелирными изделиями из них;',
                                'индивидуальные предприниматели и юридические лица, оказывающие посреднические услуги при осуществлении сделок купли-продажи недвижимого имущества;',
                                'фонд социального медицинского страхования;',
                                'лица, осуществляющие деятельность по выпуску цифровых активов, организации торгов ими, а также предоставлению услуг по обмену цифровых активов на деньги, ценности и иное имущество.',
                            ]}/>,
                            'Субъекты осуществляющие деятельность на площадке МФЦА.': 'Участники Международного финансового центра «Астана», осуществляющие на территории Международного финансового центра «Астана» (далее – МФЦА) отдельные виды деятельности, определяемые Комитетом МФЦА по регулированию финансовых услуг по согласованию с уполномоченным органом в соответствии с ФАТФ.'
                        }}
                        color={'#3A3939'}
                        tabsBackgroundColor={'#BAD6FF'}
                    />
                </Reveal>
                <Sizebox height={100} />

                <Reveal>
                    <HeaderWithLine headerColor={'#1F3C88'} lineColor={'#CADEFC'}>
                        <>
                        <span className="bold">При этом к ряду субъектов не финансового сектора</span> распространяются требования Закона Республики Казахстан «О разрешениях и уведомлениях» в части направления в АФМ <span className="bold">уведомления о начале или прекращении деятельности</span>. 
                        </>
                    </HeaderWithLine>
                </Reveal>

                <Sizebox height={80} />

                <Reveal>
                    <NotNumberedDots
                        header={'К таким субъектам относятся:'}
                        dotsColor={'#CADEFC'}
                        list={[
                            'юрконсультанты и другие независимые специалисты по юридическим вопросам;',
                            'лизингодатели без лицензии;',
                            'лица и организации, реализующие драгоценные металлы и драгоценные камни;',
                            'риелторы, оказывающие посреднические услуги по купле-продаже недвижимости;',
                        ]}
                    />
                </Reveal>

                <Sizebox height={150} />
                <Reveal>
                <HeaderWithLine headerColor={'#1F3C88'} lineColor={'#CADEFC'}>
                    <>
                        Для подачи уведомления о начале деятельности вышеуказанные субъекты используют Портал Электронного правительства <a
                        href="https://egov.kz/">https://egov.kz/</a>, перед подачей Уведомления необходимо авторизоваться на сайте (рис.1), после этого необходимо найти вкладку в левой стороне на нижней части страницы (<span class="bold">электронное лицензирование</span>), далее будет осуществлен переход на сайт <a
                        href=" https://elicense.kz/">https://elicense.kz/</a> лицензирования Республики Казахстан  (рис. 2)
                    </>  </HeaderWithLine>
                </Reveal>

                <Sizebox height={150} />
                    
                <Reveal>
                    <CustomCarousel data={[
                        {
                            header: [],
                            image: carousel_11,
                            imageText: 'Рисунок 1'
                        },
                        {
                            header: [],
                            image: carousel_12,
                            imageText: 'Рисунок 2'
                        },
                        {
                            header: ['Для завершения процедуры необходимо: 1. Выбрать категорию «Финансы»;'],
                            image: carousel_13,
                        },
                        {
                            header: [
                                '2. Кликнуть на подкатегорию «Уведомительный порядок»;', 
                                '3. Выбирать «Уведомление о начале или прекращении деятельности лица, являющегося субъектом финансового мониторинга в соответствии с Законом Республики Казахстан «О противодействии легализации (отмыванию) доходов, полученных преступным путем, и финансированию терроризма»);'
                            ],
                            image: carousel_14,
                        },
                        {
                            header: [
                                '4. Заказать услугу онлайн;', 
                            ],
                            image: carousel_15,
                        },
                        {
                            header: [
                                '5. Во всплывающем окне выбрать Агентство Республики Казахстан по финансовому мониторингу;', 
                            ],
                            image: carousel_16,
                        },
                        {
                            header: [
                                '6. Далее отображаются личные сведения Субъекта;', 
                                '7. В данной вкладке необходимо указать адрес осуществления деятельности и выбрать соответствующий вид Субъекта финансового мониторинга, далее подписать с помощью ЭЦП и отправить;'
                            ],
                            image: carousel_17,
                        },
                        {
                            header: [
                                '8. Также можно проверить информацию о поданном уведомлении и при необходимости скачать талон о принятии уведомления. Для этого на главной странице сайта elicense.kz  необходимо выбрать «Поиск РД»;', 
                            ],
                            image: carousel_18,
                        },
                        {
                            header: [
                                '9. Указать БИН/ИИН организации;', 
                                '10. Перейти на кнопку «Действительный»;'
                            ],
                            image: carousel_19,
                        },
                        {
                            header: [
                                '11. Скачать документ «Талон о принятии уведомления».', 
                            ],
                            image: carousel_110,
                        },
                        {
                            header: [
                                'Уведомление заверяется электронной цифровой подписью субъекта.', 
                            ],
                            image: carousel_111,
                        },
                    ]}/>
                </Reveal>

                <Sizebox height={150} />
                <Reveal>
                    <Centered>
                        <RandomH2>
                            Ответственность за занятие деятельностью, без соответствующего направления уведомления.
                        </RandomH2>
                    </Centered>
                </Reveal>
                <Sizebox height={40} />
                <Reveal>
                    <VideoLine
                        url={'https://videos.sproutvideo.com/embed/7990d0b51d1ae4c1f0/6e43cdd74851d083?playerColor=1f71a1'}
                        title={''}
                    />
                </Reveal>

                <Sizebox height={200} />
                <Reveal>
                    <HeaderWithLine headerColor={'#1F3C88'} lineColor={'#CADEFC'}>
                        <>
                            Теперь, когда Вы
                            понимаете, кем являются <span class="bold">субъекты финансового мониторинга</span>, и то что к ряду из них предусмотрен <span class="bold">уведомительный порядок</span>, перейдем к изучению обязательств субъектов финансового мониторинга по проведению <span class="bold">надлежащей проверки клиентов.</span>       </>  </HeaderWithLine>
                </Reveal>
                <Sizebox height={40} />
                
                <Reveal>
                    <NextLesson handleOnClick={() => {
                        CheckCurrentChapter(id);
                    }}/>
                </Reveal>

            </LessonPage>)
        case 19:
            return (<LessonPage name={'Надлежащая проверка субъектами финансового мониторинга клиентов'} lecturer={'AML Academy'}>
                    <Sizebox height={80}/>
                    <Reveal>
                        <RandomParapraph>
                            <span className="bold">Субъекты финансового мониторинга должны принимать меры по надлежащей проверке своих клиентов</span> 
                            (их представителей) и бенефициарных собственников в соответствии с законодательством 
                            Республики Казахстан о противодействии легализации (отмыванию) доходов, полученных преступным путем, и финансированию терроризма.
                        </RandomParapraph>
                    </Reveal>

                    <Sizebox height={100} />

                    <Reveal>
                        <HeaderWithLine 
                            headerColor={'#1F3C88'} lineColor={'#CADEFC'}
                            header={<>В соответствии с Законом о ПОД/ФТ <span className="bold">клиент</span> – физическое, юридическое лицо или иностранная структура без образования юридического лица, <span className="bold">получающие услуги субъекта</span> финансового мониторинга.</>}
                        />
                    </Reveal>
                    <Sizebox height={80}/>

                    <Reveal>
                        <Centered>
                            <RandomH2 style={{color: '#1F3C88'}}>
                                Бенефициарным собственником признается – физическое лицо:
                            </RandomH2>
                        </Centered>
                    </Reveal>
                    <Reveal>
                        <DropdownGlossaryList
                            list={[
                                {title: '1', description: 'которому прямо или косвенно принадлежат более двадцати пяти процентов долей участия в уставном капитале либо размещенных (за вычетом привилегированных и выкупленных обществом) акций клиента – юридического лица или иностранной структуры без образования юридического лица;\n', tabName: 'Бенефициарным собственником признается – физическое лицо:'},
                                {title: '2', description: 'осуществляющее контроль над клиентом иным образом;\n', tabName: 'Бенефициарным собственником признается – физическое лицо:'},
                                {title: '3', description: 'в интересах которого клиентом совершаются операции с деньгами и (или) иным имуществом.', tabName: 'Бенефициарным собственником признается – физическое лицо:'},
                            ]}
                            headerTextColor={'#170F49'}
                            activeHeaderTextColor={'#1F3C88'}
                            textColor={'#6F6C90'}
                            tabsTextColor={'#3A3939'}
                            tabsBackgroundColor={'#BAD6FF'}
                        />
                    </Reveal>
                    <Sizebox height={100} />

                    <ImageAndColumns 
                        header={'Субъекты финансового мониторинга осуществляют надлежащую проверку клиентов (их представителей) и бенефициарных собственников в следующих случаях:'}
                        image={imageAndColumns_1}
                        list={[
                            'установления деловых отношений с клиентом;',
                            'осуществления операций с деньгами и (или) иным имуществом, в том числе подозрительных операций.',
                            'наличия оснований для сомнения в достоверности ранее полученных сведений о клиенте (его представителе), бенефициарном собственнике.'
                        ]}
                    />

                    <Sizebox height={100} />
                    <Reveal>
                        <>
                            <Centered>
                                <RandomH2>При проведении субъектами финансового мониторинга надлежащей проверки своих клиентов (их представителей) и бенефициарных собственников осуществляются меры по:
                                </RandomH2>
                            </Centered>
                            <Sizebox height={20} />
                            <DropdownGlossaryList
                                headerTextColor={'#170F49'}
                                activeHeaderTextColor={'#1F3C88'}
                                textColor={'#6F6C90'}
                                tabsTextColor={'#3A3939'}
                                tabsBackgroundColor={'#BAD6FF'}
                                list={[
                                    {
                                        title: 'фиксированию сведений, необходимых для идентификации физического лица',
                                        description: 'данные документа, удостоверяющего его личность, индивидуальный идентификационный номер (за исключением случаев, когда физическому лицу не присвоен индивидуальный идентификационный номер в соответствии с законодательством Республики Казахстан), а также юридический адрес;\n'
                                    },
                                    {
                                        title: 'фиксированию сведений, необходимых для идентификации юридического лица (филиала, представительства):',
                                        description: 'данные справки о государственной (учетной) регистрации (перерегистрации) юридического лица (филиала, представительства), бизнес-идентификационный номер (за исключением случаев, когда юридическому лицу не присвоен бизнес-идентификационный номер в соответствии с законодательством Республики Казахстан), характер деятельности, а также адрес места регистрации или нахождения;'
                                    },
                                    {
                                        title: 'фиксированию сведений, необходимых для идентификации иностранной структуры без образования юридического лица:',
                                        description: 'наименование, номер (при наличии), под которым иностранная структура без образования юридического лица зарегистрирована в иностранном государстве (на территории), адрес места нахождения, место ведения основной деятельности, характер деятельности, а в отношении трастов и иных иностранных структур без образования юридического лица с аналогичной структурой или функцией также состав имущества, находящегося в управлении (собственности), фамилия, имя, отчество (если оно указано в документе, удостоверяющем личность) и адрес места жительства (места нахождения) учредителей (участников) иностранной структуры без образования юридического лица и бенефициарных собственников (при наличии);'
                                    },
                                    {
                                        title: 'выявлению бенефициарного собственника и фиксирование сведений, необходимых для его идентификации:',
                                        description: 'данные документа, удостоверяющего его личность, индивидуальный идентификационный номер (за исключением случаев, когда физическому лицу не присвоен индивидуальный идентификационный номер в соответствии с законодательством Республики Казахстан).\n'
                                    },
                                ]}
                            />
                        </>
                    </Reveal>

                    <Sizebox height={100} />
                    <Reveal>
                        <HeaderWithLine headerColor={'#1F3C88'} lineColor={'#CADEFC'}>
                            <>
                                Необходимость фиксирования сведений для выявления бенефициарго собственника.                            </>
                        </HeaderWithLine>
                    </Reveal>

                    <Sizebox height={80} />

                    <VideoLine url={'https://videos.sproutvideo.com/embed/7990d0b51d1ae4c1f0/6e43cdd74851d083?playerColor=1f71a1'}/>
                    <Sizebox height={40} />
                    <Reveal>
                    <TextWithTitle title={"Надлежащая проверка субъектами финансового мониторинга своих клиентов (их представителей) и бенефициарных собственников включает осуществление следующих мер:"}
                    />

                    <Sizebox height={40} />
                    <NotNumberedDots
                        dotsColor={'#CADEFC'}
                        list={[
                            'установление предполагаемой цели и характера деловых отношений;',
                            'проведение на постоянной основе проверки деловых отношений и изучения операций, осуществляемых клиентом через данный субъект финансового мониторинга, включая при необходимости получение и фиксирование сведений об источнике финансирования совершаемых операций;',
                            'проверка достоверности сведений, необходимых для идентификации клиента (его представителя), бенефициарного собственника, и обновление сведений о клиенте (его представителе) и бенефициарном собственнике;',
                        ]}
                    />
                    <Sizebox height={40} />
                    </Reveal>
                    <Reveal>
                        <HeaderWithLine headerColor={'#1F3C88'} lineColor={'#CADEFC'}>
                            <>
                               <span class="bold">В отношении представителя клиента дополнительно проверяются</span> полномочия такого лица действовать от имени и (или) в интересах клиента.                         </>
                        </HeaderWithLine>
                    </Reveal>
                    <Sizebox height={80} />
                    <Reveal>
                        <TextWithTitle title={"Субъекты финансового мониторинга в рамках дистанционно установленных деловых отношений с клиентом вправе совершать операции, за исключением трансграничных платежей, без принятия мер по проверке достоверности сведений, необходимых для идентификации клиента (его представителя), бенефициарного собственника, в случаях:"}
                        />

                        <Sizebox height={40} />
                        <NumberedDots
                            dotsColor={'#CADEFC'}
                            list={[
                                'осуществления клиентом операций по уплате налогов, пени, штрафов и других обязательных платежей в бюджет, а также страховых премий по договорам обязательного страхования;',
                                'зачисления денег на банковский счет клиента;',
                            ]}
                        />
                        <Sizebox height={40} />
                    </Reveal>
                    <Reveal>
                    <Report_Information>
                        Сведения о бенефициарных собственниках представляются клиентами (их представителями) по запросу субъекта финансового мониторинга в порядке, определенном уполномоченным органом.
                    </Report_Information>
                    </Reveal>
                    <Reveal>
                        <HeaderWithLine headerColor={'#1F3C88'} lineColor={'#CADEFC'}>
                            <>
                                В случаях и порядке, предусмотренных правилами внутреннего контроля, а также в зависимости от степени риска легализации (отмывания) доходов, полученных преступным путем, и финансирования терроризма субъектами финансового мониторинга применяются <span class="bold">усиленные и упрощенные меры</span> надлежащей проверки клиентов.    </>                    </HeaderWithLine>
                    </Reveal>
                    <Reveal>
                        <Sizebox height={40} />

                        <HeaderWithLine headerColor={'#1F3C88'} lineColor={'#CADEFC'}>
                            <>
                                В каких случаях субъектам запрещается дистанционное установление деловых отношений?                            </>
                        </HeaderWithLine>
                    </Reveal>

                    <Sizebox height={80} />

                    <VideoLine url={'https://videos.sproutvideo.com/embed/7990d0b51d1ae4c1f0/6e43cdd74851d083?playerColor=1f71a1'}/>
                    <Sizebox height={40} />
                    <Reveal>
                        <TextWithTitle title={"Субъекты в рамках НПК обязаны применять в отношении лиц, имеющих регистрацию, место жительства или место нахождения в государстве (территории), которые не выполняют и (или) недостаточно выполняют рекомендации ФАТФ, дополнительные меры по:"}
                        />

                        <Sizebox height={40} />
                        <NotNumberedDots
                            dotsColor={'#CADEFC'}
                            list={[
                                'проведению усиленных мер надлежащей проверки клиентов;',
                                'пересмотру или при необходимости расторжению корреспондентских отношений с финансовыми организациями;',
                            ]}
                        />
                        <Sizebox height={40} />
                    </Reveal>
                    <Reveal>
                        <TextWithTitle title={'К дополнительным обязательствам субъектов финансового мониторинга в отношении ПДЛ помимо мер НПК относится:'}></TextWithTitle>
                        <Sizebox height={40} />
                        <NumberedDots dotsColor={'#CADEFC'} list={['осуществление проверки принадлежности и (или) причастности клиента (его представителя) и бенефициарного собственника к ПДЛ, его супруге (супругу) и близким родственникам;','осуществление оценки репутации ПДЛ в отношении причастности его к случаям ОД/ФТ;',
                        'получение письменного разрешения руководящего работника организации на установление, продолжение деловых отношений с такими клиентами;\n',
                            'приятие доступных меры для установления источника происхождения денег и (или) иного имущества такого клиента (его представителя) и бенефициарного собственника;',
                            'применение на постоянной основе усиленных мер НПК.\n' +
                            'Данные обязательства распространяются и в отношении ПДЛ, входящих в перечень публичных должностных лиц, утверждаемый Президентом Республики Казахстан, их супругов и близких родственников, которым присвоен высокий уровень риска;'
                        ]}>

                        </NumberedDots>
                    </Reveal>
                    <Reveal>
                        <Report_Information>
                            При этом в отношении ПДЛ, утверждаемый Президентом Республики Казахстан со дня прекращения исполнения им своих полномочий в отношении ПДЛ, его супруге (супругу) и близким родственникам применяются меры, указанные выше в течение 12 месяцев.
                        </Report_Information>
                    </Reveal>

                    <Sizebox height={40} />
                    <Reveal>
                        <HeaderWithLine headerColor={'#1F3C88'} lineColor={'#CADEFC'}>
                            <>

                                Теперь, когда Вы понимаете,
                                когда и в каких случаях субъекты финансового мониторинга проводят <span class="bold">надлежащую проверку клиента,</span>
                                перейдем к изучению темы <span class="bold">операции с деньгами и (или) иным имуществом, подлежащие финансовому мониторингу</span>

                            </>  </HeaderWithLine>
                        <Sizebox height={40} />
                    </Reveal>

                    <Reveal>
                        <NextLesson handleOnClick={() => {
                            CheckCurrentChapter(id);
                        }}/>
                    </Reveal>
            </LessonPage>)
        case 20:
            return (<LessonPage name={'Надлежащая проверка субъектами финансового мониторинга клиентов'} lecturer={'AML Academy'}>
                <Reveal>
                    <Sizebox height={40} />
                    <TextWithTitle title={"Согласно закону о ПОД/ФТ,"}
                    />

                    <Sizebox height={40} />
                    <NotNumberedDots
                        dotsColor={'#CADEFC'}
                        list={[
                            'Финансовый мониторинг — это совокупность мер по сбору, обработке, анализу и использованию сведений и информации об операциях с деньгами и (или) иным имуществом, осуществляемых уполномоченным органом и субъектом финансового мониторинга в соответствии с Законом о ПОД/ФТ.',
                        ]}
                    />
                    <Sizebox height={40} />
                </Reveal>
                <Reveal>
                    <ImageLine img={image76}></ImageLine>
                </Reveal>
                <Reveal>
                <Sizebox height={80} />

                <SimpleTable
                    data={[
                        ['получение выигрыша в наличной форме по результатам проведения пари, азартной игры в игорных заведениях и лотереи, в том числе в электронной форме', '=/> 1 000 000 тенге '],
                        ['совершение ломбардами операций с деньгами, ценными бумагами, драгоценными металлами и драгоценными камнями, ювелирными изделиями из них и иными ценностями (кроме монет национальной валюты, изготовленных из драгоценных металлов) в наличной или безналичной форме\n' +
                        '\n', '=/> 3 000 000 тенге'],
                        ['переводы денег за границу на счета (во вклады), открытые на анонимного владельца, поступление денег из-за границы со счета (вклада), открытого на анонимного владельца в наличной или безналичной форме;\n' +
                        '\n' +
                        'купля-продажа драгоценных металлов и драгоценных камней, ювелирных изделий из них в наличной или безналичной форме;\n' +
                        'зачисление или перевод на банковский счет клиента денег, осуществляемые физическим, юридическим лицом или иностранной структурой без образования юридического лица, имеющими соответственно регистрацию, место жительства или место нахождения в оффшорной зоне, а равно владеющими счетом в банке, зарегистрированном в оффшорной зоне, либо операции клиента с деньгами и (или) иным имуществом с указанной категорией лиц в наличной или безналичной форме \n' +
                        '\n', '=/> 5 000 000 тенге'],
                        ['платежи и переводы денег, осуществляемые клиентом в пользу другого лица на безвозмездной основе, в наличной или безналичной форме;\n' +
                        '\n' +
                        'сделки с акциями и паями паевых инвестиционных фондов, за исключением операций репо на организованном рынке методом открытых торгов, в наличной или безналичной форме;', '=/> 7 000 000 тенге \n' +
                        '\n'],
                        ['покупка, продажа и обмен иностранной валюты через обменные пункты в наличной форме;\n' +
                        '\n' +
                        'снятие с банковского счета или зачисление на банковский счет клиента денег, а равно прием от клиента либо выдача клиенту наличных денег, за исключением случаев выплаты или получение страховой премии в наличной форме и внесения, перечисления добровольных пенсионных взносов в ЕНПФ и (или) ДНПФ, а также осуществления пенсионных выплат из ЕНПФ и (или) ДНПФ за счет добровольных пенсионных взносов в наличной форме;\n' +
                        '\n' +
                        'операции, совершаемые юридическими лицами, с момента государственной регистрации которых прошло менее трех месяцев, в наличной или безналичной форме;\n' +
                        '\n' +
                        'осуществление страховой выплаты или получение страховой премии в наличной форме;\n' +
                        '\n' +
                        'внесение, перечисление добровольных пенсионных взносов в ЕНПФ и (или) ДНПФ, а также осуществление пенсионных выплат из ЕНПФ и (или) ДНПФ за счет добровольных пенсионных взносов в наличной форме;\n' +
                        '\n' +
                        'сделки по оказанию услуг, в том числе подряда, перевозки, транспортной экспедиции, хранения, комиссии, доверительного управления имуществом, за исключением сейфовых операций по сдаче в аренду сейфовых ящиков, шкафов и помещений, в наличной форме;\n' +
                        ' получение денег по чеку или векселю в наличной форме;\n' +
                        '\n' +
                        'ввоз в Республику Казахстан либо вывоз из Республики Казахстан наличной валюты, документарных ценных бумаг на предъявителя, векселей, чеков, за исключением ввоза или вывоза, осуществляемого Национальным Банком Республики Казахстан, банками и Национальным оператором почты\n', '=/> 10 000 000 тенге \n' +
                        '\n'],
                        ['получение или предоставление имущества по договору финансового лизинга в наличной или безналичной форме;\n' +
                        '\n' +
                        'сделки с облигациями и государственными ценными бумагами, за исключением операций репо на организованном рынке методом открытых торгов, в наличной или безналичной форме;\n' +
                        '\n' +
                        'приобретение (продажа) в наличной форме культурных ценностей, ввоз в Республику Казахстан либо вывоз из Республики Казахстан культурных ценностей;', '=/> 45 000 000 тенге \n' +
                        '\n'],
                        ['заем по программам финансирования субъектов предпринимательства за счет средств Национального фонда Республики Казахстан в рамках облигационных займов субъектов квазигосударственного сектора в наличной или безналичной форме', '=/> 50 000 000 тенге \n' +
                        '\n'],
                        ['трансграничный платеж и перевод с банковского счета или на банковский счет клиента денег в безналичной форме', '=/> 100 000 000 тенге'],
                        ['сделка с недвижимым имуществом, результатом совершения которой является переход права собственности на такое имущество', '=/> 150 000 000 тенге'],
                    ]}
                    columns={[
                        'НР и Рекомендации входящие в состав',
                        'Оцениваемая область',
                    ]}
                />

                <Sizebox height={100} />
                </Reveal>
                <Reveal>
                    <NextLesson handleOnClick={() => {
                        CheckCurrentChapter(id);
                    }}/>
                </Reveal>

            </LessonPage>)
        case 21:
            return (<LessonPage name={'Сбор сведений и информации об операциях, подлежащих финансовому мониторингу'} lecturer={'AML Academy'}>
                <Reveal>
                    <Sizebox height={40} />
                    <TextWithTitle title={"Субъекты финансового мониторинга предоставляют в АФМ сведения и информацию об операциях, подлежащих финансовому мониторингу, которые содержат:"}
                    />

                    <Sizebox height={40} />
                    <NotNumberedDots
                        dotsColor={'#CADEFC'}
                        list={[
                            'информацию о субъекте финансового мониторинга;',
                            'информацию об операции',
                            'информацию об участниках операции;',
                            'при необходимости, признак определения подозрительной операции и дополнительную информацию по операции;',
                        ]}
                    />
                    <Sizebox height={40} />
                </Reveal>
                <Reveal>
                    <Sizebox height={40} />
                    <>
                        <Centered>
                            <RandomH2>Сроки предоставления в АФМ при признании операции в качестве подозрительной незамедлительно до ее проведения (до проведения подозрительной операции)
                            </RandomH2>
                        </Centered></>
                </Reveal>
                <Reveal>
                    <Sizebox height={80} />

                    <SimpleTable
                        data={[
                            ['подозрительные операции (признанные подозрительными в соответствии с программами реализации правил внутреннего контроля субъекта финансового мониторинга)', 'В не зависимости от суммы'],
                        ]}
                        columns={[
                            'Характеристика операции',
                            'Сумма',
                        ]}
                    />

                    <Sizebox height={100} />
                </Reveal>
                <Reveal>
                    <>
                        <Centered>
                            <RandomH2>Сроки предоставления в АФМ операции которые не были признаны подозрительными до их проведения не позднее 24-х часов после признания операции подозрительной (в случае выявления подозрительной операции после ее проведения)
                            </RandomH2>
                        </Centered></>
                </Reveal>
                <Reveal>
                    <Sizebox height={80} />

                    <SimpleTable
                        data={[
                            ['которые не были признаны подозрительными до их проведения\n' +
                            '(признанные подозрительными в соответствии с программами реализации правил внутреннего контроля субъекта финансового мониторинга)', 'В не зависимости от суммы'],
                        ]}
                        columns={[
                            'Характеристика операции',
                            'Сумма',
                        ]}
                    />

                    <Sizebox height={100} />
                </Reveal>
                <Reveal>
                    <>
                        <Centered>
                            <RandomH2>Сроки предоставления в АФМ операции не позднее рабочего дня, следующего за днем принятия СФМ соответствующего решения (совершения действия)
                            </RandomH2>
                        </Centered></>
                </Reveal>
                <Reveal>
                    <Sizebox height={80} />

                    <SimpleTable
                        data={[
                            ['сообщения о фактах отказа физическому, юридическому лицу или иностранной структуре без образования юридического лица в установлении деловых отношений, прекращения деловых отношений с клиентом, отказа в проведении операции с деньгами и (или) иным имуществом в случае наличия подозрений о том, что деловые отношения используются клиентом в целях ОД/ФТ, а также мерах по замораживанию операций с деньгами и (или) иным имуществом, предусмотренных пунктом 1-1 статьи 13 Закона о ПОД/ФТ', 'В не зависимости от суммы'],
                        ]}
                        columns={[
                            'Характеристика операции',
                            'Сумма',
                        ]}
                    />

                    <Sizebox height={100} />
                </Reveal>
                <Reveal>
                    <>
                        <Centered>
                            <RandomH2>Сроки предоставления в АФМ операции не позднее рабочего дня, следующего за днем признания операции клиента, соответствующие характеристике и фиксирования результатов такого признания
                            </RandomH2>
                        </Centered></>
                </Reveal>
                <Reveal>
                    <Sizebox height={80} />

                    <SimpleTable
                        data={[
                            ['операции клиента, имеющие характеристики, соответствующие типологиям, схемам и способам легализации (отмывания) преступных доходов и финансирования терроризма', 'В не зависимости от суммы'],
                        ]}
                        columns={[
                            'Характеристика операции',
                            'Сумма',
                        ]}
                    />

                    <Sizebox height={100} />
                </Reveal>
                <Reveal>
                    <HeaderWithLine headerColor={'#1F3C88'} lineColor={'#CADEFC'}>
                        <>
                            В каких случаях определенные субъекты финансового мониторинга не представляют сведения в уполномоченный орган?
                        </>
                    </HeaderWithLine>
                </Reveal>

                <Sizebox height={80} />

                <VideoLine url={'https://videos.sproutvideo.com/embed/7990d0b51d1ae4c1f0/6e43cdd74851d083?playerColor=1f71a1'}/>

                <Sizebox height={80} />

                <Reveal/>
                <Reveal>
                    <Report_Information>
                        При этом, когда для обработки запроса требуется дополнительное время, уполномоченный орган вправе по письменному обращению субъекта финансового мониторинга продлить срок не более чем на десять рабочих дней.                    </Report_Information>
                    <Sizebox height={40} />
                </Reveal>
                <Reveal>
                    <Report_Information>
                        Расходы, связанные с передачей в уполномоченный орган сведений об операции, подлежащей финансовому мониторингу, полученных при проведении надлежащей проверки клиента, несут субъекты финансового мониторинга.           </Report_Information>
                        <Sizebox height={40} />
                </Reveal>
                <Sizebox height={40} />
                <Reveal>
                    <HeaderWithLine headerColor={'#1F3C88'} lineColor={'#CADEFC'}>
                        <>

                            Теперь, когда Вы знаете в какие сроки и по какой форме направляются сведения по финансовым операциям, а также предоставляются иные сведения в уполномоченный орган <span class="bold">перейдем к изучению темы целевые финансовые санкции, относящиеся к предупреждению и предотвращению терроризма и финансирования терроризма</span>
                        </>  </HeaderWithLine>
                    <Sizebox height={40} />
                </Reveal>
                    <NextLesson handleOnClick={() => {
                        CheckCurrentChapter(id);
                    }}/>
            </LessonPage>)
        case 22:
            return (<LessonPage name={'Целевые финансовые санкции, относящиеся к предупреждению и предотвращению терроризма и финансирования терроризма'} lecturer={'AML Academy'}>
                <Reveal>
                    <Sizebox height={40} />
                    <HeaderWithLine headerColor={'#1F3C88'} lineColor={'#CADEFC'}>
                        <>
                            Целевые финансовые санкции, относящиеся к предупреждению и предотвращению терроризма и финансирования терроризма
                        </>
                    </HeaderWithLine>
                </Reveal>

                <Sizebox height={80} />
                <Reveal>
                    <ImageLine img={image77} height={600}></ImageLine>
                </Reveal>
                <Reveal>
                    <Sizebox height={40} />
                    <HeaderWithLine headerColor={'#1F3C88'} lineColor={'#CADEFC'}>
                        <>
                            АФМ в соответствии с Законом о ПОД/ФТ <span class="bold">составляет</span> Перечень организаций и лиц, связанных с финансированием терроризма и экстремизма, <span class="bold">размещает</span> его на своем интернет-ресурсе и <span class="bold">направляет</span> соответствующим государственным органам и организациям в электронном виде.
                        </>
                    </HeaderWithLine>
                </Reveal>
                <Reveal>
                    <Sizebox height={40} />
                    <ImageLine img={image78} height={600}></ImageLine>
                </Reveal>
                <Reveal>
                    <Sizebox height={80} />
                    <HeaderWithLine headerColor={'#1F3C88'} lineColor={'#CADEFC'}>
                        <>
                            АФМ для формирования Перечня организаций и лиц, связанных с финансированием терроризма и экстремизма использует данные направляемые:                        </>
                    </HeaderWithLine>
                </Reveal>

                <Sizebox height={80} />
                <Reveal>
                    <HeaderWithLine headerColor={'#1F3C88'} lineColor={'#CADEFC'}>
                        <>

                            Теперь, когда Вы знаете, что такое целевые финансовые санкции и в каких целях они применяются, перейдем к изучению темы <span class="bold">отказ от проведения и приостановление операций с деньгами и (или) иным имуществом</span>                        </>  </HeaderWithLine>
                    <Sizebox height={40} />
                </Reveal>
                <NextLesson handleOnClick={() => {
                    CheckCurrentChapter(id);
                }}/>
            </LessonPage>)
        case 23:
            return (<LessonPage name={'Отказ от проведения и приостановление'} lecturer={'AML Academy'}>
                <Sizebox height={80} />
                <Reveal>
                    <ImageLine img={image79} height={600}></ImageLine>
                </Reveal>
                <Sizebox height={80} />
                <Reveal>
                    <HeaderWithLine headerColor={'#1F3C88'} lineColor={'#CADEFC'}>
                        <>

                            Теперь, когда Вы прошли модуль <span class="bold">«Нормы Закона Республики Казахстан от «О противодействии легализации (отмыванию) доходов, полученных преступным путем, и финансированию терроризма»,</span> перейдем к тестовым вопросам для проверки усвоенных материалов.                     </></HeaderWithLine>
                </Reveal>
                <NextLesson handleOnClick={() => {
                    CheckCurrentChapter(id);
                }}/>
            </LessonPage>)


        case 24:
            return (<LessonPage name={'Агентство Республики Казахстан по финансовому мониторингу'} lecturer={'AML Academy'}>
                <Reveal>
                    <Sizebox height={40}/>
                    <RandomGlossary
                        title={'АФМ РК является государственным органом, непосредственно подчиненным и подотчетным Президенту Республики Казахстан'}
                        text={'осуществляющим руководство в сфере ПОД/ФТ, а также по предупреждению, выявлению, пресечению, раскрытию и расследованию экономических и финансовых правонарушений, отнесенных законодательством Республики Казахстан к ведению этого органа \n' +
                            '(указ Президента от 28 января 2021 г. № 501 «О мерах по дальнейшему совершенствованию системы государственного управления Республики Казахстан»).'}
                    />
                </Reveal>
                <Reveal>
                    <Sizebox height={30}/>
                    <HeaderWithLine headerColor={'#1F3C88'} lineColor={'#CADEFC'}>
                        <>

                            До подписания Указа функции подразделения финансовой разведки осуществлялись <span class="bold">Комитетом по финансовому мониторингу</span>, являвшимся подразделением Министерства финансов Республики Казахстан.

                        </>  </HeaderWithLine>
                    <Sizebox height={40} />
                </Reveal>
                <Reveal>
                    <Report_Information>
                        <>
                        <p className='italic'>
                            Таким образом, АФМ является <span class="bold">подразделением финансовой разведки (ПФР)</span> Республики Казахстан.
                        </p>
                    </>
                    </Report_Information>
                    <Sizebox height={40} />
                </Reveal>
                <Reveal>
                    <TextWithTitle title={"В Республике Казахстан АФМ является государственным органом, наделенным всеми полномочиями и функциями ПФР, а также осуществляет функции по проведению расследований."}
                    />
                    <Sizebox height={40} />
                </Reveal>
                <Reveal>
                    <HeaderWithLine headerColor={'#1F3C88'} lineColor={'#CADEFC'}>
                        <>
                            Данная функция осуществляется <span class="bold">Службой экономических расследований</span> (СЭР АФМ), которая вместе со своими территориальными департаментами (Департамент экономических расследований - ДЭР) образует оперативно-следственное подразделение, осуществляющее деятельность по предупреждению, выявлению, пресечению, раскрытию и расследованию преступлений и правонарушений.
                        </>
                    </HeaderWithLine>
                    <Sizebox height={40} />
                </Reveal>
                <Reveal>
                    <TextWithTitle title={"СЭР АФМ, как и органы прокуратуры, внутренних дел и антикоррупционная служба, относится к правоохранительным органам. СЭР АФМ взаимодействует с АФМ в рамках компетенции на общих основаниях в соответствии с законодательством."}
                    />
                    <Sizebox height={40} />
                </Reveal>
                <Reveal>
                    <HeaderWithLine headerColor={'#1F3C88'} lineColor={'#CADEFC'}>
                        <>
                            В целом АФМ РК является <span class="bold">гибридным</span> органом, так как его структура включает как правоохранительный блок (служба экономических расследований), так и административный (подразделение финансовой разведки).                        </>
                    </HeaderWithLine>
                    <Sizebox height={40} />
                </Reveal>
                <Reveal>
                    <ImageWithText
                        img={image70}
                        imageText={'Задачи ПФР'}
                        color={'#FFFFFF'}
                    />
                    <Sizebox height={40} />
                </Reveal>
                <Reveal>
                    <Sizebox height={40} />
                    <NumberedDots
                        dotsColor={'#CADEFC'}
                        list={[
                            'реализация единой государственной политики в сфере ПОД/ФТ;',
                            'ПОД/ФТ, координация работы государственных органов в этом направлении деятельности;',
                            'создание единой информационной системы и ведение республиканской базы данных в сфере ПОД/ФТ;',
                            'осуществление взаимодействия и информационного обмена с компетентными органами иностранных государств в сфере ПОД/ФТ;',
                            'представление интересов Республики Казахстан в международных организациях по вопросам ПОД/ФТ;',
                        ]}
                    />
                    <Sizebox height={40} />
                </Reveal>
                <Reveal>
                    <ImageWithText
                        img={image71}
                        imageText={'Функции ПФР'}
                        color={'#FFFFFF'}
                    />
                    <Sizebox height={40} />
                </Reveal>
                <Reveal>
                    <TextWithTitle title={"АФМ являясь национальным подразделением финансовой разведки, осуществляет следующие функции в целях ПОД/ФТ:"}
                    />

                    <Sizebox height={40} />
                    <NotNumberedDots
                        dotsColor={'#CADEFC'}
                        list={[
                            'ведет государственный электронный реестр уведомлений от юридических консультантов, ювелирных организаций, риелторов и лизингодателей в соответствии с Законом Республики Казахстан «О разрешениях и уведомлениях», осуществляет прием уведомлений от вышеуказанных субъектов;',
                            'осуществляет государственный контроль за соблюдением вышеуказанными СФМ, а также бухгалтерскими организациями законодательства РК о ПОД/ФТ в порядке, определенном Предпринимательским кодексом РК;',
                            'координирует деятельность государственных органов в сфере ПОД/ФТ;',
                            'по запросу суда по уголовным делам направляет необходимую информацию по операциям с деньгами и (или) иным имуществом, подлежащим финансовому мониторингу, для разрешения материалов, находящихся в производстве;',
                            'предоставляет в установленном законодательством порядке по запросам правоохранительных и специальных государственных органов сведения и информацию об операции, подлежащей финансовому мониторингу;',
                            'участвует в разработке и осуществлении программ международного сотрудничества по вопросам ПОД/ФТ;',
                            'организует формирование и ведение республиканской базы данных, а также обеспечивает методологическое единство и согласованное функционирование информационных систем в сфере ПОД/ФТ;',
                            'разрабатывает и проводит мероприятия по предупреждению нарушений законодательства Республики Казахстан о ПОД/ФТ;',
                            'обобщает практику применения законодательства о ПОД/ФТ на основании информации, получаемой от государственных органов и иных организаций, а также разрабатывает и вносит предложения по его совершенствованию;',
                            'изучает международный опыт и практику ПОД/ФТ;',
                            'проводит мероприятия по переподготовке и повышению квалификации кадров в сфере ПОД/ФТ;',
                            'координирует работу по проведению оценки рисков в сфере ПОД/ФТ и реализации мер, направленных на снижение рисков легализации (отмывания) доходов и финансирования терроризма;',
                            'разрабатывает и вносит в Правительство Республики Казахстан меры, направленные на снижение рисков ПОД/ФТ;',
                            'разрабатывает и утверждает в пределах своей компетенции инструкции, методические рекомендации для СФМ с учетом особенностей и специфики их деятельности;',
                            'ведет список ПДЛ, входящих в перечень публичных должностных лиц, утверждаемый Президентом Республики Казахстан, их супругов и близких родственников;',
                            'устанавливает форму и сроки предоставления государственными органами и организациями информации об анализе и мониторинге деятельности организаций и физических лиц на предмет выявления рисков ОД/ФТ, обобщения практики, предложений по совершенствованию законодательства о ПОД/ФТ в уполномоченный орган;',
                            'осуществляет иные полномочия, предусмотренные настоящим Законом, иными законами Республики Казахстан, актами Президента Республики Казахстан и Правительства Республики Казахстан;',
                        ]}

                    />
                    <Sizebox height={40}/>
                </Reveal>

                <Reveal>
                    <ImageLine
                        img={image72}
                        color={'#FFFFFF'}
                    />
                    <Sizebox height={40} />
                </Reveal>
                <Reveal>
                    <HeaderWithLine headerColor={'#1F3C88'} lineColor={'#CADEFC'}>
                        <>
                            Практическая реализация функций АФМ
                        </>
                    </HeaderWithLine>
                </Reveal>

                <Sizebox height={80} />

                <VideoLine url={'https://videos.sproutvideo.com/embed/7990d0b51d1ae4c1f0/6e43cdd74851d083?playerColor=1f71a1'}/>

                <Sizebox height={80} />

                <Reveal/>
                <Reveal>
                    <HeaderWithLine headerColor={'#1F3C88'} lineColor={'#CADEFC'}>
                        <>
                            Теперь, когда вы узнали о задачах и функциях АФМ,
                            мы остановимся на наиболее важных функциях поподробнее
                        </>
                    </HeaderWithLine>
                </Reveal>
                <Reveal>
                    <Sizebox height={40}/>
                    <NextLesson handleOnClick={() => {
                        CheckCurrentChapter(id);
                    }}/>
                </Reveal>

            </LessonPage>)
        case 25:
            return (<LessonPage name={'Функции АФМ'} lecturer={'AML Academy'}>
                    <Reveal>
                        <Sizebox height={40}/>
                        <TextWithTitle
                            title={"Сбор, обработка и анализ информации\n"}
                            text={[
                                "В целях ПОД/ФТ АФМ осуществляет сбор, обработку и анализ информации об операциях с деньгами и (или) иным имуществом, подлежащих финансовому мониторингу, с последующим направлением результатов анализа в правоохранительные и специальные государственные органы Республики Казахстан.",
                                "АФМ обладает всеми необходимыми средствами и современными IT-ресурсами для проведения качественного оперативного, тактического и стратегического анализа в целях борьбы с ОД/ФТ, предикатными преступлениями и обеспечения качественными материалами СЭР АФМ и ПО/СГО.",
                                "АФМ самостоятельно принимает решение о проведении анализа, направлении запросов, а также раскрытии результатов анализа в ПОО/зарубежные органы, также у АФМ имеются полномочия для взаимодействия с национальными и иностранными компетентными органами в целях ПОД/ФТ, включая право запрашивать и получать необходимую информацию, в т.ч. на принципах взаимности."
                            ]}
                        />
                    </Reveal>
                <Reveal>
                    <Sizebox height={40}/>
                    <TextWithTitle
                        title={"Координация ГО/ОО\n"}
                        text={[
                            "Взаимодействие и сотрудничество является одной из сильных сторон казахстанской системы ПОД/ФТ. АФМ отвечает за руководство и координацию деятельности в области противодействия ОД/ФТ и получает поддержку на высоком уровне страны.",
                        ]}
                    />
                </Reveal>
                <Reveal>
                    <Sizebox height={40}/>
                    <Report_Information>
                        <>
                            <p className='italic'>
                                В настоящее время заключено 7 соглашений о сотрудничестве и взаимодействии в сфере ПОД/ФТ с госорганами – регуляторами, с 19 общественными объединениями, а также 39 меморандумов о взаимодействии в сфере ПОД/ФТ с иностранными ПФР.
                            </p>
                        </>
                    </Report_Information>
                    <Sizebox height={40} />
                </Reveal>
                <Reveal>
                    <HeaderWithLine headerColor={'#1F3C88'} lineColor={'#CADEFC'}>
                        <>
                            функции АФМ
                        </>
                    </HeaderWithLine>
                </Reveal>

                <Sizebox height={80} />

                <VideoLine url={'https://videos.sproutvideo.com/embed/7990d0b51d1ae4c1f0/6e43cdd74851d083?playerColor=1f71a1'}/>

                <Sizebox height={80} />

                <Reveal/>
                <Reveal>
                    <HeaderWithLine headerColor={'#1F3C88'} lineColor={'#CADEFC'}>
                        <>
                            АФМ отвечает за руководство и координацию деятельности в области противодействия ОД/ФТ и получает поддержку на высоком уровне страны. Одним из эффективных инструментов является созданная при Администрации Президента Республики Казахстан <span class="bold">Межведомственная рабочая группа по вопросам подготовки ко второму раунду взаимной оценки ЕАГ</span> (МВРГ).
                        </>
                    </HeaderWithLine>
                    <Sizebox height={80} />
                </Reveal>
                <Reveal>
                    <Sizebox height={40}/>
                    <TextWithTitle
                        title={"МВРГ является консультативно-совещательным органом и создана в целях выработки мер по реализации государственной политики в сфере ПОД/ФТ, и повышения их эффективности, а также координации мер, направленных на снижение рисков ОД/ФТ и противодействие теневой экономике.\n"}
                        text={[
                            "В состав МВРГ вошли представители АП РК, Совбез РК, ВС, ГП, МИД, КНБ, МВД, АФМ, АПК, АРРФР, АЗРК, НБ, Высшей аудиторской палаты, АСПиР, МНЭ, МФ, МЗ, МНВО, МТСЗН, МТС, МЮ, МЦРИАП, МТИ, МСХ, МКОР, МЭ, МПС, МЭПР, НПП «Атамекен», МФЦА.",
                        ]}
                    />
                </Reveal>

                <Reveal>
                    <HeaderWithLine headerColor={'#1F3C88'} lineColor={'#CADEFC'}>
                        <>
                            В ноябре 2020 года вступила в силу норма ст. 11-1 Закона о ПОД/ФТ, в соответствии с которой в Казахстане создан <span class="bold">Межведомственный совет в сфере ПОД/ФТ</span> (МВС), который стал эффективной диалоговой площадкой для выработки государственной политики в сфере ПОД/ФТ/ФРОМУ.                        </>
                    </HeaderWithLine>
                    <Sizebox height={40} />
                </Reveal>
                <Reveal>
                    <Sizebox height={40}/>
                    <TextWithTitle
                        title={"В его состав вошли заместители первых руководителей государственных правоохранительных, специальных государственных органов и госорганов-регуляторов, задействованных в борьбе с ОД/ФТ/ФРОМУ.\n"}
                        text={[
                            "По итогам заседаний МВС утвержден ряд стратегически важных документов, в том числе, одобрены и приняты закрытые и публичные версии НОР ОД и НОР ФТ/ФРОМУ, секторальной оценке НКО, а также отчет уязвимости юридических лиц, методические рекомендации по выявлению ПДЛ, бенефициарных собственников и утверждены рекомендаций для НКО в сфере ПФТ.\n",
                        ]}
                    />
                </Reveal>
                <Reveal>
                    <ImageWithText
                        img={image74}
                        imageText={'ФУНКЦИИ МВС'}
                        color={'#FFFFFF'}
                    />
                    <Sizebox height={40} />
                </Reveal>
                <Reveal>
                    <Sizebox height={40} />
                    <HeaderWithLine headerColor={'#1F3C88'} lineColor={'#CADEFC'}>
                        <>
                            Для усиления взаимодействия с СФМ и решения организационных и правовых вопросов в ноябре 2019 года при АФМ создан <span class="bold">Совет комплаенс.</span></>
                    </HeaderWithLine>
                    <Sizebox height={40} />

                </Reveal>
                <Reveal>
                    <TextWithTitle title={"Основными задачами Совета являются:"}
                    />

                    <Sizebox height={40} />
                    <NotNumberedDots
                        dotsColor={'#CADEFC'}
                        list={[
                            'подготовка рекомендаций по внедрению новых форматов взаимодействия и обратной связи с СФМ;',
                            'подготовка и обсуждение предложений по совершенствованию информационного обмена между СФМ и Агентством, а также по иным вопросам информационного взаимодействия;',
                            'участие в проектах, связанных с информированием СФМ о рисках ОД/ФТ для практического использования при реализации процедур внутреннего контроля;',
                            'организация и участие в совместных обучающих мероприятиях, обмене лучшими практиками и опытом работы в сфере ПОД/ФТ, в том числе с участием приглашенных экспертов;',
                        ]}
                    />
                    <Sizebox height={40}/>
                </Reveal>
                <Reveal>
                    <Sizebox height={40}/>
                    <Report_Information>
                        <>
                            <p className='italic'>
                                С момента действия данной площадки проведено более 70 встреч с СФМ и государственными органами, на которых, к примеру, был доведен унифицированный реестр рисковых лиц, итоги НОР ОД/ФТ/ФРОМУ и другое.
                            </p>
                        </>
                    </Report_Information>
                    <Sizebox height={40} />
                </Reveal>
                <Reveal>
                    <Sizebox height={40}/>
                    <NextLesson handleOnClick={() => {
                        CheckCurrentChapter(id);
                    }}/>
                </Reveal>

            </LessonPage>)
        case 26:
            return (<LessonPage name={'Урок 1'} lecturer={'AML Academy'}>
                <Reveal>
                    <ImageLine
                        img={image75}
                        color={'#FFFFFF'}
                    />
                    <Sizebox height={40} />
                </Reveal>
                <Reveal>
                    <TextWithTitle title={"В КАКИХ ЦЕЛЯХ СФМ НЕОБХОДИМО ОБУЧАТЬСЯ, ПОВЫШАТЬ КВАЛИФИКАЦИЮ И ПРОХОДИТЬ ТЕСТИРОВАНИЕ?\n"}
                    />

                    <Sizebox height={40} />
                    <NotNumberedDots
                        dotsColor={'#CADEFC'}
                        list={[
                            'МЕЖДУНАРОДНЫЕ СТАНДАРТЫ;',
                            'ТРЕБОВАНИЯ ЗАКОНОДАТЕЛЬСТВА;',
                            'АДМИНИСТРАТИВНАЯ ОТВЕТСТВЕННОСТЬ;',
                            'РИСКИ ВОВЛЕЧЕНИЯ СФМ В СХЕМЕ ОД/ФТ;',
                            'СПОСОБЫ И СХЕМЫ ОД/ФТ ПОСТОЯННО СОВЕРШЕНСТВУЮТСЯ;',
                        ]}
                    />
                    <Sizebox height={40}/>
                </Reveal>
                <Reveal>
                    <TextWithTitle title={"В целях реализации Требований по подготовке и обучению Субъект:"}
                    />

                    <Sizebox height={40} />
                    <NumberedDots
                        dotsColor={'#CADEFC'}
                        list={[
                            'Разрабатывает программу подготовки и обучения в сфере ПОД/ФТ с учетом требований законодательства Республики Казахстан о ПОД/ФТ, а также особенностей деятельности субъектов и их клиентов.',
                            'Утверждает перечень ответственных лиц, которые проходят обучение в целях ПОД/ФТ, до начала осуществления ими функций, связанных с соблюдением законодательства Республики Казахстан о ПОД/ФТ.',
                            'Устанавливает порядок учета прохождения своими сотрудниками программы обучения.',
                            'Ведет учет прохождения своими сотрудниками программы обучения.',
                            'Устанавливает форму и содержание документа по факту проведения со своим сотрудником обучения и ознакомления с НПА РК в области ПОД/ФТ и внутренними документами, принятыми в целях организации внутреннего контроля и подтверждается его собственноручной подписью.',
                            'Ведет учет прохождения своими сотрудниками программы обучения.',
                            'Приобщает к личному делу своего сотрудника документы, подтверждающие прохождение им программы обучения.',
                            'Размещает информацию о прохождении тестирования в личном кабинете веб-портала АФМ.',

                        ]}
                    />
                    <Sizebox height={40}/>
                </Reveal>
                <Reveal>
                    <HeaderWithLine headerColor={'#1F3C88'} lineColor={'#CADEFC'}>
                        <>
                            Субъекты проходят обучение в целях ПОД/ФТ в соответствии с <span class="bold">программой обучения</span>, которая содержит указанные ниже направления:

                        </>
                    </HeaderWithLine>
                </Reveal>

                <Sizebox height={80} />

                <Reveal>
                    <VideoLine url={'https://videos.sproutvideo.com/embed/7990d0b51d1ae4c1f0/6e43cdd74851d083?playerColor=1f71a1'}/>
                </Reveal>
                <Sizebox height={80} />

                <Reveal/>
                <Reveal>
                    <TextWithTitle title={"Учет прохождения субъектами финансового мониторинга обучения и тестирования"}
                    />

                    <Sizebox height={40} />
                    <NumberedDots
                        dotsColor={'#CADEFC'}
                        list={[
                            'Субъект ведет учет прохождения своими сотрудниками программы обучения.',
                            'Порядок учета прохождения сотрудниками субъекта программы обучения устанавливается субъектом самостоятельно.',
                            'Факт проведения с сотрудником субъекта обучения и ознакомления с НПА в области ПОД/ФТ и внутренними документами субъектов, принятыми в целях организации внутреннего контроля, подтверждается его собственноручной подписью в документе, форму и содержание которого субъект устанавливает самостоятельно.',
                            'Документы, подтверждающие прохождение сотрудником субъекта программы обучения, приобщаются к личному делу сотрудника.',
                            'Прохождение субъектом тестирования подтверждается документом, выдаваемым Центром.',
                            'Учет лиц, прошедших тестирование, ведется уполномоченным органом на основании информации, полученной от Центра.',
                            'Субъекты размещают информацию о прохождении тестирования в личном кабинете субъекта, который размещен в веб-портале уполномоченного органа.',
                        ]}
                    />
                    <Sizebox height={40}/>
                </Reveal>
                <Reveal>
                    <HeaderWithLine headerColor={'#1F3C88'} lineColor={'#CADEFC'}>
                        <>
                            В целях подтверждения изучения субъектами материала, изученного в процессе обучения субъекты проходят <span class="bold">тестирование</span> с периодичностью не реже <span class="bold">1 (одного) раза в 3 (три) года</span> с даты прохождения тестирования на базе Национального центра по управлению персоналом государственной службы и его территориальных подразделений.
                        </>
                    </HeaderWithLine>
                </Reveal>
                <Reveal>
                    <Sizebox height={40}/>
                    <Report_Information>
                        <>
                            <p className='italic'>
                                Срок действия результатов тестирования составляет 3 (три) года с момента прохождения аттестации с положительным результатом.                            </p>
                        </>
                    </Report_Information>
                    <Sizebox height={40} />
                </Reveal>
                <Reveal>
                    <TextWithTitle title={"В настоящее время процедура прохождения тестирования проходит следующим образом:"}
                    />

                    <Sizebox height={40} />
                    <NumberedDots
                        dotsColor={'#CADEFC'}
                        list={[
                            'Войти на портал Агентства websfm.kz;',
                            'Выбрать раздел «Обучение», затем вкладку «Тестирование»;',
                            'Заполнить Заявку для прохождения тестирования на знание законодательства и оценки личных качеств;',
                        ]}
                    />
                    <Sizebox height={40}/>
                </Reveal>
                <Reveal>
                    <Sizebox height={40}/>
                    <TextWithTitle
                        title={"При этом в Заявке тестируемый указывает свой ИИН и БИН организации (при наличии) и выбирает зал тестирования Центра, который имеется во всех регионах Казахстана, дату, а также время прохождения тестирования.\n"}
                        text={[
                            "Сами вопросы разрабатываются АФМ, распределение по ним происходит на основании вида СФМ, указанного в Заявке, то есть 80% – общие вопросы/20% – профильные вопросы по виду СФМ.",
                        ]}
                    />
                </Reveal>
                <Reveal>
                    <Sizebox height={40}/>
                    <Report_Information>
                        <>
                            <p className='italic'>
                                Продолжительность тестирования составляет <span class="bold">90 мин</span>.
                                Количество вопросов по НПА – <span class="bold">100</span> (проходной балл – 70);
                                Количество вопросов по оценке личных качеств (ОЛК) – 24.
                            </p>
                        </>
                    </Report_Information>
                    <Sizebox height={40} />
                </Reveal>

                <Reveal>
                    <Sizebox height={40}/>
                    <NextLesson handleOnClick={() => {
                        CheckCurrentChapter(id);
                    }}/>
                </Reveal>

            </LessonPage>)
    }
}

export default GetLesson;