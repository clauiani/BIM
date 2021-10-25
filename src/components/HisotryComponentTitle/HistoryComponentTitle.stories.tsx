import {
  HistoryComponentTitle,
  IHistoryComponentTitle,
} from "./HistoryComponentTitle";
import { Story, Meta } from "@storybook/react";

const meta: Meta = {
  title: " HistoryComponentTitleComponent",
  component: HistoryComponentTitle,
};

export default meta;

const Template: Story<IHistoryComponentTitle> = (args) => (
  <HistoryComponentTitle {...args} />
);
export const HistoryComponentTitleStories = Template.bind({});
