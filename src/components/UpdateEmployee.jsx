import React, { useContext, useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import styled from "styled-components";
import { EmployeeContext } from "./context/EmployeeProvider";

const Input = styled.input`
  border: 1px solid blue;
  border-radius: 10px;
`;
const P = styled.p`
  font-size: 30px;
  color: blue;
`;
const UpdateEmployee = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const [inputValue, setInputValue] = useState("");
  const { employees, setEmployees } = useContext(EmployeeContext);
  const [employee, setEmployee] = useState("");
  const [isUpdating, setIsUpdating] = useState(false);

  useEffect(() => {
    const emp = employees.find((emp) => emp.id === id);
    setEmployee(emp);
    setInputValue(emp.name);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleSubmit = (event) => {
    event.preventDefault();

    const newEmployees = employees.map((emp) => {
      if (emp.id === id) {
        emp.name = inputValue;
      }
      return emp;
    });
    setEmployees(newEmployees);
    setInputValue("");
    localStorage.setItem("crud-10-employees", JSON.stringify(newEmployees));
    setIsUpdating(true);
    setTimeout(() => {
      navigate(`/`);
      setIsUpdating(false);
    }, 2000);
  };

  const handleChange = (event) => {
    setInputValue(event.target.value);
  };

  return (
    <div>
      <Link to={`/`}>Back</Link>
      <h6>Update {employee?.name}</h6>
      <form onSubmit={handleSubmit}>
        <Input onChange={handleChange} value={inputValue} autoFocus />
      </form>
      <div>
        {employees.map((emp) => {
          return <span>{emp.name},</span>;
        })}
      </div>

      {isUpdating && <P>Updating...</P>}
    </div>
  );
};
export default UpdateEmployee;
