import "./Benefit.css";

export interface IBenefitProps {
  title: string;
  image: string;
  description: string;
}

export const Benefit = ({ title, image, description }: IBenefitProps) => {
  return (
    <div className="card">
      <img src={image} alt={title} className="card__image" />
      <h4 className="card__title">{title}</h4>
      <p className="card__description">{description}</p>
      <a className="card__button">Learn more</a>
    </div>
  );
};
