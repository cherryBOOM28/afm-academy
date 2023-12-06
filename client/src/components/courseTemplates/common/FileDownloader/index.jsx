import React, { useState, useEffect } from 'react';

import './style.scss';

import pdf from './pdf-file.png'
import download from './download.png'

function FileDownloader({
    file,
    fileName,
    type,
    color
}) {
    const defaultType = 'pdf'
    const _type = type || defaultType;

    const fileImg = pdf;

    if (_type !== 'pdf') {
        // set other file type icons to fileImg
        
    }

    return ( 
        <div className="file-downloader-wrapper">
            <div className='course-file'style={{ borderColor: color || '#CADEFC' }}>
                <img src={pdf} alt="file-icon" className='file-icon' />
                <div>
                    <h6>{fileName}</h6>
                    <p>568.9KB</p>
                </div>
                <img src={download} alt="download-icon" className='download' height={31}/>
            </div>
        </div>
     );
}

export default FileDownloader;