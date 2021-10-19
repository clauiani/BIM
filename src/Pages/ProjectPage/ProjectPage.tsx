import { Header } from "../../components/Header/Header";
import { PageHero } from "../../components/PageHero/PageHero/PageHero";
import { Description } from "../../components/DescriptionComponent/DescriptionComponent";
import "./ProjectPage.css";
import { TeamMembers } from "../../components/TeamMembers/Members/Members";
export interface IProjectPageProps {}

export const ProjectPage = ({}: IProjectPageProps) => {
  return (
    <>
      <Header />
      <PageHero
        title="BEST INNOVATIVE MINDS 2021"
        subtitle="BEST INNOVATIVE MINDS"
      />
      <div className="project">
        <div className="project__uppart">
          <Description
            paragraph1="Curabitur a congue velit. Maecenas interdum lorem eu purus aliquet blandit. Suspendisse suscipit quam pretium rutrum porta. Pellentesque porta lacinia erat, a vestibulum orci dapibus non. Suspendisse cursus justo fringilla dui lobortis gravida. Fusce at sem diam. Phasellus dictum elit hendrerit, laoreet lectus dapibus, luctus nulla. Maecenas porttitor euismod urna, non pulvinar lectus porta eu. Etiam vel eros lorem. Curabitur sit amet odio mi. Suspendisse justo dui, rhoncus non quam nec, gravida lobortis massa. Maecenas ut congue arcu, quis vestibulum est. "
            paragraph2=" Maecenas ut congue arcu, quis vestibulum est. Proin lacinia libero dapibus blandit egestas. Donec a semper nisi, rutrum fringilla nibh. Maecenas scelerisque nulla in dapibus gravida. Aliquam tortor ipsum, sagittis at mi nec, vehicula dapibus dolor. Aenean eu massa maximus, euismod felis quis, ullamcorper lacus. Nunc cursus est nec dui lacinia pretium. Nam placerat id sem et ullamcorper."
            subtitle="Proin lacinia libero dapibus blandit egestas. Donec a semper nisi, rutrum fringilla nibh."
            title="Description"
          />
          <div className="project__uppart-presentation">
            Prezentare smechera
          </div>
        </div>
        <h2 className="project__team-members-title">Team Members</h2>

        <TeamMembers />
      </div>
    </>
  );
};
