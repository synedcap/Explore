import { PencilIcon, TrashIcon } from "@heroicons/react/solid";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import * as apiUrl from "../constant/apiConfig";
import axios from "axios";
import dayjs from "dayjs";
import { newDepartmentUrl } from "../constant/Url";


const Department = () => {

 const token = localStorage.getItem("token");
 const [allDepartment, setAllDepartment] = useState();

 useEffect(() => {
    const getData = async () => {
        await axios
            .get(apiUrl.getDepartmentList, {headers: {Authorization: `Bearer ${token}`}})
            .then((result) => {
                console.log(result.data);
                setAllDepartment(result.data);
            })
            .catch(() => {

            })
    };
    getData()
 },[])

  return (
    <div>
      <h1 className="text-black  text-2xl text-center py-6 mt-7 uppercase">
        Department LIST
      </h1>

      <Link to={newDepartmentUrl} className="px-6 py-3 text-blue-100 no-underline rounded bg-blue-500 m-8 hover:text-blue-200">
        Nouveau
      </Link>

      <div className="p-8 overflow-auto relative">
        <table className="table-auto border-x border-b w-full">
          <thead className="bg-black text-white">
            <tr className="">
              <th className="font-bold py-2 px-4 border-b border-l text-left">
                LABEL
              </th>
              <th className="font-bold py-2 px-4 border-b border-l text-left">
                CREATED AT
              </th>

              <th className="font-bold py-2 px-4 border-b border-l text-left">
                Actions
              </th>
            </tr>
          </thead>
          <tbody className="bg-gray-100">
          {allDepartment?.length !== 0 ? (
            allDepartment?.map((item,index) =>(
            <tr className="table-row " key={index}>
              <td className="p-2 border-b border-l text-left">
                {item.label}
              </td>
              <td className="p-2 border-b border-l text-left">
              {dayjs(item.createdAt).format("D-MMM-YYYY")}
              </td>
               
              <td className="p-2 border-b border-l text-left">
                <div className="flex items-center">
                  <Link>
                    <PencilIcon className="w-6 h-6 text-yellow-600" />
                  </Link>
                  <button>
                    <TrashIcon className="w-6 h-6 text-red-600 ml-2" />
                  </button>
                </div>
              </td>
             
            </tr>
            ))
            ) : (
            <tr>
                <td colSpan={3}>No record found</td>
            </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Department;
