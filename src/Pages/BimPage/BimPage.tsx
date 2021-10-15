import { PageHero } from "../../components/PageHero/PageHero/PageHero";
import { Header } from "../../components/Header/Header";
import { BimPageDescription } from "./BimPageDescription";
export interface IBimPageProps {}

export const BimPage = ({}: IBimPageProps) => {
  return (
    <>
      <Header />{" "}
      <PageHero
        title="BEST INNOVATIVE MINDS 2021"
        subtitle="BEST INNOVATIVE MINDS"
      />
      <BimPageDescription />
    </>
  );
};
