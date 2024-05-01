import React, { useContext} from "react";
import { Link } from "react-router-dom";
import { EmployeeContext } from "./context/EmployeeProvider";
import Employee from "./Employee";


const ReadEmployees = () => {
  const { employees } = useContext(EmployeeContext);



  return (
    <div>
      <h6>ReadEmployees</h6>

      {employees.map((emp) => {
        return <Employee employee={emp} key={emp.id} />;
      })}
      <Link to={`/create`}>
        <button>Create Employee</button>
      </Link>
    </div>
  );
};

export default ReadEmployees;
