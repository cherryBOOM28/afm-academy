import React, { useState, useEffect } from 'react';

import './style.scss'

import { FaCheck } from "react-icons/fa6";
import axios from 'axios';
import base_url from '../../../../settings/base_url';

function TestPage({ 
    name, 
    questions, 
    quizId, 
    handleOpenModal, 
    handleQuizSuccesful,  
    handleQuizFail,  
    finished
}) {
    const jwtToken = localStorage.getItem('jwtToken');

    const [currQuestion, setCurrQuestion] = useState(0)
    const [checkedQustions, setCheckedQustions] = useState([
        {
            question: 0,
            answer: 0
        }
    ])

    const [matchingPairAnswers, setMatchingPairAnswers] = useState([]);

    useEffect(() => {
        // console.log("Questions", questions)
        console.log("Questions", questions)
        let _checkedQustions = questions ? questions.filter(question => question.mcqOption.length > 0).map(question => {
            return {
                question: question.question_id,
                answer: 0
            }
        }) : null;

        // console.log(_checkedQustions)

        setCheckedQustions(_checkedQustions)
    }, [])

    const handleUpdatePairs = (matched) => {
        console.log(matched)
        const _matched = matched.map(answer => {
            return {
                'question': answer.question,
                'left_part': answer.left_part,
                'right_part': answer.right_part
            }
        })
        setMatchingPairAnswers(_matched)
        console.log(_matched)
    }

    const finishTest = () => {
        // console.log(checkedQustions)

        const fetchData = async () => {
            console.log({
                'mcqQuestionAnswerList': checkedQustions,
                'matchingPairAnswers': matchingPairAnswers
            })
            try {
                const response = await axios.post(
                    `${base_url}/api/aml/quiz/checkQuiz/${quizId}`, 
                    {
                        'mcqQuestionAnswerList': checkedQustions,
                        'matchingPairAnswers': matchingPairAnswers
                    }, 
                    {
                        headers: {
                            Authorization: `Bearer ${jwtToken}`,
                        },
                    }
                );

                
                if (response.data === 'quiz failed') {
                    handleQuizFail(false);
                } else if (response.data === 'zanova') {
                    handleQuizFail(true);
                } else if (response.data === 'quiz completed') {
                    handleQuizSuccesful();
                }

            } catch (error) {
                console.log(error)
            }
        };
        
        fetchData();
        // handleOpenModal();
    }

    if (!questions || questions.length === 0 && checkedQustions != undefined) return null;

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
                            <div className="question-img">{questions[currQuestion].image
                            ? (
                                <img src={questions[currQuestion].image} alt={questions[currQuestion].question_title} />
                            )
                            : null}</div>
                        </div>
                    </div>
                    {
                        questions[currQuestion] && questions[currQuestion].mcqOption 
                        && questions[currQuestion].mcqOption.length > 0
                        ? (
                            <div className="question-body">
                            {
                                questions[currQuestion] ? questions[currQuestion].mcqOption.map(answer => {
                                    const handleAnswerClick = (answerId) => {
                                        if (finished) return;

                                        setCheckedQustions(prevQuestions => {
                                            const updatedQuestions = [...prevQuestions];
                                            if (updatedQuestions[currQuestion]) {
                                                updatedQuestions[currQuestion].answer = answerId;
                                            }
                                            return updatedQuestions;
                                        });
                                    };

                                    let isChecked = false;

                                    if (finished) {
                                        isChecked = answer.is_true;
                                    } else {
                                        isChecked = checkedQustions.length !== 0 && checkedQustions[currQuestion] && checkedQustions[currQuestion].answer === answer.mcq_option_id;
                                    }

                                    return (
                                        <div className="test-answer" key={answer.mcq_option_id} onClick={() => handleAnswerClick(answer.mcq_option_id)}>
                                            <div className={`checkbox ${isChecked ? 'checked' : null}`}>
                                                {isChecked ? <FaCheck /> : null}
                                            </div>
                                            <div className="answer-text">
                                                <p>{answer.mcq_option_title}</p>
                                            </div>
                                        </div>
                                    );
                                }) : null
                            }
                            </div>
                        ) : null
                    }

                    {
                        questions[currQuestion] && questions[currQuestion].matchingPairs
                        && questions[currQuestion].matchingPairs.length > 0
                        ? <MatchingQuestion 
                            finished={finished}
                            answers={questions[currQuestion].matchingPairs}
                            question_id={questions[currQuestion].question_id}
                            handleUpdatePairs={handleUpdatePairs}
                        /> : null
                    }
                </div>

                <div className="actions">
                    {currQuestion !== 0 ? <div className="prev"  onClick={() => { setCurrQuestion(currQuestion - 1) }}>Предыдущий вопрос</div> : null}
                    {currQuestion !== questions.length-1 ? <div className="next" onClick={() => { setCurrQuestion(currQuestion + 1) }}>Следующий вопрос</div> : null}
                    {currQuestion === questions.length-1 
                        ? <div className={`finish ${finished ? 'disabled' : null}`} 
                            onClick={() => {
                                if (finished) return;
                                finishTest()
                            }
                        }>Завершить тест</div> 
                        : null}
                </div>
            </div>
        </div>
    );
}

const MatchingQuestion = ({ question_id, answers, handleUpdatePairs, finished }) => {
    const [_answers, _setUnswers] = useState(answers)
    const [right, setRight] = useState([])
    const [left, setLeft] = useState([])
    const [matched, setMatched] = useState([]);
    const [question, setQuestion] = useState(null)
    const [currLeft, setCurrLeft] = useState(null);
    const [currRight, setCurrRight] = useState(null);

    useEffect(() => {
        console.log(answers);
        const left = answers.map(answer => {
            const id = answer['matching_pair_id']
            const text = answer['leftPart']
            return {
                id,
                text
            }
        })
        setLeft(left)

        const right = answers.map(answer => {
            const id = answer['matching_pair_id']
            const text = answer['rightPart']
            return {
                id,
                text
            }
        })

        setRight(right)
    }, [])

    useEffect(() => {
        handleUpdatePairs(matched);
    }, [matched])

    const updatePairs = (leftId, rightId) => {
        if (!leftId || !rightId) return;

        const leftPart = answers.find(answer => answer.matching_pair_id === leftId)?.leftPart;
        const rightPart = answers.find(answer => answer.matching_pair_id === rightId)?.rightPart;

        if (leftPart && rightPart) {
            const id = matched.length;

            setMatched(prev => [
                ...prev,
                {
                    question: question_id,
                    id,
                    left_part: leftPart,
                    leftId,
                    right_part: rightPart,
                    rightId
                }
            ]);

            setLeft(prev => prev.filter(item => item.id !== leftId));
            setRight(prev => prev.filter(item => item.id !== rightId));

        }

        setCurrLeft(null);
        setCurrRight(null);
    };

    const unmatchPairs = (id) => {
        const pair = matched.filter(item => item.id === id)[0];
        setLeft(prev => [...prev, { id: pair.leftId, text: pair.left_part }]);
        setRight(prev => [...prev, { id: pair.rightId, text: pair.right_part }]);
        setMatched(prev => prev.filter(item => item.id !== id));
    }

    const leftPairClick = (id) => {
        if (currLeft === id) {
            setCurrLeft(null);
            return;
        }

        setCurrLeft(id)
        updatePairs(id, currRight)
    }

    const rightPairClick = (id) => {
        if (currRight === id) {
            setCurrRight(null);
            return;
        }

        setCurrRight(id)
        updatePairs(currLeft, id)
    }

    return (
        <div className="matching-question-body">
            <div className="matched">
                {
                    matched.map(answer => {
                        const id = answer.id;

                        return (
                            <div className="row" key={id} onClick={() => unmatchPairs(id)}>
                                <div className="left">
                                    <div className={`pair`}>
                                        { answer.left_part }
                                    </div>
                                </div>
                                <div className="right">
                                    <div className={`pair`}>
                                        { answer.right_part }
                                    </div>
                                </div>
                            </div>
                        );
                    })
                }
            </div>
            <div className="non-matched">
                {
                    _answers.map(answer => {
                        const id = answer.matching_pair_id;
                        
                        const leftText = left.find(v => v.id === id)?.text;
                        const rightText = right.find(v => v.id === id)?.text;

                        if (!leftText && !rightText) return null;

                        return ( 
                            <div className="row" key={id}>
                                <div className="left">
                                    {
                                        leftText 
                                        ? (
                                            <div className={`pair ${currLeft === id ? 'active' : null}`} onClick={() => leftPairClick(id)}>
                                                { leftText }
                                            </div>
                                        ) : null
                                    }
                                </div>
                                <div className="right">
                                    {
                                        rightText 
                                        ? (
                                            <div className={`pair ${currRight === id ? 'active' : null}`}  onClick={() => rightPairClick(id)}>
                                                { rightText }
                                            </div>
                                        ) : null
                                    }
                                </div>
                            </div>
                        );
                    })
                }
            </div>
        </div>
    )
}

export default TestPage;