import { Vote } from "../VoteComponent/Vote";
import store from "../../../store/VoteStore/VoteStore";
import "./Votes.css";

export interface IVotesProps {}

export const Votes = ({}: IVotesProps) => {
  const { votes } = store;

  return (
    <>
      <div className="votes">
        {votes.map((vote) => (
          <Vote {...vote} />
        ))}
      </div>
    </>
  );
};
