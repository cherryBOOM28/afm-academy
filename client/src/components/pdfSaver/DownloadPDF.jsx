import React from 'react';
import Button from '../UI/button/Button';


const DownloadPDF = () => {
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
      Скачать
    </Button>
  );
};

export default DownloadPDF;
