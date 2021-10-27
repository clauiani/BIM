import { Header } from "../../components/Header/Header";
import { PageHero } from "../../components/PageHero/PageHero/PageHero";
import { RegulationTitle } from "../../components/RegulationTitle/RegulationTitle";
import { FirstRegulation } from "../../components/AllRegulations/FirstRegulation/FirstRegulation";
import { SecondRegulation } from "../../components/AllRegulations/SecondRegulation/SecondRegulation";
import { TeamPrize } from "../../components/AllRegulations/TeamPrize/TeamPrize";
import { StudentPrize } from "../../components/AllRegulations/StudentPrize/StudentPrize";
import { SixthRegulation } from "../../components/AllRegulations/SixthRegulation/SixthRegulation";
export interface IRegulationPageProps {}

export const RegulationsPage = ({}: IRegulationPageProps) => {
  return (
    <>
      <Header />
      <PageHero title="Regulations" subtitle="" />
      <RegulationTitle title="1. Denumire competitie: Best Innovative Minds 2021" />
      <RegulationTitle title=" 2. Juriu, Etapa de selectie, format din 7 persoane: " />
      <FirstRegulation />
      <RegulationTitle title=" 3. Juriu, Etapa de implementare, format din 9 persoane:" />
      <SecondRegulation />
      <RegulationTitle title=" 4. Premii echipe (doar pentru membrii ASSIST) în valoare totală de 4.100 €" />
      <TeamPrize />
      <RegulationTitle title=" 5. Premii studenți în valoare totală de 400€ " />
      <StudentPrize />
      <SixthRegulation />
      <RegulationTitle title=" 6. Descriere concurs " />
    </>
  );
};
