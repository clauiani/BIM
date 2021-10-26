import { makeAutoObservable } from "mobx";
import EntryImg from "../../assets/Entry.png";

class EntryStore {
  ENTRIES = [
    {
      image: EntryImg,
      title: "Project Title",
      author: "Strujac Alexandru",
    },
    {
      image: EntryImg,
      title: "Project Title",
      author: "Strujac Alexandru",
    },
    {
      image: EntryImg,
      title: "Project Title",
      author: "Strujac Alexandru",
    },
    {
      image: EntryImg,
      title: "Project Title",
      author: "Strujac Alexandru",
    },
    {
      image: EntryImg,
      title: "Project Title",
      author: "Strujac Alexandru",
    },
    {
      image: EntryImg,
      title: "Project Title",
      author: "Strujac Alexandru",
    },
    {
      image: EntryImg,
      title: "Project Title",
      author: "Strujac Alexandru",
    },
    {
      image: EntryImg,
      title: "Project Title",
      author: "Strujac Alexandru",
    },
    {
      image: EntryImg,
      title: "Project Title",
      author: "Strujac Alexandru",
    },
    {
      image: EntryImg,
      title: "Project Title",
      author: "Strujac Alexandru",
    },
    {
      image: EntryImg,
      title: "Project Title",
      author: "Strujac Alexandru",
    },
    {
      image: EntryImg,
      title: "Project Title",
      author: "Strujac Alexandru",
    },
    {
      image: EntryImg,
      title: "Project Title",
      author: "Strujac Alexandru",
    },
    {
      image: EntryImg,
      title: "Project Title",
      author: "Strujac Alexandru",
    },
    {
      image: EntryImg,
      title: "Project Title",
      author: "Strujac Alexandru",
    },
    {
      image: EntryImg,
      title: "Project Title",
      author: "Strujac Alexandru",
    },
    {
      image: EntryImg,
      title: "Project Title",
      author: "Strujac Alexandru",
    },
    {
      image: EntryImg,
      title: "Project Title",
      author: "Strujac Alexandru",
    },
    {
      image: EntryImg,
      title: "Project Title",
      author: "Strujac Alexandru",
    },
  ];
  entries: { image: string; title: string; author: string }[] = this.ENTRIES;
  constructor() {
    makeAutoObservable(this);
  }
}

export const entryStore = new EntryStore();
