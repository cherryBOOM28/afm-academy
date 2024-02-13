import Centered from '../../../components/courseTemplates/common/Centered'
import FileDownloader from '../../../components/courseTemplates/common/FileDownloader'
import HeaderWithLine from '../../../components/courseTemplates/common/HeaderWithLine'
import ImageLine from '../../../components/courseTemplates/common/ImageLine'
import ImageWithText from '../../../components/courseTemplates/common/ImageWithText'
import NotNumberedDots from '../../../components/courseTemplates/common/NotNumberedDots'
import NumberedDots from '../../../components/courseTemplates/common/NumberedDots'
import RandomGlossary from '../../../components/courseTemplates/common/RandomGlossary'
import RandomH2 from '../../../components/courseTemplates/common/RandomH2'
import RandomParapraph from '../../../components/courseTemplates/common/RandomParagraph'
import Sizebox from '../../../components/courseTemplates/common/Sizebox'
import SmallNotNuberedDots from '../../../components/courseTemplates/common/SmallNotNuberedDots'

import Table_1 from '../../../components/courseTemplates/common/Tables/Table-1'

import FlexRow from '../../../components/courseTemplates/common_v2/FlexRow'
import FlexBoxes from '../../../components/courseTemplates/common_v2/FlexBoxes'
import FancyList from '../../../components/courseTemplates/common_v2/FancyList'
import TextWithBackground from '../../../components/courseTemplates/common/TextWithBackground'
import TextWithTitle from '../../../components/courseTemplates/common/TextWithTitle'
import VideoLine from '../../../components/courseTemplates/common/VideoLine'
import Report_Warning from '../../../components/courseTemplates/common/Warnings/Report'
import Report_Information from '../../../components/courseTemplates/common/Warnings/Report_Information'
import TabsGlossary from '../../../components/courseTemplates/complex/TabsGlossary'
import VideoWithTitleAndText from '../../../components/courseTemplates/complex/Video/VideoWithTitleAndText'
import TextAndLink from '../../../components/courseTemplates/complex/TextAndLink'
import DropdownList from '../../../components/courseTemplates/complex/interactives/DropdownList'
import DropdownList_r5 from '../../../components/courseTemplates/complex/interactives/DropdownList_r5'
import ShortBiography from '../../../components/courseTemplates/complex/images/ShortBiography'
import DragAndDropTwoSide from '../../../components/courseTemplates/complex/DragAndDropTwoSide'
import DropdownGlossaryList from '../../../components/courseTemplates/complex/DropdownGlossaryList'
import DataChain from '../../../components/courseTemplates/complex/DataChain'
import SimpleTable from '../../../components/courseTemplates/common/SimpleTable'


import headerWithLineIcon from '../images/header-icon.svg'
import imageWithTextIcon from '../images/textWithBackground-icon.svg'
import randomGlossaryIcon from '../images/randomGlossary-icon.svg'
import randomH2Icon from '../images/randomh2-icon.svg'
import randomParagraphIcon from '../images/randomParagraph-icon.svg'
import textWithTitleIcon from '../images/textWithTitle-icon.svg'
import reportIcon from '../images/reportWarning-icon.svg'
import reportInformationIcon from '../images/reportIndormation-icon.svg'
import norNumberedDotsIcon from '../images/notNumberedDots-icon.svg'
import numberedDotsIcon from '../images/numberedDots-icon.svg'
import table1Icon from '../images/table-1-icon.svg'
import fileDIcon from '../images/download-icon.svg'
import imageIcon from '../images/imageLine-icon.svg'
import videoLineIcon from '../images/videoLine-icon.svg'
import sizeBoxIcon from '../images/sizeBox-icon.svg'
import tabsGlossaryIcon from '../images/tabs-glossary-icon.svg'
import dropDownTableIcon from '../images/dropdropwithtext-icon.svg'
import textContentIcon from '../images/text-content-icon.svg'
import dropDownListIcon from '../images/drop-down-list-icon.svg'
import biographyIcon from '../images/biography-icon.svg'
import dndTwoSideIcon from '../images/two-side-icon.svg'
import listIcon from '../images/list-icon.png'
import squareIcon from '../images/square-icon.svg'
import blockIcon from '../images/blocks-icon.svg'
import block2Icon from '../images/blocks-2-icon.svg'
import DropDownTextWithTabs from '../../../components/courseTemplates/complex/DropDownTextWithTabs'
import Quote from '../../../components/courseTemplates/common_v2/Quote'

const Elements = {
    'Текстовые элементыss': {
        'Заголовок с полосой': {
            component: HeaderWithLine,
            icon: headerWithLineIcon,
            inputs: [
                { name: 'children', label: 'Children', type: 'text' },
                { name: 'header', label: 'Текст', type: 'text' },
                { name: 'headerColor', label: 'Цвет текста', type: 'color' },
                { name: 'lineColor', label: 'Цвет полосы', type: 'color' },
            ],
        }, //children (span for bold), header (for usual text), headerColor, lineColor
        'Текст': {
            component: RandomGlossary,
            icon: randomGlossaryIcon,
            inputs: [
                { name: 'title', label: 'Заголовок', type: 'text' },
                { name: 'text', label: 'Текст', type: 'text' },
                { name: 'color', label: 'Цвет', type: 'color' },
                { name: 'backgroundColor', label: 'Цвет фона', type: 'color' },
            ],
        }, //title, text, color, backgroundColor
        'Маленький заголовок': {
            component: RandomH2,
            icon: randomH2Icon,
            inputs: [
                { name: 'children', label: 'Children', type: 'text' },
                { name: 'isCentered', label: 'Централизировать', type: 'checkbox' },
            ]
        }, //children
        'Параграф': {
            component: RandomParapraph,
            icon: randomParagraphIcon,
            inputs: [
              { name: 'children', label: 'Текст (Children)', type: 'text' },
              { name: 'color', label: 'Цвет', type: 'color' },
              { name: 'fontSize', label: 'Размер шрифта', type: 'number' },
            ],
        }, //children, color, fontSize
        'Цветной фон': {
            component: TextWithBackground,
            icon: imageIcon,
            inputs: [
                { name: 'header', label: 'Заголовок', type: 'text' },
                { name: 'text', label: 'Текст', type: 'text' },
                { name: 'color', label: 'Цвет текста', type: 'color' },
                { name: 'backgroundColor', label: 'Цвет фона', type: 'color' },
            ],
              
        }, //text [,,], color, backgroundColor
        'Заголовок + текст': {
            component: TextWithTitle,
            icon: textWithTitleIcon,
            inputs: [
                { name: 'title', label: 'Заголовок', type: 'text' },
                { name: 'text', label: 'Текст', type: 'text' },
                { name: 'color', label: 'Цвет текста', type: 'color' },
            ],
        }, //title, text
        'Аннотация': {
            component: Report_Warning,
            icon: reportIcon,
            inputs: [
                { name: 'children', label: 'Children', type: 'text' },
            ],
        }, //children
        'Аннотация параграф': {
            component: Report_Information,
            icon: reportInformationIcon,
            inputs: [
                { name: 'children', label: 'Children', type: 'text' },
            ],
        }, //children
        'Цитата': {
            component: Quote,
            icon: reportInformationIcon,
            inputs: [
                { name: 'text', label: 'Текст', type: 'text' },
                { name: 'author', label: 'Автор', type: 'text' },
                { name: 'img', label: 'Изображение', type: 'file' },
            ]
        }
    },
    'Списковые элементы': {
        'Точечный': {
            component: NotNumberedDots,
            icon: norNumberedDotsIcon,
            inputs: [
                { name: 'header', label: 'Заголовок', type: 'text' },
                { name: 'list', label: 'Список', type: 'list' },
                { name: 'dotsColor', label: 'Цвет точек', type: 'color' },
                { name: 'color', label: 'Цвет текста', type: 'color' },
            ],
        }, 
        'Нумированный': {
            component: NumberedDots,
            icon: numberedDotsIcon,
            inputs: [
                { name: 'header', label: 'Заголовок', type: 'text' },
                { name: 'list', label: 'Список', type: 'list' },
                { name: 'dotsColor', label: 'Цвет точек', type: 'color' },
                { name: 'color', label: 'Цвет текста', type: 'color' },
            ],
        },
        'Список квадратный': {
            component: FancyList,
            icon: squareIcon,
            inputs: [
                { name: 'list', label: 'Список', type: 'list' },
                { name: 'textColor', label: 'Цвет текста', type: 'color' },
                { name: 'numberColor', label: 'Цвет номеров', type: 'color' },
                { name: 'listColor', label: 'Цвет квадратов', type: 'color' },
            ],
        }, 
        'Выпадающий список с описанием': {
            component: DropdownList,
            icon: dropDownListIcon,
            inputs: [
                { name: 'list', label: 'Список', type: 'listNameDescroptionItems' },
            ],
        },
        // Done but needs to be generic
        // 'Выпадающий список': {
        //     component: DropdownList_r5,
        //     icon: dropDownListIcon,
        //     inputs: [
        //         { name: 'title', label: 'Заголовок', type: 'text' },
        //         { name: 'items', label: 'Список', type: 'items_text' },
        //     ]
        // },
        'Раскрывающийся список': {
            component: DropdownGlossaryList,
            icon: listIcon,
            inputs: [
                { name: 'list', label: 'Список', type: 'title_desx_list'},
                { name: 'headerTextColor', label: 'Цвет заголовков', type: 'color'},
                { name: 'activeHeaderTextColor', label: 'Цвет активного заголовка', type: 'color'},
                { name: 'textColor', label: 'Цвет текста', type: 'color'},
                { name: 'tabsTextColor', label: 'Цвет текста вкладок', type: 'color'},
                { name: 'tabsBackgroundColor', label: 'Цвет вкладок', type: 'color'},
            ]
        },
        'Вкладки с текстами': {
            component: TabsGlossary,
            icon: tabsGlossaryIcon, // Replace with the actual icon reference
            inputs: [
                { name: 'tabs', label: 'Вкладки', type: 'tabs'},
                { name: 'tabsGlossary', label: 'Тексты', type: 'tabsGlossary'},
                { name: 'color', label: 'Цвет', type: 'color' },
                { name: 'tabsBackgroundColor', label: 'Цвет фона названии разделов', type: 'color' },
                { name: 'tabsActiveBackgroundColor', label: 'Фон активного названия раздела', type: 'color' },
                { name: 'glossaryBackgroundColor', label: 'Фон раздела', type: 'color' }
                // Add more inputs as needed based on the TabsGlossary component's props
            ],
        },
        'Вкладки с разделами': {
            component: DropDownTextWithTabs,
            icon: dropDownTableIcon,
            inputs: [
                { name: 'tabs', label: 'Вкладки', type: 'dropd'},
                { name: 'tabsData', label: 'Данные Вкладок', type: 'tabsData'},
                { name: 'headerTextColor', label: 'Цвет Текста Заголовка', type: 'color'},
                { name: 'activeHeaderTextColor', label: 'Цвет Активного Текста Заголовка', type: 'color'},
                { name: 'textColor', label: 'Цвет Текста', type: 'color'},
                { name: 'tabsTextColor', label: 'Цвет Текста Вкладок', type: 'color'},
                { name: 'tabsBackgroundColor', label: 'Цвет Фона Вкладок', type: 'color'},
            ]
        }
    },
    'Табличные элементы': {
        'Двухколонная': {
            component: Table_1,
            icon: table1Icon,
            inputs: [
                { name: 'rows', label: 'Строки', type: 'rows' },
                { name: 'borderColor', label: 'Цвет границы', type: 'color' },
                { name: 'color', label: 'Цвет текста', type: 'color' },
            ],
              
        }, // rows [{first:, second:}], borderColor, color
        'Видовой': {
            component: SimpleTable,
            icon: table1Icon,
            inputs: [
                { name: 'columns', label: 'Колонны', type: 'table_headers' },
                { name: 'data', label: 'Строки', type: 'table_rows' },
            ],
              
        }, 
    
    },
    'Медиа': {
        'Текст с изображением': {
            component: ImageWithText,
            icon: imageWithTextIcon,
            inputs: [
                { name: 'img', label: 'Изображение', type: 'file' },
                { name: 'imageText', label: 'Текст', type: 'text' },
                { name: 'children', label: 'Children', type: 'text' },
                { name: 'color', label: 'Цвет', type: 'color' },
              ],
        }, //img, imageText or children, color
        'Изображение': {
            component: ImageLine,
            icon: imageIcon,
            inputs: [
                { name: 'img', label: 'Изображение', type: 'file' },
                { name: 'color', label: 'Цвет', type: 'color' },
                { name: 'height', label: 'Высота', type: 'number' },
                { name: 'adjustWidth', label: 'Подогнать ширину', type: 'checkbox' },
            ],
        }, //img, height, color done
        'Видео': {
            component: VideoLine,
            icon: videoLineIcon,
            inputs: [
                // { name: 'poster', label: 'Постер', type: 'text' },
                { name: 'url', label: 'Ссылка', type: 'text' },
            ],
        }, // url , poster done
        'Видео с текстом': {
            component: VideoWithTitleAndText,
            icon: textContentIcon,
            inputs: [
                // { name: 'poster', label: 'Постер', type: 'text' },
                { name: 'url', label: 'Ссылка', type: 'text' },
                { name: 'title', label: 'Заголовок', type: 'text' },
                { name: 'text', label: 'Текст', type: 'text' },
            ],
        }, // url , poster done
    },
    'Элементы вида': {
        // 'Централизовать': {
        //     component: Centered,
        //     icon: centeredIcon
        // }, //
        'Отступ': {
            component: Sizebox,
            icon: sizeBoxIcon,
            inputs: [
                {name: 'height', label: 'Размер отступа в PX', type: 'number' }
            ]
        }, //
    },
    'Ссылки и файлы': {
        'Файл': {
            component: FileDownloader,
            icon: fileDIcon,
            inputs: [
                { name: 'file', label: 'Файл', type: 'file' },
                { name: 'fileName', label: 'Имя файла', type: 'text' },
                { name: 'type', label: 'Тип', type: 'text' },
                { name: 'color', label: 'Цвет', type: 'color' },
            ],
              
        }, //file, fileName 
        'Ссылка': {
            component: TextAndLink,
            icon: randomGlossaryIcon,
            inputs: [
                { name: 'text', label: 'Название', type: 'text' },
                { name: 'link', label: 'Ссылка', type: 'text' },
                { name: 'linkText', label: 'Текст ссылки', type: 'text' },
                { name: 'textColor', label: 'Цвет Названия', type: 'color' },
                { name: 'linkColor', label: 'Цвет Ссылки', type: 'color' },
                { name: 'linkBackgroundColor', label: 'Цвет заднего фона ссылки', type: 'color' },
            ],
              
        }, //file, fileName 
    },
    'Другие': {
        'Биография': {
            component: ShortBiography,
            icon: biographyIcon,
            inputs: [
                { name: 'img', label: 'Фото', type: 'file'},
                { name: 'name', label: 'ФИО', type: 'text'},
                { name: 'birthdate', label: 'Дата рождения', type: 'text'},
                { name: 'deathdate', label: 'Дата смерти', type: 'text'},
                { name: 'biography', label: 'Биография', type: 'textarea'},
            ]
        },
        'Цепь с текстами': {
            component: DataChain,
            icon: listIcon,
            inputs: [
                { name: 'data', label: 'Список', type: 'title_desx_list'},
            ]
        },
        'Блоки': {
            component: FlexBoxes,
            icon: block2Icon,
            inputs: [
                { name: 'list', label: 'Список', type: 'list' },
                { name: 'color', label: 'Цвет текста', type: 'color' },
                { name: 'backgroundColor', label: 'Цвет фона', type: 'color' },
            ],
        }, 
        'Блоки 2': {
            component: FlexRow,
            icon: blockIcon,
            inputs: [
                { name: 'icons', label: 'Картинки', type: 'icons_title_desx_list' },
                { name: 'data', label: 'Список', type: 'title_desx_of_icons' },
                { name: 'textColor', label: 'Цвет текста', type: 'color' },
            ],
        }, 
    },
    'Интерактивные': {
        'Двух вариантный': {
            component: DragAndDropTwoSide,
            icon: dndTwoSideIcon,
            inputs: [
                { name: 'leftAnswer', label: 'Первый вариант', type: 'text'},
                { name: 'rightAnswer', label: 'Второй вариант', type: 'text'},
                { name: 'questions', label: 'Вопросы', type: 'dnd_questions'},
            ]
        },
    }
}

export default Elements;