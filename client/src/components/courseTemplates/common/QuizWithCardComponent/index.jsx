// QuizApp.jsx
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import QuizQuestion from './QuizQuestion';

import './QuizApp.scss';

const QuizApp = ({ questions }) => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [showNextQuestionButton, setShowNextQuestionButton] = useState(false);

  const handleNextQuestion = (isCorrect) => {
    if (isCorrect) {
      setScore(score + 1);
    }

    setShowNextQuestionButton(true); // Показываем кнопку "Next Question" после ответа
  };

  const handleNextQuestionButtonClick = () => {
    setCurrentQuestionIndex(currentQuestionIndex + 1);
    setShowNextQuestionButton(false); // Скрываем кнопку "Next Question" после нажатия
  };

  // Добавьте проверку на существование questions
  if (!questions || !questions.length) {
    return <div>No questions available.</div>;
  }

  const isLastQuestion = currentQuestionIndex === questions.length - 1;

  return (
    <div className="quiz-app">
      {currentQuestionIndex < questions.length ? (
        <div>
          <QuizQuestion
          question={questions[currentQuestionIndex].question}
          options={questions[currentQuestionIndex].options}
          correctOptionIndex={questions[currentQuestionIndex].correctOptionIndex}
          onNextQuestion={handleNextQuestion}
          showNextQuestionButton={showNextQuestionButton}
        />
      
        </div>
      ) : (
        <div className="quiz-completed">
          <p>Quiz Completed!</p>
          <p>Your Score: {score}</p>
        </div>
      )}
     

      {showNextQuestionButton && !isLastQuestion && (
        <button className='buttonQuiz'onClick={handleNextQuestionButtonClick}>
          Следующий вопрос
        </button>
      )}
    </div>
  );
};

QuizApp.propTypes = {
  questions: PropTypes.arrayOf(
    PropTypes.shape({
      question: PropTypes.string.isRequired,
      options: PropTypes.arrayOf(
        PropTypes.shape({
          question: PropTypes.string.isRequired,
          answer: PropTypes.string.isRequired,
        })
      ).isRequired,
      correctOptionIndex: PropTypes.number.isRequired,
    })
  ).isRequired,
};

export default QuizApp;