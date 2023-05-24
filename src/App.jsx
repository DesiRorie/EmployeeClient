import { Route } from "react-router-dom";
import "./App.css";
import Homepage from "./pages/Homepage";
import SeeEmployees from "./components/SeeEmployees";
import { Routes } from "react-router-dom";
import AddEmployee from "./components/AddEmployee";
import Navbar from "./components/Navbar";
import Command from "./components/Command";

function App() {
  return (
    <>
      {" "}
      <Navbar />
      <Command />
      <Routes>
        <Route path="*" element={<Homepage />} />
        <Route path="/seeEmployees" element={<SeeEmployees />} />
        <Route path="/addEmployee" element={<AddEmployee />} />
      </Routes>
    </>
  );
}

export default App;
