import { useState, useEffect } from 'react';
import './App.css';
import {BrowserRouter, Routes, Route, Navigate} from "react-router-dom";
import Home from './pages/home/Home';
import AboutUs from './pages/aboutPage/aboutUs/AboutUs';
import Management from './pages/aboutPage/management/Management';
import Structure from './pages/aboutPage/structure/Structure';
import DirectorPage from './pages/aboutPage/director/DirectorPage';
import Charter from './pages/aboutPage/charter/Charter';
import Subjects from './pages/sfm/subjects/Subjects';
import Login from './pages/login/Login';
import Registration from './pages/registration/Registration';
import Rules from './pages/sfm/rules/Rules';
import Operations from './pages/sfm/operations/Operations';
import AntiLaundering from './pages/podft/antiLaundering/AntiLaundering';
import Fatf from './pages/podft/fatf/Fatf';
import Eag from './pages/podft/eag/Eag';
import MutualEvaluation from './pages/podft/mutualEvaluation/MutualEvaluation';
import CalendarPage from './pages/calendar/Calendar';
import InfoPage from './pages/courseInfoPage/InfoPage';
import CoursesPage from './pages/courses/Courses';
import BasicCourse from './pages/courses-basic/BasicCourse';
import SpecializedCourse from './pages/courses-specialized/SpecializedCourse';
import SurveysPage from './pages/surveys/Surveys';
import VebinarsPage from './pages/vebinar/VebinarsPage';

import { AuthProvider, useAuth } from './auth/AuthContext';
// import TestCourse from './pages/testCoursePage/TestCourse';
import Catalog from './pages/courseCatalog/Catalog';
import MyCourses from './pages/myCourses/MyCourses';
import Profile from './pages/profilePage/Profile';
import PaymentPage from './pages/paymentPage/PaymentPage';
import Sandbox from './pages/Sandbox';
import Basic_course from './pages/basic-course';
import PrivateRoute from './auth/PrivateRoute';
import MustBeAdmin from './auth/AdminRoute.jsx';

import CreateCoursePage from './pages/adminCourse/creation/CreateCourse';
import EditCatalog from './pages/adminCourse/editCatalog/EditCatalog';
import CryptoCourse from './pages/ReadCourses/CryptoCourse';

import VisualModal from './/components/VisualModal/VisualModal.jsx'
import { StyleProvider } from './/components/VisualModal/StyleContext.jsx';

import './settings/i18n.js';
import PlanningInvestigationCourse from './pages/ReadCourses/PlanningInvestigationCourse/index.jsx';
import ReadCourse from './pages/ReadCourse/index.jsx';

function App() {
  const [fontStyle, setFontStyle] = useState('defaultFont'); // Default font style
  const [jwtToken, setJwtToken] = useState('');

  useEffect(() => {
    const storedJwtToken = localStorage.getItem('jwtToken');

    // console.log(storedJwtToken)
    
    if (storedJwtToken) {
      setJwtToken(storedJwtToken);
    }
  }, []);
  const handleOpenVisualModal = () => {
    // Logic to handle opening the visual modal
    console.log("Visual Modal Opened");
  };
  const [fontSize, setFontSize] = useState('medium');

  

  return (
    // <div className={fontStyle}>
    // <VisualModal setFontStyle={setFontStyle} />
    <>
      {/* <VisualModal open={true} /> */}
      <div className="App">
      <StyleProvider>
      <VisualModal />
        <AuthProvider>
          <BrowserRouter>
            <Routes>
              <Route path="/login" element={<PrivateRoute shouldBeLoggedIn={false} component={Login} redirect={'/profile'}/>} />
              <Route path="/registration" element={<PrivateRoute shouldBeLoggedIn={false} component={Registration} redirect={'/profile'}/>} />

              <Route path="/logout" element={<Login />} />


              <Route path="/" element={<Home />}></Route>
              <Route path="/:scroll" element={<Home />}></Route>
              <Route path="/about" element={<AboutUs />}></Route>
              <Route path="/management" element={<Management />}></Route>
              <Route path="/structure" element={<Structure />}></Route>
              <Route path="/structure/:id" element={<DirectorPage />} />
              <Route path="/charter" element={<Charter />}></Route>

              <Route path="/profile" element={<PrivateRoute shouldBeLoggedIn={true} component={Profile}/>}></Route>
              <Route path="/profile/:tabname" element={<PrivateRoute shouldBeLoggedIn={true} component={Profile}/>}></Route>

              <Route path="/subjects" element={<Subjects />}></Route>
              <Route path="/rules" element={<Rules />}></Route>
              <Route path="/operations" element={<Operations />}></Route>

              <Route path="/anti-laundering" element={<AntiLaundering />}></Route>
              <Route path="/fatf" element={<Fatf />}></Route>
              <Route path="/eag" element={<Eag />}></Route>
              <Route path="/mutual-evaluation" element={<MutualEvaluation />}></Route>

              <Route path="/vebinars" element={<VebinarsPage />}/>
              <Route path="/vebinars/calendar" element={<CalendarPage />}/>
              <Route path="/vebinars/surveys" element={<SurveysPage />} />
              <Route path="/vebinars/:id" element={<></>} />

              {/* <Route path='/courses' element={<CoursesPage />}/> */}
              <Route path="/courses/catalog" element={<Catalog />}/>
              <Route path="/courses/myCourses" element={<PrivateRoute shouldBeLoggedIn={true} component={MyCourses}/>}/>
              <Route path="/courses/info" element={<InfoPage />}/>
              {/* <Route path='/courses/basic' element={<BasicCourse />}/> */}
              {/* <Route path='/courses/specialized' element={<SpecializedCourse />}/> */}

              {/* <Route path='/courses/testCourse' element={<TestCourse />}/> */}

              <Route path='/courses/:id/read' element={<ReadCourse />} />

              <Route path='/courses/:id/' element={<BasicCourse />}/>
              <Route path='/courses/8/read' element={
                // <PrivateRoute shouldBeLoggedIn={true} component={
                  <Basic_course />
                // } redirect={'/courses/catalog'}/>
              }/>
              <Route path='/courses/100/read' element={<CryptoCourse />}/>
              <Route path='/courses/101/read' element={<PlanningInvestigationCourse />}/>

              {/* <Route path='/payment' element={<PaymentPage />}/> */}
              <Route path='/payment/:id' element={<PaymentPage />} />

              <Route path='/sandbox' element={<Sandbox />}/>'

              <Route path='/createcourse' element={<PrivateRoute shouldBeLoggedIn={true} mustBeAdmin={true} component={CreateCoursePage} />}/>
              <Route path='/manager' element={<PrivateRoute shouldBeLoggedIn={true} mustBeAdmin={true} component={EditCatalog} />}/>
              {/* <Route path='/createcourse' element={<PrivateRoute shouldBeLoggedIn={true} component={CreateCoursePage} />}/>
              <Route path='/manager' element={<PrivateRoute shouldBeLoggedIn={true} component={EditCatalog} />}/> */}
            </Routes>
          </BrowserRouter>
        </AuthProvider>
        </StyleProvider>
      {/* </div> */}
      </div>
    </>
  );
}

export default App;
