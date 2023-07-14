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
  hilight: false,
};

export const Hilight = Template.bind({});

Hilight.args = {
  width: "100px",
  height: "100px",
  hilight: true,
};
