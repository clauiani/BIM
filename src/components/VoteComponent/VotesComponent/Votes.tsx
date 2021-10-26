import { v4 as uuidv4 } from "uuid";

import { Vote } from "../VoteComponent/Vote";
import { voteStore } from "../../../store/VoteStore/VoteStore";
import "./Votes.css";

export interface IVotesProps {}

export const Votes = ({}: IVotesProps) => {
  const { votes } = voteStore;

  return (
    <>
      <div className="votes">
        {votes.map((vote) => (
          <Vote key={uuidv4()} {...vote} />
        ))}
      </div>
    </>
  );
};
