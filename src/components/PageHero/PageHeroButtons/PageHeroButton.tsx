import "./PageHeroButton.css";

export interface IPageHeroButtonsProps {
  name: string;
  color: string;
  onClick?: () => void;
}

export const PageHeroButtons = ({
  name,
  color,
  onClick,
}: IPageHeroButtonsProps) => {
  return (
    <div className="pageheroButton">
      <button className="pageheroButton__button" style={{ background: color }}>
        {name}
      </button>
    </div>
  );
};
