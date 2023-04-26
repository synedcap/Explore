import axios from "axios";
import { React, useState, useEffect } from "react";
import * as apiUrl from "../constant/apiConfig";
import { Link } from "react-router-dom";
import { newStaff } from "../constant/Url";
import dayjs from "dayjs";

const Staff = () => {
  const token = localStorage.getItem("token");
  const [staffList, setSaffList] = useState();

  useEffect(() => {
    const getData = async () => {
      const response = await axios
        .get(apiUrl.getStaffList, {
          headers: { Authorization: `Bearer ${token}` },
        })
        .then((result) => {
          // handle API response
          console.log(result);
          setSaffList(result.data);
        })
        .catch((error) => {
          // handle API error
        });
    };
    getData();
  }, []);

  return (
    <div>
      <h1 className="text-black  text-2xl text-center py-6 mt-7 uppercase">STAFF LIST</h1>
     
      <Link to={newStaff} className="px-6 py-3 text-blue-100 no-underline rounded bg-blue-500 m-8 hover:text-blue-200">Nouveau</Link>

      <div className="p-8 overflow-auto relative">
        {staffList?.length !== 0 ? (
          <table className="table-auto border-x border-b w-full">
            <thead className="bg-black text-white">
              <tr className="">
                <th className="font-bold py-2 px-4 border-b border-l text-left">FirstName</th>
                <th className="font-bold py-2 px-4 border-b border-l text-left">LastName</th>
                <th className="font-bold py-2 px-4 border-b border-l text-left">DateOfStart</th>
                <th className="font-bold py-2 px-4 border-b border-l text-left">Post</th>
                <th className="font-bold py-2 px-4 border-b border-l text-left">IsActive</th>
                <th className="font-bold py-2 px-4 border-b border-l text-left">IsArchived</th>
                <th className="font-bold py-2 px-4 border-b border-l text-left">Department</th>
              </tr>
            </thead>
            <tbody className="bg-gray-100">
              {staffList?.map((item, index) => (

                <tr key={index} className="table-row ">
                  <td className="p-2 border-b border-l text-left">{item.firstName}</td>
                  <td className="p-2 border-b border-l text-left">{item.lastName}</td>
                  <td className="p-2 border-b border-l text-left">{ dayjs(item.dateOfBirth).format("D-MMM-YYYY")}</td>
                  <td className="p-2 border-b border-l text-left">{item.post}</td>
                  <td className="p-2 border-b border-l text-left">{item.isActive  ? 'Actif':'Inactif'}</td>
                  <td className="p-2 border-b border-l text-left">{item.isArchived ? 'Archivé': 'Pas archivé'}</td>
                  <td className="p-2 border-b border-l text-left">{item.Department.label}</td>
                </tr>
              ))}
            </tbody>
          </table>
        ) : (
          <h1>Aucune donnée</h1>
        )}
      </div>
    </div>
  );
};

export default Staff;
