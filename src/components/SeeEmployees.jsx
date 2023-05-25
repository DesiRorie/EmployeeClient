// import React, { useEffect, useState } from "react";
// import axios from "axios";
// import { Link } from "react-router-dom";

// const SeeEmployees = () => {
//   const [employees, setEmployees] = useState([]);
//   useEffect(() => {
//     axios
//       .get(`https://employeeserver-whjq.onrender.com/api/employees`)
//       .then((response) => {
//         setEmployees(response.data);
//         console.log(employees);
//       })
//       .catch((error) => {
//         console.error("Error submitting form:", error);
//       });
//   }, [employees]);
//   return (
//     <div className="seeEmployees">
//       <h2>Current Employees:</h2>
//       {employees.map((employee) => {
//         return (
//           <div
//             className="employees"
//             style={{ margin: "2em" }}
//             key={employee.id}
//           >
//             <h3>First Name: {employee.firstName}</h3>
//             <h3>Last Name: {employee.lastName}</h3>
//             <span>Phone Number:{employee.phone}</span>
//           </div>
//         );
//       })}
//       <button>
//         <Link to="/">Go Back</Link>
//       </button>
//     </div>
//   );
// };

// export default SeeEmployees;

import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const SeeEmployees = () => {
  const [employees, setEmployees] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

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
            <h3>First Name: {employee.firstName}</h3>
            <h3>Last Name: {employee.lastName}</h3>
            <span>Phone Number: {employee.phone}</span>
          </div>
        ))
      )}
    </div>
  );
};

export default SeeEmployees;
