import React from "react";
import { SectionIntro, ISectionIntroProps } from "./SectionIntro";
import { Story, Meta } from "@storybook/react";

const meta: Meta = {
  title: "SectionIntroComponent",
  component: SectionIntro,
};

export default meta;

const Template: Story<ISectionIntroProps> = (args) => (
  <SectionIntro {...args} />
);
export const PageHeroStories = Template.bind({});
