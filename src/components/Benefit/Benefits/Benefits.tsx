import { Benefit } from "../Benefit/Benefit";
import store from "../../../store/BenefitStore/BenefitStore";
import "./Benefits.css";

export interface IBenefitsProps {}

export const Benefits = ({}: IBenefitsProps) => {
  const { benefits } = store;

  return (
    <div className="benefits">
      {benefits.map((benefit) => (
        <Benefit {...benefit} />
      ))}
    </div>
  );
};
