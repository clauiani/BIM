import { v4 as uuidv4 } from "uuid";
import { membersStore } from "../../../store/TeamMembersStore/TeamMembersStore";
import { Member } from "../Member/TeamMembers";
import "./Members.css";

export interface IMembersProps {}

export const TeamMembers = ({}: IMembersProps) => {
  const { members } = membersStore;
  return (
    <>
      <div className="members">
        <div className="members__container">
          {members.map((member) => (
            <Member key={uuidv4()} {...member} />
          ))}
        </div>
      </div>
    </>
  );
};
