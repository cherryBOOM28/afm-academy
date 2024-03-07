import { useEffect, useState } from "react"

import { useNavigate } from "react-router"
import { BuilderNavbar } from "../builderNavbar/BuilderNavbar"
import axios from "axios"
import base_url from "../../../settings/base_url"
import './editCatalog.scss'
import editIcon from '../images/edit-catalog.svg'
import deletIcon from '../images/delete.svg'

import archiveIcon from '../images/archive-icon.svg'
import folderIcon from '../images/folder-icon.png'



const EditCatalog = () => {
    const navigate = useNavigate()
    const [courses, setCourses] = useState([])

    const [deletingCourse, setDeletingCourse] = useState(false)
    const [selectedCourse, setSelectedCourse] = useState({course_id: 0, course_name: ""})
    const [selectedUser, setSelectedUser] = useState('');
    const [selectedCourses, setSelectedCourses] = useState('');
    const jwtToken = localStorage.getItem('jwtToken');

    const [draftPage, setDraftPage] = useState(true)

    const [userData, setUserData] = useState([]);
    const [courseData, setCourseData] = useState([]);

    useEffect(() => {
        axios
            .get(base_url + "/api/aml/course/editcatalog")
            .then((res) => {
                // console.log(res.data)
                setCourses(res.data)
            })
    }, [])

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
        setSelectedCourse({course_id, course_name})
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

    return (
        <div>
            <BuilderNavbar/>
            <div className="tab-content">
                {deletingCourse ? 
                    <Confirm course_title={selectedCourse.course_name} course_id={selectedCourse.course_id} closeModal={closeModal} deleteCourse={deleteCourse}/>
                    : ""
                }

                <div className="tab">
                    <div className='creation-left-bar'>
                        <a className='title'>Админ панель</a>
                        <div className='folders'>
                            <div onClick={() => setDraftPage(!draftPage)} className={`folder ${draftPage ? "active" : ""}`}>
                                <img src={archiveIcon} alt="arch" />
                                <a>Архив курсов</a>
                            </div>
                            <div onClick={() => setDraftPage(!draftPage)} className={`folder ${draftPage ? "" : "active"}`}>
                                <img src={folderIcon} alt="" />
                                <a>Курсы</a>
                            </div>
                        </div>
                        <div onClick={() => {navigate('/new-admin-page')}} className='create-course-button'>
                            <a>Создать курс</a>
                        </div>
                    </div>
                </div>
                <div className="builder-body">
                    <div className="catalog">
                        <div className="drafts">
                            <h1>{draftPage ? "Архив курсов" : "Курсы"}</h1>
                            <div className="course-grid">

                            {courses.filter((x) => x.draft == draftPage).map((x) => {
                                return (
                                    <div className="course-card">
                                        <div className="img-course">
                                            <img src={x.course_image} alt="img"></img>
                                        </div>
                                        <div className="text-of-card">
                                            <h2>{x.course_name}</h2>
                                            <a>Цена: {x.course_price}₸</a>
                                            <a>Аудитория: {x.course_for_member_of_the_system}</a>
                                            <a>Тип: {x.type_of_study}</a>
                                        </div>
                                        <div className="action-of-card">
                                            <div onClick={()=> {
                                                setDeletingCourse(true)
                                                setCourse(x.course_id, x.course_name)
                                                }}className="delete">
                                                <img src={deletIcon} alt="del"></img>
                                            </div>
                                            <div onClick={() => {navigate('/new-admin-page/?id=' + x.course_id)}} className="edit">
                                                <img src={editIcon} alt="edit"></img>
                                            </div>
                                            {/* onClick={publishCourse(x.course_id)}  */}
                                            <a onClick={() => publishCourse(x.course_id)} className="publish">Опубликовать</a>
                                        </div>

                                    </div>

                                )
                            })}
                            </div>
                            <div>
                                {/* ... existing JSX ... */}

                                {/* Dropdowns for users and courses */}
                                <div className="dropdown-container">
                                    <select value={selectedUser} onChange={(e) => setSelectedUser(e.target.value)}>
                                        <option value="">Выбрать Пользователя</option>
                                        {userData.map(user => (
                                            <option key={user.user_id} value={user.user_id}>{user.firstname + ' ' + user.lastname}</option>
                                        ))}
                                    </select>

                                    <select value={selectedCourses} onChange={(e) => setSelectedCourses(e.target.value)}>
                                        <option value="">Выбрать Курс</option>
                                        {courseData.map(course => (
                                            <option key={course.course_id} value={course.course_id}>{course.course_name + " " + course.course_id}</option>
                                        ))}
                                    </select>

                                    <div>
                                        {/* ... existing JSX ... */}
                                        <div className="dropdown-container">
                                            {/* ... existing dropdowns ... */}
                                            <button onClick={handleAddClick}>Добавить</button>
                                        </div>
                                        {/* ... rest of your JSX ... */}
                                    </div>                                </div>

                                {/* ... rest of your JSX ... */}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}



const Confirm = ({course_title, course_id, closeModal, deleteCourse}) => {
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