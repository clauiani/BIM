import React from "react";
import { PageHero, IPageHeroProps } from "./PageHero";
import { Story, Meta } from "@storybook/react";

const meta: Meta = {
  title: "PageHeroComponent",
  component: PageHero,
};

export default meta;

const Template: Story<IPageHeroProps> = (args) => <PageHero {...args} />;
export const PageHeroStories = Template.bind({});
