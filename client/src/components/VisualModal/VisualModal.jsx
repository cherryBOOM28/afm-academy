import React, { useEffect, useState } from "react";
import { useStyle } from "./StyleContext";
import HideEye from "../../../src/assets/images/hideeye.svg";
import "./VisualModal.scss";

function VisualModal({
  open,
  onRemoveImages,
  onShowImages,
  onIntervalChange,
  dark = true,
}) {
  const [speechButtonClicked, setSpeechButtonClicked] = useState(false);
  const [selectedFont, setSelectedFont] = useState("Arial");

  const { styles, updateStyles } = useStyle();
  const { fontSize, fontFamily, colorMode, letterInterval } = styles;
  const [clickedButton, setClickedButton] = useState(null);
  const [selectedColorMode, setSelectedColorMode] = useState(colorMode);
  const [isSpeechEnabled, setIsSpeechEnabled] = useState(false);
  const [selectedVoiceName, setSelectedVoiceName] = useState("");
  const [speechButtonActive, setSpeechButtonActive] = useState(false);
  const [resetIntervalSpacing, setResetIntervalSpacing] = useState(false);

  useEffect(() => {
    if ("speechSynthesis" in window) {
      setIsSpeechEnabled(true);
    }
  }, []);

  const speak = (text, voiceName) => {
    const synthesis = window.speechSynthesis;
    setTimeout(() => {
      synthesis.cancel();
      const voices = synthesis.getVoices();
      const selectedVoice = voices.find((voice) => voice.name === voiceName);
      const utterance = new SpeechSynthesisUtterance(text);
      utterance.voice = selectedVoice;
      synthesis.speak(utterance);
    }, 100);
  };

  const handleEnableSpeech = () => {
    setIsSpeechEnabled(true);
    setSpeechButtonActive(true);
    speak("Синтетическая речь включена", selectedVoiceName);
  };

  const handleDisableSpeech = () => {
    setIsSpeechEnabled(false);
    setSpeechButtonActive(false);
    speak("Синтетическая речь выключена");
  };

  if (!open) return null;

  const handleDisableImages = () => {
    updateStyles({ showImage: false });
    localStorage.setItem("showImage", false);

    if (isSpeechEnabled) speak("Изображения выключены", selectedVoiceName);

    onRemoveImages();
    setClickedButton("disableImages");
  };

  const handleEnableImages = () => {
    updateStyles({ showImage: true });
    localStorage.setItem("showImage", true);
    onShowImages();
    setClickedButton("enableImages");
    if (isSpeechEnabled) speak("Изображения включены", selectedVoiceName);
  };

  const handleIntervalChange = (interval) => {
    updateStyles({ letterInterval: interval });
    onIntervalChange(interval);
    if (isSpeechEnabled) speak("Интервал изменен", selectedVoiceName);
  };

  const handleFontSizeChange = (size) => {
    updateStyles({ fontSize: size, fontFamily });
    localStorage.setItem("fontSize", size);
    const textContentElement = document.querySelectorAll(".text-content");
    if (textContentElement) {
      textContentElement.forEach((item) => {
        switch (size) {
          case "small":
            item.style.fontSize = "15px";
            item.style.lineHeight = "17px";
            if (isSpeechEnabled)
              speak("Размер шрифта маленький", selectedVoiceName);

            break;
          case "standard":
            item.style.fontSize = "20px";
            item.style.lineHeight = "22px";

            if (isSpeechEnabled)
              speak("Размер шрифта стандартный", selectedVoiceName);

            break;
          case "large":
            item.style.fontSize = "24px";
            item.style.lineHeight = "26px";

            if (isSpeechEnabled)
              speak("Размер шрифта большой", selectedVoiceName);

            break;
          default:
            break;
        }
      });
    }
  };

  const handleFontFamilyChange = (family) => {
    setSelectedFont(family);
    updateStyles({ fontFamily: family });
    localStorage.setItem("fontFamily", family);
    if (isSpeechEnabled) speak("Шрифт изменен", selectedVoiceName);

    const textContentElement = document.querySelector(".text-content");
    if (textContentElement) {
      textContentElement.style.fontFamily = family;
    }
  };

  const handleColorModeChange = (mode) => {
    const containerElement = document.querySelector(".text-content");
    if (containerElement) {
      containerElement.classList.remove("light-mode", "dark-mode", "blue-mode");
    }
    updateStyles({ colorMode: mode });
    localStorage.setItem("colorMode", mode);
    if (isSpeechEnabled) speak("Цветовая гамма изменена", selectedVoiceName);

    if (containerElement) {
      containerElement.classList.add(mode + "-mode");
    }
    setSelectedColorMode(mode);
  };
  const lightButtonStyle = {
    background: "white",
    color: "black",
  };

  const darkButtonStyle = {
    background: "black",
    color: "white",
  };

  const blueButtonStyle = {
    background: "#9dd1ff",
    color: "#063462",
  };
  const handleSpeechButtonClick = (clicked) => {
    console.log("Button clicked:", clicked);
    setSpeechButtonClicked(clicked);
  };

  const handleRefreshPage = () => {
    setResetIntervalSpacing(true);
    window.location.reload();
  };

  return (
    <div
      className={`main-container root-body visual-modal ${
        styles.colorMode == "dark" ? "dark-mode" : "light-mode"
      }`}
      style={{
        color: !dark ? "white" : styles.colorMode == "dark" ? "white" : "black",
      }}
    >
      <div
        className="interval"
        style={{ letterSpacing: getLetterSpacing(letterInterval) }}
      >
        <div className="text-button-header">
          <div className="section">
            <span>Шрифт</span>
            <button
              onClick={() => handleFontFamilyChange("Arial")}
              className={`font1 ${selectedFont === "Arial" ? "clicked" : ""}`}
            >
              T
            </button>
            <button
              onClick={() => handleFontFamilyChange("Times New Roman")}
              className={`font2 ${
                selectedFont === "Times New Roman" ? "clicked" : ""
              }`}
            >
              T
            </button>

            <span>Размер</span>
            <button
              onClick={() => handleFontSizeChange("small")}
              className={`font-size-button ${
                fontSize === "small" ? "clicked" : ""
              }`}
            >
              Small
            </button>
            <button
              onClick={() => handleFontSizeChange("standard")}
              className={`font-size-button ${
                fontSize === "standard" ? "clicked" : ""
              }`}
            >
              Standard
            </button>
            <button
              onClick={() => handleFontSizeChange("large")}
              className={`font-size-button ${
                fontSize === "large" ? "clicked" : ""
              }`}
            >
              Large
            </button>
            <span>Цвет</span>
            <button
              onClick={() => handleColorModeChange("light")}
              className={`color-mode-button ${
                colorMode === "light" ? "clicked" : ""
              }`}
              style={lightButtonStyle}
            >
              A
            </button>
            <button
              onClick={() => handleColorModeChange("dark")}
              className={`color-mode-button ${
                colorMode === "dark" ? "clicked" : ""
              }`}
              style={darkButtonStyle}
            >
              A
            </button>
            <button
              onClick={() => handleColorModeChange("blue")}
              className={`color-mode-button ${
                colorMode === "blue" ? "clicked" : ""
              }`}
              style={blueButtonStyle}
            >
              A
            </button>

            <span>Интервал</span>
            <button
              onClick={() => handleIntervalChange("standard")}
              className={`interval-button ${
                letterInterval === "standard" ? "clicked" : ""
              }`}
            >
              Стандартный
            </button>
            <button
              onClick={() => handleIntervalChange("medium")}
              className={`interval-button ${
                letterInterval === "medium" ? "clicked" : ""
              }`}
            >
              Средний
            </button>
            <button
              onClick={() => handleIntervalChange("large")}
              className={`interval-button ${
                letterInterval === "large" ? "clicked" : ""
              }`}
            >
              Большой
            </button>

            <span>Изображения</span>
            <button
              onClick={() => handleEnableImages()}
              className={`enable-button ${
                clickedButton === "enableImages" ? "clicked" : ""
              }`}
            >
              Вкл.
            </button>
            <button
              onClick={() => handleDisableImages()}
              className={`disable-button ${
                clickedButton === "disableImages" ? "clicked" : ""
              }`}
            >
              Выкл.
            </button>

            <span>Синтетическая речь</span>
            <button
              onClick={handleEnableSpeech}
              disabled={!isSpeechEnabled}
              className={`speech-button ${
                speechButtonActive ? "active clicked" : ""
              }`}
            >
              Вкл.
            </button>
            <button
              onClick={handleDisableSpeech}
              disabled={!isSpeechEnabled}
              className={`speech-button ${
                !speechButtonActive ? "active clicked" : ""
              }`}
            >
              Выкл.
            </button>
            <button
              onClick={() => {
                handleRefreshPage();
                handleColorModeChange("light");
              }}
              className="refresh-button"
            >
              <img src={HideEye} alt="Reset" className="reset-icon" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

function getLetterSpacing(interval) {
  switch (interval) {
    case "medium":
      return "2px";
    case "large":
      return "4px";
    default:
      return "1px";
  }
}

export default VisualModal;
