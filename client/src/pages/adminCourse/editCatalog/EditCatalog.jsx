import axios from "axios";
import React, { useEffect, useMemo, useState } from "react";
import { useNavigate } from "react-router";
import base_url from "../../../settings/base_url";
import { BuilderNavbar } from "../builderNavbar/BuilderNavbar";
import deletIcon from '../images/delete.svg';
import editIcon from '../images/edit-catalog.svg';
import './editCatalog.scss';

import Button from '@mui/material/Button';
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';

import archiveIcon from '../images/archive-icon.svg';
import folderIcon from '../images/folder-icon.png';

const VebinarPage = () => {
    const [webinars, setWebinars] = useState([]);
    const [isLoading, setLoading] = useState(true);
    const jwtToken = localStorage.getItem('jwtToken');


    useEffect(() => {
        axios.get(base_url + "/api/aml/webinar/archive/getWebinars",
            {
                headers: {
                    Authorization: `Bearer ${jwtToken}`,
                },
            }
        )
            .then((res) => {
                setWebinars(res.data);
                setLoading(false);
            })
            .catch((error) => {
                console.error("Error fetching webinars:", error);
                setLoading(false);
            });
    }, []);

    return (
        <div>
            {isLoading ? (
                "Загрузка..."
            ) : (
                <div className="webinar-grid">
                    {webinars.map((webinar, index) => (
                        <div className="webinar-card" key={index}>
                            <div className="img-webinar">
                                <img src={webinar.webinar_image} alt="webinar" />
                            </div>
                            <div className="text-of-card">
                                <h2>{webinar.webinar_name}</h2>
                                <p>Дата: {(webinar.webinar_date)}</p>
                                <p>{webinar.webinar_description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

const EditCatalog = () => {
    const navigate = useNavigate();
    const [courses, setCourses] = useState([]);
    const [deletingCourse, setDeletingCourse] = useState(false);
    const [selectedCourse, setSelectedCourse] = useState({ course_id: 0, course_name: "" });
    const [selectedUser, setSelectedUser] = useState('');
    const [selectedCourses, setSelectedCourses] = useState('');
    const jwtToken = localStorage.getItem('jwtToken');
    const [selectedPage, setSelectedPage] = useState('draftPage');
    const [userData, setUserData] = useState([]);
    const [requestData, setRequestData] = useState([]);
    const [newsData, setNewsData] = useState([]);
    const [courseData, setCourseData] = useState([]);
    const [dataReload, setDataReload] = useState(0);
    const [isLoading, setLoading] = useState(true);
    const [userSearch, setUserSearch] = useState('');
    const [courseSearch, setCourseSearch] = useState('');
    const [userDropdownVisible, setUserDropdownVisible] = useState(false);
    const [courseDropdownVisible, setCourseDropdownVisible] = useState(false);

    useEffect(() => {
        axios.get(base_url + "/api/aml/course/editcatalog")
            .then((res) => {
                setCourses(res.data);
                setLoading(false);
            });
    }, []);

    useEffect(() => {
        axios.get(base_url + "/api/aml/course/getRequest")
            .then((res) => {
                setRequestData(res.data);
            });
    }, [dataReload]);

    const handleReloadData = () => {
        setDataReload(dataReload + 1);
    };

    useMemo(() => {
        const fetchData = async () => {
            setLoading(true);
            try {
                const response = await axios.get(`${base_url}/api/aml/course/getAllNews`, {
                    params: {
                        type: 'news',
                    },
                });
                setNewsData(response.data);
                setLoading(false);
            } catch (error) {
                console.error(error);
            }
        };
        if (selectedPage === 'newsPage') {
            fetchData();
        }
    }, [selectedPage]);

    useMemo(() => {
        const fetchData = async () => {
            setLoading(true);
            try {
                const response = await axios.get(base_url + "/api/aml/course/getRequest");
                setRequestData(response.data);
                setLoading(false);
            } catch (error) {
                console.error(error);
            }
        };
        if (selectedPage === 'requestPage') {
            fetchData();
        }
    }, [selectedPage]);

    const closeModal = () => {
        setDeletingCourse(false);
    };

    const handleAddClick = () => {
        if (!selectedUser || !selectedCourse) {
            alert("Please select both a user and a course");
            return;
        }
        axios.put(`${base_url}/api/aml/course/saveUser/${selectedUser}/course/${selectedCourses}`, {}, {
            headers: {
                Authorization: `Bearer ${jwtToken}`,
            },
        })
            .then(response => {
                console.log("User added to course successfully:", response);
                alert(response);
            })
            .catch(error => {
                console.error("Error in adding user to course:", error);
                alert(error);
            });
    };

    const setUser = () => {
        axios.get(base_url + '/api/aml/course/getUsersAndCourses')
            .then(response => {
                setUserData(response.data.users);
                setCourseData(response.data.courses);
            })
            .catch(error => {
                console.error("Error fetching data: ", error);
            });
    };

    const deleteCourse = (course_id) => {
        axios.post(base_url + '/api/aml/course/deleteCourse', null, {
            params: {
                id: course_id,
            },
        })
            .then((res) => {
                setCourses(res.data.body);
            })
            .catch(error => {
                console.error(error);
            });
    };

    useEffect(() => {
        setUser();
    }, []);

    const setCourse = (course_id, course_name) => {
        setSelectedCourse({ course_id, course_name });
    };

    const publishCourse = (course_id) => {
        axios.post(base_url + '/api/aml/course/publishCourse', null, {
            params: {
                id: course_id,
            },
        })
            .then((res) => {
                // Optionally update the course list
            });
    };

    const getDate = (date) => {
        const _date = new Date(date);
        const day = String(_date.getDate()).padStart(2, '0');
        const month = String(_date.getMonth() + 1).padStart(2, '0'); // JavaScript months are 0-based
        const year = _date.getFullYear();
        const hour = (_date.getHours() - 6);
        const minutes = _date.getMinutes();
        const formattedDate = `${hour.toString().padStart(2, "0")}:${minutes.toString().padStart(2, "0")},  ${day}.${month}.${year}`;
        return formattedDate;
    };

    const filteredUsers = userData.filter(
        user => `${user.firstname} ${user.lastname}`.toLowerCase().includes(userSearch.toLowerCase())
    );
    const filteredCourses = courseData.filter(
        course => course.course_name.toLowerCase().includes(courseSearch.toLowerCase())
    );

    return (
        <div>
            <BuilderNavbar />
            <div className="tab-content">
                {deletingCourse ? (
                    <Confirm course_title={selectedCourse.course_name} course_id={selectedCourse.course_id} closeModal={closeModal} deleteCourse={deleteCourse} />
                ) : ""}
                <div className="tab">
                    <div className='creation-left-bar'>
                        <a className='title'>Админ панель</a>
                        <div className='folders'>
                            <div onClick={() => setSelectedPage('draftPage')} className={`folder ${selectedPage === 'draftPage' ? "active" : ""}`}>
                                <img src={archiveIcon} alt="arch" />
                                <a>Архив курсов</a>
                            </div>
                            <div onClick={() => setSelectedPage('coursesPage')} className={`folder ${selectedPage === 'coursesPage' ? "active" : ""}`}>
                                <img src={folderIcon} alt="" />
                                <a>Курсы</a>
                            </div>
                            <div onClick={() => setSelectedPage('newsPage')} className={`folder ${selectedPage === 'newsPage' ? "active" : ""}`}>
                                <img src={folderIcon} alt="" />
                                <a>Новости</a>
                            </div>
                            <div onClick={() => setSelectedPage('requestPage')} className={`folder ${selectedPage === 'requestPage' ? "active" : ""}`}>
                                <img src={folderIcon} alt="" />
                                <a>Заявки</a>
                            </div>
                            <div onClick={() => setSelectedPage('vebinarPage')} className={`folder ${selectedPage === 'vebinarPage' ? "active" : ""}`}>
                                <img src={folderIcon} alt="" />
                                <a>Вебинары</a>
                            </div>
                        </div>
                        <div onClick={() => {
                            navigate(
                                selectedPage === 'newsPage'
                                    ? "/create-news"
                                    : selectedPage === 'requestPage'
                                        ? ""
                                        : '/new-admin-page'
                            );
                        }} className='create-course-button'>
                            <a>
                                {
                                    selectedPage === 'newsPage'
                                        ? "Добавить новость"
                                        : selectedPage === 'requestPage'
                                            ? null
                                            : "Создать курс"
                                }
                            </a>
                        </div>
                    </div>
                </div>
                <div className="builder-body">
                    <div className="catalog">
                        <div className="drafts">
                            <h1>
                                {
                                    selectedPage === 'draftPage'
                                        ? "Архив курсов"
                                        : selectedPage === 'coursesPage'
                                            ? "Курсы"
                                            : selectedPage === 'newsPage'
                                                ? "Новости"
                                                : selectedPage === 'requestPage'
                                                    ? "Заявки на курсы"
                                                    : "Вебинары"
                                }
                            </h1>
                            <div className="course-grid">
                                {isLoading ? "Загрузка..." : (
                                    selectedPage === 'draftPage' || selectedPage === 'coursesPage'
                                        ? (
                                            courses.filter((x) => x.draft === (selectedPage === 'draftPage')).map((x, index) => (
                                                <div className="course-card" key={index}>
                                                    <div className="img-course">
                                                        <img src={x.course_image} alt="img" />
                                                    </div>
                                                    <div className="text-of-card">
                                                        <h2>{x.course_name}</h2>
                                                        <a>Цена: {x.course_price}₸</a>
                                                        <a>Аудитория: {x.course_for_member_of_the_system}</a>
                                                    </div>
                                                    <div className="action-of-card">
                                                        <div onClick={() => {
                                                            setDeletingCourse(true);
                                                            setCourse(x.course_id, x.course_name);
                                                        }} className="delete">
                                                            <img src={deletIcon} alt="del" />
                                                        </div>
                                                        <div onClick={() => { navigate('/new-admin-page/?id=' + x.course_id); }} className="edit">
                                                            <img src={editIcon} alt="edit" />
                                                        </div>
                                                        <a onClick={() => publishCourse(x.course_id)} className="publish">Опубликовать</a>
                                                    </div>
                                                </div>
                                            ))
                                        ) : selectedPage === 'newsPage' ? (
                                            newsData.map((x, index) => (
                                                <div className="news-card" key={index}>
                                                    <div className="img-course">
                                                        <img src={x.image} alt="img" />
                                                    </div>
                                                    <div className="text-of-card">
                                                        <h2>{x.name}</h2>
                                                        <a>Дата: {getDate(x.date)}</a>
                                                    </div>
                                                    <div className="action-of-card">
                                                        <div onClick={() => { }} className="delete">
                                                            <img src={deletIcon} alt="del" />
                                                        </div>
                                                        <div onClick={() => { }} className="edit">
                                                            <img src={editIcon} alt="edit" />
                                                        </div>
                                                    </div>
                                                </div>
                                            ))
                                        ) : selectedPage === 'requestPage' ? (
                                            <div className="tableDiv" style={{}}>
                                                <TableContainer component={Paper}>
                                                    <Stack direction="row" spacing={2}>
                                                        <Button onClick={handleReloadData}>Обнавить список</Button>
                                                    </Stack>
                                                    <Table sx={{ minWidth: 900 }} aria-label="simple table">
                                                        <TableHead>
                                                            <TableRow>
                                                                <TableCell>Дата и время</TableCell>
                                                                <TableCell>ФИО</TableCell>
                                                                <TableCell align="right">Email</TableCell>
                                                                <TableCell align="right">Номер телефона</TableCell>
                                                                <TableCell align="right">Название курса</TableCell>
                                                                <TableCell align="right">ID Курса</TableCell>
                                                            </TableRow>
                                                        </TableHead>
                                                        <TableBody>
                                                            {requestData.map((course) => (
                                                                <TableRow key={course.id} sx={{ '&:last-child td, &:last-child th': { border: 0 }, fontSize: '25px' }}>
                                                                    <TableCell>{getDate(course.payment_date)}</TableCell>
                                                                    <TableCell component="th" scope="course">
                                                                        {course.fio}
                                                                    </TableCell>
                                                                    <TableCell align="right">{course.email}</TableCell>
                                                                    <TableCell align="right">{course.phone_number}</TableCell>
                                                                    <TableCell align="right">{course.course.course_name}</TableCell>
                                                                    <TableCell align="right">{course.course.course_id}</TableCell>
                                                                </TableRow>
                                                            ))}
                                                        </TableBody>
                                                    </Table>
                                                </TableContainer>
                                            </div>
                                        ) : (
                                            <VebinarPage />
                                        )
                                )}
                            </div>
                            {(selectedPage === 'draftPage' || selectedPage === 'coursesPage') && (
                                <div className="dropdown-container">
                                    <div className="dropdown-wrap">
                                        <div className="dropdown">
                                            <input
                                                type="text"
                                                placeholder="Search User"
                                                value={userSearch}
                                                onChange={(e) => {
                                                    setUserSearch(e.target.value);
                                                    setUserDropdownVisible(true);
                                                }}
                                                onClick={() => setUserDropdownVisible(true)}
                                                className="dropdown-search"
                                            />
                                            {userDropdownVisible && (
                                                <div className="dropdown-options">
                                                    {filteredUsers.map(user => (
                                                        <div
                                                            key={user.user_id}
                                                            onClick={() => {
                                                                setSelectedUser(user.user_id);
                                                                setUserSearch(`${user.firstname} ${user.lastname}`);
                                                                setUserDropdownVisible(false);
                                                            }}
                                                            className="dropdown-option"
                                                        >
                                                            {user.firstname} {user.lastname}
                                                        </div>
                                                    ))}
                                                </div>
                                            )}
                                        </div>
                                        <div className="dropdown">
                                            <input
                                                type="text"
                                                placeholder="Search Course"
                                                value={courseSearch}
                                                onChange={(e) => {
                                                    setCourseSearch(e.target.value);
                                                    setCourseDropdownVisible(true);
                                                }}
                                                onClick={() => setCourseDropdownVisible(true)}
                                                className="dropdown-search"
                                            />
                                            {courseDropdownVisible && (
                                                <div className="dropdown-options">
                                                    {filteredCourses.map(course => (
                                                        <div
                                                            key={course.course_id}
                                                            onClick={() => {
                                                                setSelectedCourses(course.course_id);
                                                                setCourseSearch(course.course_name);
                                                                setCourseDropdownVisible(false);
                                                            }}
                                                            className="dropdown-option"
                                                        >
                                                            {course.course_name} {course.course_id}
                                                        </div>
                                                    ))}
                                                </div>
                                            )}
                                        </div>
                                    </div>
                                    <button className="button-user" onClick={handleAddClick}>Добавить</button>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

const Confirm = ({ course_title, course_id, closeModal, deleteCourse }) => {
    return (
        <div className="confirm">
            <h1 className="question">Вы уверены что хотите удалить курс: <pre>{course_title}? </pre></h1>
            <div>
                <a onClick={closeModal} className="no-button">НЕТ</a>
                <a onClick={() => deleteCourse(course_id)} className="yes-button">ДА</a>
            </div>
        </div>
    );
};

export default EditCatalog;
