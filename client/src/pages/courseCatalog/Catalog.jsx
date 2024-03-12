import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Footer from "../../components/footer/Footer";
import './catalog.scss';
import { useLocation } from 'react-router-dom';
import { AiFillFolder } from "react-icons/ai";
import { BsFilter } from "react-icons/bs";
import { BiSearch } from "react-icons/bi";
import { AiFillStar } from "react-icons/ai";
import { MdOndemandVideo } from "react-icons/md";
import base_url from "../../settings/base_url";
import axios from "axios";
import Header from "../../components/header/Header";
import { useCategoryFormat } from '../Context/Context.jsx';
import { Button, Dialog, DialogTitle, DialogContent, DialogActions, TextField } from '@mui/material';
import Alert from '@mui/material/Alert';
import CheckIcon from '@mui/icons-material/Check';
import { t } from "i18next";
import { useTranslation } from "react-i18next";
import { useStyle } from "../../components/VisualModal/StyleContext";
import VisualModal from "../../components/VisualModal/VisualModal";

function SimpleAlert() {
    return (
      <Alert icon={<CheckIcon fontSize="inherit" />} severity="success">
        Here is a gentle confirmation that your action was successful.
      </Alert>
    );
  }



function Catalog() {

    const { styles, open, setOpen, userEntry, checkStyle } = useStyle();
    const [imagesHidden, setImagesHidden] = useState(false);
    const [letterInterval, setLetterInterval] = useState("standard");
    const [isReload, setIsReload] = useState(0);
    const { t } = useTranslation();
    const { i18n } = useTranslation();
    const currentLanguage = i18n.language;
    const [modalOpen, setModalOpen] = useState(false);

    const handleOpenModal = () => {
        setModalOpen(true);
    };
    const handleCloseModal = () => {
        setModalOpen(false);
        handleReload()
    };
    useEffect(() => {
        const fetchData = async () => {
            try {
                const url = "/api/aml/course/getUserCourses";
                const url1 = "/api/aml/course/getUserCoursesNoPr";
                let response = null; // Use let instead of const for response to allow reassignment
                if (jwtToken != null) {
                    response = await axios.get(`${base_url}${url}`, {
                        headers: {
                            Authorization: `Bearer ${jwtToken}`,
                        },
                    });
                } else {
                    response = await axios.get(`${base_url}${url1}`);
                }
                console.log(response.data);
              
    
                let courses = [
                    ...response.data,
                ];
                const _coursesByCategory = {};
                if (response.status === 200) {
                    courses.forEach((course) => {
                        if (course.courseDTO.type_of_study === 'дистанционное') { // Добавляем проверку на тип обучения
                            const categoryName = course.courseDTO.courseCategory.category_name;
                            if (!_coursesByCategory[categoryName]) {
                                _coursesByCategory[categoryName] = [];
                            }
                            _coursesByCategory[categoryName].push(course);
                        }
                    });
                    const _groupedCourses = {};
                    courses.forEach(course => {
                        if (course.courseDTO.type_of_study === 'онлайн') {
                            const group = course.courseDTO.course_image; // Проверяем наличие свойства перед его использованием
                            if (!_groupedCourses[group]) {
                                _groupedCourses[group] = [];
                            }
                            _groupedCourses[group].push(course);
                        }
                    });
                    console.log(_groupedCourses);
                   

                    // console.log(_coursesByCategory)
                    setCoursesByCategory(_coursesByCategory);
                    setGroupedCourses(_groupedCourses)
                    setData(response.data);
    
                    // console.log(_coursesByCategory)
                    setCoursesByCategory(_coursesByCategory);
                    setData(response.data);
                } else {
                    // Handle other status codes if needed
                    setError(response.statusText);
                    // console.log(response.statusText);
                }
    
                // Iterate through the courses and categorize them
            } catch (error) {
                setError(error);
                console.error(error);
            }
    
            setLoading(false);
        };
    
        fetchData();
    }, [isReload]);
   
    const [activeTab, setActiveTab] = useState(1);
    const handleColorModeChange = (mode) => {
        // Remove previous color mode classes
        const containerElement = document.querySelector(".text-content");
        if (containerElement) {
            containerElement.classList.remove(
                "light-mode",
                "dark-mode",
                "inverted-mode",
                "blue-mode",
            );
        }

        const { colorMode } = styles;

        if (containerElement) {
            containerElement.classList.add(colorMode + "-mode");
        }
    };

    const handleTabClick = (tabIndex) => {
        setActiveTab(tabIndex);
    };
    const handleOpenVisualModal = () => {
        console.log("OPEN");
        setOpenVisualModal((prev) => !prev);
        setOpen((prev) => !prev);
    };
    const [openVisualModal, setOpenVisualModal] = useState(open);

    const handleRemoveImages = () => {
        console.log("Images hidden");

        setImagesHidden(true);
    };

    const handleShowImages = () => {
        setImagesHidden(false);
    };
    const location = useLocation();
    useEffect(() => {
        const hash = location.hash;
        console.log(hash)
        if (hash === '#top'){
            window.scrollTo(0, 0); // Scrolls to the top of the page
        }
        const textContentElement = document.querySelector(".text-content");
        const family = styles.fontFamily;

        if (family) {
            textContentElement.style.fontFamily = family;
        }
    }, []);


    const fontSizes = {
        small: {
          fontSize: "15px",
          lineHeight: "17px",
          caption: { fontSize: "26px", lineHeight: "28px" },
          subtitle: { fontSize: "14px", lineHeight: "16px" },
        },
        standard: {
          fontSize: "16px",
          lineHeight: "18px",
          caption: { fontSize: "36px", lineHeight: "38px" },
          subtitle: { fontSize: "18px", lineHeight: "20px" },
        },
        large: {
          fontSize: "24px",
          lineHeight: "26px",
          caption: { fontSize: "39px", lineHeight: "41px" },
          subtitle: { fontSize: "22px", lineHeight: "24px" },
        },
      };
      useEffect(() => {
        if (!checkStyle) return;
        console.log(userEntry);
        if (userEntry) return;
    
        const textContentElement = document.querySelectorAll(".text-content");
        const size = styles.fontSize;
        setImagesHidden(!styles.showImage);
    
        if (textContentElement) {
          textContentElement.forEach((item) => {
            switch (size) {
              case "small":
              case "large":
                // Use specified size for small and large modes
                item.style.fontSize = fontSizes[size].fontSize;
                item.style.lineHeight = fontSizes[size].lineHeight;
    
                // Adjust size for caption and subtitle in small and large modes
                if (item.classList.contains("caption")) {
                  item.style.fontSize = fontSizes[size].caption.fontSize;
                  item.style.lineHeight = fontSizes[size].caption.lineHeight;
                } else if (item.classList.contains("subtitle")) {
                  item.style.fontSize = fontSizes[size].subtitle.fontSize;
                  item.style.lineHeight = fontSizes[size].subtitle.lineHeight;
                }
                break;
    
              case "standard":
                // Use different sizes for different elements in standard mode
                if (item.classList.contains("caption")) {
                  item.style.fontSize = fontSizes[size].caption.fontSize;
                  item.style.lineHeight = fontSizes[size].caption.lineHeight;
                } else if (item.classList.contains("subtitle")) {
                  item.style.fontSize = fontSizes[size].subtitle.fontSize;
                  item.style.lineHeight = fontSizes[size].subtitle.lineHeight;
                } else {
                  // Default size for other elements
                  item.style.fontSize = fontSizes[size].fontSize;
                  item.style.lineHeight = fontSizes[size].lineHeight;
                }
                break;
    
              default:
                break;
            }
          });
        }
        handleColorModeChange();
    
      }, [checkStyle, userEntry, styles, setImagesHidden, fontSizes]);


    useEffect(() => {
        const textContentElement = document.querySelector(".text-content");
        const family = styles.fontFamily;

        if (family) {
            textContentElement.style.fontFamily = family;
        }
    }, []);
    const handleReload = () => {
        setIsReload(isReload+1)
    }

    const navigate = useNavigate();
    const handleApplication = (rowId) => {
        // Handle application submission for the row with ID 'rowId'
        console.log('Application submitted for row:', rowId);
    };
    const ApplicationModal = ({ open, handleClose,courseId, courseName }) => {

        const [fullName, setFullName] = useState('');
        const [contacts, setContacts] = useState('');
        const [email, setEmail] = useState('');
        
    
        const handleSubmit = () => {
            setLoading(true);
            console.log('clicked')
    
            const fetchData = async () => {
                const formData = new FormData();
                formData.append('userCourse', JSON.stringify({
                    fio: fullName,
                    phone_number: contacts,
                    email: email,
                    progress_percentage: 0.0
                }));
              
    
                try {
                    const response = await axios.post(
                        `${base_url}/api/aml/course/saveUserRequest/course/${selectedCourseId}`, 
                        formData, 
                        {
                        }
                    );
                    console.log(fullName);
    
                    alert("Заявка отправлена!!!");
                    handleCloseModal()
                    handleReload()
                    
                } catch (error) {
                    console.log(error);
                    alert("Ошибка")
                }
            };
            
            fetchData();
            setLoading(false);
        }
    
    
    
        return (
            <Dialog open={open} onClose={handleClose}  PaperProps={{
                component: 'form',
                onSubmit: (event) => {
                  event.preventDefault();
                  const formData = new FormData(event.currentTarget);
                  const formJson = Object.fromEntries(formData.entries());
                  const email = formJson.email;
                  const fio = formJson.fio;
                  const contacts = formJson.contacts;
                    console.log(email);
                    handleSubmit();
                  handleClose();
                },
              }}>
                <DialogTitle>Подать заявку на курс</DialogTitle>
                <DialogContent>
                    <TextField
                        autoFocus
                        label="ФИО"
                        value={fullName}
                        onChange={(e) => setFullName(e.target.value)}
                        fullWidth
                        required
                        id="fio"
                        margin="normal"

                    />
                    <TextField
                        autoFocus
                        label="Контакты"
                        value={contacts}
                        onChange={(e) => setContacts(e.target.value)}
                        fullWidth
                        id="contacts"
                        required
                        margin="normal"
                    />
                    <TextField
                        autoFocus
                        required
                        margin="normal"
                        id="email"
                        label="Электронная почта"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        fullWidth
                        type="email"
                    />
                     <TextField
                        label="Курс"
                        value={courseName}
                        readOnly={true}
                        fullWidth
                        margin="normal"
                    />
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose} color="primary">
                        Отмена
                    </Button>
                    <Button type="submit" color="primary">
                        Отправить
                    </Button>
                </DialogActions>
            </Dialog>
        );
    };
    
    
    

    const [data, setData] = useState(null);

    useEffect(() => {
        // Этот код будет выполнен при каждом изменении числа
        console.log('Число изменилось:', data);
      }, [data]);
    const [error, setError] = useState(null);
    const [isLoading, setLoading] = useState(true);

    const [coursesByCategory, setCoursesByCategory] = useState(null);
    console.log(coursesByCategory);

    const jwtToken = localStorage.getItem("jwtToken");
    const [selectedCourseId, setSelectedCourseId] = useState(null);
    const [selectedCourseName, setSelectedCourseName] = useState(null);

    const [categoryOpen, setCategoryOpen] = useState(false);
    const [categoryFormatOpen, setCategoryFormatOpen] = useState(false);
    const [filterOpen, setFilterOpen] = useState(false);
    const [filterFormatOpen, setFilterFormatOpen] = useState(false);
    const [categoryFilter, setCategoryFilter] = useState(["Все категории"]);
    const [searchValue, setSearchValue] = useState("");
    const [groupedCourses, setGroupedCourses] = useState("");
    const { categoryFormat, handleChangeCategoryFormat } = useCategoryFormat();
    console.log(categoryFormat)
    const handleCheckCategory = (e) => {
        const selectedCategory = e.target.value;
        setCategoryFilter((prevFilters) => {
            if (!e.target.checked) {
                return prevFilters.filter((filter) => filter !== selectedCategory);
            } else {
                prevFilters = prevFilters.filter(
                    (filter) => filter !== "Все категории"
                );
                return [...prevFilters, selectedCategory];
            }
        });
    };

    const handleCheckAllCategories = (e) => {
        if (!e.target.checked) {
            setCategoryFilter([]);
        } else {
            setCategoryFilter(["Все категории"]);
        }
    };

    const handleChangeSearchValue = (e) => {
        setSearchValue(e.target.value);
    };

    useEffect(() => {
        if (!data) return;

        if (searchValue === "") {
            const _coursesByCategory = {};
            data.forEach((course) => {
                const categoryName = course.courseDTO.courseCategory.category_name;
                if (!_coursesByCategory[categoryName]) {
                    _coursesByCategory[categoryName] = [];
                }
                _coursesByCategory[categoryName].push(course);
            });
            setCoursesByCategory(_coursesByCategory);
        } else {
            const _coursesByCategory = {};
            data
                .filter(
                    (course) =>
                        course.courseDTO.course_name
                            .toLowerCase()
                            .indexOf(searchValue.toLowerCase()) != -1 ||
                        course.courseDTO.courseCategory.category_name
                            .toLowerCase()
                            .indexOf(searchValue.toLowerCase()) != -1
                )
                .forEach((course) => {
                    const categoryName = course.courseDTO.courseCategory.category_name;
                    if (!_coursesByCategory[categoryName]) {
                        _coursesByCategory[categoryName] = [];
                    }
                    _coursesByCategory[categoryName].push(course);
                });
            setCoursesByCategory(_coursesByCategory);
        }
    }, [searchValue]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const url = "/api/aml/course/getUserCourses";
                const url1 = "/api/aml/course/getUserCoursesNoPr";
                let response = null; // Use let instead of const for response to allow reassignment
                if (jwtToken != null) {
                    response = await axios.get(`${base_url}${url}`, {
                        headers: {
                            Authorization: `Bearer ${jwtToken}`,
                        },
                    });
                } else {
                    response = await axios.get(`${base_url}${url1}`);
                }
                console.log(response.data);
              

                let courses = [
                    ...response.data,
                ];
                const _coursesByCategory = {};
                if (response.status === 200) {
                    courses.forEach((course) => {
                        if (course.courseDTO.type_of_study === 'дистанционное') { // Добавляем проверку на тип обучения
                            const categoryName = course.courseDTO.courseCategory.category_name;
                            if (!_coursesByCategory[categoryName]) {
                                _coursesByCategory[categoryName] = [];
                            }
                            _coursesByCategory[categoryName].push(course);
                        }
                    });
                    const _groupedCourses = {};
                    courses.forEach(course => {
                        if (course.courseDTO.type_of_study === 'онлайн') {
                            const group = course.courseDTO.course_image; // Проверяем наличие свойства перед его использованием
                            if (!_groupedCourses[group]) {
                                _groupedCourses[group] = [];
                            }
                            _groupedCourses[group].push(course);
                        }
                    });
                    console.log(_groupedCourses);
                   

                    // console.log(_coursesByCategory)
                    setCoursesByCategory(_coursesByCategory);
                    setGroupedCourses(_groupedCourses)
                    setData(response.data);
                } else {
                    // Handle other status codes if needed
                    setError(response.statusText);
                    // console.log(response.statusText);
                }

                // Iterate through the courses and categorize them
            } catch (error) {
                setError(error);
                console.error(error);
            }

            setLoading(false);
        };

        fetchData();
    }, []);
   
   


    return (
        <div
            className="catalog-page"
            style={{
                background:
                    styles.colorMode === "dark"
                        ? "#000"
                        : styles.colorMode === "light"
                            ? "#fff"
                            : styles.colorMode === "blue"
                                ? "#9dd1ff"
                                : "#000",
                color:
                    styles.colorMode === "dark"
                        ? "#fff"
                        : styles.colorMode === "light"
                            ? "#343434"
                            : styles.colorMode === "blue"
                                ? "#063462"
                                : "#000",
            }}
        >
            <VisualModal
                open={openVisualModal}
                onRemoveImages={handleRemoveImages}
                onShowImages={handleShowImages}
                onFontFamily={() => {}}
                onIntervalChange={() => {}}
                styles={styles}
            />
            <Header
                dark={styles.colorMode == "dark" ? false : true}
                handleOpenVisualModal={handleOpenVisualModal}
            />
            <div>
                <div className="container"></div>
            </div>

            <main className="page-content">
                <div className="catalog-header">
                    <div className="container">
                        <div className='header-title'>
                            <h3 className="text-content caption"
                                style={{
                                    color:
                                        styles.colorMode === "dark"
                                            ? "#fff"
                                            : styles.colorMode === "light"
                                                ? "#3A3939"
                                                : styles.colorMode === "blue"
                                                    ? "#063462"
                                                    : "#000",
                                }}
                            >
                                Каталог курсов
                            </h3>
                        </div>
                        <div
                            className="header-actions"
                            style={{
                                background:
                                    styles.colorMode === "dark"
                                        ? "#000"
                                        : styles.colorMode === "light"
                                            ? "#fff"
                                            : styles.colorMode === "blue"
                                                ? "#9dd1ff"
                                                : "#000",
                            }}
                        >
                            <div className="filters">
                                <div>
                                    <div
                                        onClick={() => {
                                            setCategoryOpen((prev) => !prev);
                                            setFilterOpen(false);
                                        }}
                                    >
                                        <AiFillFolder size={20} className="icon" />
                                        <span
                                            className="inline-text"
                                            style={{
                                                color:
                                                    styles.colorMode === "dark"
                                                        ? "#fff"
                                                        : styles.colorMode === "light"
                                                            ? "#343434"
                                                            : styles.colorMode === "blue"
                                                                ? "#063462"
                                                                : "#000",
                                            }}
                                        >
                      {t("categories")}
                    </span>
                                    </div>
                                    <div
                                        className="categories"
                                        style={{
                                            display: categoryOpen ? "flex" : "none",
                                        }}
                                        onMouseLeave={() => {
                                            setCategoryOpen(false);
                                        }}
                                    >
                                        <div>
                                            <input
                                                onChange={handleCheckAllCategories}
                                                checked={categoryFilter.includes("Все категории")}
                                                type="checkbox"
                                                value={"Все категории"}
                                            />
                                            <label className="inline-text">
                                                {t("all categories")}
                                            </label>
                                        </div>
                                        {Object.keys(coursesByCategory || {}).map((category) => {
                                            const isChecked =
                                                categoryFilter.includes(category) &&
                                                !category.includes("Все категории");

                                            return (
                                                <div
                                                    key={category}
                                                    style={{
                                                        background:
                                                            styles.colorMode === "dark"
                                                                ? "#000"
                                                                : styles.colorMode === "light"
                                                                    ? "#f2f2f2"
                                                                    : styles.colorMode === "blue"
                                                                        ? "#9dd1ff"
                                                                        : "#000",
                                                    }}
                                                >
                                                    <input
                                                        onChange={handleCheckCategory}
                                                        checked={isChecked}
                                                        type="checkbox"
                                                        value={category}
                                                    />
                                                    <label>{category}</label>
                                                </div>
                                            );
                                        })}
                                    </div>
                                </div>
                               
                            </div>
                            <div className="filters">
                                <div> 
                                    <div
                                        onClick={() => {
                                            setCategoryFormatOpen((prev) => !prev);
                                            setFilterFormatOpen(false);
                                        }}
                                    >
                                        <AiFillFolder size={20} className="icon" />
                                        <span
                                            className="inline-text"
                                            style={{
                                                color:
                                                    styles.colorMode === "dark"
                                                        ? "#fff"
                                                        : styles.colorMode === "light"
                                                            ? "#343434"
                                                            : styles.colorMode === "blue"
                                                                ? "#063462"
                                                                : "#000",
                                            }}
                                        >
                      {t("format")}
                    </span>
                                    </div>
                                    <div
                                        className="categories"
                                        style={{
                                            display: categoryFormatOpen ? "flex" : "none",
                                        }}
                                        onMouseLeave={() => {
                                            setCategoryFormatOpen(false);
                                        }}
                                    >
                                        
                                        <div>
                                            <input
                                                onClick={() => handleChangeCategoryFormat('Онлайн')}
                                                checked={categoryFormat==='Онлайн'}
                                                type="checkbox"
                                                value={""}
                                            />
                                            <label className="inline-text">
                                            {t("online")}
                                            </label>
                                        </div>
                                            
                                        <div>
                                            <input
                                                onClick={() => handleChangeCategoryFormat('Дистанционно')}
                                                checked={categoryFormat==='Дистанционно'}
                                                type="checkbox"
                                                value={""}
                                            />
                                            <label className="inline-text">
                                                {t("remote")}
                                            </label>
                                        </div>
                                        
                                        <div>
                                            <input
                                                onClick={() => handleChangeCategoryFormat('Офлайн')}
                                                checked={categoryFormat==='Офлайн'}
                                                type="checkbox"
                                                value={""}
                                            />
                                            <label className="inline-text">
                                            {t("offline")}
                                            </label>
                                        </div>
                                     
                                    </div>
                                </div>
                           
                            </div>
                            <div
                                className="search"
                                style={{
                                    background:
                                        styles.colorMode === "dark"
                                            ? "#000"
                                            : styles.colorMode === "light"
                                                ? "#fff"
                                                : styles.colorMode === "blue"
                                                    ? "#9dd1ff"
                                                    : "#000",
                                }}
                            >
                                <BiSearch size={20} className="icon" />
                                <input
                                    type="text"
                                    value={searchValue}
                                    onChange={handleChangeSearchValue}
                                />
                            </div>
                        </div>
                    </div>
                </div>
             {isLoading ? (
        <div className="container">
           <div className="container">
                        <div
                            className="loading"
                            style={{
                                margin: "20px 0px",
                            }}
                        >
                            <div>загружаем</div>
                            <div>загружаем</div>
                            <div>загружаем</div>
                            {/* <div>загружаем</div>
                                <div>загружаем</div> */}
                        </div>
                    </div>
        </div>
    ) : (
        <>
            {coursesByCategory !== null && (
                <>
                    {categoryFormat === "Онлайн" && (
                        <div className="TableMain">
                            <table className="CategoryTable">
                            <div className="TableMain">
                    <table className="CategoryTable">
                      <thead>
                        <tr className="ColumnNames">
                          <th>Курсы</th>
                          <th>Аудитория</th>
                          <th>Формат</th>
                          <th>Группа</th>
                          <th>Стоимость</th>
                          <th>Стоимость с учетом корпоративной скидки</th>
                          <th>Заявка</th>
                          <th>Количество поданных заявок</th>
                        </tr>
                                                        </thead>
                                                        <tbody>
                    {data && data.length > 0 ? (
                        // Группируем курсы по типу
                        Object.entries(groupedCourses).map(([group, courses]) => (
                            <React.Fragment key={group}>
                                <tr>
                                    <td colSpan="8" className={"groups"}>{group}</td>
                                </tr>
                                {courses.filter(course => course.courseDTO.type_of_study === 'онлайн').map((course) => (
                                    <tr className="Rows" key={course.courseDTO.course_id}>
                                        <td>{course.courseDTO.course_name}</td>
                                        <td>{course.courseDTO.course_for_member_of_the_system}</td>
                                        <td>{course.courseDTO.type_of_study}</td>
                                        <td>{course.courseDTO.group_of_person}</td>
                                        <td>{course.courseDTO.course_price}</td>
                                        <td>{course.courseDTO.course_price_sale}</td>
                                        <td>
                                            <Button onClick={() => { setSelectedCourseId(course.courseDTO.course_id); setSelectedCourseName(course.courseDTO.course_name); handleOpenModal(); }}>Подать заявку</Button>
                                        </td>
                                        <td>{course.courseDTO.rating}</td>
                                    </tr>
                                ))}
                            </React.Fragment>
                        ))
                    ) : (
                        <tr>
                            <td colSpan="8">Нет данных для отображения</td>
                        </tr>
                    )}
                </tbody>

                    </table>
                  </div>
                            </table>
                        </div>
                                    )}
                                     <ApplicationModal
                                        open={modalOpen}
                                        handleClose={handleCloseModal}
                                        courseId={selectedCourseId}
                                        courseName={selectedCourseName}
                                    />

                    {categoryFormat === "Дистанционно" && (
                        <>
                            {Object.keys(coursesByCategory).map((categoryName) => {
                                if (
                                    !categoryFilter.includes("Все категории") &&
                                    !categoryFilter.includes(categoryName)
                                )
                                    return null;
                                    
                                return (
                                    <CoursesBlock
                                        key={categoryName}
                                        categoryName={categoryName}
                                        categoryDesc={categoryName}
                                        courses={coursesByCategory[categoryName]}
                                    />
                                );
                            })}
                        </>
                    )}
                </>
            )}
        </>
    )}
            </main>

           <br /><br /><br />

            <Footer />
        </div>
    );
}

const CoursesBlock = ({ categoryName, categoryDesc, courses }) => {
    // console.log(categoryName, courses);

    const navigate = useNavigate();

    const filteredCourses = courses.filter(
        (course) => course.courseDTO.courseCategory.category_name === categoryName
    );

    // if (filteredCourses.length === 0) {
    //     return null;
    // }

    return (
        <>
            <div className="container">
                <h1
                    className="inline-text"
                    style={{
                        fontFamily: "Ubuntu",
                        fontSize: "20px",
                        fontWeight: "500",
                        lineHeight: "23px",
                        letterSpacing: "0em",
                        textAlign: "left",
                    }}
                >
                    {categoryName}
                </h1>
                <p
                    className="inline-text"
                    style={{
                        fontFamily: "Ubuntu",
                        fontSize: "16px",
                        fontWeight: "400",
                        lineHeight: "19px",
                        letterSpacing: "0em",
                        textAlign: "left",
                        color: "#656678",
                    }}
                >
                    {categoryDesc}
                </p>
            </div>
            <div className="courses-block container">
                {filteredCourses
                    .sort((a, b) => a.shortStatus - b.shortStatus)
                    .map((course, index) => {
                        const courseDTO = course.courseDTO;
                        const { course_image, course_name } = courseDTO;
                        const { paymentInfo } = course;

                        const status =
                            paymentInfo === null ? "available" : paymentInfo.status;

                        return (
                            <div
                                className="course-card"
                                key={index}
                                onClick={() => {
                                    if (status === "process" || status === "finished") {
                                        navigate(`/courses/${course.courseDTO.course_id}/read`);
                                    } else {
                                        navigate(`/courses/${course.courseDTO.course_id}`);
                                    }
                                }}
                            >
                                <div className="image">
                                    <img src={course_image} alt={course_name} />
                                    <div className={`status ${status}`}>
                                        {status === "available"
                                            ? "Доступно"
                                            : status === "process"
                                                ? "В процессе"
                                                : "Завершен"}
                                    </div>
                                </div>
                                <div className="info">
                                    <div className="course-name">{course_name}</div>
                                    <div className="langAndDuration">
                                        {"РУС"} | {course.courseDTO.duration}
                                    </div>
                                    <div className="rating">
                                        <div className="stars">
                                            <AiFillStar className="star-icon" size={23} />
                                            <AiFillStar className="star-icon" size={23} />
                                            <AiFillStar className="star-icon" size={23} />
                                            <AiFillStar className="star-icon" size={23} />
                                            <AiFillStar className="star-icon" size={23} />
                                        </div>
                                        <span>{(course.courseDTO.rating % 1 === 0 ? course.courseDTO.rating.toFixed(1) + '.0' : course.courseDTO.rating.toFixed(1)).replace(/\.0$/, '')}</span>
                                    </div>
                                    <div className="type">
                                        <MdOndemandVideo size={23} />
                                        <span>{course.courseDTO.course_for_member_of_the_system}</span>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
              
            </div>
        </>
    );
};

export default Catalog;
