import React from "react";
import { Testimonial, ITestimonialProps } from "./Testimonial";
import { Story, Meta } from "@storybook/react";

const meta: Meta = {
  title: "TestimonialComponent",
  component: Testimonial,
};

export default meta;

const Template: Story<ITestimonialProps> = (args) => <Testimonial {...args} />;
export const TestimonialStories = Template.bind({});
