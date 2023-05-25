import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";

const EditEmployees = () => {
  const [employees, setEmployees] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  // const [showButton, setShowButton] = useState(false);
  const [showFirstEdit, setShowFirstEdit] = useState(false);
  const [showLastEdit, setShowLastEdit] = useState(false);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const confirmEdit = (employeeId) => {
    const editedEmployee = employees.find(
      (employee) => employee.id === employeeId
    );
    const originalFirstName = editedEmployee.firstName;
    const originalLastName = editedEmployee.lastName;
    if (firstName !== "") {
      editedEmployee.firstName = firstName;
    } else editedEmployee.firstName = originalFirstName;

    if (lastName !== "") {
      editedEmployee.lastName = lastName;
    } else {
      editedEmployee.lastName = originalLastName;
    }

    axios
      .put(
        `https://employeeserver-whjq.onrender.com/api/employees/${employeeId}`,
        editedEmployee
      )
      .then((response) => {
        console.log("Employee updated successfully:", response.data);
        window.location.reload();
      })
      .catch((error) => {
        console.error("Error updating employee:", error);
      });
  };

  const lastNameEdit = () => {
    setShowLastEdit(!showLastEdit);
  };

  const firstNameEdit = () => {
    setShowFirstEdit(!showFirstEdit);
  };
  useEffect(() => {
    axios
      .get(`https://employeeserver-whjq.onrender.com/api/employees`)
      .then((response) => {
        setEmployees(response.data);
        setIsLoading(false);
        console.log(employees);
      })
      .catch((error) => {
        console.error("Error submitting form:", error);
        setIsLoading(false);
      });
  }, []);

  return (
    <div>
      EditEmployeess
      <div className="seeEmployees">
        <h2>Current Employees:</h2>
        {isLoading ? (
          <div>Loading...</div>
        ) : (
          employees.map((employee) => (
            <div
              className="employees"
              style={{ margin: "2em" }}
              key={employee.id}
            >
              <h3 style={{ display: "inline-block", marginRight: "10px" }}>
                First Name: {employee.firstName}
              </h3>
              {showFirstEdit ? (
                <>
                  <input
                    value={firstName}
                    onChange={(e) => {
                      setFirstName(e.target.value);
                    }}
                    placeholder="First Name"
                  />
                  <button
                    onClick={() => {
                      confirmEdit(employee.id);
                    }}
                  >
                    Confirm Edit
                  </button>
                </>
              ) : null}
              <button onClick={firstNameEdit}>Edit First Name</button>
              <h3 style={{ display: "inline-block", marginRight: "10px" }}>
                Last Name: {employee.lastName}
              </h3>{" "}
              {showLastEdit ? (
                <>
                  <input
                    value={lastName}
                    onChange={(e) => {
                      setLastName(e.target.value);
                    }}
                    placeholder="Last Name"
                  />
                  <button onClick={() => confirmEdit(employee.id)}>
                    Confirm Edit
                  </button>
                </>
              ) : null}
              <button onClick={lastNameEdit}>Edit Last Name</button>
              <span>Phone Number: {employee.phone}</span>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default EditEmployees;
