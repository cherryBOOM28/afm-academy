import React, { useEffect, useState } from "react";
import cl from "./DirectorPage.module.css";
import { useNavigate, useParams } from "react-router-dom";
import data_ru from "../structure/structureData ru.json";
import data_kz from "../structure/structureData kz.json";
import data_eng from "../structure/structureData eng.json";
import DefaultHeader from "../../../components/defaultHeader/DefaultHeader";
import Button from "../../../components/UI/button/Button";
import Footer from "../../../components/footer/Footer";
import Comments from "../../../components/commentSection/Comments";

import ModalWindow from "../../../components/ModalWindow/ModalWindow";
import Header from "../../../components/header/Header";

import { useTranslation } from "react-i18next";

import { useStyle } from "../../../components/VisualModal/StyleContext";
import VisualModal from "../../../components/VisualModal/VisualModal";

const DirectorPage = () => {
  const { styles, open, setOpen } = useStyle();
  const [imagesHidden, setImagesHidden] = useState(false);
  const [letterInterval, setLetterInterval] = useState("standard");
  const { t } = useTranslation();
  const { i18n } = useTranslation();
  const currentLanguage = i18n.language;

  const [activeTab, setActiveTab] = useState(1);

  const handleOpenVisualModal = () => {
    console.log("OPEN");
    setOpenVisualModal((prev) => !prev);
    setOpen((prev) => !prev);
  };

  useEffect(() => {
    const textContentElement = document.querySelectorAll(".text-content");
    const size = styles.fontSize;
    setImagesHidden(!styles.showImage);

    if (textContentElement) {
      textContentElement.forEach((item) => {
        switch (size) {
          case "small":
            item.style.fontSize = "15px";
            item.style.lineHeight = "17px";
            break;
          case "standard":
            item.style.fontSize = "20px";
            item.style.lineHeight = "22px";
            break;
          case "large":
            item.style.fontSize = "24px";
            item.style.lineHeight = "26px";
            break;
          default:
            break;
        }
      });
    }

    handleColorModeChange();
  }, []);
  const handleColorModeChange = (mode) => {
    // Remove previous color mode classes
    const containerElement = document.querySelector(".text-content");
    if (containerElement) {
      containerElement.classList.remove(
        "light-mode",
        "dark-mode",
        "inverted-mode"
      );
    }

    const { colorMode } = styles;

    if (containerElement) {
      containerElement.classList.add(colorMode + "-mode");
    }
  };

  const handleTabClick = (tabIndex) => {
    setActiveTab(tabIndex);
  };

  const [openVisualModal, setOpenVisualModal] = useState(open);

  const handleRemoveImages = () => {
    console.log("Images hidden");

    setImagesHidden(true);
  };

  const handleShowImages = () => {
    setImagesHidden(false);
  };

  const handleIntervalChange = (interval) => {
    console.log("Interval changed");
    setLetterInterval(interval);
  };

  const getShowImage = () => {
    return imagesHidden;
  };

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
  useEffect(() => {
    const textContentElement = document.querySelectorAll(".text-content");
    const family = styles.fontFamily;

    if (textContentElement) {
      textContentElement.forEach((item) => {
        if (family) {
          item.style.fontFamily = family;
        }
      });
    }
  }, [styles.fontFamily]);

  const dataFile =
    currentLanguage === "ru"
      ? require("../structure/structureData ru.json")
      : currentLanguage === "kz"
      ? require("../structure/structureData kz.json")
      : require("../structure/structureData eng.json");

  const findCardDataById = (id) => {
    // Replace this with your logic to find the card data based on its ID
    return dataFile.cards.find((card) => card.id === id);
  };

  const navigate = useNavigate();
  const { id } = useParams();
  const cardData = findCardDataById(id);

  const [showModal, setShowModal] = useState(false);
  const [request, setRequest] = useState({
    email: "",
    name: "",
    phone: "",
  });

  const requestOnchange = (key, value) => {
    setRequest({ ...request, [key]: value });
  };

  const handleRequestSend = () => {
    setShowModal(false);
  };

  const handleGoBack = () => {
    navigate(-1); // Navigate back to the previous page
  };

  if (!cardData) {
    // Handle the case when the cardData is not available
    return <p>Data not found.</p>;
  }

  return (
    <div
      className={cl.directorPageWrapper}
      style={{
        background:
          styles.colorMode === "dark"
            ? "#000"
            : styles.colorMode === "light"
            ? "#fff"
            : styles.colorMode === "blue"
            ? "#9dd1ff"
            : "#000",
      }}
    >
      <VisualModal
        open={openVisualModal}
        onRemoveImages={handleRemoveImages}
        onShowImages={handleShowImages}
        onFontFamily={() => {}}
        onIntervalChange={() => {}}
        styles={styles}
      />
      <Header dark={styles.colorMode == "dark" ? false : true} 
      handleOpenVisualModal={handleOpenVisualModal}
      />
      <div
        className={cl.container}
        style={{
          background:
            styles.colorMode === "dark"
              ? "#000"
              : styles.colorMode === "light"
              ? "#f2f2f2"
              : styles.colorMode === "blue"
              ? "#9dd1ff"
              : "#000",
        }}
      >
        <div className={cl.card}>
          <img
            src={cardData.photo}
            alt="Director profile"
            className={cl.card__img}
          />
          <div className={cl.card__block}>
            <div className={cl.cardContent}>
              <h2 className={cl.card__title}
               style={{
                color: styles.colorMode === "dark" ? "#fff" : styles.colorMode === "light" ? "#3A3939" : styles.colorMode === "blue" ? "#063462" : "#000",
            }}
              >{cardData.title}</h2>
              <p className={cl.card__name}
               style={{
                color: styles.colorMode === "dark" ? "#fff" : styles.colorMode === "light" ? "#3A3939" : styles.colorMode === "blue" ? "#063462" : "#000",
            }}
              >{cardData.name}</p>
              <p className={cl.card__text}
               style={{
                color: styles.colorMode === "dark" ? "#fff" : styles.colorMode === "light" ? "#3A3939" : styles.colorMode === "blue" ? "#063462" : "#000",
            }}
              >{cardData.text}</p>
            </div>
            <div style={{ display: "flex", gap: "10px" }}>
              <Button onClick={() => setShowModal(true)} className={cl.btn}>
                Обратиться
              </Button>
              <Button onClick={handleGoBack} className={cl.btn}>
                Назад
              </Button>
            </div>
          </div>
        </div>
        {/* <Comments commentsUrl="http://localhost:3000/structure" currentUserId="1" postId={id} /> */}
      </div>
      <Footer />
      {showModal ? (
        <ModalWindow title={"Обратиться"} setShowModal={setShowModal}>
          <FormInput
            title={"Почта"}
            field={"email"}
            onChange={requestOnchange}
          />
          <FormInput title={"ФИО"} field={"name"} onChange={requestOnchange} />
          <FormInput
            title={"Номер телефона"}
            field={"phone"}
            onChange={requestOnchange}
          />
          <div
            style={{
              display: "flex",
              justifyContent: "end",
              padding: "0px 20px",
            }}
          >
            <div
              style={{
                background: "#1F3C88",
                padding: "10px 20px",
                color: "white",
                fontSize: "16px",
                borderRadius: "5px",
                outline: "none",
                cursor: "pointer",
              }}
              onClick={handleRequestSend}
            >
              Отправить
            </div>
          </div>
        </ModalWindow>
      ) : (
        <></>
      )}
    </div>
  );
};

const FormInput = ({ title, field, onChange }) => {
  const labelStyle = {
    fontFamily: "Roboto",
    fontSize: "1.2rem",
    paddingLeft: "10px",
  };

  const inputStyle = {
    color: "black",
    // width: '500px',
    border: "1px solid black",
    borderRadius: "5px",
    fontSize: "1.2rem",
    padding: "10px",
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "5px",
        marginBottom: "20px",
        padding: "0px 20px",
      }}
    >
      <label style={labelStyle} htmlFor={field}>
        {title}
      </label>
      <input
        style={inputStyle}
        placeholder={field}
        type="text"
        name={field}
        onChange={(e) => {
          let value = e.target.value;
          onChange(field, value);
          // console.log(onChange)
        }}
      />
    </div>
  );
};

export default DirectorPage;
