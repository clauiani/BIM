import "./Footer.css";
import BimLogo from "../../assets/BimLogo.png";
import Arrow from "../../assets/arrow.png";
import Teams from "../../assets/teams.png";
export interface IFooterProps {}

export const Footer = ({}: IFooterProps) => {
  return (
    <div className="footer">
      <img src={BimLogo} alt={"No image found"} className="footer__bim-logo" />
      <div className="footer__logos">
        <img src={Arrow} alt={"No image found"} className="footer__arrow" />

        <img src={Teams} alt={"No image found"} className="footer__teams" />
      </div>
    </div>
  );
};
