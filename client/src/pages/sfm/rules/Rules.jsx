import React from 'react';
import cl from './Rules.module.css';
import DefaultHeader from '../../../components/defaultHeader/DefaultHeader';
import Footer from '../../../components/footer/Footer';
import customerImg from '../../../assets/images/customer.svg';
import circleFirst from '../../../assets/images/r1.svg'
import circleSecond from '../../../assets/images/r2.svg'
import circleThird from '../../../assets/images/r3.svg'


function Rules() {
    return (
        <div className={cl.rulesWrapper}>
            <div className={cl.container}>
            <DefaultHeader />
                <h1 className={cl.headline}>Правила внутреннего контроля</h1>
                <p className={cl.text}>
                    Правила внутреннего контроля являются внутренним документом субъекта финансового мониторинга, который регламентирует организационные основы работы, направленные на ПОД/ФТ/ФРОМУ, и устанавливает порядок действий субъектов в целях ПОД/ФТ/ФРОМУ.
                </p>
                <div className={cl.rule}>
                    <div className={cl.line}></div>
                    <p className={cl.ruleText}>
                        В соответствии с п. 3-2 ст. 11 Закона «О противодействии легализации (отмыванию) доходов, добытых преступным путем, и финансированию терроризма» (далее - Закон) Требования к правилам внутреннего контроля в целях противодействия легализации (отмыванию) доходов, полученных преступным путем, финансированию терроризма и финансированию распространения оружия массового уничтожения по видам субъектов финансового мониторинга устанавливаются уполномоченными государственными органами-регуляторами по согласованию с Агентством по финансовому мониторингу.
                    </p>
                </div>
                <p className={cl.text}>
                    Правила внутреннего контроля разрабатываются, принимаются и исполняются субъектами финансового мониторинга с учетом результатов оценки степени подверженности услуг субъектов финансового мониторинга рискам легализации (отмывания) доходов и финансирования терроризма, размера, характера и сложности организации.
                </p>
                <p className={cl.text}>
                    Согласно п.3 ст. 11 Закона в правилах внутреннего контроля субъекта финансового мониторинга должны быть предусмотрены следующие программы: (схема)
                </p>
                <div className={cl.ruleBlocks}>
                    <div className={cl.block}>
                        <p className={cl.blockText}>программа организации внутреннего контроля в целях ПОД/фТ/ФРОМУ</p>
                    </div>
                    <div className={cl.block}>
                        <p className={cl.blockText}>программа управления риском (низкий, высокий уровни риска) ОД/ФТ/ФРОМУ</p>
                    </div>
                    <div className={cl.block}>
                        <p className={cl.blockText}>программа идентификации клиентов</p>
                    </div>
                    <div className={cl.block}>
                        <p className={cl.blockText}>программа мониторинга и изучения операций клиентов</p>
                    </div>
                    <div className={cl.block}>
                        <p className={cl.blockText}>программа подготовки и обучения субъектов финансового мониторинга
                        в сфере ПОД/фТ/фРОМУ</p>
                    </div>
                </div>
                <h1 className={cl.subtitle}>Надлежащая проверка клиентов</h1>
                <div className={cl.customer}>
                    <div className={cl.customerBlock}>
                        <img src={customerImg} alt="customerImg" style={{ height: '160px' }} />
                        <p className={cl.customerText}>Субъекты финансового мониторинга должны принимать меры по надлежащей проверке своих клиентов (их представителей) и бенефициарных собственников в соответствии с законодательством Республики Казахстан о противодействии легализации (отмыванию) доходов, полученных преступным путем, и финансированию терроризма. </p>
                    </div>
                    <p className={cl.text}>в соответствии с п.2 ст.5 Закона «О противодействии легализации (отмыванию) доходов, добытых преступным путем, и финансированию терроризма» субъекты финансового мониторинга осуществляют надлежащую проверку клиентов (их представителей) и бенефициарных собственников в случаях:</p>
                    <div className={cl.customerNumbersContent}>
                        <div className={cl.customerBlock}>
                            <div className={cl.customerNumber}>
                                <img src={circleFirst} alt="circleFirst" className={cl.circleImg} />
                                <p className={cl.numberText}>установления деловых отношений с клиентом;</p>
                            </div>
                            <div className={cl.customerNumber}>
                                <img src={circleSecond} alt="circleSecond" />
                                <p className={cl.numberText}>осуществления операций с деньгами и (или) иным имуществом, в том числе подозрительных операций;</p>
                            </div>
                        </div>
                        <div className={cl.customerNumberThird}>
                            <img src={circleThird} alt="circleThird" />
                            <p className={cl.numberText}>осуществления операций с деньгами и (или) иным имуществом, в том числе подозрительных операций;</p>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default Rules;