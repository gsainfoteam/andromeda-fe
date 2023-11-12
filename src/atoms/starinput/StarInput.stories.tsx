import { Meta, StoryFn } from "@storybook/react";

import StarInput from "./StarInput";

export default {
  title: "atoms/starinput/StarInput",
  component: StarInput,
} as Meta<typeof StarInput>;

const Template: StoryFn<typeof StarInput> = (args) => <StarInput {...args} />;

export const GreenHalf = Template.bind({});
GreenHalf.args = {
  color: "green",
  starsize: 46, //default width & height (width==height)
  ablehalf: true,
};
export const GreenFull = Template.bind({});
GreenFull.args = {
  color: "green",
  starsize: 46, //default width & height (width==height)
  ablehalf: false,
};

export const PurpleHalf = Template.bind({});
PurpleHalf.args = {
  color: "purple",
  starsize: 46, //default width & height (width==height)
  ablehalf: true,
};
export const PurpleFull = Template.bind({});
PurpleFull.args = {
  color: "purple",
  starsize: 46, //default width & height (width==height)
  ablehalf: false,
};
