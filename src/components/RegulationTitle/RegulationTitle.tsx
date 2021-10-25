import "./RegulationTitle.css";
export interface IRegulationTitleProps {
  title: string;
  subtitle?: string;
}

export const RegulationTitle = ({ title, subtitle }: IRegulationTitleProps) => {
  return (
    <>
      <div className="regulations">
        <div className="regulations__title">{title}</div>
        <div className="regulations__subtitle">
          <div className="test">{subtitle}</div>
        </div>
      </div>
    </>
  );
};
