import "./TeamMembers.css";
export interface IMemberProps {
  image: string;
  name: string;
  job: string;
}

export const Member = ({ image, name, job }: IMemberProps) => {
  return (
    <>
      <div className="member">
        <img src={image} alt="No image found" className="member__image" />
        <h3 className="member__name">{name}</h3>
        <h4 className="member__job">{job}</h4>
      </div>
    </>
  );
};
