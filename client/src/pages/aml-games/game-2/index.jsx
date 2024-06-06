
import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router';
import SideBar from '../components/sideBar';
import { NavbarProfile } from '../navbar';
import Level_1_1 from './TaskMocks/level_1_1';
import Level_1_2 from './TaskMocks/level_1_2';
import Level_1_3 from './TaskMocks/level_1_3';
import Level_1_4 from './TaskMocks/level_1_4';
import { mockTasks } from './mockData';
import './style.scss';


function GameReader() {
    const navigate = useNavigate();

    const [response, setResponse] = useState(null);
    const { level, subLevel } = useParams();
    const [ _level, setLevel ] = useState(level);
    const [ _subLevel, setSubLevel ] = useState(subLevel);

    useEffect(() => {
        scrollToTopAnimated();
        // Mock API call to get tasks of level/subLevel
        console.log("Fetching tasks for level:", _level, "subLevel:", _subLevel);

        const res = mockTasks.filter(task => {
            return `${task.level}` === `${_level}` && `${task.subLevel}` === `${_subLevel}`;
        })

        setResponse(res[0]);
    }, [_level, _subLevel]);
    

    function scrollToTopAnimated() {
        window.scrollTo({ top: 0, behavior: 'smooth' });
        const courseContent = document.querySelector('.aml-game-2-main');
        if (courseContent) {
            courseContent.scrollTo({ top: 0, behavior: 'smooth' });
        }
    }

    return (
        <div>
            <NavbarProfile />
            <div className="aml-game-2-main">
                <SideBar response={response}/>
                <div className='aml-game-right'>
                    <div className='aml-game-right-container'>
                        
                        <div className="sublevel-title">Уровень {level}.{subLevel} : {response ? response.name : ''}</div>

                        <div className="content">
                            
                            <GetTaskPage 
                                level={_level}
                                subLevel={_subLevel}
                            />               

                            <div className="page-actions">
                                <button className='blue'
                                    onClick={(e) => {
                                        // saving
                                        navigate(`/courses/aml-games/game/read/1/1/${Number(subLevel) + 1}`);
                                        setSubLevel(prev => Number(prev) + 1);
                                    }}
                                >Далее</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

const GetTaskPage = ({
    level,
    subLevel
}) => {
    level = Number(level);
    subLevel = Number(subLevel);


    if (level === 1 && subLevel === 1) return <Level_1_1 />
    if (level === 1 && subLevel === 2) return <Level_1_2 />
    if (level === 1 && subLevel === 3) return <Level_1_3 />
    if (level === 1 && subLevel === 4) return <Level_1_4 />

    return null;
}



export default GameReader;