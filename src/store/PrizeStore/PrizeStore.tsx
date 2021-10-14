import { makeAutoObservable } from "mobx";
import Locul1 from "../../assets/Locul1.png";
import Locul2 from "../../assets/Locul2.png";
import Locul3 from "../../assets/Locul3.png";
import DisruptiveTech from "../../assets/DisruptiveTech.png";
import InnovationLab from "../../assets/InnovationLab.png";
import Popularity from "../../assets/Popularity.png";

class PrizeStore {
  PRIZES = [
    {
      image: Locul1,
      place: "1st Place",
      prize: "1200€",
    },
    {
      image: Locul2,
      place: "2nd Place",
      prize: "900€",
    },
    {
      image: Locul3,
      place: "3rd Place",
      prize: "650€",
    },
    {
      image: DisruptiveTech,
      place: "Most Disruptive Technology Award",
      prize: "500€",
    },
    {
      image: InnovationLab,
      place: "ASSIST Innovation Lab",
      prize: "500€",
    },
    {
      image: Popularity,
      place: "ASSIST Popularity Award",
      prize: "350€",
    },
  ];
  constructor() {
    makeAutoObservable(this);
  }
}

export default new PrizeStore();
