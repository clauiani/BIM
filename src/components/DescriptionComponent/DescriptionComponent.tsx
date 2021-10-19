import "./DescriptionComponent.css";
export interface IDescriptionProps {
  title: string;
  paragraph1: string;
  subtitle: string;
  paragraph2: string;
}

export const Description = ({
  title,
  paragraph1,
  paragraph2,
  subtitle,
}: IDescriptionProps) => {
  return (
    <>
      <div className="description">
        <div className="description__title">{title}</div>
        <div className="description__paragraph">{paragraph1}</div>
        <div className="description__subtitle">{subtitle}</div>
        <div className="description__paragraph">{paragraph2}</div>
      </div>
    </>
  );
};
