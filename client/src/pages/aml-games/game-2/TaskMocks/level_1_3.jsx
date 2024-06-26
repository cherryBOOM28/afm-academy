import Sizebox from "../../../../components/courseTemplates/common/Sizebox";
import ImageCarousel from "../../components/ImageCarousel";
import Transcript from "../../components/Transcript";
import TagQuiz from "../../components/tagQuiz";
import carousel_11 from './../../../../assets/images/Carousel_11.png';
import carousel_110 from './../../../../assets/images/Carousel_110.png';
import carousel_111 from './../../../../assets/images/Carousel_111.png';
import carousel_12 from './../../../../assets/images/Carousel_12.png';
import carousel_13 from './../../../../assets/images/Carousel_13.png';
import carousel_14 from './../../../../assets/images/Carousel_14.png';
import carousel_15 from './../../../../assets/images/Carousel_15.png';
import carousel_16 from './../../../../assets/images/Carousel_16.png';
import carousel_17 from './../../../../assets/images/Carousel_17.png';
import carousel_18 from './../../../../assets/images/Carousel_18.png';
import carousel_19 from './../../../../assets/images/Carousel_19.png';

const images = [
    {
        header: '',
        src: carousel_11,
    },
    {
        header: '',
        src: carousel_12,
    },
    {
        header: 'Для завершения процедуры необходимо: 1. Выбрать категорию «Финансы»;',

        src: carousel_13,
    },
    {
        header: '2. Кликнуть на подкатегорию «Уведомительный порядок»;',
        src: carousel_14,
    },
    {
        header: '4. Заказать услугу онлайн;',
        src: carousel_15,
    },
    {
        header: '5. Во всплывающем окне выбрать Агентство Республики Казахстан по финансовому мониторингу;',
        src: carousel_16,
    },
    {
        header: '6. Далее отображаются личные сведения Субъекта;',  // '7. В данной вкладке необходимо указать адрес осуществления деятельности и выбрать соответствующий вид Субъекта финансового мониторинга, далее подписать с помощью ЭЦП и отправить;',
        src: carousel_17,
    },
    {
        header: '8. Также можно проверить информацию о поданном уведомлении и при необходимости скачать талон о принятии уведомления. Для этого на главной странице сайта elicense.kz  необходимо выбрать «Поиск РД»;',
        src: carousel_18,
    },
    {
        header: '9. Указать БИН/ИИН организации;',
        src: carousel_19,
    },
    {
        header: '11. Скачать документ «Талон о принятии уведомления».',
        src: carousel_110,
    },
    {
        header: 'Уведомление заверяется электронной цифровой подписью субъекта.',
        src: carousel_111,
    },
]
const transcripts = [
    { title: 'Транскрипт 1', content: 'Переходит сдавать уведомление: Егов – войти – электронное лицензирование – Финансы – Уведомительный порядок (Уведомление о начале или прекращении деятельности лица, являющегося субъектом финансового мониторинга в соответствии с Законом Республики Казахстан «О противодействии легализации (отмыванию) доходов, полученных преступным путем, и финансированию терроризма») – заполняет форму – подписывает – скачивает уведомление' },
    { title: 'Транскрипт 2', content: 'Содержание транскрипта 2' },
    { title: 'Транскрипт 3', content: 'Содержание транскрипта 3' },
];
  
function Level_1_3() {
    return ( 
        <>
            <ImageCarousel images={images} />
            <Transcript transcripts={transcripts} />
            <Sizebox height={60} />
            <h2>Задача 1</h2>

            <TagQuiz 
                title={'Отметьте категории доступные в открытой версии Личного кабинета'}
                answers={[
                    'Национальная оценка рисков',
                    'Обучение',
                    'Реестр рисковых лиц и финансовых пирамид',
                    'Перечень государств (территорий), которые не выполняют и (или) недостаточно выполняют рекомендации ФАТФ',
                    'Перечень организаций и лиц, связанных с финансированием терроризма и экстремизма',
                    'ПДЛ',
                    'Пройти опрос/тестирование',
                    'Обратная связь',
                    'FAQ',
                    'Реестр уведомлений СФМ в сфере ПОД/ФТ',
                ]} 
            />

            <Sizebox height={60} />

            <TagQuiz 
                title={'Отметьте категории доступные в открытой версии Личного кабинета'}
                answers={[
                    'Национальная оценка рисков',
                    'Обучение',
                    'Реестр рисковых лиц и финансовых пирамид',
                    'Перечень государств (территорий), которые не выполняют и (или) недостаточно выполняют рекомендации ФАТФ',
                    'Перечень организаций и лиц, связанных с финансированием терроризма и экстремизма',
                    'ПДЛ',
                    'Пройти опрос/тестирование',
                    'Обратная связь',
                    'FAQ',
                    'Реестр уведомлений СФМ в сфере ПОД/ФТ',
                ]} 
            />

        </>
    );
}

export default Level_1_3;