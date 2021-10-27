import { Tabs } from "antd";
import { PageHeroButtons } from "../PageHeroButtons/PageHeroButton";
import "./PageHero.css";
const { TabPane } = Tabs;
export interface IPageHeroProps {
  title: string;
  subtitle: string;
  onchange?: () => void;
  description?: string;
  entries?: string;
  onclick?: () => void;
}

export const PageHero = ({
  title,
  subtitle,
  entries,
  onchange,
  onclick,
  description,
}: IPageHeroProps) => {
  return (
    <div className="pagehero">
      <h4 className="pagehero__title">{title}</h4>
      <h3 className="pagehero__subtitle">{subtitle}</h3>
      <div className="pagehero__buttons">
        <PageHeroButtons name="Delete" color="#152C5B" />
        <PageHeroButtons name="Edit" color="#33C9D3" />
      </div>
      <div className="pagehero__tabs">
        <button className="pagehero__tabs-buttons" onClick={onchange}>
          {" "}
          {description}
        </button>
        <button className="pagehero__tabs-buttons" onClick={onclick}>
          {entries}
        </button>
      </div>
    </div>
  );
};
