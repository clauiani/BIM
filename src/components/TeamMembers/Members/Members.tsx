import { Member } from "../Member/TeamMembers";
import store from "../../../store/TeamMembersStore/TeamMembersStore";
import "./Members.css";

export interface IMembersProps {}

export const TeamMembers = ({}: IMembersProps) => {
  const { members } = store;
  return (
    <>
      <div className="members">
        <div className="members__container">
          {members.map((member) => (
            <Member {...member} />
          ))}
        </div>
      </div>
    </>
  );
};
