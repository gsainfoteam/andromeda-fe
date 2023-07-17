import { Meta, StoryFn } from "@storybook/react";

import LectureCard from "./LectureCard";

export default {
  title: "molecules/lectureCard/LectureCard",
  component: LectureCard,
} as Meta<typeof LectureCard>;

const Template: StoryFn<typeof LectureCard> = (args) => (
  <LectureCard {...args} />
);

export const Default = Template.bind({});

Default.args = {
  hilight: false,

  width: "454.67px",
  height: "265px",

  title: "세포·발생생물학 실험",
  departure: "생명과학부",
  professor: "홍길동",
  lectureCode: "BS3112",
};

export const Hilight = Template.bind({});

Hilight.args = {
  hilight: true,

  width: "454.67px",
  height: "265px",

  title: "세포·발생생물학 실험",
  departure: "생명과학부",
  professor: "홍길동",
  lectureCode: "BS3112",
};
