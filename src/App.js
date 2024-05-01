import { Routes, Route } from "react-router-dom";
import "./App.css";
import ReadEmployees from "./components/ReadEmployees";
import CreateEmployee from "./components/CreateEmployee";
import UpdateEmployee from "./components/UpdateEmployee";
import DeleteEmployee from "./components/DeleteEmployee";
import EmployeeProvider from "./components/context/EmployeeProvider";

function App() {
  return (
    <div className="App">
      <EmployeeProvider>
        <Routes>
          <Route exact path="/" element={<ReadEmployees />} />
          <Route exact path="/create" element={<CreateEmployee />} />
          <Route exact path="/update/:id" element={<UpdateEmployee />} />
          <Route exact path="/delete/:id" element={<DeleteEmployee />} />
        </Routes>
      </EmployeeProvider>
    </div>
  );
}

export default App;
