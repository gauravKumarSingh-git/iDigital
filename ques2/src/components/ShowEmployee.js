import React from "react";

function ShowEmployee(props) {
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
        {props.employees.map((data) => (
          <tbody className="border" key={data.id}>
            <tr>
              <td className="border">{data.id}</td>
              <td className="border">{data.name}</td>
              <td className="border">{data.salary}</td>
              <td className="border">{data.department}</td>
              <td className="border"><button className="btn btn-primary" onClick={() => props.setToUpdate(data)}>UPDATE</button></td>
              <td className="border"><button className="btn btn-danger" onClick={() => props.deleteEmployee(data.id)}>DELETE</button></td>
            </tr>
          </tbody>
        ))}
      </table>
    </div>
  );
}

export default ShowEmployee;
