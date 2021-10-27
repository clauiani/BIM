import { v4 as uuidv4 } from "uuid";
import { studentPrize } from "../../../store/Regulations/StudentPrizeStore/StudentPrizeStore";
import { RegulationSubtitle } from "../../RegulationSubtitle/RegulationSubtitle";
export interface IStudentPrizeProps {}

export const StudentPrize = ({}: IStudentPrizeProps) => {
  const { prize } = studentPrize;
  return (
    <>
      <div className="first-rule">
        {prize.map((arg) => (
          <RegulationSubtitle key={uuidv4()} {...arg} />
        ))}
      </div>
    </>
  );
};
