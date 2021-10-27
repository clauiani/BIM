import {
  RegulationParagraph,
  IRegulationParagraphProps,
} from "./RegulationParagraph";
import { Story, Meta } from "@storybook/react";

const meta: Meta = {
  title: "RegulationParagraphComponent",
  component: RegulationParagraph,
};

export default meta;

const Template: Story<IRegulationParagraphProps> = (args) => (
  <RegulationParagraph {...args} />
);
export const RegulationParagraphStories = Template.bind({});
