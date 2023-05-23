import React, { useState } from "react";
import axios from "axios";

const AddEmployee = () => {
  const [employee, setEmployee] = useState({
    firstName: "",
    lastName: "",
    phone: 0,
  });
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(employee);

    axios
      .post(`https://employeeserver-whjq.onrender.com/api/employees`, employee)
      .then((response) => {
        console.log("Form submitted successfully:", response.data);

        setEmployee({
          firstName: "",
          lastName: "",
          phone: null,
        });
      })
      .catch((error) => {
        console.error("Error submitting form:", error);
      });
  };

  return (
    <form onSubmit={handleSubmit} className="addEmployee" action="post">
      <label htmlFor="">First Name:</label>
      <input
        type="text"
        onChange={(e) => {
          setEmployee((prev) => ({ ...prev, firstName: e.target.value }));
        }}
        value={employee.firstName}
        placeholder="First Name"
      />
      <label htmlFor="">Last Name:</label>
      <input
        type="text"
        onChange={(e) => {
          setEmployee((prev) => ({ ...prev, lastName: e.target.value }));
        }}
        value={employee.lastName}
        placeholder="Last Name"
      />
      <label htmlFor="">Phone:</label>
      <input
        type="text"
        value={employee.phone}
        onChange={(e) => {
          setEmployee((prev) => ({ ...prev, phone: e.target.value }));
        }}
        placeholder="Enter your number"
      />
      <button type="submit"> Submit</button>
    </form>
  );
};

export default AddEmployee;
