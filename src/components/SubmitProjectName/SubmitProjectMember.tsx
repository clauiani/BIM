import "./SubmitProjectMember.css";

export interface ISubmitProjectMemberProps {
  name: string;
}

export const SubmitProjectMember = ({ name }: ISubmitProjectMemberProps) => {
  return (
    <>
      <div className="submitprojectmember">
        <input
          type="text"
          placeholder={name}
          className="submitprojectmember__input"
        />
      </div>
    </>
  );
};
