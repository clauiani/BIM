import { v4 as uuidv4 } from "uuid";

import { Employee } from "../Employee/Employee";
import { employeeStore } from "../../../store/EmployeeStore/EmployeeStore";
import "./Employees.css";

export interface IEmployeeProps {}

export const Employees = ({}: IEmployeeProps) => {
  const { employees } = employeeStore;

  return (
    <>
      <div className="employees">
        <div className="employees__container">
          {employees.map((employee) => (
            <Employee key={uuidv4()} {...employee} />
          ))}
        </div>
      </div>
    </>
  );
};
