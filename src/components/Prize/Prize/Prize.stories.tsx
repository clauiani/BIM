import React from "react";
import { Prize, IPrizeProps } from "./Prize";
import { Story, Meta } from "@storybook/react";

const meta: Meta = {
  title: "PrizeComponent",
  component: Prize,
};

export default meta;

const Template: Story<IPrizeProps> = (args) => <Prize {...args} />;
export const PrizeStories = Template.bind({});
