import { v4 as uuidv4 } from "uuid";
import { studentPrize } from "../../../store/StudentPrizeStore/StudentPrizeStore";
import { StudentPrize } from "../StudentPrize/StudentPrize";
import "./StudentPrizes.css";

export interface IStudentPrizesProps {}

export const StudentPrizes = ({}: IStudentPrizesProps) => {
  const { prizes } = studentPrize;

  return (
    <div className="student-prizes">
      {prizes.map((prize) => (
        <StudentPrize key={uuidv4()} {...prize} />
      ))}
    </div>
  );
};
