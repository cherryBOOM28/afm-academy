import { Typography } from '@mui/material';
import { AccordionDetails, AccordionSummary, Accordion } from './AccordionOptions';
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router';

const SideBar = ({
    response
}) => {
    const { level, subLevel } = useParams();

    return (
        <div className='aml-game-sidebar'>
            <div className='sidebar-container'>
                <h1 className='aml-game-level'>Уровень {level}</h1>
                {
                    response !== null && response !== undefined ? response.tasks.map((task, index) => <TaskNav key={index} task={task}/>) : null
                }
            </div>
        </div>
    )
}

const TaskNav = ({
    task
}) => {
    const [expanded, setExpanded] = React.useState('panel1');
    const { level, subLevel } = useParams();

    const handleChange = (panel) => (event, newExpanded) => {
        setExpanded(newExpanded ? panel : false);
    };

    return (
        <div>
            <p className='aml-game-task'>{task.name}</p>
            <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
                <AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
                <Typography>Описание текущей ситуации</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                        {task.description}
                    </Typography>
                </AccordionDetails>
            </Accordion>
            <Accordion expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
                <AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
                <Typography>Ваша задача</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                        {task.goal}
                    </Typography>
                </AccordionDetails>
            </Accordion>
            <Accordion expanded={expanded === 'panel3'} onChange={handleChange('panel3')}>
                <AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
                <Typography>Шаги выполнения задания</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                        {task.steps}
                    </Typography>
                </AccordionDetails>
            </Accordion>
            <Accordion expanded={expanded === 'panel4'} onChange={handleChange('panel4')}>
                <AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
                <Typography>Риск не исполнения</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                        {task.risk}
                    </Typography>
                </AccordionDetails>
            </Accordion>
        </div>
    )
}

export default SideBar;