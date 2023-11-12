import { Meta, StoryFn } from "@storybook/react";
import IconButton from "./IconButton";
import Icons from "src/assets/Icons";
import colorSet from "src/styles/color-set";

export default {
  title: "molecules/iconButton/IconButton",
  component: IconButton,
} as Meta<typeof IconButton>;

const Template: StoryFn<typeof IconButton> = (args) => <IconButton {...args} />;

export const Default = Template.bind({});

Default.args = {
  text: "Button",
  fontSize: "20px",
  icon: <Icons.Filter size="24px" fill={colorSet.titleText} />,
};
