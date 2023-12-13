import './faqStep.scss'

const FAQStep = ({nextStep}) => {

    return (
        <div className="tab-container">
             <h1>Раздел FAQ</h1>
             <div className="questions">
                <a className="title">Ответьте на часто задаваемые вопросы</a>
                <div className="answers">
                    <div>
                        <label htmlFor="course-is">Что из себя представляет данный курс?</label>
                        <input type="text" name="course-is" id="course-is" placeholder="Введите ответ"/>
                    </div>
                    <div>
                        <label htmlFor="course-for-whom">Для кого предназначен курс?</label>
                        <input type="text" name="course-for-whom" id="course-for-whom" placeholder="Введите ответ"/>
                    </div>
                    <div>
                        <label htmlFor="course-duration">Длительность курса</label>
                        <input type="text" name="course-duration" id="course-duration" placeholder="Введите ответ"/>
                    </div>
                    <div>
                        <label htmlFor="course-price">Стоимость курса</label>
                        <input type="text" name="course-price" id="course-price" placeholder="Введите ответ"/>
                    </div>
                    <div>
                        <label htmlFor="course-near">Дата ближайшего курса</label>
                        <input type="text" name="course-near" id="course-near" placeholder="Введите ответ"/>
                    </div>
                    <div>
                        <label htmlFor="course-content">Программа курса</label>
                        <input type="text" name="course-content" id="course-content" placeholder="Введите ответ"/>
                    </div>
                </div>
             </div>
             <div className='submit-or-back'>
                <a className='button-next' onClick={nextStep}>Перейти далее</a>
                <a className='button-back'>Вернутся назад</a>
            </div>
        </div>
    )
}


export default FAQStep