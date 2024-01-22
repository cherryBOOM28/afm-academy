import React, { useEffect, useState } from "react";
import { useStyle } from "./StyleContext";
import "./VisualModal.scss";

function VisualModal({
  open,
  onRemoveImages,
  onShowImages,
  onIntervalChange,
  dark,
}) {
  const { styles, updateStyles } = useStyle();
  const { fontSize, fontFamily, colorMode, letterInterval } = styles;
  const [clickedButton, setClickedButton] = useState(null);
  const [selectedColorMode, setSelectedColorMode] = useState(colorMode);
  const [isSpeechEnabled, setIsSpeechEnabled] = useState(false);
  const [selectedVoiceName, setSelectedVoiceName] = useState(""); // Added state for selected voice
  const [speechButtonActive, setSpeechButtonActive] = useState(false);


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
    speak("Изображения выключены", selectedVoiceName);

    onRemoveImages();
    setClickedButton("disableImages");
  };

  const handleEnableImages = () => {
    updateStyles({ showImage: true });
    localStorage.setItem("showImage", true);
    onShowImages();
    setClickedButton("enableImages");
    speak("Изображения включены", selectedVoiceName);
  };

  const handleIntervalChange = (interval) => {
    updateStyles({ letterInterval: interval });
    onIntervalChange(interval);
    localStorage.setItem("letterInterval", interval);
    speak("Интервал изменен", selectedVoiceName);


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
            speak("Размер шрифта маленький", selectedVoiceName);

            break;
          case "standard":
            item.style.fontSize = "20px";
            speak("Размер шрифта стандартный", selectedVoiceName);

            break;
          case "large":
            item.style.fontSize = "24px";
            speak("Размер шрифта большой", selectedVoiceName);

            break;
          default:
            break;
        }
      });
    }
  };

  const handleFontFamilyChange = (family) => {
    updateStyles({ fontFamily: family });
    localStorage.setItem("fontFamily", family);
    speak("Шрифт изменен", selectedVoiceName);

    const textContentElement = document.querySelector(".text-content");
    if (textContentElement) {
      textContentElement.style.fontFamily = family;
    }
  };

  const handleColorModeChange = (mode) => {
    const containerElement = document.querySelector(".text-content");
    if (containerElement) {
      containerElement.classList.remove(
        "light-mode",
        "dark-mode",
        "inverted-mode"
      );
    }
    updateStyles({ colorMode: mode });
    localStorage.setItem("colorMode", mode);
    speak("Цветовая гамма изменена", selectedVoiceName);

    if (containerElement) {
      containerElement.classList.add(mode + "-mode");
    }
    setSelectedColorMode(mode);
  };
  

  return (
    <div
      className={`main-container root-body ${
        dark ? "dark-mode" : "light-mode"
      }`}
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
              className="font1"
            >
              T
            </button>
            <button
              onClick={() => handleFontFamilyChange("Times New Roman")}
              className="font2"
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
            >
              Светлый
            </button>
            <button
              onClick={() => handleColorModeChange("dark")}
              className={`color-mode-button ${
                colorMode === "dark" ? "clicked" : ""
              }`}
            >
              Черный
            </button>
            <button
              onClick={() => handleColorModeChange("inverted")}
              className={`color-mode-button ${
                colorMode === "inverted" ? "clicked" : ""
              }`}
            >
              Инверсия
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
        className={`speech-button ${speechButtonActive ? "active" : ""}`}
      >
        Вкл.
      </button>
      <button
        onClick={handleDisableSpeech}
        disabled={!isSpeechEnabled}
        className={`speech-button ${!speechButtonActive ? "active" : ""}`}
      >
        Выкл.
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
