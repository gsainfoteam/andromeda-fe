import React, { ChangeEvent } from 'react';
import { Meta, StoryFn } from "@storybook/react";

import Textarea from './textarea';
//import Text from '../text/Text'

export default {
  title: 'atoms/textarea/textarea',
  component: Textarea,
} as Meta<typeof Textarea>;


const Template: StoryFn<typeof Textarea> = (args) => (
    <Textarea {...args}/>
)

export const Default = Template.bind({});

Default.args = {
  value: '',
  onChange: (event: ChangeEvent<HTMLTextAreaElement>) => {
    console.log(event.target.value);
  },
  //label: '과제 설명',
  placeholder: '예) 과제는 주로 X튜어트 책의 연습문제입니다. / "라면 맛있게 먹기" 등의 주제로 A4 2장 레포트 써오기 같은 게 나옵니다.',
  /*style*/
  width: 'calc(304px - 30px)',
  height: '138px',
  padding: '13px 15px 8px',
  lineHeight: '23px',
  /*font*/
  fontFamily: 'Noto Sans KR, sans-serif',
  fontWeight: '400',
  fontSize: '16px',
};
