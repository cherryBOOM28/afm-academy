import React, { useEffect, useState } from 'react';
import NavbarGame from './NavbarGame';
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

function GamePage() {
  const [open, setOpen] = useState(false)
  const [selectedRole, setSelectedRole] = useState(null);
  const [selectedCharacter, setSelectedCharacter] = useState('1');
  const [step, setStep] = useState(1);  // Новый шаг для игровой логики
  const [answer, setAnswer] = useState(null);  // Ответ на вопрос (если есть)
  useEffect(() => {
    // Логика, выполняемая при изменении шага (например, скроллинг к началу)
    window.scrollTo(0, 0);
  }, [step, selectedRole]);

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
                         <div style={{display:"flex"}}>
                  
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
                 <div>
                 <button style={{ borderRadius: "15px", color: "#5792EB", backgroundColor: "white", width: "78px", height: "32px", marginTop: "10px" }} onClick={() => setStep(1)}>Назад</button>
                 <button style={{borderRadius:"15px", color:"white", backgroundColor:"#5792EB", width:"78px", height:"32px", border:"none", marginTop:"10px"}} onClick={() => setStep(3)}>Далее</button>
                 </div>
         </div>
            )}
  
            {step === 3 && ( // Финальный шаг
              <div>
                <h3>{selectedCharacter.name}</h3>
                <img src={selectedCharacter}/>
                <p>Ответ: {answer ? 'Да' : 'Нет'}</p>
              </div>
            )}
            </div>
          </div>
        </div>
      )}
      
    </div>
  );
}

export default GamePage;
