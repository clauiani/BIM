import { PageHero } from "../../components/PageHero/PageHero/PageHero";
import { Header } from "../../components/Header/Header";
export interface IBimPageProps {}

export const BimPage = ({}: IBimPageProps) => {
  return (
    <div>
      <Header />{" "}
      <PageHero
        title="BEST INNOVATIVE MINDS 2021"
        subtitle="BEST INNOVATIVE MINDS"
      />
      ;
    </div>
  );
};
