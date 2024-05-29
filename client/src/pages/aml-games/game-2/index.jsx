
import React, { useEffect, useState } from 'react';
import { NavbarProfile } from '../navbar';
import './style.scss';
import { useNavigate, useParams } from 'react-router';
import { mockTasks } from './mockData';
import Level_1_1 from './TaskMocks/level_1_1';
import SideBar from '../components/sideBar';
import Level_1_3 from './TaskMocks/level_1_3';


function GameReader() {
    const navigate = useNavigate();

    const [response, setResponse] = useState(null);
    const { level, subLevel } = useParams();
    const [ _level, setLevel ] = useState(level);
    const [ _subLevel, setSubLevel ] = useState(subLevel);

    useEffect(() => {
        // Mock API call to get tasks of level/subLevel
        console.log("Fetching tasks for level:", _level, "subLevel:", _subLevel);

        const res = mockTasks.filter(task => {
            return `${task.level}` === `${_level}` && `${task.subLevel}` === `${_subLevel}`;
        })

        setResponse(res[0]);
    }, [_level, _subLevel]);
    

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
    if (level === 1 && subLevel === 3) return <Level_1_3 />

    return null;
}



export default GameReader;