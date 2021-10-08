import { makeAutoObservable } from "mobx";

class BenefitStore {
  BENEFITS = [
    {
      title: "Benefit 1",
      description:
        " Create, edit, copy, move, download your files easily, everywhere, every time. Use it as your personal cloud",
      image: "path",
    },
    {
      title: "Benefit 2",
      description:
        " Create, edit, copy, move, download your files easily, everywhere, every time. Use it as your personal cloud",
      image: "path",
    },
    {
      title: "Benefit 3",
      description:
        " Create, edit, copy, move, download your files easily, everywhere, every time. Use it as your personal cloud",
      image: "path",
    },
    {
      title: "Benefit 4",
      description:
        " Create, edit, copy, move, download your files easily, everywhere, every time. Use it as your personal cloud",
      image: "path",
    },
  ];
  benefits: { title: string; description: string; image: string }[] = this
    .BENEFITS;

  constructor() {
    makeAutoObservable(this);
  }
}

export default new BenefitStore();
