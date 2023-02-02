import './App.css';
import { useState }from 'react';

function App() {

  const [sortBy, setSortBy] = useState("id");

  const changeSortBy = (by) => {
    setSortBy(by);
  }

  const sortLogic = (a , b) =>{
    if(sortBy === "id"){
      return a.empId - b.empId;
    }else if(sortBy === "name"){
      return a.empName > b.empName ? 1 : -1;
    }else if(sortBy === "dep"){
      return a.empDep > b.empDep ? 1 : -1;
    }else if(sortBy === "salary"){
      return a.empSal - b.empSal;
    }
  }

  const empData = [

    {empId:1001,empName:'Rahul',empSal:9000,empDep:'JAVA',empjoiningdate:'6/12/2014'},
    
    {empId:1002,empName:'Vikash',empSal:11000,empDep:'ORAAPS',empjoiningdate:'6/12/2017'},
    
    {empId:1003,empName:'Uma',empSal:12000,empDep:'JAVA',empjoiningdate:'6/12/2010'},
    
    {empId:1004,empName:'Sachin',empSal:11500,empDep:'ORAAPS',empjoiningdate:'11/12/2017'},
    
    {empId:1005,empName:'Amol',empSal:7000,empDep:'.NET',empjoiningdate:'1/1/2018'},
    
    {empId:1006,empName:'Vishal',empSal:17000,empDep:'BI',empjoiningdate:'9/12/2012'},
    
    {empId:1007,empName:'Rajita',empSal:21000,empDep:'BI',empjoiningdate:'6/7/2014'},
    
    {empId:1008,empName:'Neelima',empSal:81000,empDep:'TESTING',empjoiningdate:'6/17/2015'},
    
    {empId:1009,empName:'Daya',empSal:1000,empDep:'TESTING',empjoiningdate:'6/17/2016'} 
  ];

  return (
    <div className="App">
      <table border="1">
        <thead>
          <tr>
            <td><button onClick={() => changeSortBy("id")}>ID</button> </td>
            <td><button onClick={() => changeSortBy("name")}>Name</button> </td>
            <td><button onClick={() => changeSortBy("salary")}>Salary</button> </td>
            <td><button onClick={() => changeSortBy("dep")}>Department</button> </td>
          </tr>
        </thead>
        <tbody>
            {empData.sort((a, b)=>sortLogic(a,b)).map((emp) => (
              <tr>
                <td>{emp.empId}</td>
                <td>{emp.empName}</td>
                <td>{emp.empSal}</td>
                <td>{emp.empDep}</td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
}

export default App;
