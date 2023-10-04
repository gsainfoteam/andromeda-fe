import { Meta, StoryFn } from "@storybook/react";

import Divider from "./Divider";

export default {
  title: "atoms/divider/Divider",
  component: Divider,
} as Meta<typeof Divider>;

const Template: StoryFn<typeof Divider> = (args) => <Divider {...args} />;

export const Default = Template.bind({});
Default.args = {
  // width: "300px",
};

export const Bold = Template.bind({});
Bold.args = {
  // width: "300px",
  variant: "bold",
};
