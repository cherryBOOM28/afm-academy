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
// import Cookies from 'js-cookie';
import AntiLaundering from './pages/podft/antiLaundering/AntiLaundering';
import Fatf from './pages/podft/fatf/Fatf';
import Eag from './pages/podft/eag/Eag';
import MutualEvaluation from './pages/podft/mutualEvaluation/MutualEvaluation';


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

          <Route path="/anti-laundering" element={<AntiLaundering />}></Route>
          <Route path="/fatf" element={<Fatf />}></Route>
          <Route path="/eag" element={<Eag />}></Route>
          <Route path="/mutual-evaluation" element={<MutualEvaluation />}></Route>



        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
