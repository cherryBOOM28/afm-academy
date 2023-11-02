import React, { useState, useEffect } from 'react';

import './style.scss'
import Sizebox from '../../common/Sizebox';

import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai";

function DropDownTextWithTabs({
    tabs,
    tabsData,
    headerTextColor,
    activeHeaderTextColor,
    textColor,
    tabsTextColor,
    tabsBackgroundColor,
}) {
    const [currentTab, setCurrentTab] = useState(tabs[0]);

    return ( 
        <div className="dropDownTextWithTabs">
            <div className="tabs">
                {tabs.map((tab, index) => {
                    const isTabCurrent = tab === currentTab;

                    return (
                        <div 
                            key={index}
                            className={!isTabCurrent? 'tab active' : 'tab'}
                            style={{
                                backgroundColor: !isTabCurrent? tabsBackgroundColor : 'white',
                                color: tabsTextColor,
                                border: `1px solid ${tabsBackgroundColor}`
                            }}
                            onClick={() => {
                                if (tab === currentTab) {
                                    return;
                                }

                                setCurrentTab(tab);
                            }}
                        >
                            {tab}
                        </div>
                    )
                })}
            </div>
            <Sizebox height={36} />
            <div className="dropdown-list-wrapper">
                <div className="dropdown-list">
                    {
                        tabs !== null && tabs !== undefined 
                            ? tabsData.filter(tab => currentTab === tab.tabName).map((tab, index) => {

                                return <DropDownData 
                                            key={index}
                                            header={tab.header}
                                            data={tab.data}
                                            headerColor={headerTextColor}
                                            headerActiveColor={activeHeaderTextColor}
                                            dataColor={textColor}
                                        />

                            }) : null
                    }
                </div>
            </div>
        </div>
    );
}

const DropDownData = ({ header, data, children, headerColor, headerActiveColor, dataColor }) => {
    const defaultHeaderColor = '#170F49';
    const defaultHeaderActiveColor = '#1F3C88';
    const defaultDataColor = '#6F6C90';

    const [isOpen, setOpen] = useState(false);

    const handleOpen = () => {
        setOpen(prev => !prev)
    }

    return (
        <div className="dropDownData">
            <div className="header">
                <p
                    style={{
                        color: 
                            isOpen 
                                ? (headerActiveColor ? headerActiveColor : defaultHeaderActiveColor)
                                : (headerColor ? headerColor : defaultHeaderColor)
                    }}
                >{header}</p>
                {!isOpen 
                    ? <AiOutlinePlus 
                        size={20} 
                        className='icon' 
                        onClick={handleOpen}
                        style={{
                            color: 
                                isOpen 
                                    ? (headerActiveColor ? headerActiveColor : defaultHeaderActiveColor)
                                    : (headerColor ? headerColor : defaultHeaderColor)
                        }}
                        />
                    : <AiOutlineMinus 
                        size={20} 
                        className='icon' 
                        onClick={handleOpen}
                        style={{
                            color: 
                                isOpen 
                                    ? (headerActiveColor ? headerActiveColor : defaultHeaderActiveColor)
                                    : (headerColor ? headerColor : defaultHeaderColor)
                        }}
                        />
                }
            </div>
            <div className={`data ${!isOpen ? 'hide' : ''}`}>
                <p
                    style={{
                        color: dataColor ? dataColor : defaultDataColor
                    }}
                >{data}</p>
            </div>
        </div>
    )
}

export default DropDownTextWithTabs;
