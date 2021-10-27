import { v4 as uuidv4 } from "uuid";
import { secondRegulation } from "../../../store/Regulations/SecondRegulationStore/SecondRegulationStore";
import { RegulationSubtitle } from "../../RegulationSubtitle/RegulationSubtitle";
export interface IFirstRegulationProps {}

export const SecondRegulation = ({}: IFirstRegulationProps) => {
  const { REGULATION2 } = secondRegulation;
  return (
    <>
      <div className="first-rule">
        {REGULATION2.map((rule) => (
          <RegulationSubtitle key={uuidv4()} {...rule} />
        ))}
      </div>
    </>
  );
};
