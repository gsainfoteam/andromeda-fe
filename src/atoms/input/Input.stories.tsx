import { Meta, StoryFn } from "@storybook/react";
import { ChangeEvent } from "react";

import Input from "./Input";

export default {
  title: "atoms/input/Input",
  component: Input,
} as Meta<typeof Input>;

const Template: StoryFn<typeof Input> = (args) => <Input {...args} />;

export const Default = Template.bind({});

Default.args = {
  hilight: false,

  /* label area */
  label: "강의명",

  /* input area */
  value: "",
  onChange: (event: ChangeEvent<HTMLInputElement>) => {
    console.log(event.target.value);
  },
  placeholder: "placeholder test",
};

export const Hilight = Template.bind({});

Hilight.args = {
  hilight: true,
  /* label area */
  label: "강의명",

  /* input area */
  value: "",
  onChange: (event: ChangeEvent<HTMLInputElement>) => {
    console.log(event.target.value);
  },
  placeholder: "placeholder test",
};
