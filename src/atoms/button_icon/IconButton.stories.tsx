import { Meta, StoryFn } from "@storybook/react";

import IconButton from "./IconButton";

export default {
  title: "atoms/IconButton/IconButton",
  component: IconButton,
} as Meta<typeof IconButton>;

const Template: StoryFn<typeof IconButton> = (args) => <IconButton {...args} />;

export const Default = Template.bind({});

Default.args = {
  text: "Button",
  fontSize: "20px",
  width: "80px",
  height: "30px",
};
