import "./RegulationParagraph.css";
export interface IRegulationParagraphProps {
  title: string;
  description: string;
}

export const RegulationParagraph = ({
  title,
  description,
}: IRegulationParagraphProps) => {
  return (
    <>
      <div className="regulations-paragraph">
        <div className="regulations-paragraph__title">{title}</div>
        <div className="regulations-paragraph__description">{description}</div>
      </div>
    </>
  );
};
