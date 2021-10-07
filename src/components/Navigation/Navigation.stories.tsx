import React from "react";
import { Navigation, INavigationProps } from "./Navigation";
import { Story, Meta } from "@storybook/react";

const meta: Meta = {
  title: "NavigationComponent",
  component: Navigation,
};

export default meta;

const Template: Story<INavigationProps> = (args) => <Navigation {...args} />;
export const NavigationStories = Template.bind({});
