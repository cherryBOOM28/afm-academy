import React, { useState, useEffect } from 'react';

import './style.scss'

function TestPage(props) {
    return ( 
        <div className="testPage">
            <div className="test-wrapper">
                <div className="title">Test name</div>
                <div className="test">
                    <div className="question-header">
                        <div className="question-num">
                            <div>Вопрос</div>
                            <div>1/12</div>
                        </div>
                        <div className="question-text">
                            <div>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </div>
                        </div>
                    </div>
                    <div className="question-body">
                        {
                            [
                                {
                                    text: 'lorem ipsum dolor sit amet, consectet',
                                    right: false,
                                },
                                {
                                    text: 'lorem ipsum dolor sit amet, consectet',
                                    right: true,
                                },
                                {
                                    text: 'lorem ipsum dolor sit amet, consectet',
                                    right: false,
                                },
                                {
                                    text: 'lorem ipsum dolor sit amet, consectetlorem ipsum dolor sit amet, consectet lorem ipsum dolor sit amet, consectet lorem ipsum dolor sit amet, consectet lorem ipsum dolor sit amet, consectet lorem ipsum dolor sit amet, consectet lorem ipsum dolor sit amet, consectet',
                                    right: false,
                                },
                                {
                                    text: 'lorem ipsum dolor sit amet, consectet',
                                    right: false,
                                },
                            ].map(answer => {

                                return (
                                    <div className="test-answer" key={answer.text}>
                                        <div className="checkbox"></div>
                                        <div className="answer-text">
                                            <p>
                                                {answer.text}
                                            </p>
                                        </div>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
            </div>
        </div>
    );
}

export default TestPage;