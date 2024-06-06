import React, { useState, useEffect } from "react";

import DefaultHeader from "../../components/defaultHeader/DefaultHeader";
import Footer from "../../components/footer/Footer";

import "./Dictionary.scss";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../auth/AuthContext";
import Header from "../../components/header/Header";
import { useTranslation } from "react-i18next";
import VisualModal from "../../components/VisualModal/VisualModal";

import { useStyle } from "../../components/VisualModal/StyleContext";

function DictionaryPage() {
    const { styles, open, setOpen, userEntry, checkStyle } = useStyle();
    const [imagesHidden, setImagesHidden] = useState(false);
    const [letterInterval, setLetterInterval] = useState("standard");
    const { t } = useTranslation();
    const { i18n } = useTranslation();
    const currentLanguage = i18n.language;

    const [activeTab, setActiveTab] = useState(1);

    const fontSizes = {
        small: {
            fontSize: "15px",
            lineHeight: "17px",
            caption: { fontSize: "18px", lineHeight: "20px" },
            subtitle: { fontSize: "14px", lineHeight: "16px" },
        },
        standard: {
            fontSize: "16px",
            lineHeight: "18px",
            caption: { fontSize: "26px", lineHeight: "28px" },
            subtitle: { fontSize: "18px", lineHeight: "20px" },
        },
        large: {
            fontSize: "24px",
            lineHeight: "26px",
            caption: { fontSize: "32px", lineHeight: "34px" },
            subtitle: { fontSize: "22px", lineHeight: "24px" },
        },
    };
    useEffect(() => {
        if (!checkStyle) return;

        if (userEntry) return;

        const textContentElement = document.querySelectorAll(".text-content");
        const size = styles.fontSize;
        setImagesHidden(!styles.showImage);

        if (textContentElement) {
            textContentElement.forEach((item) => {
                switch (size) {
                    case "small":
                    case "large":
                        // Use specified size for small and large modes
                        item.style.fontSize = fontSizes[size].fontSize;
                        item.style.lineHeight = fontSizes[size].lineHeight;

                        // Adjust size for caption and subtitle in small and large modes
                        if (item.classList.contains("caption")) {
                            item.style.fontSize = fontSizes[size].caption.fontSize;
                            item.style.lineHeight = fontSizes[size].caption.lineHeight;
                        } else if (item.classList.contains("subtitle")) {
                            item.style.fontSize = fontSizes[size].subtitle.fontSize;
                            item.style.lineHeight = fontSizes[size].subtitle.lineHeight;
                        }
                        break;

                    case "standard":
                        // Use different sizes for different elements in standard mode
                        if (item.classList.contains("caption")) {
                            item.style.fontSize = fontSizes[size].caption.fontSize;
                            item.style.lineHeight = fontSizes[size].caption.lineHeight;
                        } else if (item.classList.contains("subtitle")) {
                            item.style.fontSize = fontSizes[size].subtitle.fontSize;
                            item.style.lineHeight = fontSizes[size].subtitle.lineHeight;
                        } else {
                            // Default size for other elements
                            item.style.fontSize = fontSizes[size].fontSize;
                            item.style.lineHeight = fontSizes[size].lineHeight;
                        }
                        break;

                    default:
                        break;
                }
            });
        }
        handleColorModeChange();

    }, [checkStyle, userEntry, styles, setImagesHidden, fontSizes]);

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

    const [isSurvey, setSurvey] = useState(true);

    const [surveyList, setSurveyList] = useState([]);
    const [testList, setTestList] = useState([]);

    const navigate = useNavigate();

    const { isLoggedIn } = useAuth();

    useEffect(() => {
        if (!checkStyle) return;
        console.log(userEntry);
        if (userEntry) return;
        setSurveyList([
            {
                id: "_123",
                date_open: "2023-08-24",
                date_close: "2023-08-24",
                name: t("anketa"),
                status: "active",
            },
            {
                id: "_123",
                date_open: "2023-08-24",
                date_close: "2023-08-24",
                name: t("anketa"),
                status: "-",
            },
            {
                id: "_123",
                date_open: "2023-08-24",
                date_close: "2023-08-24",
                name: t("anketa"),
                status: "active",
            },
        ]);
    }, []);


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

    return (
        <div
            className="surveys-page"
            style={{
                background: styles.colorMode === "dark" ? "#000" : styles.colorMode === "light" ? "#fff" : styles.colorMode === "blue" ? "#9dd1ff" : "#000"
            }}
        >
            <div
                className="text-context"
                style={{
                    background: styles.colorMode === "dark" ? "#000" : styles.colorMode === "light" ? "#fff" : styles.colorMode === "blue" ? "#9dd1ff" : "#000"
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
                <Header
                    dark={styles.colorMode == "dark" ? false : true}
                    handleOpenVisualModal={handleOpenVisualModal}
                />
                <div>
                    <div className="container"></div>
                </div>
                <div
                    className="interval"
                    style={{ letterSpacing: getLetterSpacing(letterInterval) }}
                >
                    <main className="page-content container">
                    <div className="main-pon" style={{marginTop:"100px",display: "grid", justifyContent:"center"}}>
                        <div >
                            <h1 style={{textAlign: "center",fontSize:"30px"}}>ЧАСТО ВСТРЕЧАМЫЕ ПОНЯТИЯ</h1>
                        </div>
                        <div>
                            <p style={{padding: "20px 50px", backgroundColor: "#1A2751",color: "white", borderRadius:"30px",fontSize: "18px", textAlign:"center"}}>из сферы противодействия отмывания доходов и финансирование терроризма</p>
                        </div>
                    </div>
                    </main>
                    </div>
            </div>
            <Footer />
        </div>
    );
}

export default DictionaryPage;
