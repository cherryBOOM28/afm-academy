import React from 'react'
import './style.css'


const LearningFormatCard = ({header, text, id}) => {
    return (
        <div className='learning-format-card'>
            <div className='header-wrapper'>
                <div className='header'>
                    {header}
                </div>
            </div>
            <div className='learning-format-main-body'>
                <div className='text'>
                    {text}
                </div>
                <div className='button-div'>
                    <button alt={id}>
                        Перейти к каталогу
                    </button>
                </div>
            </div>
        </div>
    )
}

export default LearningFormatCard
