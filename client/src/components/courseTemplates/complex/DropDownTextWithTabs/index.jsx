import React, { useState, useEffect } from 'react';

import './style.scss'
import Sizebox from '../../common/Sizebox';

function DropDownTextWithTabs({
    tabs,
    tabsData,
    headerTextColor,
    activeHeaderTextColor,
    textColor,
    tabsTextColor,
    tabsBackgroundColor,
}) {
    return ( 
        <div className="dropDownTextWithTabs">
            <div className="tabs">
                {tabs.map((tab, index) => {
                    const isTabCurrent = index === 0;

                    return (
                        <div 
                            key={index}
                            className={isTabCurrent? 'tab active' : 'tab'}
                            style={{
                                backgroundColor: !isTabCurrent? tabsBackgroundColor : 'white',
                                color: tabsTextColor,
                                border: `1px solid ${tabsBackgroundColor}`
                            }}
                            onClick={() => {
                                if (index === 0) {
                                    return;
                                }
                            }}
                        >
                            {tab}
                        </div>
                    )
                })}
            </div>
            <Sizebox height={36} />
        </div>
    );
}

export default DropDownTextWithTabs;
