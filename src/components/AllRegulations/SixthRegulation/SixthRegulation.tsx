import { v4 as uuidv4 } from "uuid";
import { sixthRegulation } from "../../../store/Regulations/SixthParagraph/SixthParagraph";
import { RegulationParagraph } from "../../RegulationParagraph/RegulationParagraph";
import "./SixthRegulation.css";
export interface ISixthRegulationProps {}

export const SixthRegulation = ({}: ISixthRegulationProps) => {
  const { REGULATION6 } = sixthRegulation;
  return (
    <>
      <div className="sixth">
        {REGULATION6.map((rule) => (
          <RegulationParagraph key={uuidv4()} {...rule} />
        ))}
      </div>
    </>
  );
};
