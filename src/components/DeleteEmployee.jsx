import React, { useContext, useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";

import { EmployeeContext } from "./context/EmployeeProvider";
import styled from "styled-components";

const P = styled.p`
  font-size: 30px;
  color: blue;
`;

const DeleteEmployee = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const { employees, setEmployees } = useContext(EmployeeContext);
  const [employee, setEmployee] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const emp = employees.find((emp) => emp.id === id);
    setEmployee(emp);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleDelete = (event) => {
    event.preventDefault();
    const newEmployees = employees.filter((emp) => emp.id !== id);
    setEmployees(newEmployees);
    localStorage.setItem("crud-10-employees", JSON.stringify(newEmployees));
    setIsDeleting(true);
    setTimeout(() => {
      navigate(`/`);
      setIsDeleting(false);
    }, 2000);
  };

  return (
    <div>
      <Link to={`/`}>Back</Link>
      <h6>Delete {employee?.name}</h6>
      <button onClick={handleDelete}>Delete {employee?.name}</button>
      <div>
        {employees.map((emp) => {
          return <span>{emp.name},</span>;
        })}
      </div>
      {isDeleting && <P>Deleting...</P>}
    </div>
  );
};

export default DeleteEmployee;
