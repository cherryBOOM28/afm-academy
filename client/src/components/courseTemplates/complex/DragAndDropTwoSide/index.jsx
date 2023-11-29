import React from 'react';

const QuestionCard = ({ answer, side }) => {
  const dragStart = (event) => {
    event.dataTransfer.setData('text/plain', JSON.stringify({ answer, side }));
  };

  return (
    <div
      draggable="true"
      onDragStart={dragStart}
      style={{
        border: '1px solid #ccc',
        padding: '8px',
        marginBottom: '8px',
        cursor: 'move',
      }}
    >
      {answer}
    </div>
  );
};

const QuestionContainer = ({ questions, leftAnswer, rightAnswer }) => {
  const [leftSide, setLeftSide] = React.useState([]);
  const [rightSide, setRightSide] = React.useState([]);

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
    <div style={{ display: 'flex', justifyContent: 'space-between' }}>
      <div>
        <h3>True</h3>
        <div
          onDrop={leftDrop}
          onDragOver={allowDrop}
          style={{
            minHeight: '100px',
            border: '1px dashed #ccc',
            padding: '8px',
          }}
        >
          {leftSide.map((card, index) => (
            <QuestionCard key={index} answer={card.answer} side={card.side} />
          ))}
        </div>
        <p>{leftAnswer}</p>
      </div>
      <div>
        <h3>False</h3>
        <div
          onDrop={rightDrop}
          onDragOver={allowDrop}
          style={{
            minHeight: '100px',
            border: '1px dashed #ccc',
            padding: '8px',
          }}
        >
          {rightSide.map((card, index) => (
            <QuestionCard key={index} answer={card.answer} side={card.side} />
          ))}
        </div>
        <p>{rightAnswer}</p>
      </div>
      <div>
        <h3>Questions</h3>
        {questions.map((q, index) => (
          <QuestionCard key={index} answer={q.answer} side={q.side} />
        ))}
      </div>
    </div>
  );
};

export default QuestionContainer;
