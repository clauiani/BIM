import { v4 as uuidv4 } from "uuid";

import { Benefit } from "../Benefit/Benefit";
import { benefitStore } from "../../../store/BenefitStore/BenefitStore";
import "./Benefits.css";

export interface IBenefitsProps {}

export const Benefits = ({}: IBenefitsProps) => {
  const { benefits } = benefitStore;

  return (
    <div className="benefits">
      {benefits.map((benefit) => (
        <Benefit key={uuidv4()} {...benefit} />
      ))}
    </div>
  );
};
