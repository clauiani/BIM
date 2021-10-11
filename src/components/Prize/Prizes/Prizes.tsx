import { Prize } from "../Prize/Prize";
import store from "../../../store/PrizeStore/PrizeStore";
import "./Prizes.css";
export interface IPrizesProps {}

export const Prizes = ({}: IPrizesProps) => {
  const { PRIZES } = store;
  return (
    <div className="prizes">
      {PRIZES.map((prize) => (
        <Prize {...prize} />
      ))}
    </div>
  );
};
