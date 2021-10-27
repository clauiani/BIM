import { makeAutoObservable } from "mobx";

class SixthRegulation {
  REGULATION6 = [
    {
      title: "Atenție!",
      description:
        "Premiul de popularitate va fi votat de către membrii ASSIST Software. Aceștia vor putea viziona live prezentările finaliștilor, iar după încheierea sesiunii de prezentări sa voteze preferații, in cadrul unei aplicații speciale dezvoltate de ASSIST. Votul se va realiza pe baza adresei unice de e-mail ASSIST. Premiul de popularitate poate coincide cu celelalte 4 premii daca opinia publicului este aceeași cu decizia juriului. Pentru a fi validat acest premiu, este necesar să voteze cel puțin 30 de persoane din cadrul firmei.",
    },
    {
      title: "Most Disruptive Technology Award",
      description:
        " va fi desemnat prin vot doar de către membrii juriului care fac parte din ASSIST Software. Criteriul principal de jurizare va fi reprezentat de utilizarea în cadrul proiectului finalist a uneia sau mai multor tehnologii noi, mai exact tehnologii care nu au mai fost utilizate în trecut sau au fost utilizate foarte puțin în proiectele din cadrul companiei ASSIST Software. Acest premiu poate coincide cu unul dintre celelalte premii.",
    },
    {
      title: "Nou",
      description:
        "ASSIST Innovation Lab este o nouă categorie Best Innovative Minds. Organizatorul va pune la dispoziție 3 idei inovative dintre care participanții pot alege și cu care pot intra în competiția BIM. ",
    },
    {
      title: "ASSIST Innovation Lab Award ",
      description:
        " va fi desemnat doar de către membrii juriului care fac parte din ASSIST Software. Premiul va fi câștigat de echipa cu punctajul cel mai mare care a reușit să implementeze una dintre idei și a ajuns în etapa finală a concursului. Acest premiu poate coincide cu unul dintre celelalte premii.",
    },
  ];
  constructor() {
    makeAutoObservable(this);
  }
}
export const sixthRegulation = new SixthRegulation();
