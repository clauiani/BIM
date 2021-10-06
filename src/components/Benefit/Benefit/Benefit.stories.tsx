import React from "react";
import { Benefit, IBenefitProps } from "./Benefit";
import { Story, Meta } from "@storybook/react";

const meta: Meta = {
  title: "BenefitComponent",
  component: Benefit,
};

export default meta;

const Template: Story<IBenefitProps> = (args) => <Benefit {...args} />;
export const BenefitStories = Template.bind({});
