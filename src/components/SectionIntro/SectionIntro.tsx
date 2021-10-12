import "./SectionIntro.css";

export interface ISectionIntroProps {
  title: string;
  subtitle: string;
  description: string;
  centered?: false | true;
}

export const SectionIntro = ({
  title,
  subtitle,
  description,
  centered,
}: ISectionIntroProps) => {
  return (
    <div className="sectionIntro">
      <h4
        className={
          centered ? "sectionIntro__title" : "sectionIntro__title--modifier"
        }>
        {title}
      </h4>
      <h3
        className={
          centered
            ? "sectionIntro__subtitle"
            : "sectionIntro__subtitle--modifier"
        }>
        {subtitle}
      </h3>
      <h5
        className={
          centered
            ? "sectionIntro__description"
            : "sectionIntro__description--modifier"
        }>
        {description}
      </h5>
    </div>
  );
};
