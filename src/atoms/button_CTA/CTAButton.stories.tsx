import { Meta, StoryFn } from "@storybook/react";

import CTAButton from "./CTAButton";

export default {
  title: "atoms/CTAButton/CTAButton",
  component: CTAButton,
} as Meta<typeof CTAButton>;

const Template: StoryFn<typeof CTAButton> = (args) => <CTAButton {...args} />;

export const Default = Template.bind({});

Default.args = {
  children: "Button",
};

export const Outlined = Template.bind({});
Outlined.args = {
  children: "Button",
  variant: "outlined",
};

export const Deselected = Template.bind({});
Deselected.args = {
  children: "Button",
  variant: "deselected",
};
