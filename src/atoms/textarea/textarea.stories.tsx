import { Meta, StoryFn } from "@storybook/react";
import React, { ChangeEvent } from "react";

import Textarea from "./Textarea";
//import Text from '../text/Text'

export default {
  title: "atoms/textarea/textarea",
  component: Textarea,
} as Meta<typeof Textarea>;

const Template: StoryFn<typeof Textarea> = (args) => <Textarea {...args} />;

export const Default = Template.bind({});

Default.args = {
  maxLength: 1000,
  placeholder:
    '예) 과제는 주로 X튜어트 책의 연습문제입니다. / "라면 맛있게 먹기" 등의 주제로 A4 2장 레포트 써오기 같은 게 나옵니다.',
};
