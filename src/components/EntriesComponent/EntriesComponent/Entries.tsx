import { v4 as uuidv4 } from "uuid";
import { entryStore } from "../../../store/EntryStore/EntryStore";
import { Entry } from "../EntryComponent/EntryComponent";
import "./Entries.css";

export interface IEntriesProps {}

export const Entries = ({}: IEntriesProps) => {
  const { entries } = entryStore;
  return (
    <>
      <div className="entries">
        <div className="entries__container">
          {entries.map((entry) => (
            <Entry key={uuidv4()} {...entry} />
          ))}
        </div>
      </div>
    </>
  );
};
