import "./Navigation.css";
import { NavLink, BrowserRouter as Router } from "react-router-dom";

export interface INavigationProps {}

export const Navigation = ({}: INavigationProps) => {
  return (
    <div className="navigation">
      <nav>
        <ul className="navigation__list">
          <NavLink
            exact
            to="/Home"
            activeClassName="links"
            className="navigation__link">
            <li className="navigation__link">Home</li>
            <span className="dot"></span>
          </NavLink>

          <NavLink
            exact
            to="/Bim"
            activeClassName="links"
            className="navigation__link">
            <li className="navigation__link">Bim 2021</li>
            <span className="dot"></span>
          </NavLink>
          <NavLink
            exact
            to="/Regulations"
            activeClassName="links"
            className="navigation__link">
            <li className="navigation__link">Regulations</li>
            <span className="dot"></span>
          </NavLink>
          <NavLink
            exact
            to="/History"
            activeClassName="links"
            className="navigation__link">
            <li className="navigation__link">History</li>
            <span className="dot"></span>
          </NavLink>
        </ul>
      </nav>
    </div>
  );
};
