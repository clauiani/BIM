import { useState } from "react";
import "./HistoryComponent.css";
export interface IHistoryComponent {
  image: string;
  title: string;
  author: string;
  likeicon: string;
  icon1: string;
  icon2?: any;
}

export const HistoryComponent = ({
  image,
  title,
  author,
  likeicon,
  icon1,
  icon2,
}: IHistoryComponent) => {
  const [counter, setCounter] = useState(20);
  const [clicked, setClicked] = useState(false);

  const handleClick = () => {
    setCounter(counter + 1);
    setClicked(true);
  };
  const handleClick2 = () => {
    setCounter(counter - 1);
    setClicked(false);
  };
  return (
    <>
      <div className="history">
        <img src={image} alt="No image found" className="history__image" />

        <h3 className="history__title">{title}</h3>
        <img
          src={likeicon}
          alt=""
          className={
            clicked == false ? "history__likeicon" : "history__likeicon-clicked"
          }
          onClick={clicked == false ? handleClick : handleClick2}
        />
        <div className="history__likes-count">{counter}</div>
        <h4 className="history__author">By:{author}</h4>
        <div className="history__icons">
          <img src={icon1} alt="" className="history__icons-icon" />
          <img src={icon2} alt="" className="history__icons-icon" />{" "}
        </div>
      </div>
    </>
  );
};
