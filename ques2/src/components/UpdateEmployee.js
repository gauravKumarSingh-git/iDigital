import { useState } from "react";
import { useEffect } from "react";

function UpdateEmployee(props) {
  const [data, setData] = useState(props.toUpdate);

  useEffect(() => {
    setData(props.toUpdate)
  }, [props.toUpdate])

  const changeHandler = (event) => {
    const name = event.target.name;
    setData({ ...data, [name]: event.target.value });
  };

  const submitHandler = (event) => {
    event.preventDefault();
    props.updateEmployee(data);
    console.log(data);
  };

  return (
    <div>
      <h4>UPDATE EMPLOYEE</h4>
      <form className="col-12 col-md-6" onSubmit={submitHandler}>
        <div>
          <label htmlFor="id">ID</label>
          <input
            type="text"
            name="id"
            id="id"
            value={data.id}
            onChange={changeHandler}
          />
        </div>
        <div>
          <label htmlFor="name">Name</label>
          <input
            type="text"
            name="name"
            id="name"
            value={data.name}
            onChange={changeHandler}
          />
        </div>
        <div>
          <label htmlFor="salary">Salary</label>
          <input
            type="text"
            name="salary"
            id="salary"
            value={data.salary}
            onChange={changeHandler}
          />
        </div>
        <div>
          <label htmlFor="id">Department</label>
          <input
            type="text"
            name="department"
            id="department"
            value={data.department}
            onChange={changeHandler}
          />
        </div>
        <div>
          <button type="submit" className="btn btn-primary">
            Update Employee
          </button>
        </div>
      </form>
    </div>
  );
}

export default UpdateEmployee;
