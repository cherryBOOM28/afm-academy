import React, { useEffect, useState } from "react";
import cl from './Dropdown.module.css';
import { useStyle } from "../../components/VisualModal/StyleContext";


const Dropdown = ({ title, content }) => {
  const [isOpen, setIsOpen] = useState(false);
  const { styles } = useStyle();


  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };
  useEffect(() => {
    const textContentElement = document.querySelectorAll(".text-content");
    const size = styles.fontSize;

    if (textContentElement) {
      textContentElement.forEach((item) => {
        switch (size) {
          case "small":
            item.style.fontSize = "15px";
            break;
          case "standard":
            item.style.fontSize = "20px";
            break;
          case "large":
            item.style.fontSize = "24px";
            break;
          default:
            break;
        }
      });
    }
  }, []);

  return (
    <div className={isOpen ? `${cl.accordion__item} ${cl.open} text-content` : cl.accordion__item}>
      <div className={`${cl.accordion__header} text-content`} onClick={toggleAccordion}>
        <span className={`${cl.accordion__title} text-content`}>{title}</span>
        <span className={cl.accordion__arrow}></span>
      </div>
      <div className={cl.accordion__content}>
        {content}
      </div>
    </div>
  );
};

export default Dropdown;
