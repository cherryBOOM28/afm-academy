import React, { useState, useEffect } from 'react';

import { BsFillExclamationOctagonFill } from "react-icons/bs";

import './style.scss'

function Report_Warning({ children }) {
    return ( 
        <div className="reportWarning">
            <BsFillExclamationOctagonFill className='icon' size={23}/>
            <div>
                <p>{children}</p>
            </div>
        </div>
    );
}

export default Report_Warning;