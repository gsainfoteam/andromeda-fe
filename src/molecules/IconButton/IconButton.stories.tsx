import { Meta, StoryFn } from "@storybook/react";
import Icons from "src/assets/Icons";
import colorSet from "src/styles/color-set";

import IconButton from "./IconButton";

export default {
  title: "molecules/IconButton/IconButton",
  component: IconButton,
} as Meta<typeof IconButton>;

const Template: StoryFn<typeof IconButton> = (args) => <IconButton {...args} />;

export const Default = Template.bind({});

Default.args = {
  text: "Button",
  icon: <Icons.Filter size="20px" fill={colorSet.titleText} />,
};
