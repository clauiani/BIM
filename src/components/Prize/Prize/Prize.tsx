import "./Prize.css";

export interface IPrizeProps {
  image: string;
  place: string;
  prize: string;
}

export const Prize = ({ image, place, prize }: IPrizeProps) => {
  return (
    <div className="prize">
      <div className="prize__with-image">
        <img src={image} alt="No image found" className="prize__image" />
        <h2 className="prize__place">{place}</h2>
      </div>
      <div className="prize__with-price">
        <h2 className="prize__prize">{prize}</h2>
      </div>
    </div>
  );
};
