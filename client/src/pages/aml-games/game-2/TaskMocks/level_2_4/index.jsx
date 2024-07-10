import { useEffect, useState } from "react";
import Sizebox from "../../../../../components/courseTemplates/common/Sizebox";
import QuestionComponent from "../../../components/question-component";

function Level_2_4() {
    const [questions, setQuestions] = useState([]);

    const testData= [
        { id: 1, text: 'Операции, превышающие пороговое значение', correctAnswer: false },
        { id: 2, text: 'Систематическое приобретение однотипных изделий', correctAnswer: true },
        { id: 3, text: 'Перечисление денег на третьих лиц', correctAnswer: false },
        { id: 4, text: 'Необычные обстоятельства', correctAnswer: false },
        { id: 5, text: 'Использование вымышленных имен', correctAnswer: false },
        { id: 6, text: 'Операция, не имеющая экономического смысла', correctAnswer: false },
        { id: 7, text: 'Необычно крупная сумма операции', correctAnswer: false },
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

export default Level_2_4;