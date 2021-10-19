import { PageHero } from "../../components/PageHero/PageHero/PageHero";
import { Header } from "../../components/Header/Header";
import { BimPageDescription } from "./BimPageDescription";
import { EntriesPage } from "./Entries/EntriesPage";
import { Footer } from "../../components/Footer/Footer";
export interface IBimPageProps {}

export const BimPage = ({}: IBimPageProps) => {
  return (
    <>
      <Header />{" "}
      <PageHero
        title="BEST INNOVATIVE MINDS 2021"
        subtitle="BEST INNOVATIVE MINDS"
      />
      {/* <BimPageDescription /> */}
      <EntriesPage />
      <Footer />
    </>
  );
};
