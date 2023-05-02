import React, { useState } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import { Link } from "react-router-dom";
import * as urlLinks from "../constant/Url";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <div className="flex justify-between items-center h-24  text-white mx-auto px-4 bg-black">
      <h1 className="w-full text-3xl font-bold text-[#00df9a]">EXPLORE.</h1>
      <ul className="hidden md:flex">
        <li className="p-4 cursor-pointer">
          {" "}
          <Link to={urlLinks.homeUrl}> Home</Link>
        </li>
        <li className="p-4 cursor-pointer">
          {" "}
          <Link to={urlLinks.departmentUrl}> Department</Link>
        </li>
        <li className="p-4 cursor-pointer">
          {" "}
          <Link to={urlLinks.staffUrl}> Staff</Link>
        </li>
        <li className="p-4 cursor-pointer">
          {" "}
          <Link to={urlLinks.vacationUrl}> Vacations</Link>
        </li>
        <li className="p-4 cursor-pointer">
          {" "}
          <Link to={urlLinks.meetingUrl}> Meetings</Link>
        </li>
       
      </ul>
      <div onClick={handleNav} className="block md:hidden">
        {nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
      </div>
      <div
        className={
          nav
            ? "fixed left-0 top-0 w-[60%]  h-full border-r border-r-gray-900 bg-[#000300] ease-in-out duration-500"
            : "fixed left-[-100%]"
        }
      >
        <h1 className="w-full text-3xl font-bold text-[#00df9a] m-4">
          EXPLORE.
        </h1>
        <ul className="uppercase p-4">
          <li className="p-4  text-[#00df9a] border-b border-gray-600">
            <Link to={urlLinks.homeUrl} />
            Home
          </li>
          <li className="p-4 text-[#00df9a] border-b border-gray-600">
            <Link to={urlLinks.departmentUrl} />
            Department
          </li>
          <li className="p-4  text-[#00df9a] border-b border-gray-600">
            <Link to={urlLinks.staffUrl} />
            Staff
          </li>
          <li className="p-4  text-[#00df9a] border-b border-gray-600">
            <Link to={urlLinks.vacationUrl} />
            Vacations
          </li>
          <li className="p-4  text-[#00df9a] border-b border-gray-600">
            <Link to={urlLinks.meetingUrl} />
            Meetings
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
