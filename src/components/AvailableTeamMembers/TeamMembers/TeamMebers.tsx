import { v4 as uuidv4 } from "uuid";

import { AvailableTeamMembers } from "../TeamMember/AvailableTeamMembers";
import { availableMembers } from "../../../store/AvailableTeamMembers/AvailableTeamMembers";
import "./TeamMembers.css";
export interface ITeamMembersProps {}

export const TeamMembers = ({}: ITeamMembersProps) => {
  const { members } = availableMembers;
  return (
    <>
      <div className="team-members">
        <div className="team-members__container">
          {members.map((member) => (
            <AvailableTeamMembers key={uuidv4()} {...member} />
          ))}
        </div>
      </div>
    </>
  );
};
