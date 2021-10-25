import { Header } from "../../components/Header/Header";
import { PageHero } from "../../components/PageHero/PageHero/PageHero";
export interface IRegulationPageProps {}

export const RegulationsPage = ({}: IRegulationPageProps) => {
  return (
    <>
      <Header />
      <PageHero title="Regulations" subtitle="" />
    </>
  );
};
