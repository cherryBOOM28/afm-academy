import React, { useState, useEffect } from 'react';

import './style.scss';
import img from './../../../../assets/images/Lesson_2_img_1.png';

import { BsPlayFill } from 'react-icons/bs';

function VideoLine({
    poster=img,
    video
}) {
    return ( 
        <div className="video-line">
            <img src={poster} alt="" />
            <BsPlayFill className='icon' size={120}/>
            {/* <div className="dim"></div> */}
        </div>
    );
}

export default VideoLine;