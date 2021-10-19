import React from "react";
import { Description, IDescriptionProps } from "./DescriptionComponent";
import { Story, Meta } from "@storybook/react";

const meta: Meta = {
  title: "DescriptionComponent",
  component: Description,
};

export default meta;

const Template: Story<IDescriptionProps> = (args) => <Description {...args} />;
export const DescriptionStories = Template.bind({});
