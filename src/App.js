import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./components/Login";
import Base from "./layout/Base";
import Home from "./pages/Home";
import PasswordForgot from "./pages/PasswordForgot";
import  * as urlLinks   from './constant/Url'
import Staff from "./pages/Staff";
import Meeting from "./pages/Meeting";
import Profil from "./pages/Profil";
import Vacation from "./pages/Vacation";
import NewStaff from "./pages/NewStaff";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path={urlLinks.loginUrl} element={ <Login />} />
        <Route path={urlLinks.homeUrl} element={ <Base children={<Home/>} />} />
        <Route path={urlLinks.staffUrl} element={ <Base children={<Staff/>} />} />
        <Route path={urlLinks.meetingUrl} element={ <Base children={<Meeting/>} />} />
        <Route path={urlLinks.profilUrl} element={ <Base children={<Profil/>} />} />
        <Route path={urlLinks.vacationUrl} element={ <Base children={<Vacation/>} />} />
        <Route path={urlLinks.passwordForgotUrl} element={ <PasswordForgot  />} />
        <Route path={urlLinks.newStaff} element={ <Base children={<NewStaff/>} />} />
        <Route path={urlLinks.editStaff} element={ <Base children={<NewStaff/>} />} />
      </Routes>
    </Router>
  );
};

export default App;
