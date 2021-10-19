import { Header } from "../../components/Header/Header";
import { Footer } from "../../components/Footer/Footer";
import Succes from "../../assets/Succes.png";
import "./SuccesPage.css";
import { useHistory } from "react-router";
export interface ISuccesPageProps {}

export const SuccesPage = ({}: ISuccesPageProps) => {
  let history = useHistory();
  function handleClick() {
    history.push("/");
  }
  return (
    <>
      <Header />
      <h3 className="succes__title">Succes</h3>
      <img src={Succes} alt="No image found" className="succes__image" />
      <p className="succes__paragraph">
        You have successfully uploaded your project. Good luck and we hope that
        your idea will be chosen for the final.
      </p>
      <button className="succes__button" onClick={handleClick}>
        Go to Homepage
      </button>
      <Footer />
    </>
  );
};
