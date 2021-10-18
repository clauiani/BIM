import "./SubmitProjectName.css";

export interface ISubmitProjectNameProps {
  title: string;
  name: string;
  widthprop: number;
  heightprop: number;
}

export const SubmitProjectName = ({
  title,
  name,
  widthprop,
  heightprop,
}: ISubmitProjectNameProps) => {
  return (
    <>
      <div className="submitprojectname">
        <div className="submitprojectname__title">{title}</div>
        <input
          type="text"
          placeholder={name}
          style={{ width: widthprop, height: heightprop }}
          className="submitprojectname__input"
        />
      </div>
    </>
  );
};
