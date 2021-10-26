import { useState } from "react";
import { PageHero } from "../../components/PageHero/PageHero/PageHero";
import { Header } from "../../components/Header/Header";
import { BimPageDescription } from "./BimPageDescription";
import { EntriesPage } from "./Entries/EntriesPage";
import { Footer } from "../../components/Footer/Footer";
export interface IBimPageProps {}

export const BimPage = ({}: IBimPageProps) => {
  const [clicked, setClicked] = useState(true);
  const handleClick1 = () => {
    setClicked(false);
  };
  const handleClick2 = () => {
    setClicked(true);
  };

  return (
    <>
      <Header />{" "}
      <PageHero
        title="BEST INNOVATIVE MINDS 2021"
        subtitle="BEST INNOVATIVE MINDS"
        description="Description"
        entries="Entries"
        onclick={handleClick1}
        onchange={handleClick2}
      />
      {clicked ? <BimPageDescription /> : <EntriesPage />}
      <Footer />
    </>
  );
};
