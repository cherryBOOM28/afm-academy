import React, { useState, useEffect } from 'react';

import { BsFillPlayCircleFill } from "react-icons/bs";
import './style.scss';

function VideoWithTitleAndText({
    url,
    title,
    text,
}) {
    return ( 
        <div className="videoWithTitleAndText">
            <div className="videoWithTitleAndText-body">
                <div className="videoWithTitleAndText-text">
                    <h1>{title}</h1>
                    <p>{text}</p>
                </div>
                <div className="videoWithTitleAndText-video">
                    {/* <iframe src={url} title={title} /> */}
                    <div className="play-icon">
                        <BsFillPlayCircleFill size={'50px'}/>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default VideoWithTitleAndText;