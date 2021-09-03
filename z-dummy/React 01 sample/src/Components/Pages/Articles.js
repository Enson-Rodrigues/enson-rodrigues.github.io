import React, { useEffect, useState } from "react";
import axios from "axios";
import "./drawer.scss";

const Articles = () => {
  const [employees, setEmployees] = useState([]);
  const [employeesStatus, setEmployeesStatus] = useState();
  const [currentEmployees, setCurrentEmployees] = useState({});
  const url = "http://localhost:3100/data";
  const [trueValue, setTrueValue] = useState(false);

  useEffect(() => {
    loadEmployeeData();
  }, []);

  const showPopup = (item) => {
    let filtered = employees.filter((e) => e.id == item.id);
    console.log("FILTERED DATA", filtered);
    setCurrentEmployees(filtered);
    setTrueValue(true);

    if (item.employee_age <= 58) {
      setEmployeesStatus('active');
    } else if (item.employee_age > 58) {
      setEmployeesStatus('inactive');
    }
  };

  const loadEmployeeData = async () => {
    const result = await axios.get(url);
    setEmployees(result.data);
    console.log("DATA FR OM API", result.data);
  };

  const closePopup = () => {
    setTrueValue(false);
  }
  return (
    <div className="content-wrapper">
      <h1>Articles Page</h1>

      <table className="table employee-table">
        <thead className="thead-dark">
          <tr>
            <th scope="col">Employee Id</th>
            <th scope="col">Employee Name</th>
            <th scope="col">Employee Salary </th>
            <th scope="col">Employee Age</th>
          </tr>
        </thead>
        <tbody>
          {employees.map((e, index) => (
            <tr key={e.id} onClick={() => showPopup(e)}>
              <td>{e.id}</td>
              <td>{e.employee_name}</td>
              <td>{e.employee_salary}</td>
              <td>{e.employee_age}</td>
            </tr>
          ))}
        </tbody>
      </table>

      {trueValue ? (
        <>
        <div className="overlay"></div>
        <div className={`popup-wrapper ${employeesStatus}`}>
          <div className="header">
            <h2></h2>
            <p className="close" onClick={closePopup}></p>
          </div>
          <ul>
            <li className="label">
              <h1>Employee Name: </h1>
              {currentEmployees.map((e, i) => (
                <h2>{e.employee_name}</h2>
              ))}
            </li>

            <li className="label">
              <h1>Employee Salary:</h1>
              {currentEmployees.map((e, i) => (
                <h2>{e.employee_salary}</h2>
              ))}
            </li>

            <li className="label">
              <h1>Employee Age: </h1>
              {currentEmployees.map((e, i) => (
                <h2>{e.employee_age}</h2>
              ))}
            </li>
          </ul>
        </div>
        </>
      ) : ''}
    </div>
  );
};

export default Articles;
