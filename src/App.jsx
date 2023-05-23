import { Route } from "react-router-dom";
import "./App.css";
import Homepage from "./pages/Homepage";
import SeeEmployees from "./components/SeeEmployees";
import { Routes } from "react-router-dom";

function App() {
  return (
    <>
      <Routes>
        <Route path="*" element={<Homepage />} />
        <Route path="/seeEmployees" element={<SeeEmployees />} />
      </Routes>
    </>
  );
}

export default App;
