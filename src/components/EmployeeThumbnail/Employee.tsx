import "./Employee.css";

export interface IEmployeeProps {
  image: string;
  name: string;
  job: string;
}

export const Employee = ({ image, name, job }: IEmployeeProps) => {
  return (
    <div className="employee">
      <img src={image} alt="No image found" className="employee__image" />
      <h3 className="employee__name">{name}</h3>
      <h4 className="employee__job">{job}</h4>
    </div>
  );
};
