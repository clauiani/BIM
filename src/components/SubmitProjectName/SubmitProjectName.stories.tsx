import React from "react";
import {
  SubmitProjectName,
  ISubmitProjectNameProps,
} from "./SubmitProjectName";
import { Story, Meta } from "@storybook/react";

const meta: Meta = {
  title: "SubmitProjectNameComponent",
  component: SubmitProjectName,
};

export default meta;

const Template: Story<ISubmitProjectNameProps> = (args) => (
  <SubmitProjectName {...args} />
);
export const SubmitProjectNameStories = Template.bind({});
