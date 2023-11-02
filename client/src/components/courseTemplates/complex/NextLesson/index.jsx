import React, { useState, useEffect } from 'react';
import { GrLinkNext } from 'react-icons/gr';

import './style.scss'

function NextLesson({ nextLessonName, handleOnClick}) {
    return ( 
        <div className="next-lesson-btn">
            <div className="next-lesson-btn-inner" onClick={handleOnClick}>
                <div className="next-lesson-btn-text">
                    {nextLessonName ? nextLessonName : 'Следующая лекция'}
                </div>
                <GrLinkNext className="next-lesson-btn-icon"/>
            </div>
        </div>
    );
}

export default NextLesson;