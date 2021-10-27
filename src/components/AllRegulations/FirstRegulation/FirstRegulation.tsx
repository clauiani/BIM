import { v4 as uuidv4 } from "uuid";
import { firstRegulation } from "../../../store/Regulations/FirstRegulationStore/FirstRegulationStore";
import { RegulationSubtitle } from "../../RegulationSubtitle/RegulationSubtitle";
import "./FirstRegulation.css";
export interface IFirstRegulationProps {}

export const FirstRegulation = ({}: IFirstRegulationProps) => {
  const { REGULATION1 } = firstRegulation;
  return (
    <>
      <div className="first-rule">
        {REGULATION1.map((rule) => (
          <RegulationSubtitle key={uuidv4()} {...rule} />
        ))}
      </div>
    </>
  );
};
