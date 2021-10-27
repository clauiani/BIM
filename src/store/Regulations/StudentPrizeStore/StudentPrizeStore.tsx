import { makeAutoObservable } from "mobx";

class StudentPrize {
  STUDENTPRIZE = [
    {
      subtitle1: "I – 175 euro + internship plătit ",
      subtitle2: " II – 125 euro + internship plătit ",
      subtitle3: "III – 100 euro + internship plătit  ",
    },
  ];
  prize: {
    subtitle1: string;
    subtitle2: string;
    subtitle3: string;
  }[] = this.STUDENTPRIZE;
  constructor() {
    makeAutoObservable(this);
  }
}
export const studentPrize = new StudentPrize();
