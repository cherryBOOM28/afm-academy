import { useEffect, useState } from "react";
import Sizebox from "../../../../../components/courseTemplates/common/Sizebox";
import Divider from "../../../components/divider";
import NameList from "../../../components/name-list";
import PdlComponent from "../../../components/pdl-component";
import QuestionComponent from "../../../components/question-component";
import './style.css';

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

    const peopleData = [
        { name: "Смирнов Алексей Владимирович", id: "920123212313" },
        { name: "Омаров Талгат Саматович", id: "990110202209" },
        { name: "Жумабаева Алия Сериковна", id: "750202567890" },
        { name: "Тулеубаев Данияр Арсенович", id: "880312234567" },
        { name: "Баймухамбетова Мадина Ануаровна", id: "900401901234" },
        { name: "Каиров Ерлан Болатович", id: "791223012345" },
        { name: "Утешева Гульнара Ермековна", id: "930910123456" },
        { name: "Арман Есжанович Мусин", id: "941114234567" },
        { name: "Алтынбекова Сауле Нуртаевна", id: "780912345678" },
        { name: "Нургалиев Айбек Темирбекович", id: "890123456789" },
        { name: "Смагулова Жанна Еркиновна", id: "901204567890" },
        { name: "Турсунов Руслан Еркебуланович", id: "010423678901" }
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
    const task = {
        name: 'Задание: Одним из повышающих факторов является критерий «публичные должностные лица, их супруги и близкие родственники».',
        description: 'Проверьте следующих лиц, на предмет отнесения их к ПДЛ:'
    }
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
            <Sizebox height={40}/>
            <Divider />
            <h2>Задача 2</h2>
            <PdlComponent peopleData={peopleData} task={task} />
            <NameList peopleData={peopleData} />
        </>
    );
}

export default Level_2_1;