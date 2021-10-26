import { makeAutoObservable } from "mobx";
import Img1 from "../../assets/PozaAlex.png";
class MembersStore {
  MEMBERS = [
    {
      image: Img1,
      name: "Alexandru Boca",
      job: "Head of Mobile Development",
    },
    {
      image: Img1,
      name: "Cristian Spoiala",
      job: "Chief Technical Officer",
    },
    {
      image: Img1,
      name: " Alin Calinciuc",
      job: "Head of Development",
    },
    {
      image: Img1,
      name: "Adrian Onu",
      job: "Chief Operating Officer",
    },
  ];
  members: { image: string; name: string; job: string }[] = this.MEMBERS;
  constructor() {
    makeAutoObservable(this);
  }
}

export const membersStore = new MembersStore();
