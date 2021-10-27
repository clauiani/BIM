import { v4 as uuidv4 } from "uuid";
import { prizeStore } from "../../../store/PrizeStore/PrizeStore";
import { Prize } from "../Prize/Prize";
import "./Prizes.css";
export interface IPrizesProps {}

export const Prizes = ({}: IPrizesProps) => {
  const { PRIZES } = prizeStore;
  return (
    <div className="prizes">
      {PRIZES.map((prize) => (
        <Prize key={uuidv4()} {...prize} />
      ))}
    </div>
  );
};
