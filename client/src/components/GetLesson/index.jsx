import React from 'react';
import './style.scss';

// components
import Sizebox from '../courseTemplates/common/Sizebox';
import Reveal from '../Reveal';
import HeaderWithLine from '../courseTemplates/common/HeaderWithLine';
import Table_1 from '../courseTemplates/common/Tables/Table-1';
import Report_Warning from '../courseTemplates/common/Warnings/Report';
import NumberedDots from '../courseTemplates/common/NumberedDots';
import ImageLine from '../courseTemplates/common/ImageLine';
import DropDownTextWithTabs from '../courseTemplates/complex/DropDownTextWithTabs';
import TextAndLink from '../courseTemplates/complex/TextAndLink';
import NextLesson from '../courseTemplates/complex/NextLesson';
import ImageWithText from '../courseTemplates/common/ImageWithText';
import DropdownList from '../courseTemplates/complex/interactives/DropdownList';
import RandomParapraph from '../courseTemplates/common/RandomParagraph';
import DropdownList_r5 from '../courseTemplates/complex/interactives/DropdownList_r5';
import RandomH2 from '../courseTemplates/common/RandomH2';
import VideoLine from '../courseTemplates/common/VideoLine';
import NotNumberedDots from '../courseTemplates/common/NotNumberedDots';
import RandomGlossary from '../courseTemplates/common/RandomGlossary';
import OneToFour from '../courseTemplates/complex/interactives/OneToFour';
import TextWithTitle from '../courseTemplates/common/TextWithTitle';
import TextWithLink from '../courseTemplates/common/TextWithLink';
import FileDownloader from '../courseTemplates/common/FileDownloader';
import TextWithBackground from '../courseTemplates/common/TextWithBackground';
import ShortBiography from '../courseTemplates/complex/images/ShortBiography';
import Centered from '../courseTemplates/common/Centered';
import VideoWithTitleAndText from '../courseTemplates/complex/Video/VideoWithTitleAndText';
import TabsGlossary from '../courseTemplates/complex/TabsGlossary';
import TestPage from '../courseTemplates/complex/Test';
import LupaDragZone from '../courseTemplates/common/Lupa/LupaDragZone';
import DropdownGlossaryList from '../courseTemplates/complex/DropdownGlossaryList';
import DragAndDropZone from '../courseTemplates/common/DraggableOption/DragAndDropZone';
import DragAndDropTwoSide from '../courseTemplates/complex/DragAndDropTwoSide';
import ComplexTable from '../courseTemplates/common/ComplexTable';
import Report_Information from '../courseTemplates/common/Warnings/Report_Information';
import StageDropDown from '../courseTemplates/complex/StageDropDown';
import InteractivePhases from '../courseTemplates/complex/interactives/InteractivePhases';
import Component52 from '../courseTemplates/complex/Component52';
import DataChain from '../courseTemplates/complex/DataChain';
import SimpleTable from '../courseTemplates/common/SimpleTable';
import ImageWithPoints from '../courseTemplates/complex/interactives/ImageWithPoints';
import CustomCarousel from '../courseTemplates/complex/CustomCarousel';
import ImageAndColumns from '../courseTemplates/common_v2/ImageAndColumns';
import LupaDetailed from '../../components/courseTemplates/common/LupaDetailed';
import DoubleDraggableOption from '../courseTemplates/common/DoubleDraggableOption';
import JustTextWithP from '../courseTemplates/common/JustTextWithP';
import BoxOfThree from '../courseTemplates/common/BoxOfThree';
import ToolTipComponent from '../courseTemplates/common/ToolTipComponents/ToolTipComponent';
import TooltipComponent2 from '../courseTemplates/common/ToolTipComponents/ToolTipComponent2';
import TooltipComponent1 from '../courseTemplates/common/ToolTipComponents/ToolTipComponent1';
import TooltipComponentWithLupa from '../courseTemplates/common/ToolTipComponents/ToolTipComponentWithLupa';
import TableWithTable from '../courseTemplates/common/Tables/TableWithTable';
// import { Tooltip } from 'react-tooltip';
// import 'react-tooltip/dist/react-tooltip.css';

// default images
// if the images is not given
import lectorImage from './lectorImage.png';
import image1 from './../../assets/images/Lesson_2_img_1.png';
import image2 from './../../assets/images/Lesson_3_img_1.png';
import image3 from './../../assets/images/Capone.png';
import image4 from './../../assets/images/Lesson_3_img_2.png';
import image51 from './../../assets/images/Lesson_5_img_1.png';
import image52 from './../../assets/images/Lesson_5_img_2.png';
import image53 from './../../assets/images/Lesson_5_img_3.png';
import image54 from './../../assets/images/Lesson_5_img_4.png';
import image55 from './../../assets/images/Lesson_5_img_5.png';
import image56 from './../../assets/images/Lesson_5_img_6.png';
import image57 from './../../assets/images/Lesson_5_img_7.png';
import image58 from './../../assets/images/Lesson_5_img_8.png';
import image59 from './../../assets/images/FATF.jpg';
import image60 from './../../assets/images/oonn.png';
import image61 from './../../assets/images/fatff.png';
import image62 from './../../assets/images/eagg.png';
import image63 from './../../assets/images/errror.gif';
import image65 from './../../assets/images/terer.jpg';
import image66 from './../../assets/images/earth.jpg';
import image67 from './../../assets/images/lawyer.png';
import image69 from './../../assets/images/blackimage.png';
import image70 from './../../assets/images/afmlogo.png';
import image71 from './../../assets/images/71image.png';
import image72 from './../../assets/images/pfr.png';
import image74 from './../../assets/images/mvs.png';
import image75 from './../../assets/images/troika2.png';
import image76 from './../../assets/images/dola.png';
import image77 from './../../assets/images/terrari.png';
import image78 from './../../assets/images/websfm.png';
import image79 from './../../assets/images/erorrr.png';
import image3m1 from './../../assets/images/module-3-img-1.png';
import carousel_11 from './../../assets/images/Carousel_11.png';
import carousel_12 from './../../assets/images/Carousel_12.png';
import image80 from './../../assets/images/81.png'
import image82 from './../../assets/images/85.png'
import module_5_2_img from './../../assets/images/module_5_2.png'
import module_5_21_img from './../../assets/images/module_5_21.png'
import module_5_22_img from './../../assets/images/module_5_22.png'
import module_7_12_img from './../../assets/images/module_7_12.png'
import module_7_13_img from './../../assets/images/module_7_13.png'
import carousel_13 from './../../assets/images/Carousel_13.png';
import carousel_14 from './../../assets/images/Carousel_14.png';
import carousel_15 from './../../assets/images/Carousel_15.png';
import carousel_16 from './../../assets/images/Carousel_16.png';
import carousel_17 from './../../assets/images/Carousel_17.png';
import carousel_18 from './../../assets/images/Carousel_18.png';
import carousel_19 from './../../assets/images/Carousel_19.png';
import MessageImage from './../../assets/images/Message.jpg';
import image99 from '../../assets/images/image_99.png';
import image98 from '../../assets/images/image_98.jpg';
import image97 from '../../assets/images/image_97.jpg';
import image96 from '../../assets/images/image_96.jpg';
import image95 from '../../assets/images/image_95.jpeg';
import image94 from '../../assets/images/image_94.jpeg';
import image93 from '../../assets/images/image_93.jpg';
import image92 from '../../assets/images/image_92.jpg';
import image91 from '../../assets/images/image_91.jpg';
import image90 from '../../assets/images/image_90.jpg';
import image89 from '../../assets/images/image_89.webp';
import image88 from '../../assets/images/image_88.jpg';
import image87 from '../../assets/images/image_87.jpg';
import image86 from '../../assets/images/image_86.jpg';
import image85 from '../../assets/images/image_85.jpg';
import image84 from '../../assets/images/image_84.jpg';
import image83 from '../../assets/images/image_83.png';
import image_82 from '../../assets/images/image_82.jpg';
import image81 from '../../assets/images/image_81.jpg';
import image_80 from '../../assets/images/image_80.jpg';
import image_79 from '../../assets/images/image_79.jpg';
import image_78 from '../../assets/images/image_78.jpg';
import image_77 from '../../assets/images/image_77.jpg';
import image_76 from '../../assets/images/image_76.jpg';
import image_1111 from '../../assets/images/88888.png';


import imgLupa from '../../assets/images/Lupa.jpg';
import carousel_110 from './../../assets/images/Carousel_110.png';
import carousel_111 from './../../assets/images/Carousel_111.png';
import imageAndColumns_1 from './../../assets/images/columnsImage_1.png';
import TableComponent from '../courseTemplates/common/Tables/TableComponent';
import TableWithData from '../courseTemplates/common/Tables/TableWithData';
import strelka from '../../assets/images/strelka.jpg';
import timeImage from '../../assets/images/time.jpg';
import MoneyImage from '../../assets/images/Money.jpg';
import dangerImage from '../../assets/images/danger.jpg';
import QuizWithCardComponent from '../courseTemplates/common/QuizWithCardComponent';
import NumberedDotsAndImage from '../courseTemplates/common/NumberedDotsAndImage';
import { green } from '@mui/material/colors';import DropDownMSQ from '../courseTemplates/common_v2/DropDownMSQ';
import TwoColumnsDivider from '../courseTemplates/common_v2/TwoColumnsDivider';
import TextWithBold from '../courseTemplates/common/TextWithBold';
import Image from '../courseTemplates/common_v2/Image';
import PyramidList from '../courseTemplates/common_v2/PyramidList';
import ToolTipComponentWithLupa from '../courseTemplates/common/ToolTipComponents/ToolTipComponentWithLupa';


const LessonPage = ({ children, name, lecturer }) => {

    return (
        <>
            <div className="content-header">
                <h1>{name}</h1>
                {
                    lecturer ? (
                        <div className='lector'>
                            <img src={lectorImage} alt="lector-name" />
                            <p>{lecturer}</p>
                        </div>
                    ) : null
                }
            </div>
            {children}
        </>
    ); 
}

const TODO = ({ text }) => (
  <div
    style={{
      background: 'rgb(202, 222, 252)',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      height: '200px',
      width: '100%',
      border: '50%',
    }}
  >
    <p style={{ color: '#FFF' }}>TODO: {text}</p>
  </div>
);

function GetLesson({
  id,
  CheckCurrentChapter,
  quizQuestions,
  handleOpenFeedbackModal,
  modules
}) {
  switch (id) {
    case 58:
      return (
        <LessonPage
          name={'Основные понятия и сокращения'}
          lecturer={'AML Academy'}
        >
          <Sizebox height={28} />
          <Reveal>
            <ImageWithText img={image66} color={'#FFFFFF'}>
              <>
                <h2 style={{ color: '#FFFFFF', marginTop: 0, marginBottom: 0 }}>
                  Прежде чем мы углубимся в обучение и структуру данного курса,
                </h2>
                <Sizebox height={17} />
                <h3>
                  пожалуйста, изучите основные сокращения, , используемые в
                  национальной системе ПОД/ФТ.
                </h3>
              </>
            </ImageWithText>
          </Reveal>

          <Reveal>
            <Table_1
              rows={[
                {
                  first: 'АФМ',
                  second:
                    'Агентство Республики Казахстан по финансовому мониторингу',
                },
                {
                  first: 'АРРФР',
                  second:
                    'Агентство Республики Казахстан по регулированию и развитию финансового рынка',
                },
                {
                  first: 'АЗРК',
                  second:
                    'Агентство по защите и развитию конкуренции Республики Казахстан',
                },
                { first: 'БИН', second: 'Бизнес-идентификационный номер' },
                {
                  first: 'ГП РК',
                  second: 'Генеральная прокуратура Республики Казахстан',
                },
                {
                  first: 'ЗРК',
                  second:
                    'Евразийская группа по противодействию легализации преступных доходов и финансированию терроризма',
                },
                { first: 'ЕАГ', second: 'Бизнес-идентификационный номер' },
                {
                  first: 'ИИН',
                  second: 'Индивидуальный идентификационный номер',
                },
                {
                  first: 'КВГА',
                  second: 'Комитет внутреннего государственного аудита',
                },
                {
                  first: 'КИТ МКС РК',
                  second:
                    'Комитет индустрии туризма Министерства культуры и спорта Республики Казахстан',
                },
                {
                  first: 'КоАП РК',
                  second:
                    'Кодекс об административных правонарушениях Республики Казахстан',
                },
              ]}
            />
          </Reveal>

          <Sizebox height={40} />

          <Reveal>
            <Report_Warning>
              Вам приведена лишь часть сокращений, которые обязательно
              потребуются для полного понимания курса
            </Report_Warning>
          </Reveal>

          <Sizebox height={100} />

          <Reveal>
            <HeaderWithLine headerColor={'#1F3C88'} lineColor={'#CADEFC'}>
              <>
                Перейдем к <span className="bold">следующему</span> блоку
                обучения
              </>
            </HeaderWithLine>
          </Reveal>

          <Sizebox height={100} />

          <Reveal>
            <NumberedDots
              dotsColor={'#CADEFC'}
              header={
                'Основные понятия и их значения, используемые в данном курсе'
              }
              list={[
                'общие понятия',
                'понятия, связанные с операциями в сфере ПОД/ФТ',
                'понятия, используемые при надлежащей проверке клиентов',
                'понятия, связанные с субъектами финансового мониторинга',
                'понятия, используемые при реализации риск-ориентированного подхода',
              ]}
            />
          </Reveal>

          <Sizebox height={100} />

          <Reveal>
            {/*<ImageLine img={null} height={130} color={'#CADEFC'}/>*/}
          </Reveal>

          <Sizebox height={36} />

          <Reveal>
            <DropDownTextWithTabs
              tabs={[
                'Общие понятия',
                'Понятия в сфере ПОД/ФТ',
                'Проверка клиентов',
                'СФМ',
                'Риск-ориентированный подход',
              ]}
              tabsData={[
                {
                  header:
                    'Агентство Республики Казахстан по финансовому мониторингу(АФМ)',
                  data: 'Государственный орган. осуществляющий финансовый мониторинг и принимающий иные меры по ПОД/ФТ/ФРОМУ.',
                  tabName: 'Общие понятия',
                },
                {
                  header: 'Сбор, обработка и анализ (Финансовый мониторинг)',
                  data: 'Совокупность мер по сбору, обработке, анализу, и использованию сведений и информации об операциях с деньгами и (или) иным имуществом, осуществляемых уполномоченным органом и субъектом финансового мониторинга в соответствии с Законом о ПОД/ФТ.',
                  tabName: 'Общие понятия',
                },
                {
                  header:
                    'Легализация (отмывание) доходов, полученных преступным путем',
                  data: 'Вовлечение в законный оборот денег и (или) иного имузества, полученных преступным путем, посредством совершения сделок в виде конверсии или перевода имущества, представляющего доходы от уголовных правонарушений, либо владение и использование такого имущества, сокрытие или утаивание его подлинного характера, источника, места нахождения, способа распоряжения, перемещения, прав на имущество или его принадлежности, если известно, что такое имущество представляет доходы от уголовных правонарушений, а равно посредничество в ОД.',
                  tabName: 'Общие понятия',
                },
                {
                  header: 'Финансирование терроризма (ФТ)',
                  data: 'Представление или сбор денег и (или) иного имущество, права на имущество или выгод имущественного характера, а также дарение, мена, пожертвования, благотворительная помощь, оказание информационных и иного рода услуг либо оказание финансовых услуг физическому лицу либо группе лиц, либо юридическому лицу, совершенные лицом, заведомо осознавшим террористический характер их деятельности либо то, что предоставленное имущество, оказанные инвормационные, финансовые и иного рода услуги будут использованы для осуществления террористической деятельности либо обеспечения террористической группы, террористической организации, незаконного военизированного формирования.',
                  tabName: 'Общие понятия',
                },
                {
                  header:
                    'Доходы, полученные преступным путем (преступные доходы)',
                  data: 'Деньги и (или) иное имущество, полученные в результате совершения уголовного правонарушения.',
                  tabName: 'Общие понятия',
                },
                {
                  header:
                    'Государственная политика в сфере противодействия легализации (отмыванию) доходов, полученных преступным путем, и финансированию терроризма(Политика в сфере ПОД/ФТ)',
                  data: 'Правовые, административные и организационные меры, направленные на снижение рисков легализации (отмывания) доходов, полученных преступным путем, и финансирование терроризма, и иные меры в соответствии Законом о ПОД/ФТ.',
                  tabName: 'Общие понятия',
                },
                {
                  header: 'Операции с деньгами и (или) иным имуществом',
                  data: 'Действия физических, юридических лиц и иностранных структур без образования юридического лица с деньгами и (или) иным имуществом независимо от формы и способа их осуществления, направленные на установление, изменение или прекращение связанных с ними гражданскоих прав и обязанностей.',
                  tabName: 'Понятия в сфере ПОД/ФТ',
                },
                {
                  header: 'Операции, подлижащие финансовому мониторингу',
                  data: 'Операции клиента субъекта финансового мониторинга с деньгами и (или) иным имуществом, в отношении которых в соответствии с настоящим Законом установлен финансовый мониторинг.',
                  tabName: 'Понятия в сфере ПОД/ФТ',
                },
                {
                  header:
                    'Пороговая операция с деньгами и (или) иным имуществом (ПО)',
                  data: 'Пороговая операция с деньгами и иным имуществом (ПО) обычно относится к финансовым транзакциям, которые вызывают подозрения на возможное отмывание денег или финансирование терроризма. Это могут быть операции, превышающие определенную сумму денег или имущества, и требующие особого контроля, отчетности или подтверждения легальности происхождения средств.',
                  tabName: 'Понятия в сфере ПОД/ФТ',
                },
                {
                  header:
                    'Подозрительная операция с деньгами и (или) иным имуществом (СПО)',
                  data: 'операция клиента (включая попытку совершения такой операции, операцию, находящуюся в процессе совершения или уже совершенную операцию), в отношении которой возникают подозрения о том, что деньги и (или) иное имущество, используемые для ее совершения, являются доходом от преступной деятельности, либо сама операция направлена на легализацию (отмывание) доходов, полученных преступным путем, или финансирование терроризма либо иную преступную деятельность\n',
                  tabName: 'Понятия в сфере ПОД/ФТ',
                },
                {
                  header:
                    'Замораживание операций с деньгами и (или) иным имуществом',
                  data: 'меры, принимаемые субъектами финансового мониторинга и государственными органами по приостановлению передачи, преобразования, отчуждения или перемещения денег и (или) иного имущества',
                  tabName: 'Понятия в сфере ПОД/ФТ',
                },
                {
                  header: 'Целевые фининсовые санкции (ЦФС)',
                  data: 'меры по замораживанию операций с деньгами и (или) иным имуществом, принимаемые субъектами финансового мониторинга и государственными органами в соответствии с настоящим Законом и резолюциями Совета Безопасности Организации Объединенных Наций, относящимися к предупреждению и предотвращению терроризма и финансирования терроризма, предупреждению, воспрепятствованию и прекращению распространения оружия массового уничтожения и его финансирования',
                  tabName: 'Понятия в сфере ПОД/ФТ',
                },
                {
                  header: 'Выделенный канал связи (WEB SFM)',
                  data: 'сеть уполномоченного органа в сфере финансового мониторинга, используемая для электронного взаимодействия с Субъектом',
                  tabName: 'Понятия в сфере ПОД/ФТ',
                },
                {
                  header: 'Форма ФМ-1 (ФМ-1)',
                  data: 'форма сведений и информации об операции, подлежащей финансовому мониторингу, предусмотренными Правилами представления субъектами финансового мониторинга сведений, утверждаемых уполномоченным органом по финансовому мониторингу в сфере противодействия легализации (отмыванию) доходов, полученных преступным путем, финансированию терроризма и финансированию распространения оружия массового уничтожения (далее - ПОД/ФТФРОМУ), в соответствии с пунктом 2 статьи 10 Закона о ПОД/ФТ.\n',
                  tabName: 'Понятия в сфере ПОД/ФТ',
                },
                {
                  header:
                    'Надлежащая проверка субъектами финансового мониторинга клиентов (НПК)',
                  data: 'меры, принимаемые субъектами финансового мониторинга в отношении своих клиентов (их представителей) и бенефициарных собственников\n',
                  tabName: 'Проверка клиентов',
                },
                {
                  header: 'Клиент субъекта финансового мониторинга',
                  data: 'физическое, юридическое лицо или иностранная структура без образования юридического лица, получающие услуги субъекта финансового мониторинга',
                  tabName: 'Проверка клиентов',
                },
                {
                  header: 'Финансовая группа',
                  data: 'группа юридических лиц, являющихся субъектами финансового мониторинга и взаимодействующих между собой в соответствии с Законом о ПОД/ФТ\n',
                  tabName: 'Проверка клиентов',
                },
                {
                  header: 'Деловые отношения',
                  data: 'отношения с клиентами, возникающие в процессе осуществления субъектом финансового мониторинга профессиональной деятельности\n',
                  tabName: 'Проверка клиентов',
                },
                {
                  header: 'Безупречная деловая репутация',
                  data: 'наличие фактов, подтверждающих профессионализм, добросовестность, отсутствие неснятой или непогашенной судимости, в том числе отсутствие вступившего в законную силу решения суда о применении уголовного наказания в виде лишения права занимать должность руководящего работника финансовой организации, банковского и (или) страхового холдинга и являться крупным участником (крупным акционером) финансовой организации пожизненно\n',
                  tabName: 'Проверка клиентов',
                },
                {
                  header: 'Бенефициарный собственник',
                  data:
                    'физическое лицо:\n' +
                    '- которому прямо или косвенно принадлежат более двадцати пяти процентов долей участия в уставном капитале либо размещенных (за вычетом привилегированных и выкупленных обществом) акций клиента- юридического лица или иностранной структуры без образования юридического лица;\n' +
                    '-осуществляющее контроль над клиентом иным образом;\n' +
                    '-в интересах которого клиентом совершаются операции с деньгами и (или) иным имуществом;\n',
                  tabName: 'Проверка клиентов',
                },
                {
                  header: 'Субъект финансового мониторинга (СФМ)',
                  data: 'Участники системы ПОД/ФТ, определенные ст.3 Закона о ПОД/ФТ',
                  tabName: 'СФМ',
                },
                {
                  header: 'Независимый специалист по юридическим вопросам',
                  data: 'физическое лицо, оказывающее юридические услуги как самостоятельно, так и в качестве партнера или работника на основании трудового договора с субъектом предпринимательства, оказывающего юридическую помощь.\n',
                  tabName: 'СФМ',
                },
                {
                  header: 'Риски ОД/ФТ/Фрому',
                  data: 'Возможность преднамеренного или непреднамеренного вовлечения Субъектов в процессы легализации ОД/ФТ/ФРОМУ или иную преступную деятельность.',
                  tabName: 'Риск-ориентированный подход',
                },
                {
                  header: 'Управлениея рисками ОД/ФТ/Фрому',
                  data: 'Совокупность принимаемых Субъектами мер по мониторингу, выявлению рисков легализации ОД/ФТ/ФРОМУ, а также их минимизации (в отношении услуг, клиентов)\n',
                  tabName: 'Риск-ориентированный подход',
                },
                {
                  header: 'Национальная оценка рисков',
                  data: 'Отчет, проводимый в целях определения угроз и возможностей ОД/ФТ, а также выявления недостатков реализации мер по ПОД/ФТ.',
                  tabName: 'Риск-ориентированный подход',
                },
              ]}
              headerTextColor={'#170F49'}
              activeHeaderTextColor={'#1F3C88'}
              textColor={'#6F6C90'}
              tabsTextColor={'#3A3939'}
              tabsBackgroundColor={'#BAD6FF'}
            />
          </Reveal>
          <Sizebox height={50} />
          <Reveal>
            <VideoWithTitleAndText
              url={
                'https://videos.sproutvideo.com/embed/a790d1b1191ae7c52e/df314522dc6212d3?playerColor=1f71a1'
              }
              title={
                'Более подробнее об основных понятиях вы можете ознакомиться в представленном ниже видео'
              }
              text={`В сфере ПОД/ФТ большое количество различных понятий и значений, однако в данном видео вы можете ознакомиться с понятиями и их функциональностью, которые часто встречаются при осуществлении СФМ финансового мониторинга.
`}
            />
          </Reveal>
          <Sizebox height={50} />
          <Reveal>
            <HeaderWithLine headerColor={'#1F3C88'} lineColor={'#CADEFC'}>
              <>
                Нажмите на <span className="bold">ссылку</span> ниже, чтобы
                перейти к Закону «О противодействии легализации (отмыванию)
                доходов, полученных преступным путем, и финансированию
                терроризма»
              </>
            </HeaderWithLine>
          </Reveal>
          <Sizebox height={50} />

          <Reveal>
            <TextAndLink
              text={
                'Закон «О противодействии легализации (отмыванию) доходов, полученных преступным путем, и финансированию терроризма»'
              }
              link={'https://adilet.zan.kz/rus/docs/Z090000191_'}
            />
          </Reveal>

          <Sizebox height={100} />

          <Reveal>
            <HeaderWithLine headerColor={'#1F3C88'} lineColor={'#CADEFC'}>
              <>
                Теперь, когда вы
                <span className="bold">
                  понимаете, ключевые понятия и сокращения
                </span>
                , можем перейти к изучению системы ПОД/ФТ
              </>
            </HeaderWithLine>
          </Reveal>

          <Sizebox height={100} />

          <Reveal>
            <HeaderWithLine headerColor={'#3A3939'} lineColor={'#CADEFC'}>
              <>Перейдем к следующему блоку обучения</>
            </HeaderWithLine>
          </Reveal>

          <Sizebox height={50} />

          <Reveal>
            <NextLesson
              handleOnClick={() => {
                CheckCurrentChapter(id);
              }}
            />
          </Reveal>
        </LessonPage>
      );
    case 59:
      return (
        <LessonPage name={'Система ПОД/ФТ'} lecturer={'AML Academy'}>
          <Sizebox height={28} />

          <Reveal>
            <HeaderWithLine headerColor={'#1F3C88'} lineColor={'#CADEFC'}>
              <>
                Система ПОД/ФТ достаточно сложный механизм,  который имеет
                множество подходов, инструментов, методов и участников
              </>
            </HeaderWithLine>
          </Reveal>

          <Sizebox height={50} />

          <Reveal>
            <NumberedDots
              dotsColor={'#CADEFC'}
              header={
                'Для полного его понимания, мы изучим следующие направления:'
              }
              list={[
                'Общее понимание мер и их виды;',
                'Рассмотрим примеры таких мер;',
                'Разберем участников системы ПОД/ФТ;',
                'Определим национальные и международные документы, которые служат основой системы ПОД/ФТ.',
              ]}
            />
          </Reveal>

          <Sizebox height={100} />

          <Reveal>
            <ImageWithText img={image1} color={'#FFFFFF'}>
              <>
                <h2 style={{ color: '#FFFFFF', marginTop: 0, marginBottom: 0 }}>
                  Что из себя представляет система ПОД/ФТ?
                </h2>
                <Sizebox height={17} />
                <h3>
                  Это комплекс мероприятий, направленных на борьбу с ОД/ФТ, в
                  виде превентивных и пресекающих мер.
                </h3>
              </>
            </ImageWithText>
          </Reveal>

          <Sizebox height={100} />

          <Reveal>
            <HeaderWithLine headerColor={'#1F3C88'} lineColor={'#CADEFC'}>
              <>
                Теперь давайте <span className="bold">углубимся</span> в данные
                превентивные и пресекающие меры,  их основные{' '}
                <span className="bold">подходы и примеры</span>
              </>
            </HeaderWithLine>
          </Reveal>

          <Sizebox height={100} />

          <Reveal>
            <DropdownList
              list={[
                {
                  name: 'Превентивные меры',
                  description:
                    '(меры, направленные на недопущение рисков и угроз ОД/ФТ, которые не предполагают санкционных методов работ)',
                  items: [
                    'Нормативно-правовая база (Закон о ПОД/ФТ, подзаконные акты и тд.)',
                    'Рискориентированный подход (система управления рисками СФМ, АФМ, ПО, ГО и др.)',
                    'Реализация СФМ требований ПВК (НПК, оценка рисков, обучение и повышение квалификации и др.)',
                    'Система мониторинга и принятие мер по ним (ПО/СПО, в том числе об отказах, прекращении и приостановлении операций клиента)',
                    'Профилактические меры контроля со стороны надзорных органов (камеральный контроль, уведомления, письма, встречи и др.)',
                    'Иные меры, которые применяются в целях недопущения ОД/ФТ',
                  ],
                },
                {
                  name: 'Пресекающие меры',
                  description:
                    '(меры, направленные на недопущение рисков и угроз ОД/ФТ, которые не предполагают санкционных методов работ)',
                  items: [
                    'Направление ПФР материалов в ПО/СГО (разработанные на основании сообщений СФМ)',
                    'Оперативно-розыскная деятельность',
                    'Уголовное преследование',
                    'Конфискация имущества',
                    'Санкционные меры контроля и надзора (штрафы, приостановление и лишение лицензии и др.)',
                    'Иные меры, которые применяются в случае, когда преступникам уже удалось реализовать схемы ОД/ФТ',
                  ],
                },
              ]}
            />
          </Reveal>

          <Sizebox height={100} />

          <Reveal>
            <HeaderWithLine headerColor={'#1F3C88'} lineColor={'#CADEFC'}>
              <>Примеры превентивных мер используемые АФМ</>
            </HeaderWithLine>
          </Reveal>

          <Sizebox height={50} />

          <Reveal>
            <RandomParapraph>
              <>
                Теперь, когда Вы знаете, что из себя{' '}
                <span className="bold">представляют</span> превентивные и
                пресекающие меры, давайте рассмотрим{' '}
                <span className="bold">примеры</span> превентивных мер
                используемые <span className="bold">АФМ</span>, которые{' '}
                <span className="bold">эффективно</span> используются в рамках{' '}
                <span className="bold">взаимодействия</span> с участниками
                национальной антиотмывочной системы
              </>
            </RandomParapraph>
          </Reveal>

          <Sizebox height={100} />

          <Reveal>
            {/* <TODO text='Interactive Dropdown lists'/> */}
            <DropdownList_r5
              title={'Основные инструменты применяемые АФМ'}
              items={[
                {
                  text: 'Кураторство  - за каждым видом СФМ закреплен куратор (сотрудник АФМ РК), осуществляющий оперативное взаимодействие и координацию (ссылка).',
                },
                {
                  text: 'Call-центр  - центр обработки обращений и консультаций для СФМ (колл-центр АФМ РК «14-58»);\n',
                },
                {
                  text: 'Совет-комплаенс  - дискуссионная площадка для обсуждения вопросов качества информационного обмена между участниками национальной антиотмывочной системы',
                },
                {
                  text: 'Оценка  - подразумевает систему риск-ориентированного подхода определения уровня риска среди участников найиональной антиотмывочной системы (СФМ, БВУ, ГО).\n',
                },
                {
                  text: 'Единый портал  - выделенный канал связи по информационному обмену (Перечни, списки, ФМ-1, обратная связь, оценка и др.)',
                },
              ]}
            />
          </Reveal>

          <Sizebox height={100} />

          <Reveal>
            <HeaderWithLine headerColor={'#1F3C88'} lineColor={'#CADEFC'}>
              <>
                Пожалуйста, посмотрите <span className="bold">видео ниже</span>
                , чтобы узнать об{' '}
                <span className="bold">участниках антиотмывочной системы</span>,
                которые непосредственно <span className="bold">реализуют</span>{' '}
                данный комплекс мероприятий
              </>
            </HeaderWithLine>
          </Reveal>

          <Sizebox height={80} />

          <VideoLine
            url={
              'https://videos.sproutvideo.com/embed/0690d6b6191be8ce8f/e497cafd5f67b504'
            }
          />

          <Sizebox height={80} />

          <Reveal>
            {/* <h2>Пояснение к видео</h2> */}
            <RandomH2>Пояснение к видео</RandomH2>
          </Reveal>

          <Sizebox height={22} />

          <Reveal>
            <NumberedDots
              header={
                'Национальная антиотмывочная система состоит из основных приоритетных направлений:'
              }
              list={[
                'Первая линия защиты, которая подразумевает реализацию финансового мониторинга со стороны частного сектора (СФМ);',
                'Реализация государственного контроля и надзора со стороны органов регуляторов;',
                'Взаимодействие с профессиональными объединениями частного сектора;',
                'Проведение Национальной оценки рисков осуществляемая участниками МВС;',
                'Взаимодействие в ходе финансового мониторинга с правоохранительными и специальными государственными органами;',
                'Международное взаимодействие с организациями и органами (в т.ч. с подразделениями финансовых разведок);',
                'Реализация АФМ единой государственной политики, а также координация участников системы ПОД/ФТ',
              ]}
              dotsColor={'#CADEFC'}
            />
          </Reveal>

          <Sizebox height={73} />

          <Reveal>
            <NotNumberedDots
              header={
                'Давайте более подробнее разберем участников системы ПОД/ФТ'
              }
              list={[
                'Банки второго уровня (один из основных источников информации);',
                'Финансовые учреждения (страховые и перестраховочные организации, участники рынка ценных бумаг, МФО и др.);',
                'Не финансовые учреждения (нотариусы, аудиторские организации, представители игорного бизнеса и др.);',
                'участники МВС (государственные органы, правоохранительные органы, специальные государственные органы);',
                'Международные организации (УНП ООН, ОБСЕ, ЕАГ и др.);',
                'Уполномоченный орган в лице Агентства Республики Казахстан по финансовому мониторингу;',
                'Общественные организации (Ассоциация финансистов Казахстана, Профессиональные объединения бухгалтеров, Республиканская нотариальная плата и др.);',
                'Государственные органы регуляторы (Национальный банк Республики Казахстан, Агентство по регулированию и развитию финансового рынка, Министерство юстиции Республики Казахстан и др.).',
              ]}
              dotsColor={'#CADEFC'}
            />
          </Reveal>

          <Sizebox height={100} />

          <Reveal>
            <HeaderWithLine headerColor={'#1F3C88'} lineColor={'#CADEFC'}>
              <>
                Теперь, когда мы знаем, каким образов в{' '}
                <span className="bold">целом</span> реализуется  система ПОД/ФТ
                в Республике Казахстан,  давайте более подробнее изучим{' '}
                <span className="bold">основы</span>,  послужившие ее{' '}
                <span className="bold">функционированию и развитию</span>
              </>
            </HeaderWithLine>
          </Reveal>

          <Sizebox height={50} />

          <Reveal>
            <RandomGlossary
              title={'Нормативно-правовая база'}
              text={
                'Одним из главных элементов национальной системы ПОД/ФТ является наличие фундаментальной нормативно-правовой базы.'
              }
            />
          </Reveal>

          <Sizebox height={80} />

          <Reveal>
            <TextWithTitle
              title={'Основы ПОД/ФТ'}
              text={
                'Правовые основы ПОД/ФТ в Республике Казахстан связаны с принятыми и введенными в действие законами, направленными на закрепление правовых основ ПОД/ФТ, включая правовое регулирование возникающих при этом взаимоотношений субъектов и уполномоченного органа финансового мониторинга, а также других государственных органов. Правовые основы национальной антиотмывочной системы включают в себя международные акты и национальные акты в сфере ПОД/ФТ.'
              }
              color={'#3A3939'}
            />
          </Reveal>

          <Sizebox height={100} />

          <Reveal>
            <HeaderWithLine headerColor={'#1F3C88'} lineColor={'#CADEFC'}>
              <>
                Более подробней, в следующей схеме Вы можете ознакомиться с
                актами как национального, так и международного уровня.
              </>
            </HeaderWithLine>
          </Reveal>

          <Sizebox height={80} />

          <Reveal>
            {/* <TODO text='Interactive 1 to 4'/> */}
            <OneToFour
              header={'Основа национальной системы ПОД/ФТ'}
              list={[
                <>
                  <h4>Национальные акты</h4>
                  <ul>
                    <li>Законы</li>
                    <li>Кодексы</li>
                    <li>Подзаконные акты</li>
                    <li>Рекомендации</li>
                    <li>Инструкции</li>
                    <li>Отчеты</li>
                    <li>Стратегические анализы</li>
                    <li>др.</li>
                  </ul>
                </>,
                <>
                  <h4>Международные акты</h4>
                  <ul>
                    <li>Конвенции</li>
                    <li>Резолюция</li>
                    <li>Договора</li>
                    <li>Стандарты</li>
                    <li>Инструкции</li>
                    <li>Отчеты</li>
                    <li>Стратегические анализы</li>
                    <li>др.</li>
                  </ul>
                </>,
                <>
                  <ul>
                    <li>Закон о ПОД/ФТ</li>
                    <li>КоАП</li>
                    <li>Приказ АФМ</li>
                    <li>НОР, СОР</li>
                    <li>др.</li>
                  </ul>
                </>,
                <>
                  <ul>
                    <li>
                      Конвенция ООН о борьбе противозаконного оборота
                      наркотических средств и психотропных веществ (1938 г.)
                    </li>
                    <li>
                      Конвенция ООН против транснациональной организованной
                      преступности (2000 г.)
                    </li>
                    <li>Конвенция ООН против коррупции (2003 г.)</li>
                    <li>
                      Конвенция Совета Европы об отмывании, выявлении, изъятии и
                      конфискации доходов от преступной деятельности (1990 г.)
                    </li>
                    <li>
                      Конвенция ООН о борьбе с финансированием терроризма (1999
                      г.)
                    </li>
                    <li>
                      Резолюции СБ ООН 1267, 1269, 1373, 1390, 1452, 1455, 1526,
                      1566 и т.д.
                    </li>
                    <li>
                      Шанхайская конвенция о борьбе с терроризмом, сепаратизмом
                      и экстремизмом (2001 г.)
                    </li>
                    <li>
                      Договор о сотрудничестве государств-участников СНГ о
                      борьбе с терроризмом (1999 г.)
                    </li>
                    <li>
                      Конвенция Совета Европы об отмывании, выявлении, изъятии,
                      конфискации доходов от преступной деятельности и о
                      финансировнии терроризма (2005 г.)
                    </li>
                    <li>
                      Международные стандарты в сфере ПОД/ФТ/ФРОМУ (2012 г.) и
                      Методологии оценки технического соответсвтия Рекомендациям
                      ФАТФ и эффективности систем ПОД/ФТ (2013 г.)
                    </li>
                    <li>
                      Инструкции принципы и методологии международных
                      организаций, комитетов, ассоциаций участвующих в
                      деятельности ПОД/ФТ
                    </li>
                    ы{' '}
                  </ul>
                </>,
              ]}
            />
          </Reveal>

          <Sizebox height={100} />

          <Reveal>
            <RandomParapraph>
              Ниже представлен перечень национальных актов для более подробного
              изучения.
            </RandomParapraph>
          </Reveal>

          <Sizebox height={50} />

          <Reveal>
            <FileDownloader file={'fff'} />
          </Reveal>

          <Sizebox height={100} />

          <Reveal>
            <HeaderWithLine headerColor={'#3A3939'} lineColor={'#CADEFC'}>
              <>Перейдем к следующему блоку обучения</>
            </HeaderWithLine>
          </Reveal>

          <Sizebox height={50} />

          <Reveal>
            <NextLesson
              handleOnClick={() => {
                CheckCurrentChapter(id);
              }}
            />
          </Reveal>
        </LessonPage>
      );
    case 60:
      return (
        <LessonPage
          name={'История возникновения первых «схем» отмывания денег'}
          lecturer={'AML Academy'}
        >
          <Sizebox height={28} />

          <Reveal>
            <HeaderWithLine headerColor={'#1F3C88'} lineColor={'#CADEFC'}>
              <>
                На этом занятии мы подробно изучим{' '}
                <span className="bold">историю</span> возникновения первых схем
                отмывания денег.
              </>
            </HeaderWithLine>
          </Reveal>

          <Sizebox height={50} />

          <Reveal>
            <ImageWithText img={image2} color={'#FFFFFF'}>
              <>
                <h3>
                  Отмывание денег - это вовлечение в законный оборот деньги
                  (или) иного имущества, полученных преступным путем.
                </h3>
              </>
            </ImageWithText>
          </Reveal>

          <Reveal>
            <TextWithBackground
              text={[
                'Начальным этапом отмывания денег считается 20 года прошлого века «эпоха сухового закона в США»',
                'Одного из авторов схем отмывания денег считают Аль Капоне.',
              ]}
              color={'#3A3939'}
              backgroundColor={'#CADEFC'}
            />
          </Reveal>

          <Sizebox height={50} />

          <Reveal>
            <ShortBiography
              img={image3}
              name={'Аль Капоне'}
              birthdate={'17 января 1899г.'}
              deathdate={'25 января 1947г.'}
              biography={
                'Считается одним из отцов-основателей организованной преступности США эпохи Сухого закона и Великой депрессии, автором системы отмывания денег и такого понятия, как «рэкет».'
              }
            />
          </Reveal>

          <Sizebox height={100} />

          <Reveal>
            <ImageLine height={2} color={'#CADEFC'} />
          </Reveal>

          <Sizebox height={50} />

          <Reveal>
            <RandomParapraph>
              Схема заключалась в{' '}
              <span className="bold">помещении денежных средств</span> с большим
              наличным оборотом, в прачечные (стиральные машины с автоматами)
              принимавшие монеты в виде оплаты.
            </RandomParapraph>
          </Reveal>

          <Sizebox height={50} />

          <Reveal>
            {/* <TODO text='Video'/> */}
            <VideoWithTitleAndText
              url={
                'https://videos.sproutvideo.com/embed/4490d1b1191ae6cbcd/ec95a4d260da3f5e?playerColor=1f71a1'
              }
              title={'Помещение денежных средств'}
              text={`Тем самым придавалось видимость активной деятельности компании. 
                        При этом, предикатным преступлением выступал доход, полученный от 
                        незаконного оборота алкогольной продукции. Оборот, производство, 
                        продажа и перевозка которого на тот момент была запрещена в рамках «сухого закона». 
                        \nНа тот период времени, отсутствовала практика противодействия 
                        легализации доходов, однако предусматривало налогообложение всех 
                        доходов, в том числе полученных преступным путем.`}
            />
          </Reveal>

          <Sizebox height={106} />

          <Reveal>
            <Report_Warning>
              В результате уголовного дела, Аль Капоне был признан виновным за
              неуплату налогов.
            </Report_Warning>
          </Reveal>

          <Sizebox height={50} />

          <Reveal>
            <TextWithTitle
              title={'Отмывание денег'}
              text={[
                'Данные нормы послужили основой для формирования политики противодействия легализации доходов, с дальнейшим развитием на международном уровне.',
                'Мировое сообщество приняло тот факт, что легализация преступных доходов является серьезным преступлением мирового масштаба, в целях совершения которого могут быть вовлечены финансовые институты, осуществляющих легальную деятельность.',
                'Однако, в 1970 году понятие «отмывание денег» впервые введено в законодательство, в рамках принятия трех законов:',
              ]}
            />
          </Reveal>

          <Sizebox height={37} />

          <Reveal>
            <NotNumberedDots
              list={[
                '«О контроле за организованной преступностью»;',
                '«О всеобщем декларировании»;',
                '«О банковской тайне».',
              ]}
              dotsColor={'#CADEFC'}
            />
          </Reveal>

          <Sizebox height={100} />

          <Reveal>
            <HeaderWithLine>
              <>
                Данные нормы послужили <span className="bold">основой</span> для
                формирования политики противодействия легализации доходов, 
                <span className="bold">
                  с дальнейшим развитием на международном уровне
                </span>
              </>
            </HeaderWithLine>
          </Reveal>

          <Sizebox height={80} />

          <Reveal>
            <ImageWithText
              img={image4}
              imageText={
                'Отмывание денег является преступлением мирового масштаба'
              }
              color={'#FFFFFF'}
            />
          </Reveal>

          <Reveal>
            <TextWithBackground
              text={[
                'Мировое сообщество приняло тот факт, что легализация преступных доходов является серьезным преступлением мирового масштаба, в целях совершения которого могут быть вовлечены финансовые институты, осуществляющих легальную деятельность.',
              ]}
              color={'#3A3939'}
              backgroundColor={'#CADEFC'}
            />
          </Reveal>

          <Sizebox height={80} />

          <Reveal>
            <HeaderWithLine>
              <>
                Изучив историю возникновения отмывания денег на мировом
                уровне, давайте перейдем к криминализации ОД в Республике
                Казахстан.
              </>
            </HeaderWithLine>
          </Reveal>

          <Sizebox height={100} />

          <Reveal>
            <HeaderWithLine headerColor={'#3A3939'} lineColor={'#CADEFC'}>
              <>Перейдем к следующему блоку обучения</>
            </HeaderWithLine>
          </Reveal>

          <Sizebox height={50} />

          <Reveal>
            <NextLesson
              handleOnClick={() => {
                CheckCurrentChapter(id);
              }}
            />
          </Reveal>
        </LessonPage>
      );
    case 61:
      return (
        <LessonPage
          name={
            'Правовой фундамент понятия «легализации денег» в Республике Казахстан'
          }
          lecturer={'AML Academy'}
        >
          <Sizebox height={28} />
          <Reveal>
            <HeaderWithLine headerColor={'#1F3C88'} lineColor={'#CADEFC'}>
              <>
                Республикой Казахстан в целях борьбы с отмыванием денег и
                соответсвтия международным стандартам имплементированы в
                правовую систему нормы в сфере ПОД/ФТ
              </>
            </HeaderWithLine>
          </Reveal>

          <Sizebox height={80} />

          <Reveal>
            <StageDropDown />
          </Reveal>

          <Sizebox height={80} />

          <Reveal>
            <TextWithTitle
              title={'Правовой фундамент'}
              text={[
                'Правовой фундамент финансового мониторинга в Казахстане был заложен появлением в Уголовном кодексе Республики Казахстан в 1997 году статьи 193 «Легализация денежных средств или иного имущества, приобретенного незаконным путем».',
                'В действующей редакции Уголовного кодекса Республики Казахстан данной статье соответствует статья 218 «Легализация (отмывание) денег и (или) иного имущества, полученных преступным путем».',
              ]}
            />
          </Reveal>

          <Sizebox height={80} />

          <Reveal>
            <TabsGlossary
              tabs={[
                'УК КазССР - ст. 165',
                'УК РК - ст. 193',
                'УК РК - ст. 218',
              ]}
              tabsGlossary={{
                'УК КазССР - ст. 165':
                  'Использование денежных средств и иногоимушестваприобретенных или добытых преступным путем, для занятия предпринимательской или иной незапрещенной законом деятельности',
                'УК РК - ст. 193':
                  'совершение финансовых операций и других сделок с денежными средствами или иным имуществом, приобретенным заведомо незаконным путем, а равно использование указанных средств и иного имущества для осуществления предпринимательской или иной экономической деятельности',
                'УК РК - ст. 218':
                  'вовлечение в законный оборот денег и (или) иного имущества, полученных преступным путем, посредством совершения сделок в виде конверсии или перевода имущества, представляющего доходы от уголовных правонарушений, в т.ч. любые доходы от имущества, полученного преступным путем, либо владение и использование, сокрытие или утаивание, места нахожденияЮ способа распоряжения, перемещения, прав, посредничество в ОД',
              }}
              color={'#3A3939'}
              tabsBackgroundColor={'#BAD6FF'}
            />
          </Reveal>

          <Sizebox height={100} />

          <Reveal>
            <TextWithTitle
              title={'Уголовный кодекс'}
              text={
                'Уголовным кодексом предусматриваются различные виды наказаний за ОД:'
              }
            />
          </Reveal>

          <Sizebox height={30} />

          <Reveal>
            <NumberedDots
              dotsColor={'#CADEFC'}
              list={[
                'штраф в размере до 5 000 МРП либо исправительными работами, либо ограничением свободы на срок до 6 лет, либо лишением свободы на тот же срок, с конфискацией имущества',
                'штрафом в размере от 3 000 до 7 000 МРП либо исправительными работами в том же размере, либо лишением свободы на срок от 3 до 7 лет, с конфискацией имущества, в случаях, если ОД совершенно: группой лиц по предварительному сговору; неоднократно; лицом с использованием своего служебного положения.',
                'лишением свободы на срок от 5 до 10 лет с конфискацией имущества, с пожизненным лишением права занимать определенные должности или заниматься определенной деятельностью.',
              ]}
            />
          </Reveal>

          <Sizebox height={100} />

          <Reveal>
            <HeaderWithLine headerColor={'#1F3C88'}>
              <>
                Изучив криминализацию ОД в Республике Казахстан  и уголовную
                ответственность,  более детальнее рассмотри{' '}
                <span className="bold">схемы ОД</span>
              </>
            </HeaderWithLine>
          </Reveal>

          <Sizebox height={100} />

          <Reveal>
            <HeaderWithLine headerColor={'#3A3939'} lineColor={'#CADEFC'}>
              <>Перейдем к следующему блоку обучения</>
            </HeaderWithLine>
          </Reveal>

          <Sizebox height={50} />

          <Reveal>
            <NextLesson
              handleOnClick={() => {
                CheckCurrentChapter(id);
              }}
            />
          </Reveal>
        </LessonPage>
      );
    case 62:
      return (
        <LessonPage
          name={'Основные стадии отмывания денег'}
          lecturer={'AML Academy'}
        >
          <Sizebox height={28} />
          <Reveal>
            <HeaderWithLine headerColor={'#1F3C88'} lineColor={'#CADEFC'}>
              <>
                Республикой Казахстан в целях борьбы с отмыванием денег и
                соответсвтия международным стандартам имплементированы в
                правовую систему нормы в сфере ПОД/ФТ
              </>
            </HeaderWithLine>
          </Reveal>

          <Sizebox height={50} />

          <Reveal>
            <ImageWithText
              img={image51}
              imageText={
                'Отмывание денег является преступлением мирового масштаба'
              }
              color={'#FFFFFF'}
            />
          </Reveal>

          <Sizebox height={80} />

          <Reveal>
            <TextWithTitle
              title={'Уголовный кодекс'}
              text={
                'Выделяют следующие основные негативные последствия использования на страновом уровне преступных доходов '
              }
            />
          </Reveal>

          <Sizebox height={32} />

          <Reveal>
            <NumberedDots
              dotsColor={'#CADEFC'}
              list={[
                'повышение цен / искажение экономических показателей',
                'ослабление верховенства права и повышение уровня совершения предикатных преступлений (в т.ч. коррупции)',
                'недобросовестная конкуренция / неравенство',
                'санкции со стороны мирового сообщества',
              ]}
            />
          </Reveal>

          <Sizebox height={80} />

          <Reveal>
            <TextWithBackground
              header={'Подходы и методы'}
              text={
                'Подходы и методы имеют принцип постоянного «совершенствования», которые реализуются как самостоятельно, так и привлекаются профессиональные отмыватели.'
              }
            />
          </Reveal>

          <Sizebox height={80} />

          <Reveal>
            <TabsGlossary
              tabs={['Самостоятельное', 'Профессиональное']}
              tabsGlossary={{
                Самостоятельное:
                  'когда лицо либо преступная организация самостоятельно пытается скрыть незаконное происхождение доходов от незаконного оборота путем отмывания денег',
                Профессиональное:
                  'когда специалисты в области финансов, действующие как структурированная группа, специализируются на предоставлении консультаций или услуг по отмывыанию денег',
              }}
              color={'#3A3939'}
              tabsBackgroundColor={'#BAD6FF'}
            />
          </Reveal>

          <Sizebox height={100} />

          <Reveal>
            <Report_Warning>
              Данные этапы и формы отмывания денег, могут быть реализованы как
              совместно, так и в отдельном виде.
            </Report_Warning>
          </Reveal>

          <Sizebox height={100} />

          <Reveal>
            <TextWithTitle
              title={'Выбор схемы'}
              text={[
                'При выборе схемы отмывания денег в каждом конкретном случае преступники исходят, прежде всего, из необходимости обеспечить тайну преступного происхождения денежных  средств или иного имущества и сохранить контроль над ними  на всех этапах этого процесса.',
                'Существует несколько общепризнанных моделей легализации доходов, полученных преступным путем. ',
                'Наиболее распространенные стадии:',
              ]}
            />
          </Reveal>

          <Sizebox height={37} />

          <Reveal>
            <NotNumberedDots
              list={[
                'двухфазная модель;',
                'трехфазная модель;',
                'четырехфазная модель',
              ]}
              dotsColor={'#CADEFC'}
            />
          </Reveal>

          <Sizebox height={100} />

          <Reveal>
            <HeaderWithLine
              header={
                'Республикой Казахстан в целях борьбы с отмыванием денег и соответствия международным стандартам имлпементированы в правовую систему нормы в сфере ПОД/ФТ.'
              }
              lineColor={'#CADEFC'}
              headerColor={'#1F3C88'}
            />
          </Reveal>

          <Sizebox height={100} />

          <Reveal>
            <InteractivePhases />
          </Reveal>

          <Sizebox height={100} />

          <Reveal>
            <RandomParapraph>
              Далее более подробно рассмотрим наиболее распространенную
              трехфазовую модель, состоящая, соответственно, из трех фаз или,
              как наиболее принято говорить - трех стадий.
            </RandomParapraph>
          </Reveal>

          <Sizebox height={50} />

          <Reveal>
            <ImageWithText
              img={image52}
              imageText={'Размещение'}
              color={'#FFFFFF'}
            />
          </Reveal>

          <Sizebox height={50} />

          <Reveal>
            <TextWithTitle
              title={'Размещение'}
              text={[
                'Первая стадия «отмывания» доходов, полученных из нелегальных источников, предполагает введение «грязных» денег в легальную финансовую систему через какое-либо учреждение, территориально удаленное от места извлечения преступных доходов.',
                'Некоторые специалисты полагают, что методы, используемые на стадии размещения, находятся в зависимости от используемых финансовых институтов.',
                'Таким образом, в зависимости от используемых финансовых институтов (механизмов) приемы и способы на стадии размещения можно объединить в следующие категории:',
              ]}
            />
          </Reveal>

          <Sizebox height={37} />

          <Reveal>
            <NotNumberedDots
              list={[
                'размещение через традиционные финансовые учреждения;',
                'размещение через нетрадиционные финансовые учреждения;',
                'размещение через учреждения нефинансового сектора;',
                'размещение за пределами страны',
              ]}
              dotsColor={'#CADEFC'}
            />
          </Reveal>

          <Sizebox height={80} />

          <Reveal>
            <ImageWithText
              img={image53}
              imageText={'Размещение через традиционные финансовые учреждения'}
              color={'#FFFFFF'}
            />
          </Reveal>

          <Sizebox height={50} />

          <Reveal>
            <TextWithTitle
              title={'Размещение'}
              text={[
                'Традиционные финансовые учреждения занимаются обычным финансовым бизнесом на основании лицензии или разрешения. К ним относятся банки второго уровня, которые и управляются государственными регулирующими органами.',
                'Приемы и способы:',
              ]}
            />
          </Reveal>

          <Sizebox height={37} />

          <Reveal>
            <NotNumberedDots
              list={[
                'денежно-валютные операции, включающие обмен банкнот на купюры более крупного достоинства и обмен валюты одного государства на валюту других государств;',
                ' открытие в банках счетов, в том числе, обслуживаемых с использованием пластиковых карт, с целью последующего размещения (депонирования) на них денежных средств, полученных преступным путем;',
                'структурирование (дробление) операций с денежными средствами с целью ухода из подконтрольной государству сферы сделок и операций, подлежащих обязательному контролю;',
                'открытие в банках расчетных счетов с использованием учредительных документов, бланков, печатей фиктивных либо прекративших свое существование организаций, зачисление на эти счета незаконно полученных денежных средств или заключение от имени таких организаций кредитных договоров с банками с дальнейшим перечислением денежных средств во исполнение подложного контракта или по иным основаниям;',
                ' нелегальная доставка через таможенную границу наличных денежных средств, с последующим размещением на счетах физических и юридических лиц на счетах в иностранных банках и кредитных учреждениях;',
                'погашение денежными средствами, полученными в процессе преступной деятельности, кредитов на легальных основаниях в банке.',
              ]}
              dotsColor={'#CADEFC'}
            />
          </Reveal>

          <Sizebox height={80} />

          <Reveal>
            <ImageWithText
              img={image54}
              imageText={
                'Размещение через нетрадиционные финансовые учреждения'
              }
              color={'#FFFFFF'}
            />
          </Reveal>

          <Sizebox height={50} />

          <Reveal>
            <TextWithTitle
              title={'Размещение через нетрадиционные финансовые учреждения'}
              text={[
                'В данную группу относятся небанковские финансовые организации, оказывающие банковские услуги населению, к которым относят: брокеры ценных бумаг и драгоценных металлов, казино, организации в сфере оказания почтовых и телеграфных услуг, организации, оказывающие услуги по переводу электронных денег (электронные платежные системы) и др.',
                'Выявлены следующие способы:',
              ]}
            />
          </Reveal>

          <Sizebox height={37} />

          <Reveal>
            <NumberedDots
              dotsColor={'#CADEFC'}
              list={[
                'Использование почтовых переводов',
                'Использование систем электронных платежей (в том числе, использование так называемых обменников электронных валют)',
                'Использование альтернативных систем денежных переводов по типу «Хавала»',
                'Использование подпольных банков, то есть нелегальных организаций, оказывающих услуги физическим и юридическим лицам по кредитованию, осуществлению переводов денежных средств, конвертации и обналичиванию денежных средств и др.',
              ]}
            />
          </Reveal>

          <Sizebox height={50} />

          <Reveal>
            <Report_Warning>
              Согласно международному опыту нетрадиционные финансовые
              организации все чаще используются для легализации.
            </Report_Warning>
          </Reveal>

          <Sizebox height={50} />

          <Reveal>
            <TextWithTitle
              title={'Причины использования'}
              text={[
                'Причин этому несколько, в том числе, принятие государством активных мер для повышения эффективности банковского законодательства в части противодействия легализации преступных доходов. В то же время, различные банковские инструменты не всегда востребованы обществом, а зачастую и не выгодны для потенциальных потребителей.',
                'Следствием данного фактора является большой оборот наличных денежных средств, что, как ни странно, для развития некоторых нетрадиционных финансовых организаций играет достаточно позитивную роль.',
                'Так, например, ввиду развитой доступности терминалов пополнения электронных кошельков и возможности осуществлять подобную процедуру без комиссии, очень востребованными сегодня в мире являются электронные платежные системы.',
              ]}
            />
          </Reveal>

          <Sizebox height={50} />

          <Reveal>
            <Report_Warning>
              Тем не менее, законодателем предпринимаются усилия для недопущения
              использования сферы электронных платежей в целях легализации
              полученных доходов.
            </Report_Warning>
          </Reveal>

          <Sizebox height={50} />

          <Reveal>
            <ImageWithText
              img={image55}
              imageText={'Размещение через учреждения нефинансового сектора'}
              color={'#FFFFFF'}
            />
          </Reveal>

          <Sizebox height={50} />

          <Reveal>
            <TextWithTitle
              title={'Размещение через учреждения нефинансового сектора'}
              text={['Вовлечены следующие виды организаций:']}
            />
          </Reveal>

          <Sizebox height={37} />

          <Reveal>
            <NotNumberedDots
              list={[
                'учреждения в сфере развлечений, организации в сфере общественного питания (рестораны, бары, кафе), спортивно-оздоровительные центры, гостиничные комплексы, сауны, массажные салоны, организации, специализирующиеся на проведении различных концертов и выступлений артистов эстрады;',
                'учреждения из сферы автомобильного бизнеса, среди которых магазины автозапчастей, прокат автомобилей, комиссионная торговля автомобилями, ремонт автомобилей, транспортные перевозки и т.д.;',
                'предприятия из сферы розничной торговли: антикварные магазины, комиссионки, фотомагазины, обувные магазины, секонд-хенды, оружейные магазины и др.;',
                'предприятия сферы услуг (за исключением сферы развлечений): фотоателье, типографии, агентства недвижимости, агентства по организации перевозок граждан;',
                'мастерские по ремонту и пошиву одежды и обуви; организации по ремонту и внутренней отделке квартир и частных домовладений;',
                'иные предприятия: строительные фирмы, предприятия по приему металлолома и т.д.',
              ]}
              dotsColor={'#CADEFC'}
            />
          </Reveal>

          <Sizebox height={80} />

          <Reveal>
            <TextWithBackground
              header={'При размещении'}
              text={[
                'При размещении через учреждения нефинансового сектора «грязные» деньги нередко смешиваются с легальными доходами, полученными в результате обычной экономической деятельности, и декларируются как «чистые» деньги.',
              ]}
            />
          </Reveal>

          <Sizebox height={50} />

          <Reveal>
            <Report_Warning>
              Данный метод легализации незаконных средств характерен также и на
              стадии запутывания следов.
            </Report_Warning>
          </Reveal>

          <Sizebox height={50} />

          <Reveal>
            <TextWithTitle
              title={'Фиктивное предприятие'}
              text={[
                'Кроме того, посредством создания фиктивного предприятия, организовывается мнимая коммерческая деятельность, в ходе которой в качестве доходов отражаются преступно добытые средства.',
              ]}
            />
          </Reveal>

          <Sizebox height={50} />

          <Reveal>
            <ImageWithText
              img={image56}
              imageText={'Размещение за пределами страны'}
              color={'#FFFFFF'}
            />
          </Reveal>

          <Sizebox height={50} />

          <Reveal>
            <TextWithTitle
              title={'Размещение за пределами страны'}
              text={[
                'Данный подход предполагает физический перевод денежных средств посредством скрытого вывоза наличных денег курьерами (контрабанды). ',
                'Для перевозки денежной наличности используются разнообразные хранилища, специально созданные в:',
              ]}
            />
          </Reveal>

          <Sizebox height={37} />

          <Reveal>
            <NotNumberedDots
              list={[
                'чемоданах',
                'транспортных средствах',
                'предметах, которые допускают размещение большой суммы денежной наличности без внешних признаков изменения их первоначального вида.',
              ]}
              dotsColor={'#CADEFC'}
            />
          </Reveal>

          <Sizebox height={80} />

          <Reveal>
            <HeaderWithLine headerColor={'#1F3C88'}>
              Некоторые из указанных способов{' '}
              <span className="bold">активно</span>
              применяются на <span className="bold">стадии размещения</span>,
              однако, как показывает практика, этап размещения наличности
              является <span className="bold">самым слабым звеном</span> в
              процессе легализации доходов
            </HeaderWithLine>
          </Reveal>

          <Sizebox height={50} />

          <Reveal>
            <Report_Warning>
              Незаконно полученные средства легче всего могут быть выявлены
              именно на этом этапе.
            </Report_Warning>
          </Reveal>

          <Sizebox height={80} />

          <Reveal>
            <Component52 />
          </Reveal>

          <Sizebox height={80} />

          <Reveal>
            <Report_Warning>
              В результате маскируется связь между денежными средствами и
              преступным источником их происхождения.
            </Report_Warning>
          </Reveal>

          <Sizebox height={80} />

          <Reveal>
            <ImageWithText
              img={image57}
              imageText={'Интеграция'}
              color={'#FFFFFF'}
            />
          </Reveal>

          <Sizebox height={50} />

          <Reveal>
            <TextWithTitle
              title={'Расслоение'}
              text={['Выявлены следующие способы:']}
            />
          </Reveal>

          <Sizebox height={30} />

          <Reveal>
            <NumberedDots
              list={[
                'Перевод денежных средств от одного физического лица другому.',
                'Перевод уже размещенных в финансовых институтах денежных средств, маскируемый мнимыми сделками из одной фирмы в другую и дальше, что позволяет достаточно эффективно скрывать истинный источник происхождения преступных средств и облегчает выведение преступных доходов за пределы географического региона их извлечения.',
                'Перевод денежных средств в различные финансовые инструменты, такие как: дорожные чеки; банковские чеки и векселя; акции и облигации; и последующий вывоз их за пределы страны.',
                'Приобретение и отчуждение имущественных ценностей. Деньги трансформируются в приобретаемое имущество, а оно затем используется преступниками, либо вывозится за пределы страны.',
                'Электронные денежные переводы, в том числе, с использование электронных денежных средств.',
              ]}
              dotsColor={'#CADEFC'}
            />
          </Reveal>

          <Sizebox height={30} />

          <Reveal>
            <Report_Warning>
              Кроме того, посредством создания фиктивного предприятия,
              организовывается мнимая коммерческая деятельность, в ходе которой
              в качестве доходов отражаются преступно добытые средства.
            </Report_Warning>
          </Reveal>

          <Sizebox height={50} />

          <Reveal>
            <HeaderWithLine headerColor={'#1F3C88'}>
              На этой стадии так называемый{' '}
              <span className="bold">«отрыв»</span> денежных средств от страны
              происхождения обеспечивается за счет осуществления{' '}
              <span className="bold">трансграничных</span> финансовых операций,
              для чего широко используются оффшорные банки, проводящие такие
              операции, и оффшорные компании, предоставляющие основания для их
              проведения.
            </HeaderWithLine>
          </Reveal>

          <Sizebox height={50} />

          <Reveal>
            <ImageWithText
              img={image58}
              imageText={'Расслоение'}
              color={'#FFFFFF'}
            />
          </Reveal>

          <Sizebox height={50} />

          <Reveal>
            <TextWithTitle
              title={'Интеграция'}
              text={[
                'Третья стадия процесса легализации, непосредственно направленная на придание видимой законности преступно нажитому состоянию путем приобретения объектов недвижимости, ценных бумаг, произведений искусства, предметов роскоши и этот перечень не ограничен.',
                'На этой стадии незаконный капитал после широкомасштабной операции по укрыванию его природы возвращается обратно в экономический цикл, создавая впечатление о его легальном происхождении в результате законной деловой активности.',
                'Тем самым, преступники получают возможность свободно использовать «отмытые» деньги. ',
              ]}
            />
          </Reveal>

          <Sizebox height={50} />

          <Reveal>
            <TextWithBackground
              header={'Прокручивание денег'}
              text={
                'Таким образом, происходит окончательное прокручивание денег, которые обретают «легальный» источник происхождения и инвестируются в легальную экономику.'
              }
            />
          </Reveal>

          <Sizebox height={50} />

          <Reveal>
            <Report_Warning>
              Фактически по завершении операций на этой стадии заканчивается
              процесс легализации.
            </Report_Warning>
          </Reveal>

          <Sizebox height={50} />

          <Reveal>
            <HeaderWithLine headerColor={'#1F3C88'}>
              Вы изучили основные этапы легализации денег, при этом
              продемонстрированные подходы и способы являются лишь наиболее
              распространенными
            </HeaderWithLine>
          </Reveal>

          <Sizebox height={100} />

          <Reveal>
            <HeaderWithLine headerColor={'#3A3939'} lineColor={'#CADEFC'}>
              <>Перейдем к следующему блоку обучения</>
            </HeaderWithLine>
          </Reveal>

          <Sizebox height={50} />

          <Reveal>
            <NextLesson
              handleOnClick={() => {
                CheckCurrentChapter(id);
              }}
            />
          </Reveal>

          {/* ------------ */}
        </LessonPage>
      );
    case 63:
      return (
        <LessonPage name={'Схемы отмывания денег'} lecturer={'AML Academy'}>
          <Sizebox height={28} />

          <Reveal>
            <HeaderWithLine headerColor={'#1F3C88'} lineColor={'#CADEFC'}>
              <>
                Важно знать, что <span className="bold">схемы и способы</span>{' '}
                ОД <span className="bold">постоянно совершенствуются</span>,{' '}
                <span className="bold">меняются подходы и инструменты</span>, в
                том числе с применением новых технологий.
              </>
            </HeaderWithLine>
          </Reveal>

          <Sizebox height={50} />

          <Reveal>
            <NumberedDots
              dotsColor={'#CADEFC'}
              header={
                'В рамках данного курса, мы разберем несколько схем ОД, поэтапно раскрывая следующие направления:'
              }
              list={[
                'практическое применение трех основных этапов;',
                'роль СФМ в рамках данных схем;',
                'схемы ОД на примере объектов недвижимости, интернет-мошенничества и др.',
                'примеры признаков подозрительной операции.',
              ]}
            />
          </Reveal>

          <Sizebox height={100} />

          <Reveal>
            <HeaderWithLine
              header={
                'Рассмотрим пример легализации денежных средств с учетом трех этапной модели'
              }
              headerColor={'#1F3C88'}
            />
          </Reveal>
          <Sizebox height={40} />
          <Reveal>
            <VideoLine url={'https://videos.sproutvideo.com/embed/a790d6b6191ce4c02e/d3b90f4c6746727e'}/>
          </Reveal>
          <Sizebox height={40} />
          <Reveal>
            <TextWithTitle
              title={
                'Данный пример раскрывает основные этапы: размещение, расслоение и интеграцию.'
              }
              text={[
                'В рамках этапа «размещение», используется способ - открытие в банках счетов, в том числе, обслуживаемых с использованием пластиковых карт, с целью последующего размещения (депонирования) на них денежных средств, полученных преступным путем.',
                'На следующем этапе «расслоение», проводятся денежные операции среди подставных организаций (ИП), в целях запутывания следов происхождения и связки с конечным бенефициарным собственником.',
                'На заключительном этапе «интеграция», осуществляется перечисление денежных средств бенефициарному собственнику, в рамках фиктивных договор и услуг.',
              ]}
            />
          </Reveal>

          <Sizebox height={100} />

          <Reveal>
            <Report_Warning>
              Таким образом, осуществляется один из примеров ОД, в результате
              преступный доход обретает «легальный» источник происхождения и в
              дальнейшем может быть инвестирован в легальную экономику.
            </Report_Warning>
          </Reveal>

          <Sizebox height={100} />

          <Reveal>
            <HeaderWithLine
              header={'Рассмотрим роль СФМ при выявлении схем ОД'}
              headerColor={'#1F3C88'}
            />
          </Reveal>
          <Sizebox height={40} />
          <Reveal>
            <VideoLine url={'https://videos.sproutvideo.com/embed/ac90d6b6191be8cc25/017133e5d220ffaa'}/>
          </Reveal>
          <Sizebox height={40} />
          <Reveal>
            <>
              <TextWithTitle
                title={
                  'Данный пример раскрывает важность участия СФМ в выявлении схем ОД'
                }
                text={[
                  'В видео-уроке продемонстрировано участие нескольких СФМ: БВУ, бухгалтера и нотариус. Однако, участниками финансовых операций, направленных на ОД может быть, как один СФМ, так и несколько (в зависимости от сложности схем и применяемых способов ОД).',
                  'В целях осуществления финансового мониторинга, где подразумевается применение надлежащей проверки клиента, риск-ориентированного похода и системы мониторинга операций, СФМ выявляются операции подлежащих финансовому мониторинга (пороговые и подозрительные операции).',
                  'Важно отметить, что национальная антиотмывочная система предусматривает применение действенных и своевременных следующих мер со стороны СФМ в отношении таких клиентов и их операций:',
                ]}
              />
              <Sizebox height={40} />
              <NumberedDots
                dotsColor={'#CADEFC'}
                list={[
                  'направление ПО/СПО;',
                  'отказ в проведении операции и в установлении деловых отношении (при выявлении таких операций до их совершения);',
                  'прекращение деловых отношений;',
                  'приостановление операции;',
                  'иные меры.',
                ]}
              />
            </>
          </Reveal>

          <Sizebox height={50} />

          <Reveal>
            <Report_Warning>
              Более подробнее о требованиях и мерах СФМ вы ознакомитесь в
              следующих модулях.
            </Report_Warning>
          </Reveal>

          <Sizebox height={50} />

          <Reveal>
            <Centered>
              <RandomParapraph>
                <>
                  СФМ являются <span className="bold">важным элементом&nbsp;</span>
                  национальной антиотмывочной системы, осуществляя роль «
                  <span className="bold">первой линии защиты</span>» при
                  реализации схем ОД/ФТ.
                </>
              </RandomParapraph>
            </Centered>
          </Reveal>

          <Sizebox height={80} />

          <Reveal>
            <HeaderWithLine headerColor={'#1F3C88'}>
              <>
                Посмотрите видео ниже, чтобы узнать больше о{' '}
                <span className="bold">роли СФМ</span>в выявлении схем и{' '}
                <span className="bold">рисков</span> ОД/ФТ.
              </>
            </HeaderWithLine>
          </Reveal>

          <Sizebox height={100} />

          <Reveal>
            <HeaderWithLine
              header={'Взаимодействие СФМ с АФМ в рамках выявления схем ОД/ФТ'}
              headerColor={'#1F3C88'}
            />
          </Reveal>
          <Sizebox height={40} />
          <Reveal>
            <VideoLine url={'https://videos.sproutvideo.com/embed/4d90d6b6191ce5c3c4/d684e1c6405b57de'}/>
          </Reveal>
          <Sizebox height={40} />
          <Reveal>
            <TextWithTitle
              text={[
                'В ходе выявления схем ОД/ФТ осуществляется тесное взаимодействие между СФМ и АФМ. Основным источником информации служат сообщения, направляемые СФМ (ПО/СПО), которые выявляются в ходе исполнения требований, предусмотренные законодательством о ПОД/ФТ.',
              ]}
            />
          </Reveal>

          <Sizebox height={100} />

          <Reveal>
            <Report_Warning>
              <>
                <span className="bold">Не исполнение</span> СФМ требований
                законодательства о ПОД/ФТ, предусматривает{' '}
                <span className="bold">ответственность</span> ст.214 КоАП.
              </>
            </Report_Warning>
          </Reveal>

          <Sizebox height={100} />

          <Reveal>
            <>
              <TextWithTitle
                text={`В представленной схеме продемонстрирован лишь 
                        один из распространенных примеров ОД, 
                        однако выделяют и другие способы, 
                        и схемы в ходе легализации доходов:`}
              />
              <Sizebox height={20} />
              <NumberedDots
                dotsColor={'#CADEFC'}
                list={[
                  'Сделки с занижением цены;',
                  'Сделки с завышением цены;',
                  'Легализация преступных доходов через игорный бизнес;',
                  'Покупка или продажа объектов недвижимости;',
                  'Использование банковских счетов иностранной или совместной фирмы;',
                  'Операции, совершаемые с криптовалютой;',
                  'Фиктивные сделки предоставления услуг, реализации товара;',
                  'Иные схемы и способы.',
                ]}
              />
            </>
          </Reveal>

          <Sizebox height={100} />

          <Reveal>
            <Centered>
              <RandomParapraph>
                <>
                  В Личном кабинете СФМ размещены{' '}
                  <span className="bold">типологии</span> ОД/ФТ, утвержденные
                  уполномоченным органом по финансовому мониторингу (АФМ).
                  Данные схемы разрабатываются исходя из международного опыта,
                  приговоров уголовных дел, в результате оперативного и
                  тактического анализа и т.д.
                </>
              </RandomParapraph>
            </Centered>
          </Reveal>

          <Sizebox height={100} />

          <Reveal>
            <>
              <RandomH2>
                <>Предикатные преступления в сфере отмывания денег</>
              </RandomH2>
              <Sizebox height={20} />
              <RandomParapraph>
                <>
                  <span className="bold">Предикатными</span> по отношению к
                  отмыванию денег считаются преступления,{' '}
                  <span className="bold">в результате</span> совершения которых
                  возникает <span className="bold">доход или имущество</span>,
                  впоследствии
                  <span className="bold">
                    подлежащие отмыванию (легализации)
                  </span>
                  , такие как:
                </>
              </RandomParapraph>
              <Sizebox height={40} />
              <NotNumberedDots
                dotsColor={'#CADEFC'}
                list={[
                  'выписка фиктивных счетов-фактур;',
                  'присвоение или растрата вверенного чужого имущества;',
                  'организация незаконного игорного бизнеса;',
                  'грабеж;',
                  'вымогательство;',
                  'создание организованной преступной группировки;',
                  'подлог;',
                  'фальшивомонетничество;',
                  'подделка документов;',
                  'незаконный оборот наркотиков и оружия;',
                  'мошенничество;',
                  'взятка;',
                  'коррупция;',
                  'нарушение авторских прав и целый ряд других преступлений.',
                ]}
              />
            </>
          </Reveal>

          <Sizebox height={100} />

          <Reveal>
            <Centered>
              <RandomParapraph>
                <>
                  В <span className="bold">НОР</span> (от 2021 года) определены
                  в качестве{' '}
                  <span className="bold">
                    угроз высокой степени: налоговые преступления, нелегальная
                    экономическая деятельность, коррупция
                  </span>{' '}
                  и{' '}
                  <span className="bold">
                    хищение бюджетных средств, мошенничество
                  </span>
                  и <span className="bold">незаконный оборот наркотиков.</span>
                </>
              </RandomParapraph>
            </Centered>
          </Reveal>
          <Sizebox height={80} />

          <Reveal>
            <HeaderWithLine headerColor={'#1F3C88'} lineColor={'#CADEFC'}>
              <>
                Посмотрите видео ниже, чтобы узнать больше о выявлении схем ОД и
                предикатных преступлений.
              </>
            </HeaderWithLine>
          </Reveal>
          <Sizebox height={100} />
          <Reveal>
            <VideoWithTitleAndText
              url={'https://videos.sproutvideo.com/embed/a790d6b6191ce4c02e/d3b90f4c6746727e'}
              title={'Схема ОД в сделках с объектами недвижимого имущества'}
              text={
                <>
                  Преступниками при ОД часто используются схемы с использованием
                  заключения{' '}
                  <span className="bold">договоров купли-продажи</span>{' '}
                  недвижимого имущества{' '}
                  <span className="bold">с завышением стоимости объекта.</span>
                </>
              }
            />
          </Reveal>

          <Sizebox height={40} />
          <Reveal>
            <TextWithTitle
              text={[
                <>
                  К примеру, в представленной схеме, возможно, использования{' '}
                  <span className="bold">услуг нотариусов и риелторов</span> при
                  приобретении недвижимости по завышенной стоимости.
                </>,
                <>
                  У продавца имеются <span className="bold">доходы</span>,
                  полученные преступным путем,{' '}
                  <span className="bold">для легализации данных средств</span>,
                  преступнику необходимо придать{' '}
                  <span className="bold">законность</span> и{' '}
                  <span className="bold">основание</span> таким доходам.
                </>,
                <>
                  Тем самым, заключается договор купли-продажи на недвижимое
                  имущество, где покупатель{' '}
                  <span className="bold">приобретает</span> объект недвижимости
                  (который по рыночной стоимости значительно ниже),{' '}
                  <span className="bold">предварительно обговорив условия</span>{' '}
                  заключения.
                </>,
                <>
                  Фактически, покупать передает{' '}
                  <span className="bold">значительно меньшую сумму</span>, при
                  этом в договоре отражается сумма,{' '}
                  <span className="bold">
                    с учетом размера дохода, который необходимо легализовать.
                  </span>
                </>,
              ]}
            />
          </Reveal>

          <Sizebox height={100} />
          <Reveal>
            <Report_Warning>
              Для выявления СФМ таких схем, важно применение усиленных мер НПК.
            </Report_Warning>
          </Reveal>
          <Sizebox height={100} />

          <Reveal>
            <HeaderWithLine headerColor={'#1F3C88'} lineColor={'#CADEFC'}>
              <>
                <span className="bold">Для закрепления</span> информации по
                схеме ОД в сделках с недвижимым имуществом (приведенной в
                видео-уроке), пожалуйста, расставьте карточки с{' '}
                <span className="bold">признаками подозрительной операции</span>
                (по соответствующим полям), определенных в данной схеме.
              </>
            </HeaderWithLine>
          </Reveal>

          <Sizebox height={100} />

          <Reveal>
            <DragAndDropTwoSide
              questions={[
                {
                  answer:
                    'Значительное увеличение стоимости объекта, которое не объясняется текущей ситуацией на рынке недвижимости',
                  side: 'В схеме выявлен признак',
                },
                {
                  answer:
                    'Совершение операций (сделки) лицом, включенным в перечень организаций и лиц, связанных с финансированием терроризма и экстремизма',
                  side: 'В схеме не выявлен признак',
                },
                {
                  answer:
                    'Явное несоответствие договорной и рыночной стоимости предмета сделки',
                  side: 'В схеме выявлен признак',
                },
                {
                  answer:
                    'Предоставление финансового займа нерезиденту на срок свыше семисот двадцати дней без выплаты вознаграждения',
                  side: 'В схеме не выявлен признак',
                },
              ]}
              leftAnswer={'В схеме выявлен признак'}
              rightAnswer={'В схеме не выявлен признак'}
            />
          </Reveal>

          <Reveal>
            <HeaderWithLine headerColor={'#1F3C88'} lineColor={'#CADEFC'}>
              <>
                Далее разберем иные схемы ОД, а также совершение предикатных
                преступлений (в рамках которого предполагается получение
                незаконного дохода), для изучения посмотрите видео ниже.
              </>
            </HeaderWithLine>
          </Reveal>

          <Sizebox height={100} />
          <Reveal>
            <VideoWithTitleAndText
              url={'https://videos.sproutvideo.com/embed/d390d6b6181de2c25a/badb3fb0fb84d0a1'}
              title={'Мошенничество'}
              text={
                <>
                  Данное предикатное преступление является одним из наиболее
                  распространенных в Республике Казахстан. Схемы и способы их
                  реализации имеют множество разновидностей. В данном
                  видео-уроке мы рассмотрели лишь один пример из выявленных в
                  ходе тесного взаимодействия между участниками системы ПОД/ФТ.
                </>
              }
            />
          </Reveal>
          <Sizebox height={50} />
          <Reveal>
            <TextWithTitle
              title={'Описание схемы:'}
              text={[
                'Гражданином «А» реализована квартира через площадку объявлений по продаже недвижимости. Однако, на следующий день поступает звонок от неизвестных лиц с использованием подменного номера, представляясь сотрудниками банка.',
                <>
                  <span className="italic">
                    В процессе разговора мошенники сообщают о полученных
                    преступных денежных средствах от продажи недвижимости,
                    дополняя участием правоохранительных органов и об изъятии
                    данного дохода.
                  </span>
                </>,
                'В результате реализации мошеннических схем, гражданина «А» убеждают в размещении денежных средств на специальном банковском счете для их сохранности, представляя реквизиты на физического лица.',
                'Поверив мошенникам, гражданин «А» отправляет на 5 разных счетов полученные средства от продажи недвижимости на общую сумму 45 млн. тенге. После чего, номера телефонов мошенников «не доступен».',
                'Получив средства на банковский счет, мошенниками обналичиваются (в течении 20 минут после пополнения) в нескольких городах одновременно. ',
              ]}
            />
          </Reveal>

          <Sizebox height={50} />
          <Reveal>
            <Report_Warning>
              Преступниками в рамках легализации денежных средств приобретаются
              несколько автомашин и криптовалюты.
            </Report_Warning>
          </Reveal>
          <Sizebox height={100} />

          <Reveal>
            <Centered>
              <RandomParapraph>
                В рамках финансового мониторинга совместно с СФМ (БВУ) удалось
                идентифицировать преступную группу, за счет принятых мер
                надлежащей проверки клиента.
              </RandomParapraph>
            </Centered>
          </Reveal>

          <Sizebox height={50} />
          <Reveal>
            <Report_Warning>
              В результате, задержаны соучастники и организаторы преступной
              группы, в отношении которых возбуждено уголовные дела по
              мошенничеству и легализации доходов.
            </Report_Warning>
          </Reveal>
          <Sizebox height={100} />

          <Reveal>
            <HeaderWithLine headerColor={'#1F3C88'} lineColor={'#CADEFC'}>
              <>
                <span className="bold">Для закрепления</span> информации по
                выявлению схемы ОД от интернет-мошенничества, пожалуйста,
                расставьте карточки с{' '}
                <span className="bold">признаками подозрительной операции</span>
                (по соответствующим полям), определенных в данной схеме.
              </>
            </HeaderWithLine>
          </Reveal>

          <Sizebox height={100} />

          <DragAndDropTwoSide
            questions={[
              {
                answer:
                  'Поступление на счет клиента крупной суммы денег и последующее обналичивание полученных средств, при этом получатель имел незначительные обороты по операциям',
                side: 'В схеме выявлен признак',
              },
              {
                answer:
                  'Совершение клиентом систематических операций на крупную сумму с неликвидными ценными бумагами',
                side: 'В схеме не выявлен признак',
              },
              {
                answer:
                  'Явное несоответствие договорной и рыночной стоимости предмета сделки',
                side: 'В схеме не выявлен признак',
              },
              {
                answer:
                  'Зачисление на счет клиента и списание со счета примерно в одном и том же объеме денег',
                side: 'В схеме выявлен признак',
              },
            ]}
            leftAnswer={'В схеме выявлен признак'}
            rightAnswer={'В схеме не выявлен признак'}
          />

          <Sizebox height={100} />
          <Reveal>
            <HeaderWithLine headerColor={'#1F3C88'} lineColor={'#CADEFC'}>
              <>
                Рассмотрим следующую схему, связанная с незаконной
                предпринимательской деятельностью
              </>
            </HeaderWithLine>
          </Reveal>

          <Sizebox height={100} />
          <Reveal>
            <VideoWithTitleAndText
              url={'https://videos.sproutvideo.com/embed/4d90d6b61410e5c2c4/adfb28742845efe8'}
              title={'Схема незаконной предпринимательской деятельности'}
              text={
                <>
                  В рамках ст. 214 УК РК предусмотрена ответственность за
                  осуществление предпринимательской деятельности
                  <span className="bold">без регистрации</span>, а равно{' '}
                  <span className="bold">без обязательной</span>
                  для такой деятельности <span className="bold">лицензии</span>
                  либо с нарушением законодательства Республики Казахстан о
                  разрешениях и уведомлениях, а равно занятие запрещенными
                  видами предпринимательской деятельности, если эти деяния
                  причинили крупный ущерб гражданину, организации или
                  государству либо сопряжены с извлечением дохода в крупном
                  размере или производством, хранением, перевозкой либо сбытом
                  подакцизных товаров в значительных размерах.
                </>
              }
            />
          </Reveal>
          <Sizebox height={50} />
          <Reveal>
            <TextWithTitle
              title={'Описание подхода:'}
              text={[
                <>
                  В ходе финансового мониторинга проводимый{' '}
                  <span className="bold">на основании сообщения СФМ</span>,
                  установлена компания, в отношении которой переводились суммы{' '}
                  <span className="bold">
                    за реализацию дизельного топлива.
                  </span>
                </>,
              ]}
            />
          </Reveal>
          <Sizebox height={80} />

          <Reveal>
            <>
              <RandomH2>
                Критерии подозрительных операций выявленные СФМ
              </RandomH2>
              <Sizebox height={20} />
              <RandomParapraph>
                Проведенным анализом деятельности юридического лица, СФМ
                выявлены подозрительные факты, а именно:
              </RandomParapraph>
              <Sizebox height={20} />
              <NumberedDots
                dotsColor={'#CADEFC'}
                list={[
                  'оборот не отражен в налоговой отчетности;',
                  'не является производителем нефтепродуктов;',
                  'не имеет лицензию на розничную/оптовую реализацию нефтепродуктов;',
                  'не осуществлял экспорт/импорт нефтепродуктов.',
                ]}
              />
              <Sizebox height={20} />
              <RandomParapraph>
                В результате финансового мониторинга, СФМ представлена
                информация о подозрительной деятельности его клиента.
              </RandomParapraph>
            </>
          </Reveal>

          <Sizebox height={50} />
          <Reveal>
            <Report_Warning>
              Этому поспособствовала правильно выстроенная система управления
              рисками, на основе которой были применены усиленные меры
              надлежащей проверки, с последующим направлением СПО в АФМ.
            </Report_Warning>
          </Reveal>
          <Sizebox height={100} />

          <Reveal>
            <HeaderWithLine headerColor={'#1F3C88'} lineColor={'#CADEFC'}>
              Для отмывания преступных доходов используются различные приемы и
              способы, многие из которых основаны на самых современных
              технологиях.
            </HeaderWithLine>
          </Reveal>

          <Sizebox height={50} />
          <Reveal>
            <>
              <RandomH2>Приемы и способы ОД/ФТ</RandomH2>
              <Sizebox height={20} />
              <RandomParapraph>
                Большой выбор приемов и способов обеспечивает преступникам
                высокую скорость перемещения практически любых сумм денежных
                средств на значительные расстояния. Обобщение этих приемов и
                способов позволяет выделить определенные группы:
              </RandomParapraph>
              <Sizebox height={20} />
              <NumberedDots
                dotsColor={'#CADEFC'}
                list={[
                  'банковские операции с денежными средствами;',
                  'операции с цифровыми финансовыми активами (криптовалюта, токен);',
                  'операции в электронных платежных системах;',
                  'валютно-обменные операции;',
                  'сделки с векселями и иными ценными бумагами;',
                  'получение денежных средств по фиктивным выигрышам в играх, в том числе виртуальных, основанных на риске;',
                  'осуществление безналичных денежных переводов без открытия счета (например: Золотая Корона, ANELIK, BLIZKO, СONTACT, FASTER,  Migom, MoneyGram, UNIStream, (Лидер) Western Union, «Быстрая почта» и другие);',
                  'сделки с недвижимым и движимым имуществом (дорогостоящие автомобили, меха, драгоценные металлы, драгоценные камни и изделия из них);',
                  'умышленное занижение в документах реальной стоимости приобретаемого и завышение стоимости отчуждаемого имущества или имущественных прав лицом, отмывающим незаконный доход;',
                  'приобретение и отчуждение имущественных прав с использованием номинального (фиктивного) собственника, в том числе, перечисление наличных средств на счета подставных лиц с дроблением денежных сумм;',
                  'смешивание на счетах юридических лиц потоков легально и нелегально полученных денежных средств;',
                  'контрабанда наличных денег в национальной и иностранной валютах через границы Казахстана;',
                  'заключение фиктивных арендных договоров, контрактов на поставку несуществующих товаров и оказание услуг информационно-справочного характера и другие;',
                  'иные инструменты.',
                ]}
              />
              <Sizebox height={20} />
              <RandomParapraph>
                В результате финансового мониторинга, СФМ представлена
                информация о подозрительной деятельности его клиента.
              </RandomParapraph>
            </>
          </Reveal>

          <Sizebox height={100} />
          <Reveal>
            <HeaderWithLine headerColor={'#1F3C88'} lineColor={'#CADEFC'}>
              Вы изучили практические схемы легализации денег, предикатных
              преступлений, а также роль СФМ в национальной антиотмывочной
              системе.
            </HeaderWithLine>
          </Reveal>

          <Sizebox height={100} />
          <Reveal>
            <HeaderWithLine headerColor={'#1F3C88'} lineColor={'#CADEFC'}>
              Нажмите на <span className="bold">ссылку</span> ниже, чтобы
              перейти к <span className="bold">Личному кабинету СФМ</span>, для
              более детального изучения платформы{' '}
              <span className="italic">
                (полный доступ предоставляется только после прохождения
                регистрации)
              </span>
              .
            </HeaderWithLine>
          </Reveal>
          <Sizebox height={40} />
          <Reveal>
            <TextAndLink
              text={'Личный кабинет СФМ'}
              link={'https://websfm.kz/'}
            />
          </Reveal>

          <Sizebox height={100} />
          <Reveal>
            <HeaderWithLine headerColor={'#1F3C88'} lineColor={'#CADEFC'}>
              <>Перейдем к следующему блоку обучения</>
            </HeaderWithLine>
          </Reveal>
          <Sizebox height={50} />
          <Reveal>
            <NextLesson
              handleOnClick={() => {
                CheckCurrentChapter(id);
              }}
            />
          </Reveal>

          {/* ------------ */}
        </LessonPage>
      );
    case 64:
      return (
        <LessonPage
          name={'Финансирование терроризма'}
          lecturer={'AML Academy'}
        >
          <Reveal>
            <ImageWithText
              img={image65}
              color={'#FFFFFF'}
              imageText={'История, терроризм, финансирование терроризма'}
            />
          </Reveal>

          <Sizebox height={50} />

          <Reveal>
            <HeaderWithLine headerColor={'#1F3C88'}>
              <>
                Понимание того, что задача борьбы с терроризмом включает в себя
                <span className="bold">
                  {' '}
                  не только выявление и пресечение отдельных террористических
                  актов
                </span>
                , но и{' '}
                <span className="bold">
                  противодействие непосредственно самой террористической
                  деятельности
                </span>
                , где важную роль играет ее финансовая основа, привело к
                необходимости развития новых форм международного сотрудничества.
              </>
            </HeaderWithLine>
          </Reveal>

          <Sizebox height={80} />

          {/* <Centered>
                    <RandomParapraph >
                        <>
                            <span className="bold"></span>
                        </>
                    </RandomParapraph>
                </Centered> */}

          <Reveal>
            <TextWithTitle
              title={
                '1994 год - принята Декларация о мерах ликвидации международного терроризма.'
              }
              text={[
                'В соответствии с данным документам, всем странам было рекомендовано принять эффективные и решительные меры, по ликвидации терроризма, в частности, воздерживаться от организации террористической деятельности, подстрекательстве, содействия ее осуществления, финансирования, поощрения или проявления терпимости к ней и принимать надлежащие практические меры к обеспечению того, чтобы их территории не использовались для создания террористических баз или учебных лагерей или для подготовки или организации террористических актов, направленных против других государств или граждан. ',
              ]}
            />
          </Reveal>

          <Sizebox height={80} />

          <Reveal>
            <TextWithTitle
              title={
                '1999 год - в г. Нью-Йорк принята Международная конвенция о борьбе с финансированием терроризма.'
              }
              text={[
                'В рамках данного документа впервые были предприняты попытки раскрыть понятие преступления финансирования терроризма.',
                'Согласно данному документу, любое лицо совершает преступление, если оно любым способом и методом, прямо или косвенно, незаконно или умышленно, представляет средства или осуществляет их сбор с намерением, чтобы они использовались, или при осознании того, что они будут использованы полностью или частично для совершения какого-либо деяния, представляющего собой «террористическую деятельность».',
              ]}
            />
          </Reveal>

          <Sizebox height={40} />

          <Reveal>
            <Report_Warning>
              Более того, даже сама попытка финансирования терроризма
              рассматривается как преступление.
            </Report_Warning>
          </Reveal>

          <Sizebox height={80} />

          <Reveal>
            <TextWithTitle
              title={'2012 год - пересмотры 40+9 рекомендации ФАТФ.'}
              text={[
                'В результате пересмотра 40+9 рекомендации ФАТФ, финансирование терроризма также нашло свое отражение в данном документе, которое также было расшито в 2015 году и 2016 году, в части дополнения требований по криминализации деяний и уточнения состава преступления.',
              ]}
            />
          </Reveal>

          <Sizebox height={80} />

          <Reveal>
            <>
              <RandomParapraph>
                <>
                  ФАТФ выделил следующие
                  <span className="bold">источники доходов </span>
                  субъектов террористической деятельности:
                </>
              </RandomParapraph>
              <Sizebox height={20} />
              <NumberedDots
                dotsColor={'#CADEFC'}
                list={[
                  'Частные пожертвования;',
                  'Незаконное использование некоммерческих организаций;',
                  'Доход от преступной деятельности;',
                  'Вымогательство от местного населения, диаспор, предпринимателей;',
                  'Похищения в целях получения выкупа;',
                  'Законная предпринимательская деятельность;',
                  'Государственная поддержка терроризма.',
                ]}
              />
            </>
          </Reveal>

          <Sizebox height={40} />

          <Reveal>
            <Report_Warning>
              Финансирование терроризма тесно связано с отмыванием денег для
              сокрытия истинного источника происхождения средств вне зависимости
              от того, является ли происхождение данных средств законными или
              нет.
            </Report_Warning>
          </Reveal>

          <Sizebox height={100} />

          <Reveal>
            <ImageWithText
              img={image58}
              imageText={'Уголовная ответственность, ответственность, суд'}
              color={'#FFFFFF'}
            />
          </Reveal>
          <Sizebox height={80} />

          <Reveal>
            <RandomH2>Ответственность за ФТ</RandomH2>
            <Sizebox height={20} />
            <RandomParapraph>
              Наряду с преступлением отмывания преступных доходов, в статье 258
              Уголовного кодекса Республики Казахстан содержит определение
              понятия «финансирование террористической или экстремистской
              деятельности и иное пособничество терроризму либо экстремизму» -
              предоставление или сбор денег и (или) иного имущества, права на
              имущество или выгод имущественного характера, а также дарение,
              мена, пожертвования, благотворительная помощь, оказание
              информационных и иного рода услуг либо оказание финансовых услуг
              физическому лицу либо группе лиц, либо юридическому лицу,
              совершенные лицом, заведомо осознававшим террористический или
              экстремистский характер их деятельности либо то, что
              предоставленное имущество, оказанные информационные, финансовые и
              иного рода услуги будут использованы для осуществления
              террористической или экстремистской деятельности либо обеспечения
              террористической или экстремистской группы, террористической или
              экстремистской организации, незаконного военизированного
              формирования.
            </RandomParapraph>
          </Reveal>

          <Sizebox height={80} />

          <Reveal>
            <NumberedDots
              header={
                <>
                  <span className="bold">Уголовным кодексом</span>{' '}
                  предусматриваются следующие виды наказаний за ФТ:
                </>
              }
              dotsColor={'#CADEFC'}
              list={[
                'наказываются лишением свободы на срок от пяти до девяти лет с конфискацией имущества',
                'наказываются лишением свободы на срок от семи до двенадцати лет с конфискацией имущества, в случаях, если деяния, совершенные неоднократно или лицом с использованием своего служебного положения либо лицом, выполняющим управленческие функции в коммерческой или иной организации, либо лидером общественного объединения, либо группой лиц по предварительному сговору, либо в крупном размере.',
              ]}
            />
          </Reveal>

          <Sizebox height={80} />

          <Reveal>
            <RandomParapraph>
              Современный терроризм – сложное, многоаспектное и крайне
              негативное социально-политическое явление, превратившееся в
              масштабную угрозу для безопасности всего мирового сообщества.
            </RandomParapraph>
          </Reveal>

          <Sizebox height={40} />

          <Reveal>
            <Report_Warning>
              Степень опасности угроз террористических актов обусловливается
              уровнем совершенствования форм, методов, сил и средств
              террористической деятельности.
            </Report_Warning>
          </Reveal>

          <Sizebox height={80} />

          <Reveal>
            <NotNumberedDots
              header={<>Основные тенденции развития современного терроризма:</>}
              dotsColor={'#CADEFC'}
              list={[
                'Расширение географии терроризма в мире и его интернационализация;',
                'Влияние различных внутренних и внешних социальных, политических, экономических и иных факторов, способствующих возникновению и распространению терроризма;',
                'Усиление взаимосвязи терроризма и организованной преступности;',
                'Рост финансового и материально-технического обеспечения террористических структур;',
                'Разработка и совершенствование новых форм и методов терроризма, направленных на расширение масштабов последствий террористических акций;',
                'Использование субъектами терроризма международных некоммерческих организаций.',
              ]}
            />
          </Reveal>

          <Sizebox height={80} />

          <Reveal>
            <RandomParapraph>
              Несмотря на то, что мировое сообщество значительно продвинулись в
              борьбе с терроризмом, на сегодняшний день в стране, так и в мире
              по-прежнему сохраняются риски оказания финансовой поддержки
              террористической деятельности.
            </RandomParapraph>
          </Reveal>

          <Sizebox height={40} />

          <Reveal>
            <Report_Warning>
              За каждым террористическим актом стоит логистическая цепочка,
              которая может включать множество различных элементов, начиная от
              вербовки, сбора денежных средств и заканчивая предоставлением
              материалов.
            </Report_Warning>
          </Reveal>

          <Sizebox height={100} />
          <Reveal>
            <HeaderWithLine headerColor={'#1F3C88'} lineColor={'#CADEFC'}>
              <>Далее более подробнее рассмотрим пример ФТ</>
            </HeaderWithLine>
          </Reveal>

          <Sizebox height={100} />

          <Reveal>
            <ImageWithText
              img={image58}
              imageText={
                'Социальная сеть, некоммерческие организации, сбор средств'
              }
              color={'#FFFFFF'}
            />
          </Reveal>
          <Sizebox height={40} />
          <Reveal>
            <>
              <HeaderWithLine headerColor={'#1F3C88'} lineColor={'#CADEFC'}>
                <>Схемы ФТ</>
              </HeaderWithLine>
              <Sizebox height={40} />
              <VideoWithTitleAndText
                url={null}
                title={'Пример сбора денежных средств путем краудфандинга'}
                text={[
                  'Идею краудфандинга подхватили разные террористические организации, которые под видом НКО собирают денежные средства на «помощь бедствующим» по всему миру, где идут военные конфликты, а также на социальные необходимые проекты. Но на самом деле, денежные средства идут на вооружение, на пропаганду, вербовку и т.д.',
                  'Согласно данным правоохранительного органа выявлены факты перечисление денежных средств гражданами Республики Казахстан в пользу НКО.',
                ]}
              />
            </>
          </Reveal>

          <Sizebox height={80} />

          <Reveal>
            <TextWithTitle
              title={'Описание схемы:'}
              text={[
                'В рамках благотворительного фонда в социальных сетях открывается соответствующая группа и в нем создаются тематические проекты, направленные на оказание гуманитарной помощи в Сирию и Африку (выкопать колодцы, построить мечети, построить центры для сирот, построить исламские школы и оказать гуманитарную помощь).',
                <>
                  <span className="italic">
                    В обеих странах присутствует террористическая группировка, а
                    также место боевых столкновении.
                  </span>
                </>,
                'Основателем фонда является гражданин Российской Федерации, находящийся в международном розыске, радикальный проповедник, имеющий широкую популярность в Интернете.',
                'Модератором на территории Казахстана являлась гражданка Республики Казахстан, которая использовала для рекламы различные мессенджеры и социальные сети в так называемых благотворительных целях. Схема сбора денежных средств выглядит следующим образом.',
                'Фонд максимально интересуется пожертвованиями в денежном виде, в то время как к прямой гуманитарной помощи относится безразлично, что в принципе идет в разрез с идеей функционирования благотворительного фонда. В настоящее время основатель фонда объявлен в международный розыск за причастность к терроризму и финансированию МТО.',
              ]}
            />
          </Reveal>

          <Sizebox height={100} />
          <Reveal>
            <HeaderWithLine headerColor={'#1F3C88'} lineColor={'#CADEFC'}>
              <>
                Краудфандинг представляет собой значительную угрозу, поскольку
                не всегда понятно конечные целевое использование
                аккумулированных средств.
              </>
            </HeaderWithLine>
          </Reveal>

          <Sizebox height={40} />

          <Reveal>
            <Report_Warning>
              Данный пример является подтверждением одного из видов источника
              финансирования терроризма, более того предусмотрено масса примеров
              в типологиях утвержденные уполномоченным органом.
            </Report_Warning>
          </Reveal>

          <Sizebox height={100} />

          <Reveal>
            <HeaderWithLine headerColor={'#1F3C88'} lineColor={'#CADEFC'}>
              <>
                Вы завершили 9 урок данного Модуля. <br />
                Теперь мы перейдем к короткому тесту, чтобы проверить ваши
                знания по освоенному материалу.
              </>
            </HeaderWithLine>
          </Reveal>

          {/* <Sizebox height={50} />

                <Reveal>
                    <VideoWithTitleAndText
                        url={'https://videos.sproutvideo.com/embed/7990d0b51d1ae4c1f0/6e43cdd74851d083?playerColor=1f71a1'}
                        title={'Более подробнее об основных понятиях вы можете ознакомиться в представленном ниже видео'}
                        text={`В сфере ПОД/ФТ большое количество различных понятий и значений, однако в данном видео вы можете ознакомиться с понятиями и их функциональностью, которые часто встречаются при осуществлении СФМ финансового мониторинга.
`}/>
                </Reveal> */}

          <Sizebox height={50} />

          <Reveal>
            <NextLesson
              handleOnClick={() => {
                CheckCurrentChapter(id, 8);
              }}
            />
          </Reveal>
        </LessonPage>
      );
    case 8:
      return (
        <TestPage
          finished={modules[0].quiz.quiz_max_points === 100}
          name={'ТЕСТИРОВАНИЕ 1'}
          questions={modules[0].quiz.quizList || []}
          quizId={4}
          handleOpenModal={handleOpenFeedbackModal}
        ></TestPage>
      );
    case 65:
      return (
        <LessonPage
          name={
            'Группа разработки финансовых мер борьбы с отмыванием денег (ФАТФ)'
          }
          lecturer={'AML Academy'}
        >
          <Sizebox height={30} />
            <Reveal>
                <ImageLine img={image_1111}></ImageLine>
                <Sizebox height={50} />
            </Reveal>
            <HeaderWithLine headerColor={'#1F3C88'} lineColor={'#CADEFC'}>
                <>
                    В конце XX века мировые процессы, повлекшие глобализацию мировой системы, привели к тому, что <span class="bold">перед всеми государствами</span> была поставлена задача по обеспечению всеобщей <span class="bold">экономической безопасности,</span> которая определила необходимость <span class="bold">в создании</span> международной системы противодействия финансовой преступности.
                </>
            </HeaderWithLine>
            <Reveal>
                <Sizebox height={40} />
                <VideoWithTitleAndText
                    url={null}
                    title={'История возникновения финансового мониторинга'}
                    text={[
                        'Возникновение финансового мониторинга связывают с Рекомендацией (80) 101 Совета Европы от 27 июня 1980 года, в которой речь идет о вероятности использования банковской системы в предотвращении отмывания денег, что могло бы способствовать борьбе правоохранительных органов с преступной деятельностью такого рода, и создание в том же году Оффшорной группы банковских надзоров.\n' +
                        'Зарождение финансового мониторинга связывают с проблемой отмывания преступных доходов от наркобизнеса, о чем свидетельствует факт, что большинство авторов первым официальным документом в сфере противодействия отмыванию преступных доходов называют Венскую конвенцию ООН «О борьбе против незаконного оборота наркотических средств и психотропных веществ», принятую 20 декабря 1988 года.\n',
                    ]}
                />
            </Reveal>
            <Reveal>
                <Sizebox height={80} />
                <VideoWithTitleAndText
                    url={null}
                    title={'Что такое Оффшорная группа банковских надзоров?'}
                    text={[
                        'Оффшорная группа банковского надзора (ОГБН) — это ассоциация государственных органов банковского надзора стран, на территории которых действуют оффшорные финансовые центры, созданная в октябре 1980 года по инициативе Базельского комитета по банковскому надзору.\n' +
                        'Основные цели деятельности ОГБН:\n' +
                        '– сотрудничество в разработке и реализации международных стандартов банковского надзора;\n' +
                        '– проведение взаимных оценок работы банковских регуляторов государств – членов группы;\n' +
                        '– международное сотрудничество в борьбе с легализацией доходов, полученных преступным путем, и финансированием терроризма, в частности в сфере совершенствования соответствующих международных стандартов.\n' +
                        'Группа является наблюдателем при ФАТФ, тесно взаимодействует с Базельским комитетом по банковскому надзору и играет активную роль в создании соответствующих международных стандартов.\n' +
                        'В настоящее время участниками группы являются органы банковского надзора 19 государств, наблюдатели в составе группы на сегодняшний день отсутствуют.\n',
                    ]}
                />
            </Reveal>
            <Reveal>
                <Sizebox height={40} />
                <Report_Information>
                    Участники Оффшорной группы банковских надзоров – органы банковского надзора следующих 19 государств Арубы, Багамских Островов, Барбадоса, Бермудских Островов, Британских Виргинских Островов, Каймановых Островов, Островов Кука, Гибралтара, Гернси, Острова Мэн, Джерси, Лабуана, Макао, Маврикия, Кюрасао и Синт-Мартена, Панамы, Самоа, Вануату
                </Report_Information>
            </Reveal>
            <Sizebox height={40} />
            <Reveal>
            <ImageWithText img={image59} color={'#FFFFFF'}>
              <>
                <h2 style={{ color: '#FFFFFF', marginTop: 0, marginBottom: 0 }}>
                  В 1989 году по решению стран «Большой семерки» была создана
                  Группа разработки финансовых мер борьбы с отмыванием денег
                  (ФАТФ) (Financial Action Task Force on Money Laundering –
                  FATF)
                </h2>
                <Sizebox height={17} />
                <h3>
                  – межправительственная организация, которая занимается{' '}
                  <span class="bold">
                    выработкой мировых стандартов в сфере ПОД/ФТ
                  </span>{' '}
                  , а также осуществляет оценки соответствия национальных систем
                  ПОД/ФТ этим стандартам.
                </h3>
              </>
            </ImageWithText>
          </Reveal>
          <Sizebox height={50} />

          <Reveal>
            <Report_Warning>
              Большая Семерка (G7) неформальный международный клуб, объединяющий
              Великобританию, Германию, Италию, Канаду, Францию, Японию и США.
            </Report_Warning>
          </Reveal>
          <Sizebox height={50} />

          <Reveal>
            <RandomParapraph>
              <>
                ФАТФ является основным международным институтом, занимающимся{' '}
                <span className="bold">разработкой</span> и{' '}
                <span className="bold">внедрением</span> международных
                стандартов в сфере ПОД/ФТ. В настоящее время{' '}
                <span className="bold">членами ФАТФ</span> являются 37 стран и 2
                международные организации,
                <span className="bold"> наблюдателями</span> – 25 организаций и
                1 государство (Индонезия).
              </>
            </RandomParapraph>
          </Reveal>
          <Sizebox height={15} />

          <Reveal>
            <RandomParapraph>
              <>
                Основным <span class="bold">инструментом</span> ФАТФ{' '}
                <span class="bold">в реализации</span> своего{' '}
                <span class="bold">мандата</span> являются{' '}
                <span class="bold">40 рекомендаций</span> в сфере ПОД/ФТ/ФРОМУ,
                которые подвергаются <span class="bold">ревизии</span> в среднем{' '}
                <span class="bold">один раз</span> в пять лет.
              </>
            </RandomParapraph>
          </Reveal>
          <Sizebox height={100} />

          <Reveal>
            <>
              <HeaderWithLine headerColor={'#1F3C88'} lineColor={'#CADEFC'}>
                ФАТФ уделяет значительное внимание сотрудничеству с такими
                международными организациями, как МВФ, Всемирный банк,
                Управление ООН по наркотикам и преступности.
              </HeaderWithLine>
            </>
          </Reveal>

          <Sizebox height={100} />
          <Reveal>
            <HeaderWithLine headerColor={'#1F3C88'} lineColor={'#CADEFC'}>
              Основным{' '}
              <span className="bold">инструментом принятия решений</span>
              ФАТФ является <span className="bold">Пленарное заседание</span>,
              которое собирается три раза в год, а также рабочие группы ФАТФ по:
            </HeaderWithLine>
            <Sizebox height={40} />
            <TODO text={'SWOT'} />
          </Reveal>

          <Sizebox height={100} />
          <Reveal>
            <HeaderWithLine headerColor={'#1F3C88'} lineColor={'#CADEFC'}>
              ФАТФ уделяет значительное внимание сотрудничеству с такими
              международными организациями, как МВФ, Всемирный банк, Управление
              ООН по наркотикам и преступности.
            </HeaderWithLine>
          </Reveal>

          <Sizebox height={50} />
          <Reveal>
            <Report_Warning>
              <>
                <p>
                  Данные структуры реализуют свои программы, нацеленные на
                  противодействие отмыванию денег и финансированию терроризма.
                  Одним из основных инструментов реализации рекомендаций ФАТФ на
                  национальном уровне являются{' '}
                  <span className="bold">
                    Подразделения финансовой разведки (ПФР)
                  </span>
                  , отвечающие за сбор и анализ финансовой информации в пределах
                  каждой конкретной страны с целью выявления потоков финансовых
                  средств, добытых незаконным путём.
                </p>
                <p>
                  Документы ФАТФ, в особенности 40 Рекомендаций, представляют
                  собой всеобъемлющий свод организационно-правовых мер по
                  созданию в каждой стране эффективного режима ПОД/ФТ.
                </p>
                <p>
                  Рекомендации ФАТФ не дублируют и не подменяют соответствующие
                  положения иных международных актов, а при необходимости,
                  дополняя их, сводят в единую систему организационных принципов
                  и правовых норм, играя при этом важную роль в процессе
                  кодификации норм и правил в сфере ПОД/ФТ.
                </p>
              </>
            </Report_Warning>
          </Reveal>

          <Sizebox height={50} />
          <Reveal>
            <Report_Information>
              <>
                <p>
                  В соответствии с Резолюцией СБ ООН № 1617 (2005), 40{' '}
                  <span className="bold">Рекомендаций ФАТФ</span> являются
                  обязательными международными стандартами{' '}
                  <span className="bold">
                    для выполнения государствами – членами{' '}
                    <span className="red">ООН+</span>.
                  </span>
                </p>
                <p className="italic">
                  международная организация, созданная для поддержания и
                  укрепления международного мира и безопасности, а также
                  развития сотрудничества между государствами
                </p>
              </>
            </Report_Information>
          </Reveal>
          <Sizebox height={50} />

          <Reveal>
            <ImageWithText img={image60} color={'white'}>
              <>
                <h3>
                  ООН была образована 24 октября 1945 года. С 2011 года членами
                  ООН являются 193 страны, в том числе и{' '}
                  <span className="bold">Казахстан со 2 марта 1992 года</span>,
                  наряду с такими странами как Азербайджан, Армения, Киргизия,
                  Таджикистан, Туркмения и Узбекистан.
                </h3>
              </>
            </ImageWithText>
          </Reveal>

          <Sizebox height={100} />
          <Reveal>
            <HeaderWithLine headerColor={'#1F3C88'} lineColor={'#CADEFC'}>
              <>Перейдем к следующему блоку обучения</>
            </HeaderWithLine>
          </Reveal>
          <Sizebox height={50} />
          <NextLesson
            handleOnClick={() => {
              CheckCurrentChapter(id);
            }}
          />
        </LessonPage>
      );
    case 66:
      return (
        <LessonPage
          name={'Региональные группы по типу ФАТФ'}
          lecturer={'AML Academy'}
        >
          <Sizebox height={30} />
          <Reveal>
            <HeaderWithLine headerColor={'#1F3C88'} lineColor={'#CADEFC'}>
              <>
                Для глобального распространения Рекомендаций ФАТФ{' '}
                <span class="bold">созданы</span> девять{' '}
                <span class="bold">региональных групп</span> по типу ФАТФ
                (РГТФ).
              </>
            </HeaderWithLine>
          </Reveal>
          <Sizebox height={40} />

          <Reveal>
            <Report_Warning>
              <span class="bold">Основная задача</span> РГТФ – построение систем
              ПОД/ФТ/ФРОМУ в соответствующих регионах.
            </Report_Warning>
          </Reveal>
          <Sizebox height={50} />

          <Reveal>
            <TextWithTitle
              title={
                'РГТФ проводят оценки систем ПОД/ФТ государств-членов и вырабатывают рекомендации по их совершенствованию.'
              }
              text={[
                <>
                  Региональные группы также занимаются{' '}
                  <span className="bold">исследованием типологий0</span> –
                  наиболее распространенных схем ОД/ФТ/ФРОМУ. По итогам
                  типологических исследований лучшие практики распространяются
                  среди частного сектора, надзорных и регулирующих органов,
                  правоохранительных структур и научно-экспертного сообщества
                </>,
                'Некоторые РГТФ координируют с донорами оказание технического содействия своим государствам-членам.',
                'В состав РГТФ входят:',
              ]}
            />
          </Reveal>

          <Sizebox height={40} />
          <Reveal>
            <NumberedDots
              dotsColor={'#CADEFC'}
              list={[
                'Азиатско-Тихоокеанская группа по борьбе с отмыванием денег (АТГ);',
                'Группа по борьбе с отмыванием денег в Восточной и Южной Африке (ЕСААМЛГ);',
                'Группа по борьбе с отмыванием денег в Центральной Африке (ГАБАК);',
                'Группа разработки финансовых мер борьбы с отмыванием денег в Южной Америке (ГАФИЛАТ);',
                'Группа разработки финансовых мер борьбы с отмыванием денег на Ближнем Востоке и в Северной Африке (МЕНАФАТФ);',
                'Евразийская группа (ЕАГ);',
                'Карибская группа разработки финансовых мер борьбы с отмыванием денег (КФАТФ);',
                'Комитет экспертов Совета Европы по оценке мер борьбы с отмыванием денег и финансированием терроризма (МАНИВЭЛ);',
                'Межправительственная группа по борьбе с отмыванием денег в Западной Африке (ГИАБА);',
                'Сходные с РГТФ функции имеет Группа надзорных органов международных финансовых центров (ГНМФЦ, бывш. Офшорная группа банковского надзора);',
              ]}
            />
          </Reveal>

          <Sizebox height={100} />
          <Reveal>
            <HeaderWithLine headerColor={'#1F3C88'} lineColor={'#CADEFC'}>
              <>Перейдем к следующему блоку обучения</>
            </HeaderWithLine>
          </Reveal>
          <Sizebox height={50} />
          <NextLesson
            handleOnClick={() => {
              CheckCurrentChapter(id);
            }}
          />
        </LessonPage>
      );
    case 67:
      return (
        <LessonPage name={'Рекомендации ФАТФ'} lecturer={'AML Academy'}>
          <Reveal>
            <ImageWithText img={image61} color={'#fff'}>
              <>
                <h3>
                  ООН была образована 24 октября 1945 года. С 2011 года членами
                  ООН являются 193 страны, в том числе и Казахстан со 2 марта
                  1992 года, наряду с такими странами как Азербайджан, Армения,
                  Киргизия, Таджикистан, Туркмения и Узбекистан.
                </h3>
              </>
            </ImageWithText>
          </Reveal>
            <Reveal>
                <Sizebox height={80} />
                <VideoWithTitleAndText
                    url={null}
                    title={'Рекомендации ФАТФ устанавливают комплексную и последовательную структуру мер, которые странам следует применять для ПОД/ФТ/ФРОМУ. Страны имеют различные правовые, административные и оперативные структуры и различные финансовые системы, в связи с чем они не могут принимать идентичные меры по противодействию этим угрозам. Поэтому странам следует адаптировать к своим конкретным условиям Рекомендации ФАТФ.'}
                    text={[
                        'Рекомендации устанавливают необходимые меры, которые странам следует иметь для того, чтобы:\n' +
                        'определять риски, разрабатывать политику и осуществлять координацию внутри страны; \n' +
                        'преследовать ОД/ФТ/ФРОМУ; \n' +
                        'применять превентивные меры для финансового сектора и других установленных секторов; \n' +
                        'устанавливать полномочия и ответственность компетентных органов (например, следственных, правоохранительных и надзорных органов) и иные институциональные меры; \n' +
                        'укреплять прозрачность и доступность информации о бенефициарной собственности юридических лиц и образований; \n' +
                        'обеспечивать международное сотрудничество.\n',
                    ]}
                />
            </Reveal>
          <Sizebox height={30} />
          <Reveal>
            <TextWithTitle
              title={
                'Рекомендации ФАТФ устанавливают комплексную и последовательную структуру мер, которые странам следует применять для ПОД/ФТ/ФРОМУ.'
              }
              text={[
                <>
                  Страны имеют различные правовые, административные и
                  оперативные структуры и различные финансовые системы, в связи
                  с чем они не могут принимать идентичные меры по
                  противодействию этим угрозам. Поэтому{' '}
                  <span className="bold">странам следует адаптировать</span> к
                  своим конкретным условиям{' '}
                  <span className="bold">Рекомендации ФАТФ.</span>
                </>,
                <>
                  <span className="bold">Рекомендации устанавливают</span>{' '}
                  необходимые <span className="bold">меры</span>, которые
                  странам следует иметь для того, чтобы:
                </>,
              ]}
            />
          </Reveal>
          <Sizebox height={40} />
          <Reveal>
            <NotNumberedDots
              dotsColor={'#CADEFC'}
              list={[
                'определять риски, разрабатывать политику и осуществлять координацию внутри страны;',
                'преследовать ОД/ФТ/ФРОМУ;',
                'применять превентивные меры для финансового сектора и других установленных секторов;',
                'устанавливать полномочия и ответственность компетентных органов (например, следственных, правоохранительных и надзорных органов) и иные институциональные меры;',
                'укреплять прозрачность и доступность информации о бенефициарной собственности юридических лиц и образований;',
                'обеспечивать международное сотрудничество;',
              ]}
            />
          </Reveal>

          <Sizebox height={50} />

          <Reveal>
            <FileDownloader
              file={null}
              fileName={'Рекомендации ФАТФ (для скачивания)'}
            />
          </Reveal>

          <Sizebox height={100} />

          <Reveal>
            <Report_Warning>
              <>
                Рекомендации ФАТФ были{' '}
                <span className="bold">имплементированы</span> в нормативных
                правовых актах Республики Казахстан
              </>
            </Report_Warning>
          </Reveal>
          <Sizebox height={100} />

          <Reveal>
            <>
              <Centered>
                <RandomH2>Рекомендации ФАТФ</RandomH2>
              </Centered>
              <Sizebox height={20} />
              <DropdownGlossaryList
                headerTextColor={'#170F49'}
                activeHeaderTextColor={'#1F3C88'}
                textColor={'#6F6C90'}
                tabsTextColor={'#3A3939'}
                tabsBackgroundColor={'#BAD6FF'}
                list={[
                  {
                    title: 'Разработаны в 1990 году',
                    description:
                      'как инициатива по защите финансовых систем от лиц, отмывающих денежные средства, вырученные от продажи наркотиков',
                  },
                  {
                    title: 'Пересмотрены в 1996 году',
                    description:
                      'в первый раз с учетом развивающихся тенденций и способов ОД и расширения сферы их применения за пределы отмывания выручки от продажи наркотиков',
                  },
                  {
                    title: 'В 2001 году расширен мандат',
                    description:
                      'включены проблемы финансирования террористических актов и террористических организаций',
                  },
                  {
                    title: 'Пересмотрены в 2003 году',
                    description:
                      'во второй раз и признаны более чем 180 странами и являются международным стандартом по ПОД/ФТ',
                  },
                ]}
              />
            </>
          </Reveal>

          <Sizebox height={100} />

          <Reveal>
            <>
              <TextWithTitle
                title={'Рекомендации ФАТФ подразделяются на основные группы'}
              />
              <Sizebox height={20} />
              <NotNumberedDots
                dotsColor={'#CADEFC'}
                list={[
                  'Политика ПОД/ФТ и координация;',
                  'Отмывание денег и конфискация;',
                  'Финансирование терроризма и распространения ОМУ;',
                  'Превентивные меры;',
                  'Прозрачность и бенефициарная собственность юридических лиц и образований;',
                  'Полномочия и ответственность компетентных органов и иные институциональные меры;',
                  'Международное сотрудничество;',
                ]}
              />
            </>
          </Reveal>

          <Sizebox height={100} />
          <Reveal>
            <HeaderWithLine headerColor={'#1F3C88'} lineColor={'#CADEFC'}>
              <>
                <span class="bold">Для оценки</span> соответствия стран
                Рекомендациям{' '}
                <span class="bold">ФАТФ предусмотрел Методологию</span> оценки
                технического соответствия Рекомендациям ФАТФ и эффективности
                системы ПОД/ФТ.
              </>
            </HeaderWithLine>
          </Reveal>
          <Sizebox height={100} />

          <Reveal>
            <DataChain
              data={[
                {
                  title: 'Техническое соответствие',
                  description:
                    'Предусматривает выполнение конкретных требований Рекомендаций ФАТФ, включая систему законов и обязательных для исполнения мер; а также наличие, полномочия и процедуры компетентных органов.',
                },
                {
                  title: 'Эффективность ',
                  description:
                    'Результативность принятых законов и других нормативных правовых актов, которые демонстрируют эффективность этих принятых нормативных документов.',
                },
              ]}
            />
          </Reveal>

          <Sizebox height={100} />
          <Reveal>
            <Report_Warning>
              По каждой Рекомендации эксперты должны вынести заключение о
              степени соответствия (или несоответствия) страны стандарту.
            </Report_Warning>
          </Reveal>
          <Sizebox height={50} />

          <Reveal>
            <>
              <Centered>
                <RandomH2>
                  Существует четыре возможных уровня соответствия:
                </RandomH2>
              </Centered>
              <Sizebox height={20} />
              <DropdownGlossaryList
                headerTextColor={'#170F49'}
                activeHeaderTextColor={'#1F3C88'}
                textColor={'#6F6C90'}
                tabsTextColor={'#3A3939'}
                tabsBackgroundColor={'#BAD6FF'}
                list={[
                  {
                    title: 'СООТВЕТСТВИЕ',
                    description: (
                      <>
                        в случае{' '}
                        <span className="bold">отсутствия недостатков</span>
                      </>
                    ),
                  },
                  {
                    title: 'ЗНАЧИТЕЛЬНОЕ СООТВЕТСТВИЕ',
                    description: (
                      <>
                        при наличии{' '}
                        <span className="bold">незначительных недостатков</span>
                      </>
                    ),
                  },
                  {
                    title: 'ЧАСТИЧНОЕ СООТВЕТСТВИЕ',
                    description: (
                      <>
                        при наличии{' '}
                        <span className="bold">умеренных недостатков</span>
                      </>
                    ),
                  },
                  {
                    title: 'НЕ СООТВЕТСТВИЕ',
                    description: (
                      <>
                        при наличии{' '}
                        <span className="bold">серьезных недостатков</span>
                      </>
                    ),
                  },
                  {
                    title: 'НЕ ПРИМЕНИМО',
                    description: (
                      <>
                        требование <span className="bold">не применимо</span>{' '}
                        из-за структурных, правовых или институциональных
                        особенностей страны
                      </>
                    ),
                  },
                ]}
              />
            </>
          </Reveal>

          <Sizebox height={100} />

          <Reveal>
            <HeaderWithLine headerColor={'#1F3C88'} lineColor={'#CADEFC'}>
              <>
                <p>
                  <span class="bold">Рекомендации ФАТФ</span> оцениваются в виде{' '}
                  <span class="bold">непосредственных результатов</span> – свод
                  Рекомендаций, объединенные в «группировки» по тематике
                  оцениваемого участка, для более глубоко анализа и оценки.
                </p>
                <p>Таким образом, 40 Рекомендаций ФАТФ объединены в 11 НРов.</p>
                <p>
                  При этом, Рекомендации, входящие в состав одного НР может быть
                  и в составе других.
                </p>
              </>
            </HeaderWithLine>
          </Reveal>
          <Sizebox height={80} />

          <Reveal>
            <SimpleTable
              data={[
                [
                  'НР1\n Р.1, Р.2, Р.33, Р.34',
                  'Оценка рисков, координация и определение политики',
                ],
                ['НР2\n Р.36–40', 'Международное сотрудничество'],
                ['НР3\n Р.26–28, 34, 35', 'Надзор'],
                ['НР4\n Р.9–23', 'Превентивные меры'],
                [
                  'НР5\n Р.24, 25',
                  'Прозрачность и бенефициарная собственность',
                ],
                [
                  'НР6, НР7, НР8\n Р. 1, 3, 4, 29–32',
                  'Финансовая разведка, расследования ОД, судебные преследования и конфискация',
                ],
                ['НР9, НР10, НР11\n Р. 1, 4, 5–8, 30, 31, 39', 'ФТ и ФРОМУ'],
              ]}
              columns={[
                'НР и Рекомендации входящие в состав',
                'Оцениваемая область',
              ]}
            />
          </Reveal>

          <Sizebox height={100} />

          <Reveal>
            <HeaderWithLine headerColor={'#3A3939'} lineColor={'#CADEFC'}>
              <>Перейдем к следующему блоку обучения</>
            </HeaderWithLine>
          </Reveal>

          <Sizebox height={50} />

          <Reveal>
            <NextLesson
              handleOnClick={() => {
                CheckCurrentChapter(id);
              }}
            />
          </Reveal>
        </LessonPage>
      );
    case 68:
      return (
        <LessonPage
          name={'Непосредственный результат 4 «Превентивные меры»'}
          lecturer={'AML Academy'}
        >
          <Sizebox height={60} />

          <Reveal>
            <TextWithTitle
              title={
                'Для соответствия НР4 субъектам необходимо должным образом применять превентивные меры в сфере ПОД/ФТ, в соответствии с их рисками и сообщать об СПО.\n'
              }
            />
          </Reveal>
          <Sizebox height={20} />
          <Reveal>
            <TextWithTitle text={['Субъектам также необходимо:']} />
          </Reveal>
          <Sizebox height={40} />
          <Reveal>
            <NumberedDots
              dotsColor={'#CADEFC'}
              list={[
                'понимать характер и уровень своих рисков ОД/ФТ;',
                'разработать и применять политику в сфере ПОД/ФТ (включая групповую политику), меры внутреннего контроля и программы для адекватного снижения этих рисков;',
                'применение соответствующих мер НПК для идентификации и проверки своих клиентов (включая БС);',
                'осуществлять текущий мониторинг;',
                'должным образом выявлять ПО и сообщать о них;',
                'выполнять иные требования по ПОД/ФТ;',
              ]}
            />
          </Reveal>
            <Reveal>
                <Sizebox height={80} />
                <VideoWithTitleAndText
                    url={null}
                    title={'Страны также должны предоставить информацию, касающуюся эффективности, в том числе какие меры приняты для решения каждого ключевого вопроса по каждому из 11 НР.'}
                    text={[
                        'Для стран важно предоставить полное и точное описание (включая примеры информации, данных и других факторов), которое поможет продемонстрировать эффективность режима ПОД/ФТ.',
                    ]}
                />
            </Reveal>
          <Sizebox height={100} />

          <Reveal>
            <HeaderWithLine headerColor={'#3A3939'} lineColor={'#CADEFC'}>
              <>Перейдем к следующему блоку обучения</>
            </HeaderWithLine>
          </Reveal>

          <Sizebox height={50} />

          <Reveal>
            <NextLesson
              handleOnClick={() => {
                CheckCurrentChapter(id);
              }}
            />
          </Reveal>
        </LessonPage>
      );
    case 69:
      return (
        <LessonPage name={'Отчет о Взаимной оценке'} lecturer={'AML Academy'}>
          <Sizebox height={30} />

          <Reveal>
            <ImageLine img={image62}></ImageLine>
          </Reveal>
          <Sizebox height={60} />

          <Reveal>
            <TextWithTitle
              title={
                'Взаимные оценки проводятся РГТФ в рамках которых национальные системы ПОД/ФТ государств-участников проверяются на соответствие международным стандартам'
              }
              text={[
                <>
                  <span className="bold">Под взаимностью</span> подразумевается,
                  что представители всех государств-членов РГТФ оценивают другие
                  государства-члены по очереди в соответствии с графиком оценок.
                </>,
                'Взаимные оценки проводят МВФ, Всемирный банк и ФАТФ.',
              ]}
            />
          </Reveal>

          <Sizebox height={80} />
          <Reveal>
            <Report_Warning>
              <>
                График взаимных оценок ЕАГ размещается на официальном интернет
                ресурсе ЕАГ
                <a href="https://eurasiangroup.org/ru/general-information">
                  https://eurasiangroup.org/ru/general-information
                </a>
              </>
            </Report_Warning>
          </Reveal>
          <Sizebox height={80} />

          <Reveal>
            <RandomParapraph>
              В рамках взаимной оценки{' '}
              <span className="bold">эксперты-оценщики</span>
              проводят работу по документарному{' '}
              <span className="bold">
                анализу технического соответствия
              </span>{' '}
              (ТС), используя необходимые данные и сведения (справочную
              информацию об институциональной базе, рисках и контексте, а также
              информацию о мерах, принятых для выполнения критериев по каждой
              Рекомендации); предоставленные оцениваемой страной и полученные из
              других надёжных источников (например, отчёты других международных
              организаций). Для предоставления соответствующей и актуальной
              информации группе экспертов-оценщиков оцениваемая страна должна
              использовать стандартную форму анкеты-вопросника по вопросам
              технического соответствия.
            </RandomParapraph>
          </Reveal>
          <Sizebox height={15} />
          <Reveal>
            <RandomParapraph>
              Вся эта процедура повторяется периодичностью{' '}
              <span className="bold">раз в три года</span>.
            </RandomParapraph>
          </Reveal>
          <Sizebox height={15} />
          <Reveal>
            <RandomParapraph>
              В соответствии с требованиями Методологии ФАТФ при проведении
              анализа эксперты-оценщики должны учитывать только те законы,
              нормативные акты или другие меры ПОД/ФТ, которые{' '}
              <span className="bold">
                действуют на момент проведения выездной миссии, или которые
                вступят в силу до окончания выездной миссии
              </span>
              . Если имеются соответствующие законопроекты или иные чёткие
              предложения по изменению системы ПОД/ФТ, они должны быть указаны в
              отчёте о взаимной оценке (в том числе в целях проведения анализа и
              выработки рекомендаций для оцениваемой страны), но{' '}
              <span className="bold">
                не должны учитываться при определении рейтингов
              </span>
              , если только они не вступят в силу до окончания выездной миссии.
            </RandomParapraph>
          </Reveal>
          <Sizebox height={15} />
          <Reveal>
            <RandomParapraph>
              Страны также должны предоставить информацию, касающуюся
              эффективности. Они должны предоставить подробные сведения о том,
              какие меры приняты для решения каждого ключевого вопроса по
              каждому из 11 НР. Для стран важно предоставить полное и точное
              описание (включая примеры информации, данных и других факторов),
              которое поможет продемонстрировать эффективность режима ПОД/ФТ.
            </RandomParapraph>
          </Reveal>
          <Sizebox height={15} />
          <Reveal>
            <RandomParapraph>
              Стоит отметить, при координации Комитета по финансовому
              мониторингу Министерства финансов Республики Казахстан система
              ПОД/ФТ успешно прошла{' '}
              <span className="bold">первую взаимную оценку ЕАГ</span> (2011
              год).
            </RandomParapraph>
          </Reveal>
          <Sizebox height={15} />
          <Reveal>
            <RandomParapraph>
              Реализация основополагающих норм резолюций Совбеза ООН и
              стандартов ФАТФ в части деятельности подразделения финансовой
              разведки, полномочий и обязанностей правоохранительных органов,
              международного сотрудничества и оказания взаимной правовой помощи
              и экстрадиции, а также вопросов обеспечения мер конфискации
              позволила Казахстану получить рейтинги «значительно соответствует»
              и «частично соответствует» по 24 из 40 рекомендаций ФАТФ.
            </RandomParapraph>
          </Reveal>
          <Sizebox height={15} />

          <Sizebox height={80} />
          <Reveal>
            <TextWithTitle
              title={
                'По итогам взаимной оценки к Казахстану применена процедура «стандартный мониторинг» – механизм мониторинга, применяемый для всех государств-членов ЕАГ, не имеющих существенных недостатков в техническом соответствии рекомендациям ФАТФ и системы ПОД/ФТ.'
              }
              text={[
                'Выработанные экспертами ЕАГ рекомендации по итогам взаимной оценки легли в основу мер по совершенствованию национальной системы ПОД/ФТ.',
                'В целях выработки мер по реализации государственной политики в сфере ПОД/ФТ, повышения их эффективности, а также координации мер, направленных на снижение рисков легализации (отмывания) доходов и финансирования терроризма, создан Межведомственный совет по вопросам предупреждения легализации (отмывания) доходов, полученных преступным путем, и финансирования терроризма.',
                'В национальное законодательство о ПОД/ФТ внесены концептуальные поправки:',
              ]}
            />
          </Reveal>

          <Sizebox height={40} />
          <Reveal>
            <NotNumberedDots
              dotsColor={'#CADEFC'}
              list={[
                <>
                  <span className="bold">
                    определен государственный орган-регулятор для четырех видов
                    субъектов финансового мониторинга
                  </span>{' '}
                  (риелторы, юристы, лизинга, бухгалтерские организации и
                  профессиональные бухгалтеры);
                </>,
                'усилена ответственность всех субъектов финансового мониторинга за несоблюдение требований Закона о ПОД/ФТ;',
                'определен государственный орган, ответственный за учет и использование конфискованного имущества, и образование фонда такого имущества;',
                'усилено международное сотрудничество в части обмена информацией в сфере ПОД/ФТ между органами финансового контроля и правоохранительными органами с иностранными компетентными органами;',
                <span className="bold">
                  операции публичных должностных лиц стали подлежать финансовому
                  мониторингу;
                </span>,
              ]}
            />
          </Reveal>
          <Sizebox height={100} />

          <Reveal>
            <HeaderWithLine headerColor={'#3A3939'} lineColor={'#CADEFC'}>
              <>Перейдем к следующему блоку обучения</>
            </HeaderWithLine>
          </Reveal>

          <Sizebox height={50} />

          <NextLesson
            handleOnClick={() => {
              CheckCurrentChapter(id);
            }}
          />
        </LessonPage>
      );
    case 70:
      return (
        <LessonPage
          name={'Национальная оценка рисков'}
          lecturer={'AML Academy'}
        >
          <Sizebox height={30} />
            <Reveal>
                <Sizebox height={80} />
                <VideoWithTitleAndText
                    url={null}
                    title={'АФМ является координатором процесса проведения Национальной оценки рисков и подготовки Республики Казахстан к взаимной оценке.'}
                    text={[
                        'В целях выработки мер по реализации государственной политики в сфере ПОД/ФТ/ФРОМУ, повышения их эффективности, а также координации мер, направленных на снижение рисков ОД/ФТ, образован МВС+ (Межведомственный совет) по вопросам предупреждения ПОД/ФТ/ФРОМУ.\n' +
                        'Работа в рамках проведения оценки координируется МВС в сфере ПОД/ФТ, а также специально созданной рабочей группой+ (в состав рабочей группы входят представители всех государственных, правоохранительных и специальных государственных органов) по оценке рисков и взаимной оценке.\n' +
                        'МВС рассматривает и одобряет отчет об оценке рисков, а Правительство Республики Казахстан утверждает меры, направленные на снижение рисков ОД/ФТ.',
                    ]}
                />
            </Reveal>
            <Sizebox height={30} />
            <Reveal>
            <HeaderWithLine headerColor={'#1F3C88'} lineColor={'#CADEFC'}>
              <>
                <span class="bold">АФМ</span> является координатором процесса
                проведения Национальной оценки рисков и подготовки Республики
                Казахстан к взаимной оценке.
              </>
            </HeaderWithLine>
          </Reveal>
          <Sizebox height={30} />

          <Reveal>
            <RandomParapraph>
              <>
                В целях выработки мер по реализации государственной политики в
                сфере ПОД/ФТ/ФРОМУ, повышения их эффективности, а также
                координации мер, направленных на снижение рисков ОД/ФТ,
                образован <span class="bold red">МВС+</span>
                <span className="italic">(Межведомственный совет)</span> по
                вопросам предупреждения ПОД/ФТ/ФРОМУ.
                {/* В целях выработки мер по реализации государственной политики в сфере ПОД/ФТ/ФРОМУ, повышения их эффективности, а также координации мер, направленных на снижение рисков ОД/ФТ, образован <span class="bold red">МВС+</span> (Межведомственный совет) по вопросам предупреждения ПОД/ФТ/ФРОМУ. */}
              </>
            </RandomParapraph>
          </Reveal>
          <Sizebox height={30} />

          <Reveal>
            <RandomParapraph>
              <>
                Работа в рамках проведения оценки координируется МВС в сфере
                ПОД/ФТ, а также специально созданной
                <span class="bold red"> рабочей группой+ </span>
                <span className="italic">
                  (в состав рабочей группы входят представители всех
                  государственных, правоохранительных и специальных
                  государственных органов)
                </span>{' '}
                по оценке рисков и взаимной оценке.
              </>
            </RandomParapraph>
          </Reveal>
          <Sizebox height={30} />

          <Reveal>
            <RandomParapraph>
              <>
                МВС рассматривает и одобряет отчет об оценке рисков, а{' '}
                <span class="bold">Правительство</span>
                Республики Казахстан <span class="bold">утверждает меры</span>,
                направленные на снижение рисков ОД/ФТ.
              </>
            </RandomParapraph>
          </Reveal>
          <Sizebox height={30} />
          <Reveal>
            <RandomParapraph>
              <>
                <span class="bold">АФМ направляет</span>
                соответствующим государственным органам отчет по оценке рисков,
                а также{' '}
                <span class="bold">
                  размещает на своем интернет-ресурсе
                </span>{' '}
                информацию из отчета.
              </>
            </RandomParapraph>
          </Reveal>
          <Sizebox height={30} />

          <Reveal>
            <RandomParapraph>
              <>
                СФМ должны учитывать опубликованную информацию из отчета оценки
                рисков ОД/ФТ при реализации программ, включенных правил
                внутреннего контроля.
              </>
            </RandomParapraph>
          </Reveal>
          <Sizebox height={30} />

          <Reveal>
            <Report_Warning>
              <span className="italic">
                Первая национальная оценка рисков ОД/ФТ была проведена в стране
                в 2018 г. и носила закрытый характер. С 2018 года сфера ПОД/ФТ в
                Республике Казахстан претерпела существенные изменения. В 2021
                г. Республика Казахстан провела две национальные оценки рисков
                ОД и ФТ/ФРОМУ, отчеты по которым носят закрытый характер, но
                имеют публичные версии. По итогам страной были пересмотрены
                результаты предыдущей оценки и проведены некоторые реформы,
                направленные на минимизацию выявленных рисков в сфере ПОД/ФТ и
                повышение эффективности работы финансовой разведки, надзорных и
                правоохранительных органов.
              </span>
            </Report_Warning>
          </Reveal>
          <Sizebox height={40} />

          <Sizebox height={40} />
          <Reveal>
            <NumberedDots
              header={
                'Таким образом, основными предикатными преступлениями, предшествующими легализации денег и имущества, являются:'
              }
              dotsColor={'#CADEFC'}
              list={[
                'выписка фиктивных счетов-фактур;',
                'присвоение или растрата вверенного чужого имущества;',
                'организация незаконного игорного бизнеса;',
                'незаконный оборот нефти и нефтепродуктов;',
                'уклонение от уплаты налогов;',
                'мошенничество;',
                'нарушение порядка маркировки подакцизных товаров;',
                'изготовление, хранение или сбыт поддельных денег;',
                'причинение имущественного ущерба путем обмана;',
              ]}
            />
          </Reveal>

          <Sizebox height={80} />

          <Reveal>
            <NotNumberedDots
              header={
                'Для оценки рисков ПОД/ФТ наряду с угрозами установлены следующие уязвимости национальной антиотмывочной системы:'
              }
              dotsColor={'#CADEFC'}
              list={[
                'оборот наличных денег;',
                'использование номинальных юридических лиц (фирм-однодневок) для применения схем ОД;',
                'переводы за границу денежных средств, полученных преступным путем;',
                'несовершенство системы управления рисками государственных органов и финансового сектора;',
                'недостаточная разъяснительная работа с субъектами финансового мониторинга (по законодательству в сфере ПОД/ФТ, имеющимся рискам и угрозам отмывания преступных доходов);',
              ]}
            />
          </Reveal>
          <Sizebox height={40} />
          <Reveal>
            <Report_Warning>
              Учитывая системность проведения национальной оценки, участники
              антиотмывочной системы подвергаются проведению соответствующих
              работ раз в три года.
            </Report_Warning>
          </Reveal>
          <Sizebox height={40} />
          <Reveal>
            <TextWithTitle
              title={
                'В целях установления уязвимостей национальной антиотмывочной системы в сфере ОД и их категорирования определены соответствующие критерии риска:'
              }
            />
          </Reveal>

          <Sizebox height={40} />
          <Reveal>
            <NotNumberedDots
              dotsColor={'#CADEFC'}
              list={[
                'общая ситуация в финансовом и нефинансовом секторах и объем совершаемых операций;',
                'информация об исполнении СФМ законодательства в сфере ПОД/ФТ;',
                'наличие информационных систем и IT-инструментов для применения мер надлежащей проверки;',
                'виды оказываемых услуг, продуктов, операций с учетом специфики деятельности СФМ;',
              ]}
            />
          </Reveal>
          <Sizebox height={40} />
          <Reveal>
            <TextWithTitle
              title={
                'По итогам НОР определены группы рисков ОД в разрезе услуг:'
              }
              text={['1) Группа с высоким риском:']}
            />
          </Reveal>

          <Sizebox height={40} />
          <Reveal>
            <NotNumberedDots
              dotsColor={'#CADEFC'}
              list={[
                'услуги БВУ и организаций, осуществляющих отдельные виды банковских операций;',
                'услуги организаторов игорного бизнеса и лотерей;',
                'услуги микрофинансовых организаций;',
              ]}
            />
          </Reveal>
          <Sizebox height={40} />
          <Reveal>
            <TextWithTitle text={['2) Группа со средним риском:']} />
          </Reveal>

          <Sizebox height={40} />
          <Reveal>
            <NotNumberedDots
              dotsColor={'#CADEFC'}
              list={[
                'виртуальные валюты;',
                'платежные организации;',
                'организации, осуществляющие обменные операции;',
                'профессиональные участники рынка ценных бумаг, центрального депозитария;',
                'страховые (перестраховочные) организации и брокеры, общество взаимного страхования;',
                'индивидуальные предприниматели и юридические лица, осуществляющих лизинговую деятельность без лицензии;',
                'индивидуальные предприниматели и юридические лица, осуществляющих деятельность с драгоценными металлами и драгоценными камнями, ювелирными изделиями из них;',
              ]}
            />
          </Reveal>
          <Sizebox height={40} />
          <Reveal>
            <TextWithBackground
              header={'НОР ФТ'}
              text={
                'Целью НОР ФТ является определение наиболее рискованных методов и инструментов, применяемых террористами либо террористическими группами в Республике Казахстан с целью привлечения, перемещения или использования средств на преступные цели. В задачи НОР ФТ равным образом входит исследование существующих угроз, уязвимых мест в НС ПФТ и возникающих при этом рисков ФТ, понимание происходящих в данной системе процессов, а также определение потенциальных инициатив для ее развития.'
              }
            />
          </Reveal>
          <NextLesson
            handleOnClick={() => {
              CheckCurrentChapter(id);
            }}
          />
        </LessonPage>
      );
    case 71:
      return (
        <LessonPage name={'Списки ФАТФ'} lecturer={'AML Academy'}>
          <Sizebox height={30} />
          <Reveal>
            <ImageLine img={image63} color={'black'}></ImageLine>
          </Reveal>
            {/*<Sizebox height={30} />*/}

            {/*<VideoLine url={'https://videos.sproutvideo.com/embed/4490d6b6191be6cacd/d4b415608a84d11d'}>*/}

            {/*</VideoLine>*/}
          <Sizebox height={30} />

          <Reveal>
            <TextWithTitle
              title={
                'Взаимные оценки проводятся РГТФ в рамках которых национальные системы ПОД/ФТ государств-участников проверяются на соответствие международным стандартам'
              }
              text={[
                'Под взаимностью подразумевается, что представители всех государств-членов РГТФ оценивают другие государства-члены по очереди в соответствии с графиком оценок.',
                'Взаимные оценки проводят МВФ, Всемирный банк и ФАТФ.',
              ]}
            />
          </Reveal>

          <Sizebox height={20} />
          <Reveal>
            <Report_Warning>
              График взаимных оценок ЕАГ размещается на официальном интернет
              ресурсе ЕАГ https://eurasiangroup.org/ru/general-information
            </Report_Warning>
          </Reveal>

          <Sizebox height={40} />
          <Reveal>
            <TextWithTitle
              title={
                'По итогам взаимной оценки к Казахстану применена процедура «стандартный мониторинг» – механизм мониторинга, применяемый для всех государств-членов ЕАГ, не имеющих существенных недостатков в техническом соответствии рекомендациям ФАТФ и системы ПОД/ФТ.'
              }
              text={[
                'Выработанные экспертами ЕАГ рекомендации по итогам взаимной оценки легли в основу мер по совершенствованию национальной системы ПОД/ФТ.',
                'В целях выработки мер по реализации государственной политики в сфере ПОД/ФТ, повышения их эффективности, а также координации мер, направленных на снижение рисков легализации (отмывания) доходов и финансирования терроризма, создан Межведомственный совет по вопросам предупреждения легализации (отмывания) доходов, полученных преступным путем, и финансирования терроризма.',
                'В национальное законодательство о ПОД/ФТ внесены концептуальные поправки:',
              ]}
            />
          </Reveal>
          <Sizebox height={40} />
          <Reveal>
            <NotNumberedDots
              dotsColor={'#CADEFC'}
              list={[
                'определен государственный орган-регулятор для четырех видов субъектов финансового мониторинга (риелторы, юристы, лизинга, бухгалтерские организации и профессиональные бухгалтеры);',
                'усилена ответственность всех субъектов финансового мониторинга за несоблюдение требований Закона о ПОД/ФТ;',
                'определен государственный орган, ответственный за учет и использование конфискованного имущества, и образование фонда такого имущества;',
                'усилено международное сотрудничество в части обмена информацией в сфере ПОД/ФТ между органами финансового контроля и правоохранительными органами с иностранными компетентными органами;',
                'операции публичных должностных лиц стали подлежать финансовому мониторингу;',
              ]}
            />
          </Reveal>
          <Sizebox height={40} />

          <Reveal>
            <NextLesson
              handleOnClick={() => {
                CheckCurrentChapter(id);
              }}
            />
          </Reveal>
        </LessonPage>
      );
    case 72:
      return (
        <LessonPage name={'ЕАГ'} lecturer={'AML Academy'}>
          <Sizebox height={30} />
          <Reveal>
            <ImageWithText
              img={image58}
              imageText={'Расслоение'}
              color={'#FFFFFF'}
            />
          </Reveal>
          <Sizebox height={30} />
          <Reveal>
            <TextWithTitle
              title={
                'Взаимные оценки проводятся РГТФ в рамках которых национальные системы ПОД/ФТ государств-участников проверяются на соответствие международным стандартам'
              }
              text={[
                'Под взаимностью подразумевается, что представители всех государств-членов РГТФ оценивают другие государства-члены по очереди в соответствии с графиком оценок.',
                'Взаимные оценки проводят МВФ, Всемирный банк и ФАТФ.',
              ]}
            />
          </Reveal>

          <Sizebox height={20} />
          <Reveal>
            <Report_Warning>
              График взаимных оценок ЕАГ размещается на официальном интернет
              ресурсе ЕАГ https://eurasiangroup.org/ru/general-information
            </Report_Warning>
          </Reveal>
          <Sizebox height={40} />

          <Reveal>
            <TextWithTitle
              title={
                'По итогам взаимной оценки к Казахстану применена процедура «стандартный мониторинг» – механизм мониторинга, применяемый для всех государств-членов ЕАГ, не имеющих существенных недостатков в техническом соответствии рекомендациям ФАТФ и системы ПОД/ФТ.'
              }
              text={[
                'Выработанные экспертами ЕАГ рекомендации по итогам взаимной оценки легли в основу мер по совершенствованию национальной системы ПОД/ФТ.',
                'В целях выработки мер по реализации государственной политики в сфере ПОД/ФТ, повышения их эффективности, а также координации мер, направленных на снижение рисков легализации (отмывания) доходов и финансирования терроризма, создан Межведомственный совет по вопросам предупреждения легализации (отмывания) доходов, полученных преступным путем, и финансирования терроризма.',
                'В национальное законодательство о ПОД/ФТ внесены концептуальные поправки:',
              ]}
            />
          </Reveal>

          <Sizebox height={40} />
          <Reveal>
            <NotNumberedDots
              dotsColor={'#CADEFC'}
              list={[
                'определен государственный орган-регулятор для четырех видов субъектов финансового мониторинга (риелторы, юристы, лизинга, бухгалтерские организации и профессиональные бухгалтеры);',
                'усилена ответственность всех субъектов финансового мониторинга за несоблюдение требований Закона о ПОД/ФТ;',
                'определен государственный орган, ответственный за учет и использование конфискованного имущества, и образование фонда такого имущества;',
                'усилено международное сотрудничество в части обмена информацией в сфере ПОД/ФТ между органами финансового контроля и правоохранительными органами с иностранными компетентными органами;',
                'операции публичных должностных лиц стали подлежать финансовому мониторингу;',
              ]}
            />
          </Reveal>
          <Sizebox height={40} />

          <Reveal>
            <NextLesson
              handleOnClick={() => {
                CheckCurrentChapter(id,9);
              }}
            />
          </Reveal>
        </LessonPage>
      );
      case 9:
          return (
              <TestPage
                  finished={modules[1].quiz.quiz_max_points === 100}
                  name={'ТЕСТИРОВАНИЕ 2'}
                  questions={modules[1].quiz.quizList || []}
                  quizId={15}
                  handleOpenModal={handleOpenFeedbackModal}
              ></TestPage>
          );
    case 73:
      return (
        <LessonPage name={'Законодательство'} lecturer={'AML Academy'}>
          <Reveal>
            <ImageLine img={image67} color={'black'}></ImageLine>
          </Reveal>

          <Sizebox height={30} />
          <Reveal>
            <HeaderWithLine
              header={
                'Главным событием в формировании национальной системы ПОД/ФТ Казахстана является принятие в 2009 году Закона Республик и Казахстан «О противодействии легализации (отмыванию) доходов, полученных незаконным путем, и финансированию терроризма».'
              }
            />
          </Reveal>
          <Sizebox height={40} />

          <Reveal>
            <NotNumberedDots
              header={'Закон определяет:'}
              dotsColor={'#CADEFC'}
              list={[
                <>
                  <span className="bold">правовые основы противодействия</span>{' '}
                  легализации (отмыванию) доходов, полученных преступным путем,
                  и финансированию терроризма;
                </>,
                <>
                  <span className="bold">
                    правовые отношения субъектов финансового мониторинга
                  </span>
                  , уполномоченного органа и других государственных органов
                  Республики Казахстан в сфере ПОД/ФТ.
                </>,
              ]}
            />
          </Reveal>
          <Sizebox height={40} />
          <Reveal>
            <ImageLine
              img={
                'https://c4.wallpaperflare.com/wallpaper/126/50/379/dark-blood-money-wallpaper-preview.jpg'
              }
              color={'black'}
            ></ImageLine>
          </Reveal>
          <Sizebox height={100} />
          <Reveal>
            <HeaderWithLine headerColor={'#1F3C88'} lineColor={'#CADEFC'}>
              <>
                ОД/ФТ признаны мировым обществом глобальными проблемами,
                носящими транснациональный характер, способный подорвать
                существование государственного строя.{' '}
              </>
            </HeaderWithLine>
          </Reveal>
          <Sizebox height={80} />
          <Reveal>
            <VideoLine
              url={
                'https://videos.sproutvideo.com/embed/0690d1b1191ae8cf8f/2c6b243940e7d2a5?playerColor=1f71a1'
              }
            />
          </Reveal>
          <Sizebox height={150} />

          <Reveal>
            <NotNumberedDots
              header={
                'Государственная политика Казахстана в сфере развития национальной системы ПОД/ФТ основывается на применении основных принципов:'
              }
              dotsColor={'#CADEFC'}
              list={[
                'обеспечение единой государственной политики в сфере ПОД/ФТ;',
                'эффективное координирование участников системы ПОД/ФТ;',
                'последовательное и неуклонное развитие и повышение эффективности национальной «антиотмывочной» системы ПОД/ФТ;',
                'использование положений международных договоров, стандартов и рекомендаций международных организаций в сфере ПОД/ФТ с учетом соответствия национальным интересам и правовой системе Казахстана;',
              ]}
            />
          </Reveal>

          <Sizebox height={40} />
          <Reveal>
            <Report_Warning>
              Подразделение финансовой разведки занимает уникальное положение в
              системе ПОД/ФТ, находясь на стыке деятельности финансовых
              институтов, а также правоохранительных и уполномоченных органов,
              тем самым создав и внедрив эффективную национальную
              «антиотмывочную» систему.
            </Report_Warning>
          </Reveal>

          <Sizebox height={100} />
          <Reveal>
            <HeaderWithLine headerColor={'#1F3C88'} lineColor={'#CADEFC'}>
              <>
                Основные этапы функционирования системы ПОД/ФТ Республики
                Казахстан представлены на рисунке 1.
              </>
            </HeaderWithLine>
          </Reveal>
          <Sizebox height={40} />

          <Reveal>
            <RandomH2 text={'Участники системы ПОД/ФТ'} />
          </Reveal>
          <Sizebox height={40} />
          <Reveal>
            <ImageWithPoints
              imageUrl={image3m1}
              points={[
                {
                  id: 0,
                  x: 720,
                  y: 380,
                  name: 'ГО регуляторы (государтсвенные органы-регуляторы)',
                },
                { id: 1, x: 720, y: 640, name: 'БВУ' },
                { id: 2, x: 720, y: 800, name: 'ФУ (финансовые учреждения)' },
                {
                  id: 3,
                  x: 720,
                  y: 960,
                  name: 'УНФПП (установленные нефинансовые предприятия и профессии)',
                },
                { id: 4, x: 720, y: 1220, name: 'Общественные организации' },
                { id: 5, x: 1604, y: 500, name: 'Правоохранительные органы' },
                { id: 6, x: 1604, y: 928, name: 'Международные организации' },
              ]}
              list={[
                [
                  'Агентство по регулированию и развитию финансового рынка РК',
                  'Национальный Банк РК',
                  'Агентство РК по финансовому мониторингу',
                  'Министерство финансов РК',
                  'Министерство юстиции РК',
                  'Министерство туризма и спорта РК',
                  'Агентство по защите и развитию конкуренции РК',
                  'Министерство здравоохранения РК',
                  'Министерство цифрового развития, инноваций и аэрокосмической промышленности РК',
                  'Комитет по регулированию финансовых услуг МФЦА',
                ],
                [''],
                [
                  'БВУ-Банки второго уровня',
                  'Обменные пункты',
                  'Организации, осуществляющие отдельные виды банковских операций',
                  'Фондовые биржи',
                  'Страховые организации и страховые брокеры, общества взаимного страхования',
                  'Профессиональные участники рынка ценных бумаг, центральный депозитарий',
                  'Операторы почты, оказывающие услуги по переводу денег',
                  'Организации, осуществляющие отдельные виды банковских операций',
                  'Платежные организации',
                ],
                [
                  'Нотариусы, осуществляющие нотариальные действия с деньгами и (или) иным имуществом',
                  'Адвокаты и юридические консультанты (в установленных Законом о ПОД/ФТ случаях)',
                  'Независимые специалисты по юридическим вопросам (в установленных Законом о ПОД/ФТ случаях)',
                  'Товарные биржи',
                  'Бухгалтерские организации',
                  'Профессиональные бухгалтеры, осуществляющие предпринимательскую деятельность в сфере бухгалтерского учета',
                  'Аудиторские организации',
                  'Организации игорного бизнеса и лотерей',
                  'ИП и ЮЛ, осуществляющие лизинговую деятельность в качестве лизингодателя без лицензии',
                  'ИП и ЮЛ, осуществляющие операции с драгоценными металлами и драгоценными камнями, ювелирными изделиями из них',
                  'ИП и ЮЛ, оказывающие посреднические услуги при осуществлении сделок купли-продажи недвижимого имущества',
                  'Лица, осуществляющие деятельность по выпуску цифровых активов, организации торгов ими, а также предоставлению услуг по обмену цифровых активов на деньги, ценности и иное имущество',
                ],
                [
                  'Объединения юридических лиц',
                  'Региональные палаты',
                  'Некоммерческие организации',
                  'Ассоциации',
                  'Иные организации',
                ],
                [
                  'Органы внутренних дел',
                  'Органы национальной безопасности',
                  'Уполномоченный орган по противодействию коррупции',
                  'Специальные государственные органы',
                ],
                [
                  'Организация Объединенных Наций',
                  'Евразийская группа по противодействию легализации преступных доходов и финансированию терроризма',
                  'Комитет экспертов по оценке мер по борьбе с отмыванием денег и финансированием терроризма',
                  'Иные организации',
                ],
              ]}
            />
          </Reveal>

          {/* <Sizebox height={40} />
                <GroupList /> */}
          <Sizebox height={80} />

          <Reveal>
            <TextWithTitle
              text={[
                'Некоторые авторы книг в сфере ПОД/ФТ выделяют три уровня финансового мониторинга: внутренний мониторинг, надзор и внешний мониторинг.',
                <>
                  Таким образом, под финансовым мониторингом понимается
                  совокупность отношений, которые возникают между{' '}
                  <span className="bold">
                    субъектами финансового мониторинга, подразделением
                    финансовой разведки и органами надзора и контроля
                  </span>{' '}
                  с целью предотвращения использования финансовой системы
                  государства для отмывания криминальных денег и финансирования
                  терроризма.
                </>,
              ]}
            />
          </Reveal>

          <Sizebox height={100} />

          <Reveal>
            <HeaderWithLine
              header={
                <>
                  Теперь, когда Вы понимаете, что в рамках противодействия
                  отмывания доходов, финансирования терроризма и оружия
                  массового уничтожения необходимо
                  <span className="bold">
                    {' '}
                    взаимодействие всех участников антиотмывочной системы
                  </span>
                  , мы можем перейти к изучению
                  <span className="bold">
                    {' '}
                    роли субъектов финансового мониторинга
                  </span>{' '}
                </>
              }
            />
          </Reveal>

          <Sizebox height={80} />

          <Reveal>
            <NextLesson
              handleOnClick={() => {
                CheckCurrentChapter(id);
              }}
            />
          </Reveal>
        </LessonPage>
      );
    case 74:
      return (
        <LessonPage
          name={'Субъекты финансового мониторинга'}
          lecturer={'AML Academy'}
        >
          <Sizebox height={30} />

          <Reveal>
            <HeaderWithLine headerColor={'#1F3C88'} lineColor={'#CADEFC'}>
              <>
                Как известно,{' '}
                <span class="bold">основным поставщиком информации</span> по
                операциям, подлежащим финансовому мониторингу в АФМ являются{' '}
                <span class="bold">субъекты финансового мониторинга.</span>
              </>
            </HeaderWithLine>
          </Reveal>

          <Sizebox height={40} />

          <Reveal>
            <TextWithTitle
              text={
                <>
                  Благодаря налаженной процедуре внутреннего контроля субъекты
                  своевременно и оперативно направляют соответствующую{' '}
                  <span className="bold">
                    информацию по финансовым операциям своих клиентов
                  </span>
                  , что в последующем служит, в том числе и основанием для
                  привлечения к ответственности за совершенные преступные деяния
                  и воспрепятствованию выводу средств за пределы Республики
                  Казахстан.{' '}
                </>
              }
            />
          </Reveal>
          <Sizebox height={40} />

          <Reveal>
            <ImageWithText
              img={image69}
              imageText={
                'Важно отметить, что государственные органы Республики Казахстан не являются субъектами финансового мониторинга.'
              }
              color={'#FFFFFF'}
            />
          </Reveal>
          <Sizebox height={40} />

          <Reveal>
            <Report_Warning>
              Таким образом, национальным законодательством о ПОД/ФТ определены
              субъекты финансового мониторинга.
            </Report_Warning>
          </Reveal>
          <Sizebox height={40} />
          <Reveal>
            <TabsGlossary
              tabs={[
                'Финансовый сектор',
                'Нефинансовый сектор',
                'Субъекты осуществляющие деятельность на площадке МФЦА.',
              ]}
              tabsGlossary={{
                'Финансовый сектор': (
                  <NotNumberedDots
                    dotsColor={'black'}
                    list={[
                      'банки, филиалы банков – нерезидентов Республики Казахстан, организации, осуществляющие отдельные виды банковских операций, за исключением оператора или операционного центра межбанковской системы переводов денег, а также юридических лиц, исключительной деятельностью которых является инкассация банкнот, монет и ценностей;',
                      'биржи (фондовые);',
                      'страховые (перестраховочные) организации, страховые брокеры, общества взаимного страхования, филиалы страховых (перестраховочных) организаций – нерезидентов Республики Казахстан, филиалы страховых брокеров – нерезидентов Республики Казахстан;',
                      'единый накопительный пенсионный фонд и добровольные накопительные пенсионные фонды;',
                      'профессиональные участники рынка ценных бумаг, центральный депозитарий;',
                      'операторы почты, оказывающие услуги по переводу денег;',
                      'организации, осуществляющие микрофинансовую деятельность;',
                      'платежные организации.',
                    ]}
                  />
                ),
                'Нефинансовый сектор': (
                  <NotNumberedDots
                    dotsColor={'black'}
                    list={[
                      'биржи (товарные);',
                      'нотариусы, осуществляющие нотариальные действия с деньгами и (или) иным имуществом;',
                      <>
                        <RandomParapraph>
                          адвокаты, юридические консультанты и другие
                          независимые специалисты по юридическим вопросам – в
                          случаях, когда они от имени или по поручению клиента
                          участвуют в операциях с деньгами и (или) иным
                          имуществом в отношении следующей деятельности:
                        </RandomParapraph>
                        <Sizebox height={20} />
                        <NumberedDots
                          dotsColor={'rgb(249, 249, 249)'}
                          list={[
                            'купли-продажи недвижимости;',
                            'управления деньгами, ценными бумагами или иным имуществом клиента;',
                            'управления банковскими счетами или счетами ценных бумаг;',
                            'аккумулирования средств для создания, обеспечения, функционирования или управления компанией;',
                            'создания, купли-продажи, функционирования юридического лица или управления им;',
                          ]}
                        />
                      </>,
                      'бухгалтерские организации и профессиональные бухгалтеры, осуществляющие предпринимательскую деятельность в сфере бухгалтерского учета, аудиторские организации;',
                      'организаторы игорного бизнеса и лотерей;',
                      'индивидуальные предприниматели и юридические лица, осуществляющие лизинговую деятельность в качестве лизингодателя без лицензии;',
                      'индивидуальные предприниматели и юридические лица, осуществляющие операции с драгоценными металлами и драгоценными камнями, ювелирными изделиями из них;',
                      'индивидуальные предприниматели и юридические лица, оказывающие посреднические услуги при осуществлении сделок купли-продажи недвижимого имущества;',
                      'фонд социального медицинского страхования;',
                      'лица, осуществляющие деятельность по выпуску цифровых активов, организации торгов ими, а также предоставлению услуг по обмену цифровых активов на деньги, ценности и иное имущество.',
                    ]}
                  />
                ),
                'Субъекты осуществляющие деятельность на площадке МФЦА.':
                  'Участники Международного финансового центра «Астана», осуществляющие на территории Международного финансового центра «Астана» (далее – МФЦА) отдельные виды деятельности, определяемые Комитетом МФЦА по регулированию финансовых услуг по согласованию с уполномоченным органом в соответствии с ФАТФ.',
              }}
              color={'#3A3939'}
              tabsBackgroundColor={'#BAD6FF'}
            />
          </Reveal>
          <Sizebox height={100} />

          <Reveal>
            <HeaderWithLine headerColor={'#1F3C88'} lineColor={'#CADEFC'}>
              <>
                <span className="bold">
                  При этом к ряду субъектов не финансового сектора
                </span>{' '}
                распространяются требования Закона Республики Казахстан «О
                разрешениях и уведомлениях» в части направления в АФМ{' '}
                <span className="bold">
                  уведомления о начале или прекращении деятельности
                </span>
                .
              </>
            </HeaderWithLine>
          </Reveal>

          <Sizebox height={80} />

          <Reveal>
            <NotNumberedDots
              header={'К таким субъектам относятся:'}
              dotsColor={'#CADEFC'}
              list={[
                'юрконсультанты и другие независимые специалисты по юридическим вопросам;',
                'лизингодатели без лицензии;',
                'лица и организации, реализующие драгоценные металлы и драгоценные камни;',
                'риелторы, оказывающие посреднические услуги по купле-продаже недвижимости;',
              ]}
            />
          </Reveal>

          <Sizebox height={150} />
          <Reveal>
            <HeaderWithLine headerColor={'#1F3C88'} lineColor={'#CADEFC'}>
              <>
                Для подачи уведомления о начале деятельности вышеуказанные
                субъекты используют Портал Электронного правительства{' '}
                <a href="https://egov.kz/">https://egov.kz/</a>, перед подачей
                Уведомления необходимо авторизоваться на сайте (рис.1), после
                этого необходимо найти вкладку в левой стороне на нижней части
                страницы (<span class="bold">электронное лицензирование</span>),
                далее будет осуществлен переход на сайт{' '}
                <a href=" https://elicense.kz/">https://elicense.kz/</a>{' '}
                лицензирования Республики Казахстан (рис. 2)
              </>{' '}
            </HeaderWithLine>
          </Reveal>

          <Sizebox height={150} />

          <Reveal>
            <CustomCarousel
              data={[
                {
                  header: [],
                  image: carousel_11,
                  imageText: 'Рисунок 1',
                },
                {
                  header: [],
                  image: carousel_12,
                  imageText: 'Рисунок 2',
                },
                {
                  header: [
                    'Для завершения процедуры необходимо: 1. Выбрать категорию «Финансы»;',
                  ],
                  image: carousel_13,
                },
                {
                  header: [
                    '2. Кликнуть на подкатегорию «Уведомительный порядок»;',
                    '3. Выбирать «Уведомление о начале или прекращении деятельности лица, являющегося субъектом финансового мониторинга в соответствии с Законом Республики Казахстан «О противодействии легализации (отмыванию) доходов, полученных преступным путем, и финансированию терроризма»);',
                  ],
                  image: carousel_14,
                },
                {
                  header: ['4. Заказать услугу онлайн;'],
                  image: carousel_15,
                },
                {
                  header: [
                    '5. Во всплывающем окне выбрать Агентство Республики Казахстан по финансовому мониторингу;',
                  ],
                  image: carousel_16,
                },
                {
                  header: [
                    '6. Далее отображаются личные сведения Субъекта;',
                    '7. В данной вкладке необходимо указать адрес осуществления деятельности и выбрать соответствующий вид Субъекта финансового мониторинга, далее подписать с помощью ЭЦП и отправить;',
                  ],
                  image: carousel_17,
                },
                {
                  header: [
                    '8. Также можно проверить информацию о поданном уведомлении и при необходимости скачать талон о принятии уведомления. Для этого на главной странице сайта elicense.kz  необходимо выбрать «Поиск РД»;',
                  ],
                  image: carousel_18,
                },
                {
                  header: [
                    '9. Указать БИН/ИИН организации;',
                    '10. Перейти на кнопку «Действительный»;',
                  ],
                  image: carousel_19,
                },
                {
                  header: [
                    '11. Скачать документ «Талон о принятии уведомления».',
                  ],
                  image: carousel_110,
                },
                {
                  header: [
                    'Уведомление заверяется электронной цифровой подписью субъекта.',
                  ],
                  image: carousel_111,
                },
              ]}
            />
          </Reveal>

          <Sizebox height={150} />
          <Reveal>
            <Centered>
              <RandomH2>
                Ответственность за занятие деятельностью, без соответствующего
                направления уведомления.
              </RandomH2>
            </Centered>
          </Reveal>
          <Sizebox height={40} />
          <Reveal>
            <VideoLine
              url={
                'https://videos.sproutvideo.com/embed/7090d1b1191ae8c9f9/d34472230c8d2891?playerColor=1f71a1'
              }
              title={''}
            />
          </Reveal>

          <Sizebox height={200} />
          <Reveal>
            <HeaderWithLine headerColor={'#1F3C88'} lineColor={'#CADEFC'}>
              <>
                Теперь, когда Вы понимаете, кем являются{' '}
                <span class="bold">субъекты финансового мониторинга</span>, и то
                что к ряду из них предусмотрен{' '}
                <span class="bold">уведомительный порядок</span>, перейдем к
                изучению обязательств субъектов финансового мониторинга по
                проведению{' '}
                <span class="bold">надлежащей проверки клиентов.</span>{' '}
              </>{' '}
            </HeaderWithLine>
          </Reveal>
          <Sizebox height={40} />

          <Reveal>
            <NextLesson
              handleOnClick={() => {
                CheckCurrentChapter(id);
              }}
            />
          </Reveal>
        </LessonPage>
      );
    case 75:
      return (
        <LessonPage
          name={
            'Надлежащая проверка субъектами финансового мониторинга клиентов'
          }
          lecturer={'AML Academy'}
        >
          <Sizebox height={80} />
          <Reveal>
            <RandomParapraph>
              <span className="bold">
                Субъекты финансового мониторинга должны принимать меры по
                надлежащей проверке своих клиентов
              </span>
              (их представителей) и бенефициарных собственников в соответствии с
              законодательством Республики Казахстан о противодействии
              легализации (отмыванию) доходов, полученных преступным путем, и
              финансированию терроризма.
            </RandomParapraph>
          </Reveal>

          <Sizebox height={100} />

          <Reveal>
            <HeaderWithLine
              headerColor={'#1F3C88'}
              lineColor={'#CADEFC'}
              header={
                <>
                  В соответствии с Законом о ПОД/ФТ{' '}
                  <span className="bold">клиент</span> – физическое, юридическое
                  лицо или иностранная структура без образования юридического
                  лица, <span className="bold">получающие услуги субъекта</span>{' '}
                  финансового мониторинга.
                </>
              }
            />
          </Reveal>
          <Sizebox height={80} />

          <Reveal>
            <Centered>
              <RandomH2 style={{ color: '#1F3C88' }}>
                Бенефициарным собственником признается – физическое лицо:
              </RandomH2>
            </Centered>
          </Reveal>
          <Reveal>
            <DropdownGlossaryList
              list={[
                {
                  title: '1',
                  description:
                    'которому прямо или косвенно принадлежат более двадцати пяти процентов долей участия в уставном капитале либо размещенных (за вычетом привилегированных и выкупленных обществом) акций клиента – юридического лица или иностранной структуры без образования юридического лица;\n',
                  tabName:
                    'Бенефициарным собственником признается – физическое лицо:',
                },
                {
                  title: '2',
                  description:
                    'осуществляющее контроль над клиентом иным образом;\n',
                  tabName:
                    'Бенефициарным собственником признается – физическое лицо:',
                },
                {
                  title: '3',
                  description:
                    'в интересах которого клиентом совершаются операции с деньгами и (или) иным имуществом.',
                  tabName:
                    'Бенефициарным собственником признается – физическое лицо:',
                },
              ]}
              headerTextColor={'#170F49'}
              activeHeaderTextColor={'#1F3C88'}
              textColor={'#6F6C90'}
              tabsTextColor={'#3A3939'}
              tabsBackgroundColor={'#BAD6FF'}
            />
          </Reveal>
          <Sizebox height={100} />

          <ImageAndColumns
            header={
              'Субъекты финансового мониторинга осуществляют надлежащую проверку клиентов (их представителей) и бенефициарных собственников в следующих случаях:'
            }
            image={imageAndColumns_1}
            list={[
              'установления деловых отношений с клиентом.',
              'осуществления операций с деньгами и (или) иным имуществом, в том числе подозрительных операций.',
              'наличия оснований для сомнения в достоверности ранее полученных сведений о клиенте (его представителе), бенефициарном собственнике.',
            ]}
          />

          <Reveal>
            <Sizebox height={40} />
            <TextWithTitle
              title={
                'Какие описания подпадают под определение бенефициарного собственника согласно Закону о ПОД/ФТ? (перенесите курсором мышки правильные ответы в ячейку).'
              }
            ></TextWithTitle>
            <DragAndDropZone
              title={'Бенефициарный собственник это:'}
              options={[
                '- юридическое лицо, которому прямо или косвенно принадлежат более двадцати пяти процентов долей участия в уставном капитале',
                '- физическое лицо, осуществляющее контроль над клиентом иным образом',
                '- юридическое лицо, которому принадлежат более пятидесяти одного процента в уставном капитале организации',
                '- физическое лицо,  которому прямо или косвенно принадлежат более двадцати пяти процентов долей участия в уставном капитале либо размещенных (за вычетом привилегированных и выкупленных обществом) акций клиента',
                '- физическое лицо, осуществляющее контроль над аффилированным лицом клиента субъекта финансового мониторинга',
              ]}
              correctOptions={[
                '- физическое лицо, осуществляющее контроль над клиентом иным образом',
                '- физическое лицо,  которому прямо или косвенно принадлежат более двадцати пяти процентов долей участия в уставном капитале либо размещенных (за вычетом привилегированных и выкупленных обществом) акций клиента',
              ]}
            ></DragAndDropZone>
          </Reveal>

          <Sizebox height={100} />
          <Reveal>
            <>
              <Centered>
                <RandomH2>
                  При проведении субъектами финансового мониторинга надлежащей
                  проверки своих клиентов (их представителей) и бенефициарных
                  собственников осуществляются меры по:
                </RandomH2>
              </Centered>
              <Sizebox height={20} />
              <DropdownGlossaryList
                headerTextColor={'#170F49'}
                activeHeaderTextColor={'#1F3C88'}
                textColor={'#6F6C90'}
                tabsTextColor={'#3A3939'}
                tabsBackgroundColor={'#BAD6FF'}
                list={[
                  {
                    title:
                      'фиксированию сведений, необходимых для идентификации физического лица',
                    description:
                      'данные документа, удостоверяющего его личность, индивидуальный идентификационный номер (за исключением случаев, когда физическому лицу не присвоен индивидуальный идентификационный номер в соответствии с законодательством Республики Казахстан), а также юридический адрес;\n',
                  },
                  {
                    title:
                      'фиксированию сведений, необходимых для идентификации юридического лица (филиала, представительства):',
                    description:
                      'данные справки о государственной (учетной) регистрации (перерегистрации) юридического лица (филиала, представительства), бизнес-идентификационный номер (за исключением случаев, когда юридическому лицу не присвоен бизнес-идентификационный номер в соответствии с законодательством Республики Казахстан), характер деятельности, а также адрес места регистрации или нахождения;',
                  },
                  {
                    title:
                      'фиксированию сведений, необходимых для идентификации иностранной структуры без образования юридического лица:',
                    description:
                      'наименование, номер (при наличии), под которым иностранная структура без образования юридического лица зарегистрирована в иностранном государстве (на территории), адрес места нахождения, место ведения основной деятельности, характер деятельности, а в отношении трастов и иных иностранных структур без образования юридического лица с аналогичной структурой или функцией также состав имущества, находящегося в управлении (собственности), фамилия, имя, отчество (если оно указано в документе, удостоверяющем личность) и адрес места жительства (места нахождения) учредителей (участников) иностранной структуры без образования юридического лица и бенефициарных собственников (при наличии);',
                  },
                  {
                    title:
                      'выявлению бенефициарного собственника и фиксирование сведений, необходимых для его идентификации:',
                    description:
                      'данные документа, удостоверяющего его личность, индивидуальный идентификационный номер (за исключением случаев, когда физическому лицу не присвоен индивидуальный идентификационный номер в соответствии с законодательством Республики Казахстан).\n',
                  },
                ]}
              />
            </>
          </Reveal>

          <Sizebox height={100} />
          <Reveal>
            <HeaderWithLine headerColor={'#1F3C88'} lineColor={'#CADEFC'}>
              <>
                Необходимость фиксирования сведений для выявления бенефициарго
                собственника.{' '}
              </>
            </HeaderWithLine>
          </Reveal>

          <Sizebox height={80} />

          <VideoLine
            url={
              'https://videos.sproutvideo.com/embed/1190d1b1191ae8c498/b8caa50df4b0d67b?playerColor=1f71a1'
            }
          />
          <Sizebox height={40} />
          <Reveal>
            <TextWithTitle
              title={
                'Надлежащая проверка субъектами финансового мониторинга своих клиентов (их представителей) и бенефициарных собственников включает осуществление следующих мер:'
              }
            />

            <Sizebox height={40} />
            <NotNumberedDots
              dotsColor={'#CADEFC'}
              list={[
                'установление предполагаемой цели и характера деловых отношений;',
                'проведение на постоянной основе проверки деловых отношений и изучения операций, осуществляемых клиентом через данный субъект финансового мониторинга, включая при необходимости получение и фиксирование сведений об источнике финансирования совершаемых операций;',
                'проверка достоверности сведений, необходимых для идентификации клиента (его представителя), бенефициарного собственника, и обновление сведений о клиенте (его представителе) и бенефициарном собственнике;',
              ]}
            />
            <Sizebox height={40} />
          </Reveal>
          <Reveal>
            <HeaderWithLine headerColor={'#1F3C88'} lineColor={'#CADEFC'}>
              <>
                <span class="bold">
                  В отношении представителя клиента дополнительно проверяются
                </span>{' '}
                полномочия такого лица действовать от имени и (или) в интересах
                клиента.{' '}
              </>
            </HeaderWithLine>
          </Reveal>
          <Reveal>
            <Sizebox height={80} />
            <TextWithTitle
              title={
                'В каких случаях субъекты финансового мониторинга осуществляют НПК?'
              }
            ></TextWithTitle>
            <LupaDragZone
              options={[
                '- установления деловых отношений с клиентом',
                '- прекращения деловых отношений',
                '- осуществления операций с деньгами и (или) иным имуществом, в том числе подозрительных операций',
                '- разрыва деловых отношений',
                '- только после выявления нарушений по результатам проверки уполномоченного органа',
                '- наличия оснований для сомнения в достоверности ранее полученных сведений о клиенте (его представителе), бенефициарном собственнике',
              ]}
              correctOptions={[
                '- установления деловых отношений с клиентом',
                '- осуществления операций с деньгами и (или) иным имуществом, в том числе подозрительных операций',
                '- наличия оснований для сомнения в достоверности ранее полученных сведений о клиенте (его представителе), бенефициарном собственнике',
              ]}
              imgUrl={imgLupa}
              Width={'300px'}
              Height={'300px'}
            ></LupaDragZone>
            <Sizebox height={40} />
            <TextWithTitle
              title={'Обновление сведений осуществляется в случаях:'}
            ></TextWithTitle>
              <NotNumberedDots
                  dotsColor={'#CADEFC'}
                  list={[
                      'установления деловых отношений с клиентом',
                      'осуществления операций с деньгами и (или) иным имуществом, в том числе подозрительных операций',
                      'наличия оснований для сомнения в достоверности ранее полученных сведений о клиенте (его представителе), бенефициарном собственнике и правилами внутреннего контроля',
                      'При наличии основания для сомнения в достоверности ранее полученных сведений о клиенте (его представителе), бенефициарном собственнике обновление сведений о клиенте (его представителе) и бенефициарном собственнике осуществляется в течение пятнадцати рабочих дней, следующих за днем принятия субъектом финансового мониторинга решения о наличии такого сомнения',
                  ]}
              />
            <Sizebox height={40} />
          </Reveal>
            <Reveal>
                <TextWithTitle
                    title={
                        'В законодательстве также предусмотрены случаи, когда мреы Надлежащей проверки клиентов не принимаются субъектами в случаях проведении слудующих разовых операциях'
                    }
                />
                <TableComponent></TableComponent>
            </Reveal>

          <Sizebox height={80} />
          <Reveal>
            <TextWithTitle
              title={
                'Субъекты финансового мониторинга в рамках дистанционно установленных деловых отношений с клиентом вправе совершать операции, за исключением трансграничных платежей, без принятия мер по проверке достоверности сведений, необходимых для идентификации клиента (его представителя), бенефициарного собственника, в случаях:'
              }
            />
            <Sizebox height={40} />
            <NumberedDots
              dotsColor={'#CADEFC'}
              list={[
                'осуществления клиентом операций по уплате налогов, пени, штрафов и других обязательных платежей в бюджет, а также страховых премий по договорам обязательного страхования;',
                'зачисления денег на банковский счет клиента;',
              ]}
            />
            <Sizebox height={40} />
          </Reveal>
          <Reveal>
              <Centered>
                  <JustTextWithP
                      textData={'"Надлежащая проверка субъектами финансового мониторинга своих клиентов (их представителей) и бенефициарных собственников осуществляется в соответствии с правилами внутреннего контроля."\n\nСубъект финансового мониторинга вправе требовать от клиента (его представителя) представления сведений и документов, "необходимых или достаточных для идентификации клиента" (его представителя), выявления бенефициарного собственника, а также представления сведений о налоговом резидентстве, роде деятельности и источнике финансирования совершаемых операций.\n\nКлиенты (их представители) "обязаны предоставлять" субъектам финансового мониторинга сведения и документы, необходимые для исполнения ими обязанностей, предусмотренных Законом о ПОД/, включая сведения о бенефициарных собственниках.'}
                  />
              </Centered>
          </Reveal>
          <Reveal>
            <Report_Information>
              Сведения о бенефициарных собственниках представляются клиентами
              (их представителями) по запросу субъекта финансового мониторинга в
              порядке, определенном уполномоченным органом.
            </Report_Information>
          </Reveal>

          <Reveal>
            <HeaderWithLine headerColor={'#1F3C88'} lineColor={'#CADEFC'}>
              <>
                В случаях и порядке, предусмотренных правилами внутреннего
                контроля, а также в зависимости от степени риска легализации
                (отмывания) доходов, полученных преступным путем, и
                финансирования терроризма субъектами финансового мониторинга
                применяются{' '}
                <span class="bold">усиленные и упрощенные меры</span> надлежащей
                проверки клиентов.{' '}
              </>{' '}
            </HeaderWithLine>
          </Reveal>
          <Reveal>
            <Sizebox height={40} />
            <TableWithData
              data={[
                {
                  option:
                    '"Упрощенные меры" надлежащей проверки клиентов (их представителей) и бенефициарных собственников применяются "при низком уровне риска" легализации (отмывания) доходов, полученных преступным путем, и финансирования терроризма.\nрименение упрощенных мер НПК включает в себя осуществление субъектом одного или нескольких следующих действий:\n1) сокращение частоты обновления идентификационных данных по клиенту;\n2) сокращение частоты проверки деловых отношений и изучения операций, осуществляемых клиентом через данный субъект финансового мониторинга;\n3) определение целей и характера деловых отношений на основе характера операций. \n\n"Упрощенные меры" надлежащей проверки клиентов "не применяются": при наличии у субъекта оснований полагать, что целью деловых отношений либо совершаемой клиентом операции является легализация (отмывание) доходов, полученных преступным путем, или финансирование терроризма; в случаях высокого уровня риска легализации (отмывания) доходов, полученных преступным путем, и финансирования терроризма.',
                },
                {
                  option:
                    '"Усиленные меры" надлежащей проверки клиентов (их представителей), бенефициарных собственников применяются при "высоком уровне риска" легализации (отмывания) доходов, полученных преступным путем, и финансирования терроризма.\n\nПри применении усиленных мер надлежащей проверки клиентов субъекты финансового мониторинга дополнительно осуществляют одно или несколько из следующих действий:\n1) установление причин, запланированных или проведенных операций; \n2) увеличение количества и частоты проверок и выявления характера операций, которые требуют дальнейшей проверки;\n2-1) получение сведений о роде деятельности и источнике финансирования совершаемых операций; \n3) получение разрешения руководящего работника организации на установление, продолжение деловых отношений с клиентами.',
                },
              ]}
              dataBtn={[{ name: 'Упрощенные меры' }, { name: 'Усиленные меры' }]}
              Height={'600px'}
            ></TableWithData>
          </Reveal>
          <Reveal>
            <Sizebox height={40} />

            <HeaderWithLine headerColor={'#1F3C88'} lineColor={'#CADEFC'}>
              <>
                В каких случаях субъектам запрещается дистанционное установление
                деловых отношений?{' '}
              </>
            </HeaderWithLine>
          </Reveal>

          <Sizebox height={80} />

          <VideoLine
            url={
              'https://videos.sproutvideo.com/embed/d390d1b1191ae9cf5a/88959ceba82653c0?playerColor=1f71a1'
            }
          />
          <Sizebox height={40} />
          <Reveal>
            <TextWithTitle
              title={
                'Субъекты в рамках НПК обязаны применять в отношении лиц, имеющих регистрацию, место жительства или место нахождения в государстве (территории), которые не выполняют и (или) недостаточно выполняют рекомендации ФАТФ, дополнительные меры по:'
              }
            />

            <Sizebox height={40} />
            <NotNumberedDots
              dotsColor={'#CADEFC'}
              list={[
                'проведению усиленных мер надлежащей проверки клиентов;',
                'пересмотру или при необходимости расторжению корреспондентских отношений с финансовыми организациями;',
              ]}
            />
            <Sizebox height={40} />
          </Reveal>
          <Reveal>
            <TextWithTitle
              title={
                'К дополнительным обязательствам субъектов финансового мониторинга в отношении ПДЛ помимо мер НПК относится:'
              }
            ></TextWithTitle>
            <Sizebox height={40} />
            <NumberedDots
              dotsColor={'#CADEFC'}
              list={[
                'осуществление проверки принадлежности и (или) причастности клиента (его представителя) и бенефициарного собственника к ПДЛ, его супруге (супругу) и близким родственникам;',
                'осуществление оценки репутации ПДЛ в отношении причастности его к случаям ОД/ФТ;',
                'получение письменного разрешения руководящего работника организации на установление, продолжение деловых отношений с такими клиентами;\n',
                'приятие доступных меры для установления источника происхождения денег и (или) иного имущества такого клиента (его представителя) и бенефициарного собственника;',
                'применение на постоянной основе усиленных мер НПК.\n' +
                  'Данные обязательства распространяются и в отношении ПДЛ, входящих в перечень публичных должностных лиц, утверждаемый Президентом Республики Казахстан, их супругов и близких родственников, которым присвоен высокий уровень риска;',
              ]}
            ></NumberedDots>
          </Reveal>

          <Reveal>
            <Sizebox height={40} />
            <TextWithTitle
              title={
                'К перечню публичных должностных лиц (ПДЛ), утверждаемому Президентом Республики Казахстан относится:'
              }
            ></TextWithTitle>
            <TableWithData
              data={[
                {
                  option:
                    'лицо, назначаемое или избираемое, занимающее какую-либо должность в законодательном, исполнительном, административном, судебном органах или вооруженных силах иностранного государства',
                },
                {
                  option:
                    'лицо, выполняющее какую-либо публичную функцию для иностранного государства',
                },
                {
                  option:
                    'лицо, занимающее руководящую должность в организациях, созданных странами на основе соглашений, которые имеют статус международных договоров',
                },
              ]}
              dataBtn={[
                { name: '1' },
                { name: '2' },
                { name: '3' },
              ]}
              Height={'150px'}
            ></TableWithData>
          </Reveal>

          <Reveal>
            <Sizebox height={40} />
            <Report_Information>
              При этом в отношении ПДЛ, утверждаемый Президентом Республики
              Казахстан со дня прекращения исполнения им своих полномочий в
              отношении ПДЛ, его супруге (супругу) и близким родственникам
              применяются меры, указанные выше в течение 12 месяцев.
            </Report_Information>
          </Reveal>
          <Reveal>
            <Sizebox height={40} />
            <TextWithTitle
              title={
                'В каких случая Субъектам финансового мониторинга запрещается устанавливать деловые отношения дистанционно согласно закону о '
              }
            />
          </Reveal>

          <Reveal>
            <ToolTipComponentWithLupa
           
            ></ToolTipComponentWithLupa>
          </Reveal>

          <></>

          <Sizebox height={40} />
          <Reveal>
            <HeaderWithLine headerColor={'#1F3C88'} lineColor={'#CADEFC'}>
              <>
                Теперь, когда Вы понимаете, когда и в каких случаях субъекты
                финансового мониторинга проводят{' '}
                <span class="bold">надлежащую проверку клиента,</span>
                перейдем к изучению темы{' '}
                <span class="bold">
                  операции с деньгами и (или) иным имуществом, подлежащие
                  финансовому мониторингу
                </span>
              </>{' '}
            </HeaderWithLine>
            <Sizebox height={40} />
          </Reveal>

          <Reveal>
            <NextLesson
              handleOnClick={() => {
                CheckCurrentChapter(id);
              }}
            />
          </Reveal>
        </LessonPage>
      );
    case 76:
      return (
        <LessonPage
          name={
            'Операции с деньгами и (или) иным имуществом, подлежащие финансовому мониторингу'
          }
          lecturer={'AML Academy'}
        >
          <Reveal>
            <Sizebox height={40} />
            <TextWithTitle title={'Согласно закону о ПОД/ФТ,'} />

            <Sizebox height={40} />
            <RandomParapraph>
                <span class="bold">Финансовый мониторинг -</span> это совокупность мер по сбору, обработке, анализу и использованию сведений и информации об операциях с деньгами и (или) иным имуществом, осуществляемых уполномоченным органом и субъектом финансового мониторинга в соответствии с Законом о ПОД/ФТ.
            </RandomParapraph>
            <Sizebox height={40} />
          </Reveal>
          <Reveal>
            <ImageLine img={image76}></ImageLine>
              <Sizebox height={40} />
              <RandomParapraph>
                  Законом о ПОД/ФТ определены пороговые операции с деньгами и (или) иным имуществом подлежащие финансовому мониторингу, т.е. операции равные либо превышающие пороговые значения.              </RandomParapraph>
          </Reveal>
          <Reveal>
            <Sizebox height={80} />

            <SimpleTable
              data={[
                [
                  'получение выигрыша в наличной форме по результатам проведения пари, азартной игры в игорных заведениях и лотереи, в том числе в электронной форме',
                  '=/> 1 000 000 тенге ',
                ],
                [
                  'совершение ломбардами операций с деньгами, ценными бумагами, драгоценными металлами и драгоценными камнями, ювелирными изделиями из них и иными ценностями (кроме монет национальной валюты, изготовленных из драгоценных металлов) в наличной или безналичной форме\n' +
                    '\n',
                  '=/> 3 000 000 тенге',
                ],
                [
                  'переводы денег за границу на счета (во вклады), открытые на анонимного владельца, поступление денег из-за границы со счета (вклада), открытого на анонимного владельца в наличной или безналичной форме;\n' +
                    '\n' +
                    'купля-продажа драгоценных металлов и драгоценных камней, ювелирных изделий из них в наличной или безналичной форме;\n' +
                    'зачисление или перевод на банковский счет клиента денег, осуществляемые физическим, юридическим лицом или иностранной структурой без образования юридического лица, имеющими соответственно регистрацию, место жительства или место нахождения в оффшорной зоне, а равно владеющими счетом в банке, зарегистрированном в оффшорной зоне, либо операции клиента с деньгами и (или) иным имуществом с указанной категорией лиц в наличной или безналичной форме \n' +
                    '\n',
                  '=/> 5 000 000 тенге',
                ],
                [
                  'платежи и переводы денег, осуществляемые клиентом в пользу другого лица на безвозмездной основе, в наличной или безналичной форме;\n' +
                    '\n' +
                    'сделки с акциями и паями паевых инвестиционных фондов, за исключением операций репо на организованном рынке методом открытых торгов, в наличной или безналичной форме;',
                  '=/> 7 000 000 тенге \n' + '\n',
                ],
                [
                  'покупка, продажа и обмен иностранной валюты через обменные пункты в наличной форме;\n' +
                    '\n' +
                    'снятие с банковского счета или зачисление на банковский счет клиента денег, а равно прием от клиента либо выдача клиенту наличных денег, за исключением случаев выплаты или получение страховой премии в наличной форме и внесения, перечисления добровольных пенсионных взносов в ЕНПФ и (или) ДНПФ, а также осуществления пенсионных выплат из ЕНПФ и (или) ДНПФ за счет добровольных пенсионных взносов в наличной форме;\n' +
                    '\n' +
                    'операции, совершаемые юридическими лицами, с момента государственной регистрации которых прошло менее трех месяцев, в наличной или безналичной форме;\n' +
                    '\n' +
                    'осуществление страховой выплаты или получение страховой премии в наличной форме;\n' +
                    '\n' +
                    'внесение, перечисление добровольных пенсионных взносов в ЕНПФ и (или) ДНПФ, а также осуществление пенсионных выплат из ЕНПФ и (или) ДНПФ за счет добровольных пенсионных взносов в наличной форме;\n' +
                    '\n' +
                    'сделки по оказанию услуг, в том числе подряда, перевозки, транспортной экспедиции, хранения, комиссии, доверительного управления имуществом, за исключением сейфовых операций по сдаче в аренду сейфовых ящиков, шкафов и помещений, в наличной форме;\n' +
                    ' получение денег по чеку или векселю в наличной форме;\n' +
                    '\n' +
                    'ввоз в Республику Казахстан либо вывоз из Республики Казахстан наличной валюты, документарных ценных бумаг на предъявителя, векселей, чеков, за исключением ввоза или вывоза, осуществляемого Национальным Банком Республики Казахстан, банками и Национальным оператором почты\n',
                  '=/> 10 000 000 тенге \n' + '\n',
                ],
                [
                  'получение или предоставление имущества по договору финансового лизинга в наличной или безналичной форме;\n' +
                    '\n' +
                    'сделки с облигациями и государственными ценными бумагами, за исключением операций репо на организованном рынке методом открытых торгов, в наличной или безналичной форме;\n' +
                    '\n' +
                    'приобретение (продажа) в наличной форме культурных ценностей, ввоз в Республику Казахстан либо вывоз из Республики Казахстан культурных ценностей;',
                  '=/> 45 000 000 тенге \n' + '\n',
                ],
                [
                  'заем по программам финансирования субъектов предпринимательства за счет средств Национального фонда Республики Казахстан в рамках облигационных займов субъектов квазигосударственного сектора в наличной или безналичной форме',
                  '=/> 50 000 000 тенге \n' + '\n',
                ],
                [
                  'трансграничный платеж и перевод с банковского счета или на банковский счет клиента денег в безналичной форме',
                  '=/> 100 000 000 тенге',
                ],
                [
                  'сделка с недвижимым имуществом, результатом совершения которой является переход права собственности на такое имущество',
                  '=/> 50 000 000 тенге',
                ],
              ]}
              columns={[
                'НР и Рекомендации входящие в состав',
                'Оцениваемая область',
              ]}
            />

            <Sizebox height={40} />
          </Reveal>
          <Reveal>
            <TextWithTitle
              title={
                'Чем отличается подозрительная операция от пороговой? (Курсором мышки перенесите описания под соответствующие определения.)'
              }
            ></TextWithTitle>
            <DoubleDraggableOption></DoubleDraggableOption>
            <Sizebox height={40} />
            <TextWithTitle
              text={
                'Если операция с деньгами и (или) иным имуществом осуществляется в иностранной валюте, эквивалент суммы в тенге рассчитывается по рыночному курсу обмена валюты на день совершения такой операции, определенному согласно законодательству Республики Казахстан.'
              }
            ></TextWithTitle>
          </Reveal>
          <Sizebox height={40} />
          <Reveal>
            <HeaderWithLine headerColor={'#1F3C88'} lineColor={'#CADEFC'}>
              <>
                Операции, имеющие характеристики, соответствующие типологиям,
                схемам и способам легализации (отмывания) преступных доходов и
                финансирования терроризма{' '}
              </>
            </HeaderWithLine>
          </Reveal>
          <Sizebox height={20} />
          <VideoLine
            url={
              'https://videos.sproutvideo.com/embed/1190d1b1191ae8c498/b8caa50df4b0d67b?playerColor=1f71a1'
            }
          />

          <Reveal>
            <Sizebox height={100} />
            <TextWithTitle
              title={
                'Какие операции подлежат финансовому мониторингу? (Курсором мышки переместите в ячейку операции, подлежащие финансовому мониторингу).'
              }
            ></TextWithTitle>
            <LupaDragZone
              options={[
                'А) Подозрительные операции',
                'Б) Все финансовые операции',
                'С) Операции граждан, не выполняющих рекомендации ФАТФ',
                'Д) Операции нотариуса, связанные с наличным расчетом',
                'Е) Операции, имеющие характеристики, соответствующие типологиям, схемам и способам легализации ОД/ФТ',
              ]}
              correctOptions={[
                'А) Подозрительные операции',
                'Е) Операции, имеющие характеристики, соответствующие типологиям, схемам и способам легализации ОД/ФТ',
              ]}
              imgUrl={strelka}
              Width={'450px'}
              Height={'200px'}
            ></LupaDragZone>
          </Reveal>
          <Sizebox height={40} />
          <Reveal>
            <HeaderWithLine headerColor={'#1F3C88'} lineColor={'#CADEFC'}>
              <>
                Теперь, когда Вы знаете{' '}
                <span class="bold">
                  {' '}
                  операции, подлежащие финансовому мониторингу,
                </span>
                &nbsp; а также различия между{' '}
                <span className="bold">
                  пороговыми и подозрительными операциями,
                </span>
                &nbsp; перейдем к изучению темы{' '}
                <span className="bold">
                  {' '}
                  сбор сведений и информации об операциях,
                </span>
                &nbsp; подлежащих финансовому мониторингу.
              </>{' '}
            </HeaderWithLine>
            <Sizebox height={40} />
          </Reveal>
          <Sizebox height={100} />
          <Reveal>
            <NextLesson
              handleOnClick={() => {
                CheckCurrentChapter(id);
              }}
            />
          </Reveal>
        </LessonPage>
      );
    case 77:
      return (
        <LessonPage
          name={
            'Сбор сведений и информации об операциях, подлежащих финансовому мониторингу'
          }
          lecturer={'AML Academy'}
        >
          <Reveal>
            <Sizebox height={40} />
            <TextWithTitle
              title={
                'Субъекты финансового мониторинга предоставляют в АФМ сведения и информацию об операциях, подлежащих финансовому мониторингу, которые содержат:'
              }
            />

            <Sizebox height={40} />
            <NotNumberedDots
              dotsColor={'#CADEFC'}
              list={[
                'информацию о субъекте финансового мониторинга;',
                'информацию об операции',
                'информацию об участниках операции;',
                'при необходимости, признак определения подозрительной операции и дополнительную информацию по операции;',
              ]}
            />
            <Sizebox height={40} />
          </Reveal>
          <Reveal>
            <Report_Warning>
              Информация предоставляется субъектами в электронном виде по
              установленной форме, <b>которая называется формой ФМ-1.</b>
            </Report_Warning>
          </Reveal>
          <Sizebox height={40} />
          <Reveal>
            <Report_Warning>
              <b>Сведения и информация об операциях</b>, подлежащих финансовому
              мониторингу, документально{' '}
              <b>
                фиксируются и предоставляются в АФМ субъектами финансового
                мониторинга
              </b>{' '}
              электронным способом посредством выделенных каналов связи на
              казахском или русском языке.
            </Report_Warning>
          </Reveal>
          <Reveal>
            <Sizebox height={40} />
            <Centered>
              <ImageLine img={MessageImage}></ImageLine>
            </Centered>
          </Reveal>
          <Sizebox height={40} />

          <Reveal>
            <TextWithLink
              text={
                '  Порядок предоставления субъектами финансового мониторинга сведений и информации об операциях, подлежащих финансовому мониторингу, и признаки определения подозрительной операции утверждены приказом Председателя Агентства Республики Казахстан по финансовому мониторингу по согласованию с государственными органами-регуляторами."Об утверждении Правил представления субъектами финансового мониторинга сведений и информации об операциях, подлежащих финансовому мониторингу, и признаков определения подозрительной операции - ИПС Әділет (zan.kz)".'
              }
              link={'https://adilet.zan.kz/rus/docs/V2200026924'}
            ></TextWithLink>
            <TextWithBold
              text={
                '"В приказе также описана форма ФМ-1, при этом «*» указаны строки обязательные к заполнению субъектами" финансового мониторинга при направлении сообщения в АФМ РК'
              }
          
            ></TextWithBold>
          </Reveal>
          <Sizebox height={40} />
          <Reveal>
            <HeaderWithLine headerColor={'#1F3C88'} lineColor={'#CADEFC'}>
              <>
                <span class="bold">
                  {' '}
                  Далее на таблице Вы можете ознакомиться с формой ФМ-1.
                </span>
              </>{' '}
            </HeaderWithLine>
            <Sizebox height={40} />
          </Reveal>

          <Reveal>
            <ComplexTable
              columns={['№ Реквизита', 'Наименование', 'Содержание']}
              data={[
                { '№ Реквизита': '1', Наименование: '2', Содержание: '3' },
                {
                  colSpan: 3,
                  '№ Реквизита':
                    '1. Сведения о форме сведений и информации об операции, подлежащей финансовому мониторингу (далее - форма ФМ-1)',
                },
                {
                  '№ Реквизита': '1.1',
                  Наименование: ['Номер формы ФМ-1*'],
                  Содержание: [
                    '1. Номер: 2.Связь с иной формой ФМ-1 (при наличии):',
                    '2.1. Номер связанной формы ФМ-1:',
                    '2.2. Дата связанной формы ФМ-1:',
                  ],
                },
                {
                  '№ Реквизита': '1.2',
                  Наименование: ['Дата формы ФМ-1*'],
                  Содержание: [''],
                },
                {
                  '№ Реквизита': '1.3',
                  Наименование: ['Вид документа', '(нужное выбрать)*', ''],
                  Содержание: [
                    '1. Новое сообщение',
                    '2. Корректировка непринятого сообщения(с указанием номера корректируемого сообщения)',
                    '3. Запрос замены сообщения (с указанием номера сообщения)',
                  ],
                },
                {
                  '№ Реквизита': '1.4',
                  Наименование: ['Состояние операции (нужное выбрать)'],
                  Содержание: [
                    '1. Совершено (время завершения операции)',
                    '2. Не совершено – отказ в проведении',
                    '3. Не совершено – для принятия решения',
                  ],
                },
                {
                  '№ Реквизита': '1.5',
                  Наименование: [
                    'Основание для подачи сообщения (нужное выбрать)*',
                  ],
                  Содержание: [
                    '1. Равна или превышает пороговую сумму',
                    '2. Подозрительная операция',
                    '3. Поле не активно',
                    '4. Совпадение с перечнем организаций и лиц, связанных с финансированием терроризма и экстремизма:',
                    '4.1 Приостановление расходных операций по банковским счетам',
                    '4.2 Приостановление исполнения указаний по платежам и переводам без использования банковского счета',
                    '4.3 Блокирование ценных бумаг',
                    '4.4 Отказ в проведении иных операций',
                    '4.5 Отказ в проведении операции по осуществлению страховой выплаты, по возврату страховой премии или ее части в случае досрочного прекращения договора страхования и вознаграждения в случае досрочного прекращения страхователем договора об оказании услуг брокерской деятельности',
                    '4.6. Совершение операций в соответствии с подпунктом 2) пункта 8 статьи 12 Закона о ПОД/ФТ',
                    '5. Поле не активно',
                    '6. Поле не активно',
                    '7. Поле не активно',
                    '8. Операции для обязательного изучения, признанные подозрительными субъектами финансового мониторинга, с фиксированием результатов такого изучения',
                    '9. Операции, имеющие характеристики, соответствующие типологиям, схемам и способам финансирования терроризма',
                    '10. Операции, имеющие характеристики, соответствующие типологиям, схемам и способам легализации (отмывания) преступных доходов',
                    '11. Совпадение с перечнем организаций и лиц, связанных с финансированием распространения оружия массового уничтожения:',
                    '11.1 Приостановление расходных операций по банковским счетам',
                    '11.2 Приостановление исполнения указаний по платежам и переводам без использования банковского счета',
                    '11.3 Блокирование ценных бумаг',
                    '11.4 Отказ в проведении иных операций',
                    '11.5 Отказ в проведении операции по осуществлению страховой выплаты, по возврату страховой премии или ее части в случае досрочного прекращения договора страхования и вознаграждения в случае досрочного прекращения страхователем договора об оказании услуг брокерской деятельности',
                    '11.6 Направление на приостановление операций, указанных в пункте 6 статьи 12-1 Закона ',
                    '12. Отказ в установлении деловых отношений:',
                    '12.1 В случае невозможности принятия мер, предусмотренных подпунктами 1), 2), 2-1) и 4) пункта 3 статьи 5 Закона',
                    '12.2 В случае наличия подозрений о том, что деловые отношения используются клиентом в целях легализации (отмывания) доходов, полученных преступным путем',
                    '12.3 В случае наличия подозрений о том, что деловые отношения используются клиентом в целях финансирования терроризма',
                    '13.1 В случае невозможности принятия мер, предусмотренных подпунктами 1), 2), 2-1), 4) и 6) пункта 3 статьи 5 Закона ',
                    '13.2 В случае наличия подозрений о том, что деловые отношения используются клиентом в целях легализации (отмывания) доходов, полученных преступным путем',
                    '13.3 В случае наличия подозрений о том, что деловые отношения используются клиентом в целях финансирования терроризма',
                    '14. Прекращение деловых отношений:',
                    '14.1 В случае наличия подозрений о том, что деловые отношения используются клиентом в целях легализации (отмывания) доходов, полученных преступным путем',
                    '14.2 В случае наличия подозрений о том, что деловые отношения используются клиентом в целях финансирования терроризма',
                  ],
                },
                {
                  colSpan: 3,
                  '№ Реквизита':
                    '2. Сведения о субъекте финансового мониторинга, направившем форму ФМ-1',
                },
                {
                  '№ Реквизита': '2.1',
                  Наименование: ['Код субъекта финансового мониторинга*'],
                  Содержание: [''],
                },
                {
                  '№ Реквизита': '2.2',
                  Наименование: ['Субъект финансового мониторинга*'],
                  Содержание: [
                    '1.1.Организационная форма:',
                    '1.2.Наименование:',
                    '1.2.1.Фамилия:',
                    '1.2.2.Имя:',
                    '1.2.3.Отчество (при наличии):',
                  ],
                },
                {
                  '№ Реквизита': '2.3',
                  Наименование: ['Реквизит не активен'],
                  Содержание: [''],
                },
                {
                  '№ Реквизита': '2.4',
                  Наименование: ['ИИН/БИН*'],
                  Содержание: [''],
                },
                {
                  '№ Реквизита': '2.5',
                  Наименование: ['Адрес местонахождения'],
                  Содержание: [
                    '1. Область (в том числе городов республиканского значения и столицы):',
                    '2. Район:',
                    '3. Населенный пункт (город/поселок/село), за исключением городов республиканского значения и столицы:',
                    '4. Наименование улицы/проспекта/микрорайона:',
                    '5. Номер дома:',
                    '6. Номер квартиры/офиса (при наличии):',
                    '7. Почтовый индекс:',
                  ],
                },
                {
                  '№ Реквизита': '2.6',
                  Наименование: ['Документ, удостоверяющий личность (для ФЛ)'],
                  Содержание: [''],
                },
                {
                  '№ Реквизита': '2.6.1',
                  Наименование: [
                    'Номер и серия документа, удостоверяющего личность (для ФЛ)',
                  ],
                  Содержание: ['1. Номер:', '2. Серия (при наличии):'],
                },
                {
                  '№ Реквизита': '2.6.2',
                  Наименование: [
                    'Кем выдан документ, удостоверяющий личность (для ФЛ)',
                  ],
                  Содержание: [''],
                },
                {
                  '№ Реквизита': '2.6.3',
                  Наименование: [
                    'Когда выдан документ, удостоверяющий личность (для ФЛ)',
                  ],
                  Содержание: [''],
                },
                {
                  '№ Реквизита': '2.7',
                  Наименование: ['Ответственный работник'],
                  Содержание: [
                    '1. Фамилия:',
                    '2. Имя:',
                    '3. Отчество (при наличии):',
                  ],
                },
                {
                  '№ Реквизита': '2.7.1',
                  Наименование: ['Должность ответственного работника'],
                  Содержание: [''],
                },
                {
                  '№ Реквизита': '2.8',
                  Наименование: ['Контактные телефоны*'],
                  Содержание: [''],
                },
                {
                  '№ Реквизита': '2.9',
                  Наименование: ['Электронная почта*'],
                  Содержание: [''],
                },
                {
                  colSpan: 3,
                  '№ Реквизита':
                    '3. Информация об операции, подлежащей финансовому мониторингу',
                },
                {
                  '№ Реквизита': '3.1',
                  Наименование: ['Номер операции *'],
                  Содержание: [''],
                },
                {
                  '№ Реквизита': '3.2',
                  Наименование: ['Код вида операции*'],
                  Содержание: [
                    '1. Код:',
                    '2. Информация об имуществе, подлежащем государственной регистрации:',
                    '2.1. Вид имущества:',
                    '2.2. Регистрационный номер имущества:',
                    '2.2.1. ISIN*',
                    '2.2.2. CFI',
                  ],
                },
                {
                  '№ Реквизита': '3.3',
                  Наименование: ['Код назначения платежа *'],
                  Содержание: [
                    '1. Код назначения платежа:',
                    '2. Невозможно установить',
                  ],
                },
                {
                  '№ Реквизита': '3.4',
                  Наименование: ['Количество участников операции*'],
                  Содержание: [''],
                },
                {
                  '№ Реквизита': '3.5',
                  Наименование: ['Код валюты операции*'],
                  Содержание: [''],
                },
                {
                  '№ Реквизита': '3.6',
                  Наименование: ['Сумма операции в валюте ее проведения*	'],
                  Содержание: [''],
                },
                {
                  '№ Реквизита': '3.7',
                  Наименование: ['Сумма операции в тенге*'],
                  Содержание: [''],
                },
                {
                  '№ Реквизита': '3.8',
                  Наименование: ['Основание совершения операции*'],
                  Содержание: [''],
                },
                {
                  '№ Реквизита': '3.9',
                  Наименование: [
                    'Дата и номер документа, на основании которого осуществляется операция',
                  ],
                  Содержание: ['1. Дата:', '2. Номер документа:'],
                },
                {
                  '№ Реквизита': '3.10',
                  Наименование: ['Код признака подозрительности операции	'],
                  Содержание: [''],
                },
                {
                  '№ Реквизита': '3.11',
                  Наименование: [
                    '1-й дополнительный код признака подозрительности операции',
                  ],
                  Содержание: [''],
                },
                {
                  '№ Реквизита': '3.12',
                  Наименование: [
                    '2-й дополнительный код признака подозрительности операции (при наличии)',
                  ],
                  Содержание: [''],
                },
                {
                  '№ Реквизита': '3.13',
                  Наименование: [
                    'Описание возникших затруднений квалификации операции как подозрительной',
                  ],
                  Содержание: [''],
                },
                {
                  '№ Реквизита': '3.14',
                  Наименование: ['Дополнительная информация по операции'],
                  Содержание: [''],
                },
                {
                  '№ Реквизита': '3.15',
                  Наименование: ['Адрес места совершения операции*'],
                  Содержание: ['- онлайн', '- офлайн*'],
                },
                {
                  '№ Реквизита': '3.16',
                  Наименование: [
                    'Место проведения сделки (необходимо выбрать)*:',
                  ],
                  Содержание: [
                    '1. Организованный рынок ценных бумаг',
                    '2. Неорганизованный рынок ценных бумаг',
                    '3. Иное (не установленное Законом Республики Казахстан "О рынке ценных бумаг"',
                  ],
                },
                {
                  '№ Реквизита': '3.17',
                  Наименование: [
                    'Количество ценных бумаг, реализуемых в сделке*',
                  ],
                  Содержание: [''],
                },
                {
                  colSpan: 3,
                  '№ Реквизита':
                    '4. Сведения об участниках операции, подлежащей финансовому мониторингу',
                },
                {
                  '№ Реквизита': '4.1',
                  Наименование: ['Участник (нужное выбрать)*'],
                  Содержание: [
                    '1. Плательщик по операции',
                    '2. Получатель по операции',
                    '3. Представитель плательщика',
                    '4. Представитель получателя',
                    '5. Лицо от имени и по поручению',
                    '6. Выгодоприобретатель',
                    '7. Застрахованный',
                  ],
                },
                {
                  '№ Реквизита': '4.2',
                  Наименование: [
                    'Клиент субъекта финансового мониторинга (нужное выбрать)*',
                  ],
                  Содержание: ['1. Не является', '2. Является'],
                },
                {
                  '№ Реквизита': '4.3',
                  Наименование: ['Вид участника*'],
                  Содержание: [''],
                },
                {
                  '№ Реквизита': '4.4',
                  Наименование: ['Резидентство*'],
                  Содержание: [''],
                },
                {
                  '№ Реквизита': '4.5',
                  Наименование: ['Тип участника операции (нужное выбрать)*'],
                  Содержание: [
                    '1. Юридическое лицо',
                    '2. Физическое лицо',
                    '3. Индивидуальны предприниматель',
                  ],
                },
                {
                  '№ Реквизита': '4.6',
                  Наименование: [
                    'Иностранное публичное должностное лицо (нужное выбрать)*',
                  ],
                  Содержание: [
                    '1. Не является',
                    '2. Является',
                    '3. Аффилиированный(-ая) с иностранным публичным должностным лицом',
                  ],
                },
                {
                  '№ Реквизита': '4.6.1',
                  Наименование: [
                    'Публичное должностное лицо, супруг(супруга) или их близкие родственники (нужное выбрать)',
                  ],
                  Содержание: [
                    '1. Не является',
                    '2. Является',
                    '3. Аффилиированный(-ая) с иностранным публичным должностным лицом',
                  ],
                },
                {
                  '№ Реквизита': '4.7',
                  Наименование: [
                    'Банк/биржа цифровых активов участника операции',
                  ],
                  Содержание: [
                    '1.1. Местонахождение филиала*:',
                    '1.2. Наименование банка/биржи цифровых активов*:',
                    '1.2.1. Наименование Системы денежных переводов (далее – СДП):',
                    '1.3. Код банка/филиала:',
                    '1.4. Номер счета/адрес кошелька цифровых активов участника:',
                    '1.5. Сведения о корреспондентских счетах, участвующих в операции:',
                    '1.5.1. Местонахождение банка:',
                    '1.5.2. Наименование банка:',
                  ],
                },
                {
                  '№ Реквизита': '4.8',
                  Наименование: [
                    'Наименование участника операции (для юридических лиц, иностранной структуры без образования юридического лица)*',
                  ],
                  Содержание: [
                    '1.Участник:',
                    '1.1. Организационная форма:',
                    '1.2. Наименование:',
                    '2. Невозможно установить',
                    '1.1. Организационная форма:',
                    '1.2. Наименование:',
                    '2. Невозможно установить',
                  ],
                },
                {
                  '№ Реквизита': '4.9',
                  Наименование: ['Учредители участника (для ЮЛ)*'],
                  Содержание: [
                    '1.1. Организационная форма:',
                    '2.1. Наименование:',
                    '2.1.1. Фамилия:',
                    '2.1.2. Имя:',
                    '2.1.3. Отчество (при наличии):',
                    '3. Резидентство:',
                  ],
                },
                {
                  '№ Реквизита': '4.10',
                  Наименование: ['Первый руководитель (для ЮЛ)'],
                  Содержание: [
                    '1. Фамилия:',
                    '2. Имя:',
                    '3. Отчество (при наличии):',
                  ],
                },
                {
                  '№ Реквизита': '4.10.1',
                  Наименование: [
                    'Бенефициарный собственник участника, выявленный субъектом финансового мониторинга в результате надлежащей проверки клиента и отличающийся от регистрационных данных (заполняется по клиентам- юридическим лицам, иностранной структуры без образования юридического лица)',
                  ],
                  Содержание: [
                    '1. Фамилия',
                    '2. Имя:',
                    '3. Отчество (при наличии):',
                    '4. Гражданство:',
                    '5. Дата рождения (для нерезидента):',
                    '6. Документ, удостоверяющий личность (при наличии)',
                    '7. Номер и серия документа, удостоверяющего личность (при наличии)',
                  ],
                },
                {
                  '№ Реквизита': '4.10.2',
                  Наименование: [
                    'Резидентство бенефициарного собственника участника',
                  ],
                  Содержание: [
                    '1. Является резидентом РК',
                    '2. Не является резидентом РК (указать страну резидентства)',
                  ],
                },
                {
                  '№ Реквизита': '4.10.3',
                  Наименование: [
                    'ИИН бенефициарного собственника участника (для нерезидента - иной идентификационный номер)',
                  ],
                  Содержание: [''],
                },
                {
                  '№ Реквизита': '4.12',
                  Наименование: ['Общий классификатор видов ОКЭД'],
                  Содержание: [''],
                },
                {
                  '№ Реквизита': '4.13',
                  Наименование: ['ИИН/БИН*'],
                  Содержание: [''],
                },
                {
                  '№ Реквизита': '4.14',
                  Наименование: ['Фамилия, имя, отчество (для ФЛ и ИП)'],
                  Содержание: [
                    '1.1. Фамилия:',
                    '1.2. Имя:',
                    '1.3. Отчество (при наличии):',
                    '2.1. Невозможно установить',
                  ],
                },
                {
                  '№ Реквизита': '4.15',
                  Наименование: ['Документ, удостоверяющий личность'],
                  Содержание: [''],
                },
                {
                  '№ Реквизита': '4.16',
                  Наименование: [
                    'Номер и серия документа, удостоверяющего личность',
                  ],
                  Содержание: ['1. Номер:', '2. Серия (при наличии):'],
                },
                {
                  '№ Реквизита': '4.17',
                  Наименование: ['Кем выдан документ, удостоверяющий личность'],
                  Содержание: [''],
                },
                {
                  '№ Реквизита': '4.18',
                  Наименование: [
                    'Когда выдан документ, удостоверяющий личность',
                  ],
                  Содержание: [''],
                },
                {
                  '№ Реквизита': '4.19',
                  Наименование: [
                    'Дата рождения (для физических лиц и индивидуальных предпринимателей)',
                  ],
                  Содержание: [''],
                },
                {
                  '№ Реквизита': '4.20',
                  Наименование: [
                    'Место рождения (для физических лиц и индивидуальных предпринимателей)',
                  ],
                  Содержание: [''],
                },
                {
                  '№ Реквизита': '4.21',
                  Наименование: [
                    'Юридический адрес (для юридических лиц – юридический адрес, для физических ли - адрес места регистрации)',
                  ],
                  Содержание: [
                    '1. Область (в том числе городов республиканского значения и столицы):',
                    '2. Район:',
                    '3. Населенный пункт (город/поселок/село, за исключением городов республиканского значения и столицы):',
                    '4. Наименование улицы/проспекта/микрорайона:',
                    '5. Номер дома:',
                    '6. Номер квартиры/офиса (при наличии):',
                    '7. Почтовый индекс:',
                  ],
                },
                {
                  '№ Реквизита': '4.22',
                  Наименование: ['Номер контактного телефона'],
                  Содержание: [''],
                },
                {
                  '№ Реквизита': '4.23',
                  Наименование: ['Электронная почта'],
                  Содержание: [''],
                },
                {
                  '№ Реквизита': '4.24',
                  Наименование: [
                    'Фактический адрес (для юридических лиц – адрес местонахождения, для физических лиц - адрес места проживания)',
                  ],
                  Содержание: [
                    '1. Область (в том числе городов республиканского значения и столицы):',
                    '2. Район:',
                    '3. Населенный пункт (город/поселок/село, за исключением городов республиканского значения и столицы):',
                    '4. Наименование улицы/проспекта/ микрорайона:',
                    '5. Номер дома:',
                    '6. Номер квартиры/офиса (при наличии):',
                    '7. Почтовый индекс:',
                  ],
                },
                {
                  '№ Реквизита': '4.25',
                  Наименование: [
                    'Дополнительная информация об участнике операции',
                  ],
                  Содержание: [''],
                },
                {
                  '№ Реквизита': '4.26',
                  Наименование: ['Субсчет участника операции*'],
                  Содержание: [''],
                },
              ]}
            ></ComplexTable>
            <Sizebox height={40}></Sizebox>
          </Reveal>
          <Reveal>
            <HeaderWithLine headerColor={'#1F3C88'} lineColor={'#CADEFC'}>
              <>
                <span class="bold">
                  {' '}
                  Информации об операциях, подлежащих финансовому мониторингу в
                  зависимости от характеристики операции и суммы операции
                  направляется в следующие сроки:
                </span>
              </>{' '}
            </HeaderWithLine>
            <Sizebox height={40} />
          </Reveal>

          <Reveal>
            <TableWithTable
              dataBtn={[
                {
                  name: '1 вкладка',
                  type: 'simpleTable',
                  mainRow:
                    'Сроки предоставления в АФМ не позднее рабочего дня, следующего за днем совершения (пороговые операции)',
                },
                {
                  name: '2 вкладка',
                  type: 'simpleTable',
                  mainRow:
                    'Сроки предоставления в АФМ при признании операции в качестве подозрительной незамедлительно до ее проведения (до проведения подозрительной операции)',
                },
                {
                  name: '3 вкладка',
                  type: 'simpleTable',
                  mainRow:
                    'Сроки предоставления в АФМ операции которые не были признаны подозрительными до их проведения не позднее 24-х часов после признания операции подозрительной (в случае выявления подозрительной операции после ее проведения)',
                },
                {
                  name: '4 вкладка',
                  type: 'simpleTable',
                  mainRow:
                    'Сроки предоставления в АФМ операции не позднее рабочего дня, следующего за днем принятия СФМ соответствующего решения (совершения действия)',
                },
                {
                  name: '5 вкладка',
                  type: 'simpleTable',
                  mainRow:
                    'Сроки предоставления в АФМ операции не позднее рабочего дня, следующего за днем признания операции клиента, соответствующие характеристике и фиксирования результатов такого признания',
                },
              ]}

              simpleTableProps={[
                {
                  columns: ['Характеристика операции', 'Сумма'],
                  data: [
                    [
                      'получение выигрыша в наличной форме по результатам проведения пари, азартной игры в игорных заведениях и лотереи, в том числе в электронной форме ',
                      '=/> 1 000 000 тенге',
                    ],
                    [
                      'совершение ломбардами операций с деньгами, ценными бумагами, драгоценными металлами и драгоценными камнями, ювелирными изделиями из них и иными ценностями (кроме монет национальной валюты, изготовленных из драгоценных металлов) в наличной или безналичной форме',
                      '=/> 3 000 000 тенге',
                    ],
                    [
                      'переводы денег за границу на счета (во вклады), открытые на анонимного владельца, поступление денег из-за границы со счета (вклада), открытого на анонимного владельца в наличной или безналичной форме;\n\nкупля-продажа драгоценных металлов и драгоценных камней, ювелирных изделий из них в наличной или безналичной форме;\n\nзачисление или перевод на банковский счет клиента денег, осуществляемые физическим, юридическим лицом или иностранной структурой без образования юридического лица, имеющими соответственно регистрацию, место жительства или место нахождения в оффшорной зоне, а равно владеющими счетом в банке, зарегистрированном в оффшорной зоне, либо операции клиента с деньгами и (или) иным имуществом с указанной категорией лиц в наличной или безналичной форме ',
                      '=/> 5 000 000 тенге',
                    ],
                    [
                      'платежи и переводы денег, осуществляемые клиентом в пользу другого лица на безвозмездной основе, в наличной или безналичной форме;\n\nсделки с акциями и паями паевых инвестиционных фондов, за исключением операций репо на организованном рынке методом открытых торгов, в наличной или безналичной форме;',
                      '=/> 7 000 000 тенге',
                    ],
                    [
                      'покупка, продажа и обмен иностранной валюты через обменные пункты в наличной форме;\n\nснятие с банковского счета или зачисление на банковский счет клиента денег, а равно прием от клиента либо выдача клиенту наличных денег, за исключением случаев выплаты или получение страховой премии в наличной форме и внесения, перечисления добровольных пенсионных взносов в ЕНПФ и (или) ДНПФ, а также осуществления пенсионных выплат из ЕНПФ и (или) ДНПФ за счет добровольных пенсионных взносов в наличной форме;\n\nоперации, совершаемые юридическими лицами, с момента государственной регистрации которых прошло менее трех месяцев, в наличной или безналичной форме;\n\nосуществление страховой выплаты или получение страховой премии в наличной форме;\n\nвнесение, перечисление добровольных пенсионных взносов в ЕНПФ и (или) ДНПФ, а также осуществление пенсионных выплат из ЕНПФ и (или) ДНПФ за счет добровольных пенсионных взносов в наличной форме;\n\nсделки по оказанию услуг, в том числе подряда, перевозки, транспортной экспедиции, хранения, комиссии, доверительного управления имуществом, за исключением сейфовых операций по сдаче в аренду сейфовых ящиков, шкафов и помещений, в наличной форме;\n\nполучение денег по чеку или векселю в наличной форме;\n\nввоз в Республику Казахстан либо вывоз из Республики Казахстан наличной валюты, документарных ценных бумаг на предъявителя, векселей, чеков, за исключением ввоза или вывоза, осуществляемого Национальным Банком Республики Казахстан, банками и Национальным оператором почты',
                      '=/> 10 000 000 тенге',
                    ],
                    [
                      'получение или предоставление имущества по договору финансового лизинга в наличной или безналичной форме;\n\nсделки с облигациями и государственными ценными бумагами, за исключением операций репо на организованном рынке методом открытых торгов, в наличной или безналичной форме;\n\nприобретение (продажа) в наличной форме культурных ценностей, ввоз в Республику Казахстан либо вывоз из Республики Казахстан культурных ценностей;',
                      '=/> 45 000 000 тенге',
                    ],
                    [
                      'заем по программам финансирования субъектов предпринимательства за счет средств Национального фонда Республики Казахстан в рамках облигационных займов субъектов квазигосударственного сектора в наличной или безналичной форме',
                      '=/> 50 000 000 тенге',
                    ],
                    [
                      'трансграничный платеж и перевод с банковского счета или на банковский счет клиента денег в безналичной форме',
                      '=/> 100 000 000 тенге',
                    ],
                    [
                      'сделка с недвижимым имуществом, результатом совершения которой является переход права собственности на такое имущество',
                      '=/> 50 000 000 тенге',
                    ],
                  ],
                },
                {
                  columns: ['Характеристика операции', 'Сумма'],
                  data: [
                    [
                      'подозрительные операции (признанные подозрительными в соответствии с программами реализации правил внутреннего контроля субъекта финансового мониторинга)',
                      'В не зависимости от суммы',
                    ],
                  ],
                },
                {
                  columns: ['Характеристика операции', 'Сумма'],
                  data: [
                    [
                      'которые не были признаны подозрительными до их проведения\n\n (признанные подозрительными в соответствии с программами реализации правил внутреннего контроля субъекта финансового мониторинга)',
                      'В не зависимости от суммы',
                    ],
                  ],
                },
                {
                  columns: ['Характеристика операции', 'Сумма'],
                  data: [
                    [
                      'сообщения о фактах отказа физическому, юридическому лицу или иностранной структуре без образования юридического лица в установлении деловых отношений, прекращения деловых отношений с клиентом, отказа в проведении операции с деньгами и (или) иным имуществом в случае наличия подозрений о том, что деловые отношения используются клиентом в целях ОД/ФТ, а также мерах по замораживанию операций с деньгами и (или) иным имуществом, предусмотренных пунктом 1-1 статьи 13 Закона о ПОД/ФТ',
                      'В не зависимости от суммы',
                    ],
                  ],
                },
                {
                  columns: ['Характеристика операции', 'Сумма'],
                  data: [
                    [
                      'операции клиента, имеющие характеристики, соответствующие типологиям, схемам и способам легализации (отмывания) преступных доходов и финансирования терроризма',
                      'В не зависимости от суммы',
                    ],
                  ],
                },
              ]}
            ></TableWithTable>
            <Sizebox height={60}></Sizebox>
          </Reveal>

          <Reveal>
            <Centered>
              {' '}
              <TextWithTitle
                title={
                  'В каких случаях определенные субъекты финансового мониторинга не представляют сведения в уполномоченный орган?'
                }
              ></TextWithTitle>
            </Centered>
            <VideoLine
              url={
                'https://videos.sproutvideo.com/embed/7090d1b1191ae9c8f9/fecda4e3e1f59b44?playerColor=1f71a1'
              }
            />
          </Reveal>

          <Sizebox height={80} />

          <Reveal />

          <Reveal>
            <Centered>
              <BoxOfThree
                question="При проведении анализа информации, полученной в соответствии с Законом о ПОД/ФТ, АФМ в случае необходимости направляет субъекту финансового мониторинга запрос: "
                answer="React is a JavaScript library for building user interfaces."
                flipEnabled={false}
                width="43%"
                height="230px"
              ></BoxOfThree>
            </Centered>
            <Sizebox height={40} />
            <Centered>
              <BoxOfThree
                question="на предоставление необходимых информации, сведений и документов, на который субъект финансового мониторинга обязан предоставить необходимые информацию, сведения и документы в течение трех рабочих дней со дня получения соответствующего запроса "
                answer="Открыть 1"
                width="43%"
                height="230px"
                isOpenInitially={true}
              ></BoxOfThree>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              <BoxOfThree
                question="связанный с анализом подозрительной операции, субъект финансового мониторинга обязан предоставить необходимые информацию, сведения и документы не позднее рабочего дня со дня получения запроса"
                answer="Открыть 2"
                width="43%"
                height="230px"
                isOpenInitially={true}
              ></BoxOfThree>
            </Centered>
            <Sizebox height={40} />
          </Reveal>
          <Reveal>
            <Report_Warning>
              При этом, когда для обработки запроса требуется дополнительное
              время, уполномоченный орган вправе по письменному обращению
              субъекта финансового мониторинга продлить срок{' '}
              <b>не более чем на десять рабочих дней.</b>
            </Report_Warning>
          </Reveal>
          <Sizebox height={40}></Sizebox>
          <Reveal>
            <Report_Warning>
              <b>
                Расходы, связанные с передачей в уполномоченный орган сведений
              </b>{' '}
              об операции, подлежащей финансовому мониторингу, полученных при
              проведении надлежащей проверки клиента, <b>несут субъекты </b>
              финансового мониторинга.
            </Report_Warning>
            <Sizebox height={40}></Sizebox>
          </Reveal>

          <Reveal>
            <QuizWithCardComponent
              questions={[
                {
                  question:
                    'Ситуация 1: Вы являетесь субъектом финансового мониторинга, прежде чем провести операцию с клиентом Вы выявили, что данная операция является подозрительной. В какой срок Вам необходимо направить сообщение в уполномоченные орган по финансовому мониторингу?',
                  options: [
                    {
                      question: 'На следующий рабочий день',
                      answer: 'Неправильно',
                    },
                    {
                      question:
                        'На третий день после выявления подозрительной операции ',
                      answer: 'Неправильно',
                    },
                    { question: 'Незамедлительно', answer: 'Правильно!' },
                  ],
                  correctOptionIndex: 2,
                },
                {
                  question:
                    'Ситуация 2: Вы являетесь субъектом финансового мониторинга, Вы провели операцию клиента 1 ноября и на тот момент данная операция не вызывала у Вас подозрения. 15 ноября спустя две недели Вы проанализировали вновь проведенную операцию и выявили, что она является подозрительной. В какой срок Вам нужно направить данную операцию в уполномоченный орган?',
                  options: [
                    {
                      question:
                        'операция не подлежит направлению, так как подозрительные операции направляются незамедлительно',
                      answer: 'Неправильно',
                    },
                    {
                      question:
                        'не позднее 24-х часов после признания операции подозрительной  ',
                      answer: 'Правильно!',
                    },
                    {
                      question:
                        'не позднее трех рабочих дней со дня признания операции подозрительной',
                      answer: 'Неправильно',
                    },
                  ],
                  correctOptionIndex: 1,
                },
                {
                  question:
                    'Ситуация 3: Вы осуществляете деятельность по реализации драгоценных металлов. Сегодня у Вас прошла операция с клиентом, который закупил ювелирные изделия на сумму равной 4 миллиона тенге. Подлежит ли направлению данная операция в уполномоченный орган не позднее рабочего дня следующего за днем совершения операции? Какое из нижеуказанных обоснований Вы выберете?',
                  options: [
                    {
                      question:
                        'Так как сумма не достигает пороговой суммы, операция не подлежит направлению в АФМ в качестве пороговой операции',
                      answer: 'Правильно!',
                    },
                    {
                      question:
                        'Так как характеристика операции не соответствует критериям пороговой операции, операция не подлежит направлению в АФМ',
                      answer: 'Неправильно',
                    },
                    {
                      question:
                        'Так как сумма операции является подозрительной, ее необходимо направить в АФМ незамедлительно',
                      answer: 'Неправильно',
                    },
                  ],
                  correctOptionIndex: 0,
                },

                // Добавьте сколько угодно вопросов...
              ]}
            />
          </Reveal>

          <Sizebox height={40} />
          <Reveal>
            <HeaderWithLine headerColor={'#1F3C88'} lineColor={'#CADEFC'}>
              <>
                Теперь, когда Вы знаете в какие сроки и по какой форме
                направляются сведения по финансовым операциям, а также
                предоставляются иные сведения в уполномоченный орган{' '}
                <span class="bold">
                  перейдем к изучению темы целевые финансовые санкции,
                  относящиеся к предупреждению и предотвращению терроризма и
                  финансирования терроризма
                </span>
              </>{' '}
            </HeaderWithLine>
            <Sizebox height={40} />
          </Reveal>
          <NextLesson
            handleOnClick={() => {
              CheckCurrentChapter(id);
            }}
          />
        </LessonPage>
      );
    case 78:
      return (
        <LessonPage
          name={
            'Целевые финансовые санкции, относящиеся к предупреждению и предотвращению терроризма и финансирования терроризма'
          }
          lecturer={'AML Academy'}
        >
          <Reveal>
            <Sizebox height={40} />
            <HeaderWithLine headerColor={'#1F3C88'} lineColor={'#CADEFC'}>
              <>
                Целевые финансовые санкции, относящиеся к предупреждению и
                предотвращению терроризма и финансирования терроризма
              </>
            </HeaderWithLine>
          </Reveal>

          <Sizebox height={80} />
          <Reveal>
            <ImageLine img={image77} height={600}></ImageLine>
          </Reveal>
          <Reveal>
            <Sizebox height={40} />
            <HeaderWithLine headerColor={'#1F3C88'} lineColor={'#CADEFC'}>
              <>
                АФМ в соответствии с Законом о ПОД/ФТ{' '}
                <span class="bold">составляет</span> Перечень организаций и лиц,
                связанных с финансированием терроризма и экстремизма,{' '}
                <span class="bold">размещает</span> его на своем
                интернет-ресурсе и <span class="bold">направляет</span>{' '}
                соответствующим государственным органам и организациям в
                электронном виде.
              </>
            </HeaderWithLine>
          </Reveal>
          <Reveal>
            <Sizebox height={40} />
            <Centered>
            <ImageLine img={image78} height={600}></ImageLine>
            </Centered>
          </Reveal>
          <Reveal>
            <Sizebox height={80} />
            <HeaderWithLine headerColor={'#1F3C88'} lineColor={'#CADEFC'}>
              <>
                АФМ для формирования Перечня организаций и лиц, связанных с
                финансированием терроризма и экстремизма использует данные
                направляемые:{' '}
              </>
            </HeaderWithLine>
          </Reveal>

          <Reveal>
            <DropdownGlossaryList
              list={[
                {
                  title:
                    'Комитетом по правовой статистике Генеральной прокуратуры РК',
                  description:
                    'вступившее в законную силу решение суда Республики Казахстан о ликвидации организации в связи с осуществлением ею террористической деятельности и (или) экстремизма; вступившее в законную силу решение суда Республики Казахстан о признании организации, осуществляющей террористическую деятельность или экстремизм на территории Республики Казахстан и (или) другого государства, террористической или экстремистской, в том числе об установлении изменения ею своего наименования; вступивший в законную силу приговор суда Республики Казахстан о признании физического лица виновным в совершении экстремистского и (или) террористического преступлений; признаваемые в Республике Казахстан в соответствии с международными договорами Республики Казахстан и законами Республики Казахстан приговоры (решения) судов и решения иных компетентных органов иностранных государств в отношении организаций или физических лиц, осуществляющих террористическую деятельность.\n\n',
                },
                {
                  title: 'Министерством иностранных дел РК',
                  description:
                    'нахождение организации или физического лица в перечне организаций и лиц, связанных с террористическими организациями или террористами, составляемом международными организациями, осуществляющими противодействие терроризму, или уполномоченными ими органами в соответствии с международными договорами Республики Казахстан; исключение организации или физического лица из перечня организаций и лиц, связанных с террористическими организациями или террористами, составляемого международными организациями, осуществляющими противодействие терроризму, или уполномоченными ими органами в соответствии с международными договорами Республики Казахстан.\n\n',
                },
                {
                  title: 'Генеральной прокуратурой РК (ГП РК)',
                  description:
                    'составляемые ГП РК списки организаций и физических лиц, причастных к террористической и экстремистской деятельности, на основании данных правоохранительных и специальных государственных органов Республики Казахстан; список физических лиц, составляемый ГП РК, на основании положительного заключения правоохранительных или специальных государственных органов Республики Казахстан об исключении лица, отбывшего уголовное наказание, из перечня организаций и лиц, связанных с финансированием терроризма и экстремизма;  прекращение действия обстоятельств, послуживших основаниями для их включения в списки организаций и лиц, причастных к террористической и экстремистской деятельности, составляемые ГП РК, на основании данных правоохранительных и специальных государственных органов Республики Казахстан.  ',
                },
                {
                  title:
                    'Советом безопасности организации объединенных наций (СОВБЕЗ ООН)',
                  description:
                    'применение к организации или физическому лицу целевых финансовых санкций в соответствии с резолюциями СОВБЕЗ ООН, относящимися к предупреждению и предотвращению терроризма и финансирования терроризма, либо включение организации и (или) физического лица в санкционные перечни, составляемые комитетами СОВБЕЗ ООН, созданными на основании резолюций СОВБЕЗ ООН, относящихся к предупреждению и предотвращению терроризма и финансирования терроризма; отмена целевых финансовых санкций, примененных к организации или физическому лицу в соответствии с резолюциями СОВБЕЗ ООН, относящимися к предупреждению и предотвращению терроризма и финансирования терроризма, либо исключение организации или физического лица из санкционных перечней, составляемых комитетами СОВБЕЗ ООН, созданными на основании резолюций СОВБЕЗ ООН, относящихся к предупреждению и предотвращению терроризма и финансирования терроризма.',
                },
              ]}
              headerTextColor={'#170F49'}
              activeHeaderTextColor={'#1F3C88'}
              textColor={'#6F6C90'}
              tabsTextColor={'#3A3939'}
              tabsBackgroundColor={'#BAD6FF'}
            />
          </Reveal>
          <Reveal>
            <Sizebox height={40} />
            <HeaderWithLine headerColor={'#1F3C88'} lineColor={'#CADEFC'}>
              <>
                Перечень организаций и лиц, связанных с финансированием
                терроризма и экстремизма{' '}
                <span className="bold">обновляется</span> также в соответствии с
                информацией, предоставляемой в АФМ вышеуказанными
                государственными органами.
              </>
            </HeaderWithLine>
            <Sizebox Height={80} />
          </Reveal>
          <Reveal>
            <TextWithTitle
              title={
                'Информации каких органов АФМ использует для формирования  Перечня организаций и лиц, связанных с финансированием терроризма и экстремизма:'
              }
            ></TextWithTitle>
            <DragAndDropZone
              title={''}
              options={[
                '- Комитета по правовой статистике и специальным учетам Генеральной прокуратуры РК;',
                '- Интерпол;',
                '- Министерства иностранных дел РК; ',
                '- Службы внешней разведки;',
                '- Академии уполномоченного органа;',
                '- Генеральной прокуратуры РК;',
                '- Научно исследовательского института по анализу террористических актов;',
                '- Совета Безопасности ООН.',
              ]}
              correctOptions={[
                '- Комитета по правовой статистике и специальным учетам Генеральной прокуратуры РК;',
                '- Министерства иностранных дел РК; ',
                '- Генеральной прокуратуры РК;',
                '- Совета Безопасности ООН.',
              ]}
            ></DragAndDropZone>
          </Reveal>

          <Reveal>
            <Sizebox height={40} />
            <TextWithTitle
              title={
                'Основаниями для исключения организации и физических лиц из Перечня организаций и лиц, связанных с финансированием терроризма и экстремизма являются:'
              }
            />

            <Sizebox height={40} />
            <NotNumberedDots
              dotsColor={'#CADEFC'}
              list={[
                'отмена решения суда Республики Казахстан о ликвидации организации в связи с осуществлением ею террористической деятельности и (или) экстремизма в случае незавершения по ней ликвидационного производства, а также о признании организации, осуществляющей террористическую деятельность или экстремизм на территории Республики Казахстан и (или) другого государства, террористической или экстремистской;',
                'отмена приговора суда Республики Казахстан о признании физического лица виновным в совершении экстремистского и (или) террористического преступлений;',
                'отмена признанных в Республике Казахстан в соответствии с международными договорами Республики Казахстан и законами Республики Казахстан приговоров (решений) судов и решений иных компетентных органов иностранных государств в отношении организаций или физических лиц, осуществляющих террористическую деятельность;',
                'наличие документально подтвержденных данных о смерти физического лица, включенного в Перечень',
                'наличие документально подтвержденных данных о погашении или снятии судимости с физического лица, осужденного за совершение экстремистского и (или) террористического преступления',
                'список физических лиц, составляемый ГП РК, на основании положительного заключения правоохранительных или специальных государственных органов Республики Казахстан об исключении лица, отбывшего уголовное наказание, из Перечня.\nПорядок подготовки заключения правоохранительных или специальных государственных органов Республики Казахстан об исключении физического лица, отбывшего уголовное наказание, из Перечня определяется совместным нормативным правовым актом правоохранительных и специальных государственных органов Республики Казахстан и уполномоченного органа',
                'исключение организации или физического лица из перечня организаций и лиц, связанных с террористическими организациями или террористами, составляемого международными организациями, осуществляющими противодействие терроризму, или уполномоченными ими органами в соответствии с международными договорами Республики Казахстан',
                'отмена целевых финансовых санкций, примененных к организации или физическому лицу в соответствии с резолюциями СОВБЕЗ ООН, относящимися к предупреждению и предотвращению терроризма и финансирования терроризма, либо исключение организации или физического лица из санкционных перечней, составляемых комитетами СОВБЕЗ ООН, созданными на основании резолюций СОВБЕЗ ООН, относящихся к предупреждению и предотвращению терроризма и финансирования терроризма',
                'прекращение действия обстоятельств, послуживших основаниями для их включения в списки организаций и лиц, причастных к террористической и экстремистской деятельности, составляемые ГП РК, на основании данных правоохранительных и специальных государственных органов Республики Казахстан.',
              ]}
            />
            <Sizebox height={40} />
          </Reveal>
          <Reveal>
            <Sizebox height={40} />
            <Report_Warning>
              <>
                АФМ незамедлительно,{' '}
                <span className="bold">
                  но не позднее одного рабочего дня со дня принятия решения об
                  исключении{' '}
                </span>
                организации или физического лица из Перечня организаций и лиц,
                связанных с финансированием терроризма и экстремизма{' '}
                <span className="bold">размещает</span> на своем
                интернет-ресурсе такое решение и направляет его соответствующим
                государственным органам Республики Казахстан и организациям.
              </>
            </Report_Warning>
            <Sizebox height={40} />
          </Reveal>
          <Reveal>
            <TextWithTitle
              title={
                'Списки организаций и физических лиц, причастных к террористической и экстремистской деятельности составляемые ГП РК на основании данных правоохранительных и специальных государственных органов Республики Казахстан должны содержать следующие сведения:'
              }
            ></TextWithTitle>
          </Reveal>
          <Reveal>
            <TableWithData
              data={[
                {
                  option:
                    '"в отношении физического лица:"\nданные документа, удостоверяющего его личность;\nиндивидуальный идентификационный номер;\nместо жительства;\nсведения о наличии движимого и недвижимого имущества;\nсведения об участии в юридических лицах, филиалах и представительствах и регистрации в качестве индивидуального предпринимателя',
                },
                {
                  option:
                    '"в отношении юридического лица:"\nнаименование;\nбизнес-идентификационный номер;\nсведения о месте государственной регистрации и месте нахождения;\nсведения о должностных лицах, данные об учредителях.',
                },
                {
                  option:
                    '"в отношении иностранной структуры без образования юридического лица:"\nнаименование;\nномер (при наличии), под которым иностранная структура без образования юридического лица зарегистрирована в иностранном государстве (на территории);\nадрес места регистрации и (или) нахождения;\nсведения об учредителях (участниках) иностранной структуры без образования юридического лица.',
                },
              ]}
              dataBtn={[
                { name: '1 вкладка' },
                { name: '2 вкладка' },
                { name: '3 вкладка' },
              ]}
              Height={'250px'}
            ></TableWithData>
          </Reveal>
          <Reveal>
            <Sizebox height={40} />
            <Centered>
              <div className="RandomDiv">
                Организации и физические{' '}
                <span className="bold">
                  лица, ошибочно включенные в Перечень
                </span>{' '}
                организаций и лиц, связанных с финансированием терроризма и
                экстремизма, в отношении которых имеются сведения об их
                причастности к террористической и экстремистской деятельности{' '}
                <span className="bold">
                  {' '}
                  либо подлежащие исключению из указанного Перечня, но не
                  исключенные из указанного Перечня, обращаются в АФМ с
                  письменным мотивированным заявлением об их исключении из него.{' '}
                </span>
              </div>
            </Centered>
          </Reveal>
          <Reveal>
            <Sizebox height={40} />

            <HeaderWithLine headerColor={'#1F3C88'} lineColor={'#CADEFC'}>
              <>
                <span className="bold">
                  АФМ рассматривает заявление об исключении организации или
                  физлица из Перечня, в сроки, установленные законами Республики
                  Казахстан, и принимает одно из следующих мотивированных
                  решений:{' '}
                </span>
              </>{' '}
            </HeaderWithLine>
            <Sizebox height={40} />
          </Reveal>
          <Reveal>
            <Sizebox height={40} />
            <VideoLine
              url={
                'https://videos.sproutvideo.com/embed/7090d1b1191ae9c8f9/fecda4e3e1f59b44?playerColor=1f71a1'
              }
            />
            <Sizebox height={40} />
            <TextWithTitle
              title={
                'В целях обеспечения своей жизнедеятельности какие лица имеют право на осуществление минимальных финансовых операций?'
              }
            ></TextWithTitle>
            <Sizebox height={40} />
          </Reveal>

          <Reveal>
            <TextWithTitle
              title={
                'Физическое лицо, включенное в Перечень по следующим основаниям:'
              }
              text={[
                '- вступивший в законную силу приговор суда Казахстана о признании физического лица виновным в совершении экстремистского и (или) террористического преступлений;',
                '- признаваемые в Казахстане в соответствии с международными договорами и законами РК решения судов и иных компетентных органов иностранных государств в отношении организаций или физических лиц, осуществляющих террористическую деятельность;',
                '- нахождение организации или физического лица в перечне организаций и лиц, связанных с террористическими организациями или террористами, составляемом международными организациями, осуществляющими противодействие терроризму, или уполномоченными ими органами в соответствии с международными договорами Республики Казахстан; ',
                '- списки, составляемые Генеральной прокуратурой РК на основании данных правоохранительных и специальных государственных органов Республики Казахстан. ',
              ]}
            ></TextWithTitle>
          </Reveal>
          <Reveal>
            <Sizebox height={70} />
            <Centered>
              <ToolTipComponent></ToolTipComponent>
            </Centered>
            <Sizebox height={70} />
          </Reveal>

          <Reveal>
            <DropdownGlossaryList
              list={[
                {
                  title: 'Первый плюс',
                  description:
                    'полученными в виде оплаты трудового отпуска или заработной платы в размере, не превышающем минимального размера заработной платы, установленного на соответствующий финансовый год законом о республиканском бюджете, в течение календарного месяца из расчета на каждого члена семьи;   ',
                },
                {
                  title: 'Второй плюс',
                  description:
                    'полученными в виде пенсии, расходов на служебные командировки, стипендии, пособия, иной социальной выплаты в соответствии с законодательством Республики Казахстан, а также производить уплату налогов, коммунальных и социальных платежей, других обязательных платежей в бюджет, пеней и штрафов.',
                },
                {
                  title: 'Третий плюс',
                  description:
                    'Порядок выплаты средств физическому лицу, включенному в перечень организаций и лиц, связанных с финансированием терроризма и экстремизма, для обеспечения своей жизнедеятельности определяется уполномоченным органом.',
                },
              ]}
              headerTextColor={'#170F49'}
              activeHeaderTextColor={'#1F3C88'}
              textColor={'#6F6C90'}
              tabsTextColor={'#3A3939'}
              tabsBackgroundColor={'#BAD6FF'}
            />
          </Reveal>

          <Reveal>
            <Sizebox height={40} />
            <Report_Warning>
              <>
                Исключение организации и физического лица из Перечня является
                основанием для отмены применения мер по замораживанию операций с
                деньгами и (или) иным имуществом, принадлежащими организациям и
                физическим лицам, включенным в Перечень.
              </>
            </Report_Warning>
            <Sizebox height={40} />
          </Reveal>
          <Reveal>
            <Centered>
              <TooltipComponent1></TooltipComponent1>
            </Centered>
            <Sizebox height={80} />
          </Reveal>

          <Reveal>
            <Centered>
              <ImageLine img={timeImage}></ImageLine>
            </Centered>
          </Reveal>
          <Reveal>
            <NotNumberedDots
              list={[
                'АФМ незамедлительно, но не позднее одного рабочего дня со дня получения решения Комитета СОВБЕЗ ООН или международной организации, осуществляющей противодействие терроризму об удовлетворении вышеуказанного заявления, информирует СФМ.',
                'АФМ также информирует заявителя о принятом Комитетом СОВБЕЗ ООН или международными организациями, осуществляющими противодействие терроризму, решении.',
              ]}
              dotsColor={'gray'}
            ></NotNumberedDots>
            <Sizebox height={40} />
          </Reveal>
          <Reveal>
            <Centered>
              <ImageLine img={MoneyImage}></ImageLine>
            </Centered>
          </Reveal>
          <Reveal>
            <Sizebox height={40} />

            <HeaderWithLine headerColor={'#1F3C88'} lineColor={'#CADEFC'}>
              <>
                АФМ в случае выявления имущества лица, включенного в Перечень, в
                том числе обособленного имущества в юридических лицах,
                незамедлительно передает такие сведения в Генеральную
                прокуратуру РК для решения вопроса о наложении ареста на такое
                имущество.
              </>
            </HeaderWithLine>
            <Sizebox height={40} />
          </Reveal>

          <Reveal>
            <Sizebox height={40} />
            <Centered>
              <div className="RandomDiv1">
                При наличии поступившего в АФМ от компетентного органа
                иностранного государства обращения о возможной причастности
                организации или физического лица к террористической
                деятельности, если при этом имеются соответствующие основания
                для включения таких организаций или физического лица в Перечень,{' '}
                <span className="bold">
                  АФМ формирует Список лиц, причастных к террористической
                  деятельности.
                </span>
                <br />
                <br />
                АФМ размещает на своем интернет-ресурсе Список лиц, причастных к
                террористической деятельности, для принятия субъектами
                финансового мониторинга мер по замораживанию операций с деньгами
                и (или) иным имуществом{' '}
                <span className="bold">
                  на срок до пятнадцати календарных дней.
                </span>
                <br />
                <br />
                Вместе с тем, АФМ принимает меры по включению физических лиц из
                Списка лиц, причастных к террористической деятельности в
                Перечень.
              </div>
            </Centered>
            <Sizebox height={40} />
          </Reveal>
          <Reveal>
            <Centered>
              <ImageLine notCrop={true} img={dangerImage}></ImageLine>
            </Centered>
          </Reveal>

          <Reveal>
            <Centered>
              <TooltipComponent2></TooltipComponent2>
            </Centered>
            <Sizebox height={80} />
          </Reveal>

          <Sizebox height={80} />
          <Reveal>
            <HeaderWithLine headerColor={'#1F3C88'} lineColor={'#CADEFC'}>
              <>
                Теперь, когда Вы знаете, что такое целевые финансовые санкции и
                в каких целях они применяются, перейдем к изучению темы{' '}
                <span class="bold">
                  отказ от проведения и приостановление операций с деньгами и
                  (или) иным имуществом
                </span>{' '}
              </>{' '}
            </HeaderWithLine>
            <Sizebox height={40} />
          </Reveal>
          <NextLesson
            handleOnClick={() => {
              CheckCurrentChapter(id);
            }}
          />
        </LessonPage>
      );
    case 79:
      return (
        <LessonPage
          name={'Отказ от проведения и приостановление'}
          lecturer={'AML Academy'}
        >
          <Sizebox height={80} />
          <Reveal>
            <ImageLine img={image79} height={600}></ImageLine>
          </Reveal>
          <Sizebox height={80} />
          <Reveal>
            <HeaderWithLine headerColor={'#1F3C88'} lineColor={'#CADEFC'}>
              <>
                Теперь, когда Вы прошли модуль{' '}
                <span class="bold">
                  «Нормы Закона Республики Казахстан от «О противодействии
                  легализации (отмыванию) доходов, полученных преступным путем,
                  и финансированию терроризма»,
                </span>{' '}
                перейдем к тестовым вопросам для проверки усвоенных материалов.{' '}
              </>
            </HeaderWithLine>
          </Reveal>
          <NextLesson
            handleOnClick={() => {
              CheckCurrentChapter(id);
            }}
          />
        </LessonPage>
      );
    case 81:
        return (<LessonPage name={'Агентство Республики Казахстан по финансовому мониторингу'} lecturer={'AML Academy'}>
            <Reveal>
                <Sizebox height={40}/>
                <RandomGlossary
                    title={'АФМ РК является государственным органом, непосредственно подчиненным и подотчетным Президенту Республики Казахстан'}
                    text={'осуществляющим руководство в сфере ПОД/ФТ, а также по предупреждению, выявлению, пресечению, раскрытию и расследованию экономических и финансовых правонарушений, отнесенных законодательством Республики Казахстан к ведению этого органа \n' +
                        '(указ Президента от 28 января 2021 г. № 501 «О мерах по дальнейшему совершенствованию системы государственного управления Республики Казахстан»).'}
                />
            </Reveal>
            <Reveal>
                <Sizebox height={80}/>
                <HeaderWithLine headerColor={'#1F3C88'} lineColor={'#CADEFC'}>
                    <>

                        До подписания Указа функции подразделения финансовой разведки осуществлялись <span class="bold">Комитетом по финансовому мониторингу</span>, являвшимся подразделением Министерства финансов Республики Казахстан.

                    </>  </HeaderWithLine>
                <Sizebox height={80} />
            </Reveal>
            <Reveal>
                <Report_Information>
                    <>
                    <p className='italic'>
                        Таким образом, АФМ является <span class="bold">подразделением финансовой разведки (ПФР)</span> Республики Казахстан.
                    </p>
                </>
                </Report_Information>
                <Sizebox height={40} />
            </Reveal>
            <Reveal>
                <TextWithTitle text={"В Республике Казахстан АФМ является государственным органом, наделенным всеми полномочиями и функциями ПФР, а также осуществляет функции по проведению расследований."}
                />
                <Sizebox height={100} />
            </Reveal>
            <Reveal>
                <HeaderWithLine headerColor={'#1F3C88'} lineColor={'#CADEFC'}>
                    <>
                        Данная функция осуществляется <span class="bold">Службой экономических расследований</span> (СЭР АФМ), которая вместе со своими территориальными департаментами (Департамент экономических расследований - ДЭР) образует оперативно-следственное подразделение, осуществляющее деятельность по предупреждению, выявлению, пресечению, раскрытию и расследованию преступлений и правонарушений.
                    </>
                </HeaderWithLine>
                <Sizebox height={80} />
            </Reveal>
            <Reveal>
                <TextWithTitle text={"СЭР АФМ, как и органы прокуратуры, внутренних дел и антикоррупционная служба, относится к правоохранительным органам. СЭР АФМ взаимодействует с АФМ в рамках компетенции на общих основаниях в соответствии с законодательством."}
                />
                <Sizebox height={100} />
            </Reveal>
            <Reveal>
                <HeaderWithLine headerColor={'#1F3C88'} lineColor={'#CADEFC'}>
                    <>
                        В целом АФМ РК является <span class="bold">гибридным</span> органом, так как его структура включает как правоохранительный блок (служба экономических расследований), так и административный (подразделение финансовой разведки).                        </>
                </HeaderWithLine>
                <Sizebox height={120} />
            </Reveal>

            <Reveal>
                <HeaderWithLine headerColor={'#1F3C88'} lineColor={'#CADEFC'}>
                    Теперь давайте узнаем о задачах АФМ
                </HeaderWithLine>
            </Reveal>
            <Sizebox height={40} />

            <Reveal>
                <ImageWithText
                    img={image70}
                    imageText={'Задачи ПФР'}
                    color={'#FFFFFF'}
                />
                <Sizebox height={40} />
            </Reveal>
            <Reveal>
                <NumberedDots
                    dotsColor={'#CADEFC'}
                    list={[
                        'реализация единой государственной политики в сфере ПОД/ФТ;',
                        'ПОД/ФТ, координация работы государственных органов в этом направлении деятельности;',
                        'создание единой информационной системы и ведение республиканской базы данных в сфере ПОД/ФТ;',
                        'осуществление взаимодействия и информационного обмена с компетентными органами иностранных государств в сфере ПОД/ФТ;',
                        'представление интересов Республики Казахстан в международных организациях по вопросам ПОД/ФТ;',
                    ]}
                />
            </Reveal>
            <Sizebox height={40} />
            <Reveal>
                <RandomParapraph>
                    Для выполнения вышеуказанных задач АФМ выполняет определенные функции, давайте рассмотрим
                </RandomParapraph>
            </Reveal>
            <Sizebox height={80} />
                

            <Reveal>
                <ImageWithText
                    img={image71}
                    imageText={'Функции ПФР'}
                    color={'#FFFFFF'}
                />
                <Sizebox height={40} />
            </Reveal>
            <Reveal>
                <TextWithTitle 
                    title={"АФМ являясь национальным подразделением финансовой разведки, осуществляет следующие функции в целях ПОД/ФТ:"}
                />
            </Reveal>
            <Sizebox height={40}/>
            <Reveal>
                <TwoColumnsDivider 
                    left={
                        <NotNumberedDots
                            dotsColor={'#CADEFC'}
                            list={[
                                'ведет государственный электронный реестр уведомлений от юридических консультантов, ювелирных организаций, риелторов и лизингодателей в соответствии с Законом Республики Казахстан «О разрешениях и уведомлениях», осуществляет прием уведомлений от вышеуказанных субъектов;',
                                'осуществляет государственный контроль за соблюдением вышеуказанными СФМ, а также бухгалтерскими организациями законодательства РК о ПОД/ФТ в порядке, определенном Предпринимательским кодексом РК;',
                                'координирует деятельность государственных органов в сфере ПОД/ФТ;',
                                'по запросу суда по уголовным делам направляет необходимую информацию по операциям с деньгами и (или) иным имуществом, подлежащим финансовому мониторингу, для разрешения материалов, находящихся в производстве;',
                                'предоставляет в установленном законодательством порядке по запросам правоохранительных и специальных государственных органов сведения и информацию об операции, подлежащей финансовому мониторингу;',
                                'участвует в разработке и осуществлении программ международного сотрудничества по вопросам ПОД/ФТ;',
                                'организует формирование и ведение республиканской базы данных, а также обеспечивает методологическое единство и согласованное функционирование информационных систем в сфере ПОД/ФТ;',
                                'разрабатывает и проводит мероприятия по предупреждению нарушений законодательства Республики Казахстан о ПОД/ФТ;',
                                'обобщает практику применения законодательства о ПОД/ФТ на основании информации, получаемой от государственных органов и иных организаций, а также разрабатывает и вносит предложения по его совершенствованию;',
                            ]}
                        />
                    }
                    right={
                        <NotNumberedDots
                            dotsColor={'#CADEFC'}
                            list={[
                                'изучает международный опыт и практику ПОД/ФТ;',
                                'проводит мероприятия по переподготовке и повышению квалификации кадров в сфере ПОД/ФТ;',
                                'координирует работу по проведению оценки рисков в сфере ПОД/ФТ и реализации мер, направленных на снижение рисков легализации (отмывания) доходов и финансирования терроризма;',
                                'разрабатывает и вносит в Правительство Республики Казахстан меры, направленные на снижение рисков ПОД/ФТ;',
                                'разрабатывает и утверждает в пределах своей компетенции инструкции, методические рекомендации для СФМ с учетом особенностей и специфики их деятельности;',
                                'ведет список ПДЛ, входящих в перечень публичных должностных лиц, утверждаемый Президентом Республики Казахстан, их супругов и близких родственников;',
                                'устанавливает форму и сроки предоставления государственными органами и организациями информации об анализе и мониторинге деятельности организаций и физических лиц на предмет выявления рисков ОД/ФТ, обобщения практики, предложений по совершенствованию законодательства о ПОД/ФТ в уполномоченный орган;',
                                'осуществляет иные полномочия, предусмотренные настоящим Законом, иными законами Республики Казахстан, актами Президента Республики Казахстан и Правительства Республики Казахстан;',
                            ]}
                        />
                    }
                />
                
            </Reveal>
            <Sizebox height={80}/>

            <Reveal>
                <HeaderWithLine headerColor={'#1F3C88'} lineColor={'#CADEFC'}>
                    <>
                        Теперь, когда вы узнали о задачах и функциях АФМ,
                        мы остановимся на наиболее важных функциях поподробнее
                    </>
                </HeaderWithLine>
            </Reveal>

            <Sizebox height={80} />

            <Reveal>
                <HeaderWithLine headerColor={'#1F3C88'} lineColor={'#CADEFC'}>
                    Функции АФМ
                </HeaderWithLine>
            </Reveal>
            <Sizebox height={40} />

            <Reveal>
                <VideoLine url={'https://videos.sproutvideo.com/embed/7990d0b51d1ae4c1f0/6e43cdd74851d083?playerColor=1f71a1'}/>
            </Reveal>

            <Sizebox height={80} />

            <Reveal>
                <HeaderWithLine headerColor={'#1F3C88'} lineColor={'#CADEFC'}>
                    Теперь, когда вы ознакомились с задачами и функциями АФМ, перейдем к изучению межведомственных групп, работу которых координирует АФМ.
                </HeaderWithLine>
            </Reveal>

            <Sizebox height={80} />
            <NextLesson handleOnClick={() => {
                CheckCurrentChapter(id);
            }}/> 

        </LessonPage>)
    
    case 82:
        return (<LessonPage name={'Межведомственные органы и рабочие группы'} lecturer={'AML Academy'}>
            
            <Sizebox height={40} />
            <Reveal>
                <Centered>
                    <RandomH2>
                        Межведомственная рабочая группа по вопросам подготовки ко взаимной оценке ЕАГ (МВРГ)
                    </RandomH2>
                </Centered>
            </Reveal>

            <Sizebox height={40} />
            <Reveal>
                <TextWithBackground 
                    backgroundColor={'#CADEFC'}
                    text={[<>АФМ отвечает за руководство и координацию деятельности в области противодействия ОД/ФТ и получает поддержку на высоком уровне страны. Одним из эффективных инструментов является созданная при Администрации Президента Республики Казахстан <span className="bold">Межведомственная рабочая группа по вопросам подготовки ко взаимной оценке ЕАГ</span> (МВРГ).</>]}
                />
            </Reveal>

            <Sizebox height={80} />
            <Reveal>
                <Centered>
                    <Image 
                        style={{
                            maxHeight: 600,
                        }}
                        src={module_5_2_img}
                    />
                </Centered>
            </Reveal>
            <Sizebox height={40} />
            <Reveal>
                <TextWithTitle 
                    text={[
                        'МВРГ является консультативно-совещательным органом и создана в целях выработки мер по реализации государственной политики в сфере ПОД/ФТ, и повышения их эффективности, а также координации мер, направленных на снижение рисков ОД/ФТ и противодействие теневой экономике.',
                        'В состав МВРГ вошли представители АП РК, Совбез РК, ВС, ГП, МИД, КНБ, МВД, АФМ, АПК, АРРФР, АЗРК, НБ, Высшей аудиторской палаты, АСПиР, МНЭ, МФ, МЗ, МНВО, МТСЗН, МТС, МЮ, МЦРИАП, МТИ, МСХ, МКОР, МЭ, МПС, МЭПР, НПП «Атамекен», МФЦА.'
                    ]}
                />
            </Reveal>

            <Sizebox height={100} />
            <Reveal>
                <Centered>
                    <RandomH2>
                        Межведомственный совет в сфере ПОД/ФТ
                    </RandomH2>
                </Centered>
            </Reveal>
            <Sizebox height={40} />
            <Reveal>
                <TextWithBackground 
                    backgroundColor={'#CADEFC'}
                    text={[<>В ноябре 2020 года вступила в силу норма ст. 11-1 Закона о ПОД/ФТ, в соответствии с которой в Казахстане создан <span className="bold">Межведомственный совет в сфере ПОД/ФТ</span> (МВС), который стал эффективной диалоговой площадкой для выработки государственной политики в сфере ПОД/ФТ/ФРОМУ.</>]}
                />
            </Reveal>

            <Sizebox height={80} />
            <Reveal>
                <Centered>
                    <Image 
                        style={{
                            maxHeight: 600,
                        }}
                        src={module_5_21_img}
                    />
                </Centered>
            </Reveal>
            <Sizebox height={40} />
            <Reveal>
                <TextWithTitle 
                    text={[
                        'В его состав вошли заместители первых руководителей государственных правоохранительных, специальных государственных органов и госорганов-регуляторов, задействованных в борьбе с ОД/ФТ/ФРОМУ.',
                        'По итогам заседаний МВС утвержден ряд стратегически важных документов, в том числе, одобрены и приняты закрытые и публичные версии НОР ОД и НОР ФТ/ФРОМУ, секторальной оценке НКО, а также отчет уязвимости юридических лиц, методические рекомендации по выявлению ПДЛ, бенефициарных собственников и утверждены рекомендаций для НКО в сфере ПФТ.'
                    ]}
                />
            </Reveal>

            <Sizebox height={100} />
            <Reveal>
                <Centered>
                    <RandomH2>
                        ФУНКЦИИ МВС
                    </RandomH2>
                </Centered>
            </Reveal>
            <Sizebox height={40} />
            {/* <TODO text={'PIRAMIDA'} /> */}
            <PyramidList />
            <Sizebox height={80} />
            <Reveal>
                <FileDownloader 
                    fileName={'Публичные отчеты НОР ОД  и НОР ФТ'}
                />
            </Reveal>

            <Sizebox height={100} />
            <Reveal>
                <Centered>
                    <RandomH2>Совет комплаенс</RandomH2>
                </Centered>
            </Reveal>
            <Sizebox height={40} />
            <Reveal>
                <TextWithBackground 
                    backgroundColor={'#CADEFC'}
                    text={[<>Для усиления взаимодействия с СФМ и решения организационных и правовых вопросов в ноябре 2019 года при АФМ создан <span className="bold">Совет комплаенс.</span></>]}
                />
            </Reveal>

            <Sizebox height={80} />
            <Reveal>
                <Centered>
                    <Image 
                        style={{
                            maxHeight: 600,
                        }}
                        src={module_5_22_img}
                    />
                </Centered>
            </Reveal>
            <Sizebox height={40} />
            <Reveal>
                <NumberedDots 
                    dotsColor={'white'}
                    header={'Основными задачами Совета комплаенс являются:'}
                    list={[
                        'подготовка рекомендаций по внедрению новых форматов взаимодействия и обратной связи с СФМ;',
                        'подготовка и обсуждение предложений по совершенствованию информационного обмена между СФМ и Агентством, а также по иным вопросам информационного взаимодействия;',
                        'участие в проектах, связанных с информированием СФМ о рисках ОД/ФТ для практического использования при реализации процедур внутреннего контроля;',
                        'организация и участие в совместных обучающих мероприятиях, обмене лучшими практиками и опытом работы в сфере ПОД/ФТ, в том числе с участием приглашенных экспертов.',
                    ]}
                />
            </Reveal>
            <Sizebox height={40} />
            <Reveal>
                <Report_Warning>
                    С момента действия данной площадки проведено более 70 встреч с СФМ и государственными органами, на которых, к примеру, был доведен унифицированный реестр рисковых лиц, итоги НОР ОД/ФТ/ФРОМУ и другое.
                </Report_Warning>
            </Reveal>
            <Sizebox height={40} />
            <Reveal>
                <RandomParapraph>
                    Взаимодействие и сотрудничество является одной из сильных сторон казахстанской системы ПОД/ФТ. АФМ отвечает за руководство и координацию деятельности в области противодействия ОД/ФТ и получает поддержку на высоком уровне страны.
                </RandomParapraph>
            </Reveal>
            <Sizebox height={40} />
            <Reveal>
                <Report_Warning>
                    В настоящее время заключено 7 соглашений о сотрудничестве и взаимодействии в сфере ПОД/ФТ с госорганами – регуляторами, с 19 общественными объединениями, а также 39 меморандумов о взаимодействии в сфере ПОД/ФТ с иностранными ПФР.
                </Report_Warning>
            </Reveal>

            <Sizebox height={100} />

            <Reveal>
                <HeaderWithLine headerColor={'#1F3C88'} lineColor={'#CADEFC'}>
                    ПЕРЕЙДЕМ К СЛЕДУЮЩЕМУ БЛОКУ ОБУЧЕНИЯ
                </HeaderWithLine>
            </Reveal>

            <Reveal>
                <Sizebox height={100}/>
                <NextLesson handleOnClick={() => {
                    CheckCurrentChapter(id,10);
                }}/>
            </Reveal>

        </LessonPage>)
      case 10:
          return (
              <TestPage
                  finished={modules[4].quiz.quiz_max_points === 100}
                  name={'ТЕСТИРОВАНИЕ 5'}
                  questions={modules[4].quiz.quizList || []}
                  quizId={16}
                  handleOpenModal={handleOpenFeedbackModal}
              ></TestPage>
          );
      return (
        <LessonPage name={'Функции АФМ'} lecturer={'AML Academy'}>
          <Reveal>
            <Sizebox height={40} />
            <TextWithTitle
              title={'Сбор, обработка и анализ информации\n'}
              text={[
                'В целях ПОД/ФТ АФМ осуществляет сбор, обработку и анализ информации об операциях с деньгами и (или) иным имуществом, подлежащих финансовому мониторингу, с последующим направлением результатов анализа в правоохранительные и специальные государственные органы Республики Казахстан.',
                'АФМ обладает всеми необходимыми средствами и современными IT-ресурсами для проведения качественного оперативного, тактического и стратегического анализа в целях борьбы с ОД/ФТ, предикатными преступлениями и обеспечения качественными материалами СЭР АФМ и ПО/СГО.',
                'АФМ самостоятельно принимает решение о проведении анализа, направлении запросов, а также раскрытии результатов анализа в ПОО/зарубежные органы, также у АФМ имеются полномочия для взаимодействия с национальными и иностранными компетентными органами в целях ПОД/ФТ, включая право запрашивать и получать необходимую информацию, в т.ч. на принципах взаимности.',
              ]}
            />
          </Reveal>
          <Reveal>
            <Sizebox height={40} />
            <TextWithTitle
              title={'Координация ГО/ОО\n'}
              text={[
                'Взаимодействие и сотрудничество является одной из сильных сторон казахстанской системы ПОД/ФТ. АФМ отвечает за руководство и координацию деятельности в области противодействия ОД/ФТ и получает поддержку на высоком уровне страны.',
              ]}
            />
          </Reveal>
          <Reveal>
            <Sizebox height={40} />
            <Report_Information>
              <>
                <p className="italic">
                  В настоящее время заключено 7 соглашений о сотрудничестве и
                  взаимодействии в сфере ПОД/ФТ с госорганами – регуляторами, с
                  19 общественными объединениями, а также 39 меморандумов о
                  взаимодействии в сфере ПОД/ФТ с иностранными ПФР.
                </p>
              </>
            </Report_Information>
            <Sizebox height={40} />
          </Reveal>
          <Reveal>
            <HeaderWithLine headerColor={'#1F3C88'} lineColor={'#CADEFC'}>
              <>функции АФМ</>
            </HeaderWithLine>
          </Reveal>

                <Sizebox height={80} />

                <VideoLine url={'https://videos.sproutvideo.com/embed/7990d0b51d1ae4c1f0/6e43cdd74851d083?playerColor=1f71a1'}/>

                <Sizebox height={80} />

                <Reveal/>
                <Reveal>
                    <HeaderWithLine headerColor={'#1F3C88'} lineColor={'#CADEFC'}>
                        <>
                            АФМ отвечает за руководство и координацию деятельности в области противодействия ОД/ФТ и получает поддержку на высоком уровне страны. Одним из эффективных инструментов является созданная при Администрации Президента Республики Казахстан <span class="bold">Межведомственная рабочая группа по вопросам подготовки ко второму раунду взаимной оценки ЕАГ</span> (МВРГ).
                        </>
                    </HeaderWithLine>
                    <Sizebox height={80} />
                </Reveal>
                <Reveal>
                    <Sizebox height={40}/>
                    <TextWithTitle
                        title={"МВРГ является консультативно-совещательным органом и создана в целях выработки мер по реализации государственной политики в сфере ПОД/ФТ, и повышения их эффективности, а также координации мер, направленных на снижение рисков ОД/ФТ и противодействие теневой экономике.\n"}
                        text={[
                            "В состав МВРГ вошли представители АП РК, Совбез РК, ВС, ГП, МИД, КНБ, МВД, АФМ, АПК, АРРФР, АЗРК, НБ, Высшей аудиторской палаты, АСПиР, МНЭ, МФ, МЗ, МНВО, МТСЗН, МТС, МЮ, МЦРИАП, МТИ, МСХ, МКОР, МЭ, МПС, МЭПР, НПП «Атамекен», МФЦА.",
                        ]}
                    />
                </Reveal>

          <Reveal>
            <HeaderWithLine headerColor={'#1F3C88'} lineColor={'#CADEFC'}>
              <>
                В ноябре 2020 года вступила в силу норма ст. 11-1 Закона о
                ПОД/ФТ, в соответствии с которой в Казахстане создан{' '}
                <span class="bold">Межведомственный совет в сфере ПОД/ФТ</span>{' '}
                (МВС), который стал эффективной диалоговой площадкой для
                выработки государственной политики в сфере ПОД/ФТ/ФРОМУ.{' '}
              </>
            </HeaderWithLine>
            <Sizebox height={40} />
          </Reveal>
          <Reveal>
            <Sizebox height={40} />
            <TextWithTitle
              title={
                'В его состав вошли заместители первых руководителей государственных правоохранительных, специальных государственных органов и госорганов-регуляторов, задействованных в борьбе с ОД/ФТ/ФРОМУ.\n'
              }
              text={[
                'По итогам заседаний МВС утвержден ряд стратегически важных документов, в том числе, одобрены и приняты закрытые и публичные версии НОР ОД и НОР ФТ/ФРОМУ, секторальной оценке НКО, а также отчет уязвимости юридических лиц, методические рекомендации по выявлению ПДЛ, бенефициарных собственников и утверждены рекомендаций для НКО в сфере ПФТ.\n',
              ]}
            />
          </Reveal>
          <Reveal>
            <ImageWithText
              img={image74}
              imageText={'ФУНКЦИИ МВС'}
              color={'#FFFFFF'}
            />
            <Sizebox height={40} />
          </Reveal>
          <Reveal>
            <Sizebox height={40} />
            <HeaderWithLine headerColor={'#1F3C88'} lineColor={'#CADEFC'}>
              <>
                Для усиления взаимодействия с СФМ и решения организационных и
                правовых вопросов в ноябре 2019 года при АФМ создан{' '}
                <span class="bold">Совет комплаенс.</span>
              </>
            </HeaderWithLine>
            <Sizebox height={40} />
          </Reveal>
          <Reveal>
            <TextWithTitle title={'Основными задачами Совета являются:'} />

            <Sizebox height={40} />
            <NotNumberedDots
              dotsColor={'#CADEFC'}
              list={[
                'подготовка рекомендаций по внедрению новых форматов взаимодействия и обратной связи с СФМ;',
                'подготовка и обсуждение предложений по совершенствованию информационного обмена между СФМ и Агентством, а также по иным вопросам информационного взаимодействия;',
                'участие в проектах, связанных с информированием СФМ о рисках ОД/ФТ для практического использования при реализации процедур внутреннего контроля;',
                'организация и участие в совместных обучающих мероприятиях, обмене лучшими практиками и опытом работы в сфере ПОД/ФТ, в том числе с участием приглашенных экспертов;',
              ]}
            />
            <Sizebox height={40} />
          </Reveal>
          <Reveal>
            <Sizebox height={40} />
            <Report_Information>
              <>
                <p className="italic">
                  С момента действия данной площадки проведено более 70 встреч с
                  СФМ и государственными органами, на которых, к примеру, был
                  доведен унифицированный реестр рисковых лиц, итоги НОР
                  ОД/ФТ/ФРОМУ и другое.
                </p>
              </>
            </Report_Information>
            <Sizebox height={40} />
          </Reveal>
          <Reveal>
            <Sizebox height={40} />
            <NextLesson
              handleOnClick={() => {
                CheckCurrentChapter(id);
              }}
            />
          </Reveal>
        </LessonPage>
      );
    case 84:
        return (<LessonPage name={'Требования к СФМ по подготовке и обучению в сфере ПОД/ФТ'} lecturer={'AML Academy'}>
            <Reveal>
                <ImageLine
                    img={image75}
                    color={'#FFFFFF'}
                />
                <Sizebox height={40} />
            </Reveal>
            <Reveal>
                <TextWithTitle 
                    title={"В КАКИХ ЦЕЛЯХ СФМ НЕОБХОДИМО ОБУЧАТЬСЯ, ПОВЫШАТЬ КВАЛИФИКАЦИЮ И ПРОХОДИТЬ ТЕСТИРОВАНИЕ?\n"}
                />

                <Sizebox height={20} />
                <NotNumberedDots
                    dotsColor={'#CADEFC'}
                    list={[
                        'МЕЖДУНАРОДНЫЕ СТАНДАРТЫ;',
                        'ТРЕБОВАНИЯ ЗАКОНОДАТЕЛЬСТВА;',
                        'АДМИНИСТРАТИВНАЯ ОТВЕТСТВЕННОСТЬ;',
                        'РИСКИ ВОВЛЕЧЕНИЯ СФМ В СХЕМЕ ОД/ФТ;',
                        'СПОСОБЫ И СХЕМЫ ОД/ФТ ПОСТОЯННО СОВЕРШЕНСТВУЮТСЯ;',
                    ]}
                />
            </Reveal>

            <Sizebox height={60}/>
            <Reveal>
                <Centered>
                    <Image 
                        src={module_7_12_img} 
                        style={{
                            maxHeight: '600px'
                        }}
                    />  
                </Centered>
            </Reveal>
            <Sizebox height={20} />
            <Reveal>
                <TextWithTitle 
                    title={"В целях реализации Требований по подготовке и обучению Субъект:"}
                />
                <Sizebox height={20} />
                <NumberedDots
                    dotsColor={'#CADEFC'}
                    list={[
                        'Разрабатывает программу подготовки и обучения в сфере ПОД/ФТ с учетом требований законодательства Республики Казахстан о ПОД/ФТ, а также особенностей деятельности субъектов и их клиентов.',
                        'Утверждает перечень ответственных лиц, которые проходят обучение в целях ПОД/ФТ, до начала осуществления ими функций, связанных с соблюдением законодательства Республики Казахстан о ПОД/ФТ.',
                        'Устанавливает порядок учета прохождения своими сотрудниками программы обучения.',
                        'Ведет учет прохождения своими сотрудниками программы обучения.',
                        'Устанавливает форму и содержание документа по факту проведения со своим сотрудником обучения и ознакомления с НПА РК в области ПОД/ФТ и внутренними документами, принятыми в целях организации внутреннего контроля и подтверждается его собственноручной подписью.',
                        'Приобщает к личному делу своего сотрудника документы, подтверждающие прохождение им программы обучения.',
                        'Размещает информацию о прохождении тестирования в личном кабинете веб-портала АФМ.',

                    ]}
                />
                <Sizebox height={40}/>
            </Reveal>
            <Reveal>
                <HeaderWithLine headerColor={'#1F3C88'} lineColor={'#CADEFC'}>
                    <>
                        Субъекты проходят обучение в целях ПОД/ФТ в соответствии с <span class="bold">программой обучения</span>, которая содержит указанные ниже направления:

                    </>
                </HeaderWithLine>
            </Reveal>

            <Sizebox height={80} />

            <Reveal>
                <VideoLine url={'https://videos.sproutvideo.com/embed/1190d6b6191be6cb98/1e08aa67291ed98e'}/>
            </Reveal>
            <Sizebox height={80} />

            <Reveal/>
            <Reveal>
                <TextWithTitle 
                    title={"Учет прохождения субъектами финансового мониторинга обучения и тестирования"}
                />
                <Sizebox height={20} />
                <NumberedDots
                    dotsColor={'#CADEFC'}
                    list={[
                        'Субъект ведет учет прохождения своими сотрудниками программы обучения.',
                        'Порядок учета прохождения сотрудниками субъекта программы обучения устанавливается субъектом самостоятельно.',
                        'Факт проведения с сотрудником субъекта обучения и ознакомления с НПА в области ПОД/ФТ и внутренними документами субъектов, принятыми в целях организации внутреннего контроля, подтверждается его собственноручной подписью в документе, форму и содержание которого субъект устанавливает самостоятельно.',
                        'Документы, подтверждающие прохождение сотрудником субъекта программы обучения, приобщаются к личному делу сотрудника.',
                        'Прохождение субъектом тестирования подтверждается документом, выдаваемым Центром.',
                        'Учет лиц, прошедших тестирование, ведется уполномоченным органом на основании информации, полученной от Центра.',
                        'Субъекты размещают информацию о прохождении тестирования в личном кабинете субъекта, который размещен в веб-портале уполномоченного органа.',
                    ]}
                />
                <Sizebox height={40}/>
            </Reveal>
            <Reveal>
                <RandomParapraph >
                    В целях подтверждения изучения субъектами материала, изученного в процессе обучения субъекты проходят <span class="bold">тестирование</span> с периодичностью не реже <span class="bold">1 (одного) раза в 3 (три) года</span> с даты прохождения тестирования на базе Национального центра по управлению персоналом государственной службы и его территориальных подразделений.
                </RandomParapraph>
            </Reveal>
            <Sizebox height={20}/>
            <Reveal>
                <Centered>
                    <Image 
                        src={module_7_13_img} 
                        style={{
                            maxHeight: '400px'
                        }}
                    />  
                </Centered>
            </Reveal>
            <Sizebox height={20}/>
            <Reveal>
                <Report_Information>
                    <>
                        <p className='italic'>
                            Срок действия результатов тестирования составляет 3 (три) года с момента прохождения аттестации с положительным результатом.                            </p>
                    </>
                </Report_Information>
                <Sizebox height={40} />
            </Reveal>
            <Reveal>
                <TextWithTitle title={"В настоящее время процедура прохождения тестирования проходит следующим образом:"}
                />

                <Sizebox height={40} />
                <NumberedDots
                    dotsColor={'#CADEFC'}
                    list={[
                        'Войти на портал Агентства websfm.kz;',
                        'Выбрать раздел «Обучение», затем вкладку «Тестирование»;',
                        'Заполнить Заявку для прохождения тестирования на знание законодательства и оценки личных качеств;',
                    ]}
                />
                <Sizebox height={40}/>
            </Reveal>
            <Reveal>
                <Sizebox height={40}/>
                <TextWithTitle
                    title={"При этом в Заявке тестируемый указывает свой ИИН и БИН организации (при наличии) и выбирает зал тестирования Центра, который имеется во всех регионах Казахстана, дату, а также время прохождения тестирования.\n"}
                    text={[
                        "Сами вопросы разрабатываются АФМ, распределение по ним происходит на основании вида СФМ, указанного в Заявке, то есть 80% – общие вопросы/20% – профильные вопросы по виду СФМ.",
                    ]}
                />
            </Reveal>
            <Reveal>
                <Sizebox height={40}/>
                <Report_Information>
                    <>
                        <p className='italic'>
                            Продолжительность тестирования составляет <span class="bold">90 мин</span>.
                            Количество вопросов по НПА – <span class="bold">100</span> (проходной балл – 70);
                            Количество вопросов по оценке личных качеств (ОЛК) – 24.
                        </p>
                    </>
                </Report_Information>
                <Sizebox height={40} />
            </Reveal>

            <Reveal>
                <Sizebox height={40}/>
                <NextLesson handleOnClick={() => {
                    CheckCurrentChapter(id);
                }}/>
            </Reveal>

        </LessonPage>)
    case 83:
      return (
        <LessonPage
          name={'Требования к внутренним нормативным документам'}
          lecturer={'AML Academy'}
        >
          <Reveal>
            <Sizebox height={60}></Sizebox>
            <VideoLine
              url={
                'https://www.youtube.com/watch?v=u9v3fQs_Bhw&pp=ygUOQU1MIGFjYWRlbXkga3o%3D'
              }
            ></VideoLine>
          </Reveal>
          <Reveal>
            <Sizebox height={60}></Sizebox>
            <TextWithTitle
              title={'В соответствии с нормами действующего законодательства о ПОД/ФТ субъекты принимают соответствующие меры во избежание использования, как самих субъектов, так и его услуг иными лицами для совершения или оказания какого-либо содействия в легализации ОД/ФТ/ФРОМУ.'}
            >
            </TextWithTitle> <Sizebox height={20}></Sizebox>
            <TextWithTitle
              title={'Таким образом, субъекты в целях противодействия ПОД/ФТ разрабатывают ПВК и программы их осуществления, а также несут ответственность за соблюдение правил и реализацию этих программ.'}

            >

            </TextWithTitle><Sizebox height={20}></Sizebox>
            <TextWithTitle
              title={'ПВК разрабатываются, принимаются органом управления или исполнительным органом СФМ с образованием юрлица и СФМ без образования юрлица и исполняются СФМ с учетом результатов оценки степени подверженности услуг СФМ рискам ОД/ФТ, размера, характера и сложности организации и, помимо требований к деятельности СФМ при проведении внутреннего контроля.'}
            >
            </TextWithTitle>
            <Sizebox height={60}></Sizebox><Sizebox height={20}></Sizebox>
          </Reveal>
          <Reveal>
            <NumberedDotsAndImage
              imageUrl={image99}
              dotsColor={'#4eff54'}
              header={
                'Реализация ПВК предусматривает реализацию 5 обязательных программ:'
              }
              list={[
                'программа организации внутреннего контроля;',
                'программа управления риском',
                'программа идентификации клиентов;',
                'программа мониторинга и изучения операций клиентов;',
                'программа подготовки и обучения;',
              ]}
            ></NumberedDotsAndImage>
          </Reveal>
          <Reveal>
            <Sizebox height={100}></Sizebox>
            <VideoLine
              url={
                'https://www.youtube.com/watch?v=u9v3fQs_Bhw&pp=ygUOQU1MIGFjYWRlbXkga3o%3D'
              }
            ></VideoLine>
            <Sizebox height={60} />
            <TextWithTitle
              title={
                'Субъекты исходя из деятельности субъектов, а также продуктов и услуг, оказываемые ими могут предусмотреть собственные – дополнительные программы в соответствии с ПВК. '
              }
            ></TextWithTitle>
          </Reveal>
          <Reveal>
            <Sizebox height={60} />
            <Centered>
              <ImageLine img={image98} color={'#FFFFFF'}></ImageLine>
            </Centered>
          </Reveal>
          <Reveal>
            <Sizebox height={60} />
            <TextWithTitle
              title={'Программа организации внутреннего контроля в целях ПОД/ФТ/ФРОМУ, которая включает в себя требование о назначении лица, ответственного за реализацию и соблюдение ПВК, из числа руководящих работников Субъектов или иных руководителей Субъектов не ниже уровня руководителя соответствующего структурного подразделения, а также иные требования, предъявляемые к работникам Субъектов, ответственным за реализацию и соблюдение ПВК, в том числе о наличии безупречной деловой репутации.'}
            ></TextWithTitle>
          </Reveal>
          <Reveal>
            <Sizebox height={60} />
            <Centered>
              <ImageLine img={image97} color={'#FFFFFF'}></ImageLine>
            </Centered>
          </Reveal>
        

          <Sizebox height={50} />
          <Reveal>
            <Report_Information>
              <>
                <p style={{ textIndent: '15px' }}>
                  Данная Программа также включает процедуры по &nbsp;
                  <span className="bold">
                    применению автоматизированных информационных систем и
                    программного обеспечения{' '}
                  </span>
                  (например портал АФМ, сайт КГД МФ РК, открытые источники и
                  т.д.), используемых Субъектом для осуществления внутреннего
                  контроля в целях ПОД/ФТ/ФРОМУ, отказу клиентам в установлении
                  деловых отношений и прекращения деловых отношений, отказ в
                  проведении операций с деньгами и (или) иным имуществом, и
                  принятия мер по замораживанию операций с деньгами и (или) иным
                  имуществом, признанию операции клиента подозрительной и др.
                </p>
                <p style={{ textIndent: '15px' }}>
                  Субъекты также <span className="bold">могут включить </span>в
                  Программу <span className="bold">дополнительные меры </span>по
                  организации внутреннего контроля в целях ПОД/ФТ/ФРОМУ.
                </p>
              </>
            </Report_Information>
          </Reveal>
          <Reveal>
            <Sizebox height={60} />
            <Centered>
              <ImageLine img={image96} color={'#FFFFFF'}></ImageLine>
            </Centered>
          </Reveal>
          <Sizebox height={60} />
          <Reveal>
            <Centered>
              <>
                <p
                  style={{
                    textIndent: '15px',
                    textAlign: 'left',
                    fontSize: '140%',
                    lineHeight: '1.5',
                    width:'120%'
                  }}
                >
                  Субъекты назначают &nbsp;
                  <span className="bold">ответственного работника</span>
                  <span className="red">+ </span>
                  <span className="italic">
                    (Лицо, ответственное за реализацию и соблюдение ПВК){' '}
                  </span>
                  из числа руководящих работников Субъектов или иных
                  руководителей Субъектов не ниже уровня руководителя
                  соответствующего структурного подразделения, а также
                  <span className="bold">
                    работника подразделения по ПОД/ФТ/ФРОМУ
                  </span>
                  <span className="red">+ </span>
                  <span className="italic">
                    (Работники Субъектов, ответственные за реализацию и
                    соблюдение ПВК),
                  </span>
                  за исключением Субъектов, осуществляющих свою деятельность
                  единолично.
                </p>
              </>
            </Centered>
          </Reveal>
          <Reveal>
            <Sizebox height={60} />
            <Centered>
              <ImageLine img={image95} color={'#FFFFFF'}></ImageLine>
            </Centered>
          </Reveal>
          <Sizebox height={60} />
          <Reveal>
          <Centered>
              <>
                <div
                  style={{
                    display: 'block',
                    textAlign: 'left',
                    fontSize: '140%',
                    lineHeight: '1.5',
                    textIndent: '15px',
                  }}
                >
                  <p>
                    На ответственного работника, работников подразделения по
                    ПОД/ФТ/ФРОМУ и на Субъектов, осуществляющих свою
                    деятельность единолично, в соответствии с Программой &nbsp;
                    <span className="bold">
                      возложены соответствующие функции,
                    </span>
                    в том числе и в, части
                    <span className="bold">
                      {' '}
                      разработки и согласования, внесения изменений и (или)
                      дополнений{' '}
                    </span>
                    в ПВК, а также{' '}
                    <span className="bold">
                      мониторинг реализации и соблюдения ПВК
                    </span>{' '}
                    и иные.
                  </p><br />
                </div>
              </>
            </Centered>
            <Centered>
              <>
                <div
                  style={{
                    display: 'block',
                    textAlign: 'left',
                    fontSize: '140%',
                    lineHeight: '1.5',
                    textIndent: '15px',
                  }}
                >
                </div>
                <div
                  style={{
                    display: 'block',
                    textAlign: 'left',
                    fontSize: '140%',
                    lineHeight: '1.5',
                    textIndent: '15px',
                  }}
                >
                  <p>
                    В случае назначения Субъектом ответственного работника либо
                    работников подразделения по ПОД/ФТ/ФРОМУ, ПВК включают
                    <span className="bold"> дополнительные функции,</span> такие
                    как
                    <span className="bold"> информирование руководителя </span>
                    Субъекта
                    <span className="bold">
                      {' '}
                      о выявленных нарушениях ПВК, направление запросов
                      руководителю
                    </span>{' '}
                    Субъекта
                    <span className="bold"> для принятия решений </span>об
                    установлении, продолжении либо прекращении деловых отношений
                    с клиентами и другие.
                  </p>
                </div>
              </>
            </Centered>
          </Reveal>
          <Reveal>
            <Sizebox height={60}></Sizebox>
            <VideoLine
              url={
                'https://videos.sproutvideo.com/embed/7990d6b6191be9ccf0/f2adefa00f3da451'
              }
            ></VideoLine>
            <Sizebox height={40} />
            <NumberedDots
              header={'Для выполнения возложенных функций ответственный работник и работники подразделения по ПОД/ФТ/ФРОМУ наделяются следующими полномочиями:'}
              list={[
                'получение доступа ко всем помещениям Субъекта, информационным системам, средствам телекоммуникаций, документам и файлам в пределах, позволяющих осуществлять свои функции в полном объеме;',
                'обеспечение конфиденциальности сведений, полученных при осуществлении полномочий;',
                'обеспечение сохранности получаемых от подразделений Субъекта документов и файлов и т.д.'
              ]}
            ></NumberedDots>
               <Sizebox height={70} />
          </Reveal>
          <Reveal>
            <Sizebox height={40} />
                <VideoLine
                    url={
                        'https://videos.sproutvideo.com/embed/4490d6b6181de5cecd/fb32f548f8002e85'
                    }
                ></VideoLine>

          </Reveal>

          <Reveal>
          <Sizebox height={70} />
            <TextWithTitle
              title={'В целях организации управления рисками легализации ОД/ФТ/ФРОМУ, "Субъекты разрабатывают Программу" управления рисками легализации ОД/ФТ/ФРОМУ, "учитывающую риски клиентов" и "риски использования услуг в преступных целях", включая риск использования технологических достижений.'}
              fontWeight={400}
            >

            </TextWithTitle>
            <NumberedDots
                header={'Данная Программа включает в себя, но не ограничивается:'}
                list={[
                  'порядок организации управления рисками легализации ОД/ФТ/ФРОМУ Субъекта, в том числе в разрезе его структурных подразделений (при наличии);',
                  'методику оценки рисков легализации ОД/ФТ/ФРОМУ с учетом основных категорий рисков (по типу клиента, страновому риску и риску услуг/продуктов, и (или) способа ее (его) предоставления) в отношении уровня риска клиента, а также степени подверженности услуг (продуктов) Субъекта рискам легализации ОД/ФТ/ФРОМУ;',
                  'порядок осуществления регулярного мониторинга, анализа и контроля за рисками клиентов и степенью подверженности продуктов (услуг) Субъекта рискам легализации ОД/ФТ/ФРОМУ, предусматривающий перечень предупредительных мероприятий, порядок и сроки их проведения, контроль за результатами в соответствии с принятыми мерами;',
                  'порядок присвоения, сроки и основания для пересмотра уровней рисков клиентов.'
                ]}
              >

              </NumberedDots>
            <Sizebox height={70} />
          </Reveal>
          <Reveal>
              <Centered>
                  <ImageLine
                      img={image94}
                  ></ImageLine>
              </Centered>

            <Sizebox height={70} />
            <NumberedDotsAndImage
              imageUrl={image93}
              dotsColor={'#4eff54'}
              header={
                'Требованиями к ПВК установлены факторы по типу клиентов, чей статус и (или) чья деятельность повышают и понижают риск легализации ОД/ФТ/ФРОМУ.\n\nПовышающие включают следующие факторы, но не ограничиваются:'
              }
              list={[
                'ПДЛ, их супруги и близкие родственники, а также юридические лица, бенефициарными владельцами которых являются указанные лица;',
                'лица без гражданства;',
                'граждане Республики Казахстан, не имеющие адреса регистрации или пребывания в Республики Казахстан;',
                'организации и лица, включенные в Список и (или) в Перечень, а также в Перечень ФРОМУ, а также организации и лица, бенефициарными собственниками которых являются указанные лица либо, находящиеся под контролем и действующие в интересах указанных лиц;',
                'НКО в организационно-правовой форме фондов, религиозных объединений;',
                'лица, расположенные (зарегистрированные) в иностранных государствах (не выполняющих/недостаточно выполняющих рекомендации ФAТФ, в отношении которых применяются международные санкции (эмбарго), принятые резолюциями Совбез ООН, включенные в перечень офшорных зон для целей банковской и страховой деятельности, деятельности ПУРЦБ и иных лицензируемых видов деятельности на РЦБ, деятельности акционерных инвестиционных фондов и деятельности организаций, осуществляющих микрофинансовую деятельность, установленный постановлением Правления Агентства Республики Казахстан по регулированию и развитию финансового рынка от 24 февраля 2020 года № 8, определенные Субъектами в качестве представляющих высокий риск легализации ОД/ФТ/ФРОМУ на основе факторов (сведений об уровне коррупции, незаконного производства, оборота и (или) транзита наркотиков, сведений о поддержке международного терроризма), а также расположенные в Республике Казахстан филиалы и представительства таких лиц;',
                'клиент, в отношении которого имеются основания для сомнения в достоверности полученных данных;',
                'клиент предлагает ускориться в проведении операции либо на нестандартных или необычно сложных схемах расчетов, использование которых отличаются от обычной практики Субъектов;',
                'клиент, в отношении которого Субъектом ранее были высказаны подозрения;',
                'клиент (его представитель) и бенефициарный собственник совершает действия, направленные на уклонение от процедур надлежащей проверки клиента (его представителя) и бенефициарного собственника, предусмотренных Законом о ПОД/ФТ.'
              ]}
            ></NumberedDotsAndImage>
              <Sizebox height={70} />
          </Reveal>
          <Reveal>
            <Centered>
            <Sizebox height={40} />
            <ImageLine
            img={image92}
            ></ImageLine>
            </Centered>
            <Sizebox height={40} />
            <TextWithTitle
              title={'"Понижающие" включают следующие факторы, но не ограничиваются:'}
             
            ></TextWithTitle>
              <Sizebox height={10} />
            <NumberedDots
             
                list={[
                    'государственные органы Республики Казахстан, а также юридические лица, подконтрольные государственным органам;',
                    'организации, акции которых включены в официальный список фондовой биржи Республики Казахстан и (или) фондовой биржи иностранного государства;',
                    'международные организации, расположенные на территории Республики Казахстан либо участником которых является Республика Казахстан;',
                    'лица, расположенные (зарегистрированные) в иностранных государствах, выполняющие международные стандарты и имеющие эффективную систему ПОД/ФТ в соответствии со сведениями Группы разработки финансовых мер борьбы с отмыванием денег (ФAТФ), а также расположенные в Республике Казахстан их филиалы и представительства.'
                  ]}
            >

            </NumberedDots>
          </Reveal>
          <Reveal>
          <Sizebox height={70} />
          <Centered>
            
            <ImageLine
            img={image91}
            ></ImageLine>
            </Centered>
            <Sizebox height={70} />
            <Centered>
            <div
                  style={{
                    display: 'block',
                    textAlign: 'left',
                    fontSize: '140%',
                    lineHeight: '1.5',
                    textIndent: '15px',
                  }}
                >
                  <p>
                  Субъекты также 
                    <span className="bold"> осуществляют оценку странового </span>(географического) риска, связанного с ведением деятельности в иностранных государствах, предоставлением услуг (продуктов) клиентам из таких иностранных государств и осуществлением операций с деньгами и (или) иным имуществом с участием таких иностранных государств.
                  </p>
                </div>
           </Centered>
          </Reveal>
          <Reveal>
          <Sizebox height={70} />
          <Centered>
            <ImageLine
            img={image90}
            ></ImageLine>
            </Centered>
            <Sizebox height={70} />
          </Reveal>
          <Reveal>
            <NotNumberedDots
              header={'К иностранным государствам, операции с которыми повышают риск легализации ОД/ФТ/ФРОМУ, включают следующие факторы, но не ограничиваются:'}
              dotsColor={'#4eff54'}
              list={[
                'включенные в перечень государств (территорий), не выполняющих либо недостаточно выполняющих рекомендации ФAТФ, составляемый АФМ;',
                'в отношении которых применяются международные санкции (эмбарго), принятые резолюциями СОВБЕЗ ООН;',
                'включенные в перечень офшорных зон для целей банковской и страховой деятельности, деятельности профессиональных участников рынка ценных бумаг и иных лицензируемых видов деятельности на рынке ценных бумаг, деятельности акционерных инвестиционных фондов и деятельности организаций, осуществляющих микрофинансовую деятельность, установленный постановлением Правления Агентства Республики Казахстан по регулированию и развитию финансового рынка от 24 февраля 2020 года № 8 (зарегистрирован в Реестре государственной регистрации нормативных правовых актов № 20095);',
                'определенные Субъектами в качестве представляющих высокий риск легализации ОД/ФТ/ФРОМУ на основе факторов (сведений об уровне коррупции, незаконного производства, оборота и (или) транзита наркотиков, сведений о поддержке международного терроризма).',

              ]}
            ></NotNumberedDots>
             
          </Reveal>
          <Reveal>
          <Sizebox height={70} />
          <Centered>
            <ImageLine
            img={image89}
            ></ImageLine>
            </Centered>
            <Sizebox height={70} />
          </Reveal>
          <Reveal>
            <Report_Information>
              <>
                <p style={{ textIndent: '15px' }}>
                К факторам, <span className="bold">понижающим риск </span>легализации ОД/ФТ/ФРОМУ относятся иностранные государства (территории), выполняющие международные стандарты и имеющие эффективную систему ПОД/ФТ в соответствии со сведениями ФAТФ.
                </p>
              </>
            </Report_Information>
          </Reveal>
          <Reveal>
          <Sizebox height={70} />
          <Centered>
            <ImageLine
            img={image88}
            ></ImageLine>
            </Centered>
            <Sizebox height={70} />
          </Reveal>
          <Reveal>
            <NumberedDots
              header={'Вместе с тем услуги (продукты) Субъектов также могут быть подвержены к рискам.\n\nК примеру, нижеперечисленные факторы являются повышающими риск легализации ОД/ФТ/ФРОМУ, но не ограничиваются:'}
              list={[
                'операции с деньгами и (или) иным имуществом, превышающие пороговое значение;',
                'деловые отношения с клиентом осуществляются при необычных обстоятельствах (например, слишком большое необъяснимое географическое расстояние между Субъектом и клиентом);',
                'совершение операции от имени или в пользу неизвестных или несвязанных третьих лиц;',
                'совершение операций, связанных с анонимными банковскими счетами или с использованием анонимных, вымышленных имен, включая наличные расчеты;',
                'совершение операций, не имеющих экономического смысла или правовой цели;',
                'совершение клиентом операций с несвойственной ему частотой или на необычно крупную для данного клиента сумму и т.д.'
              ]}
            ></NumberedDots>
          </Reveal>
          <Reveal>
          <Sizebox height={70} />
          <Centered>
            <ImageLine
            img={image87}
            ></ImageLine>
            </Centered>
            <Sizebox height={70} />
          </Reveal>
          <Reveal>
            <NumberedDots
              header={'При этом способы предоставления продукта (услуги), повышающими риск легализации ОД/ФТ/ФРОМУ, включают следующие факторы, но не ограничиваются:'}
              list={[
                'осуществление операции без физического присутствия клиента (его представителя);',
                'использование услуг третьих сторон для применения мер надлежащей проверки клиента (его представителя) и бенефициарного собственника.',
              ]}
            ></NumberedDots>
          </Reveal>
          <Reveal>
          <Sizebox height={70} />
          <Centered>
            <ImageLine
            img={image86}
            ></ImageLine>
            </Centered>
            <Sizebox height={70} />
          </Reveal>
          <Reveal>
            <TextWithTitle
              title={'К способам предоставления продукта (услуги), понижающими риск легализации ОД/ФТ/ФРОМУ, включают следующие факторы, но не ограничиваются:'}
            ></TextWithTitle>
            <NotNumberedDots
                list={[
                  'осуществление операции при личном присутствии клиента.',
                  
                ]}
            ></NotNumberedDots>
          </Reveal>
          <Reveal>
          <Sizebox height={70} />
          <Centered>
            <ImageLine
            img={image85}
            ></ImageLine>
            </Centered>
            <Sizebox height={70} />
            <TextWithTitle
              title={'Субъектами могут включить дополнительные факторы риска по согласованию с АФМ.'}
            ></TextWithTitle>
          </Reveal>
          <Reveal>
            <Sizebox height={60}></Sizebox>
            <VideoLine
              url={
                'https://videos.sproutvideo.com/embed/1190d6b6181de5cf98/b07ef776b68992ed'
              }
            ></VideoLine>
            <Sizebox height={40} />
            <TextWithTitle
              title={'В рамках реализации данной Программы Субъектами принимаются меры по классификации клиентов с учетом категорий и факторов риска, а также иных категорий рисков, устанавливаемых Субъектами.'}
            ></TextWithTitle><Sizebox height={20} />
            <TextWithTitle
              title={'Уровень риска клиента (группы клиентов) устанавливается Субъектами по результатам анализа имеющихся у Субъектов сведений о клиенте (клиентах) и оценивается по шкале определения уровня риска, которая состоит не менее, чем из двух уровней низкий и высокий.'}
            ></TextWithTitle><Sizebox height={20} />
            <TextWithTitle
              title={'Сама оценка рисков с использованием категорий и факторов рисков, проводится в отношении клиентов (групп клиентов) на основе результатов мониторинга операций (деловых отношений).'}
            ></TextWithTitle>
               <Sizebox height={70} />
          </Reveal>
          <Reveal>
            <TextWithTitle
              title={'Пересмотр уровня риска клиента (группы клиентов) осуществляется Субъектами по мере обновления сведений о клиенте (группе клиентов) и результатов мониторинга операций (деловых отношений).'}
            ></TextWithTitle>
            <NumberedDots
              header={'Субъекты определяют и оценивают риски легализации ОД/ФТ/ФРОМУ, возникающие при:'}
              list={[
                'разработке новых продуктов и новой деловой практики, включая новые механизмы передачи;',
                'использовании новых или развивающихся технологий, как для новых, так и для уже существующих продуктов.',
                'Оценка рисков легализации ОД/ФТ/ФРОМУ проводится до запуска новых продуктов, деловой практики или использования новых или развивающихся технологий.'
              ]}
            >

            </NumberedDots>
          </Reveal>
          <Reveal>
          <Sizebox height={70} />
          <Centered>
            <ImageLine
            img={image84}
            ></ImageLine>
            </Centered>
          </Reveal>
             <Reveal>
              <Sizebox height={70} />
            
              <>
             
              <NumberedDots
                header={'Программа идентификации клиента его представителя и БС заключается в проведении Субъектами мероприятий по фиксированию и проверке достоверности сведений о клиенте (его представителе), выявлению БС и фиксированию сведений о нем, обновлению ранее полученных сведений о клиенте (его представителе), установлению и фиксированию предполагаемой цели деловых отношений, а также получению и фиксированию иных предусмотренных Законом о ПОД/ФТ сведений о клиенте и их представителях, включает, но не ограничивается:'}
                list={[
                  'порядок принятия клиентов, включая процедуру и основания для отказа в установлении деловых отношений и (или) в проведении операции, а также прекращения деловых отношений;',
                  'порядок идентификации клиента (его представителя) и БС, в том числе особенности процедур применения упрощенных и усиленных мер надлежащей проверки клиента (его представителя) и БС, порядок принятия Субъектом решения о признании физического лица БС клиента;',
                  'особенности идентификации при дистанционном установлении деловых отношений (без личного присутствия клиента или его представителя);',
                  'порядок оценки уровня риска клиента, основания оценки такого риска.'
                ]}
              ></NumberedDots>
              <Sizebox height={40}></Sizebox>
       
              <NumberedDots
                header={'Субъекты при проведении НПК идентифицируют их по следующим обязательствам:'}
                list={[
                  'идентификация клиента (его представителя) и БС и подтверждение личности клиента с использованием надежных, независимых первичных документов, данных или информации;',
                  'определение БС и принятие мер по проверке личности БС, которые позволяет Субъекту считать, что ему известно, кто является БС. Для юридических лиц и иностранных структур без образования юридического лица это должно включать получение информации Субъектом о структуре управления и собственности клиента;',
                  'понимание и, когда это необходимо, получение информации о целях и предполагаемом характере деловых отношений;',
                  'проведение на постоянной основе надлежащей проверки деловых отношений и полный анализ сделок, совершенных в рамках таких отношений для того, чтобы убедиться в соответствии проводимых сделок сведениям Субъектов о клиенте (его представителе) и БС, его хозяйственной деятельности и характере рисков, в том числе, когда необходимо, об источнике средств;',
                  'в отношении иностранных структур без образования юридического лица юридических образований, личных данных, занимающих эквивалентные или похожие должности.'
                ]}
              ></NumberedDots>
               <Sizebox height={40}></Sizebox>
              <NotNumberedDots
                header={'К перечню документов, необходимых для НПК Субъектами относятся:'}
                list={[
                  '"документ (-ы), удостоверяющий (-ие) личность" должностного (-ых) лица (лиц), уполномоченного (-ых) подписывать документы юридического лица, а также, на совершение действий от имени клиента без доверенности на совершение операций с деньгами и (или) иным имуществом;',
                  '"документы, подтверждающие полномочия" представителя клиента на совершение операций с деньгами и (или) иным имуществом от имени клиента, в том числе на подписание документов клиента;',
                  '"документ, удостоверяющий регистрацию в уполномоченных органах" Республики Казахстан на право въезда, выезда и пребывания физического лица-нерезидента на территории Республики Казахстан, если иное не предусмотрено международными договорами, ратифицированными Республикой Казахстан.',
                    ]}
              /><Sizebox height={40}></Sizebox>
              <TextWithTitle
                  title={'Субъекты при проведении НПК документально фиксируют сведения о клиенте (его представителе) и БС на основании представляемых по выбору клиента (его представителя) оригиналов либо нотариально засвидетельствованных копий документов, либо копий документов с проставлением апостиля или в легализованном порядке, установленном международными договорами, ратифицированными Республикой Казахстан.'
              }
                ></TextWithTitle><Sizebox height={10}></Sizebox>
                <TextWithTitle
                  title={ 'Документы и сведения, полученные в рамках идентификации клиента (его представителя) и БС, документально фиксируются и вносятся (включаются) Субъектами в досье клиента.'}
                ></TextWithTitle>
            
              <Sizebox height={40}></Sizebox>
              <TextWithTitle
                 title={'Субъекты проводят идентификацию клиента (его представителя) и БС, проверку деловых отношений и изучение операций, включая получение и фиксирование сведений об источнике финансирования совершаемых операций, с учетом уровня риска клиента, а также проводят проверку достоверности полученных сведений о клиенте в случаях:'}
              ></TextWithTitle>
              <NumberedDots
                list={[
                  'совершения клиентом пороговой операции (сделки);',
                  'совершения (попытки совершения) клиентом подозрительной операции (сделки);',
                  'совершения клиентом необычной операции (сделки);',
                  'совершения клиентом операции (сделки), имеющей характеристики, соответствующие типологиям, схемам и способам легализации (отмывания) преступных доходов и финансирования терроризма.'
                ]}
              ></NumberedDots>
                
              </>
           
          </Reveal>
          <Reveal>
          <Sizebox height={70} />
          <Centered>
            <ImageLine
            img={image83}
            ></ImageLine>
            </Centered>
          </Reveal>
          <Reveal><Sizebox height={40} />
            <TextWithTitle
              title={'В целях реализации требований Закона о ПОД/ФТ по надлежащей проверке клиента (его представителя) и БС, а также по выявлению и направлению в АФМ сообщений об операциях, подлежащих финансовому мониторингу, Субъекты разрабатывают программу мониторинга и изучения операций клиентов.'}
            ></TextWithTitle><Sizebox height={20} />
            <NumberedDots
              header={'Программа мониторинга и изучения операций клиентов для Субъектов, осуществляющих свою деятельность, единолично включает, но не ограничивается:'}
              list={[
                'перечень признаков необычных и подозрительных операций, составленный на основе признаков определения подозрительных операций, утверждаемых АФМ, а также разработанных Субъектами самостоятельно;',
                'процедуру выявления операции клиента, имеющей характеристики, соответствующие типологиям, схемам и способам легализации ОД/ФТ/ФРОМУ;',
                'порядок принятия и описание мер, принимаемых Субъектами в отношении клиента и его операций в случае осуществления клиентом систематически и (или) в значительных объемах необычных и (или) подозрительных операций;',
                'порядок осуществления постоянного усиленного мониторинга финансовых операций, принятых на обслуживание клиентов, являющихся ПДЛ, их супругом (супругой) и близкими родственниками, а также, чьими БС являются указанные лица независимо от формы их осуществления и суммы, на которую они совершены либо могут или могли быть совершены, включая установление источника происхождения денежных средств и (или) иного имущества таких клиентов.'
              ]}
            ></NumberedDots><Sizebox height={40} />
            <NumberedDots
              header={'В случае назначения Субъектом ответственного работника либо работников подразделения по ПОД/ФТ/ФРОМУ, программа мониторинга и изучения операций клиентов дополнительно включает, но не ограничивается:'}
              list={[
                'распределение обязанностей между подразделениями (работниками) Субъекта по обновлению ранее полученных и (или) получению дополнительных сведений о клиенте (его представителе) и БС;',
                'распределение обязанностей между подразделениями (работниками) Субъекта по выявлению и передаче между подразделениями (работниками) сведений о пороговых, необычных и подозрительных операциях;',
                'описание механизма взаимодействия подразделений Субъекта при выявлении пороговых, необычных и подозрительных операциях и др.'
              ]}
            ></NumberedDots>
          </Reveal><Sizebox height={80} />
          <Reveal>
            <TextWithTitle title={'В рамках данной Программы Субъектами проводятся мероприятия, направленные на установление целей и оснований всех пороговых, необычных, подозрительных операций и операций, имеющих характеристики, соответствующие типологиям, схемам и способам легализации ОД/ФТ/ФРОМУ.'}/>
            <Sizebox height={20} />
            <TextWithTitle title={'Результаты мониторинга и изучения операций клиентов используются для ежегодной оценки степени подверженности услуг Субъектов рискам легализации ОД/ФТ/ФРОМУ, а также для пересмотра уровней рисков клиентов.'}/>
            <Sizebox height={20} />
            <TextWithTitle title={'Полученные в рамках реализации Программы сведения вносятся в досье клиента и (или) хранятся у Субъекта на протяжении всего периода деловых отношений с клиентом и не менее пяти лет после совершения операции.'} />
            <Sizebox height={20} />
            <TextWithTitle title={'Частота изучения операций клиента определяется Субъектами с учетом уровня риска клиента и (или) степени подверженности услуг Субъектов, которыми пользуется клиент, рискам легализации ОД/ФТ/ФРОМУ, совершения (попытки совершения) клиентом операций (операции) с деньгами, а также с учетом типологий, схем и способов легализации ОД/ФТ/ФРОМУ.'} />
            <Sizebox height={20} />
            <TextWithTitle title={'В случае присвоения клиенту высокого уровня риска, а также в случае совершения клиентом подозрительной операции Субъектами изучаются операции, которые проводит (проводил) клиент за период до проведения операции, определяемый Субъектом, но не более одного месяца.'}/>
          </Reveal><Sizebox height={40} />
          <Reveal>
          <Centered>
            <ImageLine
            img={image_82}
            ></ImageLine>
            </Centered><Sizebox height={40} />
          </Reveal>
          <Reveal>
          <TextWithTitle title={'Программа подготовки и обучения Субъектов в сфере ПОД/ФТ/ФРОМУ разрабатывается в соответствии с Требованиями , утверждаемыми АФМ по согласованию с госорганами-регуляторами, в соответствии с пунктом 8 статьи 11 Закона о ПОД/ФТ.'} />
          <Sizebox height={20} />
          <TextWithTitle title={'Целью этой Программы является получение работниками Субъектов знаний и формирование навыков, необходимых для исполнения ими требований законодательства Республики Казахстан о ПОД/ФТ, а также ПВК и иных внутренних документов Субъекта в сфере ПОД/ФТ/ФРОМУ.'} />
          <Sizebox height={20} />
            <NumberedDots
              header={'В целях реализации Требований по подготовке и обучению Субъект:'}
              list={[
                'Разрабатывает программу подготовки и обучения в сфере ПОД/ФТ с учетом требований законодательства Республики Казахстан о ПОД/ФТ, а также особенностей деятельности субъектов и их клиентов.',
                'Утверждает перечень ответственных лиц, которые проходят обучение в целях ПОД/ФТ, до начала осуществления ими функций, связанных с соблюдением законодательства Республики Казахстан о ПОД/ФТ.',
                'Устанавливает порядок учета прохождения своими сотрудниками программы обучения.',
                'Ведет учет прохождения своими сотрудниками программы обучения.',
                'Устанавливает форму и содержание документа по факту проведения со своим сотрудником обучения и ознакомления с НПА РК в области ПОД/ФТ и внутренними документами, принятыми в целях организации внутреннего контроля и подтверждается его собственноручной подписью.',
                'Приобщает к личному делу своего сотрудника документы, подтверждающие прохождение им программы обучения.',
                'Размещает информацию о прохождении тестирования в личном кабинете веб-портала АФМ.'
              ]}
            />  
          </Reveal>
          <Sizebox height={40} />
          <Reveal>
            <HeaderWithLine
              header={'Требования к субъектам финансового мониторинга по подготовке и обучению в сфере ПОД/ФТ/ФРОМУ'}
            />
          </Reveal>
          <Reveal>
          <Sizebox height={20} />
          <Centered>
            <ImageLine
            img={image81}
            ></ImageLine>
            </Centered>
          </Reveal>
          <Reveal>
          <Sizebox height={20} />
          <Centered>
            <ImageLine
            img={image_80}
            ></ImageLine>
            </Centered>
            <Sizebox height={40} />
            <TextWithTitle
              title={'Субъекты проходят обучение в целях ПОД/ФТ в соответствии с программой обучения, которая содержит вышеуказанные направления.'}
            />
          </Reveal>
          <Reveal>
          <Sizebox height={20} />
          <Centered>
            <ImageLine
            img={image_79}
            ></ImageLine>
            </Centered>
          </Reveal>
          <Reveal>
          <Sizebox height={20} />
          <Centered>
            <ImageLine
            img={image_78}
            ></ImageLine>
            </Centered>
            <TextWithTitle
              title={'Перечень ответственных лиц, которые проходят обучение в целях ПОД/ФТ, до начала осуществления ими функций, связанных с соблюдением законодательства Республики Казахстан о ПОД/ФТ утверждается Руководителем СФМ.'}
            />
          </Reveal>
          <Reveal>
          <Sizebox height={20} />
          <Centered>
            <ImageLine
            img={image_77}
            ></ImageLine>
            </Centered><Sizebox height={40} />
            <Centered>
            <ImageLine
            img={image_76}
            ></ImageLine>
            </Centered><Sizebox height={40} />
            <TextWithTitle
              title={'Перечень ответственных лиц, которые проходят обучение в целях ПОД/ФТ, до начала осуществления ими функций, связанных с соблюдением законодательства Республики Казахстан о ПОД/ФТ утверждается Руководителем СФМ.'}
            />
          </Reveal><Sizebox height={40} />
          <Reveal>
            <TextWithTitle
              title={'В целях подтверждения изучения субъектами материала, изученного в процессе обучения субъекты проходят тестирование с периодичностью не реже 1 (одного) раза в 3 (три) года с даты прохождения тестирования на базе Центра и его территориальных подразделений.'}
            /><Sizebox height={20} />
            <TextWithTitle
              title={'Срок действия результатов тестирования составляет 3 (три) года с момента прохождения аттестации с положительным результатом.'}
            /><Sizebox height={20} />
            <NumberedDots
              header={'В настоящее время процедура прохождения тестирования проходит следующим образом:'}
              list={[
                'Войти на портал Агентства websfm.kz;',
                'Выбрать раздел «Обучение», затем вкладку «Тестирование»;',
                'Заполнить Заявку для прохождения тестирования на знание законодательства и оценки личных качеств.'
              ]}
            /><Sizebox height={40} />
            <TextWithTitle
              title={'При этом в Заявке тестируемый указывает свой ИИН и БИН организации (при наличии) и выбирает зал тестирования Центра, который имеется во всех регионах Казахстана, дату, а также время прохождения тестирования.'}
            /> <Sizebox height={20} />
            <TextWithTitle
              title={'Сами вопросы разрабатываются АФМ, распределение по ним происходит на основании Заявки субъекта, то есть 80% – общие вопросы/20% – профильные вопросы.'}
            />

            <Sizebox height={20} />
            <NotNumberedDots
              header={'Продолжительность тестирования составляет – 90 мин. '}
              list={[
                'Количество вопросов по НПА – 100/70; ',
                'Количество вопросов ОЛК – 24'
              ]}
            />
          </Reveal>
          <Reveal>
            <Sizebox height={40} />
            <NextLesson
              handleOnClick={() => {
                CheckCurrentChapter(id);
              }}
            />
          </Reveal>
        </LessonPage>
      );
    case 80:
        return (<LessonPage name={'Урок 1'} lecturer={'AML Academy'}>
            <Reveal>
                <ImageLine
                    img={image80}
                    color={'#FFFFFF'}
                />
                <Sizebox height={40} />
            </Reveal>
            <Reveal>
                <HeaderWithLine headerColor={'#1F3C88'} lineColor={'#CADEFC'}>
                    <>
                        Государственный контроль и надзор за соблюдением законодательства ПОД/ФТ реализуется над субъектами финансового мониторинга соответствующими государственными органами-регуляторами.
                        Ниже продемонстрированы государственные органы и субъекты финансового мониторинга в отношении которых осуществляется контроль, в части соблюдения законодательства ПОД/ФТ.
                    </>
                </HeaderWithLine>
                <Sizebox height={40} />
                <Reveal>
                    <ImageLine
                        img={image82}
                        color={'#FFFFFF'}
                    />
                    <Sizebox height={40} />
                </Reveal>
                <Sizebox height={40}/>
            </Reveal>
            <Reveal>
                <TextWithTitle title={"Кроме осуществления государственного контроля в отношении подконтрольных субъектов, госорганы-регуляторы также обязаны:"}
                />
                <NumberedDots
                    dotsColor={'#CADEFC'}
                    list={[
                        'предоставлять информацию, сведения и документы, необходимые АФМ для осуществления финансового мониторинга и ПОД/ФТ;',
                        'ассмотреть уведомление АФМ о нарушении законодательства Республики Казахстан о ПОД/ФТ и сообщить о принятых мерах в установленный законодательством Республики Казахстан срок в АФМ;',
                        'обеспечивать соответствующий режим хранения, защиты и сохранность полученных в процессе своей деятельности информации, сведений и документов, составляющих служебную, коммерческую, банковскую или иную охраняемую законом тайну;',
                        'обеспечивать соблюдение прав и законных интересов человека и гражданина, юридических лиц и государства в процессе осуществления контрольных функций;',
                        'учитывать информацию из отчета оценки рисков легализации (отмывания) доходов и финансирования терроризма при отборе субъектов (объектов) контроля;',
                    ]}
                />
                <Sizebox height={40}/>
            </Reveal>
            <Reveal>

                <Sizebox height={40} />
                <VideoWithTitleAndText
                    url={'https://videos.sproutvideo.com/embed/7990d0b51d1ae4c1f0/6e43cdd74851d083?playerColor=1f71a1'}
                    title={'Проверочный лист'}
                    text={[
                        'Важно отметить, что регулирующий государственный орган и уполномоченный орган по предпринимательству в лице Министерства национальной экономики утверждают совместным актом проверочные листы, которые размещаются на интернет-ресурсах регулирующих государственных органов.',
                        'Проверочный лист включает в себя перечень обязательных требований, предъявляемых к деятельности субъектов финансового мониторинга.'
                    ]}
                />
            </Reveal>
            <Sizebox height={50} />
            <Reveal/>
            <Reveal>
                <Report_Information>
                    При этом, проверке и профилактическому контролю с посещением субъекта (объекта) контроля и надзора подлежат только требования, установленные в проверочных листах.
                </Report_Information>
                <Sizebox height={40} />
            </Reveal>
            <Reveal>
                <TextWithTitle title={"Основанием для назначения проверки является график формируемый в автоматическом режиме на ежегодной основе (а при его отсутствии график утверждается регулирующим государственным органом) в отношении субъектов контроля и надзора."}
                />

                <Sizebox height={40} />
                <NotNumberedDots
                    dotsColor={'#CADEFC'}
                    list={[
                        'Стоит отметить, что орган контроля и надзора обязан уведомить в письменном виде субъект контроля и надзора (руководителя юридического лица либо его уполномоченное лицо, физическое лицо) о начале проведения проверки на соответствие требованиям не менее чем за тридцать календарных дней до начала проверки с указанием даты ее начала.',
                        'При проведении внеплановой проверки, орган контроля обязан известить субъект контроля о начале проведения  внеплановой проверки не менее чем за сутки до ее начала с указанием предмета  проведения проверки субъекта (объекта) контроля и надзора.',
                    ]}
                />
                <Sizebox height={40}/>
            </Reveal>
            <Reveal>
                <HeaderWithLine headerColor={'#1F3C88'} lineColor={'#CADEFC'}>
                    <>
                        Далее рассмотрим реализацию государственного контроля на предмет соблюдения требований законодательства ПОД/ФТ на примере Агентства РК по финансовому мониторингу.
                    </>
                </HeaderWithLine>
            </Reveal>
            <Reveal>
                <Sizebox height={40}/>
                <Report_Information>
                    <>
                        <p className='italic'>
                            Срок действия результатов тестирования составляет 3 (три) года с момента прохождения аттестации с положительным результатом.                            </p>
                    </>
                </Report_Information>
                <Sizebox height={40} />
            </Reveal>
            <Sizebox height={40}/>
            <Reveal>
                <TabsGlossary
                    tabs={[
                        'Профилактический контроль без посещения субъекта финансового мониторинга',
                        'Профилактический контроль с посещением субъекта',
                        'Внеплановая проверка',
                    ]}
                    tabsGlossary={{
                        'Профилактический контроль без посещения субъекта финансового мониторинга': <>
                            <RandomParapraph>осуществляется органами контроля и надзора на основе:</RandomParapraph>
                            <Sizebox height={20} />
                            <NotNumberedDots dotsColor={'black'} list={[
                                'изучения и анализа представленной субъектом контроля и надзора отчетности',
                                'сведений уполномоченных государственных органов',
                                'а также полученных из государственных информационных систем и электронных информационных ресурсов, и других документов и сведений о деятельности субъекта (объекта) контроля и надзора',
                            ]}/>
                            <Sizebox height={20} />
                            <RandomParapraph>Для проведения данного вида контроля определяется порядок проведения профилактического контроля без посещения субъекта финансового мониторинга с обязательным указанием целей, инструментов, способов проведения, перечня субъектов, кратности проведения, способа учета наблюдения субъекта контроля и надзора.</RandomParapraph>
                            <Sizebox height={20} />
                            <RandomParapraph><span class="bold">В особенности Профилактического контроля без посещения</span> относятся следующие условия:</RandomParapraph>
                            <Sizebox height={20} />
                            <NotNumberedDots dotsColor={'black'} list={[
                                'органам контроля и надзора запрещается посещать субъекты  финансового мониторинга;',
                                'не требуются регистрация в уполномоченном органе в области правовой статистики и специальных учетов и предварительное уведомление субъекта финансового мониторинга;',
                                'по итогам профилактического контроля без посещения субъекта финансового мониторинга составляются итоговые документы (справка, заключение, рекомендации и другие) без возбуждения дела об административном правонарушении в случае наличия нарушения, но с обязательным разъяснением субъекту финансового мониторинга порядка его устранения.',
                            ]}/>
                            <Sizebox height={20} />
                            <RandomParapraph>При этом результаты анализа профилактического контроля без посещения субъекта финансового мониторинга являются основанием для отбора субъектов финансового мониторинга для проведения профилактического контроля с посещением субъекта финансового мониторинга.</RandomParapraph>
                        </>,
                        'Профилактический контроль с посещением субъекта': <>
                            <RandomParapraph>представляет собой контроль, который органы контроля и надзора проводят с посещением субъекта финансового мониторинга и по результатам которого в случае выявления нарушений субъектам финансового мониторинга выносится предписание об их устранении без возбуждения административного производства, а также в случаях, предусмотренных законами Республики Казахстан, применяются меры оперативного реагирования.</RandomParapraph>
                            <Sizebox height={20} />
                            <RandomParapraph>Кратность профилактического контроля с посещением субъекта финансового мониторинга определяется органами контроля и надзора в отношении субъектов финансового мониторинга, отнесенных к высокой и средней степеням риска, не чаще двух раз в год.</RandomParapraph>
                            <Sizebox height={20} />
                            <RandomParapraph>Для проведения профилактического контроля с посещением субъекта финансового мониторинга регулирующие государственные органы разрабатывают и совместно с уполномоченным органом по предпринимательству утверждают акты, касающиеся критериев оценки степени риска для отбора финансового мониторинга, проверочных листов, которые размещаются на интернет-ресурсах регулирующих государственных органов и иных цифровых платформах с обеспечением режима безопасности.</RandomParapraph>
                            <Sizebox height={20} />
                            <RandomParapraph>Основанием для назначения профилактического контроля с посещением субъекта финансового мониторинга является полугодовой список субъектов контроля и надзора, утвержденный первым руководителем регулирующего государственного органа, за исключением случая формирования графиков и полугодовых списков в информационных системах оценки и управления рисками в автоматическом режиме.</RandomParapraph>
                            <Sizebox height={20} />
                            <RandomParapraph>По итогам профилактического контроля с посещением субъекта финансового мониторинга могут быть применены меры оперативного реагирования (к примеру в случае отказа от представления документов, запрашиваемых проверяющим) без привлечения к административной ответственности в соответствии со статьей 136 Предпринимательского Кодекса.</RandomParapraph>
                            <Sizebox height={20} />
                        </>,
                        'Внеплановая проверка': <>
                            <RandomParapraph>проверка, назначаемая органом контроля и надзора по конкретным фактам и обстоятельствам, послужившим основанием для назначения внеплановой проверки в отношении конкретного субъекта финансового мониторинга, с целью предупреждения и (или) устранения непосредственной угрозы жизни и здоровью человека, окружающей среде, законным интересам физических и юридических лиц, государства.
                            </RandomParapraph>
                            <Sizebox height={20} />
                            <RandomParapraph>Основаниями внеплановой проверки субъектов финансового мониторинга являются:
                            </RandomParapraph>
                            <NotNumberedDots dotsColor={'black'} list={[
                                'контроль исполнения предписаний об устранении выявленных грубых нарушений, в результате проверки на соответствие требованиям и профилактического контроля с посещением субъекта финансового мониторинга;',
                                'контроль исполнения предписаний об устранении выявленных значительных и незначительных нарушений, в результате проверки на соответствие требованиям и профилактического контроля с посещением субъекта финансового мониторинга в случаях, если субъект финансового мониторинга более одного раза не предоставил информацию об устранении выявленных нарушений и (или) не устранил нарушения;',
                                'обращения физ и юр лиц по нарушениям требований законодательства Республики Казахстан при наличии убедительных оснований и подтверждающих доказательств;',
                                'поручения органов прокуратуры по конкретным фактам причинения либо об угрозе причинения вреда жизни, здоровью человека, окружающей среде и законным интересам физических и юридических лиц, государства;',
                                'обращения государственных органов по конкретным фактам причинения вреда жизни, здоровью человека, окружающей среде и законным интересам физических и юридических лиц, государства, а также нарушений требований законодательства Республики Казахстан, неустранение которых влечет причинение вреда жизни и здоровью человека;',
                                'повторная проверка, связанная с обращением субъекта финансового мониторинга о несогласии с первоначальной проверкой (неправомерность применения мер оперативного реагирования);',
                                'поручение органа уголовного преследования по основаниям, предусмотренным Уголовно-процессуальным кодексом Республики Казахстан;',
                            ]}/>
                            <Sizebox height={20} />
                            <RandomParapraph>Внеплановые проверки не проводятся в случаях анонимных обращений.</RandomParapraph>
                            <Sizebox height={20} />
                        </>,
                    }}
                    color={'#3A3939'}
                    tabsBackgroundColor={'#BAD6FF'}
                />
            </Reveal>
            <Sizebox height={100} />
            <Reveal>
                <Sizebox height={40}/>
                <NextLesson handleOnClick={() => {
                    CheckCurrentChapter(id, 11);
                }}/>
            </Reveal>

        </LessonPage>)
      case 11:
          return (
              <TestPage
                  finished={modules[6].quiz.quiz_max_points === 100}
                  name={'ТЕСТИРОВАНИЕ 5'}
                  questions={modules[6].quiz.quizList || []}
                  quizId={17}
                  handleOpenModal={handleOpenFeedbackModal}
              ></TestPage>
          );
  }
}

export default GetLesson;
