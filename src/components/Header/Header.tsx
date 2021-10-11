import "./Header.css";
import { Navigation } from "../Navigation/Navigation";
import { HeaderButton } from "./HeaderButton/HeaderButton";
import BimLogo from "../../assets/BimLogo.png";
export interface IHeaderProps {}

export const Header = ({}: IHeaderProps) => {
  return (
    <div className="header">
      <img src={BimLogo} alt="No image found" className="header__bim-logo" />
      <Navigation />
      <div className="header__buttons">
        <HeaderButton name={"LOG IN"} background="white" color="#33C9D3" />
        <HeaderButton name={"Apply now"} background="black" color="white" />
      </div>
    </div>
  );
};
