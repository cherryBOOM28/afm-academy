import React, { useState, useEffect } from 'react';

import './style.scss';
import stage_1 from './static/stage_1.svg'
import stage_2 from './static/stage_2.svg'
import stage_3 from './static/stage_3.svg'
import { AiOutlinePlus } from 'react-icons/ai';

function StageDropDown({

}) {
    return ( 
        <div className="stage-dropdown">
            <div className="wrapper">

                <div className="body">

                    <div>
                        <div className="icon">
                            <img src={stage_1} alt="stage 1" />
                        </div>
                        <div className="line"></div>
                        <div className="open-icon">
                        {/* {
                            open  */}
                                {/* ? <AiOutlineMinus style={{color: color}} size={25} />  */}
                                <AiOutlinePlus size={25}/>
                        {/* } */}
                        </div>
                        <div className="text">
                            Ст. 165 УК КазССР
                        </div>

                        <div className="inner">
                            <div>
                                Использование денежных средств и иного имущества, приобретенных или добытых преступным путем, для занятия предпринимательской деятельностью или иной не запрещенной законом деятельностью
                            </div>
                        </div>
                    </div>

                    <div>
                        <div className="icon">
                            <img src={stage_2} alt="stage 2" />
                        </div>
                        <div className="line"></div>
                        <div className="open-icon">
                        {/* {
                            open  */}
                                {/* ? <AiOutlineMinus style={{color: color}} size={25} />  */}
                                <AiOutlinePlus size={25}/>
                        {/* } */}
                        </div>
                        <div className="text">
                            Ст. 165 УК КазССР
                        </div>
                    </div>

                    <div>
                        <div className="icon">
                            <img src={stage_3} alt="stage 3" />
                        </div>
                        <div className="line"></div>
                        <div className="open-icon">
                        {/* {
                            open  */}
                                {/* ? <AiOutlineMinus style={{color: color}} size={25} />  */}
                                <AiOutlinePlus size={25}/>
                        {/* } */}
                        </div>
                        <div className="text">
                            Ст. 165 УК КазССР
                        </div>
                    </div>

                </div>

            </div>
        </div>
    );
}

export default StageDropDown;