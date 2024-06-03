import Divider from '@mui/material/Divider';
import Sizebox from "../../../../components/courseTemplates/common/Sizebox/index.jsx";
import VerticalCarousel from '../../components/VerticalCarousel/index.jsx';
import MessagesPage from "../MessagePage/MessagesPage.tsx";

const cardData = [
    { name: 'Айжан', date: '01.02.1998', id: '**KAZAKHSTAN001**' },
    { name: 'Дамир', date: '01.02.1999', id: '**KAZAKHSTAN002**' },
    { name: 'Дархан', date: '01.02.2000', id: '**KAZAKHSTAN003**' }
  ];


function Level_1_3() {
    return ( 
        <>
            <div className='message-page'>
                <div className='message-page-container'>
                    <MessagesPage />
                </div>
            </div>
            <Sizebox height={100} />
            <Divider sx={{backgroundColor:"rgba(31, 60, 136, 0.7)"}} />
            <div>
                <h2>
                    Задача 1
                </h2>
                <div>
                    <VerticalCarousel cards={cardData} />
                </div>
            </div>

        </>
    );
}

export default Level_1_3;