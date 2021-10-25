import { makeAutoObservable } from "mobx";

class FirstRegulation {
  REGULATION1 = [
    {
      subtitle: "Alexandru Boca, Head of Mobile Development ASSIST",
    },
    {
      subtitle: "Cristian SPOIALA, CTO, ASSIST",
    },
    {
      subtitle: "Alin CALINCIUC, Head of Development, ASSIST",
    },
    {
      subtitle: "Adrian Onu, COO ASSIST ",
    },
    {
      subtitle: "Trei finaliști din edițiile anterioare ",
    },
  ];
  constructor() {
    makeAutoObservable(this);
  }
}
export const firstRegulation = new FirstRegulation();
