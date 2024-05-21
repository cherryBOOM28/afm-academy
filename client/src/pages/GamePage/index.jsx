import React, { useEffect, useState } from 'react';
import NavbarGame from './NavbarGame';
import MainContent from './SecondPage/MainContent';
import Practika from './SecondPage/Practika';
import Quiz from './SecondPage/Quiz';
import WelcomeGame from './WelcomeGame';
import Character1 from './assets/svg/Character1.svg';
import Character2 from './assets/svg/Character2.svg';
import Character3 from './assets/svg/Character3.svg';
import Character4 from './assets/svg/Character4.svg';
import ChooseRoleImg1 from './assets/svg/ChooseRole1.svg';
import ChooseRoleImg2 from './assets/svg/ChooseRole2.svg';
import ChooseRoleImg3 from './assets/svg/ChooseRole3.svg';
import ChooseRoleImg4 from './assets/svg/ChooseRole4.svg';
import './index.scss';

const questions = [
  {
    question: "1. Кода и кем была создана Группа разработки финансовых мер борьбы с отмыванием денег (ФАТФ)?",
    options: [
      "в 1989 году по решению стран Большой семерки",
      "США",
      "Франция",
      "ОАЭ"
    ],
    correct: "в 1989 году по решению стран Большой семерки"
  },
  {
    question: "2. ФАТФ уделяет значительно внимание сотрудничеству с этими организациями, назовите их.",
    options: [
      "МВ, ВБ, УНП ООН",
      "Интерпол",
      "ОБСЕ",
      "СРПФР"
    ],
    correct: "МВ, ВБ, УНП ООН"
  },
  {
    question: "3. Какой документ ФАТФ представляет собой всеобъемлющий свод организационно-правовых мер по созданию эффективного режима ПОД/ФТ в каждой стране?",
    options: [
      "40 Рекомендаций",
      "Пояснительные записки ФАТФ",
      "Руководящие принципы",
      "нет верного ответа"
    ],
    correct: "40 Рекомендаций"
  },
  {
    question: "4. Какие страны входят в «черный список» ФАТФ?",
    options: [
      "Корейская Народно-Демократическая Республика (КНДР) и Иран",
      "Российская Федерация и Украина",
      "Франция и Италия",
      "Испания, ОАЭ"
    ],
    correct: "Корейская Народно-Демократическая Республика (КНДР) и Иран"
  },
  {
    question: "5. Какие страны входят в состав ЕАГ?",
    options: [
      "Беларусь, Китай, Индия, Казахстан, Кыргызская Республика, Россия, Таджикистан, Туркменистан, Узбекистан",
      "Россия, Франция, Армения",
      "Молдова, Турция, Сирия",
      "все ответы верны"
    ],
    correct: "Беларусь, Китай, Индия, Казахстан, Кыргызская Республика, Россия, Таджикистан, Туркменистан, Узбекистан"
  },
  {
    question: "6. Сколько видов субъектов установлено Законом о ПОД/ФТ?",
    options: [
      "18",
      "24",
      "36",
      "21"
    ],
    correct: "18"
  },
  {
    question: "7. Кто из нижеперечисленных не относится к субъектам финансового мониторинга?",
    options: [
      "нотариусы",
      "государственные органы",
      "обменные пункты",
      "оператор почты"
    ],
    correct: "государственные органы"
  },
  {
    question: "8. Для каких видов субъектов финансового мониторинга распространяются требования Закона Республики Казахстан от 16 мая 2014 года № 202-V ЗРК «О разрешениях и уведомлениях» в части направления в АФМ уведомления о начале или прекращении деятельности?",
    options: [
      "юридических консультантов и других независимых специалистов по юридическим вопросам, ИП и ЮЛ, осуществляющих лизинговую деятельность в качестве лизингодателя без лицензии, ИП и ЮЛ, осуществляющих операции с драгоценными металлами и драгоценными камнями, ювелирными изделиями из них и ИП и ЮЛ, оказывающих посреднические услуги при осуществлении сделок купли-продажи недвижимого имущества",
      "банки второго уровня, обменные пункты, кредитные товарищества",
      "микрофинансовые организации, нотариусы, адвокаты",
      "нет верного ответа"
    ],
    correct: "юридических консультантов и других независимых специалистов по юридическим вопросам, ИП и ЮЛ, осуществляющих лизинговую деятельность в качестве лизингодателя без лицензии, ИП и ЮЛ, осуществляющих операции с драгоценными металлами и драгоценными камнями, ювелирными изделиями из них и ИП и ЮЛ, оказывающих посреднические услуги при осуществлении сделок купли-продажи недвижимого имущества"
  },
  {
    question: "9. Какие операции подлежат финансовому мониторингу?",
    options: [
      "пороговые",
      "подозрительные",
      "операции, имеющие характеристики, соответствующие типологиям, схемам и способам легализации ОД/ФТ",
      "все ответы верны"
    ],
    correct: "все ответы верны"
  },
  {
    question: "10. Какие меры должны принимать субъекты финансового мониторинга в отношении своих клиентов (их представителей) и бенефициарных собственников в соответствии с законодательством Республики Казахстан о ПОД/ФТ?",
    options: [
      "меры по надлежащей проверке клиентов (НПК)",
      "меры по системе управления рисками",
      "меры по риск-ориентированному подходу",
      "все ответы верны"
    ],
    correct: "меры по надлежащей проверке клиентов (НПК)"
  }
];



function GamePage() {
  const [open, setOpen] = useState(false)
  const [selectedRole, setSelectedRole] = useState(null);
  const [selectedCharacter, setSelectedCharacter] = useState('1');
  const [step, setStep] = useState(1);  // Новый шаг для игровой логики
  const [answer, setAnswer] = useState(null);  // Ответ на вопрос (если есть)
  const [page, setPage] = useState(1);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [userAnswer, setUserAnswer] = useState(null);
  const [userAnswer1, setUserAnswer1] = useState(null);
  const handleAnswerSelection = (answer) => {
      setUserAnswer(answer);
  };
  const handleAnswerSelection1 = (answer) => {
    setUserAnswer1(answer);
};


  useEffect(() => {
    // Логика, выполняемая при изменении шага (например, скроллинг к началу)
    if (page === 1 || page) {
      window.scrollTo(0, 0);
    }
    
  }, [page]);
  useEffect(() => {
    if (selectedRole !== null) {
      window.scrollTo({ top: window.scrollY + 3500, behavior: 'smooth' });
    }
  },[selectedRole])
  function PageHandler (page) {
    setPage(page);
  }
  const handleAnswer = (yes) => {  // Обработчик ответа на вопрос (если нужен)
    setAnswer(yes);
    };
  function characterHandler(character, event){
    setSelectedCharacter(character)
    const allChooseCharacterImgWraps = document.querySelectorAll('.ChooseRoleImgWrap');
    allChooseCharacterImgWraps.forEach((element) => {
    element.classList.remove('active');
    });
    event.currentTarget.classList.add('active');
  }

  function openHandler(role, event) {
    setSelectedRole(role);
    setOpen(true);
    const allChooseRoleImgWraps = document.querySelectorAll('.CharacterImg');
    allChooseRoleImgWraps.forEach((element) => {
    element.classList.remove('active');
    });
    event.currentTarget.classList.add('active');
  }

  return (
    <div className='HomeGame'>
      <NavbarGame />
      {page === 1 && (
        <div>
           <WelcomeGame />
      <div className='ChooseRole'>
        <div className="ChooseRoleWrapper">
          <div className='ChooseRole1'>Выберите свою роль</div>
          <div className='ChooseRole2'>
            <div className='ChooseRoleImgWrap' onClick={(event) => openHandler('Ювелирный магазин',event)}>
              <img src={ChooseRoleImg1} alt="" />
              <div className='Uvelirny'>Ювелирный магазин</div>
            </div>
            <div className='ChooseRoleImgWrap' onClick={(event) => openHandler('Нотариус', event)}>
              <img src={ChooseRoleImg2} alt="" />
              <div className='NeUvelirny'>Нотариус</div>
            </div>
            <div className='ChooseRoleImgWrap' onClick={(event) => openHandler('Банк', event)}>
              <img src={ChooseRoleImg3} alt="" />
              <div className='NeUvelirny'>Банк</div>
            </div>
            <div className='ChooseRoleImgWrap' onClick={(event) => openHandler('Обменные пункты', event)}>
              <img src={ChooseRoleImg4} alt="" />
              <div className='NeUvelirny'>Обменные пункты</div>
            </div>
          </div>
        </div>
      </div>
      {open && selectedRole && (
        <div className="SelectedRoleDetails">
          <div className='SelectedRoleDetailsWrapper'>
            <div className='GameStepper'>
              <div className='GameStepperInterface'></div>
              <div className='GameStepperCounter'></div>
            </div>
            <div className='ChooseCharacterWrapper'>
              <div className='StepperWrapper'>
                <div className='StepperUI'>
                  <div className='StepperComponent1'></div>
                  <div className='StepperComponent1'></div>
                  <div className='StepperComponent1'></div>
                </div>
                <div className='StepperCounter'> {step} из 3</div>
              </div>
              {step === 1 && (
              <div className='ChooseCharacterWrapper1step'>
                    <div className='ChooseCharacter1'>Выберите своего персонажа для начала игры</div>
                      <div className='Characters'>
                      <div className='CharacterImg' onClick={(event) => characterHandler(Character1, event)}>
                        <img src={Character1} alt="" />
                      </div>
                      <div className='CharacterImg' onClick={(event) => characterHandler(Character2, event)}>
                        <img src={Character2} alt="" />
                      </div>
                      <div className='CharacterImg' onClick={(event) => characterHandler(Character3, event)}>
                        <img src={Character3} alt="" />
                      </div>
                      <div className='CharacterImg' onClick={(event) => characterHandler(Character4, event)}>
                        <img src={Character4} alt="" />
                      </div>
                      </div>
                  <div style={{display: "flex", width: "1015px", marginBottom:"100px", justifyContent:"flex-end"}}>
                  <button style={{borderRadius:"15px", color:"white", backgroundColor:"#5792EB", width:"78px", height:"32px", border:"none", marginTop:"10px"}} onClick={() => setStep(2)}>Далее</button>
                  </div> {/* Кнопка для перехода к шагу 2 */}
                      </div>
              )}
              {step === 2 && ( // Добавлен новый шаг для вопроса
                <div>
                <div style={{display:"flex", justifyContent:"space-between"}}>
                  
                  <div>
                  <p style={{marginTop:"20px", fontSize:"25px"}}>Являетесь ли вы субьектом?</p> 
                  <p style={{marginTop:"20px", fontSize:"20px"}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.</p>
                  <div>
                    <div onClick={() => handleAnswer(true)} style={{ display: 'block', marginRight: '10px', cursor: 'pointer' }}>
                      <div style={{ width: '20px', height: '20px', borderRadius: '50%', border:"2px solid blue", backgroundColor: answer === true ? 'blue' : 'grey', display: 'inline-block', marginRight: '5px' }}></div>
                      <span>Да</span>
                    </div>
                    <div onClick={() => handleAnswer(false)} style={{ display: 'inline-block', cursor: 'pointer' }}>
                      <div style={{ width: '20px', height: '20px', borderRadius: '50%', border:"2px solid blue", backgroundColor: answer === false ? 'blue' : 'grey', display: 'inline-block', marginRight: '5px' }}></div>
                      <span>Нет</span>
                    </div>
                  </div>
                  </div>
                  <div className='CharacterImgStep2' style={{marginTop:"20px"}}>
                    <img className='imgStep2' style={{border:"8px solid #1F3C88", borderRadius:"11px"}} src={selectedCharacter}/>
                  </div>
                </div>
                  <div style={{display:"flex", gap:"10px", marginBottom:"40px"}}>
                    <button style={{ borderRadius: "15px", color: "#5792EB", backgroundColor: "white", width: "78px", height: "32px", marginTop: "10px" }} onClick={() => setStep(1)}>Назад</button>
                    <button style={{borderRadius:"15px", color:"white", backgroundColor:"#5792EB", width:"78px", height:"32px", border:"none", marginTop:"10px"}} onClick={() => setStep(3)}>Далее</button>
                  </div>
                </div>
            )}
  
              {step === 3 && (
              <div>
                <div>
                        <div style={{ display: "flex", justifyContent: "space-between" }}>
                          <div>
                      <p style={{marginTop:"20px", fontSize:"25px"}}>Входной контроль</p> 
                      <p style={{ marginTop: "20px", fontSize: "19px" }}>
                        {questions[currentQuestion].question}
                      </p>
                      <div style={{marginTop:"10px"}}>
                        {questions[currentQuestion].options.map((option, index) => (
                          <div key={index} onClick={() => handleAnswerSelection(option)} style={{ display: 'block', marginBottom: '10px', cursor: 'pointer' }}>
                            <div style={{ width: '20px', height: '20px', borderRadius: '50%', border: "2px solid blue", backgroundColor: userAnswer === option ? 'blue' : 'grey', display: 'inline-block', marginRight: '5px' }}></div>
                            <span>{option}</span>
                          </div>
                        ))}
                            </div>
                            <p style={{ marginTop: "20px", fontSize: "19px" }}>
                        {questions[currentQuestion+1].question}
                      </p>
                      <div style={{ marginTop: "10px" }}>
                            {questions[currentQuestion + 1].options.map((option1, index) => (
                              <div
                                key={index}
                                onClick={() => handleAnswerSelection1(option1)}
                                style={{
                                  display: "block",
                                  marginBottom: "10px",
                                  cursor: "pointer",
                                }}
                              >
                                <div
                                  style={{
                                    width: "20px",
                                    height: "20px",
                                    borderRadius: "50%",
                                    border: "2px solid blue",
                                    backgroundColor:
                                      userAnswer1 === option1 ? "blue" : "grey", // Используем userAnswer1
                                    display: "inline-block",
                                    marginRight: "5px",
                                  }}
                                ></div>
                                <span>{option1}</span>
                              </div>
                            ))}
                          </div>
                    </div>
                    <div className='CharacterImgStep2' style={{ marginTop: "20px" }}>
                      <img className='imgStep2' style={{ border: "8px solid #1F3C88", borderRadius: "11px", marginTop: "20px" }} src={selectedCharacter} />
                    </div>
                  </div>
                  <div style={{ display: "flex", gap: "10px", marginBottom: "40px" }}>
                    <button style={{ borderRadius: "15px", color: "#5792EB", backgroundColor: "white", width: "78px", height: "32px", marginTop: "10px" }} onClick={() => setStep(2)}>Назад</button>
                    <button style={{ borderRadius: "15px", color: "white", backgroundColor: "#5792EB", width: "78px", height: "32px", border: "none", marginTop: "10px" }} onClick={() => {
                      if (currentQuestion < (questions.length / 2) + 2) {
                        setCurrentQuestion(currentQuestion + 2);
                        setUserAnswer(null); // Сбросить ответ пользователя
                        setUserAnswer1(null)
                      } else {
                        PageHandler(3); // Переход на следующую страницу или завершение
                      }
                    }}>Далее</button>
                  </div>
                </div>
              </div>
            )}

            </div>
          </div>
        </div>
      )}
        </div>
      )}
      {page === 2 && (
        <div>
          
        </div>
      )}
      {page === 3 && (
        <div>
        <div className="main" style={{}}>
        <div style={{marginTop:"70px", display:"flex", width:"1015px" }}>
            <MainContent />
        <div className="sidebar">
          <Quiz />
          <Practika />
        </div>
        </div>
      </div>
        </div>
      )}
    </div>
  );
}

export default GamePage;
