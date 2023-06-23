import { ChangeEvent } from "react";
import { Meta, StoryFn } from "@storybook/react";

import Input from "./Input";

export default {
  title: "atoms/input/Input",
  component: Input,
} as Meta<typeof Input>;

const Template: StoryFn<typeof Input> = (args) => <Input {...args} />;

export const Default = Template.bind({});

Default.args = {
  /* label area */
  label: "강의명",
  /* input area */
  value: "",
  onChange: (event: ChangeEvent<HTMLInputElement>) => {
    console.log(event.target.value);
  },
  placeholder: "컴퓨터 시스템 이론 및 실험",
  width: "305px",
  height: "23px",
  padding: "10px 5px 10px",
  color: "#FF6565",
  fontFamily: "Noto Sans KR, sans-serif",
  fontWeight: "400",
  fontSize: "16px",
};
