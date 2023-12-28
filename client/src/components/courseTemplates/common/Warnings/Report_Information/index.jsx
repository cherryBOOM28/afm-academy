import React, { useState, useEffect } from 'react';

import { IoInformationCircle } from "react-icons/io5";

import './style.scss'

function Report_Information({ children }) {
    return ( 
        <div className="reportInformation">
            <div className="icon-wrapper">
                <IoInformationCircle className='icon' size={23}/>
            </div>
            <div>
                <p>{children}</p>
            </div>
        </div>
    );
}

export default Report_Information;