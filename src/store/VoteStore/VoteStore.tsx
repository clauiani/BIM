import { makeAutoObservable } from "mobx";

class VoteStore {
  VOTES = [
    {
      criteria: "Consistency and clarity",
      points: "0-100 points",
      weight: "10%",
    },
    {
      criteria: "Creativity in presenting the idea ",
      points: "0-100 points",
      weight: "10%",
    },
    {
      criteria: "The technical quality of the solution",
      points: "0-100 points",
      weight: "20%",
    },
    {
      criteria: "The organizational quality of the solution",
      points: "0-100 points",
      weight: "20%",
    },
    {
      criteria:
        "New technologies / new techniques proposed for the implementation of the idea ",
      points: "0-100 points",
      weight: "10%",
    },
    {
      criteria: "Technological impact",
      points: "0-100 points",
      weight: "15%",
    },
    {
      criteria: "Social / individual benefits",
      points: "0-100 points",
      weight: "15%",
    },
    {
      criteria:
        "Bonus points: Participation and involvement in stage 1 of coaching",
      points: "0.1-1points",
      weight: "100%",
    },
  ];
  votes: { criteria: string; points: string; weight: string }[] = this.VOTES;
  constructor() {
    makeAutoObservable(this);
  }
}

export default new VoteStore();
