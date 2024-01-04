import React, { useState, useEffect } from 'react';

import './style.scss';

function FlexBoxes({
    list,
    color='black',
    backgroundColor='#ccc'
}) {
    return ( 
        <div className="flex-boxes">
            {
                list.map((item, index) => (

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