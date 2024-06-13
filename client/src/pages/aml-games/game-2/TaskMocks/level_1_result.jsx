import LevelSummary from "../../components/LevelCircleResult";
import LevelProgress from "../../components/LevelResult";

const subLevels = [
    { title: 'Уровень 1.1 : Подача уведомления СФМ', progress: 100 },
    { title: 'Уровень 1.2 : Определение ответственного лица по ПОД/ФТ', progress: 20 },
    { title: 'Уровень 1.3 : Регистрация в личном кабинете', progress: 33 },
    { title: 'Уровень 1.4 : Формирование досье клиента', progress: 50 }
  
];

function Level_1_5() {
    return ( 
        <>
            <div style={{display:"flex", width:"100%", justifyContent:"center"}}>
                <div style={{display:"flex", width:"50%", justifyContent:"center"}} >
                    <LevelProgress level={1} title="Организация внутреннего контроля" subLevels={subLevels} />
                </div>
                <div style={{display:"flex", width:"50%", justifyContent:"left"}}>
                <LevelSummary
                    percentage={75}
                    score={10}
                    description="Ты выполнил некоторые задания неверно. Возможно, тебе еще не до конца понятен учебный материал этого уровня. Для того чтобы пройти этот уровень нужно набрать больше 70%."
                    recommendations="Для дальнейшего прогресса тебе важно активно работать над исправлением ошибок и заполнением пробелов в практических знаниях."
                />
                </div>
           </div>
        </>
    );
}

export default Level_1_5;