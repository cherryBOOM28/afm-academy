import React from "react";
import { useDrag } from "react-dnd";

const DraggableItem = ({ id, name, flag }) => {
  const [{ isDragging }, drag] = useDrag(() => ({
    type: "ITEM",
    item: { id, name, flag },
    collect: (monitor) => ({
      isDragging: !!monitor.isDragging(),
    }),
  }));

  return (
    <div
      ref={drag}
      style={{
        opacity: isDragging ? 0.5 : 1,
        padding: "8px",
        border: "1px dashed gray",
        margin: "4px",
        textAlign: "center",
        fontSize: "13px",
        backgroundColor: "rgba(217, 217, 217, 0.13)",
        borderRadius: "10px",
        width: flag ? "calc(50% - 86px)": "calc(50% - 8px)",
        boxSizing: "border-box",
        height: flag ? "80px": "50px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexGrow: 0,
        flexShrink: 0,
      }}
    >
      {flag ? (
        <>
          <div style={{ textAlign: "center" }}>
            <div style={{ fontSize: "24px" }}>
              <img src={flag} alt="" />
            </div>
            <div>{name}</div>
          </div>
        </>
      ) : (
        <div>{name}</div>
      )}
    </div>
  );
};

export default DraggableItem;
