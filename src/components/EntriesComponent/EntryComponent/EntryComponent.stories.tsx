import React from "react";
import { Entry, IEntryProps } from "./EntryComponent";
import { Story, Meta } from "@storybook/react";

const meta: Meta = {
  title: "EntryComponent",
  component: Entry,
};

export default meta;

const Template: Story<IEntryProps> = (args) => <Entry {...args} />;
export const EntryStories = Template.bind({});
