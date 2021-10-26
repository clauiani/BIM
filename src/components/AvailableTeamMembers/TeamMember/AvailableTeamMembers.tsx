import "./AvailableTeamMembers.css";

export interface IAvailableTeamMembersProps {
  image: string;
  name: string;
  job: string;
}

export const AvailableTeamMembers = ({
  image,
  name,
  job,
}: IAvailableTeamMembersProps) => {
  return (
    <>
      <div className="available">
        <img src={image} alt="No image found" className="available__image" />
        <h3 className="available__name">{name}</h3>
        <h3 className="available__job">{job}</h3>
      </div>
    </>
  );
};
