import { makeAutoObservable } from "mobx";

class SeventhRegulation {
  REGULATION7 = [
    {
      title: "Concursul",
      description:
        "Best Innovative Minds 2021 cuprinde 2 etape: etapa de selecție (propunere de idei creative care ar putea fi materializate într-un prototip) și etapa de implementare (realizarea efectiva a unui prototip). În fiecare etapă, concurenții vor beneficia de coaching pentru formarea și antrenarea abilităților, din partea unei echipei de mentori cu experiență din cadrul ASSIST Software, precum și a unor colaboratori externi din mass-media.",
    },
    {
      title: "Etapa de selecție (22 iulie 2021 – 3 octombrie 2021) •",
      description:
        "Concurenții se vor înscrie în concurs cu o prezentare originală de maximum 5 slide-uri în care vor propune o soluție software/hardware concretă pentru rezolvarea unei probleme care influențează compania, aduce îmbunătățiri unui proiect existent sau poate duce la generarea unui nou proiect comercial din orice domeniu. În realizarea prezentării se va avea în vedere grila de jurizare din Anexa.1. Concurenții pot alege una dintre cele trei idei propuse de către organizator pentru șansa de a câștiga premiul ASSIST Innovation Lab",
    },

    {
      title: "Concursul",
      description:
        "Premiul de popularitate va fi votat de către membrii ASSIST Software. Aceștia vor putea viziona live prezentările finaliștilor, iar după încheierea sesiunii de prezentări sa voteze preferații, in cadrul unei aplicații speciale dezvoltate de ASSIST. Votul se va realiza pe baza adresei unice de e-mail ASSIST. Premiul de popularitate poate coincide cu celelalte 4 premii daca opinia publicului este aceeași cu decizia juriului. Pentru a fi validat acest premiu, este necesar să voteze cel puțin 30 de persoane din cadrul firmei.",
    },
  ];
  constructor() {
    makeAutoObservable(this);
  }
}
export const seventhRegulation = new SeventhRegulation();
