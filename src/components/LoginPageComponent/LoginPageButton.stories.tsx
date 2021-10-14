import React from "react";
import { LoginPageButton, ILoginButtonProps } from "./LoginPageButton";
import { Story, Meta } from "@storybook/react";

const meta: Meta = {
  title: "LoginPageButtonComponent",
  component: LoginPageButton,
};

export default meta;

const Template: Story<ILoginButtonProps> = (args) => (
  <LoginPageButton {...args} />
);
export const LoginPageButtonStories = Template.bind({});
