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

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/registration" element={<Registration />} />


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

          <Route path="/subjects" element={<Subjects />}></Route>
          <Route path="/rules" element={<Rules />}></Route>
          <Route path="/operations" element={<Operations />}></Route>


        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
