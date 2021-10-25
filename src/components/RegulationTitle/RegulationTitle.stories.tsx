import { RegulationTitle, IRegulationTitleProps } from "./RegulationTitle";
import { Story, Meta } from "@storybook/react";

const meta: Meta = {
  title: "RegulationTitleComponent",
  component: RegulationTitle,
};

export default meta;

const Template: Story<IRegulationTitleProps> = (args) => (
  <RegulationTitle {...args} />
);
export const RegulationTitleStories = Template.bind({});
