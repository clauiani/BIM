import { NavLink, BrowserRouter as Router } from "react-router-dom";
import "./Navigation.css";

export interface INavigationProps {}

export const Navigation = ({}: INavigationProps) => {
  return (
    <div className="navigation">
      <nav>
        <ul className="navigation__list">
          <li className="navigation__list-item">
            <NavLink
              exact
              to="/"
              activeClassName="navigation__link--active"
              className="navigation__link">
              Home
              <span className="navigation__dot"></span>
            </NavLink>
          </li>
          <li className="navigation__list-item">
            <NavLink
              exact
              to="/Bim"
              activeClassName="navigation__link--active"
              className="navigation__link">
              Bim
              <span className="navigation__dot"></span>
            </NavLink>
          </li>
          <li className="navigation__list-item">
            <NavLink
              exact
              to="/AvailableMembers"
              activeClassName="navigation__link--active"
              className="navigation__link">
              Available team members
              <span className="navigation__dot"></span>
            </NavLink>
          </li>

          <li className="navigation__list-item">
            <NavLink
              exact
              to="/History"
              activeClassName="navigation__link--active"
              className="navigation__link">
              History
              <span className="navigation__dot"></span>
            </NavLink>
          </li>
          <li className="navigation__list-item">
            <NavLink
              exact
              to="/Regulations"
              activeClassName="navigation__link--active"
              className="navigation__link">
              Regulations
              <span className="navigation__dot"></span>
            </NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
};
