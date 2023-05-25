import { Route } from "react-router-dom";
import "./App.css";
import Homepage from "./pages/Homepage";
import SeeEmployees from "./components/SeeEmployees";
import { Routes } from "react-router-dom";
import AddEmployee from "./components/AddEmployee";
import Navbar from "./components/Navbar";
import Command from "./components/Command";
import EditEmployees from "./components/EditEmployees";

function App() {
  return (
    <>
      <Navbar />
      <Command />
      <Routes>
        <Route path="*" element={<Homepage />} />
        <Route path="/seeEmployees" element={<SeeEmployees />} />
        <Route path="/addEmployee" element={<AddEmployee />} />
        <Route path="/editEmployee" element={<EditEmployees />} />
      </Routes>
    </>
  );
}

export default App;
