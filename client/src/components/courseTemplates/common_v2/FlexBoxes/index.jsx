import React, { useState, useEffect } from 'react';

import './style.scss';

function FlexBoxes({
    data,
    color='black',
    backgroundColor='#ccc'
}) {
    return ( 
        <div className="flex-boxes">
            {
                data.map((item, index) => (

                    <div 
                        className="box"
                        key={index}
                        style={{
                            color: color,
                            backgroundColor: backgroundColor 
                        }}
                    >
                        { item }
                    </div>

                ))
            }
        </div>
    );
}

export default FlexBoxes;