import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./components/Login";
import Base from "./layout/Base";
import Home from "./pages/Home";
import PasswordForgot from "./pages/PasswordForgot";
import Staff from "./pages/Staff";
import Meeting from "./pages/Meeting";
import Profil from "./pages/Profil";
import Vacation from "./pages/Vacation";
import NewStaff from "./pages/NewStaff";
import "react-toastify/dist/ReactToastify.css";
import Department from "./pages/Department";
import NewDepartment from "./pages/NewDepartment";
import * as urlLinks  from "./constant/Url";

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
        <Route path={urlLinks.departmentUrl} element={ <Base children={<Department/>} />} />
        <Route path={urlLinks.newDepartmentUrl} element={ <Base children={<NewDepartment/>} />} />
        <Route path={urlLinks.editStaff} element={ <Base children={<NewStaff/>} />} />
      </Routes>
    </Router>
  );
};

export default App;
