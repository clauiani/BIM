import {
  RegulationSubtitle,
  IRegulationSubtitleProps,
} from "./RegulationSubtitle";
import { Story, Meta } from "@storybook/react";

const meta: Meta = {
  title: "RegulationSubtitleComponent",
  component: RegulationSubtitle,
};

export default meta;

const Template: Story<IRegulationSubtitleProps> = (args) => (
  <RegulationSubtitle {...args} />
);
export const RegulationSubtitleStories = Template.bind({});
