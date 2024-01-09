import React, { useState, useEffect } from 'react';

import './style.scss';

function ImageAndColumns({
    image,
    list,
    header,
    headerColor='black',
    listColor,
}) {
    return ( 
        <div className="image-and-columns">
            <div className="wrapper">
                <div className="image">
                    <div className="header" style={{ color: headerColor }}>{header}</div>
                    <img src={image} alt={image} />
                </div>
                <div className="columns">
                        {
                            list.map((item, index) => {

                               return (
                                <div className="column" key={index} style={{ color: listColor }}>
                                    {
                                        item
                                    }
                                </div>
                               )

                            })      
                        }
                    </div>
            </div>
        </div>
    );
}

export default ImageAndColumns;