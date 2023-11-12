import { Meta, StoryFn } from "@storybook/react";

import Star from "./Star";

export default {
  title: "atoms/star/Star",
  component: Star,
  argTypes: {
    STAR_RATE: {
      control: { type: "range", min: 0, max: 5, step: 0.01 },
    },
  },
} as Meta<typeof Star>;

const Template: StoryFn<typeof Star> = (args) => <Star {...args} />;

export const Green = Template.bind({});
Green.args = {
  color: "green",
  STAR_RATE: 3.7, //default STAR_RATE
  starsize: 46, //default width & height (width==height)
};

export const Purple = Template.bind({});
Purple.args = {
  color: "purple",
  STAR_RATE: 3.7, //default STAR_RATE
  starsize: 46, //default width & height (width==height)
};
