import "./EntriesPage.css";
import { Entries } from "../../../components/EntriesComponent/EntriesComponent/Entries";
export interface IEntriesPageProps {}

export const EntriesPage = ({}: IEntriesPageProps) => {
  return (
    <>
      <h2 className="entries__title"> Entries</h2>
      <Entries />
    </>
  );
};
