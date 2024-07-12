import React from 'react';
import { useDrop } from 'react-dnd';
import idIcon from './svg/9256632.svg';
import contactIcon from './svg/1509974.svg';
import generalIcon from './svg/3740813.svg';
import DraggableItem from './DraggableItem';

// Иконки SVG для каждого заголовка
const icons = {
  'Идентификационные данные': <img src={idIcon} />,
  'Контактные данные': <img src={contactIcon} />,
  'Общие сведения': <img src={generalIcon} />,
};

const DropZone = ({ id, title, items, onDrop }) => {
  const [{ isOver }, drop] = useDrop(() => ({
    accept: 'ITEM',
    drop: (item) => onDrop(id, item),
    collect: (monitor) => ({
      isOver: !!monitor.isOver(),
    }),
  }));

  return (
    <div
      ref={drop}
      style={{
        display: 'flex',
        flexDirection: 'column',
        height: '100%',
        borderRadius: '10px 10px 0px 0px',
        background: isOver ? 'lightblue' : 'rgba(217, 217, 217, 0.13)',
      }}
    >
      <div
        style={{
          backgroundColor: '#1A2751',
          padding: '8px',
          color: 'white',
          display: 'flex',
          alignItems: 'center',
          borderRadius: title === 'Идентификационные данные' || title === 'Зеленый список' ? '10px 10px 0px 0px' : null
        }}
      >
        
        <h3 style={{ marginLeft: '8px' }}>{title}</h3>
      </div>
      <div style={{padding: '8px', display: 'flex', flexWrap: 'wrap', maxHeight:'300px', overflowY:'auto' }}>
      {icons[title]}
        {items.length === 0 ? (
          <div
            style={{
              textAlign: 'center',
              width: '100%',
              padding: '16px',
              color: 'gray',
              marginBottom: '20px',
              flexGrow: 1, // Чтобы элемент занимал все доступное пространство
            }}
          >
            Перетащите элементы сюда
          </div>
        ) : (
          <div style={{ display: 'flex', flexWrap: 'wrap', width: '100%', justifyContent: 'center' }}>
            {items.map((item) => (
              <DraggableItem key={item.id} id={item.id} name={item.name} flag={item.flag} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default DropZone;