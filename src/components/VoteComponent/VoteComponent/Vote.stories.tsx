import React from "react";
import { Vote, IVoteProps } from "./Vote";
import { Story, Meta } from "@storybook/react";

const meta: Meta = {
  title: "VoteComponent",
  component: Vote,
};

export default meta;

const Template: Story<IVoteProps> = (args) => <Vote {...args} />;
export const VoteStories = Template.bind({});
