import { Meta, StoryFn } from "@storybook/react";
import colorSet from "src/styles/color-set";

import Devider from "./Devider";

export default {
  title: "atoms/devider/Devider",
  component: Devider,
} as Meta<typeof Devider>;

const Template: StoryFn<typeof Devider> = (args) => <Devider {...args} />;

export const Default = Template.bind({});
Default.args = {
  // width: "300px",
  borderWidth: "1px",
  color: colorSet.titleText,
};

export const Bold = Template.bind({});
Bold.args = {
  // width: "300px",
  borderWidth: "5px",
  color: colorSet.deselected,
};
