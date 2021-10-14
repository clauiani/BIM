import { StudentPrize } from "../StudentPrize/StudentPrize";
import store from "../../../store/StudentPrizeStore/StudentPrizeStore";
import "./StudentPrizes.css";

export interface IStudentPrizesProps {}

export const StudentPrizes = ({}: IStudentPrizesProps) => {
  const { prizes } = store;

  return (
    <div className="student-prizes">
      {prizes.map((prize) => (
        <StudentPrize {...prize} />
      ))}
    </div>
  );
};
