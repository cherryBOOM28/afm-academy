import React from 'react';
import NavbarGame from './NavbarGame';
import WelcomeGame from './WelcomeGame';
import ChooseRoleImg1 from './assets/svg/ChooseRole1.svg';
import ChooseRoleImg2 from './assets/svg/ChooseRole2.svg';
import ChooseRoleImg3 from './assets/svg/ChooseRole3.svg';
import ChooseRoleImg4 from './assets/svg/ChooseRole4.svg';
import './index.scss';


function GamePage() {
  return (
    <div className='HomeGame'>
      <NavbarGame />
      <WelcomeGame />
      <div className='ChooseRole'>
        <div className="ChooseRoleWrapper">
          <div className='ChooseRole1'>Выберите свою роль</div>
          <div className='ChooseRole2'>
            <div className='ChooseRoleImgWrap'>
              <img src={ChooseRoleImg1} alt="" />
              <div className='Uvelirny'>Ювелирный магазин</div>
            </div>
            <div className='ChooseRoleImgWrap'>
              <img src={ChooseRoleImg2} alt="" />
              <div className='NeUvelirny'>Нотариус</div>
            </div>
            <div className='ChooseRoleImgWrap'>
              <img src={ChooseRoleImg3} alt="" />
              <div className='NeUvelirny'>Банк</div>
            </div>
            <div className='ChooseRoleImgWrap'>
              <img src={ChooseRoleImg4} alt="" />
              <div className='NeUvelirny'>Обменные пункты</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default GamePage;
