import React from 'react';
import { useDrag } from 'react-dnd';

const DraggableItem = ({ id, name }) => {
  const [{ isDragging }, drag] = useDrag(() => ({
    type: 'ITEM',
    item: { id, name },
    collect: (monitor) => ({
      isDragging: !!monitor.isDragging(),
    }),
  }));

  return (
    <div 
      ref={drag} 
      style={{ 
        opacity: isDragging ? 0.5 : 1, 
        padding: '8px', 
        border: '1px dashed gray', 
        margin: '4px', 
        textAlign: 'center',
        fontSize: '13px',
        backgroundColor: 'rgba(217, 217, 217, 0.13)',
        borderRadius: '10px',
        width: 'calc(50% - 8px)', // Уменьшение для двух рядов с учетом отступов
        boxSizing: 'border-box', // Для корректного учета padding и border
        height: '50px', // Установим фиксированную высоту
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexGrow: 0, // Отключаем рост
        flexShrink: 0 // Отключаем сжатие
      }}
    >
      {name}
    </div>
  );
};

export default DraggableItem;
