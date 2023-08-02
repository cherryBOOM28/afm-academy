import React from 'react';
import cl from './Management.module.css';
import Header from '../../../components/header/Header';
import firstDirector from '../../../assets/images/1.svg';
import secondDirector from '../../../assets/images/2.svg';
import thirdDirector from '../../../assets/images/3.svg';
import forthDirector from '../../../assets/images/4.svg';
import fifthDirector from '../../../assets/images/5.svg';
import Footer from '../../../components/footer/Footer';

function Management() {
    return (
        <div className={cl.managementWrapper}>
            <div className={cl.container}>
                <Header />
                <h1 className={cl.headline}>Совет директоров</h1>
                <div className={cl.boardOfDirectors}>
                    <div className={cl.director}>
                        <img src={firstDirector} alt="" />
                        <p className={cl.name}>Элиманов Жанат Калдыбекович</p>
                        <p className={cl.post}>Председатель Агентства Республики Казахстан по финансовому мониторингу, председатель 
                            Совета директоров</p>
                    </div>
                    <div className={cl.director}>
                        <img src={secondDirector} alt="" />
                        <p className={cl.name}>Садырбеков Габит Амангельдиевич</p>
                        <p className={cl.post}>Первый заместитель Председателя Агентства Республики Казахстан по финансовому мониторингу, член Совета директоров</p>
                    </div>
                    <div className={cl.director}>
                        <img src={thirdDirector} alt="" />
                        <p className={cl.name}>Мырзахметов Кайрат Жаксыкулович</p>
                        <p className={cl.post}>Заместитель председателя Комитета государственного имущества и приватизации Министерства финансов Республики Казахстан, член Совета директоров от уполномоченного органа по государственному имуществу</p>
                    </div>
                    <div className={cl.director}>
                        <img src={forthDirector} alt="" />
                        <p className={cl.name}>Кушимов Нурхат Манасович</p>
                        <p className={cl.post}>Генеральный директор Комитета МФЦА по регулированию финансовых услуг, независимый директор</p>
                    </div>
                    <div className={cl.director}>
                        <img src={fifthDirector} alt="" />
                        <p className={cl.name}>Хусаинов Галим Абильжанович</p>
                        <p className={cl.post}>Член Совета директоров, независимый директор АО «Bereke Bank», независимый директор.</p>
                    </div>
                </div>                
            </div>
            <Footer />
        </div>
    );
}

export default Management;