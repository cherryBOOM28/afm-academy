import React, { useState, useEffect } from "react";
import "./ReadyMadeCatalogSolution.scss";
import Footer from "../../../components/footer/Footer";
import axios from "axios";
import base_url from "../../../settings/base_url";
import Header from "../../../components/header/Header";
import { t } from "i18next";
import { useTranslation } from "react-i18next";
import VisualModal from "../../../components/VisualModal/VisualModal";
import { useStyle } from "../../../components/VisualModal/StyleContext";
import randomImg from "../../../assets/images/80.png"
import { Link } from "react-router-dom";
function ReadyMadeCatalogSolution() {
  const { t } = useTranslation();

  const [vebinars, setVebinars] = useState([]);
  const [error, setError] = useState(null);
  const [isLoading, setLoading] = useState(true);

  const [openModal, setOpenModal] = useState(false);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `${base_url}/api/aml/webinar/getWebinars`,
          {
            headers: {
              Authorization: `Bearer ${jwtToken}`,
            },
          }
        );

        if (response.status === 200) {
          // console.log(response.data)
          setVebinars(response.data);
        } else {
          // Handle other status codes if needed
          setError(response.statusText);
          // console.log(response.statusText);
        }
      } catch (error) {
        setError(error);
        console.error(error);
      }

      setLoading(false);
    };

    fetchData();
  }, []);

  const { styles, open, setOpen, checkStyle, userEntry } = useStyle();
  const [imagesHidden, setImagesHidden] = useState(false);
  const [letterInterval, setLetterInterval] = useState("standard");
  const { i18n } = useTranslation();
  const currentLanguage = i18n.language;

  const [activeTab, setActiveTab] = useState(1);

  useEffect(() => {
    if (!checkStyle) return;
    console.log(userEntry);
    if (userEntry) return;
    const textContentElement = document.querySelectorAll(".text-content");
    const size = styles.fontSize;
    setImagesHidden(!styles.showImage);

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

  const jwtToken = localStorage.getItem("jwtToken");

  const handleOpenVisualModal = () => {
    console.log("OPEN");
    setOpenVisualModal((prev) => !prev);
    setOpen((prev) => !prev);
  };
  const [openVisualModal, setOpenVisualModal] = useState(open);

  return (
    <div
      className={"vebinars-page text-content"}
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
            <VisualModal
        open={openVisualModal}
        onRemoveImages={handleRemoveImages}
        onShowImages={handleShowImages}
        onFontFamily={() => {}}
        onIntervalChange={() => {}}
        styles={styles}
      />

      

      <div>
        <Header
          dark={styles.colorMode == "dark" ? false : true}
          handleOpenVisualModal={handleOpenVisualModal}
        />
        <div className="container"></div>
      </div>

      <div className="page-content container">
        <div
          className="interval"
          style={{ letterSpacing: getLetterSpacing(letterInterval) }}
        >
          <h1
            className="text-content"
            style={{
              color:
                styles.colorMode === "dark"
                  ? "#fff"
                  : styles.colorMode === "light"
                  ? "#343434"
                  : styles.colorMode === "blue"
                  ? "#063462"
                  : "#000",
            }}
          >
            {t("ready-made solutions catalog")}
                  </h1>
        </div>
        <div style={{display:"flex"}}>
          <Link to='/main-tasks-and-activities'> <div className="bbBum" style={{ position: "relative", width: "300px", height: "200px", border: "2px black !important", borderRadius: "8px", backgroundImage: `url(${randomImg})`, textAlign:"center",color:"white",lineHeight:"3.5",alignItems:"bottom",borderColor:"black" }}> <div href style={{ zIndex:"1",position: "absolute", bottom:"0",width: "300px", height: "60px", border: "2px", borderRadius: "8px", backgroundImage: "linear-gradient(to left,blue, #3968df)", textAlign:"center",color:"white",lineHeight:"3.5" }}> Документы по ПОД/ФТ </div> </div></Link>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <Link to='/main-tasks-and-activities'> <div className="bbBum" style={{ position: "relative", width: "300px", height: "200px", border: "2px black !important", borderRadius: "8px", backgroundImage: `url(${randomImg})`, textAlign:"center",color:"white",lineHeight:"3.5",alignItems:"bottom",borderColor:"black" }}> <div href style={{ zIndex:"1",position: "absolute", bottom:"0",width: "300px", height: "60px", border: "2px", borderRadius: "8px",  backgroundImage: "linear-gradient(to left, blue, #3968df)", textAlign:"center",color:"white",lineHeight:"3.5" }}> Онлайн-консультация по ПОД/ФТ </div> </div></Link>
        </div>
        
          </div>
          <br />
          <br />
          <br />
          <br />

      <Footer />
    </div>
  );
}

export default ReadyMadeCatalogSolution;
