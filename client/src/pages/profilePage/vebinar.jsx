import React, { useState, useEffect } from "react";

import VebinarTable from "../../components/vebinarTable/VebinarTable";

import { BiFilter } from "react-icons/bi";

import "./vebinar.scss";

import { useStyle } from "../../components/VisualModal/StyleContext";

function Vebinar(props) {
  const { styles } = useStyle();
  const { interval } = styles;

  const [filterValue, setFilterValue] = useState("Сначала новые");
  const { colorMode } = styles;

  const getLetterSpacing = (interval) => {
    interval = styles.letterInterval;

    switch (interval) {
      case "medium":
        return "2px";
      case "large":
        return "4px";
      default:
        return "1px";
    }
  };

  const handleFilterChange = (option) => {
    setFilterValue(option);
  };

  return (
    <>
      <div
        className="vebinar-filter"
        style={{
          background:
            styles.colorMode === "dark"
              ? "#000"
              : styles.colorMode === "light"
              ? "#f9f9f9"
              : styles.colorMode === "blue"
              ? "#9dd1ff"
              : "#000",
        }}
      >
        <div className="text-content"
         style={{
          color: styles.colorMode === "dark" ? "#fff" : styles.colorMode === "light" ? "#343434" : styles.colorMode === "blue" ? "#063462" : "#000",
          letterSpacing: getLetterSpacing(interval)
        }}
        >Календарь выбранных вебинаров:</div>
        <div>
          <BiFilter />
          <Select
            options={["Сначала новые", "Сначала старые"]}
            value={filterValue}
            handleChange={handleFilterChange}
          />
        </div>
      </div>
      <div
        className="vebinar-table-block"
        style={{
          background:
            styles.colorMode === "dark"
              ? "#000"
              : styles.colorMode === "light"
              ? "#f9f9f9"
              : styles.colorMode === "blue"
              ? "#9dd1ff"
              : "#000",
        }}
      >
        <VebinarTable data={[]} />
      </div>
    </>
  );
}

const Select = ({ value, options, handleChange }) => {
  const handleSelectChange = (event) => {
    const selectedValue = event.target.value;
    handleChange(selectedValue);
  };

  return (
    <select value={value} onChange={handleSelectChange} className="text-content">
      {options.map((option) => {
        return (
          <option value={option} key={option} >
            {option}
          </option>
        );
      })}
    </select>
  );
};

export default Vebinar;
