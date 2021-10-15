import { Employee } from "../Employee/Employee";
import store from "../../../store/EmployeeStore/EmployeeStore";
import "./Employees.css";

export interface IEmployeeProps {}

export const Employees = ({}: IEmployeeProps) => {
  const { employees } = store;

  return (
    <>
      <div className="employees">
        <div className="employees__container">
          {employees.map((employee) => (
            <Employee {...employee} />
          ))}
        </div>
      </div>
    </>
  );
};
