import "./HeaderButton.css";

export interface IHeaderButtonProps {
  name: string;
  color: string;
  background: string;
  onClick?: () => void;
}

export const HeaderButton = ({
  name,
  color,
  background,
  onClick,
}: IHeaderButtonProps) => {
  return (
    <div className="HeaderButton">
      <button
        className="HeaderButton__button"
        style={{ background: background, color: color }}
        onClick={onClick}>
        {name}
      </button>
    </div>
  );
};
