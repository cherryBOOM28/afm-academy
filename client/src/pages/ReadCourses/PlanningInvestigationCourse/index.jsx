import React, { useState, useEffect, Children } from 'react';

import './style.scss'
import file1 from './Порядок.docx';
import file2 from './planning_slides.pdf';
import file3 from './образец 1 хронология событий.docx';
import file4 from './образец 2 Таблица доказательств.docx';

import { useNavigate, useParams } from 'react-router-dom';
import { m, useMotionValueEvent, useScroll } from 'framer-motion';

import { FaStar } from "react-icons/fa";

import { BiSolidObjectsHorizontalRight } from 'react-icons/bi';
import { MdClose } from "react-icons/md";
import Sizebox from '../../../components/courseTemplates/common/Sizebox';
import Reveal from '../../../components/Reveal';
import HeaderWithLine from '../../../components/courseTemplates/common/HeaderWithLine';
import NextLesson from '../../../components/courseTemplates/complex/NextLesson';
import CourseHeader from '../../../components/courseTemplates/course-header';
import { Module, Session } from '../../../components/sessions/Sessions';

import lectorImage from './lectorImage.png';
import Report_Warning from '../../../components/courseTemplates/common/Warnings/Report';
import Centered from '../../../components/courseTemplates/common/Centered';
import RandomH2 from '../../../components/courseTemplates/common/RandomH2';
import TextWithTitle from '../../../components/courseTemplates/common/TextWithTitle';
import RandomParapraph from '../../../components/courseTemplates/common/RandomParagraph';
import NotNumberedDots from '../../../components/courseTemplates/common/NotNumberedDots';
import NumberedDots from '../../../components/courseTemplates/common/NumberedDots';
import ImageWithText from '../../../components/courseTemplates/common/ImageWithText';
import TextAndLink from '../../../components/courseTemplates/complex/TextAndLink';
import FlexRow from '../../../components/courseTemplates/common_v2/FlexRow';
import VideoWithTitleAndText from '../../../components/courseTemplates/complex/Video/VideoWithTitleAndText';
import VideoLine from '../../../components/courseTemplates/common/VideoLine';
import SimpleTable from '../../../components/courseTemplates/common/SimpleTable';
import FancyList from '../../../components/courseTemplates/common_v2/FancyList';
import FlexBoxes from '../../../components/courseTemplates/common_v2/FlexBoxes';
import ImageLine from '../../../components/courseTemplates/common/ImageLine';
import DotsOnRoad from '../../../components/courseTemplates/common_v2/DotsOnRoad';
import TwoColumnsDivider from '../../../components/courseTemplates/common_v2/TwoColumnsDivider';
import Image from '../../../components/courseTemplates/common_v2/Image';
import TextWithBackground from '../../../components/courseTemplates/common/TextWithBackground';
import FileDownloader from '../../../components/courseTemplates/common/FileDownloader';

import AFM_logo from '../../../assets/images/crypto_AFM.png';
import icon1 from '../../../assets/icons/planning1.png';
import icon2 from '../../../assets/icons/planning2.png';
import icon3 from '../../../assets/icons/planning3.png';
import icon4 from '../../../assets/icons/planning4.png';
import xIcon from '../../../assets/icons/planning5.png';
import acceptIcon from '../../../assets/icons/planning6.png';
import icon5 from '../../../assets/icons/planning7.png';
import icon6 from '../../../assets/icons/planning8.png';
import icon7 from '../../../assets/icons/planning9.png';
import icon10 from '../../../assets/icons/planning10.png';
import icon11 from '../../../assets/icons/planning11.png';
import icon12 from '../../../assets/icons/planning12.png';
import icon13 from '../../../assets/icons/planning13.png';
import icon14 from '../../../assets/icons/planning14.png';
import icon15 from '../../../assets/icons/planning15.png';
import icon16 from '../../../assets/icons/planning16.png';
import icon17 from '../../../assets/icons/planning17.png';
import slide5 from '../../../assets/icons/planning_slide5.png';
import slide61 from '../../../assets/icons/planning_slide61.png';
import slide62 from '../../../assets/icons/planning_slide62.png';
import slide7 from '../../../assets/icons/planning_slide7.png';
import ShortBiography from '../../../components/courseTemplates/complex/images/ShortBiography';
import Quote from '../../../components/courseTemplates/common_v2/Quote';
import IconDots from '../../../components/courseTemplates/common_v2/IconDots';
import ImageSequence from '../../../components/courseTemplates/common_v2/ImageSequence';
import ThreeColumnsDivider from '../../../components/courseTemplates/common_v2/ThreeColumnsDivider';
import InTextFileDownloader from '../../../components/courseTemplates/common_v2/InTextFileDownloader';


function PlanningInvestigationCourse() {
    const [courseName, setCourseName] = useState('Общий порядок планирования досудебного расследования');
    const [isNavOpen, setIsNavOpen] = useState(true);
    const [activeSessionId, setActiveSessionId] = useState(1);

    const jwtToken = localStorage.getItem('jwtToken');

    const { id } = useParams();
    const [data, setData] = useState(null);
    const [error, setError] = useState(null);
    const [isLoading, setLoading] = useState(true);

    const [courseProgress, setCourseProgress] = useState(0);

    const navigate = useNavigate();

    const handleNavOpen = () => {
        setIsNavOpen(prev => !prev);
    }

    function getWindowDimensions() {
        const { innerWidth: width, innerHeight: height } = window;
        return {
            width,
            height
        };
    }

    function scrollToTopAnimated() {
        const currentScroll = document.documentElement.scrollTop || document.body.scrollTop;
        const courseContent = document.querySelector('.course-content');
        const courseContentScroll = courseContent.scrollTop;

        if (courseContentScroll > 0) {
            //   window.requestAnimationFrame(scrollToTopAnimated);
            courseContent.scrollTo(0, 0);
        }
    }

    const handleWindowResolution = () => {
        const { width, height } = getWindowDimensions();
        if (width <= 1300) {
            setIsNavOpen(false);
        }
    }

    useEffect(() => {
        handleWindowResolution();
        window.addEventListener('resize', handleWindowResolution);

        // const fetchData = async () => {
        //     try {
        //         const response = await axios.get(`${base_url}/api/aml/course/getCourseById/${1}`, {
        //             headers: {
        //                 Authorization: `Bearer ${jwtToken}`,
        //             },
        //         });

        //         // console.log(response.data)

        //         if (response.status === 200) {
        //             setData(response.data);
        //             setCourseProgress(response.data.progress_percentage)
        //             setQuizQuestions(response.data.course.chapters[0].quiz.quizList)
        //             // console.log(response.data.course.chapters[0].quiz.quizList)

        //         } else {
        //             // Handle other status codes if needed
        //             setError(response.statusText);
        //             // console.log(response.statusText);
        //         }


        //     } catch (error) {
        //         setError(error);
        //         console.error(error);
        //     }

        //     setLoading(false);
        // };

        // // console.log(jwtToken);
        // fetchData();
    }, [])

    // useEffect(() => {
    //     const fetchData = async () => {
    //         try {
    //             const response = await axios.get(`${base_url}/api/aml/course/getCourseById/${1}`, {
    //                 headers: {
    //                     Authorization: `Bearer ${jwtToken}`,
    //                 },
    //             });

    //             if (response.status === 200) {
    //                 setCourseProgress(response.data.progress_percentage)
    //             } else {
    //                 // Handle other status codes if needed
    //                 setError(response.statusText);
    //                 // console.log(response.statusText);
    //             }


    //         } catch (error) {
    //             setError(error);
    //             console.error(error);
    //         }
    //     };

    //     fetchData();
    // }, [activeSessionId])

    const handleSessionClick = (id) => {
        scrollToTopAnimated();
        setActiveSessionId(id);
    }

    const CheckCurrentChapter = (chapterNum) => {
        // const fetchData = async () => {
        //     try {
        //         const response = await axios.post(
        //             `${base_url}/api/aml/chapter/checked/${chapterNum}`,
        //             {},
        //             {
        //                 headers: {
        //                     Authorization: `Bearer ${jwtToken}`,
        //                 },
        //             }
        //         );


        //         if (response.status === 200) {
        //             // console.log(response.data);
        //         } else {
        //             // Handle other status codes if needed
        //             setError(response.statusText);
        //             // console.log(response.statusText);
        //         }
        //     } catch (error) {
        //         if (error.response) {
        //             setError(error.response.data.message || 'An error occurred');
        //             console.error(error.response.data);
        //         } else {
        //             setError(error.message || 'An error occurred');
        //             console.error(error.message);
        //         }
        //     }
        // };

        // // console.log(jwtToken);
        // fetchData();
        scrollToTopAnimated();
        setActiveSessionId(activeSessionId + 1);
    };

    const getLesson = (id) => {
        // console.log('getLesson', quizQuestions)
        switch (id) {
            case 1:
                return (<LessonPage name={'О курсе'}>
                    <Sizebox height={30}/>

                    <Reveal>

                        <div 
                            style={{
                                display: 'flex',
                                flexDirection: 'row',
                                gap: '10px',
                                alignItems: 'center',
                                justifyContent: 'center',
                                padding: '0px 210px',
                                width: '100%',
                                boxSizing: 'border-box',
                            }}
                        >
                            <img 
                                src={AFM_logo} 
                                style={{
                                    height: '100px'
                                }}    
                            />
                            <img 
                                src={'https://gurk.kz/uploads/images/b2/d9/b5/b20d97b5ba0a593e567752302b279da7.jpg'} 
                                style={{
                                    height: '100px'
                                }}        
                            />

                        </div>

                    </Reveal>

                    <Sizebox height={30}/>

                    <Reveal>
                        <Centered>
                            <RandomH2>
                                Авторы учебного курса
                            </RandomH2>
                        </Centered>
                    </Reveal>
                    <Sizebox height={20}/>
                    <Reveal>
                        <SimpleTable 
                            data={[
                                [
                                    'САУКОМБЕКОВ Саят Махметович', 'Руководитель Следственного департамента АФМ'
                                ],
                                ['ФИНАНСОВ Максим Николаевич', 'Руководитель 3 Следственного управления СД АФМ'],
                                ['БРОВКИНА Анель Николаевна', 'Следователь по особо важным делам 1 СУ СД'],
                                ['СОЛТАНҒАЗЫ Сабит', 'Следователь по особо важным делам 1 СУ СД'],
                                ['БАЕТОВ Канат Жамалханович', 'помощник Ректора AML ACADEMY'],
                            ]}
                        />
                    </Reveal>

                    <Sizebox height={100}/>

                    <Reveal>
                        <NextLesson handleOnClick={() => {
                            CheckCurrentChapter(1);
                        }}/>
                    </Reveal>

                </LessonPage>)
            case 2:
                    return (<LessonPage name={'Общее понятие планирования, его структура и задачи'}>
                        <Sizebox height={30}/>
    
                        <Reveal>
                            <Quote 
                                text={'Планы-бесполезны, планирование – бесценно'}
                                author={'Дуайт Эйзенхауэр, американский государственный и военный деятель'}
                                img={'https://rus.team/images/article/6770/2020-10-12_618-159183_599.webp'}
                            />
                        </Reveal>
                        <Sizebox height={100}/>
    
                        

                        <Reveal>
                            <HeaderWithLine 
                                headerColor={'#3A3939'} lineColor={'#CADEFC'}
                            >
                                Общее понятие планирования, его структура и задачи
                            </HeaderWithLine>
                        </Reveal>

                        <Sizebox height={40}/>
                        <Reveal>
                            <TextWithTitle 
                                text={[
                                    <>В организации расследования преступления большое значение имеет <span className="bold">планирование</span>. Правильно организованное планирование дает возможность проводить расследование целеустремленно, позволяет закончить следствие в установленные законом сроки, дисциплинирует следователя, обеспечивает полноту и объективность следствия, способствует получению максимума эффекта при наименьшей затрате <span className="bold">следователем</span> времени, сил и средств.</>,
                                ]}
                            />
                        </Reveal>

                        <Sizebox height={40}/>

                        <Reveal>
                            <TextAndLink 
                                text={
                                    <Image 
                                        src={'https://simg.marwin.kz/media/catalog/product/cache/8d1771fdd19ec2393e47701ba45e606d/_/-/ugolovnoprocessualnyy_kodeks_respubliki_kazahstan_2020_g_kazyaz.jpg'} 
                                        style={{
                                            width: '200px'
                                        }}
                                    />
                                }
                                link={'https://adilet.zan.kz/rus/docs/K1400000231#z457'}
                            />
                        </Reveal>

                        <Sizebox height={40}/>
                        <Reveal>
                            <TextWithTitle 
                                text={[
                                    <span className='bold'>Благодаря планированию упорядочиваются процесс расследования преступления. Недооценка вопросов планирования и организации расследования на практике приводит к целому ряду негативных обстоятельств:</span>
                                ]}
                            />
                        </Reveal>
                        <Sizebox height={20}/>
                        <Reveal>
                            <NotNumberedDots 
                                dotsColor={'black'}
                                list={[
                                    <>необоснованная продолжительность сроков расследования;</>,
                                    <>хаотичность и непоследовательность проведения следственных действий и оперативно-розыскных мероприятий (далее - ОРМ). – <a href='https://adilet.zan.kz/rus/docs/Z940004000_#z0' className='red'>ссылка на Закон Об ОРД;</a></>,
                                    <>неэффективное использование человеческих и материальных ресурсов;</>,
                                    <>отсутствие взаимодействия между органами и службами, что принимают участие в расследовании;</>,
                                    <>отсутствие научной организации работы и руководства;</>,
                                    <>нарушение процессуальных норм;</>,
                                    <>низкое качество досудебного следствия.</>,
                                ]}
                            />
                        </Reveal>
                        <Sizebox height={60}/>
                        <Reveal>
                            <TextWithTitle 
                                text={[
                                    <>Процесс планирования расследования имеет определенную структуру, он состоит из ряда взаимоувязанных элементов, которые одновременно служат этапами этого процесса.</>,
                                    <><span className="bold">Такими элементами является:</span></>
                                ]}
                            />
                        </Reveal>
                        <Sizebox height={20}/>
                        <Reveal>
                            <NumberedDots 
                                dotsColor={'#e0e03f'}
                                list={[
                                    <>изучение начальной информации;</>,
                                    <>выдвижение версий;</>,
                                    <>определение обстоятельств которые необходимо довести, и решение других заданий расследования;</>,
                                    <>определения путей, средств и методов расследования;</>,
                                    <>определение последовательности и сроков решения отдельных заданий и выполнения отдельных действий;</>,
                                    <>определение исполнителей;</>,
                                    <>определение организационных мероприятий по привлечению исполнителей, обеспечению использования отдельных средств и проведению тех или других действий;</>,
                                    <>составление письменного плана;</>,
                                    <>коррекция и развитие плана.</>,
                                ]}
                            />
                        </Reveal>

                        <Sizebox height={80}/>
                        <Reveal>
                            <div style={{
                                backgroundColor: '#eded64',
                                padding: '20px 0px'
                            }}>
                                <Centered>
                                    <RandomH2>
                                        Общие положения планирования расследования преступлений
                                    </RandomH2>
                                </Centered>
                                <Sizebox height={40}/>
                                <ThreeColumnsDivider 
                                    gap={40}
                                    left={
                                        <>
                                            <Centered>
                                                <RandomH2>
                                                    ЦЕЛЬ
                                                </RandomH2>
                                            </Centered>
                                            <Sizebox height={20} />
                                            <RandomParapraph>
                                                Логическая  последовательность расследования,   определение необходимых   шагов   и  этапов,  рациональное  распределение    времени    и  ресурсов   для   быстрого,  полного  и  качественного  закрепления   доказательств
                                            </RandomParapraph>
                                        </>
                                    }
                                    middle={
                                        <>
                                            <Centered>
                                                <RandomH2>
                                                    ПЛАНИРОВАНИЕ
                                                </RandomH2>
                                            </Centered>
                                            <Sizebox height={20} />
                                            <RandomParapraph>
                                                Творческий   процесс, заключающийся в    определении следователем   задач расследования   и оптимальных   путей   их решения
                                            </RandomParapraph>
                                        </>
                                    }
                                    right={
                                        <>
                                            <Centered>
                                                <RandomH2>
                                                    ИНДИВИДУАЛЬНОСТЬ
                                                </RandomH2>
                                            </Centered>
                                            <Sizebox height={20} />
                                            <RandomParapraph>
                                                Расследование    каждого   конкретного     дела    имеет    свои   особенности
                                            </RandomParapraph>
                                        </>
                                    }
                                />
                            </div>
                        </Reveal>
                        <Sizebox height={80}/>

                        <Reveal>
                            <TextWithTitle 
                                text={[
                                    'Действующим законодательством составление плана не предусмотрено, хотя он является важным и неотъемлемым процессом расследования преступлений, обеспечивающим быстрое изобличение и привлечение к уголовной ответственности лиц их совершивших.',
                                    'В связи с чем составление Плана расследования регламентировано разделом 3 Порядка организации досудебного расследования в службе экономических расследований Агентства РК по финансовому мониторингу, утвержденного приказом № 235-НҚ от 18.07.2022 года (далее – Порядок организации расследования).'
                                ]}
                            />
                        </Reveal>
                        <Sizebox height={40}/>
                        <FileDownloader 
                            type={'doc'}
                            file={file1}
                            fileName={'Приказ Председателя АФМ №235-НҚ'}
                        />
                        <Sizebox height={40}/>
                        <Reveal>
                            <IconDots 
                                header={'Порядок  составления  плана  расследования'}
                                gap={40}
                                dotsColor={'white'}
                                list={[
                                    'В 3-х  дневный  срок  с  момента  принятия  в  свое производство',
                                    <>
                                        Утверждается   руководителем   следственного подразделения   либо <InTextFileDownloader 
                                            text={'курирующим  заместителем руководителя ДЭР'} 
                                            file={file2}
                                            style={{
                                                color: 'blue',
                                                textDecoration: 'underline',
                                                cursor: 'pointer'
                                            }}
                                        />
                                    </>,
                                    'План  расследования  составляется  по  утвержденному  образцу',
                                    'Составляется  с  учетом  требований  норм  уголовно-процессуального  законодательства',
                                ]}
                                icons={[
                                    icon1,
                                    icon2,
                                    icon3,
                                    icon4
                                ]}
                            />
                        </Reveal>

                        <Sizebox height={100}/>
                        <Reveal>
                            <TextWithTitle 
                                text={[
                                    <>Следует отметить, что под <span className="bold">начальной информацией</span> понимается весь объем фактических данных, которыми владеет <span className="bold">следователь</span> на каждый момент планирования расследования.</>,
                                    <>Во время изучения и оценки информации обращаются к сопоставлению фактических данных, полученных из разных источников, что позволяет выявить противоречия, неточности или неполноту данных. </>,
                                    <>На данном этапе следователь решает, какие данные не вызывают сомнения и могут быть оценены как достоверные, а какие, напротив, сомнительные и требуют проверки; на какие вопросы можно ответить утвердительно, а на какие невозможно; какие данные относятся к делу, а какие - нет. </>,
                                    <>Кроме материалов, полученных процессуальным путем, при планировании расследования, изучается также информация, собранная посредством ОРМ. </>,
                                    <>В процессе изучения содержания полученной информации следователь решает: есть признаки совершения уголовного правонарушения, какие обстоятельства преступления есть, имеются ли сведения о лице, которое совершило общественно опасное деяние, его причастность, возможные соучастники, способы совершения преступления. В процессе указанной деятельности определяются конкретные обстоятельства, которые подлежат доказыванию по делу. Главными началами в этом плане служат общие положения закона о предмете доказывания (Раздел 3. УПК РК - Доказательства и доказывание. Глава 15. Доказательства) и уголовно - правовые признаки соответствующего состава преступления.</>,
                                ]}
                            />
                        </Reveal>

                        <Sizebox height={100}/>
                        <Reveal>
                            <ImageWithText 
                                img={'https://www.leadertask.ru/images/all_images/planirovanie-raboty-menedzhera.jpg'}
                                imageText={'Задачи'}
                                color={'white'}
                            />
                        </Reveal>
                        <Sizebox height={40}/>
                        <Reveal>
                            <NumberedDots 
                                dotsColor={'#e0e03f'}
                                header={'Планирование расследования определяет постановку определенных задач. Это установление:'}
                                list={[
                                    'события преступления;',
                                    'лиц, что совершили преступление;',
                                    'степени участия каждого из них в преступлении;',
                                    'способов совершения и сокрытия следов преступления;',
                                    'размеров нанесенных убытков;',
                                    'причин и условий, что способствовали совершению преступления.',
                                ]}
                            />
                        </Reveal>
                        <Sizebox height={30}/>
                        <Reveal>
                            <RandomParapraph>
                                Например, <span className="bold italic">преступления, совершаемые путем мошенничества с финансовыми ресурсами</span>, относятся к той группе преступлений, которые в большинстве случаев раскрываются оперативным путем. Планирование расследования дел, возбужденным на основе оперативно-розыскных материалов, является специфическим. Одна из особенностей планирования расследования дел этой категории - обеспечение путей получения данных о лицах, которые совершили преступление, необходимость сочетания следственных действий с оперативно-розыскными мероприятиями в процессе всего следствия, а также обеспечение возможности легализации информации, полученной оперативным путем.
                            </RandomParapraph>
                        </Reveal>
                        <Sizebox height={20}/>
                        <Reveal>
                            <RandomParapraph>
                                <span className="bold">План расследования</span> складывается в зависимости от объема информации, которую имеет в распоряжении следователь. Одним из самых важных требований <span className="bold">к Плану расследования уголовного дела</span> и выполнения отдельного следственного действия является их максимальная обоснованность информацией, которую имеет в распоряжении следователь, и, в первую очередь, той, которая содержится в материалах уголовного дела.
                            </RandomParapraph>
                        </Reveal>

                        <Sizebox height={100}/>
                        
    
                        <Reveal>
                            <NextLesson handleOnClick={() => {
                                CheckCurrentChapter(1);
                            }}/>
                        </Reveal>
    
                    </LessonPage>)
                case 3:
                    return <LessonPage name={'Проблемные и актуальные вопросы планирования'}>
                        <Sizebox height={30}/>
                        
                        <Reveal>
                            <RandomParapraph>
                                Одной из причин низкого качества расследования является плохое знание следователем материалов дела, не использование им тех данных, которые содержатся в материалах следствия. Это характерно, в известной мере, для расследования преступлений, совершаемых путем мошенничества с <span className="bold">финансовыми ресурсами</span>, (ложного банкротства, преднамеренного банкротства и др.)
                            </RandomParapraph>
                        </Reveal>
                        <Sizebox height={30}/>

                        <Reveal>
                            <IconDots 
                                gap={40}
                                list={[
                                    'Формальное   составление, либо расследование без него',
                                    'Планы   не   содержат   целей   проводимых   следственных    действий',
                                    'Не   определяется   их   структура   и   тактическая последовательность,   сроки   проведения   и   ответственные лица   за   их   исполнение',
                                    'Хаотичное,    непоследовательное     расследование',
                                ]}
                                icons={[
                                    xIcon,
                                    xIcon,
                                    xIcon,
                                    xIcon
                                ]}
                            />
                        </Reveal>
                        <Sizebox height={60}/>
                        
                        <Reveal>
                            <Report_Warning>
                                <>Как вы обратили внимание, в вышеприведенных планах расследований <span className="bold">следователи и их непосредственные руководители</span> к планированию расследования <span className="bold">относятся формально.</span></>
                            </Report_Warning>
                        </Reveal>
                        <Sizebox height={20}/>
                        <Reveal>
                            <Centered>
                                <Image 
                                    style={{
                                        width: '500px'
                                    }}
                                    src={'https://катюша-садик.рф/wp-content/uploads/2019/12/zasedanie.jpg'} 
                                />
                            </Centered>
                        </Reveal>
                        <Sizebox height={20}/>
                        <Reveal>
                            <TextWithTitle 
                                text={[
                                    <>Составляемые планы не содержат целей проводимых следственных действий и сроки их проведения, а также не определяются их структура, тактическая последовательность и ответственные лица за их исполнение.</>,
                                    <>К примеру, изучение плана расследования по выписке фиктивных счет-фактур на 528,1 млн тенге в ТОО «К» за поставку зерна показало, что первые два пункта плана предусматривают проведение НСД-7,1 в отношении гражданина «И» и НСД-6,4,1 в офисном помещении.</>,
                                    <>При этом не указываются адреса офиса и проживания указанного гражданина.</>,
                                    <>Кроме того, предусмотрено направление поручения в оперативные подразделения с целью установления соучастников преступления, бухгалтера, обнальщиков и других лиц, которых возможно определить в результате анализа имеющихся материалов, применение мер безопасности подставным директорам крестьянских хозяйств, однако, с чем это связано и какие для этого существуют правовые механизмы не указывается.</>,
                                    <>Имеют место факты составления планов в произвольной форме, с включением продления сроков следствия, то есть процессуального действия, регламентированного УПК и допросов неопределенного круга лиц.</>,
                                    <>Как показывает анализ, при расследовании уголовных дел, связанных с реализацией подакцизной продукции, в планы включаются заведомо невыполнимые следственные действия, такие как, дословно - <span className="italic">«отработать все базары и магазины, в которых имеются указанные подакцизные сигареты», «выставить контроль на въезд, выезд с границы РФ»</span> и т.д.</>,
                                    <>Утверждая подобные планы, заместители руководителей ДЭР и руководители следственных управлений не вникают в детали планируемых следственных действий, чем способствуют их формальному составлению.</>,
                                    <>Хаотичное, непоследовательное расследование приводит к нерациональному использованию средств и времени, неправильной квалификации деяний подозреваемых, нарушению конституционных прав граждан и жалобам участников уголовного процесса.</>,
                                    <>Так, например, по делам о выписке фиктивных счетов-фактур следователь, после начала расследования, либо получения уголовного дела в производство, не изучив акты налогового органа, отчеты, сведения о движении денежных средств по счетам в банке, приступает к допросу руководителей и учредителей юридических лиц-контрагентов, количество которых, как правило, исчисляется сотнями.</>,
                                    <>Единственный вопрос, который следователь может выяснить у руководителей и учредителей юридических лиц на данном этапе, это - «отношение их к регистрации».</>,
                                    <>Даже если руководители компаний действительно имеют отношение к регистрации, ответить на вопросы о взаиморасчетах, без предоставления на обозрение соответствующих документов, они не смогут.</>,
                                    <>Такое отношение приводит к волоките расследования и повторному вызову предпринимателей на допрос.</>,
                                    <>Поэтому время, затраченное на составление качественного плана, позволит сформировать логическую последовательность проведения следственных действий, определить наиболее важные и срочные задачи, рационально распределить время и ресурсы в целях быстрого, полного и качественного закрепления доказательств.</>,
                                ]}
                            />
                        </Reveal>

                        <Sizebox height={100}/>
                        <Reveal>
                            <HeaderWithLine 
                                headerColor={'#3A3939'} lineColor={'#CADEFC'}
                            >
                                РАССЛЕДОВАНИЕ ДЕЛ О ВЫПИСКЕ СЧЕТ-ФАКТУР
                            </HeaderWithLine>
                        </Reveal>
                        <Sizebox height={40}/>
                        <Reveal>
                            <IconDots 
                                gap={80}
                                list={[
                                    <>
                                        <Centered>
                                            <ImageSequence 
                                                images={[
                                                    icon5,
                                                    icon7
                                                ]}
                                                imageDescriptions={[
                                                    'ЕРДР',
                                                    'ДОПРОС'
                                                ]}
                                            />
                                        </Centered>
                                        <Sizebox height={20} />
                                        <RandomParapraph>
                                            <span className="red bold">Не  изучив</span>   акты   Налогового органа,   отчеты,   сведения  о движении   денежных   средств   по  счетам   в   банке, приступает   к   допросу
                                        </RandomParapraph>
                                    </>,
                                    <>
                                        <Centered>
                                            <ImageSequence 
                                                images={[
                                                    icon5,
                                                    icon6,
                                                    icon7
                                                ]}
                                                imageDescriptions={[
                                                    'ЕРДР',
                                                    'АНАЛИЗ',
                                                    'ДОПРОС'
                                                ]}
                                            />
                                        </Centered>
                                        <Sizebox height={20} />
                                        <IconDots
                                            width='20px'
                                            height='20px' 
                                            icons={[
                                                acceptIcon,
                                                acceptIcon,
                                                acceptIcon,
                                            ]}
                                            list={[
                                                'ПРОВЕДЕНИЕ  АНАЛИЗА',
                                                'ФОРМИРОВАНИЕ  ВОПРОСОВ, ПОДЛЕЖАЩИХ  ВЫЯСНЕНИЮ',
                                                'ГОТОВНОСТЬ ТЕХНИЧЕСКИХ СРЕДСТВ   ФИКСАЦИИ   И   Т.Д. ',
                                            ]}
                                        />
                                    </>,
                                ]}
                                icons={[
                                    xIcon,
                                    acceptIcon,
                                ]}
                            />
                        </Reveal>

                        <Sizebox height={100}/>
                        <Reveal>
                            <HeaderWithLine 
                                headerColor={'#3A3939'} lineColor={'#CADEFC'}
                            >
                                При  составлении  Плана  <span className="bold">необходимо:</span> 
                            </HeaderWithLine>
                        </Reveal>
                        <Sizebox height={40}/>
                        <Reveal>
                            <IconDots 
                                gap={40}
                                dotsColor={'white'}
                                list={[
                                    'Тщательно  изучить  и  проанализировать  материалы, предоставленные  для   начала  досудебного   расследования',
                                    'Определить   круг   обстоятельств   совершенного   преступления, подлежащих   доказыванию',
                                    'Определить   перечень   следственных   действий,   подлежащих проведению   в   первую   очередь   и   недопущения  их  утраты',
                                    'Установить   последовательность   запланированных следственных  действий',
                                    'Определить  какие  научно – технические  средства   могут   быть использованы  для  закрепления  доказательств',
                                    'Определить  за  каждым   пунктом   плана   и   следственным действием   ответственного   исполнителя',
                                    'Указать   конкретные   сроки   выполнения   намеченных мероприятий',
                                    'Излагать   предусмотренные   планом   мероприятия   максимально  ясно   и   понятно   для   других   участников   СОГ',
                                    'Предусмотреть  мероприятия   по   подготовке   к   следственным действиям  с  формированием  вопросов,   подлежащих выяснению,   готовности   технических   средств   фиксации   и  т.д. ',
                                ]}
                                icons={[
                                    icon1,
                                    icon10,
                                    icon4,
                                    icon2,
                                    icon11,
                                    icon12,
                                    icon13,
                                    icon14,
                                    icon10,
                                ]}
                            />
                        </Reveal>

                        <Sizebox height={100}/>
                        <Reveal>
                            <HeaderWithLine 
                                headerColor={'#3A3939'} lineColor={'#CADEFC'}
                            >
                                ПРИ ПЛАНИРОВАНИИ <span className="bold red">НЕ ДОПУСКАЕТСЯ:</span>
                            </HeaderWithLine>
                        </Reveal>
                        <Sizebox height={40}/>
                        <Reveal>
                            <IconDots 
                                gap={40}
                                dotsColor={'white'}
                                list={[
                                    'Формальный,   шаблонный   подход',
                                    'Проведение  и  включение  в  план  следственных действий, которые   не   имеют   доказательственного   значения',
                                    'Включение   в   план   следственных   действий  без конкретизации  места,   способа   их   проведения   и вопросов,   подлежащих   выяснению',
                                ]}
                                icons={[
                                    xIcon,
                                    xIcon,
                                    xIcon,
                                ]}
                            />
                        </Reveal>

                        <Sizebox height={100}/>
                        <Reveal>
                            <HeaderWithLine 
                                headerColor={'#40ccdb'} lineColor={'#CADEFC'}
                            >
                                <span className="bold">ПРИНЦИПЫ УСПЕШНОГО ПЛАНИРОВАНИЯ</span>
                            </HeaderWithLine>
                        </Reveal>
                        <Sizebox height={40}/>
                        <Reveal>
                            <ThreeColumnsDivider 
                                left={
                                    <div style={{display: 'flex', flexDirection: 'column'}}>
                                        <Centered>
                                            <Image src={icon15} style={{width: '100px'}}/>
                                        </Centered>
                                        <Sizebox height={10} />
                                        <RandomH2>
                                            ДИНАМИЧНЫЙ
                                        </RandomH2>
                                        <Sizebox height={10} />
                                        <RandomParapraph>
                                            Следственные  действия должны быть  активные и наступательные
                                        </RandomParapraph>
                                    </div>
                                }
                                middle={
                                    <div style={{display: 'flex', flexDirection: 'column'}}>
                                        <Centered>
                                            <Image src={icon16} style={{width: '100px'}}/>
                                        </Centered>
                                        <Sizebox height={10} />
                                        <RandomH2>
                                            РЕАЛЬНЫЙ
                                        </RandomH2>
                                        <Sizebox height={10} />
                                        <RandomParapraph>
                                            Конкретные следственные действия, которые могут быть выполнены на основе имеющейся информации и материалов
                                        </RandomParapraph>
                                    </div>
                                }
                                right={
                                    <div style={{display: 'flex', flexDirection: 'column'}}>
                                        <Centered>
                                            <Image src={icon17} style={{width: '100px'}}/>
                                        </Centered>
                                        <Sizebox height={10} />
                                        <RandomH2>
                                            ГИБКИЙ
                                        </RandomH2>
                                        <Sizebox height={10} />
                                        <RandomParapraph>
                                            Возможность адаптировать план  к изменяющимся  обстоятельствам и новой информации
                                        </RandomParapraph>
                                    </div>
                                }
                            />
                        </Reveal>

                        <Sizebox height={60}/>
                        <Reveal>
                            <TextWithTitle 
                                text={[
                                    <>Следует иметь в виду, что план должен быть динамичным, реальным и гибким, что означает возможность его изменения и восполнения в зависимости от возникающих в ходе следствия новых фактов, версий, вопросов, подлежащих дополнительному исследованию.</>,
                                    <>Корректировки необходимо вносить своевременно, не дожидаясь выполнения всех предусмотренных планом следственных действий.</>,
                                    <>Для этого следователю необходимо пересматривать составленный им план после выполнения каждого следственного действия.</>,
                                    <>Также необходимо учитывать позицию защиты и других участников уголовного процесса, отраженных в ходатайствах и жалобах.</>,
                                    <>Важно в процессе всего расследования письменно составлять и регулярно обновлять хронологию событий совершенного <InTextFileDownloader 
                                        file={file3} text={'уголовного правонарушения.'} 
                                        fileName={'Хронология событий'} 
                                        style={{
                                            color: 'blue',
                                            textDecoration: 'underline',
                                            cursor: 'pointer'
                                        }}
                                    /></>,
                                    <>Собранные доказательства рекомендуется отражать в <InTextFileDownloader 
                                        file={file4} text={'Таблице доказательств'} 
                                        fileName={'Таблица доказательств'} 
                                        style={{
                                            color: 'blue',
                                            textDecoration: 'underline',
                                            cursor: 'pointer'
                                        }}
                                    />, которая будет способствовать их анализу, правильной оценке и качественному составлению процессуальных документов.</>,
                                    <>Тщательно продуманный План расследования позволит должным образом составить процессуальные документы, убедиться, что все доказательства собраны в соответствии с требованиями закона, достаточно надежны и достоверны для правильной квалификации уголовного правонарушения.</>,
                                ]}
                            />
                        </Reveal>

                        

                        <Sizebox height={100}/>

                        <Reveal>
                            <NextLesson handleOnClick={() => {
                                CheckCurrentChapter(1);
                            }}/>
                        </Reveal>
                    </LessonPage>

        }
    }

    return ( 
        <div className="planning-investigation-course">
            <div className="course-wrapper">

                <CourseHeader
                    handleNavOpen={handleNavOpen}
                    courseName={courseName}
                />
                <div className="course-body">

                    <CourseNavigation
                        isNavOpen={isNavOpen}
                        activeSessionId={activeSessionId}
                        handleSessionClick={handleSessionClick}
                        courseProgress={courseProgress}
                        courseName={courseName}
                    />

                    <div className={isNavOpen ? "course-content open" : "course-content"}>
                        <div className="content">
                            {
                                getLesson(activeSessionId)
                            }
                        </div>
                    </div>

                </div>

            </div>
        </div>
    );
}

const CourseNavigation = ({
    isNavOpen,
    activeSessionId,
    handleSessionClick,
    courseProgress,
    courseName,
}) => {

    const [currentModule, setCurrentModule] = useState(1);

    const handleModuleOpen = (id) => {
        if (currentModule === id) {
            setCurrentModule(-1);
            return;
        }
        setCurrentModule(id);
    }

    return (
        <div className={isNavOpen ? "course-nav" : "course-nav hide"}>

            <div className="nav-head">
                <div>
                    <h2>{courseName}</h2>
                    <div className='progress-bar'>
                        <div>Прогресс {parseFloat(courseProgress).toFixed(1)}%</div>
                        <progress id="courseProgress" max="100" value={`${parseFloat(courseProgress).toFixed(2)}`}>{parseFloat(courseProgress).toFixed(2)}</progress>
                    </div>
                </div>
            </div>
            <div className="nav-body">
                <Session
                    session={{
                        id: 1,
                        group: 'О курсе',
                        name: 'О курсе',
                        progress: 0,
                    }}
                    handleSessionClick={handleSessionClick}
                    isActive={1 === activeSessionId}
                />
                <Module
                    moduleId={1}
                    isOpen={currentModule === 1}
                    handleModuleOpen={handleModuleOpen}
                    name={'Общий порядок планирования досудебного расследования'}
                >
                    <Session
                        session={{
                            id: 2,
                            group: 'Введение',
                            name: 'Общее понятие планирования, его структура и задачи',
                            progress: 0,
                        }}
                        handleSessionClick={handleSessionClick}
                        isActive={2 === activeSessionId}
                    />
                    <Session
                        session={{
                            id: 3,
                            group: 'Введение',
                            name: 'Проблемные и актуальные вопросы планирования',
                            progress: 0,
                        }}
                        handleSessionClick={handleSessionClick}
                        isActive={3 === activeSessionId}
                    />
                    <Session
                        session={{
                            id: 4,
                            group: 'Введение',
                            name: 'Некоторые методы планирования досудебного расследования',
                            progress: 0,
                        }}
                        handleSessionClick={handleSessionClick}
                        isActive={4 === activeSessionId}
                    />
                </Module>
            </div>

        </div>
    )
}

const LessonPage = ({ children, name, lecturer }) => {

    return (
        <>
            <div className="content-header">
                <h1>{name}</h1>
                {
                    lecturer ? 
                    (
                        <div className='lector'>
                            <img src={lectorImage} alt="lector-name" />
                            <p>{lecturer}</p>
                        </div>
                    ) : null
                }                
            </div>
            {children}
        </>
    ); 
}

export default PlanningInvestigationCourse;