import React, { useEffect, useState } from "react";
import Button from '../UI/button/Button';
import { useStyle } from "../../components/VisualModal/StyleContext";

import { useTranslation } from 'react-i18next';

import VisualModal from "../../components/VisualModal/VisualModal";




const DownloadPDF = () => {
  const { t } = useTranslation();
  const [letterInterval, setLetterInterval] = useState("standard");

  const { styles } = useStyle();
  const handleIntervalChange = (interval) => {
    console.log("Interval changed");
    setLetterInterval(interval);
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

  const handleDownload = () => {
    const fileUrl = '../data/peach.pdf';
    const link = document.createElement('a');
    link.href = fileUrl;
    link.setAttribute('download', 'downloaded-file.pdf');
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div>
                  <VisualModal
        onIntervalChange={() => {}}
        styles={styles}
      />

    <div
      className="interval"
      style={{ letterSpacing: getLetterSpacing(letterInterval) }}
    >

    <Button className={`text-content`} onClick={handleDownload}>
      {t('download')}
    </Button>
    </div>
    </div>
  );
};

export default DownloadPDF;
