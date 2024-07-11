import { useEffect, useState } from "react";
import Sizebox from "../../../../../components/courseTemplates/common/Sizebox";
import QuestionComponent from "../../../components/question-component";

function Level_2_1() {
    const [questions, setQuestions] = useState([]);

    const testData= [
        { id: 1, text: 'Публичное должностное лицо', correctAnswer: false },
        { id: 2, text: 'Бен. собственник клиента ПДЛ', correctAnswer: true },
        { id: 3, text: 'Клиент без гражданства РК', correctAnswer: false },
        { id: 4, text: 'Клиент, не имеющий адреса регистрации в РК', correctAnswer: false },
        { id: 5, text: 'Клиент включенный в список ФТ', correctAnswer: false },
        { id: 6, text: 'Клиент включенный в перечень ФРОМУ', correctAnswer: false },
        { id: 7, text: 'Некоммерческая организация', correctAnswer: false },
        { id: 8, text: 'Сомнительные документы представленные клиентом', correctAnswer: false },
        { id: 9, text: 'Сомнительные схемы расчетов предлагаемые клиентом', correctAnswer: false },
        { id: 10, text: 'Клиент в отношении которого ранее был определен высокий риск', correctAnswer: false },
        { id: 11, text: 'Клиент уклоняется от процедуры НПК', correctAnswer: false },
        { id: 12, text: 'Государственный орган', correctAnswer: false },
        { id: 13, text: 'Международная организация', correctAnswer: false },
    ];
    useEffect(() => {
        // const fetchQuestions = async () => {
        //     try {
        //         const response = await axios.get('/api/questions');
                setQuestions(testData);
        //     } catch (error) {
        //         console.error('Error fetching questions:', error);
        //     }
        // };

        // fetchQuestions();
    }, []);
    return (
        <>
            <h2>Задача 1</h2>
            <p>Задание: Вам предстоит распределить следующие критерии по двум группам: повышающие риски и понижающие риски.</p>
            <Sizebox height={40}/>
            <div className="main-container-questions">
                {questions.map(question => (
                    <QuestionComponent key={question.id} question={question} />
                ))}
            </div>
        </>
    );
}

export default Level_2_1;