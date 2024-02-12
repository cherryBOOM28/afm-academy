import { useState, useEffect,lazy,Suspense,startTransition } from 'react';
import './App.css';
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import PrivateRoute from './auth/PrivateRoute';
import CreateCoursePage from './pages/adminCourse/creation/CreateCourse';
import EditCatalog from './pages/adminCourse/editCatalog/EditCatalog';
import PlanningInvestigationCourse from './pages/ReadCourses/PlanningInvestigationCourse/index.jsx';
import { AuthProvider, useAuth } from './auth/AuthContext';
import './settings/i18n.js';
import VisualModal from './/components/VisualModal/VisualModal.jsx'
import Login from './pages/login/Login';
import { StyleProvider } from './/components/VisualModal/StyleContext.jsx';
const Home = lazy(() => import ('./pages/home/Home'))
const ReadCourse = lazy(() => import ('./pages/ReadCourse'))
//import Home from './pages/home/Home';
const AboutUs = lazy(()=> import('./pages/aboutPage/aboutUs/AboutUs'))
//import AboutUs from './pages/aboutPage/aboutUs/AboutUs';
const Management = lazy(() => import('./pages/aboutPage/management/Management'))
//import Management from './pages/aboutPage/management/Management';
const Structure = lazy(() => import('./pages/aboutPage/structure/Structure'))
//import Structure from './pages/aboutPage/structure/Structure';
const DirectorPage = lazy(() => import('./pages/aboutPage/director/DirectorPage'))
//import DirectorPage from './pages/aboutPage/director/DirectorPage';
const Charter = lazy(() => import('./pages/aboutPage/charter/Charter'))
//import Charter from './pages/aboutPage/charter/Charter';
const Subjects = lazy(() => import('./pages/sfm/subjects/Subjects'))
//import Subjects from './pages/sfm/subjects/Subjects';
// const Login = lazy(()=>import('./pages/login/Login'))

const Registration = lazy(() => import('./pages/registration/Registration'));
//import Registration from './pages/registration/Registration';
const Rules = lazy(() => import('./pages/sfm/rules/Rules'));
//import Rules from './pages/sfm/rules/Rules';
const Operations = lazy(() => import('./pages/sfm/operations/Operations'));
//import Operations from './pages/sfm/operations/Operations';
const AntiLaundering = lazy(() => import('./pages/podft/antiLaundering/AntiLaundering'));
//import AntiLaundering from './pages/podft/antiLaundering/AntiLaundering';
const Fatf = lazy(() => import('./pages/podft/fatf/Fatf'));
//import Fatf from './pages/podft/fatf/Fatf';
const Eag = lazy(() => import('./pages/podft/eag/Eag'));
//import Eag from './pages/podft/eag/Eag';
const MutualEvaluation = lazy(() => import('./pages/podft/mutualEvaluation/MutualEvaluation'));
const CalendarPage = lazy(() => import('./pages/calendar/Calendar'));
const InfoPage = lazy(() => import('./pages/courseInfoPage/InfoPage'));
const CoursesPage = lazy(() => import('./pages/courses/Courses'));
const BasicCourse = lazy(() => import('./pages/courses-basic/BasicCourse'));
const SpecializedCourse = lazy(() => import('./pages/courses-specialized/SpecializedCourse'));
const SurveysPage = lazy(() => import('./pages/surveys/Surveys'));
const VebinarsPage = lazy(() => import('./pages/vebinar/VebinarsPage'));
const Catalog = lazy(() => import('./pages/courseCatalog/Catalog'));
const MyCourses = lazy(() => import('./pages/myCourses/MyCourses'));
const Profile = lazy(() => import('./pages/profilePage/Profile'));
const PaymentPage = lazy(() => import('./pages/paymentPage/PaymentPage'));
const Sandbox = lazy(() => import('./pages/Sandbox'));
const Basic_course = lazy(() => import('./pages/basic-course'));
const CryptoCourse = lazy(() => import('./pages/ReadCourses/CryptoCourse'));




//import MutualEvaluation from './pages/podft/mutualEvaluation/MutualEvaluation';
//import CalendarPage from './pages/calendar/Calendar';
//import InfoPage from './pages/courseInfoPage/InfoPage';
//import CoursesPage from './pages/courses/Courses';
//import BasicCourse from './pages/courses-basic/BasicCourse';
//import SpecializedCourse from './pages/courses-specialized/SpecializedCourse';
//import SurveysPage from './pages/surveys/Surveys';
//import VebinarsPage from './pages/vebinar/VebinarsPage';


// import TestCourse from './pages/testCoursePage/TestCourse';
//import Catalog from './pages/courseCatalog/Catalog';
//import MyCourses from './pages/myCourses/MyCourses';
//import Profile from './pages/profilePage/Profile';
//import PaymentPage from './pages/paymentPage/PaymentPage';
//import Sandbox from './pages/Sandbox';
//import Basic_course from './pages/basic-course';

//import CryptoCourse from './pages/ReadCourses/CryptoCourse';


function App() {
    const [jwtToken, setJwtToken] = useState('');

    useEffect(() => {


        // console.log(storedJwtToken)

        startTransition(() => {
            const storedJwtToken = localStorage.getItem('jwtToken');
            if (storedJwtToken) {
                setJwtToken(storedJwtToken);
            }
        });
    }, []);

    return (
        <div className="App">
            <StyleProvider>
                <VisualModal />
                <AuthProvider>
                    <BrowserRouter>
                        <Routes>
                            <Route path="/login" element={<PrivateRoute shouldBeLoggedIn={false} component={Login} redirect={'/profile'}/>} />
                            <Route path="/registration" element={<PrivateRoute shouldBeLoggedIn={false} component={Registration} redirect={'/profile'}/>} />

                            <Route path="/logout" element={<Login/>} />


                            <Route path="/" element={<Suspense ><Home /></Suspense>}></Route>
                            <Route path="/:scroll" element={<Suspense ><Home /></Suspense>}></Route>
                            <Route path="/about" element={<Suspense ><AboutUs /></Suspense>}></Route>
                            <Route path="/management" element={<Suspense ><Management /></Suspense>}></Route>
                            <Route path="/structure" element={<Suspense ><Structure /></Suspense>}></Route>
                            <Route path="/structure/:id" element={<Suspense ><DirectorPage /></Suspense>} />
                            <Route path="/charter" element={<Suspense ><Charter /></Suspense>}></Route>

                            <Route path="/profile" element={<Suspense><PrivateRoute shouldBeLoggedIn={true} component={Profile}/></Suspense>}></Route>
                            <Route path="/profile/:tabname" element={<Suspense><PrivateRoute shouldBeLoggedIn={true} component={Profile}/></Suspense>}></Route>

                            <Route path="/subjects" element={<Suspense ><Subjects /></Suspense>}></Route>
                            <Route path="/rules" element={<Suspense ><Rules /></Suspense>}></Route>
                            <Route path="/operations" element={<Suspense ><Operations /></Suspense>}></Route>

                            <Route path="/anti-laundering" element={<Suspense ><AntiLaundering /></Suspense>}></Route>
                            <Route path="/fatf" element={<Suspense ><Fatf /></Suspense>}></Route>
                            <Route path="/eag" element={<Suspense ><Eag /></Suspense>}></Route>
                            <Route path="/mutual-evaluation" element={<Suspense ><MutualEvaluation /></Suspense>}></Route>

                            <Route path="/vebinars" element={<Suspense ><VebinarsPage /></Suspense>}/>
                            <Route path="/vebinars/calendar" element={<Suspense ><CalendarPage /></Suspense>}/>
                            <Route path="/vebinars/surveys" element={<Suspense ><SurveysPage /></Suspense>} />
                            <Route path="/vebinars/:id" element={<></>} />

                            {/* <Route path='/courses' element={<CoursesPage />}/> */}
                            <Route path="/courses/catalog" element={<Suspense ><Catalog /></Suspense>}/>
                            <Route path="/courses/myCourses" element={<Suspense><PrivateRoute shouldBeLoggedIn={true} component={MyCourses}/></Suspense>}/>
                            <Route path="/courses/info" element={<Suspense ><InfoPage /></Suspense>}/>
                            {/* <Route path='/courses/basic' element={<BasicCourse />}/> */}
                            {/* <Route path='/courses/specialized' element={<SpecializedCourse />}/> */}

                            {/* <Route path='/courses/testCourse' element={<TestCourse />}/> */}

                            <Route path='/courses/:id/read' element={<Suspense ><ReadCourse/></Suspense>} />

                            <Route path='/courses/:id/' element={<Suspense ><BasicCourse /></Suspense>}/>
                            <Route path='/courses/8/read' element={
                                // <PrivateRoute shouldBeLoggedIn={true} component={
                                <Suspense><Basic_course /></Suspense>
                                // } redirect={'/courses/catalog'}/>
                            }/>
                            <Route path='/courses/100/read' element={<Suspense ><CryptoCourse /></Suspense>}/>
                            <Route path='/courses/101/read' element={<Suspense ><PlanningInvestigationCourse /></Suspense>}/>

                            {/* <Route path='/payment' element={<PaymentPage />}/> */}
                            <Route path='/payment/:id' element={<Suspense ><PaymentPage /></Suspense>} />

                            <Route path='/sandbox' element={<Suspense ><Sandbox /></Suspense>}/>'

                            {/* <Route path='/createcourse' element={<PrivateRoute shouldBeLoggedIn={true} mustBeAdmin={true} component={CreateCoursePage} />}/> */}
                            {/* <Route path='/manager' element={<PrivateRoute shouldBeLoggedIn={true} mustBeAdmin={true} component={EditCatalog} />}/> */}
                            <Route path='/createcourse' element={<CreateCoursePage/>}/>
                            <Route path='/manager' element={<EditCatalog/>} />
                        </Routes>
                    </BrowserRouter>
                </AuthProvider>
            </StyleProvider>

        </div>
    );
}

export default App;
