import { v4 as uuidv4 } from "uuid";
import { teamPrize } from "../../../store/Regulations/TeamPrizeStore/TeamPrizeStore";
import { RegulationSubtitle } from "../../RegulationSubtitle/RegulationSubtitle";
export interface ITeamPrizeProps {}

export const TeamPrize = ({}: ITeamPrizeProps) => {
  const { TEAMPRIZE } = teamPrize;
  return (
    <>
      <div className="first-rule">
        {TEAMPRIZE.map((prize) => (
          <RegulationSubtitle key={uuidv4()} {...prize} />
        ))}
      </div>
    </>
  );
};
