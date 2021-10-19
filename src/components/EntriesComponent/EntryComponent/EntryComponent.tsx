import "./EntryComponent.css";
export interface IEntryProps {
  image: string;
  title: string;
  author: string;
}

export const Entry = ({ image, title, author }: IEntryProps) => {
  return (
    <>
      <div className="entry">
        <img src={image} alt="No image found" className="entry__image" />
        <h3 className="entry__title">{title}</h3>
        <h4 className="entry__author">By:{author}</h4>
      </div>
    </>
  );
};
