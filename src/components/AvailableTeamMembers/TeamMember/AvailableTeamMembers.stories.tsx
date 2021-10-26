import {
  AvailableTeamMembers,
  IAvailableTeamMembersProps,
} from "./AvailableTeamMembers";
import { Story, Meta } from "@storybook/react";

const meta: Meta = {
  title: "AvailableTeamMembersComponent",
  component: AvailableTeamMembers,
};
export default meta;

const Template: Story<IAvailableTeamMembersProps> = (args) => (
  <AvailableTeamMembers {...args} />
);

export const AvailableTeamMembersStories = Template.bind({});
