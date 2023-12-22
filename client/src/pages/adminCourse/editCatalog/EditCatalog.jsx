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

    const [draftPage, setDraftPage] = useState(true)


    useEffect(() => {
        axios
            .get(base_url + "/api/aml/course/editcatalog")
            .then((res) => {
                console.log(res.data)
                setCourses(res.data)
            })
    }, [])

    const closeModal = () => {
        setDeletingCourse(false)
    }

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
                console.log(res.data)
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
                        <div onClick={() => {navigate('/createcourse')}} className='create-course-button'>
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
                                        </div>
                                        <div className="action-of-card">
                                            <div onClick={()=> {
                                                setDeletingCourse(true)
                                                setCourse(x.course_id, x.course_name)
                                                }}className="delete">
                                                <img src={deletIcon} alt="del"></img>
                                            </div>
                                            <div onClick={() => {navigate('/createcourse/?id=' + x.course_id)}} className="edit">
                                                <img src={editIcon} alt="edit"></img>
                                            </div>
                                            {/* onClick={publishCourse(x.course_id)}  */}
                                            <a onClick={() => publishCourse(x.course_id)} className="publish">Опубликовать</a>
                                        </div>
                                    </div>
                                )
                            })}
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