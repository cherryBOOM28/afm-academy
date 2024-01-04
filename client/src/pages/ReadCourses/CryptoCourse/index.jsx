import React, { useState, useEffect, Children } from 'react';

import './style.scss'

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

                    {/* <FancyList 
                        list={[
                            'ЧТО ТАКОЕ КРИПТОВАЛЮТА?',
                            'ЧТО ТАКОЕ КРИПТОВАЛЮТА?',
                            'ЧТО ТАКОЕ КРИПТОВАЛЮТА?',
                            'ЧТО ТАКОЕ КРИПТОВАЛЮТА?',
                        ]}
                    />

                    <FlexBoxes 
                        data={[
                            `Цифровая форма наличных денег. С её помощью можно рапоряжаться как с деньгами, которые мы привыкли видеть`,
                            'Не принадлежит какой-либо организации, является децентрализованной',
                            `Для использования достаточно иметь мобильное приложение`,
                            `Для использования достаточно иметь мобильное приложение`,
                            `Для использования достаточно иметь мобильное приложение`,
                        ]}
                    />

                    <Sizebox height={40} />

                    <FlexRow 
                        data={[
                            { icon: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAgVBMVEX///8AAAAwMDClpaX5+fn8/Pzs7Ozd3d03Nzf6+vq9vb3v7+/19fUODg7n5+eDg4NhYWFpaWnLy8sjIyOxsbFmZmZSUlI8PDzT09NZWVmbm5sbGxupqamNjY3GxsZLS0tycnJ8fHwgICAWFhaAgIApKSmKioqWlpa1tbVFRUVNTU39c+xuAAAEV0lEQVR4nO2d6XKjQAyEZ2wwmMvgE2OMjeP7/R9wk01qQ/Mbaqp6+3sCqRykkdRSjBFCCCGEEEIIIYQQQgghhBBCCCGE+B9JmsC1CePiR+GmdG3EqJQ7a7eN79qM8chO9pPd2nNtyFh4e/uX24PVxcL+kBaJa1tG4W5/2cWurRmB0gKMWeOILj5d2zMC0Qe4eHRtzwh8pcMOBeHHmOVp18Ut4cc4u666Lr4avsyYVGHXxXDNlxm956vr4u0xc23R4PjLfdfFtM1cWzQ8wRlCKmM9lR0hpL4j1wYNT7KGXzGcujZoePwl/IqH1rVBI5Bd4GfcEhb+CYRUuyMMqfM7uLhqXBs0Ak9w0Vau7RmB5QRcXPC9Uk2wBRfPhB9j1kJZnJd8MXX2uHVdPEV8f6leDfXUpOarp0z07rqYEtZTptxAvGkJmxsBJv986dqg4YlrcPG1dm3Q8PgRPuEerg0agRJCatryZQ0T5PAzbgjfN7MFuPgm7N94U3BxQti/MRFW/pT11AlcvBMOb4ICXDwTvm9mC6in9oTvm3kF9VQY8ZWMZg3Dm5Sxnmow+R8Jk3/Q8sebB7i4J2ymJjWE1B1lPQXKjVtFWGyUEG8+FoT9mwzjTUEYbxJUip0I3zdmCpPUC2M91aBSbEoYbwKcpDLGmxjFKTlhvDH3Q9fFkLB/Y6Y4SWWspyKcpNaEzY0Smxt3wnoqw2ZqQfgxxhWIb9+E9ZS3huTPuFzkN5D8bw/CeIPN1AOj+HZ+7Fb+6f7nfTPhIcS5hp18h1TLTETvoX347B7aImH30BbsHp5Kcg+/FA2ubRiTwyLhjqXhdyd8SkNdb3Db5kn3+m72XQ/zJVs7I6mhfuKbKsYgmE7vdJ3T7NytKw5Tuul+AFrpC19HcQldmhXdJ2hwYXFClyRMCw7mrs0ZHA863imfQjoAffSNbkrqNbg2RNfsTupuEE03dEE0g/bhZUHXIcXjBJOKrcvtL0Ez9HqyPdS8J4i+t3S1koeHXvhiTNKCPoEvxmQoo+GrlXDPy/Jdk3xCw4nwfB1KEkO2LGh8VOqf564NGpoMV7srNgf9Jd4Ce7LFGG8NErYTnWomrrppPuU7A4bSrsOVLkuUUCutKrqmdgQPtQmfqmsKY5cXXYyZo9SZT80do0L2Slcrlb1aie4limtqlu+SEqp/L3Rp3qCC+0QXY7LeCSW6NF/25kps/Rg/wrlS7dqgoemtM7/oBmcZrqTznfjqnRXgO9PWOw3Btz2xxtteNVs/Zl5Bz3dHF2N6Z71yuodab5uQrx/T2wjlO+fZjzFstZJfwTuG7+xcfIW/UD4BUO9CQkH3CeKJ8pTuRLmHZ1hvdCLDGE9b8p1+6m3U850LTDDNF3Q9XzMDmeiCrlb6pPkdTFCeJjOdf9jxohvO/+D/xFK+hax/fB8n4+vHdMjO1vItZAFBThpjfvFoP0EhhBBCCCGEEEIIIYQQQgghhBBCCCGEEELQ8Ac8Xj6nD3B4AwAAAABJRU5ErkJggg==', title: 'Свобода от ограничении', desc: 'Вы можете использовать криптовалюту беспрепятственно. Централизованные платежные сервисы в свою очередь могут замораживать учетные записи или препятствовать совершению транзакций.' },
                            { icon: HackerIcon, title: 'Устойчива к взлому', desc: 'Устройство сети делает ее устойчивой к атакам хакеров и других злоумышленников' },
                            { icon: PaymentIcon, title: 'Дешевый и быстрый способ оплаты', desc: 'Человек на другом конце света может получить от вас средства в считанные секунды. Комиссия за транзакцию значительно меньше, чем комиссия за международный денежный перевод.' },
                        ]}
                    />

                    <DotsOnRoad
                        data={[
                            { title: 'Seed-фраза из 12-24  слов английского языка', desc: 'abort bird cat fly estimate came eight city map study agency space' },
                            { title: 'Приватный ключ', desc: '5JPeWYZx922hXi49Lg2RIPWLIqcmDGS9YegMNgANvx8cJa6kNK8' },
                            { title: 'Публичный ключ', desc: '03D7A51212E4EEFE40C72B201E74AA3557DEFD940ACESC3E107687577CD45FF962' },
                            { title: 'Адрес кошелька', desc: '1DcEeFRGc4mfRLXWiVZySpmmXk7SsVLfNO' },
                        ]}
                    /> */}

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
                        <TextWithTitle 
                            text={[
                                <>В мире современных финансов <span className="bold">криптовалюты</span> представляют собой одну из самых <span className="bold">инновационных</span> и <span className="bold">интересных</span> областей.</>,
                                <>Их использование не ограничивается только спекуляциями на биржах – <span className="bold">криптовалюты</span> также могут быть использованы <span className="bold">для реальных финансовых операций</span>, покупок и даже создания собственных приложений на основе технологии блокчейн.</>,
                                <>В этой части обучения мы рассмотрим, как начать использовать криптовалюты, включая создание кошелька, безопасное хранение средств и работу с транзакциями</>
                            ]}
                        />
                    </Reveal>
                    <Sizebox height={60} />
                    
                    

                    <Reveal>
                        <Centered>
                            <RandomH2>
                                КАК СОЗДАТЬ КРИПТОВАЛЮТНЫЙ КОШЕЛЕК:
                            </RandomH2>
                        </Centered>
                    </Reveal>
                    <Sizebox height={40} />

                    <Reveal>
                        <TextWithTitle 
                            text={[
                                <><span className="bold">NB!</span> (Nota bene – обратите внимание)</>,
                                <>Прежде чем начать использовать криптовалюты, вам понадобится специальное место для их хранения – <span className="bold">криптовалютный кошелек.</span></>,
                                <>Существует несколько видов кошельков, каждый из которых имеет свои особенности и уровни безопасности:</>
                            ]}
                        />
                    </Reveal>
                    <Sizebox height={30} />

                    <Reveal>
                        <NumberedDots 
                            dotsColor={'white'}
                            list={[
                                <>
                                    <TextWithTitle text={[
                                        <><span className="bold">Онлайн-кошельки</span>: это веб-приложения, которые позволяют вам хранить и управлять своими криптовалютами через интернет.</>,
                                        <>Они удобны в использовании, но могут быть менее безопасными из-за возможности взлома.</>
                                    ]}/>
                                </>,
                                <>
                                    <TextWithTitle text={[
                                        <><span className="bold">Мобильные кошельки</span>: эти приложения можно установить на ваш смартфон и иметь доступ к своим криптовалютам в любое время.</>,
                                        <>Они более удобны, чем онлайн-кошельки, и обычно имеют высокие уровни безопасности.</>
                                    ]}/>
                                </>,
                                <>
                                    <TextWithTitle text={[
                                        <><span className="bold">Аппаратные кошельки</span>: это физические устройства, спроектированные специально для хранения криптовалют.</>,
                                        <>Они обеспечивают наивысший уровень безопасности, так как ваши приватные ключи хранятся офлайн.</>
                                    ]}/>
                                </>,
                                <>
                                    <TextWithTitle text={[
                                        <><span className="bold">Бумажные кошельки</span>: это записи в бумажном виде, на которых написаны ваш публичный и приватный ключи.</>,
                                        <>Они практически не подвержены взлому, но могут быть потеряны или повреждены.</>
                                    ]}/>
                                </>,
                            ]}

                        />
                    </Reveal>
                    <Sizebox height={80} />

                    <Reveal>
                        <TextWithTitle 
                            text={[
                                <><span className="bold">PS</span> (Post scriptum - послесловие).</>,
                                <>Для создания кошелька:</>,
                            ]}
                        />
                    </Reveal>
                    <Sizebox height={30} />
                    <Reveal>
                        <NotNumberedDots 
                            dotsColor={'black'}
                            list={[
                                'следует выбрать подходящий вид необходимого кошелька;',
                                'зарегистрироваться на платформе (в случае онлайн-кошельков);',
                                'или установить приложение (для мобильных кошельков);',
                                'либо приобрести аппаратное устройство;',
                                'или создать бумажный кошелек в соответствии с инструкциями ',
                            ]}

                        />
                    </Reveal>
                    
                    <Sizebox height={40} />
                    <Reveal>
                        <TextAndLink 
                            text='Генератор Биткоин кошельков на стороне клиента с открытым исходным кодом'
                            link={'https://www.bitaddress.org/bitaddress.org-v3.3.0-SHA256-dec17c07685e1870960903d8f58090475b25af946fe95a734f88408cef4aa194.html'}
                        />
                    </Reveal>

                    <Sizebox height={100} />
                    
                    <Reveal>
                        <Centered>
                            <RandomH2>
                                ЧТО ТАКОЕ ТРАНЗАКЦИИ И КАК ОНИ РАБОТАЮТ?
                            </RandomH2>
                        </Centered>
                    </Reveal>
                    <Sizebox height={40} />
                    <Reveal>
                        <TextWithTitle 
                            text={[
                                <>Транзакции – это основной способ передачи криптовалюты между участниками сети.</>,
                                <>В каждой транзакции содержится информация о том, кто отправляет средства, кому и сколько.</>,
                                <>Ключевыми понятиями в контексте транзакций являются:</>
                            ]}
                        />
                    </Reveal>
                    <Sizebox height={30} />
                    <Reveal>
                        <NotNumberedDots 
                            dotsColor={'black'}
                            list={[
                                <><span className="bold">Адрес получателя:</span> это публичный ключ, который уникально идентифицирует адресата транзакции.</>,
                                <><span className="bold">Сумма:</span> это количество криптовалюты, которое вы хотите отправить.</>,
                                <><span className="bold">Комиссия:</span> в большинстве сетей требуется уплатить небольшую комиссию майнерам за обработку транзакции.</>,
                            ]}
                        />
                    </Reveal>
                    <Sizebox height={40} />
                    <Reveal>
                        <TextWithTitle 
                            text={[
                                <>Транзакции начинаются с подписания приватным ключом отправителя. Подписанные данные отправляются в сеть, где майнеры проверяют их и добавляют в новый блок, который включает транзакцию в блокчейн.</>,
                                <>Таким образом, транзакция становится неизменной и доступной для проверки всем участникам сети.</>,
                                <>Ключевыми понятиями в контексте транзакций являются:</>
                            ]}
                        />
                    </Reveal>
                    <Sizebox height={30} />
                    <Reveal>
                        <Report_Warning>
                            Важно понимать, что криптовалютные транзакции не обратимы.
                        </Report_Warning>
                    </Reveal>
                    <Sizebox height={30} />
                    <Reveal>
                        <TextWithTitle 
                            text={[
                                <>Как только транзакция подтверждена и включена в блокчейн, её нельзя отменить.</>,
                                <>Поэтому перед выполнением транзакции рекомендуется внимательно проверить данные и адрес получателя</>,
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
            case 3: 
                return (<LessonPage name={'Юридический статус криптовалют'} lecturer={'Оразбек Рашид'}>
                    <Sizebox height={28} />

                    <Reveal>
                        <HeaderWithLine 
                            header={'В настоящее время криптовалюты стали значимой частью глобальной экономической системы и вызвали интерес у правительств и регуляторов по всему миру.'}
                        />
                    </Reveal>
                    <Sizebox height={40} />
                    <Reveal>
                        <TextWithTitle 
                            text={[
                                <>Однако <span className="bold">юридический статус криптовалют</span> до сих пор остается сложным и многогранным вопросом. </>,
                                'В разных странах существуют разные подходы к регулированию и классификации криптовалют, что создает смешанный набор правил и норм.'
                            ]}
                        />
                    </Reveal>
                    <Sizebox height={100} />
                    
                    <Reveal>
                        <HeaderWithLine 
                            header={'Закон «О цифровых активах»'}
                        />
                    </Reveal>
                    <Sizebox height={40} />
                    <Reveal>
                        <TextWithTitle 
                            text={[
                                'В Республике Казахстан порядок и процесс работы с криптовалютами регламентирован Законом от 6 февраля 2023 года «О цифровых активах», согласно которому цифровым активом считается имущество, созданное в электронно-цифровой форме с присвоением цифрового кода, в том числе с применением средств криптографии и компьютерных вычислений, зарегистрированное и обеспеченное неизменностью информации на основе технологии распределенной формы данных.',
                                'На основании этого же Закона выпуск и оборот необеспеченных цифровых активов, а также деятельность бирж цифровых активов по необеспеченным цифровым активам на территории РК запрещена, за исключением территории Международного финансового центра «Астана»'
                            ]}
                        />
                    </Reveal>
                    <Sizebox height={60} />

                    <Reveal>
                        <TextAndLink
                            text={'Закон «О цифровых активах»'}
                            link={'https://adilet.zan.kz/rus/docs/Z2300000193'}
                        />
                    </Reveal>
                    <Sizebox height={20} />
                    <Reveal>
                        <TextAndLink
                            text={'Положение о МФЦ «Астана»'}
                            link={'https://adilet.zan.kz/rus/docs/Z2300000193'}
                        />
                    </Reveal>
                    <Sizebox height={100} />

                    <Reveal>
                        <HeaderWithLine 
                            header={'ДАВАЙТЕ ПРОВЕДЕМ НЕБОЛЬШОЙ СРАВНИТЕЛЬНЫЙ АНАЛИЗ ЗАКОНОДАТЕЛЬСТВ НЕКОТОРЫХ ЗАРУБЕЖНЫХ СТРАН В СФЕРЕ ЦИФРОВЫХ АКТИВОВ и КАК КРИПТОВАЛЮТЫ КЛАССИФИЦИРУЮТСЯ В РАЗНЫХ ЮРИСДИКЦИЯХ'}
                        />
                    </Reveal>
                    <Sizebox height={60} />
                    <Reveal>
                        <HeaderWithLine 
                            header={'ЗАКОНОДАТЕЛЬСТВО ПО КРИПТОВАЛЮТАМ В НЕКОТОРЫХ СТРАНАХ:'}
                        />
                    </Reveal>
                    <Sizebox height={40} />
                    <Reveal>
                        <TextWithTitle 
                            text={[
                                'Законодательство, регулирующее криптовалюты разнится в разных странах.',
                                <>Некоторыми странами в целях <span className="bold">поддержания инновации</span> и обеспечения защиту <span className="bold">пользователей</span> разработаны и внедрены положительные правовые рамки.</>,
                                <>В то время как другие страны остаются <span className="bold">осторожными</span> и взвешивают плюсы и минусы регулирования.</>
                            ]}
                        />
                    </Reveal>


                    <Sizebox height={100} />
                    <Reveal>
                        <Centered>
                            <RandomH2>
                                ПРИМЕРЫ РАЗЛИЧНЫХ ПОДХОДОВ:
                            </RandomH2>
                        </Centered>
                    </Reveal>
                    <Sizebox height={40} />
                    <Reveal>
                        <NotNumberedDots 
                            dotsColor={'black'}
                            list={[
                                <>
                                    <TextWithTitle text={[
                                        <><span className="bold">В США</span> криптовалюты признаны виртуальной валютой, и их регулирование осуществляется через различные органы, такие как Комиссия по ценным бумагам и биржам (SEC) и Финансовая преступность и борьба с собирательством (FinCEN).</>,
                                        <>Однако регулирование криптовалют разнообразно в зависимости от того, являются ли они ценными бумагами, сырьем или валютой.</>
                                    ]}/>
                                </>,
                                <>
                                    <TextWithTitle text={[
                                        <><span className="bold">Япония</span> является одной из наиболее криптодружелюбных стран, которая создала специальную систему лицензирования для криптовалютных бирж и обеспечивает правовую защиту потребителей.</>,
                                    ]}/>
                                </>,
                                <>
                                    <TextWithTitle text={[
                                        <><span className="bold">Китай</span> ранее был одной из ведущих стран по добыче и использованию криптовалют, но правительство ввело жесткие ограничения на использование и добычу криптовалют из-за беспокойства по поводу финансовой стабильности.</>,
                                    ]}/>
                                </>,
                                <>
                                    <TextWithTitle text={[
                                        <><span className="bold">В Казахстане</span> криптовалюты также получили внимание со стороны правительства.</>,
                                        <>В 2020 году был принят закон «О внесении изменений и дополнений в некоторые законодательные акты Республики Казахстан по вопросам регулирования цифровых активов», который установил правовую основу для использования технологии блокчейн и криптовалют.</>,
                                        <>Этот закон установил определенные правила для криптовалютных операций и обеспечивает некоторую степень защиты для пользователей.</>
                                    ]}/>
                                </>,
                            ]}

                        />
                    </Reveal>
                    
                    
                    <Sizebox height={100} />
                    <Reveal>
                        <Centered>
                            <RandomH2>
                                КЛАССИФИКАЦИЯ КРИПТОВАЛЮТ В РАЗНЫХ ЮРИСДИКЦИЯХ
                            </RandomH2>
                        </Centered>
                    </Reveal>
                    <Sizebox height={40} />
                    <Reveal>
                        <NotNumberedDots 
                            dotsColor={'black'}
                            list={[
                                <>
                                    <TextWithTitle text={[
                                        <><span className="bold">Валюта:</span> в Италии, Германии, Сальвадоре и в других странах криптовалюты классифицируются как <span className="bold">альтернативные формы валюты</span> или <span className="bold">денежные единицы</span>.</>,
                                        <>Это позволяет им использоваться в качестве средства обмена и платежей.</>
                                    ]}/>
                                </>,
                                <>
                                    <TextWithTitle text={[
                                        <><span className="bold">Товар:</span> в Канаде, Новой Зеландии и Австралии криптовалюты рассматриваются как <span className="bold">товары, подобно золоту</span> или <span className="bold">нефти </span>.</>,
                                        'Это может повлечь налогообложение при продаже или использовании криптовалют.'
                                    ]}/>
                                </>,
                                <>
                                    <TextWithTitle text={[
                                        <><span className="bold">Ценные бумаги:</span> в определенных случаях криптовалюты могут рассматриваться как <span className="bold">ценные бумаги</span>, например, в США, особенно если они представляют <span className="bold">инвестиционные возможности</span>.</>,
                                    ]}/>
                                </>,
                                <>
                                    <TextWithTitle text={[
                                        <><span className="bold">Цифровые активы:</span> этот термин также используется для описания криптовалют и других цифровых форм стоимости.</>,
                                        <>Он охватывает широкий спектр виртуальных активов, включая <span className="bold">криптовалюты</span> и <span className="bold">токены</span>, которые могут обозначать <span className="bold">права, акции</span> или <span className="bold">доступ</span> к определенным ресурсам.</>,
                                    ]}/>
                                </>,
                                <>
                                    <TextWithTitle text={[
                                        <><span className="bold">Прочие:</span> существуют и другие классификации, включая «виртуальные активы», «финансовые инструменты» и другие.</>,
                                    ]}/>
                                </>,
                            ]}

                        />
                    </Reveal>
                    <Sizebox height={60} />
                    <Reveal>
                        <TextWithTitle 
                            text={[
                                <><span className="bold">В Казахстане</span> для криптовалют используется термин <span className="bold">«Цифровой актив»</span>, и криптовалюта <span className="bold">не является платежным средством</span>, но <span className="bold">является имуществом.</span></>,
                                'На территории Казахстана утверждены 2 вида цифровых активов:'
                            ]}
                        />
                    </Reveal>
                    <Sizebox height={40} />
                    <Reveal>
                        <NumberedDots 
                            dotsColor={'white'}
                            list={[
                                <>
                                    <span className="bold">обеспеченный цифровой актив</span> – цифровой актив, зарегистрированный посредством цифровой платформы по хранению и обмену обеспеченными цифровыми активами, который удостоверяет права на материальные, интеллектуальные услуги и активы, за исключением денег и ценных бумаг;
                                </>,
                                <>
                                    <span className="bold">необеспеченный цифровой актив</span> – цифровой актив, полученный в информационной системе в виде вознаграждения за участие в поддержании консенсуса в блокчейне и не выражающий чьи-либо денежные обязательства, которыми можно торговать в цифровой форме на бирже цифровых активов.
                                </>,
                            ]}

                        />
                    </Reveal>

                    <Sizebox height={100} />
                    <Reveal>
                        <HeaderWithLine 
                            header={'РИСКИ И ПРОБЛЕМЫ, СВЯЗАННЫЕ С ОТСУТСТВИЕМ ЕДИНОГО ЮРИДИЧЕСКОГО СТАТУСА:'}
                        />
                    </Reveal>
                    <Sizebox height={60} />
                    <Reveal>
                        <NumberedDots 
                            dotsColor={'white'}
                            header={<><span className="bold">Отсутствие единого юридического статуса криптовалют</span> создает ряд рисков и проблем:</>}
                            list={[
                                <><span className="bold">Правовая неопределенность:</span> отсутствие четких и ясных норм и правил может привести к правовой неопределенности, что затрудняет понимание и соблюдение правил.</>,
                                <><span className="bold">Несогласованность:</span> разные юрисдикции могут иметь различные определения и правила для криптовалют, что затрудняет международную деятельность и сотрудничество.</>,
                                <><span className="bold">Уязвимость к мошенничеству:</span> отсутствие единого регулирования может способствовать появлению мошеннических схем и нечестных действий.</>,
                            ]}
                        />
                    </Reveal>

                    <Sizebox height={100} />
                    <Reveal>
                        <HeaderWithLine 
                            header={'РОЛЬ ФАТФ ПРИ РАБОТЕ С ВИРТУАЛЬНЫМИ АКТИВАМИ'}
                        />
                    </Reveal>
                    <Sizebox height={60} />
                    <Reveal>
                        <TextWithTitle 
                            text={[
                                'Группа разработки финансовых мер борьбы с отмыванием денег (ФАТФ) – это межправительственная организация, занимающаяся разработкой мировых стандартов в области борьбы с отмыванием денег и финансированием терроризма.',
                                'Целью ФАТФ является создание эффективных мер и рекомендаций, способствующих противостоянию финансовым преступлениям, а также обеспечение соответствия национальных систем противодействия отмыванию денег и финансированию терроризма (ПОД/ФТ) установленным стандартам.',
                                '40 Рекомендаций ФАТФ: Руководство по противодействию отмыванию денег и финансированию терроризма.',
                                'Основным инструментом ФАТФ являются 40 рекомендаций, охватывающих множество аспектов ПОД/ФТ и регулирования финансовых операций. Эти рекомендации регулярно пересматриваются и обновляются, а в 2021 году были дополнены изменениями, направленными на регулирование финансовой деятельности, связанной с виртуальными активами.'
                            ]}
                        />
                    </Reveal>
                    <Sizebox height={60} />
                    <Reveal>
                        <TextWithTitle 
                            title={'Виртуальные активы и роль ФАТФ'}
                            text={[
                                'Понятие виртуальных активов становится всё более актуальным в современной финансовой панораме. ФАТФ приняла решение включить виртуальные активы в область своих рекомендаций, чтобы гарантировать безопасность и соблюдение стандартов в этой сфере.',
                                'Для этого были внесены изменения в Рекомендацию 15 «Новые технологий», обязывающие провайдеров услуг виртуальных активов подвергаться регулированию, лицензированию или регистрации, а также реализовывать эффективные системы контроля и надзора.',
                                'Провайдеры услуг виртуальных активов (ПУВА) играют важную роль в современной финансовой среде, предоставляя доступ к виртуальным активам, таким как криптовалюты и токены. С их появлением возникла необходимость в установлении регулирования, способного обеспечить безопасность и соблюдение стандартов в этой новой сфере финансовых операций.',
                            ]}
                        />
                    </Reveal>
                    <Sizebox height={60} />
                    <Reveal>
                        <TextAndLink 
                            text={'Группа разработки финансовых мер борьбы с отмыванием денег (ФАТФ)'}
                            link={'https://ru.wikipedia.org/wiki/%D0%93%D1%80%D1%83%D0%BF%D0%BF%D0%B0_%D1%80%D0%B0%D0%B7%D1%80%D0%B0%D0%B1%D0%BE%D1%82%D0%BA%D0%B8_%D1%84%D0%B8%D0%BD%D0%B0%D0%BD%D1%81%D0%BE%D0%B2%D1%8B%D1%85_%D0%BC%D0%B5%D1%80_%D0%B1%D0%BE%D1%80%D1%8C%D0%B1%D1%8B_%D1%81_%D0%BE%D1%82%D0%BC%D1%8B%D0%B2%D0%B0%D0%BD%D0%B8%D0%B5%D0%BC_%D0%B4%D0%B5%D0%BD%D0%B5%D0%B3'}
                        />
                    </Reveal>
                    <Sizebox height={40} />
                    <Reveal>
                        <TextAndLink 
                            text={'40 рекомендаций ФАТФ'}
                            link={'https://www.fatf-gafi.org/content/dam/fatf-gafi/translations/Recommendations/FATF-40-Rec-2012-Russian.pdf.coredownload.inline.pdf'}
                        />
                    </Reveal>

                    <Sizebox height={100} />
                    <Reveal>
                        <HeaderWithLine 
                            header={'KYC и AML: ОСНОВОПОЛАГАЮЩИЕ ПРИНЦИПЫ РЕГУЛИРОВАНИЯ'}
                        />
                    </Reveal>
                    <Sizebox height={60} />
                    <Reveal>
                        <TextWithTitle 
                            text={[
                                <><span className="bold">Принципы идентификации клиентов</span> (KYC) и <span className="bold">мониторинга операций</span> (AML) остаются ключевыми в регулировании финансовых операций, включая виртуальные активы.</>,
                                <><span className="bold">KYC</span> обеспечивает безопасность финансовых операций и предотвращает отмывание денег и финансирование терроризма.</>,
                                <><span className="bold">AML</span> направлен на систематическое отслеживание и анализ финансовых операций для выявления незаконной деятельности.</>,
                            ]}
                        />
                    </Reveal>
                    <Sizebox height={60} />

                    <Reveal>
                        <Centered>
                            <RandomH2>
                                Обязательная отчетность и управление рисками
                            </RandomH2>
                        </Centered>
                    </Reveal>
                    <Sizebox height={40} />
                    <Reveal>
                        <TextWithTitle 
                            text={[
                                'Обязательная отчетность в области виртуальных активов является инструментом для обеспечения прозрачности и контроля.',
                                'Она позволяет регуляторам эффективно противостоять незаконным действиям.',
                                'Управление рисками в сфере виртуальных активов позволяет выявить и снизить потенциальные угрозы, способствуя стабильности и безопасности операций.'
                            ]}
                        />
                    </Reveal>
                    <Sizebox height={60} />

                    <Reveal>
                        <Centered>
                            <RandomH2>
                                Баланс между регулированием и инновациями
                            </RandomH2>
                        </Centered>
                    </Reveal>
                    <Sizebox height={40} />
                    <Reveal>
                        <TextWithTitle 
                            text={[
                                'ФАТФ стремится обеспечить баланс между предотвращением незаконной деятельности и поддержанием инноваций в области криптовалют и виртуальных активов.',
                                'Регулирование направлено не только на обеспечение безопасности, но и на поддержание развития новых технологий и финансовых инструментов.',
                            ]}
                        />
                    </Reveal>
                    <Sizebox height={60} />

                    <Reveal>
                        <Centered>
                            <RandomH2>
                                Заключение
                            </RandomH2>
                        </Centered>
                    </Reveal>
                    <Sizebox height={40} />
                    <Reveal>
                        <TextWithTitle 
                            text={[
                                'Роль ФАТФ в борьбе с отмыванием денег и финансированием терроризма становится особенно актуальной в контексте роста виртуальных активов.',
                                'Принятие Рекомендаций и стандартов ФАТФ позволяет обеспечить безопасность, прозрачность и соблюдение стандартов в области финансовых операций с виртуальными активами, способствуя развитию инноваций в сфере криптовалют.',
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
                    <Session
                        session={{
                            id: 3,
                            group: 'Введение',
                            name: 'Юридический статус криптовалют',
                            progress: 0,
                        }}
                        handleSessionClick={handleSessionClick}
                        isActive={3 === activeSessionId}
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