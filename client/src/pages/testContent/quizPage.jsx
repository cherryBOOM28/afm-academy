import React, { useState, useEffect } from 'react';
import quizPageImage from './../../assets/images/quiz.jpg';

import './quizPage.scss';

function QuizPage(props) {
    return ( 
        <div className='quiz-page'>
            <div className="quiz-wrapper">
                <img src={quizPageImage} alt="" />
                <img src={quizPageImage} alt="" />
                <img src={quizPageImage} alt="" />
                <img src={quizPageImage} alt="" />
                <img src={quizPageImage} alt="" />
                <img src={quizPageImage} alt="" />

                <button>Завершить тест</button>
            </div>
        </div>
    );
}

export default QuizPage;