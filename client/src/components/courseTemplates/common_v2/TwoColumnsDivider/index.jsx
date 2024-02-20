import React, { useState, useEffect } from 'react';

import './style.scss';

function TwoColumnsDivider({
    left,
    right,
    gap=10,
    version=1,
}) {
    

    return ( 
        <div className="two-columns-divider" 
        >
            <div className="wrapper"
                style={{
                    gap: `${gap}px`
                }}
            >

                <div className="left">{ left }</div>

                <div className="right">{ right }</div>

            </div>
        </div>
    );
}

export default TwoColumnsDivider;