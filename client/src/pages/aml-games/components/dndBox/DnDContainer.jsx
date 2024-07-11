import React from 'react';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import DraggableItem from '../../components/dndBox/DraggableItem';
import DropZone from '../../components/dndBox/DropZone';
import './DnDContainer.scss';

const DnDContainer = ({ items, zones, handleDrop }) => {
  return (
    <DndProvider backend={HTML5Backend}>
      <div className="dnd-container">
        <div className="items-container">
          {items.map((item) => (
            <DraggableItem key={item.id} id={item.id} name={item.name} flag={item.flag}/>
          ))}
        </div>
        <div className="dropzones-container">
          {Object.values(zones).map((zone, item) => (
            <DropZone key={zone.id} id={zone.id} title={zone.title} items={zone.items} onDrop={handleDrop} flag={item.flag}/>
          ))}
        </div>
      </div>
    </DndProvider>
  );
}

export default DnDContainer;
