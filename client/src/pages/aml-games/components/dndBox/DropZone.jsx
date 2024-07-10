import React from "react";
import { useDrop } from "react-dnd";
import idIcon from "./svg/9256632.svg";
import contactIcon from "./svg/1509974.svg"
import generalIcon from "./svg/3740813.svg"

// Иконки SVG для каждого заголовка
const icons = {
  'Идентификационные данные': (
    <img src={idIcon}/>
  ),
  'Контактные данные': (
    <img src={contactIcon}/>

  ),
  'Общие сведения': (
    <img src={generalIcon}/>

  ),
};

const DropZone = ({ id, title, items, onDrop }) => {
  const [{ isOver }, drop] = useDrop(() => ({
    accept: "ITEM",
    drop: (item) => onDrop(id, item),
    collect: (monitor) => ({
      isOver: !!monitor.isOver(),
    }),
  }));

  return (
    <div
      ref={drop}
      style={{
        borderRadius: "10px 10px 0px 0px",
        background: isOver ? "lightblue" : "rgba(217, 217, 217, 0.13)",
        minHeight: "150px",
      }}
    >
      <div
        style={{
          backgroundColor: "#1A2751",
          padding: "8px",
          color: "white",
          display: "flex",
          borderRadius: title === "Идентификационные данные" ? "10px 10px 00px 0px" : null,
        }}
      >
        
        <h3 style={{ marginLeft: '8px' }}>{title}</h3>
      </div>
      <div style={{ padding: "8px", display: "flex", flexWrap: "wrap" }}>
      {icons[title]}
        {items.length === 0 && (
          <div style={{ textAlign: 'center', width: '100%', padding: '16px', color: 'gray' }}>
            Перетащите элементы сюда
          </div>
        )}
        {items.map((item) => (
          <div
            key={item.id}
            style={{
              padding: "8px",
              border: "1px dashed gray",
              margin: "4px",
              textAlign: "center",
              fontSize: "13px",
              backgroundColor: "rgba(217, 217, 217, 0.13)",
              borderRadius: "10px",
              width: "calc(50% - 29px)",
            }}
          >
            {item.name}
          </div>
        ))}
      </div>
    </div>
  );
};

export default DropZone;
