import { useHistory } from "react-router-dom";
import BimLogo from "../../assets/BimLogo.png";
import { Navigation } from "../Navigation/Navigation";
import { HeaderButton } from "./HeaderButton/HeaderButton";
import "./Header.css";

export interface IHeaderProps {}

export const Header = ({}: IHeaderProps) => {
  let history = useHistory();
  function handleClick() {
    history.push("/Login");
  }
  return (
    <div className="header">
      <img src={BimLogo} alt="No image found" className="header__bim-logo" />
      <Navigation />
      <div className="header__buttons">
        <HeaderButton
          name={"LOG IN"}
          background="white"
          color="#33C9D3"
          onClick={handleClick}
        />
        <HeaderButton name={"Apply now"} background="black" color="white" />
      </div>
    </div>
  );
};
