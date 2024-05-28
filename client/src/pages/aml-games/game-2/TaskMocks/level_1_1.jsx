import Sizebox from "../../../../components/courseTemplates/common/Sizebox";
import FinishSuccess from "../../components/finish-success";
import GameQuiz from "../../components/quiz";

function Level_1_1() {
    return ( 
        <>
            <h2>Тестирование</h2>
                            
            <GameQuiz 
                questions={[
                    {
                        question: 'Нужно ли вам подавать уведомление?',
                        answers: ['Да', 'Нет']
                    },
                    {
                        question: 'Выберете систему, через которую будете подавать уведомление',
                        answers: ['WEB SFM', 'КГД', 'ЕГОВ(elicense)']
                    }
                ]}
            />

            <Sizebox height={40} />
            
            <h2>Задача 1</h2>
            <div className="vertical-tabs-form-quiz">
                <div>
                    <div className="title">Данные СФМ</div>
                    <div className="inner">
                        <div className="left">
                            <div className="form-item">
                                <label>Фамилия</label>
                                <input type="text" />
                            </div>
                            <div className="form-item">
                                <label>Имя</label>
                                <input type="text" />
                            </div>
                            <div className="form-item">
                                <label>Отчество</label>
                                <input type="text" />
                            </div>
                        </div>
                        <div className="right">
                            <h4>Период осуществления деятельности</h4>
                            <div className="form-item">
                                <label>Дата начала осуществления деятельности:</label>
                                <input type="date" />
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    <div className="title">Адрес объектов</div>
                    <div className="inner">
                        <div className="left">
                            <div className="form-item">
                                <label>Почтовый индекс</label>
                                <input type="text" />
                            </div>
                            <div className="form-item">
                                <label>Место положение</label>
                                <input type="text" />
                            </div>
                            <div className="form-item">
                                <label>Название улицы</label>
                                <input type="text" />
                            </div>
                            <div className="form-item">
                                <label>Номер дома</label>
                                <input type="text" />
                            </div>
                            <div className="form-item">
                                <label>Номер квартиры/дома</label>
                                <input type="text" />
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    <div className="title">Вид субъекта финансового мониторинга</div>
                    <div className="inner">
                        <div className="left">
                            <GameQuiz 
                                questions={[
                                    {
                                        question: 'Выбрать из списка',
                                        answers: [
                                            'независимые специалисты по юридическим вопросам',
                                            'индивидуальные предприниматели и юридические лица, осуществляющие лизинговую деятельность в качестве лизингодателя без лицензии',
                                            'индивидуальные предприниматели и юридические лица, осуществляющие операции с драгоценными металлами и драгоценными камнями, ювелирными изделиями из них',
                                            'индивидуальные предприниматели и юридические лица, оказывающие посреднические услуги при осуществлении сделок купли-продажи недвижимого имуществ'
                                        ]
                                    },
                                ]}
                            />
                        </div>
                    </div>
                </div>
                <div className="actions">
                    <button className='blue'>Подтвердить</button>
                </div>
            </div>
            
            <FinishSuccess>
                Вы успешно получили свой талон!
            </FinishSuccess>
        </>
    );
}

export default Level_1_1;