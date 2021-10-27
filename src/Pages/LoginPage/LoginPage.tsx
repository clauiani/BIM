import { useState } from "react";
import BimLogoLarge from "../../assets/BimLogoLarge.png";
import { LoginPageButton } from "../../components/LoginPageComponent/LoginPageButton";
import "./LoginPage.css";
export interface ILoginPageProps {}

export const LoginPage = ({}: ILoginPageProps) => {
  const [check, setCheck] = useState(false);
  const [check2, setCheck2] = useState(false);

  const handleClick1 = () => {
    if (!check && !check2) {
      setCheck(!check);
    } else if (!check && check2) {
      setCheck(!check);
      setCheck2(!check2);
    } else if (check) {
      setCheck(!check);
    }
  };
  const handleClick2 = () => {
    if (!check && !check2) {
      setCheck2(!check2);
    } else if (check && !check2) {
      setCheck2(!check2);
      setCheck(!check);
    } else if (check2) {
      setCheck2(!check2);
    }
  };

  return (
    <div className="loginPage">
      <div>
        <img
          src={BimLogoLarge}
          alt="No image found"
          className="loginPage__logo"
        />
      </div>
      <div className="loginPage__buttons">
        <LoginPageButton
          name="I have an ideea"
          onClick={handleClick1}
          checked={check}
        />
        <LoginPageButton
          name="I want to team up"
          onClick={handleClick2}
          checked={check2}
        />
      </div>
      <button className="loginPage__login-button">
        {" "}
        Login with your Office 365 Account{" "}
      </button>
    </div>
  );
};
