import React from 'react';
import NavbarGame from './NavbarGame';
import './Style.scss';


function GamePage() {
  return (
    <div className='HomeGame'>
      <NavbarGame />
      <div className='WelcomeGame'>
        <div className='WelcomeGameWrapper'>
        <div className='WelcomeLeftPart'>
          <div className='WelcomeLeftPartTop'>
          <p style={{fontSize:"50px", marginBottom:"50px", marginTop:"120px", fontWeight:"500"}}>Добро пожаловать в</p>
          <p style={{fontSize:"100px", fontWeight:"800", color:"#1A2751", width:"300px"}}>AML GAME!</p>
          </div>
          <div className='WelcomeLeftPartBottom'>
            <p style={{padding:"30px",paddingBottom:"10px", fontWeight:"600", color:"#1A2751", fontSize:"21px"}}>МИССИЯ</p>
            <p style={{padding:"30px"}}>Обучение субъектов финансового мониторинга, предоставляя им возможность получить знания и навыки, необходимые для эффективного выполнения требований законодательства о противодействии легализации доходов, полученных преступным путем (ПОД/ФТ), а также подготовки к различным ситуациям, с которыми они могут столкнуться в реальной жизни.</p>
          </div>

        </div>
        <div className='WelcomeRightPart'>
          
        </div>
        </div>
      </div>
    </div>
  );
}

export default GamePage;
