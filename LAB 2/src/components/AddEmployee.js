import React from "react";
import { useState } from "react";

function AddEmployee(props) {
  const [data, setData] = new useState({
    id: "",
    name: "",
    salary: "",
    department: "",
  });

  const changeHandler = (event) => {
    const name = event.target.name;
    setData({ ...data, [name]: event.target.value });
  };

  const submitHandler = (event) => {
    event.preventDefault();
    const res = `${data.id} ${data.name} ${data.salary} ${data.department}`;
    alert(res);
    props.addEmployee(data);
    console.log(data);
  };
  return (
    <div>
      <form className="col-12 col-md-6" onSubmit={submitHandler}>
        <p>Angular 2 Operation</p>
        <h4>ADD AN EMPLOYEE</h4>
        <div>
          <label htmlFor="id">ID</label>
          <input type="text" name="id" id="id" onChange={changeHandler} />
        </div>
        <div>
          <label htmlFor="name">Name</label>
          <input type="text" name="name" id="name" onChange={changeHandler} />
        </div>
        <div>
          <label htmlFor="salary">Salary</label>
          <input
            type="text"
            name="salary"
            id="salary"
            onChange={changeHandler}
          />
        </div>
        <div>
          <label htmlFor="id">Department</label>
          <input
            type="text"
            name="department"
            id="department"
            onChange={changeHandler}
          />
        </div>
        <div>
          <button type="submit" className="btn btn-primary">Add Employee</button>
        </div>
        <div id="result">
          {data.id} {data.name} {data.salary} {data.department}
        </div>
      </form>
    </div>
  );
}

export default AddEmployee;
