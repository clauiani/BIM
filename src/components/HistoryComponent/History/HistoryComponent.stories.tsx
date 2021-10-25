import {
  HistoryComponent,
  IHistoryComponent,
} from "../History/HistoryComponent";
import { Story, Meta } from "@storybook/react";
const meta: Meta = {
  title: "HistoryComponent",
  component: HistoryComponent,
};

export default meta;

const Template: Story<IHistoryComponent> = (args) => (
  <HistoryComponent {...args} />
);
export const HistoryStories = Template.bind({});
