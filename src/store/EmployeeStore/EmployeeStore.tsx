import { makeAutoObservable } from "mobx";
import Image1 from "../../assets/PozaAlex.png";
class EmployeeStore {
  EMPLOYEE = [
    {
      image: Image1,
      name: "Alexandru Boca",
      job: "Head of Mobile Development",
    },
    {
      image: Image1,
      name: "Cristian Spoiala",
      job: "Chief Technical Officer",
    },
    {
      image: Image1,
      name: "Alin Calinciuc",
      job: " Head of Development",
    },
    {
      image: Image1,
      name: "Adrian Onu",
      job: "Chief Operating Officer",
    },
    {
      image: Image1,
      name: "Finalist 1",
      job: "Pozitie",
    },
    {
      image: Image1,
      name: "Finalist 2",
      job: "Pozitie",
    },
    {
      image: Image1,
      name: "Finalist 3",
      job: "Pozitie",
    },
  ];
  employees: { image: string; name: string; job: string }[] = this.EMPLOYEE;

  constructor() {
    makeAutoObservable(this);
  }
}
export const employeeStore = new EmployeeStore();
