import React from 'react';
import Button from '../UI/button/Button';

import { useTranslation } from 'react-i18next';



const DownloadPDF = () => {
  const { t } = useTranslation();

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
    <Button onClick={handleDownload}>
      {t('download')}
    </Button>
  );
};

export default DownloadPDF;
