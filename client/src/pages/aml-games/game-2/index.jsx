import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router';
import SideBar from '../components/sideBar';
import { NavbarProfile } from '../navbar';
import Level_1_1 from './TaskMocks/level_1_1';
import Level_1_2 from './TaskMocks/level_1_2';
import Level_1_3 from './TaskMocks/level_1_3';
import Level_1_4 from './TaskMocks/level_1_4';
import Level_1_Result from './TaskMocks/level_1_result';
import { mockTasks } from './mockData';
import './style.scss';

const GameReader = () => {
    const navigate = useNavigate();
    const { level, subLevel } = useParams();
    const [_level, setLevel] = useState(level);
    const [_subLevel, setSubLevel] = useState(subLevel);
    const [response, setResponse] = useState(mockTasks.find(task => `${task.level}` === `${level}` && `${task.subLevel}` === `${subLevel}`) || null);

    useEffect(() => {
        scrollToTopAnimated();
        setResponse(mockTasks.find(task => `${task.level}` === `${_level}` && `${task.subLevel}` === `${_subLevel}`) || null);
    }, [_level, _subLevel]);

    const scrollToTopAnimated = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
        const courseContent = document.querySelector('.aml-game-2-main');
        if (courseContent) {
            courseContent.scrollTo({ top: 0, behavior: 'smooth' });
        }
    };

    const isResultPage = _subLevel === '5';

    return (
        <div>
            <NavbarProfile />
            {!isResultPage && (
                <div className="aml-game-2-main">
                    <SideBar response={response} />
                    <div className='aml-game-right'>
                        <div className='aml-game-right-container'>
                            <div className="sublevel-title">Уровень {level}.{subLevel} : {response ? response.name : ''}</div>
                            <div className="content">
                                <GetTaskPage level={_level} subLevel={_subLevel} />
                                <div className="page-actions">
                                    <button className='blue'
                                        onClick={() => {
                                            navigate(`/courses/aml-games/game/read/1/1/${Number(subLevel) + 1}`);
                                            setSubLevel(prev => `${Number(prev) + 1}`);
                                        }}
                                    >Далее</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}
            {isResultPage && <GetTaskPage level={_level} subLevel={_subLevel} />}
        </div>
    );
};

const GetTaskPage = ({ level, subLevel }) => {
    const levelNum = Number(level);
    const subLevelNum = Number(subLevel);

    if (levelNum === 1 && subLevelNum === 1) return <Level_1_1 />;
    if (levelNum === 1 && subLevelNum === 2) return <Level_1_2 />;
    if (levelNum === 1 && subLevelNum === 3) return <Level_1_3 />;
    if (levelNum === 1 && subLevelNum === 4) return <Level_1_4 />;
    if (levelNum === 1 && subLevelNum === 5) return <Level_1_Result />;

    return null;
};

export default GameReader;
