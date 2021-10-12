import { PageHero } from "../../components/PageHero/PageHero/PageHero";
export interface IBimPageProps {}

export const BimPage = ({}: IBimPageProps) => {
  return (
    <div>
      {" "}
      <PageHero
        title="BEST INNOVATIVE MINDS 2021"
        subtitle="BEST INNOVATIVE MINDS"
      />
      ;
    </div>
  );
};
