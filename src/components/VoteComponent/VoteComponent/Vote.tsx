import "./Vote.css";
export interface IVoteProps {
  criteria: string;
  points: string;
  weight: string;
}

export const Vote = ({ criteria, points, weight }: IVoteProps) => {
  return (
    <>
      <hr />
      <div className="vote">
        <div className="vote__criteria">{criteria}</div>
        <div className="test">
          <div className="vote__points">{points}</div>
          <div className="vote__weight">{weight}</div>
        </div>
      </div>
    </>
  );
};
