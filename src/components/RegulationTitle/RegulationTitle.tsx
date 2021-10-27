import "./RegulationTitle.css";
export interface IRegulationTitleProps {
  title: string;
}

export const RegulationTitle = ({ title }: IRegulationTitleProps) => {
  return (
    <>
      <div className="regulations">
        <div className="regulations__title">{title}</div>
      </div>
    </>
  );
};
