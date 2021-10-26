import { makeAutoObservable } from "mobx";
import PozaAlex from "../../assets/PozaAlex.png";
class AvailableMembers {
  MEMBERS = [
    {
      image: PozaAlex,
      name: "Alexandru Boca",
      job: "Head of Mobile Development",
    },
    {
      image: PozaAlex,
      name: "Alexandru Boca",
      job: "Head of Mobile Development",
    },
    {
      image: PozaAlex,
      name: "Alexandru Boca",
      job: "Head of Mobile Development",
    },
    {
      image: PozaAlex,
      name: "Alexandru Boca",
      job: "Head of Mobile Development",
    },
    {
      image: PozaAlex,
      name: "Alexandru Boca",
      job: "Head of Mobile Development",
    },
    {
      image: PozaAlex,
      name: "Alexandru Boca",
      job: "Head of Mobile Development",
    },
    {
      image: PozaAlex,
      name: "Alexandru Boca",
      job: "Head of Mobile Development",
    },
    {
      image: PozaAlex,
      name: "Alexandru Boca",
      job: "Head of Mobile Development",
    },
    {
      image: PozaAlex,
      name: "Alexandru Boca",
      job: "Head of Mobile Development",
    },
    {
      image: PozaAlex,
      name: "Alexandru Boca",
      job: "Head of Mobile Development",
    },
    {
      image: PozaAlex,
      name: "Alexandru Boca",
      job: "Head of Mobile Development",
    },
    {
      image: PozaAlex,
      name: "Alexandru Boca",
      job: "Head of Mobile Development",
    },
    {
      image: PozaAlex,
      name: "Alexandru Boca",
      job: "Head of Mobile Development",
    },
    {
      image: PozaAlex,
      name: "Alexandru Boca",
      job: "Head of Mobile Development",
    },
    {
      image: PozaAlex,
      name: "Alexandru Boca",
      job: "Head of Mobile Development",
    },
    {
      image: PozaAlex,
      name: "Alexandru Boca",
      job: "Head of Mobile Development",
    },
  ];
  members: { image: string; name: string; job: string }[] = this.MEMBERS;
  constructor() {
    makeAutoObservable(this);
  }
}

export const availableMembers = new AvailableMembers();
