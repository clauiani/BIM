import "./Benefit.css";
import Modal from "react-modal";
import { useState } from "react";
import CloseIcon from "@mui/icons-material/Close";
Modal.setAppElement("#root");
export interface IBenefitProps {
  title: string;
  image: string;
  description: string;
}

export const Benefit = ({ title, image, description }: IBenefitProps) => {
  const [modalIsOpen, setmodelaIsOpen] = useState(false);
  return (
    <div className="card">
      <img src={image} alt={title} className="card__image" />
      <h4 className="card__title">{title}</h4>
      <p className="card__description">{description}</p>
      <a className="card__button" onClick={() => setmodelaIsOpen(true)}>
        Learn more
      </a>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={() => setmodelaIsOpen(false)}
        className="card__modal"
        aria-labelledby="contained-modal-title-vcenter">
        <CloseIcon
          onClick={() => setmodelaIsOpen(false)}
          className="card__modal-icon"
        />

        <h4 className="card__title">{title}</h4>
        <p className="card__description">{description}</p>
      </Modal>
    </div>
  );
};
