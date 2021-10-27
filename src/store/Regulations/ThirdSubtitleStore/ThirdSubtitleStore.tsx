import { makeAutoObservable } from "mobx";

class ThirdRegulation {
  REGULATION3 = [
    {
      subtitle1: "3-5 profesori universitari",
      subtitle2: "Alexandru Boca, Head of Mobile Development ASSIST",
      subtitle3: "Cristian SPOIALA, CTO, ASSIST ",
      subtitle4: "Alin CALINCIUC, Head of Development ASSIST",
      subtitle5: " Adrian Onu, COO ASSIST ",
      subtitle6: " Trei finaliști din edițiile anterioare ",
    },
  ];
  constructor() {
    makeAutoObservable(this);
  }
}
export const thirdRegulation = new ThirdRegulation();
