import React, { useState } from 'react';
import './style.scss'
import { motion, useAnimation, whileHover } from 'framer-motion';

const QuestionContainer = ({ questions, leftAnswer, rightAnswer }) => {
  const mainControls = useAnimation();
  const variants = {
    initial: {
      borderColor: 'rgba(0, 0, 0)',
    },
    correct: {
      borderColor: 'rgba(110, 245, 153)',
    },
    wrong: {
      borderColor: 'rgba(227, 129, 129)',
    },
    hover: {
      borderColor: 'rgba(54, 162, 245)',
    }
  }

  const [currentQuestion, setCurrentQuestion] = useState(0);

  const handleOnDragStart = (e, side, answer) => {
    e.dataTransfer.setData('text/plain', JSON.stringify({ answer, side }));
  };

  const handleOnDragOver = (e) => {
    e.preventDefault(); // Prevent default behavior to enable dropping
    
    // console.log('Dragging over the target');
    e.target.style.cursor = 'pointer';
    e.target.style.transform = 'scale(105%, 105%)';
    mainControls.start('hover');
  };

  const handleOnDragLeave = (e) => {
    e.preventDefault(); // Prevent default behavior
    
    // console.log('Drag left the target');
    setInitialStyle(e);
  };

  const handleOnDrop = (e, dropSide) => {
    e.preventDefault();
    
    const data = e.dataTransfer.getData('text/plain');
    const { answer, side } = JSON.parse(data);

    // console.log(side, answer, dropSide);

    if (dropSide === side) {
      setCorrectStyle(e);
    } else {
      setWrongStyle(e);
    }
    // Handle the dropped data (answer, side)
    // console.log(`Dropped: ${answer} on ${side} side`);
    // Perform further actions based on the dropped data
    setTimeout(() => {
      setInitialStyle(e);
    }, 1000);

    // setInitialStyle(e);
  };

  const setInitialStyle = (e) => {
    e.target.style.cursor = 'initial';
    e.target.style.transform = 'scale(100%, 100%)';
    mainControls.start('initial');
  }

  const setWrongStyle = (e) => {
    e.target.style.cursor = 'initial';
    e.target.style.transform = 'scale(110%, 110%)';
    mainControls.start('wrong');

  }

  const setCorrectStyle = (e) => {
    e.target.style.cursor = 'initial';
    e.target.style.transform = 'scale(110%, 110%)';
    mainControls.start('correct');

  }

  return (
    <div className='dnd-question-container'>
      
      <div className='questions'>
        <div 
          className="question-card" 
          draggable
          onDragStart={(e) => handleOnDragStart(e, 'Left', 'Question 1')}
        >
          {'The question 1'}
        </div>
      </div>
      <div className="two-sides">
        <motion.div className='left'
          animate={mainControls}
          transition={{ duration: 0.7, ease: 'easeInOut' }}
          variants={variants}
          onDragOver={(e) => handleOnDragOver(e)}
          onDragLeave={(e) => handleOnDragLeave(e)}
          onDrop={(e) => handleOnDrop(e, 'Left')}
        >
          {
            'Left Answer'
          }
        </motion.div>
        <motion.div 
          className='right' 
          animate={mainControls}
          transition={{ duration: 0.7, ease: 'easeInOut' }}
          initial='initial'
          variants={variants}
          onDragOver={(e) => handleOnDragOver(e)}
          onDragLeave={(e) => handleOnDragLeave(e)}
          onDrop={(e) => handleOnDrop(e, 'Right')}
          // whileHover={{ scale: 1.2, rotate: 90 }}
        >
          {
            'Right Answer'
          }
        </motion.div>
      </div>
    </div>
  );
};

export default QuestionContainer;
