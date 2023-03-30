import React from "react";
import { Link  } from "react-router-dom";
import loginImg from "../assets/login2.jpg";
import Home from "../pages/Home";

const Login = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 h-screen w-full">
      <div className="hidden sm:block">
        <img className="w-full h-full object-cover" src={loginImg} alt="" />
      </div>
      <div className="bg-white flex flex-col justify-center">
        <form
          action=""
          className="max-w-[400px] w-full mx-auto bg-gray-900  p-8 px-8 rounded-lg"
        >
          <h2 className="text-4xl text-white text-center font-bold ">
            SIGN IN
          </h2>
          <div className="flex flex-col text-gray-400 py-2">
            <label htmlFor="" className="text-white ">
              User Name
            </label>
            <input
              type="text"
              className="rounded-lg bg-gray-700 mt-2 p-2 focus:border-blue-500 focus:bg-gray-800 focus:outline-none"
            />
          </div>
          <div className="flex flex-col text-gray-400 py-2">
            <label htmlFor="" className="text-white ">
              Password
            </label>
            <input
              type="password"
              className="rounded-lg bg-gray-700 mt-2 p-2 focus:border-blue-500 focus:bg-gray-800 focus:outline-none"
            />
          </div>
          <div className="flex justify-between text-gray-400 py-2">
            <p className="flex  items-center text-white">
              <input type="checkbox" className="mr-2" />
              <p className="text-white"> Remember Me</p>
            </p>
           <Link to='/password-rest'><p className="text-white ">Forgot Password</p></Link> 
          </div>
          <Link to='/home'>
          <button
            className="w-full my-5 py-2 bg-teal-500 shadow-lg shadow-teal-500/50 hover:shadow-teal-500/40 text-white
           font-semibold rounded-lg "
          >
            Sign In
          </button>
          </Link>
        </form>
      </div>
    </div>
  );
};

export default Login;
