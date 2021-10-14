import { StudentPrize, IStudentPrizeProps } from "./StudentPrize";
import { Story, Meta } from "@storybook/react";

const meta: Meta = {
  title: "StudentPrizComponent",
  component: StudentPrize,
};

export default meta;

const Template: Story<IStudentPrizeProps> = (args) => (
  <StudentPrize {...args} />
);
export const StudentPrizeStories = Template.bind({});
