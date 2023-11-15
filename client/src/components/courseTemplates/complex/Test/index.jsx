import React, { useState, useEffect } from 'react';

import './style.scss'

import { FaCheck } from "react-icons/fa6";
import axios from 'axios';
import base_url from '../../../../settings/base_url';

function TestPage({ name, questions, quizId }) {
    const jwtToken = localStorage.getItem('jwtToken');

    const [currQuestion, setCurrQuestion] = useState(0)
    const [checkedQustions, setCheckedQustions] = useState([
        {
            question: 0,
            answer: 0
        }
    ])

    useEffect(() => {

        console.log(questions)

        let _checkedQustions = questions ? questions.map(question => {
            return {
                question: question.question_id,
                answer: 0
            }
        }) : null;

        console.log(_checkedQustions)

        setCheckedQustions(_checkedQustions)
    }, [])

    const finishTest = () => {
        console.log(checkedQustions)

        const fetchData = async () => {
            try {
                const response = await axios.post(`${base_url}/api/aml/quiz/checkQuiz/${quizId}`, checkedQustions, {
                    headers: {
                        Authorization: `Bearer ${jwtToken}`,
                    },
                });

                if (response.status === 200) {
                    console.log(response.data)
                } else {
                    console.log(response.data)
                }
            } catch (error) {
                console.log(error)
            }
        };
        
        console.log(jwtToken);
        fetchData();
    }

    if (!questions) return null;

    return ( 
        <div className="testPage">
            <div className="test-wrapper">
                <div className="title">{name}</div>
                <div className="test">
                    <div className="question-header">
                        <div className="question-num">
                            <div>Вопрос</div>
                            <div>{currQuestion+1}/{questions.length}</div>
                        </div>
                        <div className="question-text">
                            <div>{questions[currQuestion]? questions[currQuestion].question_title : null}</div>
                        </div>
                    </div>
                    <div className="question-body">
                        {
                            questions[currQuestion] ? questions[currQuestion].mcqOption.map(answer => {
                                console.log(checkedQustions[currQuestion].answer, answer.mcq_option_id)
                                const handleAnswerClick = () => {
                                    const updatedQuestions = [...checkedQustions];
                                    updatedQuestions[currQuestion].answer = answer.mcq_option_id;
                                    setCheckedQustions(updatedQuestions);
                                }

                                return (
                                    <div className="test-answer" key={answer.mcq_option_title} onClick={() => handleAnswerClick()}>
                                        <div className={`checkbox ${checkedQustions[currQuestion].answer === answer.mcq_option_id ? 'checked' : null}`}>
                                            {checkedQustions[currQuestion].answer === answer.mcq_option_id ? <FaCheck /> : null}
                                        </div>
                                        <div className="answer-text">
                                            <p>
                                                {answer.mcq_option_title}
                                            </p>
                                        </div>
                                    </div>
                                )
                            }) : null
                        }
                    </div>
                </div>

                <div className="actions">
                    {currQuestion !== 0 ? <div className="prev"  onClick={() => { setCurrQuestion(currQuestion - 1) }}>Предыдущий вопрос</div> : null}
                    {currQuestion !== questions.length-1 ? <div className="next" onClick={() => { setCurrQuestion(currQuestion + 1) }}>Следующий вопрос</div> : null}
                    {currQuestion === questions.length-1 ? <div className="finish" onClick={() => {finishTest()}}>Закончить тест</div> : null}
                </div>
            </div>
        </div>
    );
}

export default TestPage;