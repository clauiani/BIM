import { Benefit } from "../Benefit/Benefit";
import store from "../../../store/BenefitStore/BenefitStore";
import "./Benefits.css";
import Carousel from "react-multi-carousel";

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
