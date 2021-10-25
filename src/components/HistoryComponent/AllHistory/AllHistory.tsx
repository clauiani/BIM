import store from "../../../store/HistoryStore/History";
import { HistoryComponent } from "../History/HistoryComponent";
import "./AllHistory.css";
export interface IAllHistoryProps {}

export const AllHistoryComponent = ({}: IAllHistoryProps) => {
  const { projects } = store;
  return (
    <>
      <div className="allhistory">
        <div className="allhistory__container">
          {projects.map((project) => (
            <HistoryComponent {...project} />
          ))}
        </div>
      </div>
    </>
  );
};
