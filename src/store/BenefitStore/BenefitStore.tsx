import { makeAutoObservable } from "mobx";
import Benefit1 from "../../assets/Benefit1.png";
import Benefit2 from "../../assets/Benefit2.png";
import Benefit3 from "../../assets/Benefit3.png";
import Benefit4 from "../../assets/Benefit4.png";

class BenefitStore {
  BENEFITS = [
    {
      title: "Benefit 1",
      description:
        " Create, edit, copy, move, download your files easily, everywhere, every time. Use it as your personal cloud",
      image: Benefit1,
    },
    {
      title: "Benefit 2",
      description:
        " Create, edit, copy, move, download your files easily, everywhere, every time. Use it as your personal cloud",
      image: Benefit2,
    },
    {
      title: "Benefit 3",
      description:
        " Create, edit, copy, move, download your files easily, everywhere, every time. Use it as your personal cloud",
      image: Benefit3,
    },
    {
      title: "Benefit 4",
      description:
        " Create, edit, copy, move, download your files easily, everywhere, every time. Use it as your personal cloud",
      image: Benefit4,
    },
  ];
  benefits: { title: string; description: string; image: string }[] = this
    .BENEFITS;

  constructor() {
    makeAutoObservable(this);
  }
}

export const benefitStore = new BenefitStore();
