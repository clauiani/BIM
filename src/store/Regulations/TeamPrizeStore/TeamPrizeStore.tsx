import { makeAutoObservable } from "mobx";

class TeamPrizeStore {
  TEAMPRIZE = [
    {
      subtitle1: "I – 1200 €",
      subtitle2: "II – 900 € ",
      subtitle3: "III – 650 € ",
      subtitle4: "Most Disruptive Technology Award – 500 € ",
      subtitle5: " ASSIST Innovation Lab – 500 € ",
      subtitle6: " ASSIST Popularity Award – 350 ",
    },
  ];
  constructor() {
    makeAutoObservable(this);
  }
}
export const teamPrize = new TeamPrizeStore();
