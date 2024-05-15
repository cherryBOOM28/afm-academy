import React, { useState } from 'react';
import NavbarGame from './NavbarGame';
import SecondPage from './SecondPage';
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
  function characterHandler(character){
    setSelectedCharacter(character)
  }

  function openHandler(role, event) {
    setSelectedRole(role);
    setOpen(true);
    const allChooseRoleImgWraps = document.querySelectorAll('.ChooseRoleImgWrap');
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
              <div className='ChooseCharacter1'>Выберите своего персонажа для начала игры</div>
              <div className='Characters'>
              <div className='CharacterImg' onClick={() => characterHandler('1',)}>
                <img src={Character1} alt="" />
              </div>
              <div className='CharacterImg' onClick={() => characterHandler('2', )}>
                <img src={Character2} alt="" />
              </div>
              <div className='CharacterImg' onClick={() => characterHandler('3', )}>
                <img src={Character3} alt="" />
              </div>
              <div className='CharacterImg' onClick={() => characterHandler('4', )}>
                <img src={Character4} alt="" />
              </div>
              </div>
            </div>
          </div>
        </div>
      )}
      <SecondPage />
      
    </div>
  );
}

export default GamePage;
