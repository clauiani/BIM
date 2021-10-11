import React from "react";
import { HeaderButton, IHeaderButtonProps } from "./HeaderButton";
import { Story, Meta } from "@storybook/react";

const meta: Meta = {
  title: "HeaderButtonComponent",
  component: HeaderButton,
};

export default meta;

const Template: Story<IHeaderButtonProps> = (args) => (
  <HeaderButton {...args} />
);
export const HeaderButtonStories = Template.bind({});
