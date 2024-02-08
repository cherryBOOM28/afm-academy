// DraggableOption/index.jsx
import React, {useState} from 'react';
import './style.scss';

const Lupa = ({ option, onDragStart }) => {

  return (
    <div className="draggable-option-lupa" draggable="true" onDragStart={(e) => onDragStart(e, option)}>
      {option}


    </div>
  );
};

export default Lupa;
