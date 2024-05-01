import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Div = styled.div`
  border: 1px solid blue;
  width: 80%;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  margin-bottom: 10px;
`;

const Employee = ({ employee }) => {
  const [score, setScore] = useState(0);
  useEffect(() => {
    getScore();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const getScore = async () => {
    try {
      const { data } = await axios(
        `https://api.github.com/users/${employee.name}`
      );

      setScore(data.public_repos);
    } catch (error) {}
  };

  return (
    <Div>
      <span>{employee.name}</span>
      <span>score: {score}</span>
      <Link to={`/update/${employee.id}`}>update</Link>
      <Link to={`/delete/${employee.id}`}>delete</Link>
    </Div>
  );
};

export default Employee;
