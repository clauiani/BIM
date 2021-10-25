import { Header } from "../../components/Header/Header";
import { AllHistoryComponent } from "../../components/HistoryComponent/AllHistory/AllHistory";
import { HistoryComponentTitle } from "../../components/HisotryComponentTitle/HistoryComponentTitle";
import { PageHero } from "../../components/PageHero/PageHero/PageHero";
import { Footer } from "../../components/Footer/Footer";
export interface IHistoryPageProps {}

export const HistoryPage = ({}: IHistoryPageProps) => {
  return (
    <>
      <Header />
      <PageHero title="History" subtitle="" />
      <HistoryComponentTitle title="2021" />
      <AllHistoryComponent />
      <HistoryComponentTitle title="2020" />
      <AllHistoryComponent />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <Footer />
    </>
  );
};
