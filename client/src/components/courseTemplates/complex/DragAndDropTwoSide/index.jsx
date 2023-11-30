import React, { useState } from 'react';
import './style.scss'

const QuestionCard = ({ answer, side }) => {
  const dragStart = (event) => {
    console.log("Started drag")
    event.dataTransfer.setData('text/plain', JSON.stringify({ answer, side }));
  };

  return (
    <div
      draggable="true"
      onDragStart={dragStart}
      className='question-card'
    >
      {answer}
    </div>
  );
};

const QuestionContainer = ({ questions, leftAnswer, rightAnswer }) => {
  const [leftSide, setLeftSide] = React.useState([]);
  const [rightSide, setRightSide] = React.useState([]);

  const [currentQuestion, setCurrentQuestion] = useState(0);

  const allowDrop = (event) => {
    event.preventDefault();
  };

  const handleDrop = (event, side) => {
    event.preventDefault();
    const data = JSON.parse(event.dataTransfer.getData('text/plain'));
    if (side === 'left') {
      setLeftSide([...leftSide, data]);
    } else if (side === 'right') {
      setRightSide([...rightSide, data]);
    }
  };

  const leftDrop = (event) => handleDrop(event, 'left');
  const rightDrop = (event) => handleDrop(event, 'right');

  return (
    <div className='dnd-question-container'>
      <div className='questions'>
        {/* {questions.map((q, index) => ( */}
          <QuestionCard answer={questions[currentQuestion].answer} side={questions[currentQuestion].side} />
        {/*  */}
      </div>
      <div className="two-sides">
        <div className='left'>
          <div
            onDrop={leftDrop}
            onDragOver={allowDrop}
          >
            {/* {leftSide.map((card, index) => (
              <QuestionCard key={index} answer={card.answer} side={card.side} />
            ))} */}
          </div>
          <p>{leftAnswer}</p>
        </div>
        <div className='right'>
          <div
            onDrop={rightDrop}
            onDragOver={allowDrop}
            
          >
            {/* {rightSide.map((card, index) => (
              <QuestionCard key={index} answer={card.answer} side={card.side} />
            ))} */}
          </div>
          <p>{rightAnswer}</p>
        </div>
      </div>
    </div>
  );
};

export default QuestionContainer;
