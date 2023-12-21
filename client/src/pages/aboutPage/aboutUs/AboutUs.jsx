import React from 'react';
import cl from './AboutUs.module.css';
import DefaultHeader from '../../../components/defaultHeader/DefaultHeader';
import Header from '../../../components/header/Header';
import aboutUsImg from '../../../assets/images/aboutus.png';
import aboutFounderImg from '../../../assets/images/afm.png';
import Footer from '../../../components/footer/Footer';

function AboutUs() {
    return (
        <div className={cl.AboutUsWrapper}>
            <Header dark={true} />

            {/* <div className={cl.container}>
                <DefaultHeader />
            </div> */}
            <div className={cl.aboutUsContent}>
                <div className={cl.academyWrapper}>
                    <div className={cl.container}>
                        <div className={cl.academy}>
                            <div className={cl.academy__text}>
                                <p className={cl.headline}>Об Академии/ AML ACADEMY</p>
                                <p className={cl.academy__p}>Академия финансового мониторинга АML ACADEMY была создана в 2023 году во исполнение Указа Главы государства «Об утверждении Концепции развития финансового мониторинга на 2022-2026 годы», на базе Международной Академии экономики и финансов.</p>
                            </div>
                            <img src={aboutUsImg} alt="aboutUsImg" style={{ height: '' }} />
                        </div>
                    </div>
                </div>
                <div className={cl.container}>
                    <div className={cl.aboutTheFounder}>
                        <img src={aboutFounderImg} alt="aboutTheFoubder" style={{height: '210px'}} />
                        <div className={cl.aboutTheFounder__text}>
                            <p className={cl.headline}>Об акционере</p>
                            <p className={cl.aboutTheFounder__p}>
                                Учредителем Академии является ГУ «Агентство Республики Казахстан по финансовому мониторингу».
                                Агентство Республики Казахстан по финансовому мониторингу является государственным органом, непосредственно подчиненным и подотчетным Президенту Республики Казахстан, осуществляющим руководство в сфере противодействия легализации (отмыванию) доходов, полученных преступным путем, и финансированию терроризма, а также по предупреждению, выявлению, пресечению, раскрытию и расследованию экономических и финансовых правонарушений, отнесенных законодательством Республики Казахстан к ведению этого органа.
                            </p>
                        </div>
                    </div>
                    <div className={cl.purposeOfAcademy}>
                        <p className={cl.headline}>Цель и задачи AML ACADEMY</p>
                        <p className={cl.purposeOfAcademy__text}>Основная цель Академии - предоставление качественных образовательных услуг в сфере противодействия легализации (отмыванию) доходов, добытых преступным путем, и финансированию терроризма (ПОД/ФТ).
                        </p>
                        <p className={cl.subtitle}>Основными задачами Общества являются:</p>
                        <div className={cl.mainTasks}>
                            <div className={cl.MainTask}>
                                <p className={cl.number}>1</p>
                                <p className={cl.tasks__text}>обучение, подготовка и повышение      квалификации с последующей сертификацией на системной основе всех участников национальной системы ПОД/ФТ/ФРОМУ: лиц, представляющих сведения, информации в уполномоченный орган по финансовому мониторингу в соответствии с Законом Республики Казахстан о ПОД/ФТ, сотрудников и работников Агентства, государственных органов, а также сотрудников правоохранительных/специальных государственных органов и судей, занимающихся расследованием и рассмотрением уголовных дел в сфере ПОД/ФТ/ФРОМУ, и других заинтересованных лиц (при заключении соответствующих договоров) (далее – обучающиеся слушатели)
                                </p>
                            </div>
                            <div className={cl.tasks}>
                                <div className={cl.MainTask}>
                                    <p className={cl.number}>2</p>
                                    <p className={cl.tasks__text__small}>совершенствование и дальнейшее развитие деятельности дополнительного образования в сфере ПОД/ФТ/ФРОМУ
                                    </p>
                                </div>
                                <div className={cl.MainTask}>
                                    <p className={cl.number}>3</p>
                                    <p className={cl.tasks__text__middle}>проведение научных, прикладных, аналитических и IT исследований, оценочных мероприятий, методических разработок в целях развития национальной системы ПОД/ФТ/ФРОМУ
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default AboutUs;