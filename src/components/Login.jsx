import axios from "axios";
import React, { useState } from "react";
import { Link, useNavigate} from "react-router-dom";
import loginImg from "../assets/login2.jpg";
import { apiLoginUrl } from "../constant/apiConfig";
import * as urlLinks from "../constant/Url";

const Login = () => {
  const navigate = useNavigate();

  const [data, setData] = useState({});
  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post(apiLoginUrl, data)
      .then((result) => {

        if (result.status == 200) {
          
          localStorage.setItem("token", result.data.token);
          navigate(urlLinks.homeUrl);
        }
      })
      .catch((error) => {
        // handle login error
      });
  };

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 h-screen w-full">
      <div className="hidden sm:block">
        <img className="w-full h-full object-cover" src={loginImg} alt="" />
      </div>
      <div className="bg-white flex flex-col justify-center">
        <form
          onSubmit={handleSubmit}
          className="max-w-[400px] w-full mx-auto bg-gray-900  p-8 px-8 rounded-lg"
        >
          <h2 className="text-4xl text-white text-center font-bold ">
            SIGN IN
          </h2>
          <div className="flex flex-col text-gray-400 py-2">
            <label htmlFor="" className="text-white ">
              Username
            </label>
            <input
              type="text"
              onChange={(e) => {
                setData((prev) => {
                  return { ...prev, userName: e.target.value };
                });
              }}
              className="rounded-lg bg-gray-700 mt-2 p-2 focus:border-blue-500 focus:bg-gray-800 focus:outline-none"
            />
          </div>
          <div className="flex flex-col text-gray-400 py-2">
            <label htmlFor="" className="text-white ">
              Password
            </label>
            <input
              type="password"
              onChange={(e) => {
                setData((prev) => {
                  return { ...prev, password: e.target.value };
                });
              }}
              className="rounded-lg bg-gray-700 mt-2 p-2 focus:border-blue-500 focus:bg-gray-800 focus:outline-none"
            />
          </div>
          <div className="flex justify-between text-gray-400 py-2">
            <p className="flex  items-center text-white">
              <input type="checkbox" className="mr-2" />
              <p className="text-white"> Remember Me</p>
            </p>
            <Link to={urlLinks.passwordForgotUrl}>
              <p className="text-white hover:shadow-teal-500/40">
                Forgot Password
              </p>
            </Link>
          </div>

          <button
            type="submit"
            className="w-full my-5 py-2 bg-teal-500 shadow-lg shadow-teal-500/50 hover:shadow-teal-500/40 text-white
           font-semibold rounded-lg "
          >
            Sign In
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
