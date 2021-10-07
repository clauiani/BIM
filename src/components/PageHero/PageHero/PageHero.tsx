import "./PageHero.css";
import { PageHeroButtons } from "../PageHeroButtons/PageHeroButton";
export interface IPageHeroProps {
  title: string;
  subtitle: string;
}

export const PageHero = ({ title, subtitle }: IPageHeroProps) => {
  return (
    <div className="pagehero">
      <h4 className="pagehero__title">{title}</h4>
      <h3 className="pagehero__subtitle">{subtitle}</h3>
      <div className="pagehero__buttons">
        <PageHeroButtons name="Delete" color="#152C5B" />
        <PageHeroButtons name="Edit" color="#33C9D3" />
      </div>
    </div>
  );
};
