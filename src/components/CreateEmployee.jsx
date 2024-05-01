import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { EmployeeContext } from "./context/EmployeeProvider";
import { v4 as uuid } from "uuid";

const Input = styled.input`
  border: 1px solid blue;
  border-radius: 10px;
`;

const CreateEmployee = () => {
  const [inputValue, setInputValue] = useState("");
  const { employees, setEmployees } = useContext(EmployeeContext);

  const handleSubmit = (event) => {
    event.preventDefault();
    const employee = {};
    employee.id = uuid();
    employee.score = 0;
    employee.name = inputValue;
    const newEmployees = [...employees, employee];
    setEmployees(newEmployees);
    setInputValue("");
    localStorage.setItem("crud-10-employees", JSON.stringify(newEmployees));
  };

  const handleChange = (event) => {
    setInputValue(event.target.value);
  };

  return (
    <div>
      <Link to={`/`}>Back</Link>
      <h6>CreateEmployee</h6>
      <form onSubmit={handleSubmit}>
        <Input onChange={handleChange} value={inputValue} autoFocus />
      </form>
      <div>
        {employees.map((emp) => {
          return <span>{emp.name},</span>;
        })}
      </div>
    </div>
  );
};

export default CreateEmployee;
