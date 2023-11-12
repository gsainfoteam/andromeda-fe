import { Meta, StoryFn } from "@storybook/react";

import Card from "./Card";

export default {
  title: "atoms/card/Card",
  component: Card,
} as Meta<typeof Card>;

const Template: StoryFn<typeof Card> = (args) => <Card {...args} />;

export const Default = Template.bind({});
Default.args = {
  width: "100px",
  height: "100px",
};

export const HilightedGreen = Template.bind({});
HilightedGreen.args = {
  width: "100px",
  height: "100px",
  variant: "hilightedGreen",
};

export const HilightedPurple = Template.bind({});
HilightedPurple.args = {
  width: "100px",
  height: "100px",
  variant: "hilightedPurple",
};
