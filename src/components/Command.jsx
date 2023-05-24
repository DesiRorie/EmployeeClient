import React from "react";
import { Link } from "react-router-dom";

const Command = () => {
  return (
    <div className="commands">
      <ul>
        <li>
          <Link to="/addEmployee">Add Employee</Link>
        </li>
        <li>
          <Link to="/seeEmployees">View Employees</Link>
        </li>
      </ul>
    </div>
  );
};

export default Command;
