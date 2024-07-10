import React, { useState } from "react";
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import DraggableItem from '../../components/dndBox/DraggableItem';
import DropZone from '../../components/dndBox/DropZone';

const initialItems = [
  { id: 1, name: 'ФИО' },
  { id: 2, name: 'Документ удостоверяющий личность' },
  { id: 3, name: 'ИИН' },
  { id: 4, name: 'Номер и серия документа' },
  { id: 5, name: 'Электронная почта' },
  { id: 6, name: 'Адрес места регистрации' },
  { id: 7, name: 'Номер контактного телефона' },
  { id: 8, name: 'Дата заполнения анкеты' },
  { id: 9, name: 'Кем выдан документ' },
  { id: 10, name: 'Когда выдан документ' },
  { id: 11, name: 'Дата рождения' },
  { id: 12, name: 'Происхождение денежных средств' },
];

const Level_1_5 = () => {
  const [items, setItems] = useState(initialItems);
  const [zones, setZones] = useState({
    '1': { id: 1, title: 'Идентификационные данные', items: [] },
    '2': { id: 2, title: 'Контактные данные', items: [] },
    '3': { id: 3, title: 'Общие сведения', items: [] },
  });

  const handleDrop = (zoneId, item) => {
    setZones((prevZones) => {
      const newZones = { ...prevZones };
      const zoneItems = newZones[zoneId].items;

      if (!zoneItems.find((zoneItem) => zoneItem.id === item.id)) {
        newZones[zoneId].items = [...zoneItems, item];
      }
      return newZones;
    });

    setItems((prevItems) => prevItems.filter((prevItem) => prevItem.id !== item.id));
  };

  return (
    <>
      <h2>Задача 1</h2>
      <p>
        Задание: Разработайте Анкету «Знай своего клиента» с учетом информации
        необходимой для идентификации клиента.
      </p>
      <DndProvider backend={HTML5Backend}>
        <div className="container" style={{ display: 'flex', gap: '10px', margin: '10px', paddingTop: '20px' }}>
          <div style={{ flex: 1, padding: '16px', background: 'rgba(217, 217, 217, 0.13)', borderRadius: '10px', display: 'flex', flexWrap: 'wrap' }}>
            {items.map((item) => (
              <DraggableItem key={item.id} id={item.id} name={item.name} />
            ))}
          </div>
          <div style={{ flex: 2, display: 'flex', flexDirection: 'column', background: 'rgba(217, 217, 217, 0.13)', borderRadius: '10px' }}>
            {Object.values(zones).map((zone) => (
              <DropZone key={zone.id} id={zone.id} title={zone.title} items={zone.items} onDrop={handleDrop} />
            ))}
          </div>
        </div>
      </DndProvider>
    </>
  );
}

export default Level_1_5;
