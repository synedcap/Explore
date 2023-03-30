import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./components/Login";
import Base from "./layout/Base";
import Home from "./pages/Home";
import PasswordForgot from "./pages/PasswordForgot";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={ <Login />} />
        <Route path="/home" element={ <Base children={Home} />} />
        <Route path="/password-rest" element={ <PasswordForgot/>} />
      </Routes>
    </Router>
  );
};

export default App;
