import ArrowForwardIosSharpIcon from '@mui/icons-material/ArrowForwardIosSharp';
import MuiAccordion from '@mui/material/Accordion';
import MuiAccordionDetails from '@mui/material/AccordionDetails';
import MuiAccordionSummary from '@mui/material/AccordionSummary';
import Divider from '@mui/material/Divider';
import Typography from '@mui/material/Typography';
import { styled } from '@mui/material/styles';
import React, { useEffect, useState } from 'react';
import NavbarGame from './NavbarGame';
import MainContent from './SecondPage/MainContent';
import Practika from './SecondPage/Practika';
import Quiz from './SecondPage/Quiz';
import MainContent3 from './ThirdPage/MainContent3';
import Practika3 from './ThirdPage/Practika3';
import Quiz3 from './ThirdPage/Quiz3';
import WelcomeGame from './WelcomeGame';
import Character1 from './assets/svg/Character1.svg';
import Character2 from './assets/svg/Character2.svg';
import Character3 from './assets/svg/Character3.svg';
import Character4 from './assets/svg/Character4.svg';
import ChooseRoleImg1 from './assets/svg/ChooseRole1.svg';
import ChooseRoleImg2 from './assets/svg/ChooseRole2.svg';
import ChooseRoleImg3 from './assets/svg/ChooseRole3.svg';
import ChooseRoleImg4 from './assets/svg/ChooseRole4.svg';

import Page2KolsoImg1 from './assets/svg/page2Kolso.svg';
import './index.scss';

const Accordion = styled((props) => (
  <MuiAccordion disableGutters elevation={0} square {...props} />
))(({ theme }) => ({
  border: `1px solid ${theme.palette.divider}`,
  '&:not(:last-child)': {
    borderBottom: 0,
  },
  '&::before': {
    display: 'none',
  },
  borderRadius: "8px",
  padding:"3px",
  marginTop: "4px",
  fontSize:"20px"
}));

const AccordionSummary = styled((props) => (
  <MuiAccordionSummary
    expandIcon={<ArrowForwardIosSharpIcon sx={{ fontSize: '0.9rem' }} />}
    {...props}
  />
))(({ theme }) => ({
  backgroundColor:
    theme.palette.mode === 'dark'
      ? 'rgba(255, 255, 255, 255)'
      : 'rgba(0, 0, 0, 0)',
  flexDirection: 'row-reverse',
  '& .MuiAccordionSummary-expandIconWrapper.Mui-expanded': {
    transform: 'rotate(90deg)',
  },
  '& .MuiAccordionSummary-content': {
    marginLeft: theme.spacing(1),
  },
}));

const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
  padding: theme.spacing(2),
  borderTop: '1px solid rgba(0, 0, 0, .125)',
}));


const questions = [
  {
    question: "1. Кода fax и кем была создана Группа разработки финансовых мер борьбы с отмыванием денег (ФАТФ)?",
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
  const [selectedRole, setSelectedRole] = useState('Ювелирный магазин');
  const [selectedCharacter, setSelectedCharacter] = useState(Character3);
  const [step, setStep] = useState(1);  // Новый шаг для игровой логики
  const [answer, setAnswer] = useState(null);  // Ответ на вопрос (если есть)
  const [page, setPage] = useState(1);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [userAnswer, setUserAnswer] = useState(null);
  const [userAnswer1, setUserAnswer1] = useState(null);
  const [expanded, setExpanded] = React.useState('panel1');

  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };
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
                  <div className='StepperComponent1' style={{backgroundColor: step === 1 ? "blue" : ""}}></div>
                  <div className='StepperComponent1' style={{backgroundColor: step === 2 ? "blue" : ""}}></div>
                  <div className='StepperComponent1' style={{backgroundColor: step === 3 ? "blue" : ""}}></div>
                </div>
                <div className='StepperCounter'> {step} из 3</div>
              </div>
              {step === 2 && (
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
                      <div style={{ display: "flex", width: "1015px", marginBottom: "100px", justifyContent: "flex-end", gap:"10px" }}>
                      <button style={{ borderRadius: "15px", color: "#5792EB", backgroundColor: "white", width: "78px", height: "32px", marginTop: "10px" }} onClick={() => setStep(1)}>Назад</button>
                  <button style={{borderRadius:"15px", color:"white", backgroundColor:"#5792EB", width:"78px", height:"32px", border:"none", marginTop:"10px"}} onClick={() => setStep(3)}>Далее</button>
                  </div> {/* Кнопка для перехода к шагу 2 */}
                      </div>
              )}
              {step === 1 && ( // Добавлен новый шаг для вопроса
                <div>
                <div style={{display:"flex", justifyContent:"space-between"}}>
                  
                  <div>
                  <p style={{marginTop:"20px", fontSize:"25px"}}>Являетесь ли вы субьектом?</p> 
                  <p style={{marginTop:"20px", fontSize:"20px"}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.</p>
                  <div style={{marginTop:"10px"}}>
                    <div onClick={() => handleAnswer(true)} style={{ display: 'block', marginRight: '10px', cursor: 'pointer' }}>
                      <div style={{ width: '20px', height: '20px', borderRadius: '50%', border:"1px solid #5792EB", backgroundColor: answer === true ? '#5792EB' : '#D9D9D9', display: 'inline-block', marginRight: '5px' }}></div>
                      <span>Да</span>
                    </div>
                    <div onClick={() => handleAnswer(false)} style={{ display: 'inline-block', cursor: 'pointer' }}>
                      <div style={{ width: '20px', height: '20px', borderRadius: '50%', border:"1px solid #5792EB", backgroundColor: answer === false ? '#5792EB' : '#D9D9D9', display: 'inline-block', marginRight: '5px' }}></div>
                      <span>Нет</span>
                    </div>
                  </div>
                  </div>
                  <div className='CharacterImgStep2' style={{marginTop:"20px"}}>
                    <img className='imgStep2' style={{border:"8px solid #1F3C88", borderRadius:"11px"}} src={selectedCharacter}/>
                  </div>
                </div>
                  <div style={{display:"flex", gap:"10px", marginBottom:"40px"}}>
                    <button style={{borderRadius:"15px", color:"white", backgroundColor:"#5792EB", width:"78px", height:"32px", border:"none", marginTop:"10px"}} onClick={() => setStep(2)}>Далее</button>
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
                            <div style={{ width: '20px', height: '20px', borderRadius: '50%', border: "1px solid #5792EB", backgroundColor: userAnswer === option ? '#5792EB' : '#D9D9D9', display: 'inline-block', marginRight: '5px' }}></div>
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
                                    border: "1px solid #5792EB",
                                    backgroundColor:
                                      userAnswer1 === option1 ? '#5792EB' : '#D9D9D9', // Используем userAnswer1
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
                        PageHandler(2); // Переход на следующую страницу или завершение
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
        <div className='Page2Main'>
          <div className='Page2WelcomeWrapper' style={{width:"100%", display:"flex", justifyContent:"center"}}>
            <div className='Page2Welcome' style={{ display:"flex", marginTop:"120px", justifyContent:"center", width: "1015px", flexWrap:"wrap"  }}>
              <div style={{display:"block", width:"100%", textAlign:"center"}}>
              <img src={Page2KolsoImg1} alt="" />
              </div>
              <div style={{display:"flex", justifyContent:"center"}}>
              <p style={{fontSize:"52px", fontWeight:"700", width:"799px", textAlign:"center"}}>Добро пожаловать в симулятор компании в сфере ПОД/ФТ!</p>
              </div>
            </div>
          </div>
          <div className='Page2Description' style={{ width: "100%", display: "flex", justifyContent: "center", marginTop:"80px" }}>
            <div style={{position:"absolute", height:"41px", width:"401px", backgroundColor:"#eeeeee",borderRadius:"10px", top:"530px"}}>
              <div style={{ textAlign:"center", marginTop:"13px", fontSize:"19px", fontWeight:"500"}}>Описание компании и задачи игры</div>
            </div>
            <div style={{ width: "1015px", justifyContent: "center", display:"flex", textAlign:"center", height: "139px", backgroundColor: "#1A2751", borderRadius: "20px" }}>
              <p style={{color:"#ffffff8e", marginTop:"30px", fontSize:"22px", padding:"15px", fontWeight:"400", lineHeight:"1.5"}}>Ваша компания пока не имеет настроенной деятельности и не совершает операций. <span style={{color:"white", fontWeight:"600"}}>Ваша главная задача</span> - внедрить внутреннюю политику в сфере ПОД/ФТ.</p>
            </div>
          </div>
          <div style={{ width: "100%", display: "flex", justifyContent: "center", marginTop:"80px" }}>
            <div style={{width:"1015px", display: "flex", justifyContent: "center"}}>
              <div style={{ width: "345px" }}> 
                <p style={{ fontWeight: "600", width: "194px", fontWeight: "600", fontSize: "30px" }}>{selectedRole}</p>
                <div style={{marginTop:"10px", width: "281px",}}>
                  <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
                    <AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
                      <Typography>Материал курса</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                      <Typography>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                        malesuada lacus ex, sit amet blandit leo lobortis eget. Lorem ipsum dolor
                        sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex,
                        sit amet blandit leo lobortis eget.
                      </Typography>
                    </AccordionDetails>
                  </Accordion>
                  <Accordion expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
                    <AccordionSummary aria-controls="panel2d-content" id="panel2d-header">
                      <Typography>Отметки</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                      <Typography>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                        malesuada lacus ex, sit amet blandit leo lobortis eget. Lorem ipsum dolor
                        sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex,
                        sit amet blandit leo lobortis eget.
                      </Typography>
                    </AccordionDetails>
                  </Accordion>
                  <Accordion expanded={expanded === 'panel3'} onChange={handleChange('panel3')}>
                    <AccordionSummary aria-controls="panel3d-content" id="panel3d-header">
                      <Typography>Информация о курсе</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                      <Typography>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                        malesuada lacus ex, sit amet blandit leo lobortis eget. Lorem ipsum dolor
                        sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex,
                        sit amet blandit leo lobortis eget.
                      </Typography>
                    </AccordionDetails>
                  </Accordion>
                </div>
                <div style={{ display: "flex", gap: "10px", marginBottom: "40px" }}>
                    <button style={{ borderRadius: "15px", color: "#5792EB", backgroundColor: "white", width: "78px", height: "32px", marginTop: "10px" }} onClick={() => PageHandler(1)}>Назад</button>
                    <button style={{ borderRadius: "15px", color: "white", backgroundColor: "#5792EB", width: "78px", height: "32px", border: "none", marginTop: "10px" }} onClick={() => {
                        PageHandler(3); // Переход на следующую страницу или завершение
                    }}>Далее</button>
                  </div>
              </div>
              <div style={{ width: "670px", height: "754px", borderRadius: "8px", border: "1px solid black" }}>
                <div style={{padding:"40px"}}>
                  <div>
                    <p style={{fontWeight:"500", fontSize:"26px"}}>Уровни обучения</p>
                  </div>
                  <div style={{marginTop:"30px", marginBottom:"30px"}}>
                  <Divider />
                  </div>
                  <div style={{marginTop:"10px", border:"none"}}>
                  <Accordion expanded={expanded === 'panel11'} onChange={handleChange('panel11')}>
                    <AccordionSummary aria-controls="panel11d-content" id="panel11d-header">
                      <Typography>1 уровень «Организация внутреннего контроля»</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography>
                          <p>Уровень 1.1 : Подача уведомления СФМ</p>
                          <p>Уровень 1.2 : Определение ответственного лица по ПОД/ФТ</p>
                          <p>Уровень 1.3 : Регистрация в личном кабинете</p>
                          <p>Уровень 1.4 : Формирование досье клиента</p>
                      </Typography>
                    </AccordionDetails>
                  </Accordion>
                  <Accordion expanded={expanded === 'panel22'} onChange={handleChange('panel22')}>
                    <AccordionSummary aria-controls="panel22d-content" id="panel22d-header">
                      <Typography>2 уровень «Риск-ориентированный подход»</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                      <Typography>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                        malesuada lacus ex, sit amet blandit leo lobortis eget. Lorem ipsum dolor
                        sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex,
                        sit amet blandit leo lobortis eget.
                      </Typography>
                    </AccordionDetails>
                  </Accordion>
                  <Accordion expanded={expanded === 'panel33'} onChange={handleChange('panel33')}>
                    <AccordionSummary aria-controls="panel33d-content" id="panel33d-header">
                      <Typography>3 уровень «Надлежащая проверка клиента»</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                      <Typography>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                        malesuada lacus ex, sit amet blandit leo lobortis eget. Lorem ipsum dolor
                        sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex,
                        sit amet blandit leo lobortis eget.
                      </Typography>
                    </AccordionDetails>
                    </Accordion>
                    <Accordion expanded={expanded === 'panel44'} onChange={handleChange('panel44')}>
                    <AccordionSummary aria-controls="panel44d-content" id="panel44d-header">
                      <Typography>4 уровень «Мониторинг операций»</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                      <Typography>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                        malesuada lacus ex, sit amet blandit leo lobortis eget. Lorem ipsum dolor
                        sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex,
                        sit amet blandit leo lobortis eget.
                      </Typography>
                    </AccordionDetails>
                    </Accordion>
                    <Accordion expanded={expanded === 'panel55'} onChange={handleChange('panel55')}>
                    <AccordionSummary aria-controls="panel55d-content" id="panel55d-header">
                      <Typography>5 уровень «Рейтинг СФМ»</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                      <Typography>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                        malesuada lacus ex, sit amet blandit leo lobortis eget. Lorem ipsum dolor
                        sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex,
                        sit amet blandit leo lobortis eget.
                      </Typography>
                    </AccordionDetails>
                    </Accordion>
                    <Accordion expanded={expanded === 'panel66'} onChange={handleChange('panel66')}>
                    <AccordionSummary aria-controls="panel66d-content" id="panel66d-header">
                      <Typography>6 уровень «Оценка рисков»</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                      <Typography>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                        malesuada lacus ex, sit amet blandit leo lobortis eget. Lorem ipsum dolor
                        sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex,
                        sit amet blandit leo lobortis eget.
                      </Typography>
                    </AccordionDetails>
                  </Accordion>
                </div>
              </div>
              </div>
            </div>
            </div>
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
                <div style={{ display: "flex", width: "1015px", marginBottom: "100px", justifyContent: "flex-end", gap:"10px" }}>
                      <button style={{ borderRadius: "15px", color: "#5792EB", backgroundColor: "white", width: "78px", height: "32px", marginTop: "10px" }} onClick={() => PageHandler(2)}>Назад</button>
                  <button style={{borderRadius:"15px", color:"white", backgroundColor:"#5792EB", width:"78px", height:"32px", border:"none", marginTop:"10px"}} onClick={() => PageHandler(4)}>Далее</button>
                  </div>
              </div>
        
        </div>
      </div>
        </div>
      )}
      {page === 4 && (
        <div>
        <div className="main" style={{}}>
        <div style={{marginTop:"70px", display:"flex", width:"1015px" }}>
            <MainContent3 />
        <div className="sidebar">
          <Quiz3 />
          <Practika3 />
        </div>
        </div>
      </div>
        </div>
      )}
    </div>
  );
}

export default GamePage;
