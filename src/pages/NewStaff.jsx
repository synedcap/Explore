import axios from "axios";
import React, { useEffect, useState } from "react";
import * as apiUrl from "../constant/apiConfig";


const NewStaff = () => {
  const token = localStorage.getItem("token");
  const [departmentList, setDepartmentList] = useState();

  useEffect(() => {
    const getData = async () => {
      const response = await axios
      .get(apiUrl.getDepartmentList, {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((result) => {
        // handle API response
        console.log(result);
        setDepartmentList(result.data);
      })
      .catch((error) => {
        // handle API error
      });
    };
    getData();
  },[]);

 
  return (
    <div className="">
      <h1 className="text-black  text-2xl text-center py-6 mt-7 uppercase">
        NEW STAFF
      </h1>

      <div class="w-full max-w-md mx-auto">
        <form class="bg-white shadow-lg rounded-lg px-8 pt-6 pb-8 mb-4">
          <div class="mb-4">
            <label class="block text-gray-700 font-bold mb-2" for="name">
            FirstName
            </label>
            <input
              class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="firstname"
              type="text"
              placeholder="Enter your name"
            />
          </div>
          <div class="mb-4">
            <label class="block text-gray-700 font-bold mb-2" for="name">
            LastName
            </label>
            <input
              class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="lastname"
              type="text"
              placeholder="Enter your name"
            />
          </div>
          <div class="mb-4">
            <label class="block text-gray-700 font-bold mb-2" for="email">
              DateOfStart
            </label>
            <input
              class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="dateOfBirth"
              type="date"
              placeholder="Enter date of start"
            />
          </div>
          <div class="mb-4">
            <label class="block text-gray-700 font-bold mb-2" for="email">
              Post
            </label>
            <input
              class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="post"
              type="post"
              placeholder="Enter your post"
            />
          </div>
       
       
          <div class="mb-4">
            <label class="block text-gray-700 font-bold mb-2" for="select">
              Select department
            </label>
          </div>
          <div class="relative">
            <select
              class="block appearance-none w-full bg-white border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline"
              id="departments"
            >
                <option>Choose department</option>
              {departmentList?.map(department => (
                <option key={department.id} value={department.id}>{department.label}</option>
             ))}
            </select>
          </div>

          <button
            type="submit"
            className="w-full my-5 py-2 bg-teal-500 shadow-lg shadow-teal-500/50 hover:shadow-teal-500/40 text-white
           font-semibold rounded-lg "
          >
            Enregistrer
          </button>
        </form>
      </div>
    </div>
  );
};

export default NewStaff;
