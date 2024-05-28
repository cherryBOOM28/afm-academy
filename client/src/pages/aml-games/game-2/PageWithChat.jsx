import ArrowRightIcon from '@mui/icons-material/ArrowRight';
import MuiAccordion from '@mui/material/Accordion';
import MuiAccordionDetails from '@mui/material/AccordionDetails';
import MuiAccordionSummary from '@mui/material/AccordionSummary';
import Divider from '@mui/material/Divider';
import Typography from '@mui/material/Typography';
import { styled } from '@mui/material/styles';
import React from 'react';
import { NavbarGame } from '../navbar';
import MessagePage from './MessagePage/MessagesPage.tsx';
import './style.scss';

const level = 'Уровень 1';
const testText = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget. Lorem ipsum dolor sit amet, consectetur adipiscing elit. lobortis eget.';
const Accordion = styled((props) => (
    <MuiAccordion disableGutters elevation={0} square {...props} />
    ))(({ theme }) => ({
        border: `1px solid ${theme.palette.divider}`,
                '&:not(:last-child)': {
        borderBottom: 0,
        },
        '&::before': {
        display: 'none',
        },
        borderRadius: "16px",
        backgroundColor: "#303F6E",
        color:"white",
        padding:"0px",
        marginTop: "4px",
        fontSize:"20px"
    }));
    const AccordionSummary = styled((props) => (
        <MuiAccordionSummary
            expandIcon={<ArrowRightIcon sx={{ fontSize: '40px', color:"white", padding:"0px" }} />}
            {...props}
        />
        ))(({ theme }) => ({
            backgroundColor: '#303F6E',
            color: "white",
            padding: "0 0 0 0",
            borderRadius: "16px",
            flexDirection: 'row-reverse',
                '& .MuiAccordionSummary-expandIconWrapper.Mui-expanded': {
            transform: 'rotate(90deg)',
            },
                '& .MuiAccordionSummary-content': {
            marginLeft: theme.spacing(1),
        },
    }));

    const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
            padding: theme.spacing(2),
        borderTop: '1px solid rgba(0, 0, 0, .125)',
        borderRadius: "16px",
    }));

function PageWithChat() {
    const [expanded, setExpanded] = React.useState('panel1');

    const handleChange = (panel) => (event, newExpanded) => {
        setExpanded(newExpanded ? panel : false);
    };
    
    return (
        <div>
            <NavbarGame />
            <div className="aml-game-2-main">
                <div className='aml-game-sidebar'>
                    <div className='sidebar-container'>
                        <h1 className='aml-game-level'>{level}</h1>
                        <div>
                            <p className='aml-game-task'>Задание 1.2.1</p>
                            <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
                                <AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
                                <Typography>Описание текущей ситуации</Typography>
                                </AccordionSummary>
                                <AccordionDetails>
                                    <Typography>
                                        {testText}
                                    </Typography>
                                </AccordionDetails>
                            </Accordion>
                            <Accordion expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
                                <AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
                                <Typography>Ваша задача</Typography>
                                </AccordionSummary>
                                <AccordionDetails>
                                    <Typography>
                                        {testText}
                                    </Typography>
                                </AccordionDetails>
                            </Accordion>
                            <Accordion expanded={expanded === 'panel3'} onChange={handleChange('panel3')}>
                                <AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
                                <Typography>Шаги выполнения задания</Typography>
                                </AccordionSummary>
                                <AccordionDetails>
                                    <Typography>
                                        {testText}
                                    </Typography>
                                </AccordionDetails>
                            </Accordion>
                            <Accordion expanded={expanded === 'panel4'} onChange={handleChange('panel4')}>
                                <AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
                                <Typography>Риск не исполнения</Typography>
                                </AccordionSummary>
                                <AccordionDetails>
                                    <Typography>
                                        {testText}
                                    </Typography>
                                </AccordionDetails>
                            </Accordion>
                        </div>
                        <div style={{marginTop:"40px"}}>
                            <p className='aml-game-task'>Задание 1.2.2</p>
                            <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
                                <AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
                                <Typography>Описание текущей ситуации</Typography>
                                </AccordionSummary>
                                <AccordionDetails>
                                    <Typography>
                                        {testText}
                                    </Typography>
                                </AccordionDetails>
                            </Accordion>
                            <Accordion expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
                                <AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
                                <Typography>Ваша задача</Typography>
                                </AccordionSummary>
                                <AccordionDetails>
                                    <Typography>
                                        {testText}
                                    </Typography>
                                </AccordionDetails>
                            </Accordion>
                            <Accordion expanded={expanded === 'panel3'} onChange={handleChange('panel3')}>
                                <AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
                                <Typography>Шаги выполнения задания</Typography>
                                </AccordionSummary>
                                <AccordionDetails>
                                    <Typography>
                                        {testText}
                                    </Typography>
                                </AccordionDetails>
                            </Accordion>
                            <Accordion expanded={expanded === 'panel4'} onChange={handleChange('panel4')}>
                                <AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
                                <Typography>Риск не исполнения</Typography>
                                </AccordionSummary>
                                <AccordionDetails>
                                    <Typography>
                                        {testText}
                                    </Typography>
                                </AccordionDetails>
                            </Accordion>
                        </div>
                    </div>
                </div>
                <div className='aml-game-right'>
                    <div className='aml-game-right-container'>
                        <div className='aml-game-right-header'>
                            <p className='aml-game-right-header-topic'>Уровень 1.2 : Определение ответственного лица по ПОД/ФТ</p>
                            <Divider sx={{backgroundColor:"#1A2751", borderBottomWidth:"2px"}} />
                        </div>
                        <div className='message-page'>
                            <MessagePage />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default PageWithChat;    