import React from "react";
import { Video, IVideoProps } from "./Video";
import { Story, Meta } from "@storybook/react";

const meta: Meta = {
  title: "VideoComponent",
  component: Video,
};

export default meta;

const Template: Story<IVideoProps> = (args) => <Video {...args} />;
export const VideoStories = Template.bind({});
