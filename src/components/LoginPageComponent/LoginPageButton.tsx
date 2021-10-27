import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import "./LoginPageButton.css";
export interface ILoginButtonProps {
  name?: string;
  checked?: true | false;
  onClick?: () => void;
}

export const LoginPageButton: React.FC<ILoginButtonProps> = ({
  name,
  checked,
  onClick,
}) => {
  return (
    <>
      <button
        className={!checked ? "loginButton" : "loginButton--modifier"}
        onClick={onClick}>
        <CheckCircleOutlineIcon className="icon" />
        {name}
      </button>
    </>
  );
};
