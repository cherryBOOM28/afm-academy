import { useEffect, useMemo, useState } from "react"

import axios from "axios"
import { useNavigate } from "react-router"
import base_url from "../../../settings/base_url"
import { BuilderNavbar } from "../builderNavbar/BuilderNavbar"
import deletIcon from '../images/delete.svg'
import editIcon from '../images/edit-catalog.svg'
import './editCatalog.scss'

import Button from '@mui/material/Button'
import Paper from '@mui/material/Paper'
import Stack from '@mui/material/Stack'
import Table from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import TableContainer from '@mui/material/TableContainer'
import TableHead from '@mui/material/TableHead'
import TableRow from '@mui/material/TableRow'

import archiveIcon from '../images/archive-icon.svg'
import folderIcon from '../images/folder-icon.png'



const EditCatalog = () => {
    const navigate = useNavigate()
    const [courses, setCourses] = useState([])

    const [deletingCourse, setDeletingCourse] = useState(false)
    const [selectedCourse, setSelectedCourse] = useState({ course_id: 0, course_name: "" })
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



    useEffect(() => {
        axios
            .get(base_url + "/api/aml/course/editcatalog")
            .then((res) => {
                // console.log(res.data)
                setCourses(res.data)
                console.log(res.data);
                setLoading(false);
            })
    }, [])

    useEffect(() => {
        axios
            .get(base_url + "/api/aml/course/getRequest")
            .then((res) => {
                console.log(res.data)
                setRequestData(res.data)
            })
    }, [dataReload])
    const handleReloadData = () => {
        setDataReload(dataReload + 1)
    }

    useMemo(() => {
        const fetchData = async () => {
            setLoading(true);

            try {
                const response = await axios.get(
                    `${base_url}/api/aml/course/getAllNews`,
                    {
                        params: {
                            type: 'news',
                        },
                    }
                );

                setNewsData(response.data);
                console.log(response.data);
            } catch (error) {
                console.error(error);
            }
        };

        if (selectedPage === 'newsPage') {
            fetchData();
            setLoading(false);
        }
    }, [selectedPage])

    useMemo(() => {
        const fetchData = async () => {
            setLoading(true);

            try {
                const response = await axios
                    .get(base_url + "/api/aml/course/getRequest")
                    .then((res) => { setRequestData(res.data) })
                console.log(response.data);
            } catch (error) {
                console.error(error);
            }
        };

        if (selectedPage === 'requestPage') {
            fetchData();
            setLoading(false);
        }
    }, [selectedPage])

    const closeModal = () => {
        setDeletingCourse(false)
    }

    const handleAddClick = () => {
        // Ensure both user and course are selected
        if (!selectedUser || !selectedCourse) {
            alert("Please select both a user and a course");
            return;
        }

        // POST request to the API
        axios.put(base_url + `/api/aml/course/saveUser/${selectedUser}/course/${selectedCourses}`,
            {},
            {
                headers: {
                    Authorization: `Bearer ${jwtToken}`,
                },
            })
            .then(response => {
                // Handle the successful response here
                console.log("User added to course successfully:", response);
            })
            .catch(error => {
                // Handle errors here
                console.error("Error in adding user to course:", error);
            });
    };

    const setUser = () => {
        axios.get(base_url + '/api/aml/course/getUsersAndCourses')
            .then(response => {
                // Assuming the response contains an array of users and courses
                setUserData(response.data.users);
                setCourseData(response.data.courses);
                console.log(response.data)
            })
            .catch(error => {
                // Handle error here
                console.error("Error fetching data: ", error);
            });
    };

    const deleteCourse = (course_id) => {
        axios
            .post(base_url + '/api/aml/course/deleteCourse', null, {
                params: {
                    id: course_id
                }
            })
            .then((res) => {
                setCourses(res.data.body)
            })
            .catch(function (error) {
                // alert(error)
            })
    }

    useEffect(() => {
        setUser();
    }, []);

    const setCourse = (course_id, course_name) => {
        setSelectedCourse({ course_id, course_name })
    }

    const publishCourse = (course_id) => {
        axios
            .post(base_url + '/api/aml/course/publishCourse', null, {
                params: {
                    id: course_id
                }
            })
            .then((res) => {
                // console.log(res.data)
                // axios
                //     .get(base_url + "/api/aml/course/editcatalog")
                //     .then((res) => {
                //         setCourses(res.data)
                //     })
            })
    }

    const getDate = (date) => {
        const _date = new Date(date);

        const day = String(_date.getDate()).padStart(2, '0');
        const month = String(_date.getMonth() + 1).padStart(2, '0'); // JavaScript months are 0-based
        const year = _date.getFullYear();
        const hour = (_date.getHours() - 6);
        const minutes = _date.getMinutes();

        // Assemble the components into the desired format
        const formattedDate = `${hour
            .toString()
            .padStart(2, "0")}:${minutes.toString().padStart(2, "0")},  ${day}.${month}.${year}`;

        return formattedDate;
    }

    return (
        <div>
            <BuilderNavbar />
            <div className="tab-content">
                {deletingCourse ?
                    <Confirm course_title={selectedCourse.course_name} course_id={selectedCourse.course_id} closeModal={closeModal} deleteCourse={deleteCourse} />
                    : ""
                }

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
                        </div>
                        <div onClick={() => {
                            navigate(
                                selectedPage === 'newsPage'
                                    ? "/create-news"
                                    : selectedPage === 'requestPage'
                                        ? ""
                                        : '/new-admin-page'
                            )
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
                                                : "Заявки на курсы"
                                }
                            </h1>
                            <div className="course-grid">

                                {
                                    isLoading ? "Загрузка..."
                                        : (selectedPage === 'draftPage' || selectedPage === 'coursesPage')
                                            ? (
                                                courses.filter((x) => x.draft === (selectedPage === 'draftPage')).map((x, index) => {
                                                    return (
                                                        <div className="course-card" key={index}>
                                                            <div className="img-course">
                                                                <img src={x.course_image} alt="img"></img>
                                                            </div>
                                                            <div className="text-of-card">
                                                                <h2>{x.course_name}</h2>
                                                                <a>Цена: {x.course_price}₸</a>
                                                                <a>Аудитория: {x.course_for_member_of_the_system}</a>
                                                            </div>
                                                            <div className="action-of-card">
                                                                <div
                                                                    onClick={() => {
                                                                        setDeletingCourse(true)
                                                                        setCourse(x.course_id, x.course_name)
                                                                    }}
                                                                    className="delete"
                                                                >
                                                                    <img src={deletIcon} alt="del"></img>
                                                                </div>
                                                                <div onClick={() => { navigate('/new-admin-page/?id=' + x.course_id) }} className="edit">
                                                                    <img src={editIcon} alt="edit"></img>
                                                                </div>
                                                                {/* onClick={publishCourse(x.course_id)}  */}
                                                                <a onClick={() => publishCourse(x.course_id)} className="publish">Опубликовать</a>
                                                            </div>

                                                        </div>

                                                    )
                                                })
                                            )
                                            : (selectedPage === 'newsPage') ? (
                                                newsData.map((x, index) => {
                                                    return (
                                                        <div
                                                            className="news-card"
                                                            key={index}
                                                        >
                                                            <div className="img-course">
                                                                <img src={x.image} alt="img" />
                                                            </div>
                                                            <div className="text-of-card">
                                                                <h2>{x.name}</h2>
                                                                <a>Дата: {getDate(x.date)}</a>
                                                            </div>
                                                            <div className="action-of-card">
                                                                <div
                                                                    onClick={() => {
                                                                        // setDeletingCourse(true)
                                                                        // setCourse(x.course_id, x.course_name)
                                                                    }}
                                                                    className="delete"
                                                                >
                                                                    <img src={deletIcon} alt="del" />
                                                                </div>
                                                                <div
                                                                    onClick={() => {
                                                                        // navigate('/new-admin-page/?id=' + x.course_id)
                                                                    }
                                                                    }
                                                                    className="edit"
                                                                >
                                                                    <img src={editIcon} alt="edit" />
                                                                </div>
                                                            </div>
                                                        </div>
                                                    )
                                                })
                                            ) : (<div className="tableDiv" style={{}}> <TableContainer component={Paper}>
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
                                                            <TableRow
                                                                key={course.id}
                                                                sx={{ '&:last-child td, &:last-child th': { border: 0 }, fontSize: '25px' }}
                                                            >
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
                                            </TableContainer></div>)

                                }
                            </div>

                            {
                                (selectedPage === 'draftPage' || selectedPage === 'coursesPage') ? (
                                    <div>
                                        <div className="dropdown-container">
                                            <select className="dropdown-container-select" value={selectedUser} onChange={(e) => setSelectedUser(e.target.value)}>
                                                <option value="">Выбрать Пользователя</option>
                                                {userData.map(user => (
                                                    <option key={user.user_id} value={user.user_id}>{user.firstname + ' ' + user.lastname}</option>
                                                ))}
                                            </select>

                                            <select className="dropdown-container-select" value={selectedCourses} onChange={(e) => setSelectedCourses(e.target.value)}>
                                                <option className="dropdown-container-select" value="">Выбрать Курс</option>
                                                {courseData.map(course => (
                                                    <option className="dropdown-container-select" key={course.course_id} value={course.course_id}>{course.course_name + " " + course.course_id}</option>
                                                ))}
                                            </select>

                                            <div>
                                                {/* ... existing JSX ... */}
                                                <div className="dropdown-container">
                                                    {/* ... existing dropdowns ... */}
                                                    <button className="button-user" onClick={handleAddClick}>Добавить</button>
                                                </div>
                                                {/* ... rest of your JSX ... */}
                                            </div>                                </div>

                                        {/* ... rest of your JSX ... */}
                                    </div>
                                ) : null
                            }
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}



const Confirm = ({ course_title, course_id, closeModal, deleteCourse }) => {
    return (
        <div className="confirm">
            <h1 className="question">Вы уверены что хотите удалить курс: <pre>{course_title}? </pre></h1>
            <div>
                <a onClick={closeModal} className="no-button">НЕТ</a>
                <a onClick={() => deleteCourse(course_id)} className="yes-button">ДА</a>
            </div>
        </div>
    )
}

export default EditCatalog