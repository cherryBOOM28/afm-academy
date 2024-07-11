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
  { id: 1, name: "Болгария", flag: bgIcon },
  { id: 2, name: "Монако", flag: mcIcon },
  { id: 3, name: "Хорватия", flag: hrIcon},
  { id: 4, name: "Вьетнам", flag: vtIcon },
  { id: 5, name: "КНДР", flag: kndrIcon },
  { id: 6, name: "Нигерия", flag: ngIcon },
  { id: 7, name: "Буркина-Фасо", flag: bfIcon },
  { id: 8, name: "Камерун", flag: cmIcon },
  { id: 10, name: "ДР Конго", flag: cgIcon },
  { id: 11, name: "Гаити", flag: htIcon },
  { id: 12, name: "Мали", flag: mlIcon },
  { id: 13, name: "Мозамбик", flag: mzIcon },
  { id: 14, name: "Филиппины", flag: phIcon },
  { id: 15, name: "Сенегал", flag: sgIcon },
  { id: 16, name: "ЮАР", flag: saIcon },
  { id: 17, name: "Южный Судан", flag: ssIcon },
  { id: 18, name: "Сирия", flag: syIcon },
  { id: 19, name: "Танзания", flag: tzIcon },
  { id: 20, name: "Венесуэла", flag: vzIcon },
  { id: 21, name: "Йемен", flag: yeIcon },
  { id: 22, name: "Кения", flag: kyIcon },
  { id: 23, name: "Намибия", flag: naIcon },
  { id: 24, name: "Иран", flag: irIcon },
  { id: 25, name: "КНДР", flag: ngIcon },
  { id: 26, name: "Мьянма", flag: mmIcon },


  




  
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
      const zoneItems = newZones[zoneId].items;

      if (!zoneItems.find((zoneItem) => zoneItem.id === item.id)) {
        newZones[zoneId].items = [...zoneItems, item];
      }
      return newZones;
    });

    setItems((prevItems) =>
      prevItems.filter((prevItem) => prevItem.id !== item.id)
    );
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
