import { Header } from "../../components/Header/Header";
import { Vote } from "../../components/VoteComponent/VoteComponent/Vote";
import { Votes } from "../../components/VoteComponent/VotesComponent/Votes";
export interface IHistoryPageProps {}

export const HistoryPage = ({}: IHistoryPageProps) => {
  return (
    <>
      <Header />
      <div>History page</div>
    </>
  );
};
