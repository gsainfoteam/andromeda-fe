import { Meta, StoryFn } from "@storybook/react";
import SelectButton from "./SelectButton";

export default {
  title: "molecules/selectButton/SelectButton",
  component: SelectButton,
} as Meta<typeof SelectButton>;

const Template: StoryFn<typeof SelectButton> = (args) => (
  <SelectButton {...args} />
);

export const Default = Template.bind({});
Default.args = {
  // minWidth: "200px",
  placeholder: "교수명",
  // options: ["Option 1", "Option 2", "Long Option"],
  options: ["홍길동", "수만 판데", "브라이언 도리얼"],
};
