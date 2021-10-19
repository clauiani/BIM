import React from "react";
import { Member, IMemberProps } from "./TeamMembers";
import { Story, Meta } from "@storybook/react";

const meta: Meta = {
  title: "MemberComponent",
  component: Member,
};

export default meta;

const Template: Story<IMemberProps> = (args) => <Member {...args} />;
export const MemberStories = Template.bind({});
