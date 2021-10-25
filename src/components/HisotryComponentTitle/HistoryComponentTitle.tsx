import "./HistoryComponentTitle.css";

export interface IHistoryComponentTitle {
  title: string;
}

export const HistoryComponentTitle = ({ title }: IHistoryComponentTitle) => {
  return (
    <>
      <div className="historycomponent__title">{title}</div>
    </>
  );
};
