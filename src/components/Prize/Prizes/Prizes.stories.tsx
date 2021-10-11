import React from "react";
import { Prizes, IPrizesProps } from "./Prizes";
import { Story, Meta } from "@storybook/react";

const meta: Meta = {
  title: "PrizesComponent",
  component: Prizes,
};

export default meta;

const Template: Story<IPrizesProps> = (args) => <Prizes {...args} />;
export const PrizesStories = Template.bind({});
