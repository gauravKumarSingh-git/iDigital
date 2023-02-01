import React from "react";
import EmployeeData from "../data/EmployeeData";

function ShowEmployee() {
  return (
    <div className="my-5 col-6">
      <h4>SHOW ALL EMPLOYEE</h4>
      <table className="table">
        <thead className="border">
          <tr>
            <th className="border">ID</th>
            <th className="border">Name</th>
            <th className="border">Salary</th>
            <th className="border">Department</th>
            <th colSpan={2} className="text-center">
              Action
            </th>
          </tr>
        </thead>
        {EmployeeData.map((data) => (
          <tbody className="border" key={data.empId}>
            <tr>
              <td className="border">{data.empId}</td>
              <td className="border">{data.empName}</td>
              <td className="border">{data.empSal}</td>
              <td className="border">{data.empDep}</td>
              <td className="border">UPDATE</td>
              <td className="border">DELETE</td>
            </tr>
          </tbody>
        ))}
      </table>
    </div>
  );
}

export default ShowEmployee;
