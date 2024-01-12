import React from 'react';
import cl from './Charter.module.css';
import DefaultHeader from '../../../components/defaultHeader/DefaultHeader';
import Footer from '../../../components/footer/Footer';
import pdf from '../../../assets/images/pdf.svg'
import DownloadPDF from '../../../components/pdfSaver/DownloadPDF';
import Header from '../../../components/header/Header';
import { t } from 'i18next';
import { useTranslation } from 'react-i18next';




function Charter() {
    const { t } = useTranslation();

    return (
        <div className={cl.charterWrapper}>
            <Header dark={true} />
            <div className={cl.container}>
                <h1 className={cl.headline}>{t('regulation')}</h1>
                <DownloadPDF />
                <div className={cl.charterContent}>
                    <img src={pdf} alt="" />
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default Charter;