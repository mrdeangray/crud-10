import React, { createContext, useEffect, useState } from "react";

export const EmployeeContext = createContext(null);

const EmployeeProvider = ({ children }) => {
  const [employees, setEmployees] = useState([]);

  useEffect(() => {
    const saveEmployees =
      JSON.parse(localStorage.getItem("crud-10-employees")) || [];
    setEmployees(saveEmployees);
  }, []);

  return (
    <EmployeeContext.Provider value={{ employees, setEmployees }}>
      {children}
    </EmployeeContext.Provider>
  );
};

export default EmployeeProvider;
