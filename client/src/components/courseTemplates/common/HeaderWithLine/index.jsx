import React, { useState, useEffect } from 'react';

import './style.scss';

function HeaderWithLine({ header }) {
    return ( 
        <div className="title-with-line">
            <div className="line"> </div>
            <div>
                <h1 className='header-text'>{header}</h1>
            </div>
        </div>
    );
}

export default HeaderWithLine;