import React from "react";
import { PageHeroButtons, IPageHeroButtonsProps } from "./PageHeroButton";
import { Story, Meta } from "@storybook/react";

const meta: Meta = {
  title: "PageHeroButtonComponent",
  component: PageHeroButtons,
};

export default meta;

const Template: Story<IPageHeroButtonsProps> = (args) => (
  <PageHeroButtons {...args} />
);
export const PageHeroButtonsStories = Template.bind({});
