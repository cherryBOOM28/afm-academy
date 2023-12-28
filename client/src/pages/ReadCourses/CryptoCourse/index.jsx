import React, { useState, useEffect, Children } from 'react';

import './style.scss'

import { useNavigate, useParams } from 'react-router-dom';
import { useMotionValueEvent, useScroll } from 'framer-motion';

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
import ImageWithText from '../../../components/courseTemplates/common/ImageWithText';
import TextAndLink from '../../../components/courseTemplates/complex/TextAndLink';

function CryptoCourse() {
    const [courseName, setCourseName] = useState('Учебный курс по навыкам работы с виртуальными активами');
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
                return (<LessonPage name={'Введение в криптовалюты'} lecturer={'Оразбек Рашид'}>
                    <Sizebox height={28} />

                    <Reveal>
                        <HeaderWithLine header="Что такое криптовалюты и как они работают?" />
                    </Reveal>
                    <Sizebox height={60} />

                    <Reveal>
                        <Report_Warning 
                            text={`<span className="bold">Криптовалюты</span> представляют собой цифровые активы, использующие криптографию для обеспечения безопасности и подтверждения транзакций, а также контроля над созданием новых единиц.\n
                            Они функционируют в сети компьютеров и серверов, что обеспечивает их <span className="bold">децентрализованность</span> и <span className="bold">независимость</span> от центральных учреждений, таких как банки или правительства.\n
                            Криптовалюты позволяют пользователям осуществлять денежные переводы и хранить их в цифровой форме.
                            `}
                        />
                    </Reveal>
                    <Sizebox height={80} />

                    <Reveal>
                        <Centered>
                            <RandomH2 
                                text={'Основные термины и понятия'}
                            />
                        </Centered>
                    </Reveal>
                    <Sizebox height={50} />

                    <Reveal>
                        <TextWithTitle 
                            text={[
                                <><span className="bold">Блокчейн</span> - это цепочка блоков, каждый из которых содержит записи о транзакциях.</>,
                                'Каждый блок ссылается на предыдущий блок, создавая непрерывную цепочку.',
                                'Блокчейн обеспечивает надежность и прозрачность записей, так как изменение одного блока требует изменения всех последующих блоков, что затруднительно исключает манипуляции с данными.'
                            ]}
                        />
                    </Reveal>

                    <Sizebox height={50} />

                    <Reveal>
                        <TextWithTitle 
                            text={[
                                <><span className="bold">Майнинг</span> - это процесс проверки и добавления новых транзакций в блокчейн.</>,
                                'Майнеры используют вычислительные ресурсы для решения сложных криптографических задач. Когда задача решена, майнер добавляет новый блок с подтвержденными транзакциями в блокчейн и получает вознаграждение в виде криптовалюты.',
                            ]}
                        />
                    </Reveal>

                    <Sizebox height={50} />

                    <Reveal>
                        <TextWithTitle 
                            text={[
                                <><span className="bold">Криптовалютный кошелек</span> - это программное или аппаратное решение для хранения, отправки и получения криптовалют.</>,
                                'В кошельке хранятся публичные и приватные ключи.',
                                'Публичный ключ используется для получения средств, а приватный ключ – для подписи транзакций.',
                            ]}
                        />
                    </Reveal>

                    <Sizebox height={50} />

                    <Reveal>
                        <TextWithTitle 
                            text={[
                                <><span className="bold">Приватный и публичный ключи:</span></>,
                                <><span className="italic">Приватный ключ</span> – это уникальная строка символов, которая используется для подписи транзакций кошелька.</>,
                                <><span className="italic">Публичный ключ</span> – это адрес кошелька, который можно раскрывать для получения средств.</>,
                            ]}
                        />
                    </Reveal>

                    <Sizebox height={100} />

                    <Reveal>
                        <HeaderWithLine header="Как работает блокчейн?" />
                    </Reveal>
                    <Sizebox height={60} />

                    
                    <Reveal>
                        <RandomParapraph>
                            <span className="bold">Блокчейн</span>  – это распределенная база данных, хранящая информацию о транзакциях и других данных в виде блоков. Каждый блок содержит:
                        </RandomParapraph>
                    </Reveal>
                    <Sizebox height={20}/>
                    <Reveal>
                        <NotNumberedDots 
                            dotsColor={'black'}
                            list={[
                                <><span className="bold">Хэш</span> предыдущего блока, что обеспечивает связь между блоками;</>,
                                <><span className="bold">Транзакции или другие данные.</span></>
                            ]}
                        />
                    </Reveal>
                    <Sizebox height={20}/>
                    <Reveal>
                        <TextWithTitle 
                            text={[
                                <>Новые транзакции отправляются в сеть узлов. Майнеры конкурируют за решение криптографических задач, чтобы создать новый блок. Как только задача решена, новый блок добавляется в цепочку блоков. Этот процесс обеспечивает безопасность и надежность, так как изменение одного блока потребует пересчета всей цепочки, что практически невозможно.</>,
                                <>Благодаря распределенной природе блокчейна, нет единого пункта отказа, и сеть продолжает функционировать даже при отказе нескольких узлов. Это обеспечивает надежную и устойчивую среду для проведения транзакций и хранения данных.</>,
                            ]}
                        />
                    </Reveal>

                    <Sizebox height={100} />

                    <Reveal>
                        <HeaderWithLine header="Что такое децентрализация и почему она важна?" />
                    </Reveal>
                    <Sizebox height={60} />

                    <Reveal>
                        <TextWithTitle 
                            text={[
                                <><span className="bold">Децентрализация </span>– это принцип, при котором власть, контроль и решения распределены между множеством участников или узлов, вместо того чтобы быть сосредоточенными в одном центре.</>,
                                'В контексте криптовалют и блокчейна, децентрализация означает отсутствие центрального контроля над сетью или валютой.',
                                'Это достигается путем распределения данных и функций между множеством участников, называемых узлами, которые работают вместе для поддержания сети.'
                            ]}
                        />
                    </Reveal>
                    <Sizebox height={60} />

                    <Reveal>
                        <NotNumberedDots 
                            header={<><span className="bold">Децентрализация играет важную роль в криптовалютных системах по нескольким причинам:</span></>}
                            dotsColor={'black'}
                            list={[
                                <>
                                    <TextWithTitle text={[
                                        <><span className="bold">Безопасность</span>: децентрализованная сеть менее подвержена атакам, так как злоумышленнику потребуется контролировать большую часть узлов, чтобы изменить данные или провести мошеннические операции.</>,
                                        <>Это делает криптовалюты более устойчивыми к взломам.</>
                                    ]}/>
                                </>,
                                <>
                                    <TextWithTitle text={[
                                        <><span className="bold">Инклюзивность</span>: децентрализованные сети доступны для всех пользователей, независимо от их местоположения или финансового положения.</>,
                                        <>Это позволяет более широкому кругу людей использовать финансовые услуги и участвовать в экономике.</>
                                    ]}/>
                                </>,
                                <>
                                    <TextWithTitle text={[
                                        <><span className="bold">Устойчивость</span>: децентрализация уменьшает риск выхода из строя всей сети из-за отказа одного или нескольких узлов.</>,
                                        <>Сеть продолжает функционировать, пока есть достаточное количество работающих узлов.</>
                                    ]}/>
                                </>,
                                <>
                                    <TextWithTitle text={[
                                        <><span className="bold">Инновации</span>: децентрализация стимулирует инновации, так как она позволяет разработчикам создавать новые децентрализованные приложения и сервисы на основе блокчейна, без необходимости получения разрешения от центральных властей.</>,
                                    ]}/>
                                </>,
                                <>
                                    <TextWithTitle text={[
                                        <><span className="bold">Прозрачность</span>: децентрализованный характер блокчейна обеспечивает прозрачность транзакций.</>,
                                        <>Любой участник сети может проверить транзакции и историю операций, что создает доверие и уменьшает риски фальсификации данных.</>,
                                    ]}/>
                                </>,
                            ]}

                        />
                    </Reveal>

                    <Sizebox height={100} />
                    <Reveal>
                        <ImageWithText 
                            imageText='Основные криптовалюты и их особенности'
                            color={'white'}
                            img={'https://dev.gamblingnews.com/wp-content/uploads/2023/01/pile-of-cryptocurrencies-on-a-black-surface.jpeg'}
                        />
                    </Reveal>
                    <Sizebox height={60} />

                    <Reveal>
                        <NotNumberedDots 
                            header={<><span className="bold">Децентрализация играет важную роль в криптовалютных системах по нескольким причинам:</span></>}
                            dotsColor={'black'}
                            list={[
                                <>
                                    <TextWithTitle text={[
                                        <><span className="bold">Bitcoin (BTC)</span>: Первая и самая известная криптовалюта, созданная Сатоши Накамото в 2009 году.</>,
                                        <>Она предназначена для электронных платежей.</>,
                                        <>Однако она не обладает сложными смарт-контрактами, что ограничивает её функциональность по сравнению с некоторыми другими криптовалютами.</>,
                                    ]}/>
                                    <Sizebox height={20} />
                                    <TextAndLink
                                        text={'Создатель Bitcoin Сатоши Накамото'}
                                        link={'https://bitcoinwiki.org/ru/wiki/satoshi-nakamoto'} 
                                    />
                                </>,
                                <>
                                    <TextWithTitle text={[
                                        <><span className="bold">Ethereum (ETH)</span>: Созданная Виталием Бутериным в 2015 году, Ethereum – это платформа для создания смарт-контрактов и децентрализованных приложений.</>,
                                        <>Она отличается от Bitcoin тем, что поддерживает более сложные программные коды, что позволяет разработчикам создавать разнообразные децентрализованные приложения, такие как децентрализованные финансовые сервисы, игры и даже целые организации.</>
                                    ]}/>
                                    <Sizebox height={20} />
                                    <TextAndLink
                                        text={'Создатель Ethereum Виталик Бутерин'}
                                        link={'https://pro.rbc.ru/demo/620ba9e09a794787baad8bc6'} 
                                    />
                                </>,
                                <>
                                    <TextWithTitle text={[
                                        <><span className="bold">USDТ– Стейблкойн</span>, то есть криптовалюта, цена которой привязана к традиционным фиатным валютам, таким как доллар США.</>,
                                        <>Это позволяет использовать USDT в качестве стабильного средства обмена и хранения ценности в криптовалютном мире.</>
                                    ]}/>
                                </>,
                                <>
                                    <TextWithTitle text={[
                                        <><span className="bold">Monero (XMR)</span>: Криптовалюта с акцентом на конфиденциальность и анонимность.</>,
                                        <>Она использует различные технологии, такие как кольцевые подписи и скрытые адреса, чтобы обеспечивать приватность транзакций и участников.</>,
                                    ]}/>
                                </>,
                                <>
                                    <TextWithTitle text={[
                                        <><span className="bold">Litecoin (LTC)</span>: Создан Charlie Lee в 2011 году, Litecoin был задуман как «серебро» к «золоту» Bitcoin.</>,
                                        <>Он имеет более короткое время генерации блока и более легковесный алгоритм для майнинга, что делает его более быстрым и доступным для широкой аудитории.</>,
                                    ]}/>
                                </>,
                            ]}

                        />
                    </Reveal>
                    <Sizebox height={100} />

                    <Reveal>
                        <HeaderWithLine header="Давайте сделаем небольшое отступление, и взглянем на краткую историю, например, BITCOIN и ETHEREUM" />
                    </Reveal>
                    <Sizebox height={60} />
                    
                    <Reveal>
                        <ImageWithText 
                            imageText="ИСТОРИЯ – НАЗНАЧЕНИЕ - КАК РАБОТАЕТ"
                            color="white"
                            img="https://wallpapersmug.com/download/2560x1024/4c063c/bitcoin-crypto-currency.jpg"
                        />
                    </Reveal>
                    <Sizebox height={40} />
                    <Reveal>
                        <TextWithTitle 
                            text={[
                                <>Биткойн, созданный под псевдонимом Сатоши Накамото, был представлен <span className="bold">в 2008 году</span> через белую бумагу «Bitcoin: A Peer-to-Peer Electronic Cash System».</>,
                                <>В <span className="bold">январе 2009</span> года был выпущен первый блок цепочки блоков биткойна, начиная с генезис-блока. Это была первая криптовалюта, основанная на технологии блокчейн, которая обеспечивает децентрализованный и безопасный способ записи транзакций.</>,
                                <>Сначала биткойн использовался в основном энтузиастами криптографии и технологий. В течение нескольких лет цена биткойна была низкой, но с течением времени его популярность и цена начали расти. Интерес со стороны инвесторов и институциональных игроков также способствовал увеличению цены.</>,
                                <><span className="bold">В 2017 году</span> биткойн привлек большое внимание, достигнув исторического максимума около <span className="bold">20 000 долларов</span> за монету. Однако после этого произошло значительное падение цены, и биткойн столкнулся с волатильностью.</>,
                                <>С тех пор биткойн продолжает колебаться в цене, но он остается самой известной и широко используемой криптовалютой. Его технология блокчейн стала исходной точкой для разработки многих других криптовалют и блокчейн-приложений.</>,
                                <>Со временем он также получил поддержку от некоторых компаний и финансовых институций.</>,
                            ]}
                        />
                    </Reveal>

                    <Sizebox height={120} />
                    <Reveal>
                        <ImageWithText 
                            imageText="ETHEREUM: ЧТО ЭТО ТАКОЕ, ГЛАВНОЕ ЕГО ОТЛИЧИЕ ОТ BITCOIN"
                            color="white"
                            img="https://s3.tradingview.com/timeline/1-min_83653730.jpg"
                        />
                    </Reveal>
                    <Sizebox height={40} />
                    <Reveal>
                        <TextWithTitle 
                            text={[
                                <><span className="bold">Ethereum</span> – это платформа и криптовалюта, созданные Виталием Бутериным в 2015 году. Она разработана как децентрализованная среда для создания и выполнения смарт-контрактов и децентрализованных приложений (DApps). </>,
                                <>Отличие Ethereum от Bitcoin заключается в его функциональности.</>,
                                <>Ethereum позволяет разработчикам создавать более сложные программные коды, что является предпосылкой создания автономных приложений с автоматизированными функциями.</>,
                                <>В смарт-контрактах Ethereum можно встроить различные условия, при выполнении которых будет автоматически инициирована соответствующая операция.</>,
                                <>Например, можно создать смарт-контракт для автоматической выплаты страхового возмещения при определенных условиях. Эта способность делает Ethereum более гибким для создания разнообразных децентрализованных приложений.</>,
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
                            CheckCurrentChapter(1);
                        }}/>
                    </Reveal>
    
                </LessonPage>)
            case 2: 
                return (<LessonPage name={'Как использовать криптовалюты?'} lecturer={'Оразбек Рашид'}>
                    <Sizebox height={28} />

                    <Reveal>
                        <HeaderWithLine header="Что такое криптовалюты и как они работают?" />
                    </Reveal>
                    <Sizebox height={60} />

                    <Reveal>
                        <Report_Warning 
                            text={`<span className="bold">Криптовалюты</span> представляют собой цифровые активы, использующие криптографию для обеспечения безопасности и подтверждения транзакций, а также контроля над созданием новых единиц.\n
                            Они функционируют в сети компьютеров и серверов, что обеспечивает их <span className="bold">децентрализованность</span> и <span className="bold">независимость</span> от центральных учреждений, таких как банки или правительства.\n
                            Криптовалюты позволяют пользователям осуществлять денежные переводы и хранить их в цифровой форме.
                            `}
                        />
                    </Reveal>
                    <Sizebox height={80} />

                    <Reveal>
                        <Centered>
                            <RandomH2 
                                text={'Основные термины и понятия'}
                            />
                        </Centered>
                    </Reveal>
                    <Sizebox height={50} />

                    <Reveal>
                        <TextWithTitle 
                            text={[
                                <><span className="bold">Блокчейн</span> - это цепочка блоков, каждый из которых содержит записи о транзакциях.</>,
                                'Каждый блок ссылается на предыдущий блок, создавая непрерывную цепочку.',
                                'Блокчейн обеспечивает надежность и прозрачность записей, так как изменение одного блока требует изменения всех последующих блоков, что затруднительно исключает манипуляции с данными.'
                            ]}
                        />
                    </Reveal>

                    <Sizebox height={50} />

                    <Reveal>
                        <TextWithTitle 
                            text={[
                                <><span className="bold">Майнинг</span> - это процесс проверки и добавления новых транзакций в блокчейн.</>,
                                'Майнеры используют вычислительные ресурсы для решения сложных криптографических задач. Когда задача решена, майнер добавляет новый блок с подтвержденными транзакциями в блокчейн и получает вознаграждение в виде криптовалюты.',
                            ]}
                        />
                    </Reveal>

                    <Sizebox height={50} />

                    <Reveal>
                        <TextWithTitle 
                            text={[
                                <><span className="bold">Криптовалютный кошелек</span> - это программное или аппаратное решение для хранения, отправки и получения криптовалют.</>,
                                'В кошельке хранятся публичные и приватные ключи.',
                                'Публичный ключ используется для получения средств, а приватный ключ – для подписи транзакций.',
                            ]}
                        />
                    </Reveal>

                    <Sizebox height={50} />

                    <Reveal>
                        <TextWithTitle 
                            text={[
                                <><span className="bold">Приватный и публичный ключи:</span></>,
                                <><span className="italic">Приватный ключ</span> – это уникальная строка символов, которая используется для подписи транзакций кошелька.</>,
                                <><span className="italic">Публичный ключ</span> – это адрес кошелька, который можно раскрывать для получения средств.</>,
                            ]}
                        />
                    </Reveal>

                    <Sizebox height={100} />

                    <Reveal>
                        <HeaderWithLine header="Как работает блокчейн?" />
                    </Reveal>
                    <Sizebox height={60} />

                    
                    <Reveal>
                        <RandomParapraph>
                            <span className="bold">Блокчейн</span>  – это распределенная база данных, хранящая информацию о транзакциях и других данных в виде блоков. Каждый блок содержит:
                        </RandomParapraph>
                    </Reveal>
                    <Sizebox height={20}/>
                    <Reveal>
                        <NotNumberedDots 
                            dotsColor={'black'}
                            list={[
                                <><span className="bold">Хэш</span> предыдущего блока, что обеспечивает связь между блоками;</>,
                                <><span className="bold">Транзакции или другие данные.</span></>
                            ]}
                        />
                    </Reveal>
                    <Sizebox height={20}/>
                    <Reveal>
                        <TextWithTitle 
                            text={[
                                <>Новые транзакции отправляются в сеть узлов. Майнеры конкурируют за решение криптографических задач, чтобы создать новый блок. Как только задача решена, новый блок добавляется в цепочку блоков. Этот процесс обеспечивает безопасность и надежность, так как изменение одного блока потребует пересчета всей цепочки, что практически невозможно.</>,
                                <>Благодаря распределенной природе блокчейна, нет единого пункта отказа, и сеть продолжает функционировать даже при отказе нескольких узлов. Это обеспечивает надежную и устойчивую среду для проведения транзакций и хранения данных.</>,
                            ]}
                        />
                    </Reveal>

                    <Sizebox height={100} />

                    <Reveal>
                        <HeaderWithLine header="Что такое децентрализация и почему она важна?" />
                    </Reveal>
                    <Sizebox height={60} />

                    <Reveal>
                        <TextWithTitle 
                            text={[
                                <><span className="bold">Децентрализация </span>– это принцип, при котором власть, контроль и решения распределены между множеством участников или узлов, вместо того чтобы быть сосредоточенными в одном центре.</>,
                                'В контексте криптовалют и блокчейна, децентрализация означает отсутствие центрального контроля над сетью или валютой.',
                                'Это достигается путем распределения данных и функций между множеством участников, называемых узлами, которые работают вместе для поддержания сети.'
                            ]}
                        />
                    </Reveal>
                    <Sizebox height={60} />

                    <Reveal>
                        <NotNumberedDots 
                            header={<><span className="bold">Децентрализация играет важную роль в криптовалютных системах по нескольким причинам:</span></>}
                            dotsColor={'black'}
                            list={[
                                <>
                                    <TextWithTitle text={[
                                        <><span className="bold">Безопасность</span>: децентрализованная сеть менее подвержена атакам, так как злоумышленнику потребуется контролировать большую часть узлов, чтобы изменить данные или провести мошеннические операции.</>,
                                        <>Это делает криптовалюты более устойчивыми к взломам.</>
                                    ]}/>
                                </>,
                                <>
                                    <TextWithTitle text={[
                                        <><span className="bold">Инклюзивность</span>: децентрализованные сети доступны для всех пользователей, независимо от их местоположения или финансового положения.</>,
                                        <>Это позволяет более широкому кругу людей использовать финансовые услуги и участвовать в экономике.</>
                                    ]}/>
                                </>,
                                <>
                                    <TextWithTitle text={[
                                        <><span className="bold">Устойчивость</span>: децентрализация уменьшает риск выхода из строя всей сети из-за отказа одного или нескольких узлов.</>,
                                        <>Сеть продолжает функционировать, пока есть достаточное количество работающих узлов.</>
                                    ]}/>
                                </>,
                                <>
                                    <TextWithTitle text={[
                                        <><span className="bold">Инновации</span>: децентрализация стимулирует инновации, так как она позволяет разработчикам создавать новые децентрализованные приложения и сервисы на основе блокчейна, без необходимости получения разрешения от центральных властей.</>,
                                    ]}/>
                                </>,
                                <>
                                    <TextWithTitle text={[
                                        <><span className="bold">Прозрачность</span>: децентрализованный характер блокчейна обеспечивает прозрачность транзакций.</>,
                                        <>Любой участник сети может проверить транзакции и историю операций, что создает доверие и уменьшает риски фальсификации данных.</>,
                                    ]}/>
                                </>,
                            ]}

                        />
                    </Reveal>

                    <Sizebox height={100} />
                    <Reveal>
                        <ImageWithText 
                            imageText='Основные криптовалюты и их особенности'
                            color={'white'}
                            img={'https://dev.gamblingnews.com/wp-content/uploads/2023/01/pile-of-cryptocurrencies-on-a-black-surface.jpeg'}
                        />
                    </Reveal>
                    <Sizebox height={60} />

                    <Reveal>
                        <NotNumberedDots 
                            header={<><span className="bold">Децентрализация играет важную роль в криптовалютных системах по нескольким причинам:</span></>}
                            dotsColor={'black'}
                            list={[
                                <>
                                    <TextWithTitle text={[
                                        <><span className="bold">Bitcoin (BTC)</span>: Первая и самая известная криптовалюта, созданная Сатоши Накамото в 2009 году.</>,
                                        <>Она предназначена для электронных платежей.</>,
                                        <>Однако она не обладает сложными смарт-контрактами, что ограничивает её функциональность по сравнению с некоторыми другими криптовалютами.</>,
                                    ]}/>
                                    <Sizebox height={20} />
                                    <TextAndLink
                                        text={'Создатель Bitcoin Сатоши Накамото'}
                                        link={'https://bitcoinwiki.org/ru/wiki/satoshi-nakamoto'} 
                                    />
                                </>,
                                <>
                                    <TextWithTitle text={[
                                        <><span className="bold">Ethereum (ETH)</span>: Созданная Виталием Бутериным в 2015 году, Ethereum – это платформа для создания смарт-контрактов и децентрализованных приложений.</>,
                                        <>Она отличается от Bitcoin тем, что поддерживает более сложные программные коды, что позволяет разработчикам создавать разнообразные децентрализованные приложения, такие как децентрализованные финансовые сервисы, игры и даже целые организации.</>
                                    ]}/>
                                    <Sizebox height={20} />
                                    <TextAndLink
                                        text={'Создатель Ethereum Виталик Бутерин'}
                                        link={'https://pro.rbc.ru/demo/620ba9e09a794787baad8bc6'} 
                                    />
                                </>,
                                <>
                                    <TextWithTitle text={[
                                        <><span className="bold">USDТ– Стейблкойн</span>, то есть криптовалюта, цена которой привязана к традиционным фиатным валютам, таким как доллар США.</>,
                                        <>Это позволяет использовать USDT в качестве стабильного средства обмена и хранения ценности в криптовалютном мире.</>
                                    ]}/>
                                </>,
                                <>
                                    <TextWithTitle text={[
                                        <><span className="bold">Monero (XMR)</span>: Криптовалюта с акцентом на конфиденциальность и анонимность.</>,
                                        <>Она использует различные технологии, такие как кольцевые подписи и скрытые адреса, чтобы обеспечивать приватность транзакций и участников.</>,
                                    ]}/>
                                </>,
                                <>
                                    <TextWithTitle text={[
                                        <><span className="bold">Litecoin (LTC)</span>: Создан Charlie Lee в 2011 году, Litecoin был задуман как «серебро» к «золоту» Bitcoin.</>,
                                        <>Он имеет более короткое время генерации блока и более легковесный алгоритм для майнинга, что делает его более быстрым и доступным для широкой аудитории.</>,
                                    ]}/>
                                </>,
                            ]}

                        />
                    </Reveal>
                    <Sizebox height={100} />

                    <Reveal>
                        <HeaderWithLine header="Давайте сделаем небольшое отступление, и взглянем на краткую историю, например, BITCOIN и ETHEREUM" />
                    </Reveal>
                    <Sizebox height={60} />
                    
                    <Reveal>
                        <ImageWithText 
                            imageText="ИСТОРИЯ – НАЗНАЧЕНИЕ - КАК РАБОТАЕТ"
                            color="white"
                            img="https://wallpapersmug.com/download/2560x1024/4c063c/bitcoin-crypto-currency.jpg"
                        />
                    </Reveal>
                    <Sizebox height={40} />
                    <Reveal>
                        <TextWithTitle 
                            text={[
                                <>Биткойн, созданный под псевдонимом Сатоши Накамото, был представлен <span className="bold">в 2008 году</span> через белую бумагу «Bitcoin: A Peer-to-Peer Electronic Cash System».</>,
                                <>В <span className="bold">январе 2009</span> года был выпущен первый блок цепочки блоков биткойна, начиная с генезис-блока. Это была первая криптовалюта, основанная на технологии блокчейн, которая обеспечивает децентрализованный и безопасный способ записи транзакций.</>,
                                <>Сначала биткойн использовался в основном энтузиастами криптографии и технологий. В течение нескольких лет цена биткойна была низкой, но с течением времени его популярность и цена начали расти. Интерес со стороны инвесторов и институциональных игроков также способствовал увеличению цены.</>,
                                <><span className="bold">В 2017 году</span> биткойн привлек большое внимание, достигнув исторического максимума около <span className="bold">20 000 долларов</span> за монету. Однако после этого произошло значительное падение цены, и биткойн столкнулся с волатильностью.</>,
                                <>С тех пор биткойн продолжает колебаться в цене, но он остается самой известной и широко используемой криптовалютой. Его технология блокчейн стала исходной точкой для разработки многих других криптовалют и блокчейн-приложений.</>,
                                <>Со временем он также получил поддержку от некоторых компаний и финансовых институций.</>,
                            ]}
                        />
                    </Reveal>

                    <Sizebox height={120} />
                    <Reveal>
                        <ImageWithText 
                            imageText="ETHEREUM: ЧТО ЭТО ТАКОЕ, ГЛАВНОЕ ЕГО ОТЛИЧИЕ ОТ BITCOIN"
                            color="white"
                            img="https://s3.tradingview.com/timeline/1-min_83653730.jpg"
                        />
                    </Reveal>
                    <Sizebox height={40} />
                    <Reveal>
                        <TextWithTitle 
                            text={[
                                <><span className="bold">Ethereum</span> – это платформа и криптовалюта, созданные Виталием Бутериным в 2015 году. Она разработана как децентрализованная среда для создания и выполнения смарт-контрактов и децентрализованных приложений (DApps). </>,
                                <>Отличие Ethereum от Bitcoin заключается в его функциональности.</>,
                                <>Ethereum позволяет разработчикам создавать более сложные программные коды, что является предпосылкой создания автономных приложений с автоматизированными функциями.</>,
                                <>В смарт-контрактах Ethereum можно встроить различные условия, при выполнении которых будет автоматически инициирована соответствующая операция.</>,
                                <>Например, можно создать смарт-контракт для автоматической выплаты страхового возмещения при определенных условиях. Эта способность делает Ethereum более гибким для создания разнообразных децентрализованных приложений.</>,
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
                            CheckCurrentChapter(1);
                        }}/>
                    </Reveal>
    
                </LessonPage>)
        }
    }

    return ( 
        <div className="crypto-course">
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

export default CryptoCourse;


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
                <Module
                    moduleId={1}
                    isOpen={currentModule === 1}
                    handleModuleOpen={handleModuleOpen}
                    name={'Общая характеристика национальной системы ПОД/ФТ'}
                >
                    <Session
                        session={{
                            id: 1,
                            group: 'Введение',
                            name: 'Введение в криптовалюты',
                            progress: 0,
                        }}
                        handleSessionClick={handleSessionClick}
                        isActive={1 === activeSessionId}
                    />
                    <Session
                        session={{
                            id: 2,
                            group: 'Введение',
                            name: 'Как использовать криптовалюты?',
                            progress: 0,
                        }}
                        handleSessionClick={handleSessionClick}
                        isActive={2 === activeSessionId}
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
                <div className='lector'>
                    <img src={lectorImage} alt="lector-name" />
                    <p>{lecturer}</p>
                </div>
            </div>
            {children}
        </>
    ); 
}