import React from "react";
import { Employee, IEmployeeProps } from "./Employee";
import { Story, Meta } from "@storybook/react";

const meta: Meta = {
  title: "EmployeeComponent",
  component: Employee,
};

export default meta;

const Template: Story<IEmployeeProps> = (args) => <Employee {...args} />;
export const EmployeeStories = Template.bind({});
