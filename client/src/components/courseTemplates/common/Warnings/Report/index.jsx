import React, { useState, useEffect } from 'react';
import HtmlContent from 'dangerously-set-html-content';

import { BsFillExclamationOctagonFill } from "react-icons/bs";

import './style.scss'

function Report_Warning({ children, text }) {

    if (text) {
        // Replace newline characters with HTML line breaks
        const formattedText = text.replace(/\n/g, '<br />');

        return (
            <div className="reportWarning">
                <div className="icon-wrapper">
                    <BsFillExclamationOctagonFill className='icon' size={23}/>
                </div>
                <div>
                    {/* Using HtmlContent to render HTML */}
                    <p><HtmlContent html={formattedText} /></p>
                </div>
            </div>
        );
    }

    return ( 
        <div className="reportWarning">
            <div className="icon-wrapper">
                <BsFillExclamationOctagonFill className='icon' size={23}/>
            </div>
            <div>
                <p>{children}</p>
            </div>
        </div>
    );
}

export default Report_Warning;