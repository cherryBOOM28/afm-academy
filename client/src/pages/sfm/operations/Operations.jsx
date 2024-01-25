import React, { useEffect, useState } from "react";
import cl from "./Operations.module.css";
import DefaultHeader from "../../../components/defaultHeader/DefaultHeader";
import Footer from "../../../components/footer/Footer";
import graphIcon from "../../../assets/icons/graph.svg";
import groupIcon from "../../../assets/icons/group.svg";
import timeIcon from "../../../assets/icons/time.svg";
import worldIcon from "../../../assets/icons/earth.svg";
import Header from "../../../components/header/Header";
import { useStyle } from "../../../components/VisualModal/StyleContext";
import VisualModal from "../../../components/VisualModal/VisualModal";
import { useTranslation } from "react-i18next";

function Operations() {
  const { styles, open, setOpen } = useStyle();
  const [imagesHidden, setImagesHidden] = useState(false);
  const [letterInterval, setLetterInterval] = useState("standard");
  const { t } = useTranslation();
  const { i18n } = useTranslation();
  const currentLanguage = i18n.language;

  const [activeTab, setActiveTab] = useState(1);

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
    handleColorModeChange();
  }, []);
  const handleColorModeChange = (mode) => {
    // Remove previous color mode classes
    const containerElement = document.querySelector(".text-content");
    if (containerElement) {
      containerElement.classList.remove(
        "light-mode",
        "dark-mode",
        "inverted-mode",
        "blue-mode"
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
  const handleOpenVisualModal = () => {
    console.log("OPEN");
    setOpenVisualModal((prev) => !prev);
    setOpen((prev) => !prev);
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
    const textContentElement = document.querySelector(".text-content");
    const family = styles.fontFamily;

    if (family) {
      textContentElement.style.fontFamily = family;
    }
  }, []);

  return (
    <div className={`${cl.OperationsWrapper} text-content`}
    style={{
      background: styles.colorMode === "dark" ? "#000" : styles.colorMode === "light" ? "#fff" : styles.colorMode === "blue" ? "#9dd1ff" : "#000"
    }}
    >
      <VisualModal
        open={openVisualModal}
        onRemoveImages={handleRemoveImages}
        onShowImages={handleShowImages}
        onIntervalChange={handleIntervalChange}
        styles={styles}
      />
      <Header
        dark={styles.colorMode == "dark" ? false : true}
        handleOpenVisualModal={handleOpenVisualModal}
      />
      <div className={cl.container}>
        <div
          className="interval"
          style={{ letterSpacing: getLetterSpacing(letterInterval) }}
        >
          <h1 className={`${cl.headline} text-content`}
           style={{
            color: styles.colorMode === "dark" ? "#fff" : styles.colorMode === "light" ? "#343434" : styles.colorMode === "blue" ? "#063462" : "#000",
          }}
          >
            {t("transactions subject to financial monitoring")}
          </h1>
          <div className={cl.blocksContent}

          >
            <div className={cl.block}
             style={{
              background: styles.colorMode === "dark" ? "#000" : styles.colorMode === "light" ? "#f2f2f2" : styles.colorMode === "blue" ? "#9dd1ff" : "#000",
            }}
            >
              <img src={graphIcon} alt="graphIcon" className={cl.blockImg} />
              <p className={`${cl.blockHeadline} text-content`}
              style={{
                color: styles.colorMode === "dark" ? "#fff" : styles.colorMode === "light" ? "#000" : styles.colorMode === "blue" ? "#063462" : "#000",

              }}
              >
                {t("descOperastions1")}
              </p>
              <p className={`${cl.blockText} text-content`}
              style={{
                color: styles.colorMode === "dark" ? "#fff" : styles.colorMode === "light" ? "#000" : styles.colorMode === "blue" ? "#063462" : "#000",

              }}
              >
                {t("descOperastions2")}
              </p>
            </div>
            <div className={cl.block}
             style={{
              background: styles.colorMode === "dark" ? "#000" : styles.colorMode === "light" ? "#f2f2f2" : styles.colorMode === "blue" ? "#9dd1ff" : "#000",
            }}
            >
              <img src={timeIcon} alt="timeIcon" className={cl.blockImg} />
              <p className={`${cl.blockHeadline} text-content`}
              style={{
                color: styles.colorMode === "dark" ? "#fff" : styles.colorMode === "light" ? "#000" : styles.colorMode === "blue" ? "#063462" : "#000",

              }}
              >
                {t("descOperastions3")}
              </p>
              <p className={`${cl.blockText} text-content`}
              style={{
                color: styles.colorMode === "dark" ? "#fff" : styles.colorMode === "light" ? "#000" : styles.colorMode === "blue" ? "#063462" : "#000",

              }}
              >
                {t("descOperastions4")}{" "}
              </p>
            </div>
            <div className={cl.block}
             style={{
              background: styles.colorMode === "dark" ? "#000" : styles.colorMode === "light" ? "#f2f2f2" : styles.colorMode === "blue" ? "#9dd1ff" : "#000",
            }}
            >
              <img src={groupIcon} alt="groupIcon" className={cl.blockImg} />
              <p className={`${cl.blockHeadline} text-content`}
              style={{
                color: styles.colorMode === "dark" ? "#fff" : styles.colorMode === "light" ? "#000" : styles.colorMode === "blue" ? "#063462" : "#000",

              }}
              >
                {t("descOperastions5")}
              </p>
              <p className={`${cl.blockText} text-content`}
              style={{
                color: styles.colorMode === "dark" ? "#fff" : styles.colorMode === "light" ? "#000" : styles.colorMode === "blue" ? "#063462" : "#000",

              }}
              >
                {t("descOperastions6")}
              </p>
            </div>
            <div className={cl.block}
             style={{
              background: styles.colorMode === "dark" ? "#000" : styles.colorMode === "light" ? "#f2f2f2" : styles.colorMode === "blue" ? "#9dd1ff" : "#000",
            }}
            >
              <img src={worldIcon} alt="worldIcon" className={cl.blockImg} />
              <p className={`${cl.blockHeadline} text-content`}
              style={{
                color: styles.colorMode === "dark" ? "#fff" : styles.colorMode === "light" ? "#000" : styles.colorMode === "blue" ? "#063462" : "#000",

              }}
              >
                {t("descOperastions7")}
              </p>
              <p className={`${cl.blockText} text-content`}
              style={{
                color: styles.colorMode === "dark" ? "#fff" : styles.colorMode === "light" ? "#000" : styles.colorMode === "blue" ? "#063462" : "#000",

              }}
              >
                {t("descOperastions8")}
              </p>
            </div>
          </div>
          <p className={`${cl.text} text-content`}
          style={{
            color: styles.colorMode === "dark" ? "#fff" : styles.colorMode === "light" ? "#000" : styles.colorMode === "blue" ? "#063462" : "#000",

          }}
          >{t("descOperastions9")}</p>
          <div className={cl.rule}
           style={{
            background: styles.colorMode === "dark" ? "#000" : styles.colorMode === "light" ? "#f2f2f2" : styles.colorMode === "blue" ? "#9dd1ff" : "#000",
          }}
          >
            <p className={`${cl.ruleText} text-content`}
            style={{
              color: styles.colorMode === "dark" ? "#fff" : styles.colorMode === "light" ? "#000" : styles.colorMode === "blue" ? "#063462" : "#000",

            }}
            >
              {t("descOperastions10")}
            </p>
          </div>
          <div className={cl.rule}
           style={{
            background: styles.colorMode === "dark" ? "#000" : styles.colorMode === "light" ? "#f2f2f2" : styles.colorMode === "blue" ? "#9dd1ff" : "#000",
          }}
          >
            <p className={`${cl.ruleText} text-content`}
            style={{
              color: styles.colorMode === "dark" ? "#fff" : styles.colorMode === "light" ? "#000" : styles.colorMode === "blue" ? "#063462" : "#000",

            }}
            >
              {t("descOperastions11")}
            </p>
          </div>
          <div className={cl.numberBlocks}>
            <div className={cl.smallBlocks}>
              <div className={cl.innerBlock}
              style={{
                background: styles.colorMode === "dark" ? "#000" : styles.colorMode === "light" ? "#f2f2f2" : styles.colorMode === "blue" ? "#9dd1ff" : "#000",
              }}
              >
                <p className={`${cl.numberBlocksText} text-content`}
                style={{
                  color: styles.colorMode === "dark" ? "#fff" : styles.colorMode === "light" ? "#000" : styles.colorMode === "blue" ? "#063462" : "#000",

                }}
                >
                  {t("descOperastions12")}
                </p>
              </div>
              <div className={cl.innerBlock}
              style={{
                background: styles.colorMode === "dark" ? "#000" : styles.colorMode === "light" ? "#f2f2f2" : styles.colorMode === "blue" ? "#9dd1ff" : "#000",
              }}
              >
                <p className={`${cl.numberBlocksText} text-content`}
                style={{
                  color: styles.colorMode === "dark" ? "#fff" : styles.colorMode === "light" ? "#000" : styles.colorMode === "blue" ? "#063462" : "#000",

                }}
                >
                  {t("descOperastions13")}
                </p>
              </div>
              <div className={cl.innerBlock}
              style={{
                background: styles.colorMode === "dark" ? "#000" : styles.colorMode === "light" ? "#f2f2f2" : styles.colorMode === "blue" ? "#9dd1ff" : "#000",
              }}
              >
                <p className={`${cl.numberBlocksText} text-content`}
                style={{
                  color: styles.colorMode === "dark" ? "#fff" : styles.colorMode === "light" ? "#000" : styles.colorMode === "blue" ? "#063462" : "#000",

                }}
                >
                  {t("descOperastions14")}
                </p>
              </div>
            </div>
            <div className={cl.bigBlock}
            style={{
              background: styles.colorMode === "dark" ? "#000" : styles.colorMode === "light" ? "#f2f2f2" : styles.colorMode === "blue" ? "#9dd1ff" : "#000",
            }}
            >
              <p className={`${cl.numberBlocksText} text-content`}
              style={{
                color: styles.colorMode === "dark" ? "#fff" : styles.colorMode === "light" ? "#000" : styles.colorMode === "blue" ? "#063462" : "#000",

              }}
              >
                {t("descOperastions15")}
              </p>
            </div>
          </div>
          <p className={`${cl.text} text-content`}
          style={{
            color: styles.colorMode === "dark" ? "#fff" : styles.colorMode === "light" ? "#000" : styles.colorMode === "blue" ? "#063462" : "#000",

          }}
          >{t("descOperastions16")}</p>
          <p className={`${cl.text} text-content`}
          style={{
            color: styles.colorMode === "dark" ? "#fff" : styles.colorMode === "light" ? "#000" : styles.colorMode === "blue" ? "#063462" : "#000",

          }}
          >{t("descOperastions17")}</p>
          <p className={`${cl.text__last} text-content`}
          style={{
            color: styles.colorMode === "dark" ? "#fff" : styles.colorMode === "light" ? "#000" : styles.colorMode === "blue" ? "#063462" : "#000",

          }}
          >
            {t("descOperastions18")}
          </p>
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default Operations;
