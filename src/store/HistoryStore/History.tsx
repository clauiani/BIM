import { makeAutoObservable } from "mobx";
import Locul1 from "../../assets/Locul1.png";
import Locul2 from "../../assets/Locul2.png";
import Locul3 from "../../assets/Locul3.png";
import DisruptiveTech from "../../assets/DisruptiveTech.png";
import InnovationLab from "../../assets/InnovationLab.png";
import Popularity from "../../assets/Popularity.png";
import EntryImg from "../../assets/Entry.png";
import ThumbsUp from "../../assets/ThumbsUp.png";
class HistoryStore {
  PROJECTS = [
    {
      image: EntryImg,
      title: "ProjectTitle",
      author: "Strujac Alexandru",
      likeicon: ThumbsUp,
      icon1: Locul1,
      icon2: "a",
    },
    {
      image: EntryImg,
      title: "ProjectTitle",
      author: "Strujac Alexandru",
      likeicon: ThumbsUp,
      icon1: Locul2,
      icon2: "a",
    },
    {
      image: EntryImg,
      title: "ProjectTitle",
      author: "Strujac Alexandru",
      likeicon: ThumbsUp,
      icon1: Locul3,
      icon2: InnovationLab,
    },
    {
      image: EntryImg,
      title: "ProjectTitle",
      author: "Strujac Alexandru",
      likeicon: ThumbsUp,
      icon1: DisruptiveTech,
      icon2: "a",
    },
    {
      image: EntryImg,
      title: "ProjectTitle",
      author: "Strujac Alexandru",
      likeicon: ThumbsUp,
      icon1: Popularity,
      icon2: "a",
    },
    {
      image: EntryImg,
      title: "ProjectTitle",
      author: "Strujac Alexandru",
      likeicon: ThumbsUp,
      icon1: "",
      icon2: "",
    },
    {
      image: EntryImg,
      title: "ProjectTitle",
      author: "Strujac Alexandru",
      likeicon: ThumbsUp,
      icon1: "a",
      icon2: "a",
    },
  ];
  projects: {
    image: string;
    title: string;
    author: string;
    likeicon: string;
    icon1: string;
    icon2: any;
  }[] = this.PROJECTS;
  constructor() {
    makeAutoObservable(this);
  }
}

export const historyStore = new HistoryStore();
