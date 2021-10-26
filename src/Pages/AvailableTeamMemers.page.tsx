import { Header } from "../components/Header/Header";
import { PageHero } from "../components/PageHero/PageHero/PageHero";
import { TeamMembers } from "../components/AvailableTeamMembers/TeamMembers/TeamMebers";
import { Footer } from "../components/Footer/Footer";
export interface IAvailableTeamMembersProps {}

export const AvailableTeamMembersPage = ({}: IAvailableTeamMembersProps) => {
  return (
    <>
      <Header />
      <PageHero title="Available team members" subtitle="" />
      <TeamMembers />
      <br />
      <Footer />
    </>
  );
};
