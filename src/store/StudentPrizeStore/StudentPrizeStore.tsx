import { makeAutoObservable } from "mobx";

class StudentPrizeStore {
  PRIZES = [
    {
      place: "1st place",
      prize: "175E + Paid internship",
    },
    {
      place: "2nd place",
      prize: "125E + Paid internship",
    },
    {
      place: "3rd place",
      prize: "100E + Paid internship",
    },
  ];
  prizes: { place: string; prize: string }[] = this.PRIZES;

  constructor() {
    makeAutoObservable(this);
  }
}
export default new StudentPrizeStore();
