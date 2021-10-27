import { makeAutoObservable } from "mobx";

class FirstRegulation {
  REGULATION1 = [
    {
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
export const firstRegulation = new FirstRegulation();
