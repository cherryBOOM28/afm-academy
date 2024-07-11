import { useEffect, useState } from "react";
import Sizebox from "../../../../../components/courseTemplates/common/Sizebox";
import Divider from "../../../components/divider";
import QuestionComponent from "../../../components/question-component";
import TransactionForm from "../../../components/sumQuestions/TransactionForm";
import Questionnaire from '../../../components/Questionnaire/Questionnaire';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function Level_2_3() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const sumQuestions = [
    'Получение выигрыша в наличной форме по результатам проведения пари, азартной игры в игорных заведениях и лотереи',
    'Совершенно ломбардом операций с деньгами, ценными бумагами, драгоценными металлами и драгоценными камнями, ювелирными изделиями из них и иными ценностями',
    'Переводы денег за границу на счета (во вклады), открытые на анонимного владельца, поступление денег из-за границы со счета (вклада), открытого на анонимного владельца',
    'Купля-продажа драгоценных металлов и драгоценных камней, ювелирных изделий из них',
    'Платежи и переводы денег, осуществляемые клиентом в пользу другого лица на безвозмездной основе',
    'Снятие с банковского счета или зачисление на банковский счет клиента денег, а равно прием от клиента либо выдача клиенту наличных денег',
    'Сделке с недвижимым имуществом, результатом совершения которой является переход права собственности на такое имущество'
  ];

  const handlePrev = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1);
    }
  };

  const handleNext = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    }
  };

  const carouselSettings = {
    dots: false,
    infinite: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    initialSlide: currentQuestion,
    arrows: false, // или true, в зависимости от ваших предпочтений
  };

  const [questions, setQuestions] = useState([]);

  const testData = [
    {
      id: 1,
      text: "Операции, превышающие пороговое значение",
      correctAnswer: false,
    },
    {
      id: 2,
      text: "Систематическое приобретение однотипных изделий",
      correctAnswer: true,
    },
    { id: 3, text: "Перечисление денег на третьих лиц", correctAnswer: false },
    { id: 4, text: "Необычные обстоятельства", correctAnswer: false },
    { id: 5, text: "Использование вымышленных имен", correctAnswer: false },
    {
      id: 6,
      text: "Операция, не имеющая экономического смысла",
      correctAnswer: false,
    },
    { id: 7, text: "Необычно крупная сумма операции", correctAnswer: false },
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
      <p>
        Задание: Вам предстоит распределить следующие критерии по двум группам:
        повышающие риски и понижающие риски.
      </p>
      <Sizebox height={40} />
      <div className="main-container-questions">
        {questions.map((question) => (
          <QuestionComponent key={question.id} question={question} />
        ))}
      </div>
      <Sizebox height={50} />
      <Divider />
      <h2>Задача 2</h2>
      <p>
        Задание: Вам предстоит установить пороговые суммы по соответствующим
        видам операций. Для этого изучите предложенные виды операций и укажите
        пороговую сумму, при которой они подлежат мониторингу. Учтите, что виды
        операций относятся к разным субъектам финансового мониторинга, включая
        ювелирные организации и другие виды субъектов.
      </p>
     <TransactionForm/>
      <Sizebox height={50} />
      <Divider />

      <Sizebox height={50} />
      <h2>Задача 3</h2>
      <p>
        Задание: Вам представлены описания сделок с ювелирными изделиями и
        указанные суммы. Ваша задача определить, какие из этих операций
        относятся к пороговым. 
      </p>
      <Questionnaire/>
    </>
  );
}

export default Level_2_3;
