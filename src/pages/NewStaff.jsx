import axios from "axios";
import React, { useEffect, useState } from "react";
import * as apiUrl from "../constant/apiConfig";
import { useNavigate, useParams } from "react-router-dom";
import * as urlLinks from "../constant/Url";
import dayjs from "dayjs";


const NewStaff = () => {
  const token = localStorage.getItem("token");
  const navigate = useNavigate();
  const { idStaff } = useParams();

  const [data, setData] = useState();

  //edit staff
  useEffect(() => {
    if (idStaff) {
      // console.log("ceci est une modification",idStaff)

      const getCurrentStaff = async () => {
        const response = await axios
          .get(apiUrl.editStaff + idStaff, {
            headers: { Authorization: `Bearer ${token}` },
          })
          .then((result) => {
            console.log(result);

            setData({
              ...data,
              firstName: result.data.firstName,
              lastName: result.data.lastName,
              email: result.data.email,
              post: result.data.post,
              dateOfBirth: result.data.dateOfBirth,
              departments: result.data.departments,
            });
          });
      };
      getCurrentStaff();
    }
  }, []);

  //get department list
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
  }, []);

  //save staff
  const storeStaff = (e) => {
    e.preventDefault();
    let dataToSend = {
      firstName: data?.firstName,
      lastName: data?.lastName,
      email: data?.email,
      post: data?.post,
      dateOfBirth: data?.dateOfBirth,
      departments: data?.departments,
    };
    axios
      .post(apiUrl.saveStaff, dataToSend, {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((result) => {
        navigate(urlLinks.staffUrl);
      })
      .catch((error) => {
        // handle login error
      });
  };

  //update staff
  const updateStaff = (e) => {
    e.preventDefault();
    let dataToSend = {
      firstName: data?.firstName,
      lastName: data?.lastName,
      email: data?.email,
      post: data?.post,
      dateOfBirth: data?.dateOfBirth,
      departments: data?.departments,
    };
    axios
      .put(apiUrl.updateStaff + idStaff, dataToSend, {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((result) => {
        navigate(urlLinks.staffUrl);
      })
      .catch((error) => {
        // handle login error
      });
  };

  return (
    <div className="">
      <h1 className="text-black  text-2xl text-center py-6 mt-7 uppercase">
        {idStaff ? "EDIT STAFF" : " NEW STAFF"}
      </h1>

      <div class="w-full max-w-md mx-auto">
        <form
          class="bg-white shadow-lg rounded-lg px-8 pt-6 pb-8 mb-4"
          onSubmit={idStaff ? updateStaff:storeStaff}
        >
          <div class="mb-4">
            <label class="block text-gray-700 font-bold mb-2" for="name">
              FirstName
            </label>
            <input
              class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id=""
              onChange={(e) => {
                setData((prev) => {
                  return { ...prev, firstName: e.target.value };
                });
              }}
              value={data?.firstName}
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
              id=""
              onChange={(e) => {
                setData((prev) => {
                  return { ...prev, lastName: e.target.value };
                });
              }}
              value={data?.lastName}
              type="text"
              placeholder="Enter your name"
            />
          </div>
          <div class="mb-4">
            <label class="block text-gray-700 font-bold mb-2" for="name">
              Email
            </label>
            <input
              class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="email"
              onChange={(e) => {
                setData((prev) => {
                  return { ...prev, email: e.target.value };
                });
              }}
              value={data?.email}
              type="email"
              placeholder="Enter your email"
            />
          </div>
          <div class="mb-4">
            <label class="block text-gray-700 font-bold mb-2" for="email">
              DateOfStart
            </label>
            <input
              class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="dateOfBirth"
              onChange={(e) => {
                setData((prev) => {
                  return { ...prev, dateOfBirth: e.target.value };
                });
              }}
              type="date"
              value={dayjs(data?.dateOfBirth).format('YYYY-MM-DD')}
              placeholder="Enter date of start"
            />
          </div>
          <div class="mb-4">
            <label class="block text-gray-700 font-bold mb-2" for="email">
              Post
            </label>
            <input
              class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id=""
              onChange={(e) => {
                setData((prev) => {
                  return { ...prev, post: e.target.value };
                });
              }}
              type="text"
              value={data?.post}
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
            
              onChange={(e) => {
                setData((prev) => {
                  return { ...prev, departments: e.target.value };
                });
              }}
            >
              <option>Choose department</option>
              {departmentList?.map((department) => (
                <option key={department.id} value={department.id} selected={department.id == data?.departments }>
                  {department.label}
                </option>
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
