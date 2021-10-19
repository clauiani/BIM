import { Entry } from "../EntryComponent/EntryComponent";
import store from "../../../store/EntryStore/EntryStore";
import "./Entries.css";

export interface IEntriesProps {}

export const Entries = ({}: IEntriesProps) => {
  const { entries } = store;
  return (
    <>
      <div className="entries">
        <div className="entries__container">
          {entries.map((entry) => (
            <Entry {...entry} />
          ))}
        </div>
      </div>
    </>
  );
};
