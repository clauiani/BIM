import { v4 as uuidv4 } from "uuid";

import { historyStore } from "../../../store/HistoryStore/History";
import { HistoryComponent } from "../History/HistoryComponent";
import "./AllHistory.css";
export interface IAllHistoryProps {}

export const AllHistoryComponent = ({}: IAllHistoryProps) => {
  const { projects } = historyStore;
  return (
    <>
      <div className="allhistory">
        <div className="allhistory__container">
          {projects.map((project) => (
            <HistoryComponent key={uuidv4()} {...project} />
          ))}
        </div>
      </div>
    </>
  );
};
