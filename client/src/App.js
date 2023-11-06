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

import { AuthProvider } from './auth/AuthContext';
import TestCourse from './pages/testCoursePage/TestCourse';
import Catalog from './pages/courseCatalog/Catalog';
import MyCourses from './pages/myCourses/MyCourses';
import Profile from './pages/profilePage/Profile';
import PaymentPage from './pages/paymentPage/PaymentPage';
import Sandbox from './pages/Sandbox';
import Basic_course from './pages/basic-course';

function App() {
  const [jwtToken, setJwtToken] = useState('');

  useEffect(() => {
    const storedJwtToken = localStorage.getItem('jwtToken');
    
    if (storedJwtToken) {
      setJwtToken(storedJwtToken);
    }
  }, []);

  return (
    <div className="App">
      <AuthProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/registration" element={<Registration />} />
            <Route path="/logout" element={<Login />} />


            <Route
              path="/unauthenticated"
              element={<Navigate to="/login" />}
            />

            <Route path="" element={<Home />}></Route>
            <Route path="/about" element={<AboutUs />}></Route>
            <Route path="/management" element={<Management />}></Route>
            <Route path="/structure" element={<Structure />}></Route>
            <Route path="/structure/:id" element={<DirectorPage />} />
            <Route path="/charter" element={<Charter />}></Route>


            <Route path="/profile" element={<Profile />}></Route>


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

            <Route path='/courses' element={<CoursesPage />}/>
            <Route path="/courses/catalog" element={<Catalog />}/>
            <Route path="/courses/myCourses" element={<MyCourses />}/>
            <Route path="/courses/info" element={<InfoPage />}/>
            {/* <Route path='/courses/basic' element={<BasicCourse />}/> */}
            {/* <Route path='/courses/specialized' element={<SpecializedCourse />}/> */}

            <Route path='/courses/testCourse' element={<TestCourse />}/>

            <Route path='/courses/:id/' element={<BasicCourse />}/>
            <Route path='/courses/:id/read' element={<Basic_course />}/>

            {/* <Route path='/payment' element={<PaymentPage />}/> */}
            <Route path='/payment/:id' element={<PaymentPage />} />

            <Route path='/sandbox' element={<Sandbox />}/>'


          </Routes>
        </BrowserRouter>
      </AuthProvider>
    </div>
  );
}

export default App;
