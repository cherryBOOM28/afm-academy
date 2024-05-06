import React from 'react';
import NavbarGame from './NavbarGame';
import './Style.scss';
import WelcomeImg from './assets/png/WelcomeIMG.png';
import WelcomeImg2 from './assets/png/WelcomeIMG2.png';
import WelcomeImg3 from './assets/png/WelcomeIMG3.png';
import WelcomeImg4 from './assets/png/WelcomeIMG4.png';


function GamePage() {
  return (
    <div className='HomeGame'>
      <NavbarGame />
      <div className='WelcomeGame'>
        <div className='WelcomeGameWrapper'>
        <div className='WelcomeLeftPart'>
          <div className='WelcomeLeftPartTop'>
          <p style={{fontSize:"50px", marginBottom:"50px", marginTop:"120px", fontWeight:"500", fontStyle:"Maitree"}}>Добро пожаловать в</p>
          <p style={{fontSize:"80px", fontWeight:"800", color:"#1A2751", width:"300px", fontStyle:"Verdana"}}>AML GAME!</p>
          </div>
          <div className='WelcomeLeftPartBottom'>
            <p style={{padding: "30px 25px 0px 35px", fontWeight:"600", color:"#193685b2", fontSize:"23px", fontStyle:"Maitree"}}>МИССИЯ</p>
            <p style={{padding:"35px", color:"rgba(0, 0, 0, 0.755)", fontStyle:""}}>Обучение субъектов финансового мониторинга, предоставляя им возможность получить знания и навыки, необходимые для эффективного выполнения требований законодательства о противодействии легализации доходов, полученных преступным путем (ПОД/ФТ), а также подготовки к различным ситуациям, с которыми они могут столкнуться в реальной жизни.</p>
          </div>
        </div>
        <div className='WelcomeRightPart'>
            <div className='WelcomeRightPartTop'>
              <div className='WelcomeRightPartTop1'>
                <img src={WelcomeImg}  style={{width:"auto", height:"130px", padding:"5px", paddingTop:"25px"}} alt="WelcomeImg" />
                <p style={{color:"white", padding:"20px", textAlign:'left'}}>Систематическое улучшение знаний и навыков</p>
              </div>
              <div className='WelcomeRightPartTop2'>
              <img src={WelcomeImg2}  style={{width:"auto", height:"130px", padding:"5px", paddingTop:"25px"}} alt="WelcomeImg" />
                <p style={{color:"#4D70CC", padding:"20px", textAlign:'left'}}>Удобный формат обучения и интерактивная среда</p>
              </div>
            </div>
            <div className='WelcomeRightPartBottom'>
              <div className='WelcomeRightPartBottom1'>
              <img src={WelcomeImg3}  style={{width:"auto", height:"130px", padding:"5px", paddingTop:"5px"}} alt="WelcomeImg" />
                <p style={{color:"white", padding:"20px", textAlign:'left'}}>Тесное взаимодействие с АФМ для получения обратной связи</p>
              </div>
              <div className='WelcomeRightPartBottom2'>
              <img src={WelcomeImg4}  style={{width:"auto", height:"130px", padding:"5px", paddingTop:"5px"}} alt="WelcomeImg" />
                <p style={{color:"#1A2751", padding:"20px", textAlign:'left'}}>Разные уровни обучения и практические задания</p>
              </div>
          </div>
        </div>
        </div>
      </div>
    </div>
  );
}

export default GamePage;
