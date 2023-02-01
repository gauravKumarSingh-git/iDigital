import { useState } from "react";
import "./App.css";
import AddEmployee from "./components/AddEmployee";
import ShowEmployee from "./components/ShowEmployee";
import UpdateEmployee from "./components/UpdateEmployee";

function App() {
  const [employees, setEmployees] = useState([
    { id: 1001, name: "Rahul", salary: 9000, department: "Java" },
  
    { id: 1002, name: "Sachin", salary: 19000, department: "OraApps" },
  
    { id: 1003, name: "Vikash", salary: 29000, department: "BI" },
  ]);

  const [toUpdate, setToUpdate] = useState({});

  const addEmployee = (emp) => {
    setEmployees([...employees, emp]);
  }

  const deleteEmployee = (id) => {
    const newEmpList = employees.filter(employee => employee.id !== id);
    setEmployees(newEmpList);
  }

  const updateEmployee = (emp) => {
    const newEmpList = employees.filter(employee => employee.id !== emp.id);
    setEmployees([...newEmpList, emp]);
  }

  return (
    <>
      <AddEmployee addEmployee = {addEmployee}/>
      <ShowEmployee employees = {employees} deleteEmployee = {deleteEmployee} setToUpdate = {setToUpdate} />
      <UpdateEmployee toUpdate = {toUpdate} updateEmployee = {updateEmployee}/>
    </>
  );
}

export default App;
