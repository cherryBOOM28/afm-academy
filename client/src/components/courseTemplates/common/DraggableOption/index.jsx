// DraggableOption/index.jsx
import React from 'react';
import './style.scss';

const DraggableOption = ({ option, onDragStart }) => {
  return (
    <div className="draggable-option" draggable="true" onDragStart={(e) => onDragStart(e, option)}>
      {option}
    </div>
  );
};

export default DraggableOption;
