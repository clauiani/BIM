import "./StudentPrize.css";

export interface IStudentPrizeProps {
  place: string;
  prize: string;
}

export const StudentPrize = ({ place, prize }: IStudentPrizeProps) => {
  return (
    <>
      <div className="studentcard">
        <p className="card__place">{place}</p>
        <p className="card__prize">{prize}</p>
      </div>
    </>
  );
};
