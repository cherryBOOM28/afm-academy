import React, { useState } from "react";
import DnDContainer from "../../../components/dndBox/DnDContainer";
import bgIcon from "../../../components/dndBox/flags/Bulgaria.svg";
import mcIcon from "../../../components/dndBox/flags/Monaco.svg";
import hrIcon from "../../../components/dndBox/flags/Croatia.svg";
import vtIcon from "../../../components/dndBox/flags/VFlag.svg";
import kndrIcon from "../../../components/dndBox/flags/KNDRFlag.svg";
import ngIcon from "../../../components/dndBox/flags/Nigeria.svg";
import bfIcon from "../../../components/dndBox/flags/BurkinaFaso.svg";
import mlIcon from "../../../components/dndBox/flags/Mali.svg";
import sgIcon from "../../../components/dndBox/flags/Senegal.svg";
import vzIcon from "../../../components/dndBox/flags/Venezuela.svg";
import irIcon from "../../../components/dndBox/flags/Iran.svg";
import ssIcon from "../../../components/dndBox/flags/SouthSudan.svg";
import cmIcon from "../../../components/dndBox/flags/Cameroon.svg";
import naIcon from "../../../components/dndBox/flags/Namibia.svg";
import kyIcon from "../../../components/dndBox/flags/Kenya.svg";
import tzIcon from "../../../components/dndBox/flags/Tanzania.svg";
import yeIcon from "../../../components/dndBox/flags/Yemen.svg";
import saIcon from "../../../components/dndBox/flags/SouthAfrica.svg";
import mzIcon from "../../../components/dndBox/flags/Mozambique.svg";
import phIcon from "../../../components/dndBox/flags/Philippines.svg";
import syIcon from "../../../components/dndBox/flags/Syria.svg";
import htIcon from "../../../components/dndBox/flags/Haiti.svg";
import cgIcon from "../../../components/dndBox/flags/DemocraticRepublicoftheCongo.svg";
import mmIcon from "../../../components/dndBox/flags/Myanmar.svg";















const initialItems = [
  { id: 1, name: "Болгария", flag: bgIcon, initialZoneId: 0 },
  { id: 2, name: "Монако", flag: mcIcon, initialZoneId: 0 },
  { id: 3, name: "Хорватия", flag: hrIcon, initialZoneId: 0},
  { id: 4, name: "Вьетнам", flag: vtIcon, initialZoneId: 0 },
  { id: 5, name: "КНДР", flag: kndrIcon, initialZoneId: 0 },
  { id: 6, name: "Нигерия", flag: ngIcon, initialZoneId: 0 },
  { id: 7, name: "Буркина-Фасо", flag: bfIcon, initialZoneId: 0 },
  { id: 8, name: "Камерун", flag: cmIcon, initialZoneId: 0 },
  { id: 10, name: "ДР Конго", flag: cgIcon, initialZoneId: 0 },
  { id: 11, name: "Гаити", flag: htIcon, initialZoneId: 0 },
  { id: 12, name: "Мали", flag: mlIcon, initialZoneId: 0 },
  { id: 13, name: "Мозамбик", flag: mzIcon, initialZoneId: 0 },
  { id: 14, name: "Филиппины", flag: phIcon, initialZoneId: 0 },
  { id: 15, name: "Сенегал", flag: sgIcon, initialZoneId: 0 },
  { id: 16, name: "ЮАР", flag: saIcon, initialZoneId: 0 },
  { id: 17, name: "Южный Судан", flag: ssIcon, initialZoneId: 0 },
  { id: 18, name: "Сирия", flag: syIcon, initialZoneId: 0 },
  { id: 19, name: "Танзания", flag: tzIcon, initialZoneId: 0 },
  { id: 20, name: "Венесуэла", flag: vzIcon, initialZoneId: 0 },
  { id: 21, name: "Йемен", flag: yeIcon, initialZoneId: 0 },
  { id: 22, name: "Кения", flag: kyIcon, initialZoneId: 0 },
  { id: 23, name: "Намибия", flag: naIcon, initialZoneId: 0 },
  { id: 24, name: "Иран", flag: irIcon, initialZoneId: 0 },
  { id: 26, name: "Мьянма", flag: mmIcon, initialZoneId: 0 },


  




  
];

const Level_2_2 = () => {
  const [items, setItems] = useState(initialItems);
  const [zones, setZones] = useState({
    1: { id: 1, title: "Зеленый список", items: [] },
    2: { id: 2, title: "Серый список", items: [] },
    3: { id: 3, title: "Черный список", items: [] },
  });

  const handleDrop = (zoneId, item) => {
    setZones((prevZones) => {
      const newZones = { ...prevZones };
  
      // Remove the item from the previous zone if it exists
      Object.values(newZones).forEach((zone) => {
        zone.items = zone.items.filter((zoneItem) => zoneItem.id !== item.id);
      });
  
      // Add the item to the new zone if it's not the initial list (zoneId 0)
      if (zoneId !== 0) {
        newZones[zoneId].items = [...newZones[zoneId].items, item];
      }
  
      return newZones;
    });
  
    // Add the item back to the items list if it's returned to the initial list
    if (zoneId === 0) {
      setItems((prevItems) => [...prevItems, item]);
    } else {
      setItems((prevItems) =>
        prevItems.filter((prevItem) => prevItem.id !== item.id)
      );
    }
  };

  return (
    <>
      <h2>Задача 2</h2>
      <p>
        Задание: В этом задании вам предстоит распределить страны по трем
        группам риска: зеленый список, серый список и черный список. Вашей
        задачей будет определить, к какой группе риска относится каждая из
        представленных стран.
      </p>
      <DnDContainer items={items} zones={zones} handleDrop={handleDrop} />
    </>
  );
};

export default Level_2_2;
