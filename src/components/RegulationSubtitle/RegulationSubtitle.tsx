import "./RegulationSubtitle.css";
export interface IRegulationSubtitleProps {
  subtitle1?: string;
  subtitle2?: string;
  subtitle3?: string;
  subtitle4?: string;
  subtitle5?: string;
  subtitle6?: string;
}

export const RegulationSubtitle = ({
  subtitle1,
  subtitle2,
  subtitle3,
  subtitle4,
  subtitle5,
  subtitle6,
}: IRegulationSubtitleProps) => {
  return (
    <>
      <ul className="aaaa">
        <li className="regulations-subtitle">{subtitle1}</li>
        <li className="regulations-subtitle">{subtitle2}</li>
        <li className="regulations-subtitle">{subtitle3}</li>
        <li className="regulations-subtitle">{subtitle4}</li>
        <li className="regulations-subtitle">{subtitle5}</li>
        <li className="regulations-subtitle">{subtitle6}</li>
      </ul>
    </>
  );
};
